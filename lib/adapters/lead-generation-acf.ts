import type {
  CtaLink,
  FaqItem,
  FunnelStage,
  FunnelStageId,
  IconItem,
  LeadGenerationContent,
  LeadIcon,
  LeadMetric,
  LeadSolution,
  RichText,
  TitledText,
} from '@/types/lead-generation';

/**
 * Maps the "Lead Generation Service Page" ACF group (WordPress page
 * `lead-generation-services`) to LeadGenerationContent.
 *
 * Field definitions: wordpress/acf-json/group_lead_generation_service.json.
 * Returns null when the data is missing or invalid, logging the first failing
 * field, so the page can fall back to its local content.
 */

export type AcfRecord = Record<string, unknown>;
type AreaServed = LeadGenerationContent['seo']['service']['areaServed'][number];

class AcfMappingError extends Error {}

const LEAD_ICONS: readonly LeadIcon[] = [
  'award',
  'layers',
  'globe',
  'search',
  'megaphone',
  'briefcase',
  'map-pin',
  'layout',
  'workflow',
  'handshake',
  'route',
  'eye',
];
const FUNNEL_STAGE_IDS: readonly FunnelStageId[] = ['visitors', 'enquiries', 'qualified', 'opportunities'];
const AREA_TYPES: readonly AreaServed['type'][] = ['City', 'AdministrativeArea', 'Country'];

// Select fields keep a value even in an unused slot, so they don't count when deciding a slot is empty.
const SELECT_FIELDS = new Set(['icon', 'stage', 'stage_id', 'type']);

// Site routes, in-page anchors, absolute http(s), phone and email links only.
const SAFE_HREF = /^(\/(?!\/)|#[\w-]+$|https?:\/\/|tel:|mailto:)/;
const ANCHOR_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const LINK_SYNTAX = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function isRecord(value: unknown): value is AcfRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function fail(path: string, problem: string): never {
  throw new AcfMappingError(`${path} ${problem}`);
}

/* ---------------------------- field readers ---------------------------- */

export function group(parent: AcfRecord, name: string, path: string): AcfRecord {
  const value = parent[name];
  if (!isRecord(value)) fail(`${path}.${name}`, 'is missing');
  return value;
}

export function optionalText(parent: AcfRecord, name: string, path: string): string {
  const value = parent[name];
  if (value === undefined || value === null || value === false) return '';
  if (typeof value !== 'string') fail(`${path}.${name}`, 'is not text');
  return value.trim();
}

export function text(parent: AcfRecord, name: string, path: string): string {
  const value = optionalText(parent, name, path);
  if (!value) fail(`${path}.${name}`, 'is required');
  return value;
}

export function choice<T extends string>(parent: AcfRecord, name: string, allowed: readonly T[], path: string): T {
  const value = text(parent, name, path);
  const match = allowed.find((option) => option === value);
  if (!match) fail(`${path}.${name}`, `has unsupported value "${value}"`);
  return match;
}

function anchorId(parent: AcfRecord, name: string, path: string): string {
  const value = text(parent, name, path);
  if (!ANCHOR_ID.test(value)) fail(`${path}.${name}`, `is not a valid anchor id "${value}"`);
  return value;
}

export function href(value: string, path: string): string {
  if (!SAFE_HREF.test(value)) fail(path, `has an unsupported link "${value}"`);
  return value;
}

/** "One entry per line" textareas; WordPress stores these with \r\n line endings. */
export function lines(parent: AcfRecord, name: string, path: string): string[] {
  const items = text(parent, name, path)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (!items.length) fail(`${path}.${name}`, 'has no entries');
  return items;
}

/** Textareas using the documented [link text](/url) syntax. */
export function parseRichText(value: string, path: string): RichText {
  const segments: Array<string | { text: string; href: string }> = [];
  let last = 0;

  for (const match of value.matchAll(LINK_SYNTAX)) {
    const index = match.index ?? 0;
    if (index > last) segments.push(value.slice(last, index));
    segments.push({ text: match[1], href: href(match[2], path) });
    last = index + match[0].length;
  }
  if (last < value.length) segments.push(value.slice(last));

  return segments;
}

export function richText(parent: AcfRecord, name: string, path: string): RichText {
  return parseRichText(text(parent, name, path), `${path}.${name}`);
}

function optionalRichText(parent: AcfRecord, name: string, path: string): RichText | undefined {
  const value = optionalText(parent, name, path);
  return value ? parseRichText(value, `${path}.${name}`) : undefined;
}

export function cta(parent: AcfRecord, name: string, path: string): CtaLink {
  const link = group(parent, name, path);
  const linkPath = `${path}.${name}`;
  return { label: text(link, 'label', linkPath), href: href(text(link, 'href', linkPath), `${linkPath}.href`) };
}

export function paragraphs(parent: AcfRecord, path: string): string[] {
  const second = optionalText(parent, 'paragraph_2', path);
  return second ? [text(parent, 'paragraph_1', path), second] : [text(parent, 'paragraph_1', path)];
}

function isEmptySlot(slot: AcfRecord): boolean {
  return Object.entries(slot).every(([key, value]) => {
    if (SELECT_FIELDS.has(key)) return true;
    if (isRecord(value)) return isEmptySlot(value);
    return value === '' || value === null || value === undefined || value === false;
  });
}

/**
 * Numbered sub-groups (step_1, step_2, …) in numeric order. Unused slots are
 * skipped; partly filled slots fail validation in their own mapper.
 */
export function slots<T>(
  parent: AcfRecord,
  prefix: string,
  path: string,
  map: (slot: AcfRecord, slotPath: string) => T,
  { required = true } = {},
): T[] {
  const pattern = new RegExp(`^${prefix}_(\\d+)$`);
  const items = Object.keys(parent)
    .map((key) => ({ key, match: pattern.exec(key) }))
    .filter((entry): entry is { key: string; match: RegExpExecArray } => entry.match !== null)
    .sort((a, b) => Number(a.match[1]) - Number(b.match[1]))
    .flatMap(({ key }) => {
      const slot = parent[key];
      if (!isRecord(slot)) fail(`${path}.${key}`, 'is not a group');
      return isEmptySlot(slot) ? [] : [map(slot, `${path}.${key}`)];
    });

  if (required && !items.length) fail(`${path}.${prefix}_*`, 'has no filled entries');
  return items;
}

function unique(values: string[], path: string) {
  const duplicate = values.find((value, i) => values.indexOf(value) !== i);
  if (duplicate) fail(path, `has duplicate value "${duplicate}"`);
}

/* ------------------------------- sections ------------------------------- */

function mapSeo(acf: AcfRecord): LeadGenerationContent['seo'] {
  const path = 'acf.seo';
  const seo = group(acf, 'seo', 'acf');
  const service = group(seo, 'service', path);
  const servicePath = `${path}.service`;

  return {
    title: text(seo, 'title', path),
    description: text(seo, 'description', path),
    canonical: href(text(seo, 'canonical', path), `${path}.canonical`),
    breadcrumbLabel: text(seo, 'breadcrumb_label', path),
    service: {
      name: text(service, 'name', servicePath),
      alternateName: lines(service, 'alternate_names', servicePath),
      serviceType: text(service, 'service_type', servicePath),
      description: text(service, 'description', servicePath),
      areaServed: slots(service, 'area', servicePath, (area, p): AreaServed => ({
        type: choice(area, 'type', AREA_TYPES, p),
        name: text(area, 'name', p),
      })),
      providerId: href(text(service, 'provider_id', servicePath), `${servicePath}.provider_id`),
      providerName: text(service, 'provider_name', servicePath),
      providerUrl: href(text(service, 'provider_url', servicePath), `${servicePath}.provider_url`),
    },
  };
}

function mapHero(acf: AcfRecord): LeadGenerationContent['hero'] {
  const path = 'acf.hero';
  const hero = group(acf, 'hero', 'acf');
  return {
    title: text(hero, 'title', path),
    lead: text(hero, 'lead', path),
    body: text(hero, 'body', path),
    primaryCta: cta(hero, 'primary_cta', path),
    secondaryCta: cta(hero, 'secondary_cta', path),
    phone: cta(hero, 'phone', path),
    whatsapp: cta(hero, 'whatsapp', path),
  };
}

function mapIconItem(slot: AcfRecord, path: string): IconItem {
  return {
    icon: choice(slot, 'icon', LEAD_ICONS, path),
    title: text(slot, 'title', path),
    description: text(slot, 'description', path),
  };
}

function mapTitledText(slot: AcfRecord, path: string): TitledText {
  return { title: text(slot, 'title', path), description: text(slot, 'description', path) };
}

function mapPartner(acf: AcfRecord): LeadGenerationContent['partner'] {
  const path = 'acf.partner';
  const partner = group(acf, 'partner', 'acf');
  return {
    eyebrow: text(partner, 'eyebrow', path),
    title: text(partner, 'title', path),
    paragraphs: paragraphs(partner, path),
    cards: slots(partner, 'card', path, mapIconItem),
  };
}

function mapSolution(slot: AcfRecord, path: string): LeadSolution {
  const points = slots(slot, 'point', path, mapTitledText, { required: false });
  const followUp = optionalRichText(slot, 'follow_up', path);

  return {
    id: anchorId(slot, 'anchor_id', path),
    icon: choice(slot, 'icon', LEAD_ICONS, path),
    title: text(slot, 'title', path),
    body: text(slot, 'body', path),
    ...(points.length ? { points } : {}),
    ...(followUp ? { followUp } : {}),
    schemaName: text(slot, 'schema_name', path),
    schemaDescription: text(slot, 'schema_description', path),
  };
}

function mapSolutions(acf: AcfRecord): LeadGenerationContent['solutions'] {
  const path = 'acf.solutions';
  const solutions = group(acf, 'solutions', 'acf');
  const items = slots(solutions, 'solution', path, mapSolution);
  unique(items.map((item) => item.id), `${path}.solution_*.anchor_id`);

  return {
    id: anchorId(solutions, 'anchor_id', path),
    eyebrow: text(solutions, 'eyebrow', path),
    title: text(solutions, 'title', path),
    intro: richText(solutions, 'intro', path),
    indexLabel: text(solutions, 'index_label', path),
    items,
    closing: richText(solutions, 'closing', path),
  };
}

function mapProcess(acf: AcfRecord): LeadGenerationContent['process'] {
  const path = 'acf.process';
  const process = group(acf, 'process', 'acf');
  return {
    eyebrow: text(process, 'eyebrow', path),
    title: text(process, 'title', path),
    intro: text(process, 'intro', path),
    stepLabel: text(process, 'step_label', path),
    steps: slots(process, 'step', path, mapTitledText),
  };
}

function mapMetrics(acf: AcfRecord): LeadGenerationContent['metrics'] {
  const path = 'acf.metrics';
  const metrics = group(acf, 'metrics', 'acf');

  const stages = slots(metrics, 'stage', path, (slot, p): FunnelStage => ({
    id: choice(slot, 'stage_id', FUNNEL_STAGE_IDS, p),
    label: text(slot, 'label', p),
    description: text(slot, 'description', p),
  }));
  unique(stages.map((stage) => stage.id), `${path}.stage_*.stage_id`);

  const stageIds = new Set(stages.map((stage) => stage.id));
  const items = slots(metrics, 'metric', path, (slot, p): LeadMetric => {
    const stage = choice(slot, 'stage', FUNNEL_STAGE_IDS, p);
    // A metric attached to a stage that isn't shown would never render.
    if (!stageIds.has(stage)) fail(`${p}.stage`, `refers to funnel stage "${stage}", which is not configured`);
    return { stage, title: text(slot, 'title', p), description: text(slot, 'description', p) };
  });

  return {
    eyebrow: text(metrics, 'eyebrow', path),
    title: text(metrics, 'title', path),
    intro: text(metrics, 'intro', path),
    stages,
    items,
  };
}

function mapWhyChoose(acf: AcfRecord): LeadGenerationContent['whyChoose'] {
  const path = 'acf.why_choose';
  const whyChoose = group(acf, 'why_choose', 'acf');
  return {
    title: text(whyChoose, 'title', path),
    intro: text(whyChoose, 'intro', path),
    points: slots(whyChoose, 'point', path, mapIconItem),
  };
}

function mapOverseas(acf: AcfRecord): LeadGenerationContent['overseas'] {
  const path = 'acf.overseas';
  const overseas = group(acf, 'overseas', 'acf');
  return {
    title: text(overseas, 'title', path),
    body: text(overseas, 'body', path),
    commitmentsTitle: text(overseas, 'commitments_title', path),
    commitments: lines(overseas, 'commitments', path),
  };
}

function mapFaq(acf: AcfRecord): LeadGenerationContent['faq'] {
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

function mapEnquiry(acf: AcfRecord): LeadGenerationContent['enquiry'] {
  const path = 'acf.enquiry';
  const enquiry = group(acf, 'enquiry', 'acf');
  const form = group(enquiry, 'form', path);
  const formPath = `${path}.form`;
  const market = group(form, 'market', formPath);
  const goal = group(form, 'goal', formPath);
  const validation = group(form, 'validation', formPath);
  const validationPath = `${formPath}.validation`;

  return {
    id: anchorId(enquiry, 'anchor_id', path),
    formId: anchorId(enquiry, 'form_anchor_id', path),
    eyebrow: text(enquiry, 'eyebrow', path),
    title: text(enquiry, 'title', path),
    paragraphs: paragraphs(enquiry, path),
    primaryCta: cta(enquiry, 'primary_cta', path),
    secondaryCta: cta(enquiry, 'secondary_cta', path),
    form: {
      name: { label: text(form, 'name_label', formPath) },
      company: { label: text(form, 'company_label', formPath) },
      phone: { label: text(form, 'phone_label', formPath) },
      email: { label: text(form, 'email_label', formPath) },
      market: {
        label: text(market, 'label', `${formPath}.market`),
        placeholder: text(market, 'placeholder', `${formPath}.market`),
        options: lines(market, 'options', `${formPath}.market`),
      },
      goal: {
        label: text(goal, 'label', `${formPath}.goal`),
        placeholder: text(goal, 'placeholder', `${formPath}.goal`),
        options: lines(goal, 'options', `${formPath}.goal`),
      },
      details: { label: text(form, 'details_label', formPath) },
      optionalLabel: text(form, 'optional_label', formPath),
      submitLabel: text(form, 'submit_label', formPath),
      submittingLabel: text(form, 'submitting_label', formPath),
      privacy: richText(form, 'privacy', formPath),
      successMessage: text(form, 'success_message', formPath),
      errorMessage: text(form, 'error_message', formPath),
      validation: {
        nameRequired: text(validation, 'name_required', validationPath),
        phoneRequired: text(validation, 'phone_required', validationPath),
        phoneInvalid: text(validation, 'phone_invalid', validationPath),
        emailRequired: text(validation, 'email_required', validationPath),
        emailInvalid: text(validation, 'email_invalid', validationPath),
      },
      subjectPrefix: text(form, 'subject_prefix', formPath),
      sourceLabel: text(form, 'source_label', formPath),
    },
  };
}

/* -------------------------------- entry -------------------------------- */

export function mapLeadGenerationAcf(acf: unknown): LeadGenerationContent | null {
  try {
    // A page with no saved ACF values returns `acf: []`.
    if (!isRecord(acf)) fail('acf', 'is empty or not an object');

    return {
      seo: mapSeo(acf),
      hero: mapHero(acf),
      partner: mapPartner(acf),
      solutions: mapSolutions(acf),
      process: mapProcess(acf),
      metrics: mapMetrics(acf),
      whyChoose: mapWhyChoose(acf),
      overseas: mapOverseas(acf),
      faq: mapFaq(acf),
      enquiry: mapEnquiry(acf),
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[Lead generation ACF] ${reason}; using local content.`);
    return null;
  }
}
