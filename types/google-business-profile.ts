/**
 * Content contract for the Google Business Profile Optimization service page.
 *
 * Presentation components only read this shape. It is produced by the WordPress ACF adapter
 * (lib/adapters/google-business-profile-acf.ts), or by the local fallback content. Shared building blocks (rich text,
 * CTAs, FAQ items, the enquiry section) come from the Lead Generation types.
 */
import type {
  CtaLink,
  FaqItem,
  FlexibleEnquiryContent,
  RichText,
  TitledText,
} from '@/types/lead-generation';

export type { CtaLink, FaqItem, FlexibleEnquiryContent, RichText, TitledText };

export type GbpIcon =
  | 'clipboard-check'
  | 'shield-check'
  | 'tags'
  | 'map-pin'
  | 'images'
  | 'message-text'
  | 'chart-line'
  | 'building'
  | 'store'
  | 'stethoscope'
  | 'utensils'
  | 'house'
  | 'graduation-cap'
  | 'award'
  | 'route'
  | 'eye'
  | 'handshake'
  | 'globe';

export interface GbpIconItem extends TitledText {
  icon: GbpIcon;
}

/** schema.org allows a place object or plain text for areaServed. */
export type GbpAreaServed = string | { type: 'City' | 'AdministrativeArea' | 'Country'; name: string };

export interface GoogleBusinessProfileContent {
  seo: {
    title: string;
    description: string;
    canonical: string;
    breadcrumbLabel: string;
    service: {
      name: string;
      serviceType: string;
      description: string;
      areaServed: GbpAreaServed[];
      /** Id of the Grehasoft business node defined on the homepage (LocalBusiness). */
      providerId: string;
      providerName: string;
      providerUrl: string;
    };
  };
  hero: {
    title: string;
    /** The part of the title shown with the brand gradient. */
    titleAccent: string;
    lead: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    phone: CtaLink;
    whatsapp: CtaLink;
    /** Decorative profile preview: the three interaction types named in the monitoring service. */
    visualLabels: [string, string, string];
  };
  visibility: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  services: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    items: GbpIconItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Headings keep the document's "Step n — " prefix in their text; the component shows the number as a badge. */
    steps: TitledText[];
  };
  eligible: {
    eyebrow: string;
    title: string;
    intro: string;
    items: GbpIconItem[];
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    intro: string;
    points: GbpIconItem[];
  };
  seoStrategy: {
    eyebrow: string;
    title: string;
    paragraphs: RichText[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  enquiry: FlexibleEnquiryContent;
}
