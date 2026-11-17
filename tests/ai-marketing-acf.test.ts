// AI Marketing ACF mapper tests. Run: npx tsx --test tests/ai-marketing-acf.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { mapAiMarketingAcf } from '../lib/adapters/ai-marketing-acf';
import { aiMarketingContent } from '../lib/content/ai-marketing';

const contentJson = JSON.parse(fs.readFileSync('wordpress/content/ai-marketing-page-content.json', 'utf8'));
const groupJson = JSON.parse(fs.readFileSync('wordpress/acf-json/group_ai_marketing_service.json', 'utf8'));

/** A fresh copy of the import content's acf object, optionally edited. */
function acf(edit?: (a: any) => void) {
  const copy = structuredClone(contentJson.acf);
  edit?.(copy);
  return copy;
}

/** Runs the mapper with console.warn captured. */
function map(input: unknown) {
  const warnings: string[] = [];
  const original = console.warn;
  console.warn = (message: string) => warnings.push(String(message));
  try {
    return { result: mapAiMarketingAcf(input), warnings };
  } finally {
    console.warn = original;
  }
}

function assertFallback(input: unknown, fieldPattern: RegExp) {
  const { result, warnings } = map(input);
  assert.equal(result, null);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /^\[AI marketing ACF\] /);
  assert.match(warnings[0], fieldPattern);
}

/* ------------------------------ round trip ------------------------------ */

test('import content maps back to the local content exactly (round trip)', () => {
  const { result, warnings } = map(acf());
  assert.deepEqual(warnings, []);
  assert.deepEqual(result, aiMarketingContent);
});

test('round trip keeps the enquiry form, Main Goal options, subject prefix and source label', () => {
  const { result } = map(acf());
  assert.ok(result);
  assert.equal(result.enquiry.form, aiMarketingContent.enquiry.form, 'form config comes from code');
  assert.deepEqual(result.enquiry.form.goal.options, [
    'AI Search Visibility (AEO & GEO)',
    'AI Content Creation',
    'AI Video Creation',
    'AI Social Media & Ad Creative',
    'Connected Marketing',
    'Other / General Enquiry',
  ]);
  assert.equal(result.enquiry.form.subjectPrefix, 'AI marketing enquiry');
  assert.equal(result.enquiry.form.sourceLabel, 'AI marketing services page');
  assert.equal(result.video.asset, undefined, 'no video is invented');
});

test('import content keys match the field group definition', () => {
  // Every name in the field group (except tabs) appears in the content JSON and vice versa.
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
  assert.deepEqual([...types].sort(), ['group', 'select', 'tab', 'text', 'textarea', 'url']);
  assert.equal(new Set(keys).size, keys.length, 'field keys are unique');
  assert.ok(keys.every((k) => k.startsWith('field_ams_')));
  assert.equal(groupJson.key, 'group_ai_marketing_service');
  assert.equal(groupJson.show_in_rest, 1);
  assert.deepEqual(groupJson.location, [[{ param: 'page', operator: '==', value: '0' }]]);
  assert.doesNotMatch(JSON.stringify(groupJson), /schema_json|canonical|"repeater"|flexible_content/);
});

test('JSON-LD and canonical values are not editable in ACF', () => {
  const keys: string[] = [];
  const walk = (value: Record<string, unknown>) =>
    Object.entries(value).forEach(([key, v]) => {
      keys.push(key);
      if (v && typeof v === 'object') walk(v as Record<string, unknown>);
    });
  walk(contentJson);
  for (const forbidden of ['schema_json', 'canonical', 'provider', 'provider_id', 'url', 'path', 'og_url', 'form', 'goal']) {
    assert.ok(!keys.includes(forbidden), `no "${forbidden}" field`);
  }
});

/* ------------------------------ fallbacks ------------------------------ */

test('empty, missing or non-object ACF data falls back', () => {
  for (const input of [[], null, undefined, false, 'text']) assertFallback(input, /acf is empty/);
});

test('a missing section group falls back', () => {
  assertFallback(acf((a) => delete a.faq), /acf\.faq/);
});

test('a missing required text field falls back', () => {
  assertFallback(acf((a) => (a.hero.title = '   ')), /acf\.hero\.title/);
});

test('an unknown icon falls back', () => {
  assertFallback(acf((a) => (a.discovery.card_1.icon = 'rocket')), /acf\.discovery\.card_1\.icon/);
});

test('a partly filled slot falls back', () => {
  assertFallback(acf((a) => (a.faq.item_8.question = 'Only a question?')), /acf\.faq\.item_8/);
});

test('unsafe links fall back', () => {
  assertFallback(acf((a) => (a.hero.primary_cta.href = 'javascript:alert(1)')), /acf\.hero\.primary_cta\.href/);
  assertFallback(acf((a) => (a.enquiry.secondary_cta.href = '//evil.example')), /acf\.enquiry\.secondary_cta\.href/);
  assertFallback(acf((a) => (a.connected.item_1.follow_up = 'See our [SEO services](javascript:void(0)).')), /acf\.connected\.item_1\.follow_up/);
});

test('links to unknown in-page sections fall back', () => {
  assertFallback(acf((a) => (a.video.cta.href = '#pricing')), /acf\.video\.cta\.href.*#pricing/);
  assertFallback(acf((a) => (a.connected.item_2.follow_up = 'See [our plans](#plans).')), /acf\.connected\.item_2\.follow_up/);
});

test('an unknown area type falls back', () => {
  assertFallback(acf((a) => (a.seo.service.area_1.type = 'Planet')), /acf\.seo\.service\.area_1\.type/);
});

/* -------------------------------- slots -------------------------------- */

test('empty slots are skipped and filled spare slots are added', () => {
  const { result } = map(
    acf((a) => {
      a.faq.item_8 = { question: 'New question?', answer: 'New answer.' };
      a.why_choose.point_5 = { icon: 'target', title: 'New point', description: 'New description.' };
    }),
  );
  assert.ok(result);
  assert.equal(result.faq.items.length, 8);
  assert.deepEqual(result.faq.items[7], { question: 'New question?', answer: 'New answer.' });
  assert.equal(result.whyChoose.points.length, 5);
});

test('an empty select in an otherwise empty slot does not count as content', () => {
  const { result } = map(acf((a) => (a.discovery.card_8.icon = 'search')));
  assert.ok(result);
  assert.equal(result.discovery.cover.length, aiMarketingContent.discovery.cover.length);
});

/* -------------------------------- video -------------------------------- */

const VIDEO = 'https://cms.grehasoft.com/wp-content/uploads/2026/11/ai-marketing.mp4';

test('a complete video asset is mapped', () => {
  const { result, warnings } = map(
    acf((a) => {
      a.video.asset = {
        video_url: VIDEO,
        video_type: 'video/mp4',
        video_title: 'AI marketing at Grehasoft',
        poster_url: 'https://cms.grehasoft.com/wp-content/uploads/2026/11/poster.jpg',
        captions_url: 'https://cms.grehasoft.com/wp-content/uploads/2026/11/captions.vtt',
        captions_label: 'English',
        captions_lang: 'en',
      };
    }),
  );
  assert.deepEqual(warnings, []);
  assert.deepEqual(result?.video.asset, {
    src: VIDEO,
    type: 'video/mp4',
    title: 'AI marketing at Grehasoft',
    poster: 'https://cms.grehasoft.com/wp-content/uploads/2026/11/poster.jpg',
    captions: { src: 'https://cms.grehasoft.com/wp-content/uploads/2026/11/captions.vtt', label: 'English', srcLang: 'en' },
  });
});

test('a video without poster or captions is mapped', () => {
  const { result } = map(
    acf((a) => Object.assign(a.video.asset, { video_url: VIDEO, video_type: 'video/webm', video_title: 'Demo' })),
  );
  assert.deepEqual(result?.video.asset, { src: VIDEO, type: 'video/webm', title: 'Demo' });
});

test('an empty asset (or only a format chosen) means no video', () => {
  for (const edit of [(a: any) => delete a.video.asset, (a: any) => (a.video.asset.video_type = 'video/mp4')]) {
    const { result, warnings } = map(acf(edit));
    assert.deepEqual(warnings, []);
    assert.ok(result);
    assert.equal('asset' in result.video, false);
  }
});

test('invalid video assets fall back', () => {
  const asset = (extra: object) => (a: any) => Object.assign(a.video.asset, { video_url: VIDEO, video_type: 'video/mp4', video_title: 'Demo' }, extra);
  assertFallback(acf(asset({ video_url: 'http://cms.grehasoft.com/a.mp4' })), /video_url.*https/);
  assertFallback(acf(asset({ video_url: 'https://videos.example.com/a.mp4' })), /video_url/);
  assertFallback(acf(asset({ video_url: 'not a url' })), /video_url/);
  assertFallback(acf(asset({ video_type: null })), /video_type/);
  assertFallback(acf(asset({ video_title: '' })), /video_title/);
  assertFallback(acf(asset({ poster_url: 'https://evil.example/poster.jpg' })), /poster_url/);
  assertFallback(acf(asset({ captions_url: 'https://cms.grehasoft.com/c.vtt' })), /captions/);
  assertFallback(acf(asset({ captions_url: 'https://cms.grehasoft.com/c.vtt', captions_label: 'English', captions_lang: 'English' })), /captions_lang/);
  assertFallback(acf((a) => (a.video.asset.video_title = 'Title without a file')), /video_url/);
});
