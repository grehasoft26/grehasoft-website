// AI Marketing page tests. Run: npx tsx --test tests/ai-marketing.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { aiMarketingContent as content } from '../lib/content/ai-marketing';
import { leadGenerationContent } from '../lib/content/lead-generation';
import { buildAiMarketingJsonLd } from '../lib/ai-marketing-schema';
import { buildPageMetadata } from '../lib/seo';
import type { InlineLink, RichText } from '../types/lead-generation';

// Routes linked from the page; each was checked on staging (HTTP 200) before linking.
const KNOWN_ROUTES = ['/', '/seo', '/social-media-marketing', '/search-engine-marketing', '/facebook', '/digital-marketing', '/privacy'];

const links = (value: RichText) => value.filter((s): s is InlineLink => typeof s !== 'string');

test('template renders the ten document sections in order', () => {
  const source = fs.readFileSync('components/templates/AiMarketingTemplate.tsx', 'utf8');
  const order = [
    '<AiHero', '<DiscoverySection', '<SearchVisibilitySection', '<ContentCreationSection', '<VideoSection',
    '<ConnectedSection', '<AiProcessSection', '<AiWhyChooseSection', '<AiFaqSection', '<EnquirySection',
  ].map((tag) => source.indexOf(tag));
  assert.ok(order.every((pos) => pos > 0), 'every section is rendered');
  assert.deepEqual([...order].sort((a, b) => a - b), order, 'sections are in document order');
});

test('content covers every heading in the document', () => {
  assert.equal(content.hero.title, 'AI Marketing Service Agency in Kochi, Kerala — Rank in Search & AI Engines');
  assert.equal(content.discovery.cover.length, 5);
  assert.deepEqual(content.searchVisibility.items.map((i) => i.title), [
    'Answer Engine Optimization (AEO)',
    'Generative Engine Optimization (GEO)',
    'Generative Intelligence Optimization (GIO) and AI Optimization (AIO)',
    'Entity & Brand Authority Building',
  ]);
  assert.equal(content.contentCreation.items.length, 3);
  assert.equal(content.video.items.length, 3);
  assert.equal(content.connected.items.length, 3);
  assert.equal(content.process.steps.length, 5);
  assert.equal(content.whyChoose.points.length, 4);
  assert.equal(content.faq.items.length, 7);
});

test('editor notes and the document’s chatgpt.com links are not published', () => {
  const text = JSON.stringify(content);
  assert.doesNotMatch(text, /Can give|whatApp|chatgpt\.com/i);
});

test('CTAs point to the enquiry form, in-page anchors or verified routes', () => {
  const hrefs = [
    content.hero.primaryCta.href, content.hero.secondaryCta.href, content.hero.contact.href,
    content.video.cta.href, content.enquiry.primaryCta.href, content.enquiry.secondaryCta.href,
    ...content.connected.items.flatMap((item) => links(item.followUp).map((l) => l.href)),
  ];
  const anchors = new Set([`#${content.enquiry.formId}`, `#${content.searchVisibility.id}`]);

  for (const href of hrefs) {
    assert.ok(anchors.has(href) || KNOWN_ROUTES.includes(href), `unexpected link ${href}`);
  }
  assert.equal(content.hero.primaryCta.href, '#enquiry-form');
  assert.equal(content.hero.contact.href, '#enquiry-form');
  assert.equal(content.video.cta.href, '#enquiry-form');
  assert.equal(content.enquiry.primaryCta.href, '#enquiry-form');
  assert.equal(content.hero.secondaryCta.href, '#search-visibility');
  assert.equal(content.enquiry.secondaryCta.href, '/digital-marketing');
  assert.deepEqual(
    content.connected.items.flatMap((item) => links(item.followUp).map((l) => `${l.text} -> ${l.href}`)),
    [
      'SEO services -> /seo',
      'Social Media Marketing services -> /social-media-marketing',
      'Google Ads services -> /search-engine-marketing',
      'Meta Ads services -> /facebook',
    ],
  );
});

test('metadata uses the approved title and description with the production canonical', () => {
  const m = buildPageMetadata({ path: content.seo.path, fallbackTitle: content.seo.title, fallbackDescription: content.seo.description });
  assert.equal(m.title, 'AI Marketing Agency in Kochi | AEO & GEO | Grehasoft');
  assert.equal(
    m.description,
    'Grehasoft provides AI marketing services in Kochi, Kerala, helping B2B and B2C brands improve visibility across ChatGPT, Google AI Overviews and search.',
  );
  assert.equal(m.alternates?.canonical, 'https://grehasoft.com/ai-marketing-service-agency');
  assert.equal((m.openGraph as any).url, 'https://grehasoft.com/ai-marketing-service-agency');
  assert.equal((m.openGraph as any).type, 'website');
  assert.equal('robots' in m, false, 'robots stay owned by the root layout');
});

test('JSON-LD: Service, FAQPage and BreadcrumbList with the Lead Generation provider', () => {
  const ld = buildAiMarketingJsonLd(content);
  const nodes = ld['@graph'] as any[];
  assert.deepEqual(nodes.map((n) => n['@type']), ['BreadcrumbList', 'Service', 'FAQPage']);

  const service = nodes[1];
  assert.equal(service['@id'], 'https://grehasoft.com/ai-marketing-service-agency#service');
  assert.equal(service.url, 'https://grehasoft.com/ai-marketing-service-agency');
  assert.equal(service.serviceType.length, 6);
  assert.equal(service.provider['@id'], leadGenerationContent.seo.service.providerId);
  assert.equal(service.provider['@id'], 'https://grehasoft.com/#/schema/organization/1');
  assert.deepEqual(service.areaServed.map((a: any) => `${a['@type']}:${a.name}`), ['City:Kochi', 'AdministrativeArea:Kerala', 'Country:India']);

  const faq = nodes[2];
  assert.equal(faq.mainEntity.length, 7);
  faq.mainEntity.forEach((q: any, i: number) => {
    assert.equal(q.name, content.faq.items[i].question);
    assert.equal(q.acceptedAnswer.text, content.faq.items[i].answer);
  });

  assert.deepEqual(nodes[0].itemListElement, [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://grehasoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'AI Marketing Services', item: 'https://grehasoft.com/ai-marketing-service-agency' },
  ]);

  const text = JSON.stringify(ld);
  assert.doesNotMatch(text, /hostingersite|cms\.grehasoft|chatgpt\.com/);
});

test('enquiry form stays compatible with the shared form and /contact payload', () => {
  const form = content.enquiry.form;
  const lead = leadGenerationContent.enquiry.form;
  assert.deepEqual(Object.keys(form).sort(), Object.keys(lead).sort());
  assert.equal(content.enquiry.formId, 'enquiry-form');
  assert.deepEqual(form.goal.options, [
    'AI Search Visibility (AEO & GEO)',
    'AI Content Creation',
    'AI Video Creation',
    'AI Social Media & Ad Creative',
    'Connected Marketing',
    'Other / General Enquiry',
  ]);
  assert.equal(form.subjectPrefix, 'AI marketing enquiry');
  assert.equal(form.sourceLabel, 'AI marketing services page');
  // Lead Generation content is untouched.
  assert.equal(lead.subjectPrefix, 'Lead generation enquiry');
});

test('sitemaps list the new route', () => {
  assert.match(fs.readFileSync('app/sitemap.ts', 'utf8'), /'\/ai-marketing-service-agency'/);
  assert.match(fs.readFileSync('app/sitemap/page.tsx', 'utf8'), /href: '\/ai-marketing-service-agency'/);
});
