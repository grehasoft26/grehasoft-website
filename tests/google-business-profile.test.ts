// Google Business Profile page tests. Run: npx tsx --test tests/google-business-profile.test.ts
//
// The EXPECTED_* blocks below are an independent transcription of the content document
// ("Google Business Profile", corrected version). They are deliberately not derived from the content
// file, so an accidental edit to the page copy fails here. The two approved edits are marked.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { googleBusinessProfileContent as c } from '../lib/content/google-business-profile';
import { buildGoogleBusinessProfileJsonLd, serializeJsonLd } from '../lib/google-business-profile-schema';
import { buildPageMetadata } from '../lib/seo';

const SITE = 'https://grehasoft.com';
const PAGE = `${SITE}/google-business-profile`;

/* ---------------------------------- transcription of the document ---------------------------------- */

const EXPECTED_HEADINGS = {
  h1: 'Google Business Profile Optimization in Kochi, Kerala',
  h2: [
    'Google Business Profile Management Services in Kochi',
    "What's Included in Our Google Business Profile Optimization Service?",
    'Our Google Business Profile Optimization Process',
    'Who Can Benefit from Google Business Profile Management?',
    'Why Choose Grehasoft for Google Business Profile Optimization in Kerala?',
    'Combine Profile Optimization with a Broader SEO Strategy',
    'Frequently Asked Questions About Google Business Profile Optimization',
    "Let's Review Your Google Business Profile",
  ],
  eyebrows: [
    'LOCAL VISIBILITY SOLUTIONS',
    'PROFILE OPTIMIZATION SERVICES',
    'OUR OPTIMIZATION PROCESS',
    'SUPPORT FOR ELIGIBLE LOCAL BUSINESSES',
    'EXPERIENCE-LED DIGITAL SERVICES',
    'CONNECTED DIGITAL STRATEGY',
    'TAKE THE NEXT STEP',
  ],
};

const EXPECTED_HERO_LEAD =
  'Help local customers discover your business, understand your services and find accurate business information on Google Search and Maps.';

const EXPECTED_VISIBILITY = [
  'Grehasoft provides Google Business Profile optimization in Kochi for eligible businesses that want accurate profile information and a clearer presence in relevant Google Search and Maps results. Our services include profile audits, business category and service optimization, business information updates, photo and post planning, customer review response guidance and performance monitoring.',
  "Based in Kochi, Kerala, Grehasoft supports businesses throughout Kerala, across India and in international markets. We tailor our work to the business's actual locations, services, customers and objectives, focusing on accurate information, useful profile content and policy-compliant management.",
  'A well-maintained Google Business Profile helps potential customers understand what a business offers and how to contact or visit it. Our approach focuses on appropriate profile improvements and meaningful performance measurements, rather than promises of a specific ranking or number of leads.',
];

const EXPECTED_SERVICES_INTRO =
  "Our Google Business Profile management service focuses on the information and features that help customers understand and interact with a business. We first assess the existing profile, then prioritize improvements based on its condition, the business's operating model and its objectives.";

const EXPECTED_SERVICES: [string, string][] = [
  [
    'Google Business Profile Audit',
    'We review your existing profile to identify incomplete information, inaccurate details, category mismatches, duplicate-listing concerns and opportunities to improve the customer experience. The findings help establish a baseline and prioritize appropriate next steps.',
  ],
  [
    'Profile Setup and Verification Guidance',
    "For eligible businesses, we provide guidance on profile setup, required business information and Google's verification process. Verification and reinstatement decisions remain with Google, so these outcomes cannot be guaranteed.",
  ],
  [
    'Business Categories and Service Optimization',
    'We review your primary and relevant additional categories, along with the services or products represented on the profile. Recommendations reflect what the business genuinely offers instead of unrelated categories or repetitive keywords.',
  ],
  [
    'Business Information and Location Accuracy',
    "We help maintain accurate contact details, opening hours, website links, addresses or service areas, and relevant profile attributes. Changes should reflect the business's real-world identity and current operating arrangements.",
  ],
  [
    'Business Description, Photos and Profile Updates',
    'We help present your services, experience and business information through clear descriptions, suitable photos and available profile updates. The aim is to communicate useful information to customers rather than repeat keywords unnecessarily.',
  ],
  [
    'Customer Review Response Guidance',
    "We help businesses develop a consistent, professional approach to responding to customer reviews. Responses should be relevant and genuine, and review-management activities must comply with Google's policies. We do not promote fake reviews or offer incentives in exchange for reviews.",
  ],
  [
    'Profile Performance Monitoring',
    'Where available, we review profile performance data such as calls, website clicks, direction requests and other reported interactions. These indicators help businesses understand customer engagement and identify possible improvements.',
  ],
  [
    'Multi-Location Profile Management',
    "For eligible businesses with multiple genuine locations, we help maintain accurate information and consistent management processes across their profiles. Each location must independently satisfy Google's applicable eligibility requirements.",
  ],
];

const EXPECTED_PROCESS_INTRO =
  'Every business has different customers, locations and profile requirements. Grehasoft follows a structured process to identify useful improvements, implement agreed changes and review performance over time.';

const EXPECTED_PROCESS: [string, string][] = [
  [
    'Step 1 — Review Your Existing Profile',
    'We assess your current profile, business information, categories, status and available performance data to understand its starting condition.',
  ],
  [
    'Step 2 — Identify Priority Improvements',
    'We prepare an optimization plan based on your services, eligible locations, target customers, existing profile condition and business objectives.',
  ],
  [
    'Step 3 — Implement the Agreed Changes',
    'We work on approved profile details, categories, services, photos and other relevant features available to your business.',
  ],
  [
    'Step 4 — Monitor and Refine',
    'We review available performance data and recommend relevant next steps. Reporting is based on the agreed scope of work and the data available, rather than rankings alone.',
  ],
];

const EXPECTED_ELIGIBLE_INTRO =
  'Google Business Profile management can help eligible businesses maintain useful information for people searching for their services locally. The right approach depends on the business category, operating location and customer service model.';

const EXPECTED_ELIGIBLE: [string, string][] = [
  [
    'Retail Shops and Local Stores',
    'Maintain accurate store information, opening hours, photographs and relevant profile details so customers can understand what the business offers.',
  ],
  [
    'Healthcare and Professional Services',
    'Present accurate information about services, opening hours, contact details and other relevant business information.',
  ],
  [
    'Restaurants and Hospitality Businesses',
    'Keep available customer-facing information up to date and use relevant profile features to communicate the business offering.',
  ],
  [
    'Home Services and Real Estate Businesses',
    'Improve profile accuracy and service information for eligible businesses operating at a qualifying location or through an eligible service-area model.',
  ],
  [
    'Educational Institutions and Other Local Businesses',
    'Help prospective customers find relevant information, understand available services and take the next step.',
  ],
];

const EXPECTED_WHY_INTRO =
  'Grehasoft brings experience across IT and digital services to help businesses improve how they present their information online. Our approach combines careful profile review, practical implementation and performance monitoring, with recommendations tailored to each business.';

const EXPECTED_WHY: [string, string][] = [
  [
    '10+ Years of Industry Experience',
    // APPROVED EDIT: the document's closing editorial note ("It should not be interpreted as 10+ years of
    // Google Business Profile-specific experience unless that can be substantiated.") is not published.
    'Grehasoft has more than 10 years of experience across IT and digital services. This broader industry experience informs our approach to your digital presence.',
  ],
  [
    'A Strategy Based on Your Business',
    'We assess your profile, services, eligible locations and business objectives before recommending improvements. The goal is to prioritize work that is appropriate to your circumstances.',
  ],
  [
    'Transparent Implementation and Reporting',
    'We explain the agreed work, communicate relevant changes and use available performance data to guide further recommendations.',
  ],
  [
    'Responsible Profile Management',
    'We focus on accurate business information, relevant categories and authentic customer feedback. Your business should retain ownership of its profile and grant the appropriate access required for management.',
  ],
  [
    'Connected Website and Local Search Experience',
    'Our broader digital services experience enables us to consider how your profile, website and customer contact routes work together. Where broader organic search improvements are needed, we can recommend complementary SEO services.',
  ],
];

const EXPECTED_SEO_STRATEGY = [
  'Google Business Profile optimization and website SEO serve related but distinct purposes. Profile optimization focuses on the accuracy and usefulness of the business listing, while website SEO covers technical improvements, page content, internal linking and wider organic search visibility.',
  'If your business needs support with both, Grehasoft can help you understand how the services complement one another.',
  'Explore our SEO services in Kochi for broader organic search support, or contact Grehasoft to discuss your Google Business Profile requirements.',
];

const EXPECTED_FAQ: [string, string][] = [
  [
    'What is Google Business Profile optimization?',
    "Google Business Profile optimization involves improving the accuracy, completeness and usefulness of a business's listing on Google. It can include business information, categories, services, photos, updates, review response guidance and performance monitoring.",
  ],
  [
    'Is Google My Business the same as Google Business Profile?',
    'Yes. Google My Business was the previous name for Google Business Profile. Some business owners still use “Google My Business” or “GMB” when searching for profile optimization and management services, although Google Business Profile is the current name.',
  ],
  [
    'Does Google Business Profile optimization improve local rankings?',
    'It can help Google and potential customers understand a business and its relevance to a search. Local results are also influenced by distance and prominence, so profile optimization cannot guarantee a particular position on Google Maps.',
  ],
  [
    'Can Grehasoft manage Google Business Profiles outside Kochi?',
    "Yes. Grehasoft is based in Kochi and can work remotely with eligible businesses across Kerala, India and international markets, subject to Google's applicable profile requirements.",
  ],
  [
    'Can Grehasoft guarantee the first position on Google Maps?',
    'No. Google does not provide a way to request or pay for a better organic local ranking. Results depend on factors including relevance, distance, prominence and competition. Our focus is on appropriate profile improvements and performance monitoring.',
  ],
  [
    'How long does Google Business Profile optimization take to show results?',
    "There is no guaranteed timeline. The time needed to see meaningful changes depends on the initial profile condition, the work undertaken, competition and Google's processing of updates. We recommend establishing a baseline and reviewing available performance data over time.",
  ],
  [
    'Is Google Business Profile optimization different from Local SEO?',
    'Yes. Business Profile optimization focuses on the Google listing itself. Local SEO is broader and may include website content, technical SEO, internal linking, local relevance and other organic search activities. Profile optimization can be one part of a wider Local SEO strategy.',
  ],
  [
    'Can Grehasoft help with verification or profile suspension issues?',
    'We can review the available information, identify possible issues and guide you through relevant official procedures where appropriate. Google makes the final decisions on verification, reinstatement and policy enforcement, so no outcome can be guaranteed.',
  ],
];

const EXPECTED_ENQUIRY = [
  'Want customers to find accurate information about your business when they search locally? Grehasoft can review your current profile, identify relevant opportunities and recommend an optimization plan based on your services, locations and objectives.',
  'From Kochi to businesses across Kerala, India and eligible international markets, our approach starts with understanding your business and the customers you want to reach.',
];

/** Plain text of a rich text value (strings and links). */
const plain = (value: ReadonlyArray<string | { text: string; href: string }>) =>
  value.map((part) => (typeof part === 'string' ? part : part.text)).join('');

/** Every string a visitor can read, for the compliance scan. */
function visibleStrings(): string[] {
  const out: string[] = [];
  const walk = (value: unknown, key = '') => {
    if (typeof value === 'string') {
      if (!['href', 'canonical', 'providerId', 'providerUrl', 'icon', 'id', 'formId'].includes(key)) out.push(value);
    } else if (Array.isArray(value)) value.forEach((v) => walk(v, key));
    else if (value && typeof value === 'object') Object.entries(value).forEach(([k, v]) => walk(v, k));
  };
  const { seo: _seo, ...page } = c;
  walk(page);
  walk(c.seo.title);
  walk(c.seo.description);
  return out;
}

/* ---------------------------------- content fidelity ---------------------------------- */

test('headings: one H1, the eight H2s and the seven eyebrows match the document', () => {
  assert.equal(c.hero.title, EXPECTED_HEADINGS.h1);
  assert.deepEqual(
    [c.visibility.title, c.services.title, c.process.title, c.eligible.title, c.whyChoose.title, c.seoStrategy.title, c.faq.title, c.enquiry.title],
    EXPECTED_HEADINGS.h2,
  );
  assert.deepEqual(
    [c.visibility.eyebrow, c.services.eyebrow, c.process.eyebrow, c.eligible.eyebrow, c.whyChoose.eyebrow, c.seoStrategy.eyebrow, c.enquiry.eyebrow],
    EXPECTED_HEADINGS.eyebrows,
  );
  assert.ok(c.hero.title.includes(c.hero.titleAccent), 'the gradient accent is part of the H1 text');
});

test('hero and local visibility copy match the document word for word', () => {
  assert.equal(c.hero.lead, EXPECTED_HERO_LEAD);
  assert.deepEqual(c.visibility.paragraphs, EXPECTED_VISIBILITY);
});

test('the eight profile optimization services match the document', () => {
  assert.equal(c.services.intro, EXPECTED_SERVICES_INTRO);
  assert.deepEqual(c.services.items.map((i) => [i.title, i.description]), EXPECTED_SERVICES);
});

test('the four process steps keep the document headings, including the "Step n —" prefix', () => {
  assert.equal(c.process.intro, EXPECTED_PROCESS_INTRO);
  assert.deepEqual(c.process.steps.map((s) => [s.title, s.description]), EXPECTED_PROCESS);
});

test('the five eligible business categories match the document', () => {
  assert.equal(c.eligible.intro, EXPECTED_ELIGIBLE_INTRO);
  assert.deepEqual(c.eligible.items.map((i) => [i.title, i.description]), EXPECTED_ELIGIBLE);
});

test('why choose Grehasoft: five points; the experience claim stays general (approved edit)', () => {
  assert.equal(c.whyChoose.intro, EXPECTED_WHY_INTRO);
  assert.deepEqual(c.whyChoose.points.map((p) => [p.title, p.description]), EXPECTED_WHY);

  const years = c.whyChoose.points[0].description;
  assert.match(years, /more than 10 years of experience across IT and digital services/);
  assert.doesNotMatch(years, /substantiated|should not be interpreted|specific experience/i, 'the internal editorial note is gone');
  // No section other than the general-experience claim may attribute years to Google Business Profile work.
  assert.doesNotMatch(visibleStrings().join('\n'), /\d+\+? years[^.]*(business profile|GBP|GMB)/i);
});

test('SEO strategy copy matches the document and links to the SEO service and the enquiry form', () => {
  assert.deepEqual(c.seoStrategy.paragraphs.map(plain), EXPECTED_SEO_STRATEGY);

  const links = c.seoStrategy.paragraphs.flat().filter((p): p is { text: string; href: string } => typeof p !== 'string');
  assert.deepEqual(links, [
    { text: 'SEO services in Kochi', href: '/seo' },
    { text: 'contact Grehasoft', href: '#enquiry-form' },
  ]);
});

test('the eight FAQ questions and answers match the document', () => {
  assert.equal(c.faq.title, EXPECTED_HEADINGS.h2[6]);
  assert.deepEqual(c.faq.items.map((i) => [i.question, i.answer]), EXPECTED_FAQ);
});

test('final CTA copy and labels match the document and the approved decisions', () => {
  assert.deepEqual(c.enquiry.paragraphs, EXPECTED_ENQUIRY);
  assert.deepEqual(c.enquiry.primaryCta, { label: 'Get a Google Business Profile Audit', href: '#enquiry-form' });
  assert.deepEqual(c.enquiry.secondaryCta, { label: 'Explore Our Services', href: '/services' });
  // The hero reuses the same two labels and targets.
  assert.deepEqual(c.hero.primaryCta, c.enquiry.primaryCta);
  assert.deepEqual(c.hero.secondaryCta, c.enquiry.secondaryCta);
  assert.equal(c.enquiry.formId, 'enquiry-form');
});

test('the keyword-priority table and related-topic notes are SEO notes, never page copy', () => {
  const text = visibleStrings().join('\n');
  assert.doesNotMatch(text, /\bRelated topic\b|\bSupporting\b|\bSecondary\b|\bPrimary\b/);
  assert.doesNotMatch(text, /keyword ranking/i);
});

/* ---------------------------------- compliance ---------------------------------- */

test('no ranking, lead, verification or reinstatement outcome is promised', () => {
  const sentences = visibleStrings().flatMap((s) => s.split(/(?<=[.?!])\s+/));
  const NEGATED =
    /cannot be guaranteed|cannot guarantee|no outcome can be guaranteed|no guaranteed timeline|^Can Grehasoft guarantee the first position/i;

  for (const sentence of sentences.filter((s) => /guarant/i.test(s))) {
    assert.match(sentence, NEGATED, `"guarantee" must only appear in a refusal: ${sentence}`);
  }

  const text = visibleStrings().join('\n');
  assert.doesNotMatch(text, /\bguaranteed (rank|ranking|position|results?|leads?|verification|reinstatement|first)/i);
  assert.doesNotMatch(text, /\b(#1|number one|top[- ]ranked|rank (first|#1))\b/i);
  assert.doesNotMatch(text, /\b100%|instant(ly)? (results?|rank)|get (more )?(leads|customers) (fast|quickly)/i);
  assert.doesNotMatch(text, /(buy|purchase|incentivi[sz]e) (more )?(5-star )?reviews/i);
});

test('the compliance statements are all still present', () => {
  const text = visibleStrings().join('\n');
  for (const must of [
    'rather than promises of a specific ranking or number of leads',
    'Verification and reinstatement decisions remain with Google, so these outcomes cannot be guaranteed.',
    'We do not promote fake reviews or offer incentives in exchange for reviews.',
    'profile optimization cannot guarantee a particular position on Google Maps',
    'There is no guaranteed timeline.',
    "Each location must independently satisfy Google's applicable eligibility requirements.",
    'Google makes the final decisions on verification, reinstatement and policy enforcement, so no outcome can be guaranteed.',
  ]) {
    assert.ok(text.includes(must), `missing compliance statement: ${must}`);
  }
});

/* ---------------------------------- metadata ---------------------------------- */

test('meta title is the document title; the description describes review response guidance (approved edit)', () => {
  assert.equal(c.seo.title, 'Google Business Profile Optimization Services in Kochi | Grehasoft');
  assert.match(c.seo.description, /^Need Google Business Profile optimization in Kochi\?/);
  assert.match(c.seo.description, /guides review responses/);
  assert.doesNotMatch(c.seo.description, /manages? (profile details, services and )?reviews/i, 'no wording implying direct review management');
  assert.match(c.seo.description, /Kerala, India and beyond\.$/);
});

test('canonical, og:url and twitter tags use the no-trailing-slash URL', () => {
  assert.equal(c.seo.canonical, PAGE);

  const meta = buildPageMetadata({
    path: '/google-business-profile',
    fallbackTitle: c.seo.title,
    fallbackDescription: c.seo.description,
  });
  assert.equal(meta.title, c.seo.title);
  assert.equal(meta.description, c.seo.description);
  assert.equal(meta.alternates?.canonical, PAGE);
  assert.equal((meta.openGraph as { url?: string }).url, PAGE);
  assert.equal((meta.openGraph as { title?: string }).title, c.seo.title);
  assert.equal((meta.twitter as { title?: string }).title, c.seo.title);

  const route = fs.readFileSync('app/google-business-profile/page.tsx', 'utf8');
  assert.match(route, /path: '\/google-business-profile'/);
  assert.match(route, /siteName: 'Grehasoft'/);
  assert.doesNotMatch(route, /google-business-profile\/['"`]/, 'the route never references the slashed URL');
});

/* ---------------------------------- schema ---------------------------------- */

const graph = buildGoogleBusinessProfileJsonLd(c)['@graph'] as Array<Record<string, any>>;
const node = (type: string) => graph.find((n) => n['@type'] === type)!;

test('the graph is Service + BreadcrumbList + FAQPage, with no OfferCatalog', () => {
  assert.deepEqual(graph.map((n) => n['@type']).sort(), ['BreadcrumbList', 'FAQPage', 'Service']);
  assert.doesNotMatch(JSON.stringify(graph), /OfferCatalog|hasOfferCatalog|itemOffered/);
});

test("the Service node is the document's, with canonical URLs and no trailing slash", () => {
  const service = node('Service');
  assert.equal(service['@id'], `${PAGE}#service`);
  assert.equal(service.name, 'Google Business Profile Optimization in Kochi');
  assert.equal(service.serviceType, 'Google Business Profile Optimization and Management');
  assert.equal(service.url, PAGE);
  assert.equal(
    service.description,
    'Grehasoft provides Google Business Profile optimization and management for eligible businesses, including profile audits, business information updates, category and service optimization, profile updates, review response guidance and performance monitoring.',
  );
});

test('the provider reuses the homepage LocalBusiness node; no new organisation id is introduced', () => {
  const { provider } = node('Service');
  assert.equal(provider['@id'], `${SITE}/#localbusiness`);
  assert.equal(provider['@type'], 'LocalBusiness');
  assert.equal(provider.name, 'Grehasoft');
  assert.equal(provider.url, `${SITE}/`);
  // The ids that are referenced on the site but never defined must not be used here.
  assert.doesNotMatch(JSON.stringify(graph), /#organization|schema\/organization/);
});

test('areaServed accepts place objects and plain text, as in the document', () => {
  assert.deepEqual(node('Service').areaServed, [
    { '@type': 'City', name: 'Kochi' },
    { '@type': 'AdministrativeArea', name: 'Kerala' },
    { '@type': 'Country', name: 'India' },
    'International markets',
  ]);
});

test('the FAQPage mirrors the visible FAQ exactly', () => {
  const faq = node('FAQPage');
  assert.equal(faq['@id'], `${PAGE}#faq`);
  assert.deepEqual(faq.about, { '@id': `${PAGE}#service` });
  assert.deepEqual(
    faq.mainEntity.map((q: any) => [q.name, q.acceptedAnswer.text]),
    EXPECTED_FAQ,
  );
  assert.equal(faq.mainEntity.length, 8);
});

test('the BreadcrumbList mirrors the visible breadcrumb (Home > Google Business Profile)', () => {
  const crumbs = node('BreadcrumbList');
  assert.equal(crumbs['@id'], `${PAGE}#breadcrumb`);
  assert.deepEqual(
    crumbs.itemListElement.map((i: any) => [i.position, i.name, i.item]),
    [
      [1, 'Home', `${SITE}/`],
      [2, 'Google Business Profile', PAGE],
    ],
  );
});

test('every page URL in the schema is the canonical (no trailing slash); only the site root keeps its slash', () => {
  const urls = JSON.stringify(graph).match(/https:\/\/grehasoft\.com[^"#]*/g) ?? [];
  for (const url of urls) {
    assert.ok(url === `${SITE}/` || url === PAGE, `unexpected URL in schema: ${url}`);
  }
});

test('the serialized graph is safe to embed in a script tag', () => {
  const json = serializeJsonLd(buildGoogleBusinessProfileJsonLd(c));
  assert.ok(!json.includes('<'));
  assert.deepEqual(JSON.parse(json)['@graph'].length, 3);
});

/* ---------------------------------- structure and registration ---------------------------------- */

test('the template composes every section in the document order', () => {
  const template = fs.readFileSync('components/templates/GoogleBusinessProfileTemplate.tsx', 'utf8');
  const order = ['<GbpHero', '<LocalVisibilitySection', '<ProfileServicesSection', '<GbpProcessSection', '<EligibleBusinessesSection', '<GbpWhyChooseSection', '<SeoStrategySection', '<GbpFaqSection', '<GbpEnquirySection'];
  const positions = order.map((tag) => template.indexOf(tag));
  assert.ok(positions.every((p) => p >= 0), 'every section is rendered');
  assert.deepEqual([...positions].sort((a, b) => a - b), positions, 'sections are in order');
});

test('the enquiry form asks for Name, Business Name, Phone, Email and Details only', () => {
  const { form } = c.enquiry;
  assert.deepEqual(
    [form.name.label, form.company.label, form.phone.label, form.email.label, form.details.label],
    ['Name', 'Business Name', 'Phone', 'Email', 'Details'],
  );
  assert.equal(form.market, undefined);
  assert.equal(form.goal, undefined);
  assert.equal(form.submitLabel, c.enquiry.primaryCta.label);
});

test('the page is registered in the XML sitemap, services directory, service visuals and HTML sitemap', () => {
  const read = (file: string) => fs.readFileSync(file, 'utf8');
  assert.match(read('app/sitemap.ts'), /'\/google-business-profile',/);
  assert.match(read('app/services/page.tsx'), /href: "\/google-business-profile"/);
  assert.match(read('components/services/serviceVisuals.ts'), /'\/google-business-profile': MapPin,/);
  assert.match(read('app/sitemap/page.tsx'), /href: '\/google-business-profile'/);
});

test('shared form changes are additive: existing pages still require Market and Goal', () => {
  const types = fs.readFileSync('types/lead-generation.ts', 'utf8');
  assert.match(types, /export interface EnquiryFormContent \{[\s\S]*?market: SelectField;[\s\S]*?goal: SelectField;/);
  assert.match(types, /FlexibleEnquiryFormContent = Omit<EnquiryFormContent, 'market' \| 'goal'>/);
});
