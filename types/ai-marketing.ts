/**
 * Content contract for the AI Marketing Services page.
 *
 * Presentation components only read this shape, so the local content file
 * (lib/content/ai-marketing.ts) can later be replaced by a WordPress ACF
 * adapter without touching the components, as on the Lead Generation page.
 * Shared primitives come from the Lead Generation types.
 */

import type {
  CtaLink,
  FaqItem,
  LeadGenerationContent,
  RichText,
  TitledText,
} from '@/types/lead-generation';

export type AiIcon =
  | 'search'
  | 'pen'
  | 'video'
  | 'share'
  | 'workflow'
  | 'scan'
  | 'sparkles'
  | 'network'
  | 'fingerprint'
  | 'layers'
  | 'shield'
  | 'target';

export interface AiIconItem extends TitledText {
  icon: AiIcon;
}

/** A titled item whose body may run to more than one paragraph. */
export interface AiFeature {
  icon: AiIcon;
  title: string;
  paragraphs: string[];
}

export interface AiLinkedItem extends TitledText {
  /** "Explore our …" line with links to the related service pages. */
  followUp: RichText;
}

/** A supplied video file; the video section renders without a player until one is set. */
export interface AiVideoAsset {
  src: string;
  type: string;
  /** Accessible name of the player. */
  title: string;
  poster?: string;
  /** WebVTT captions file. */
  captions?: { src: string; label: string; srcLang: string };
}

export interface AiMarketingContent {
  seo: {
    /** Route path; the canonical URL is built from it on the production host. */
    path: string;
    title: string;
    description: string;
    breadcrumbLabel: string;
    service: {
      name: string;
      description: string;
      serviceType: string[];
      areaServed: { type: 'City' | 'AdministrativeArea' | 'Country'; name: string }[];
    };
  };
  hero: {
    title: string;
    body: string;
    /** Capabilities named in the hero copy, repeated in the decorative side panel. */
    capabilities: string[];
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    contact: CtaLink;
    whatsapp: CtaLink;
  };
  discovery: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    coverTitle: string;
    cover: AiIconItem[];
  };
  searchVisibility: {
    /** Anchor id; the hero's secondary button links here. */
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: AiFeature[];
  };
  contentCreation: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: TitledText[];
    closing: string;
  };
  video: {
    eyebrow: string;
    title: string;
    body: string;
    items: TitledText[];
    cta: CtaLink;
    /** Not supplied yet: the section renders without a player. */
    asset?: AiVideoAsset;
  };
  connected: {
    eyebrow: string;
    title: string;
    intro: string;
    items: AiLinkedItem[];
    closing: string;
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    stepLabel: string;
    steps: TitledText[];
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    intro: string;
    points: AiIconItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  /** Same shape as the Lead Generation enquiry, so the existing EnquirySection and form are reused. */
  enquiry: LeadGenerationContent['enquiry'];
}
