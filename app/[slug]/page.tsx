import WebDesignTemplate from '@/components/templates/WebDesignTemplate';
import DigitalMarketingTemplate from '@/components/templates/DigitalMarketingTemplate';
import BrandingTemplate from '@/components/templates/BrandingTemplate';
import MobileAppTemplate from '@/components/templates/MobileAppTemplate';
import SoftwareTemplate from '@/components/templates/SoftwareTemplate';
import TechnologyTemplate from '@/components/templates/TechnologyTemplate';

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {

  const { slug } = await params;

  const res = await fetch(
    `${API}/services?slug=${slug}&_embed`,
    {
      cache: 'no-store',
    }
  );

  const data = await res.json();

  const service = data?.[0];

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

    const mediaRes = await fetch(
      `${API}/media/${heroImageId}`,
      {
        cache: 'no-store',
      }
    );

    const mediaData = await mediaRes.json();

    heroImageUrl = mediaData.source_url;
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