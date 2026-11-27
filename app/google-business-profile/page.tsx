import type { Metadata } from 'next';
import { cache } from 'react';
import GoogleBusinessProfileTemplate from '@/components/templates/GoogleBusinessProfileTemplate';
import { mapGoogleBusinessProfileAcf } from '@/lib/adapters/google-business-profile-acf';
import { getPage } from '@/lib/backend-api';
import { googleBusinessProfileContent } from '@/lib/content/google-business-profile';
import {
  buildGoogleBusinessProfileJsonLd,
  serializeJsonLd,
} from '@/lib/google-business-profile-schema';
import { buildPageMetadata } from '@/lib/seo';
import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';

// Content comes from the WordPress page's ACF fields (via NestJS GET /pages/:slug),
// mapped by lib/adapters/google-business-profile-acf.ts. The local content file is the
// whole-page fallback when the API, the page or any ACF field is unavailable or invalid.
// The canonical URL, the schema provider, the in-page anchors and the enquiry form
// configuration stay code-controlled. Same pattern as /ai-marketing-service-agency.

// As on /lead-generation-services. Without it the WordPress fetch is stored in the Next.js data
// cache for a year, so ACF edits would not appear until the next deploy.
export const revalidate = 60;

const PAGE_SLUG = 'google-business-profile';

/** One NestJS request per render, shared by generateMetadata and the page. */
const getGoogleBusinessProfileContent = cache(async (): Promise<GoogleBusinessProfileContent> => {
  let page: unknown = null;
  try {
    page = await getPage(PAGE_SLUG);
  } catch (error) {
    console.error('[Google Business Profile] Failed to load WordPress page:', error);
  }

  if (!page) {
    console.warn('[Google Business Profile] WordPress page unavailable; using local content.');
    return googleBusinessProfileContent;
  }

  const acf = typeof page === 'object' && page !== null && 'acf' in page ? page.acf : undefined;
  return mapGoogleBusinessProfileAcf(acf) ?? googleBusinessProfileContent;
});

export async function generateMetadata(): Promise<Metadata> {
  // Title and description come from the ACF SEO tab (local content as fallback), not Yoast.
  // The canonical and og:url are generated from the route (no trailing slash).
  const { seo } = await getGoogleBusinessProfileContent();

  const metadata = buildPageMetadata({
    path: '/google-business-profile',
    fallbackTitle: seo.title,
    fallbackDescription: seo.description,
  });

  return { ...metadata, openGraph: { ...metadata.openGraph, siteName: 'Grehasoft' } };
}

export default async function GoogleBusinessProfilePage() {
  const content = await getGoogleBusinessProfileContent();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildGoogleBusinessProfileJsonLd(content)) }}
      />
      <GoogleBusinessProfileTemplate content={content} />
    </>
  );
}
