/**
 * Content contract for the Lead Generation service page.
 *
 * Presentation components only read this shape, so the Phase 1 local data
 * file can later be replaced by a WordPress ACF adapter without touching
 * the components.
 */

export interface InlineLink {
  text: string;
  href: string;
}

/** Plain text with optional inline links, e.g. ['Explore our ', { text: 'SEO Services', href: '/seo' }, '.'] */
export type RichText = ReadonlyArray<string | InlineLink>;

export interface CtaLink {
  label: string;
  href: string;
}

export type LeadIcon =
  | 'award'
  | 'layers'
  | 'globe'
  | 'search'
  | 'megaphone'
  | 'briefcase'
  | 'map-pin'
  | 'layout'
  | 'workflow'
  | 'handshake'
  | 'route'
  | 'eye';

export interface IconItem {
  icon: LeadIcon;
  title: string;
  description: string;
}

export interface TitledText {
  title: string;
  description: string;
}

export interface LeadSolution {
  /** Anchor id used by the solutions index. */
  id: string;
  icon: LeadIcon;
  title: string;
  body: string;
  points?: TitledText[];
  followUp?: RichText;
  /** Short description used only in the JSON-LD offer catalog. */
  schemaName: string;
  schemaDescription: string;
}

export type FunnelStageId = 'visitors' | 'enquiries' | 'qualified' | 'opportunities';

export interface FunnelStage {
  id: FunnelStageId;
  label: string;
  description: string;
}

export interface LeadMetric extends TitledText {
  stage: FunnelStageId;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SelectField {
  label: string;
  placeholder: string;
  options: string[];
}

export interface EnquiryFormContent {
  name: { label: string };
  company: { label: string };
  phone: { label: string };
  email: { label: string };
  market: SelectField;
  goal: SelectField;
  details: { label: string };
  optionalLabel: string;
  submitLabel: string;
  submittingLabel: string;
  privacy: RichText;
  successMessage: string;
  errorMessage: string;
  validation: {
    nameRequired: string;
    phoneRequired: string;
    phoneInvalid: string;
    emailRequired: string;
    emailInvalid: string;
  };
  /** Prefix for the subject line sent with the enquiry. */
  subjectPrefix: string;
  /** Source label added to the enquiry message. */
  sourceLabel: string;
}

export interface LeadGenerationContent {
  seo: {
    title: string;
    description: string;
    canonical: string;
    breadcrumbLabel: string;
    service: {
      name: string;
      alternateName: string[];
      serviceType: string;
      description: string;
      areaServed: { type: 'City' | 'AdministrativeArea' | 'Country'; name: string }[];
      providerId: string;
      providerName: string;
      providerUrl: string;
    };
  };
  hero: {
    title: string;
    lead: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    phone: CtaLink;
    whatsapp: CtaLink;
  };
  partner: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cards: IconItem[];
  };
  solutions: {
    id: string;
    eyebrow: string;
    title: string;
    intro: RichText;
    indexLabel: string;
    items: LeadSolution[];
    closing: RichText;
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    stepLabel: string;
    steps: TitledText[];
  };
  metrics: {
    eyebrow: string;
    title: string;
    intro: string;
    stages: FunnelStage[];
    items: LeadMetric[];
  };
  whyChoose: {
    title: string;
    intro: string;
    points: IconItem[];
  };
  overseas: {
    title: string;
    body: string;
    commitmentsTitle: string;
    commitments: string[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  enquiry: {
    id: string;
    formId: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    form: EnquiryFormContent;
  };
}
