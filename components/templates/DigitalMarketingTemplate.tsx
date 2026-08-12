import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import IntroSection from '@/components/service/digital-marketing/IntroSection';
import ServicesGrid from '@/components/service/digital-marketing/ServicesGrid';
import WhySEOSection from '@/components/service/digital-marketing/WhySEOSection';
import ProcessSection from '@/components/service/digital-marketing/ProcessSection';
import IndustriesSection from '@/components/service/digital-marketing/IndustriesSection';
import StandOutSection from '@/components/service/digital-marketing/StandOutSection';
import ContactSection from '@/components/service/digital-marketing/ContactSection';
import FAQSection from '@/components/service/digital-marketing/FAQSection';
import LocalSection from '@/components/service/digital-marketing/LocalSection';
import SeoCaseStudiesSection from '@/components/service/digital-marketing/SeoCaseStudiesSection';
import LogoGallery from '@/components/service/digital-marketing/LogoGallery';
interface Props {
  service: any;
  heroImageUrl?: string;
}

export default function DigitalMarketingTemplate({
  service,
  heroImageUrl,
}: Props) {

  const acf = service?.acf || {};
// FEATURED IMAGE
  const featuredImage =
    service?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
    '/images/fallback.jpg';


  return (
    <main className="bg-white">

     <PageHeader
  title={acf.page_title || service.title?.rendered}
  description={acf.page_desc}
  breadcrumb={[
  
    {
      name: service.title?.rendered,
      href: `/${acf.parent_slug}/${acf.custom_slug}`,
    },
  ]}
/>

      <IntroSection
        acf={acf}
        heroImageUrl={heroImageUrl}
         featuredImage={featuredImage}
      />
     <StandOutSection acf={acf} />
   <SeoCaseStudiesSection acf={acf} />
   {service.acf.show_logo_gallery && (
  <LogoGallery />
)}
      <ServicesGrid acf={acf} />

      <WhySEOSection acf={acf} />
      <LocalSection acf={acf} />
     
   <ProcessSection acf={acf} /> 

      <IndustriesSection acf={acf} /> 
   

       <ContactSection acf={acf} /> 

       <FAQSection acf={acf} /> 

    <CTA />
      

    </main>
  );
}