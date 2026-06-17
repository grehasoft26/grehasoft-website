import type { Metadata } from 'next';
import axiosInstance from '@/lib/axios';

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await axiosInstance.get(
      `/wp-json/wp/v2/services?slug=${slug}`
    );

    const service = res.data?.[0];

    if (!service) return {};

    const yoast = service?.yoast_head_json;

    return {
      title: yoast?.title || service?.title?.rendered,
      description: yoast?.description || '',
      alternates: {
        canonical: yoast?.canonical,
      },
      openGraph: {
        title: yoast?.og_title,
        description: yoast?.og_description,
        url: yoast?.og_url,
        images:
          yoast?.og_image?.map((img: { url: string }) => img.url) || [],
      },
      twitter: {
        card: 'summary_large_image',
        title: yoast?.twitter_title || yoast?.title,
        description:
          yoast?.twitter_description || yoast?.description,
      },
    };
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
    const res = await axiosInstance.get(
      `/wp-json/wp/v2/services?slug=${slug}&_embed`
    );

    service = res.data?.[0] || null;
  } catch (error) {
    console.error(
      'Error loading service data for slug:',
      slug,
      error
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Service Not Found
      </div>
    );
  }

  const acf = service.acf || {};

  // Custom Schema from ACF
  const schemaJson = acf?.schema_json || '';

  // Hero Image
  const heroImageId = acf.hero_image;

  let heroImageUrl = '';

  if (heroImageId) {
    try {
      const mediaRes = await axiosInstance.get(
        `/wp-json/wp/v2/media/${heroImageId}`
      );

      heroImageUrl = mediaRes.data?.source_url || '';
    } catch (err) {
      console.error(
        'Error loading hero media:',
        heroImageId,
        err
      );
    }
  }

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