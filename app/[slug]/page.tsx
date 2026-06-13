import WebDesignTemplate from '@/components/templates/WebDesignTemplate';
import DigitalMarketingTemplate from '@/components/templates/DigitalMarketingTemplate';
import BrandingTemplate from '@/components/templates/BrandingTemplate';
import MobileAppTemplate from '@/components/templates/MobileAppTemplate';

import TechnologyTemplate from '@/components/templates/TechnologyTemplate';
import axiosInstance from '@/lib/axios';
import MainTemplate from '@/components/templates/MainTemplate';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
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
    console.error("Error loading service data for slug:", slug, error);
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Service Not Found
      </div>
    );
  }

  const acf = service.acf || {};

  // HERO IMAGE
  const heroImageId = acf.hero_image;

  let heroImageUrl = '';

  if (heroImageId) {
    try {
      const mediaRes = await axiosInstance.get(
        `/wp-json/wp/v2/media/${heroImageId}`
      );
      heroImageUrl = mediaRes.data.source_url || '';
    } catch (err) {
      console.error("Error loading hero media:", heroImageId, err);
    }
  }

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