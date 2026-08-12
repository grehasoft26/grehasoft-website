
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import IntroSection from '@/components/service/branding/IntroSection';
import StandOutSection from '@/components/service/branding/StandOutSection';
import ServicesGrid from '@/components/service/branding/ServicesGrid';
import WhyBrandingSection from '@/components/service/branding/WhyBrandingSection';
import LocalSection from '@/components/service/branding/LocalSection';
import ProcessSection from '@/components/service/digital-marketing/ProcessSection';
import IndustriesSection from '@/components/service/digital-marketing/IndustriesSection';
import ContactSection from '@/components/service/branding/ContactSection';
import FAQSection from '@/components/service/digital-marketing/FAQSection';
import GlobalExperienceSection from '@/components/service/branding/GlobalExperienceSection';
import TechnologySection from '@/components/service/technology/TechnologySection';
interface Props {
  service: any;
  heroImageUrl?: string;
}
export default function BrandingTemplate({
  service,
  heroImageUrl,
}: Props) {
  const acf = service?.acf || {};

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

      <GlobalExperienceSection acf={acf} />

      <ServicesGrid acf={acf} />

      <WhyBrandingSection acf={acf} />

      <LocalSection acf={acf} />
      <TechnologySection acf={acf} />

      <ProcessSection acf={acf} />

      <IndustriesSection acf={acf} />

      <ContactSection acf={acf} />

      <FAQSection acf={acf} />

      <CTA />
     

    </main>
  );
}