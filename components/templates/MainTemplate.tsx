import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import IntroSection from '@/components/service/digital-marketing/IntroSection';
import ServicesGrid from '@/components/service/digital-marketing/ServicesGrid';
import WhySEOSection from '@/components/service/digital-marketing/WhySEOSection';
import ProcessSection from '@/components/service/digital-marketing/ProcessSection';
import IndustriesSection from '@/components/service/main/IndustriesSection';
import StandOutSection from '@/components/service/branding/StandOutSection';
import ContactSection from '@/components/service/digital-marketing/ContactSection';
import FAQSection from '@/components/service/digital-marketing/FAQSection';
import LocalSection from '@/components/service/digital-marketing/LocalSection';
import AdvantagesSection from '@/components/service/main/AdvantagesSection';
import ServicesSection from '@/components/service/main/ServicesSection';
import ResultsTimelineSection from '@/components/service/main/ResultsTimelineSection';
import PricingPackagesSection from '@/components/service/main/PricingPackagesSection';
import ResultsTimelineSection1 from '@/components/service/main/ResultsTimelineSection1';
interface Props {
  service: any;
  heroImageUrl?: string;
}

export default function MainTemplate({
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
      {/*<StandOutSection acf={acf} /> */} 
     {/*<AdvantagesSection acf={acf} /> */}

     {/*<ServicesSection acf={acf} /> */}
      <LocalSection acf={acf} />
     <ServicesGrid acf={acf} />
<ProcessSection acf={acf} /> 
      
    
     
   
   <ResultsTimelineSection acf={acf} />
  
   <PricingPackagesSection acf={acf} />
 
      <IndustriesSection acf={acf} /> 
 <WhySEOSection acf={acf} />
     
       <ResultsTimelineSection1 acf={acf} />
 <StandOutSection acf={acf} />
       <FAQSection acf={acf} /> 

    <CTA />
      <Footer />

    </main>
  );
}