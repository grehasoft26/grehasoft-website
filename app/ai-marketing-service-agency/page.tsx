import type { Metadata } from 'next';
import { cache } from 'react';
import AiMarketingTemplate from '@/components/templates/AiMarketingTemplate';
import { mapAiMarketingAcf } from '@/lib/adapters/ai-marketing-acf';
import { getPage } from '@/lib/backend-api';
import { aiMarketingContent } from '@/lib/content/ai-marketing';
import { buildAiMarketingJsonLd } from '@/lib/ai-marketing-schema';
import { buildPageMetadata, serializeJsonLd } from '@/lib/seo';
import type { AiMarketingContent } from '@/types/ai-marketing';

// Content comes from the WordPress page's ACF fields (via NestJS GET /pages/:slug),
// mapped by lib/adapters/ai-marketing-acf.ts. The local content file is the
// whole-page fallback when the API, the page or any ACF field is unavailable or invalid.
// The canonical path, JSON-LD and enquiry form configuration stay code-controlled.

const PAGE_SLUG = 'ai-marketing-service-agency';

/** One NestJS request per render, shared by generateMetadata and the page. */
const getAiMarketingContent = cache(async (): Promise<AiMarketingContent> => {
  let page: unknown = null;
  try {
    page = await getPage(PAGE_SLUG);
  } catch (error) {
    console.error('[AI marketing] Failed to load WordPress page:', error);
  }

  if (!page) {
    console.warn('[AI marketing] WordPress page unavailable; using local content.');
    return aiMarketingContent;
  }

  const acf = typeof page === 'object' && page !== null && 'acf' in page ? page.acf : undefined;
  return mapAiMarketingAcf(acf) ?? aiMarketingContent;
});

export async function generateMetadata(): Promise<Metadata> {
  // Title and description come from the ACF SEO tab (local content as fallback), not Yoast.
  const { seo } = await getAiMarketingContent();

  return buildPageMetadata({
    path: seo.path,
    fallbackTitle: seo.title,
    fallbackDescription: seo.description,
  });
}

export default async function AiMarketingServiceAgencyPage() {
  const content = await getAiMarketingContent();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildAiMarketingJsonLd(content)) }}
      />
      <AiMarketingTemplate content={content} />
    </>
  );
}
