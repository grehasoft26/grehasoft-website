import type { LeadGenerationContent } from '@/types/lead-generation';
import LeadHero from '@/components/service/lead-generation/LeadHero';
import PartnerSection from '@/components/service/lead-generation/PartnerSection';
import SolutionsSection from '@/components/service/lead-generation/SolutionsSection';
import ProcessSection from '@/components/service/lead-generation/ProcessSection';
import MetricsFunnelSection from '@/components/service/lead-generation/MetricsFunnelSection';
import WhyChooseSection from '@/components/service/lead-generation/WhyChooseSection';
import OverseasSection from '@/components/service/lead-generation/OverseasSection';
import FaqSection from '@/components/service/lead-generation/FaqSection';
import EnquirySection from '@/components/service/lead-generation/EnquirySection';

interface Props {
  content: LeadGenerationContent;
}

export default function LeadGenerationTemplate({ content }: Props) {
  return (
    <main className="bg-white">
      <LeadHero hero={content.hero} breadcrumbLabel={content.seo.breadcrumbLabel} />
      <PartnerSection partner={content.partner} />
      <SolutionsSection solutions={content.solutions} />
      <ProcessSection process={content.process} />
      <MetricsFunnelSection metrics={content.metrics} />
      <WhyChooseSection whyChoose={content.whyChoose} />
      <OverseasSection overseas={content.overseas} />
      <FaqSection faq={content.faq} cta={content.hero.primaryCta} />
      <EnquirySection enquiry={content.enquiry} />
    </main>
  );
}
