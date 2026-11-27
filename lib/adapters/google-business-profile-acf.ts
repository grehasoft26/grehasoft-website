import type {
  GbpAreaServed,
  GbpIcon,
  GbpIconItem,
  GoogleBusinessProfileContent,
} from '@/types/google-business-profile';
import type { CtaLink, FaqItem, RichText, TitledText } from '@/types/lead-generation';
import { googleBusinessProfileContent } from '@/lib/content/google-business-profile';
import {
  type AcfRecord,
  choice,
  cta as leadCta,
  fail,
  group,
  isRecord,
  lines,
  optionalText,
  paragraphs,
  parseRichText,
  slots,
  text,
} from '@/lib/adapters/lead-generation-acf';

/**
 * Maps the "Google Business Profile Service Page" ACF group (WordPress page
 * `google-business-profile`) to GoogleBusinessProfileContent.
 *
 * Field definitions: wordpress/acf-json/group_google_business_profile_service.json.
 * Follows the AI Marketing adapter: the Lead Generation field readers and the same
 * all-or-nothing rule. Any missing or invalid field returns null (logging the first
 * failing field), and the page falls back to its local content.
 *
 * Code-owned values are never read from ACF: the canonical URL, the schema provider
 * (the homepage LocalBusiness node), the in-page anchor ids and the whole enquiry form
 * configuration. They come from lib/content/google-business-profile.ts.
 */

const LOCAL = googleBusinessProfileContent;

export const GBP_ICONS: readonly GbpIcon[] = [
  'clipboard-check',
  'shield-check',
  'tags',
  'map-pin',
  'images',
  'message-text',
  'chart-line',
  'building',
  'store',
  'stethoscope',
  'utensils',
  'house',
  'graduation-cap',
  'award',
  'route',
  'eye',
  'handshake',
  'globe',
];

/** "Text" stores the area as plain text (schema.org allows text for areaServed), e.g. "International markets". */
export const GBP_AREA_TYPES = ['City', 'AdministrativeArea', 'Country', 'Text'] as const;

// In-page anchors that exist on the page; any other #anchor would be a dead link.
const PAGE_ANCHORS = new Set([`#${LOCAL.services.id}`, `#${LOCAL.enquiry.id}`, `#${LOCAL.enquiry.formId}`]);

/* ------------------------------- readers ------------------------------- */

function checkAnchor(value: string, path: string): string {
  if (value.startsWith('#') && !PAGE_ANCHORS.has(value)) fail(path, `links to an unknown section "${value}"`);
  return value;
}

/** Lead Generation's cta() plus the in-page anchor check. */
function cta(parent: AcfRecord, name: string, path: string): CtaLink {
  const link = leadCta(parent, name, path);
  checkAnchor(link.href, `${path}.${name}.href`);
  return link;
}

/** Link-syntax value; every link passes the Lead Generation allow-list and the anchor check. */
function richTextValue(value: string, path: string): RichText {
  const parsed = parseRichText(value, path);
  for (const segment of parsed) {
    if (typeof segment !== 'string') checkAnchor(segment.href, path);
  }
  return parsed;
}

/**
 * paragraph_1 … paragraph_n: the first `required` are required, later ones are optional
 * and skipped when empty.
 */
function paragraphList(parent: AcfRecord, path: string, required: number): string[] {
  const numbers = Object.keys(parent)
    .map((key) => /^paragraph_(\d+)$/.exec(key))
    .filter((match): match is RegExpExecArray => match !== null)
    .map((match) => Number(match[1]));
  const last = Math.max(required, ...numbers);

  const values: string[] = [];
  for (let n = 1; n <= last; n += 1) {
    const value = n <= required ? text(parent, `paragraph_${n}`, path) : optionalText(parent, `paragraph_${n}`, path);
    if (value) values.push(value);
  }
  return values;
}

function mapTitledText(slot: AcfRecord, path: string): TitledText {
  return { title: text(slot, 'title', path), description: text(slot, 'description', path) };
}

function mapIconItem(slot: AcfRecord, path: string): GbpIconItem {
  return {
    icon: choice(slot, 'icon', GBP_ICONS, path),
    title: text(slot, 'title', path),
    description: text(slot, 'description', path),
  };
}

/* ------------------------------- sections ------------------------------- */

function mapSeo(acf: AcfRecord): GoogleBusinessProfileContent['seo'] {
  const path = 'acf.seo';
  const seo = group(acf, 'seo', 'acf');
  const service = group(seo, 'service', path);
  const servicePath = `${path}.service`;

  return {
    title: text(seo, 'title', path),
    description: text(seo, 'description', path),
    canonical: LOCAL.seo.canonical,
    breadcrumbLabel: text(seo, 'breadcrumb_label', path),
    service: {
      name: text(service, 'name', servicePath),
      serviceType: text(service, 'service_type', servicePath),
      description: text(service, 'description', servicePath),
      areaServed: slots(service, 'area', servicePath, (area, p): GbpAreaServed => {
        const type = choice(area, 'type', GBP_AREA_TYPES, p);
        const name = text(area, 'name', p);
        return type === 'Text' ? name : { type, name };
      }),
      providerId: LOCAL.seo.service.providerId,
      providerName: LOCAL.seo.service.providerName,
      providerUrl: LOCAL.seo.service.providerUrl,
    },
  };
}

function mapHero(acf: AcfRecord): GoogleBusinessProfileContent['hero'] {
  const path = 'acf.hero';
  const hero = group(acf, 'hero', 'acf');

  const title = text(hero, 'title', path);
  const titleAccent = optionalText(hero, 'title_accent', path);
  if (titleAccent && !title.includes(titleAccent)) {
    fail(`${path}.title_accent`, `"${titleAccent}" is not part of the heading`);
  }

  const visualLabels = lines(hero, 'visual_labels', path);
  if (visualLabels.length !== 3) fail(`${path}.visual_labels`, `needs exactly 3 lines (has ${visualLabels.length})`);

  return {
    title,
    titleAccent,
    lead: text(hero, 'lead', path),
    primaryCta: cta(hero, 'primary_cta', path),
    secondaryCta: cta(hero, 'secondary_cta', path),
    phone: cta(hero, 'phone', path),
    whatsapp: cta(hero, 'whatsapp', path),
    visualLabels: [visualLabels[0], visualLabels[1], visualLabels[2]],
  };
}

function mapVisibility(acf: AcfRecord): GoogleBusinessProfileContent['visibility'] {
  const path = 'acf.visibility';
  const section = group(acf, 'visibility', 'acf');
  return {
    eyebrow: text(section, 'eyebrow', path),
    title: text(section, 'title', path),
    // The component shows two paragraphs, then any further paragraph as the highlighted callout.
    paragraphs: paragraphList(section, path, 2),
  };
}

function mapServices(acf: AcfRecord): GoogleBusinessProfileContent['services'] {
  const path = 'acf.services';
  const section = group(acf, 'services', 'acf');
  return {
    id: LOCAL.services.id,
    eyebrow: text(section, 'eyebrow', path),
    title: text(section, 'title', path),
    intro: text(section, 'intro', path),
    items: slots(section, 'item', path, mapIconItem),
  };
}

function mapProcess(acf: AcfRecord): GoogleBusinessProfileContent['process'] {
  const path = 'acf.process';
  const process = group(acf, 'process', 'acf');
  return {
    eyebrow: text(process, 'eyebrow', path),
    title: text(process, 'title', path),
    intro: text(process, 'intro', path),
    steps: slots(process, 'step', path, mapTitledText),
  };
}

function mapEligible(acf: AcfRecord): GoogleBusinessProfileContent['eligible'] {
  const path = 'acf.eligible';
  const section = group(acf, 'eligible', 'acf');
  return {
    eyebrow: text(section, 'eyebrow', path),
    title: text(section, 'title', path),
    intro: text(section, 'intro', path),
    items: slots(section, 'item', path, mapIconItem),
  };
}

function mapWhyChoose(acf: AcfRecord): GoogleBusinessProfileContent['whyChoose'] {
  const path = 'acf.why_choose';
  const whyChoose = group(acf, 'why_choose', 'acf');
  return {
    eyebrow: text(whyChoose, 'eyebrow', path),
    title: text(whyChoose, 'title', path),
    intro: text(whyChoose, 'intro', path),
    points: slots(whyChoose, 'point', path, mapIconItem),
  };
}

function mapSeoStrategy(acf: AcfRecord): GoogleBusinessProfileContent['seoStrategy'] {
  const path = 'acf.seo_strategy';
  const section = group(acf, 'seo_strategy', 'acf');
  return {
    eyebrow: text(section, 'eyebrow', path),
    title: text(section, 'title', path),
    paragraphs: paragraphList(section, path, 1).map((value, i) => richTextValue(value, `${path}.paragraph_${i + 1}`)),
  };
}

function mapFaq(acf: AcfRecord): GoogleBusinessProfileContent['faq'] {
  const path = 'acf.faq';
  const faq = group(acf, 'faq', 'acf');
  return {
    title: text(faq, 'title', path),
    items: slots(faq, 'item', path, (slot, p): FaqItem => ({
      question: text(slot, 'question', p),
      answer: text(slot, 'answer', p),
    })),
  };
}

function mapEnquiry(acf: AcfRecord): GoogleBusinessProfileContent['enquiry'] {
  const path = 'acf.enquiry';
  const enquiry = group(acf, 'enquiry', 'acf');
  return {
    id: LOCAL.enquiry.id,
    formId: LOCAL.enquiry.formId,
    eyebrow: text(enquiry, 'eyebrow', path),
    title: text(enquiry, 'title', path),
    paragraphs: paragraphs(enquiry, path),
    primaryCta: cta(enquiry, 'primary_cta', path),
    secondaryCta: cta(enquiry, 'secondary_cta', path),
    form: LOCAL.enquiry.form,
  };
}

/* -------------------------------- entry -------------------------------- */

export function mapGoogleBusinessProfileAcf(acf: unknown): GoogleBusinessProfileContent | null {
  try {
    // A page with no saved ACF values returns `acf: []`.
    if (!isRecord(acf)) fail('acf', 'is empty or not an object');

    return {
      seo: mapSeo(acf),
      hero: mapHero(acf),
      visibility: mapVisibility(acf),
      services: mapServices(acf),
      process: mapProcess(acf),
      eligible: mapEligible(acf),
      whyChoose: mapWhyChoose(acf),
      seoStrategy: mapSeoStrategy(acf),
      faq: mapFaq(acf),
      enquiry: mapEnquiry(acf),
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[Google Business Profile ACF] ${reason}; using local content.`);
    return null;
  }
}
