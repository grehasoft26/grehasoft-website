import type {
  AiFeature,
  AiIcon,
  AiIconItem,
  AiLinkedItem,
  AiMarketingContent,
  AiVideoAsset,
} from '@/types/ai-marketing';
import type { CtaLink, FaqItem, RichText, TitledText } from '@/types/lead-generation';
import { aiMarketingContent } from '@/lib/content/ai-marketing';
import { SITE_URL } from '@/lib/seo';
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
 * Maps the "AI Marketing Service Page" ACF group (WordPress page
 * `ai-marketing-service-agency`) to AiMarketingContent.
 *
 * Field definitions: wordpress/acf-json/group_ai_marketing_service.json.
 * Uses the Lead Generation field readers and the same all-or-nothing rule:
 * any missing or invalid field returns null (logging the first failing field),
 * and the page falls back to its local content.
 *
 * Code-owned values are never read from ACF: the route path (canonical), the
 * in-page anchor ids, the process step label and the whole enquiry form
 * configuration. They come from lib/content/ai-marketing.ts.
 */

const LOCAL = aiMarketingContent;

const AI_ICONS: readonly AiIcon[] = [
  'search',
  'pen',
  'video',
  'share',
  'workflow',
  'scan',
  'sparkles',
  'network',
  'fingerprint',
  'layers',
  'shield',
  'target',
];
const AREA_TYPES = ['City', 'AdministrativeArea', 'Country'] as const;
const VIDEO_TYPES = ['video/mp4', 'video/webm'] as const;

// In-page anchors that exist on the page; any other #anchor would be a dead link.
const PAGE_ANCHORS = new Set([`#${LOCAL.searchVisibility.id}`, `#${LOCAL.enquiry.id}`, `#${LOCAL.enquiry.formId}`]);

// Video, poster and captions may only be served from the CMS media library or the site.
const MEDIA_HOSTS = new Set(['cms.grehasoft.com', new URL(SITE_URL).hostname]);

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

/** Link-syntax textarea; every link passes the Lead Generation allow-list and the anchor check. */
function richText(parent: AcfRecord, name: string, path: string): RichText {
  const value = parseRichText(text(parent, name, path), `${path}.${name}`);
  for (const segment of value) {
    if (typeof segment !== 'string') checkAnchor(segment.href, `${path}.${name}`);
  }
  return value;
}

function mediaUrl(parent: AcfRecord, name: string, path: string): string {
  const value = text(parent, name, path);
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    fail(`${path}.${name}`, `is not a valid URL "${value}"`);
  }
  if (url.protocol !== 'https:' || !MEDIA_HOSTS.has(url.hostname)) {
    fail(`${path}.${name}`, `must be an https URL on ${[...MEDIA_HOSTS].join(' or ')} ("${value}")`);
  }
  return value;
}

function mapTitledText(slot: AcfRecord, path: string): TitledText {
  return { title: text(slot, 'title', path), description: text(slot, 'description', path) };
}

function mapIconItem(slot: AcfRecord, path: string): AiIconItem {
  return {
    icon: choice(slot, 'icon', AI_ICONS, path),
    title: text(slot, 'title', path),
    description: text(slot, 'description', path),
  };
}

/* ------------------------------- sections ------------------------------- */

function mapSeo(acf: AcfRecord): AiMarketingContent['seo'] {
  const path = 'acf.seo';
  const seo = group(acf, 'seo', 'acf');
  const service = group(seo, 'service', path);
  const servicePath = `${path}.service`;

  return {
    path: LOCAL.seo.path,
    title: text(seo, 'title', path),
    description: text(seo, 'description', path),
    breadcrumbLabel: text(seo, 'breadcrumb_label', path),
    service: {
      name: text(service, 'name', servicePath),
      description: text(service, 'description', servicePath),
      serviceType: lines(service, 'service_types', servicePath),
      areaServed: slots(service, 'area', servicePath, (area, p) => ({
        type: choice(area, 'type', AREA_TYPES, p),
        name: text(area, 'name', p),
      })),
    },
  };
}

function mapHero(acf: AcfRecord): AiMarketingContent['hero'] {
  const path = 'acf.hero';
  const hero = group(acf, 'hero', 'acf');
  return {
    title: text(hero, 'title', path),
    body: text(hero, 'body', path),
    capabilities: lines(hero, 'capabilities', path),
    primaryCta: cta(hero, 'primary_cta', path),
    secondaryCta: cta(hero, 'secondary_cta', path),
    contact: cta(hero, 'contact', path),
    whatsapp: cta(hero, 'whatsapp', path),
  };
}

function mapDiscovery(acf: AcfRecord): AiMarketingContent['discovery'] {
  const path = 'acf.discovery';
  const discovery = group(acf, 'discovery', 'acf');
  return {
    eyebrow: text(discovery, 'eyebrow', path),
    title: text(discovery, 'title', path),
    paragraphs: paragraphs(discovery, path),
    coverTitle: text(discovery, 'cover_title', path),
    cover: slots(discovery, 'card', path, mapIconItem),
  };
}

function mapSearchVisibility(acf: AcfRecord): AiMarketingContent['searchVisibility'] {
  const path = 'acf.search_visibility';
  const section = group(acf, 'search_visibility', 'acf');
  return {
    id: LOCAL.searchVisibility.id,
    eyebrow: text(section, 'eyebrow', path),
    title: text(section, 'title', path),
    paragraphs: paragraphs(section, path),
    items: slots(section, 'item', path, (slot, p): AiFeature => ({
      icon: choice(slot, 'icon', AI_ICONS, p),
      title: text(slot, 'title', p),
      paragraphs: paragraphs(slot, p),
    })),
  };
}

function mapContentCreation(acf: AcfRecord): AiMarketingContent['contentCreation'] {
  const path = 'acf.content_creation';
  const section = group(acf, 'content_creation', 'acf');
  return {
    eyebrow: text(section, 'eyebrow', path),
    title: text(section, 'title', path),
    paragraphs: paragraphs(section, path),
    items: slots(section, 'item', path, mapTitledText),
    closing: text(section, 'closing', path),
  };
}

/** Optional asset: none when every asset field is empty; complete or invalid otherwise. */
function mapVideoAsset(video: AcfRecord, path: string): AiVideoAsset | undefined {
  const value = video.asset;
  if (value === undefined || value === null || value === false) return undefined;
  if (!isRecord(value)) fail(`${path}.asset`, 'is not a group');
  const asset = value;
  const assetPath = `${path}.asset`;

  // video_type is a select, so it can hold a value while the asset is unused.
  const filled = ['video_url', 'video_title', 'poster_url', 'captions_url', 'captions_label', 'captions_lang'].filter(
    (name) => optionalText(asset, name, assetPath) !== '',
  );
  if (!filled.length) return undefined;

  const result: AiVideoAsset = {
    src: mediaUrl(asset, 'video_url', assetPath),
    type: choice(asset, 'video_type', VIDEO_TYPES, assetPath),
    title: text(asset, 'video_title', assetPath),
  };
  if (optionalText(asset, 'poster_url', assetPath)) result.poster = mediaUrl(asset, 'poster_url', assetPath);

  const captionFields = ['captions_url', 'captions_label', 'captions_lang'].filter((name) => filled.includes(name));
  if (captionFields.length === 3) {
    const srcLang = text(asset, 'captions_lang', assetPath);
    if (!/^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(srcLang)) fail(`${assetPath}.captions_lang`, `is not a language code "${srcLang}"`);
    result.captions = {
      src: mediaUrl(asset, 'captions_url', assetPath),
      label: text(asset, 'captions_label', assetPath),
      srcLang,
    };
  } else if (captionFields.length) {
    fail(`${assetPath}.captions_*`, 'needs all three caption fields (URL, label, language) or none');
  }
  return result;
}

function mapVideo(acf: AcfRecord): AiMarketingContent['video'] {
  const path = 'acf.video';
  const video = group(acf, 'video', 'acf');
  const asset = mapVideoAsset(video, path);
  return {
    eyebrow: text(video, 'eyebrow', path),
    title: text(video, 'title', path),
    body: text(video, 'body', path),
    items: slots(video, 'item', path, mapTitledText),
    cta: cta(video, 'cta', path),
    ...(asset ? { asset } : {}),
  };
}

function mapConnected(acf: AcfRecord): AiMarketingContent['connected'] {
  const path = 'acf.connected';
  const section = group(acf, 'connected', 'acf');
  return {
    eyebrow: text(section, 'eyebrow', path),
    title: text(section, 'title', path),
    intro: text(section, 'intro', path),
    items: slots(section, 'item', path, (slot, p): AiLinkedItem => ({
      title: text(slot, 'title', p),
      description: text(slot, 'description', p),
      followUp: richText(slot, 'follow_up', p),
    })),
    closing: text(section, 'closing', path),
  };
}

function mapProcess(acf: AcfRecord): AiMarketingContent['process'] {
  const path = 'acf.process';
  const process = group(acf, 'process', 'acf');
  return {
    eyebrow: text(process, 'eyebrow', path),
    title: text(process, 'title', path),
    intro: text(process, 'intro', path),
    stepLabel: LOCAL.process.stepLabel,
    steps: slots(process, 'step', path, mapTitledText),
  };
}

function mapWhyChoose(acf: AcfRecord): AiMarketingContent['whyChoose'] {
  const path = 'acf.why_choose';
  const whyChoose = group(acf, 'why_choose', 'acf');
  return {
    eyebrow: text(whyChoose, 'eyebrow', path),
    title: text(whyChoose, 'title', path),
    intro: text(whyChoose, 'intro', path),
    points: slots(whyChoose, 'point', path, mapIconItem),
  };
}

function mapFaq(acf: AcfRecord): AiMarketingContent['faq'] {
  const path = 'acf.faq';
  const faq = group(acf, 'faq', 'acf');
  return {
    eyebrow: text(faq, 'eyebrow', path),
    title: text(faq, 'title', path),
    items: slots(faq, 'item', path, (slot, p): FaqItem => ({
      question: text(slot, 'question', p),
      answer: text(slot, 'answer', p),
    })),
  };
}

function mapEnquiry(acf: AcfRecord): AiMarketingContent['enquiry'] {
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

export function mapAiMarketingAcf(acf: unknown): AiMarketingContent | null {
  try {
    // A page with no saved ACF values returns `acf: []`.
    if (!isRecord(acf)) fail('acf', 'is empty or not an object');

    return {
      seo: mapSeo(acf),
      hero: mapHero(acf),
      discovery: mapDiscovery(acf),
      searchVisibility: mapSearchVisibility(acf),
      contentCreation: mapContentCreation(acf),
      video: mapVideo(acf),
      connected: mapConnected(acf),
      process: mapProcess(acf),
      whyChoose: mapWhyChoose(acf),
      faq: mapFaq(acf),
      enquiry: mapEnquiry(acf),
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[AI marketing ACF] ${reason}; using local content.`);
    return null;
  }
}
