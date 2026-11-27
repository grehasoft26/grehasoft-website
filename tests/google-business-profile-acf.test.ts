// Google Business Profile ACF mapper tests. Run: npx tsx --test tests/google-business-profile-acf.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { GBP_ICONS, mapGoogleBusinessProfileAcf } from '../lib/adapters/google-business-profile-acf';
import { googleBusinessProfileContent } from '../lib/content/google-business-profile';
import { buildGoogleBusinessProfileJsonLd } from '../lib/google-business-profile-schema';

const contentJson = JSON.parse(fs.readFileSync('wordpress/content/google-business-profile-page-content.json', 'utf8'));
const groupJson = JSON.parse(fs.readFileSync('wordpress/acf-json/group_google_business_profile_service.json', 'utf8'));

/** A fresh copy of the import content's acf object, optionally edited. */
function acf(edit?: (a: any) => void) {
  const copy = structuredClone(contentJson.acf);
  edit?.(copy);
  return copy;
}

/**
 * The import content as the WordPress REST API returns it: textareas with \r\n line
 * endings, unset selects as "", plus the generic schema_json field that the route ignores.
 */
function wpResponse() {
  const copy = JSON.parse(JSON.stringify(contentJson.acf).replace(/\\n/g, '\\r\\n').replace(/null/g, '""'));
  return { ...copy, schema_json: '<script type="application/ld+json">{}</script>' };
}

/** Runs the mapper with console.warn captured. */
function map(input: unknown) {
  const warnings: string[] = [];
  const original = console.warn;
  console.warn = (message: string) => warnings.push(String(message));
  try {
    return { result: mapGoogleBusinessProfileAcf(input), warnings };
  } finally {
    console.warn = original;
  }
}

function assertFallback(input: unknown, fieldPattern: RegExp) {
  const { result, warnings } = map(input);
  assert.equal(result, null);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /^\[Google Business Profile ACF\] /);
  assert.match(warnings[0], fieldPattern);
  assert.match(warnings[0], /using local content\.$/);
}

/* ------------------------------ round trip ------------------------------ */

test('import content maps back to the local content exactly (round trip)', () => {
  const { result, warnings } = map(acf());
  assert.deepEqual(warnings, []);
  assert.deepEqual(result, googleBusinessProfileContent);
});

test('a WordPress-style REST response (\\r\\n, "" selects, schema_json) maps to the same content', () => {
  const { result, warnings } = map(wpResponse());
  assert.deepEqual(warnings, []);
  assert.deepEqual(result, googleBusinessProfileContent);
});

test('code-owned values come from the local content, never from ACF', () => {
  const { result } = map(acf());
  assert.ok(result);
  const local = googleBusinessProfileContent;
  assert.equal(result.seo.canonical, 'https://grehasoft.com/google-business-profile');
  assert.equal(result.seo.service.providerId, 'https://grehasoft.com/#localbusiness');
  assert.equal(result.seo.service.providerName, local.seo.service.providerName);
  assert.equal(result.seo.service.providerUrl, local.seo.service.providerUrl);
  assert.equal(result.services.id, 'services');
  assert.equal(result.enquiry.id, 'enquiry');
  assert.equal(result.enquiry.formId, 'enquiry-form');
  assert.equal(result.enquiry.form, local.enquiry.form, 'form config comes from code');
  assert.equal(result.enquiry.form.subjectPrefix, 'Google Business Profile audit enquiry');
  assert.equal(result.enquiry.form.market, undefined);
  assert.equal(result.enquiry.form.goal, undefined);
});

test('editing ACF values changes the rendered content', () => {
  const { result } = map(
    acf((a) => {
      a.hero.title = 'Google Business Profile Optimization in Kerala';
      a.hero.title_accent = 'Kerala';
      a.seo.title = 'Edited title | Grehasoft';
      a.seo.description = 'Edited description.';
      a.visibility.paragraph_2 = 'Edited second paragraph.';
    }),
  );
  assert.ok(result);
  assert.equal(result.hero.title, 'Google Business Profile Optimization in Kerala');
  assert.equal(result.hero.titleAccent, 'Kerala');
  assert.equal(result.seo.title, 'Edited title | Grehasoft');
  assert.equal(result.seo.description, 'Edited description.');
  assert.equal(result.visibility.paragraphs[1], 'Edited second paragraph.');
});

/* ------------------------------ field group ------------------------------ */

test('import content keys match the field group definition', () => {
  const fromGroup = (fields: any[], prefix: string): string[] =>
    fields.flatMap((f) =>
      f.type === 'tab' ? [] : f.type === 'group' ? [`${prefix}${f.name}`, ...fromGroup(f.sub_fields, `${prefix}${f.name}.`)] : [`${prefix}${f.name}`],
    );
  const fromContent = (value: Record<string, unknown>, prefix: string): string[] =>
    Object.entries(value).flatMap(([key, v]) =>
      v && typeof v === 'object' ? [`${prefix}${key}`, ...fromContent(v as Record<string, unknown>, `${prefix}${key}.`)] : [`${prefix}${key}`],
    );
  assert.deepEqual(fromContent(contentJson.acf, '').sort(), fromGroup(groupJson.fields, '').sort());
});

test('field group is ACF Free only, REST-enabled and not attached to a page yet', () => {
  const types = new Set<string>();
  const keys: string[] = [];
  const walk = (fields: any[]) =>
    fields.forEach((f) => {
      types.add(f.type);
      keys.push(f.key);
      if (f.sub_fields) walk(f.sub_fields);
    });
  walk(groupJson.fields);
  assert.deepEqual([...types].sort(), ['group', 'select', 'tab', 'text', 'textarea']);
  assert.equal(new Set(keys).size, keys.length, 'field keys are unique');
  assert.ok(keys.every((k) => k.startsWith('field_gbp_')));
  assert.equal(groupJson.key, 'group_google_business_profile_service');
  assert.equal(groupJson.show_in_rest, 1);
  assert.deepEqual(groupJson.location, [[{ param: 'page', operator: '==', value: '0' }]]);
  assert.doesNotMatch(JSON.stringify(groupJson), /schema_json|canonical|"repeater"|flexible_content/);
});

test('the field group has one tab per section, in page order, plus SEO', () => {
  const tabs = groupJson.fields.filter((f: any) => f.type === 'tab').map((f: any) => f.label);
  assert.deepEqual(tabs, [
    'Hero',
    'Local visibility',
    'Services',
    'Process',
    'Eligible businesses',
    'Why choose',
    'SEO strategy',
    'FAQ',
    'Final CTA',
    'SEO',
  ]);
  const groups = groupJson.fields.filter((f: any) => f.type === 'group').map((f: any) => f.name);
  assert.deepEqual(groups, ['hero', 'visibility', 'services', 'process', 'eligible', 'why_choose', 'seo_strategy', 'faq', 'enquiry', 'seo']);
});

test('icon and area-type select choices mirror the code', () => {
  const selects: any[] = [];
  const walk = (fields: any[]) => fields.forEach((f) => (f.type === 'select' ? selects.push(f) : f.sub_fields && walk(f.sub_fields)));
  walk(groupJson.fields);
  const icons = selects.filter((f) => f.name === 'icon');
  const areas = selects.filter((f) => f.name === 'type');
  assert.ok(icons.length > 0 && areas.length > 0);
  for (const f of icons) assert.deepEqual(Object.keys(f.choices), [...GBP_ICONS]);
  for (const f of areas) assert.deepEqual(Object.keys(f.choices), ['City', 'AdministrativeArea', 'Country', 'Text']);

  // Every icon the select offers has a rendered icon component.
  const iconMap = fs.readFileSync('components/service/google-business-profile/icons.ts', 'utf8');
  for (const icon of GBP_ICONS) assert.match(iconMap, new RegExp(`['"]?${icon}['"]?:`));
});

test('JSON-LD provider, canonical and the form are not editable in ACF', () => {
  const keys: string[] = [];
  const walk = (value: Record<string, unknown>) =>
    Object.entries(value).forEach(([key, v]) => {
      keys.push(key);
      if (v && typeof v === 'object') walk(v as Record<string, unknown>);
    });
  walk(contentJson);
  for (const forbidden of ['schema_json', 'canonical', 'provider', 'provider_id', 'provider_name', 'provider_url', 'url', 'path', 'og_url', 'form', 'anchor_id', 'id']) {
    assert.ok(!keys.includes(forbidden), `no "${forbidden}" field`);
  }
});

/* --------------------------- FAQ and schema sync --------------------------- */

test('FAQPage schema follows the WordPress FAQ entries exactly', () => {
  const { result } = map(
    acf((a) => {
      a.faq.item_2.answer = 'Edited answer in WordPress.';
      a.faq.item_9 = { question: 'A new WordPress question?', answer: 'A new WordPress answer.' };
    }),
  );
  assert.ok(result);
  const graph = buildGoogleBusinessProfileJsonLd(result)['@graph'] as Array<Record<string, any>>;
  const faqPage = graph.find((n) => n['@type'] === 'FAQPage')!;
  assert.deepEqual(
    faqPage.mainEntity.map((q: any) => ({ question: q.name, answer: q.acceptedAnswer.text })),
    result.faq.items,
  );
  assert.equal(result.faq.items.length, 9);
  assert.equal(faqPage.mainEntity[1].acceptedAnswer.text, 'Edited answer in WordPress.');
});

test('Service schema follows the WordPress SEO tab; canonical and provider stay fixed', () => {
  const { result } = map(
    acf((a) => {
      a.seo.service.name = 'Edited service name';
      a.seo.service.area_5 = { type: 'City', name: 'Thrissur' };
      a.seo.breadcrumb_label = 'GBP Optimization';
    }),
  );
  assert.ok(result);
  const graph = buildGoogleBusinessProfileJsonLd(result)['@graph'] as Array<Record<string, any>>;
  const service = graph.find((n) => n['@type'] === 'Service')!;
  const breadcrumb = graph.find((n) => n['@type'] === 'BreadcrumbList')!;
  assert.equal(service.name, 'Edited service name');
  assert.equal(service.url, 'https://grehasoft.com/google-business-profile');
  assert.equal(service['@id'], 'https://grehasoft.com/google-business-profile#service');
  assert.equal(service.provider['@id'], 'https://grehasoft.com/#localbusiness');
  assert.deepEqual(service.areaServed, [
    { '@type': 'City', name: 'Kochi' },
    { '@type': 'AdministrativeArea', name: 'Kerala' },
    { '@type': 'Country', name: 'India' },
    'International markets',
    { '@type': 'City', name: 'Thrissur' },
  ]);
  assert.equal(breadcrumb.itemListElement[1].name, 'GBP Optimization');
  assert.doesNotMatch(JSON.stringify(graph), /google-business-profile\/["#]/, 'no trailing slash');
});

test('areaServed "Text" entries become plain strings', () => {
  const { result } = map(acf((a) => (a.seo.service.area_1 = { type: 'Text', name: 'Gulf countries' })));
  assert.equal(result?.seo.service.areaServed[0], 'Gulf countries');
});

/* ------------------------------ fallbacks ------------------------------ */

test('empty, missing or non-object ACF data falls back', () => {
  for (const input of [[], null, undefined, false, 'text']) assertFallback(input, /acf is empty/);
});

test('a missing section group falls back', () => {
  for (const section of ['hero', 'visibility', 'services', 'process', 'eligible', 'why_choose', 'seo_strategy', 'faq', 'enquiry', 'seo']) {
    assertFallback(acf((a) => delete a[section]), new RegExp(`acf\\.${section} is missing`));
  }
});

test('a missing required text field falls back', () => {
  assertFallback(acf((a) => (a.hero.title = '   ')), /acf\.hero\.title/);
  assertFallback(acf((a) => (a.visibility.paragraph_2 = '')), /acf\.visibility\.paragraph_2/);
  assertFallback(acf((a) => (a.seo_strategy.paragraph_1 = '')), /acf\.seo_strategy\.paragraph_1/);
  assertFallback(acf((a) => (a.seo.description = '')), /acf\.seo\.description/);
});

test('an unknown icon or area type falls back', () => {
  assertFallback(acf((a) => (a.services.item_1.icon = 'rocket')), /acf\.services\.item_1\.icon/);
  assertFallback(acf((a) => (a.seo.service.area_1.type = 'Planet')), /acf\.seo\.service\.area_1\.type/);
});

test('a partly filled slot falls back', () => {
  assertFallback(acf((a) => (a.faq.item_9.question = 'Only a question?')), /acf\.faq\.item_9/);
  assertFallback(acf((a) => (a.eligible.item_6 = { icon: 'store', title: 'Title only', description: '' })), /acf\.eligible\.item_6/);
});

test('every section needs at least one filled slot', () => {
  assertFallback(
    acf((a) => {
      for (const key of Object.keys(a.process)) if (key.startsWith('step_')) a.process[key] = { title: '', description: '' };
    }),
    /acf\.process\.step_\* has no filled entries/,
  );
});

test('the hero highlight must be part of the heading; empty means no highlight', () => {
  assertFallback(acf((a) => (a.hero.title_accent = 'Thrissur')), /acf\.hero\.title_accent/);
  const { result } = map(acf((a) => (a.hero.title_accent = '')));
  assert.equal(result?.hero.titleAccent, '');
});

test('the hero profile preview needs exactly three labels', () => {
  assertFallback(acf((a) => (a.hero.visual_labels = 'Calls\nWebsite clicks')), /acf\.hero\.visual_labels/);
});

test('unsafe links fall back', () => {
  assertFallback(acf((a) => (a.hero.primary_cta.href = 'javascript:alert(1)')), /acf\.hero\.primary_cta\.href/);
  assertFallback(acf((a) => (a.enquiry.secondary_cta.href = '//evil.example')), /acf\.enquiry\.secondary_cta\.href/);
  assertFallback(
    acf((a) => (a.seo_strategy.paragraph_3 = 'Explore our [SEO services](javascript:void(0)).')),
    /acf\.seo_strategy\.paragraph_3/,
  );
});

test('links to unknown in-page sections fall back', () => {
  assertFallback(acf((a) => (a.hero.secondary_cta.href = '#pricing')), /acf\.hero\.secondary_cta\.href.*#pricing/);
  assertFallback(acf((a) => (a.seo_strategy.paragraph_3 = 'See [our plans](#plans).')), /acf\.seo_strategy\.paragraph_3/);
});

test('allowed links pass: site routes, page anchors, https, tel', () => {
  const { result, warnings } = map(
    acf((a) => {
      a.hero.secondary_cta.href = '#services';
      a.enquiry.secondary_cta.href = 'https://grehasoft.com/contact';
      a.seo_strategy.paragraph_4 = 'Call [our team](tel:+918921540183) or read [our blog](/blog).';
    }),
  );
  assert.deepEqual(warnings, []);
  assert.equal(result?.seoStrategy.paragraphs.length, 4);
});

/* -------------------------------- slots -------------------------------- */

test('empty slots are skipped and filled spare slots are added in order', () => {
  const { result } = map(
    acf((a) => {
      a.services.item_10 = { icon: 'globe', title: 'New service', description: 'New description.' };
      a.why_choose.point_6 = { icon: 'eye', title: 'New point', description: 'New description.' };
      a.visibility.paragraph_3 = '';
    }),
  );
  assert.ok(result);
  assert.equal(result.services.items.length, 9);
  assert.equal(result.services.items[8].title, 'New service');
  assert.equal(result.whyChoose.points.length, 6);
  assert.equal(result.visibility.paragraphs.length, 2, 'the optional callout paragraph can be left empty');
});

test('an empty select in an otherwise empty slot does not count as content', () => {
  const { result } = map(acf((a) => (a.eligible.item_10.icon = 'store')));
  assert.ok(result);
  assert.equal(result.eligible.items.length, googleBusinessProfileContent.eligible.items.length);
});

/* ------------------------------ route wiring ------------------------------ */

test('the route fetches the WordPress page, maps it and falls back to local content', () => {
  const route = fs.readFileSync('app/google-business-profile/page.tsx', 'utf8');
  assert.match(route, /getPage\(PAGE_SLUG\)/);
  assert.match(route, /const PAGE_SLUG = 'google-business-profile';/);
  assert.match(route, /mapGoogleBusinessProfileAcf\(acf\) \?\? googleBusinessProfileContent/);
  assert.match(route, /cache\(async/, 'one request shared by metadata and page');
  assert.match(route, /^export const revalidate = 60;$/m, 'ACF edits refresh like Lead Generation, not once a year');
  assert.match(route, /export async function generateMetadata/);
  assert.match(route, /buildGoogleBusinessProfileJsonLd\(content\)/, 'schema built from the same content as the page');
});
