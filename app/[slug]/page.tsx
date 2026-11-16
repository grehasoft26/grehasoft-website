import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getService } from '@/lib/backend-api';
import { buildPageMetadata } from '@/lib/seo';

import WebDesignTemplate from '@/components/templates/WebDesignTemplate';
import DigitalMarketingTemplate from '@/components/templates/DigitalMarketingTemplate';
import BrandingTemplate from '@/components/templates/BrandingTemplate';
import MobileAppTemplate from '@/components/templates/MobileAppTemplate';
import TechnologyTemplate from '@/components/templates/TechnologyTemplate';
import MainTemplate from '@/components/templates/MainTemplate';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ISR: each service page is rendered on its first request (nothing is
// prerendered at build) and regenerated at most every 5 minutes. A failed
// regeneration keeps serving the last good page; backend errors are never
// turned into a cached 404 because only a backend 404 calls notFound().
export const revalidate = 300;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const service = await getService(slug);

    if (!service) return {};

    return buildPageMetadata({
      path: `/${slug}`,
      yoast: service?.yoast_head_json,
      fallbackTitle: service?.title?.rendered,
    });
  } catch (error) {
    console.error('Metadata Error:', error);
    return {};
  }
}

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;

  let service: any = null;

  try {
    service = await getService(slug);
  } catch (error) {
    // Backend/network failure: surface as a server error, not a 404.
    console.error(
      'Error loading service data for slug:',
      slug,
      error
    );
    throw error;
  }

  if (!service) {
    notFound();
  }

  const acf = service.acf || {};

  // Custom Schema from ACF
  const schemaJson = acf?.schema_json || '';

  // Hero Image (Pre-resolved by NestJS backend!)
  const heroImageUrl = service.heroImageUrl || '';

  const schemaScript = schemaJson ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: schemaJson,
      }}
    />
  ) : null;

  switch (acf.layout_type) {
    case 'web-design':
      return (
        <>
          {schemaScript}
          <WebDesignTemplate
            service={service}
            heroImageUrl={heroImageUrl}
          />
        </>
      );

    case 'digital-marketing':
      return (
        <>
          {schemaScript}
          <DigitalMarketingTemplate
            service={service}
            heroImageUrl={heroImageUrl}
          />
        </>
      );

    case 'branding':
      return (
        <>
          {schemaScript}
          <BrandingTemplate
            service={service}
          />
        </>
      );

    case 'mobile-app':
      return (
        <>
          {schemaScript}
          <MobileAppTemplate
            service={service}
          />
        </>
      );

    case 'main':
      return (
        <>
          {schemaScript}
          <MainTemplate
            service={service}
          />
        </>
      );

    case 'technology':
      return (
        <>
          {schemaScript}
          <TechnologyTemplate
            service={service}
          />
        </>
      );

    default:
      return (
        <>
          {schemaScript}
          <WebDesignTemplate
            service={service}
            heroImageUrl={heroImageUrl}
          />
        </>
      );
  }
}