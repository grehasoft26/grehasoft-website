import type { Metadata } from 'next';
import { cache } from 'react';
import LeadGenerationTemplate from '@/components/templates/LeadGenerationTemplate';
import { mapLeadGenerationAcf } from '@/lib/adapters/lead-generation-acf';
import { getPage } from '@/lib/backend-api';
import { leadGenerationContent } from '@/lib/content/lead-generation';
import { buildLeadGenerationJsonLd, serializeJsonLd } from '@/lib/lead-generation-schema';
import type { LeadGenerationContent } from '@/types/lead-generation';

// Content comes from the WordPress page's ACF fields (via NestJS GET /pages/:slug).
// The local content file is the fallback when the API, page or ACF data is unavailable.

export const revalidate = 60;

const PAGE_SLUG = 'lead-generation-services';

// The canonical stays owned by this route: Yoast's og_url points at the CMS domain
// with a trailing slash, which the frontend redirects.
const CANONICAL = leadGenerationContent.seo.canonical;

interface YoastMeta {
  title?: string;
  description?: string;
  og_title?: string;
  og_description?: string;
  twitter_title?: string;
  twitter_description?: string;
}

function readYoast(page: unknown): YoastMeta {
  if (typeof page !== 'object' || page === null || !('yoast_head_json' in page)) return {};
  const yoast = page.yoast_head_json;
  if (typeof yoast !== 'object' || yoast === null) return {};

  const field = (key: keyof YoastMeta) => {
    const value = (yoast as Record<string, unknown>)[key];
    return typeof value === 'string' && value.trim() ? value.trim() : undefined;
  };

  return {
    title: field('title'),
    description: field('description'),
    og_title: field('og_title'),
    og_description: field('og_description'),
    twitter_title: field('twitter_title'),
    twitter_description: field('twitter_description'),
  };
}

/** One NestJS request per render, shared by generateMetadata and the page. */
const getLeadGenerationPage = cache(async (): Promise<{ content: LeadGenerationContent; yoast: YoastMeta }> => {
  let page: unknown = null;
  try {
    page = await getPage(PAGE_SLUG);
  } catch (error) {
    console.error('[Lead generation] Failed to load WordPress page:', error);
  }

  const acf = typeof page === 'object' && page !== null && 'acf' in page ? page.acf : undefined;
  if (!page) console.warn('[Lead generation] WordPress page unavailable; using local content.');

  const mapped = page ? mapLeadGenerationAcf(acf) : null;
  const content = mapped ?? leadGenerationContent;

  return {
    content: { ...content, seo: { ...content.seo, canonical: CANONICAL } },
    yoast: readYoast(page),
  };
});

export async function generateMetadata(): Promise<Metadata> {
  const { yoast } = await getLeadGenerationPage();

  // Yoast owns the title and description; the route's existing values are the fallback.
  const title = yoast.title ?? leadGenerationContent.seo.title;
  const description = yoast.description ?? leadGenerationContent.seo.description;

  return {
    title,
    description,
    alternates: {
      canonical: CANONICAL,
    },
    openGraph: {
      type: 'website',
      siteName: 'Grehasoft',
      title: yoast.og_title ?? title,
      description: yoast.og_description ?? description,
      url: CANONICAL,
    },
    twitter: {
      card: 'summary_large_image',
      title: yoast.twitter_title ?? title,
      description: yoast.twitter_description ?? description,
    },
  };
}

export default async function LeadGenerationServicesPage() {
  const { content } = await getLeadGenerationPage();
  const jsonLd = buildLeadGenerationJsonLd(content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <LeadGenerationTemplate content={content} />
    </>
  );
}
