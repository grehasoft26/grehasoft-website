import WebDesignTemplate from '@/components/templates/WebDesignTemplate';
import DigitalMarketingTemplate from '@/components/templates/DigitalMarketingTemplate';
import BrandingTemplate from '@/components/templates/BrandingTemplate';
import MobileAppTemplate from '@/components/templates/MobileAppTemplate';
import SoftwareTemplate from '@/components/templates/SoftwareTemplate';
import TechnologyTemplate from '@/components/templates/TechnologyTemplate';
import axiosInstance from '@/lib/axios';

interface PageProps {
  params: Promise<{
    slug: string;
    child: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {

  const { slug, child } = await params;
  let service: any = null;
  try {
    const res = await axiosInstance.get(
      '/wp-json/wp/v2/services?_embed'
    );
    const allServices = res.data;
    if (Array.isArray(allServices)) {
      service = allServices.find(
        (item: any) =>
          item?.acf?.custom_slug === child &&
          item?.acf?.parent_slug === slug
      );
    }
  } catch (error) {
    console.error("Error loading services for child slug:", child, error);
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Service Not Found
      </div>
    );
  }
  const acf = service.acf || {};

  // Optional safety check
  if (acf.parent_slug !== slug) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Invalid URL
      </div>
    );
  }

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
      console.error("Error loading child hero media:", heroImageId, err);
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

    case 'software':
      return (
        <SoftwareTemplate
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