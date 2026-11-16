import WebDesignTemplate from '@/components/templates/WebDesignTemplate';
import DigitalMarketingTemplate from '@/components/templates/DigitalMarketingTemplate';
import BrandingTemplate from '@/components/templates/BrandingTemplate';
import MobileAppTemplate from '@/components/templates/MobileAppTemplate';

import TechnologyTemplate from '@/components/templates/TechnologyTemplate';
import { notFound } from 'next/navigation';
import { getServiceChild } from '@/lib/backend-api';
import MainTemplate from '@/components/templates/MainTemplate';

interface PageProps {
  params: Promise<{
    slug: string;
    child: string;
  }>;
}

// ISR, same as the parent service route: rendered on first request,
// regenerated at most every 5 minutes, last good page kept if a
// regeneration fails, and only a backend 404 produces notFound().
export const revalidate = 300;

export async function generateStaticParams() {
  return [];
}

export default async function Page({
  params,
}: PageProps) {

  const { slug, child } = await params;
  let service: any = null;
  try {
    service = await getServiceChild(slug, child);
  } catch (error) {
    // Backend/network failure: surface as a server error, not a 404.
    console.error("Error loading services for child slug:", child, error);
    throw error;
  }

  if (!service) {
    notFound();
  }
  const acf = service.acf || {};

  // Child exists but under a different parent: this URL is not a real page.
  // Normalized the same way the backend matches slugs (case, slashes).
  const normalizeSlug = (s: string) => (s || '').replace(/^\/|\/$/g, '').toLowerCase().trim();
  if (normalizeSlug(acf.parent_slug) !== normalizeSlug(slug)) {
    notFound();
  }

  // HERO IMAGE (Pre-resolved by NestJS backend!)
  const heroImageUrl = service.heroImageUrl || '';

  switch (acf.layout_type) {

    case 'web-design':
      return (
        <WebDesignTemplate
          service={service}
          heroImageUrl={heroImageUrl}
        />
      );

    case 'digital-marketing':
      return (
        <DigitalMarketingTemplate
          service={service}
          heroImageUrl={heroImageUrl}
        />
      );

    case 'branding':
      return (
        <BrandingTemplate
          service={service}
        
        />
      );

    case 'mobile-app':
      return (
        <MobileAppTemplate
          service={service}
         
        />
      );

    case 'main':
      return (
        <MainTemplate
          service={service}
          heroImageUrl={heroImageUrl}
        />
      );

    case 'technology':
      return (
        <TechnologyTemplate
          service={service}
       
        />
      );

    default:
      return (
        <WebDesignTemplate
          service={service}
          heroImageUrl={heroImageUrl}
        />
      );
  }
}