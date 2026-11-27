import type { CtaLink, GoogleBusinessProfileContent, RichText } from '@/types/google-business-profile';
import GbpHero from '@/components/service/google-business-profile/GbpHero';
import LocalVisibilitySection from '@/components/service/google-business-profile/LocalVisibilitySection';
import ProfileServicesSection from '@/components/service/google-business-profile/ProfileServicesSection';
import GbpProcessSection from '@/components/service/google-business-profile/GbpProcessSection';
import EligibleBusinessesSection from '@/components/service/google-business-profile/EligibleBusinessesSection';
import GbpWhyChooseSection from '@/components/service/google-business-profile/GbpWhyChooseSection';
import SeoStrategySection from '@/components/service/google-business-profile/SeoStrategySection';
import GbpFaqSection from '@/components/service/google-business-profile/GbpFaqSection';
import GbpEnquirySection from '@/components/service/google-business-profile/GbpEnquirySection';

interface Props {
  content: GoogleBusinessProfileContent;
}

/*
 * This page has no enquiry form of its own (it was removed from the final CTA), so links that pointed
 * at it (#enquiry-form, or the old #enquiry section) go to the contact page and its form instead:
 * the hero and final-CTA audit buttons and the "contact Grehasoft" link. Applied at render time; the WordPress values are left unchanged.
 */
const CONTACT_PAGE = '/contact-us';
const FORM_ANCHORS = new Set(['#enquiry-form', '#enquiry']);

const toContactPage = (href: string) => (FORM_ANCHORS.has(href) ? CONTACT_PAGE : href);
const ctaLink = (link: CtaLink): CtaLink => ({ ...link, href: toContactPage(link.href) });
const richText = (value: RichText): RichText =>
  value.map((segment) => (typeof segment === 'string' ? segment : { ...segment, href: toContactPage(segment.href) }));

function withContactPageLinks(content: GoogleBusinessProfileContent): GoogleBusinessProfileContent {
  return {
    ...content,
    hero: { ...content.hero, primaryCta: ctaLink(content.hero.primaryCta), secondaryCta: ctaLink(content.hero.secondaryCta) },
    seoStrategy: { ...content.seoStrategy, paragraphs: content.seoStrategy.paragraphs.map(richText) },
    enquiry: { ...content.enquiry, primaryCta: ctaLink(content.enquiry.primaryCta), secondaryCta: ctaLink(content.enquiry.secondaryCta) },
  };
}

export default function GoogleBusinessProfileTemplate({ content: source }: Props) {
  const content = withContactPageLinks(source);

  return (
    <main className="bg-white">
      <GbpHero hero={content.hero} breadcrumbLabel={content.seo.breadcrumbLabel} />
      <LocalVisibilitySection visibility={content.visibility} />
      <ProfileServicesSection services={content.services} />
      <GbpProcessSection process={content.process} />
      <EligibleBusinessesSection eligible={content.eligible} />
      <GbpWhyChooseSection whyChoose={content.whyChoose} />
      <SeoStrategySection seoStrategy={content.seoStrategy} />
      <GbpFaqSection faq={content.faq} />
      <GbpEnquirySection enquiry={content.enquiry} />
    </main>
  );
}
