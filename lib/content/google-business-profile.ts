import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import { SITE_URL, absoluteUrl } from '@/lib/seo';

/**
 * Local content for /google-business-profile. The page reads its copy from WordPress ACF
 * (lib/adapters/google-business-profile-acf.ts); this file is:
 *  - the whole-page fallback when the API, the page or any ACF field is unavailable or invalid,
 *  - the source of the code-owned values (canonical, schema provider, anchor ids, enquiry form), and
 *  - the source the WordPress import files in wordpress/ were generated from.
 * Copy comes from the "Google Business Profile" content document (corrected version), word for word,
 * with two approved edits:
 *  - the internal editorial note was removed from "10+ Years of Industry Experience", and
 *  - the meta description describes review response guidance instead of review management.
 * Labels marked "UI label" are interface text that is not in the document.
 *
 * The compliance wording is deliberate: no ranking, lead, verification or reinstatement outcome is
 * promised anywhere. Do not soften the caveats; tests/google-business-profile.test.ts guards them.
 */

/** No trailing slash: the site redirects the slashed form, so this is the URL that returns 200. */
const PAGE_URL = absoluteUrl('/google-business-profile');

const PHONE = '+918921540183';

export const googleBusinessProfileContent: GoogleBusinessProfileContent = {
  seo: {
    title: 'Google Business Profile Optimization Services in Kochi | Grehasoft',
    description:
      'Need Google Business Profile optimization in Kochi? Grehasoft manages profile details and services and guides review responses to support local visibility across Kerala, India and beyond.',
    canonical: PAGE_URL,
    breadcrumbLabel: 'Google Business Profile',
    service: {
      name: 'Google Business Profile Optimization in Kochi',
      serviceType: 'Google Business Profile Optimization and Management',
      description:
        'Grehasoft provides Google Business Profile optimization and management for eligible businesses, including profile audits, business information updates, category and service optimization, profile updates, review response guidance and performance monitoring.',
      areaServed: [
        { type: 'City', name: 'Kochi' },
        { type: 'AdministrativeArea', name: 'Kerala' },
        { type: 'Country', name: 'India' },
        'International markets',
      ],
      // The only Grehasoft business node defined in the site's pages is the homepage LocalBusiness
      // (it is a subtype of Organization). The WordPress service pages reference it the same way.
      providerId: `${SITE_URL}/#localbusiness`,
      providerName: 'Grehasoft',
      providerUrl: `${SITE_URL}/`,
    },
  },

  hero: {
    title: 'Google Business Profile Optimization in Kochi, Kerala',
    titleAccent: 'Kochi, Kerala',
    lead: 'Help local customers discover your business, understand your services and find accurate business information on Google Search and Maps.',
    primaryCta: { label: 'Get a Google Business Profile Audit', href: '#enquiry-form' },
    secondaryCta: { label: 'Explore Our Services', href: '/services' },
    // UI labels
    phone: { label: 'Contact now', href: `tel:${PHONE}` },
    whatsapp: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/918921540183?text=Hi!%20I%20would%20like%20a%20Google%20Business%20Profile%20audit%20for%20my%20business.',
    },
    visualLabels: ['Calls', 'Website clicks', 'Direction requests'],
  },

  visibility: {
    eyebrow: 'LOCAL VISIBILITY SOLUTIONS',
    title: 'Google Business Profile Management Services in Kochi',
    paragraphs: [
      'Grehasoft provides Google Business Profile optimization in Kochi for eligible businesses that want accurate profile information and a clearer presence in relevant Google Search and Maps results. Our services include profile audits, business category and service optimization, business information updates, photo and post planning, customer review response guidance and performance monitoring.',
      "Based in Kochi, Kerala, Grehasoft supports businesses throughout Kerala, across India and in international markets. We tailor our work to the business's actual locations, services, customers and objectives, focusing on accurate information, useful profile content and policy-compliant management.",
      'A well-maintained Google Business Profile helps potential customers understand what a business offers and how to contact or visit it. Our approach focuses on appropriate profile improvements and meaningful performance measurements, rather than promises of a specific ranking or number of leads.',
    ],
  },

  services: {
    id: 'services',
    eyebrow: 'PROFILE OPTIMIZATION SERVICES',
    title: "What's Included in Our Google Business Profile Optimization Service?",
    intro:
      "Our Google Business Profile management service focuses on the information and features that help customers understand and interact with a business. We first assess the existing profile, then prioritize improvements based on its condition, the business's operating model and its objectives.",
    items: [
      {
        icon: 'clipboard-check',
        title: 'Google Business Profile Audit',
        description:
          'We review your existing profile to identify incomplete information, inaccurate details, category mismatches, duplicate-listing concerns and opportunities to improve the customer experience. The findings help establish a baseline and prioritize appropriate next steps.',
      },
      {
        icon: 'shield-check',
        title: 'Profile Setup and Verification Guidance',
        description:
          "For eligible businesses, we provide guidance on profile setup, required business information and Google's verification process. Verification and reinstatement decisions remain with Google, so these outcomes cannot be guaranteed.",
      },
      {
        icon: 'tags',
        title: 'Business Categories and Service Optimization',
        description:
          'We review your primary and relevant additional categories, along with the services or products represented on the profile. Recommendations reflect what the business genuinely offers instead of unrelated categories or repetitive keywords.',
      },
      {
        icon: 'map-pin',
        title: 'Business Information and Location Accuracy',
        description:
          "We help maintain accurate contact details, opening hours, website links, addresses or service areas, and relevant profile attributes. Changes should reflect the business's real-world identity and current operating arrangements.",
      },
      {
        icon: 'images',
        title: 'Business Description, Photos and Profile Updates',
        description:
          'We help present your services, experience and business information through clear descriptions, suitable photos and available profile updates. The aim is to communicate useful information to customers rather than repeat keywords unnecessarily.',
      },
      {
        icon: 'message-text',
        title: 'Customer Review Response Guidance',
        description:
          "We help businesses develop a consistent, professional approach to responding to customer reviews. Responses should be relevant and genuine, and review-management activities must comply with Google's policies. We do not promote fake reviews or offer incentives in exchange for reviews.",
      },
      {
        icon: 'chart-line',
        title: 'Profile Performance Monitoring',
        description:
          'Where available, we review profile performance data such as calls, website clicks, direction requests and other reported interactions. These indicators help businesses understand customer engagement and identify possible improvements.',
      },
      {
        icon: 'building',
        title: 'Multi-Location Profile Management',
        description:
          "For eligible businesses with multiple genuine locations, we help maintain accurate information and consistent management processes across their profiles. Each location must independently satisfy Google's applicable eligibility requirements.",
      },
    ],
  },

  process: {
    eyebrow: 'OUR OPTIMIZATION PROCESS',
    title: 'Our Google Business Profile Optimization Process',
    intro:
      'Every business has different customers, locations and profile requirements. Grehasoft follows a structured process to identify useful improvements, implement agreed changes and review performance over time.',
    steps: [
      {
        title: 'Step 1 — Review Your Existing Profile',
        description:
          'We assess your current profile, business information, categories, status and available performance data to understand its starting condition.',
      },
      {
        title: 'Step 2 — Identify Priority Improvements',
        description:
          'We prepare an optimization plan based on your services, eligible locations, target customers, existing profile condition and business objectives.',
      },
      {
        title: 'Step 3 — Implement the Agreed Changes',
        description:
          'We work on approved profile details, categories, services, photos and other relevant features available to your business.',
      },
      {
        title: 'Step 4 — Monitor and Refine',
        description:
          'We review available performance data and recommend relevant next steps. Reporting is based on the agreed scope of work and the data available, rather than rankings alone.',
      },
    ],
  },

  eligible: {
    eyebrow: 'SUPPORT FOR ELIGIBLE LOCAL BUSINESSES',
    title: 'Who Can Benefit from Google Business Profile Management?',
    intro:
      'Google Business Profile management can help eligible businesses maintain useful information for people searching for their services locally. The right approach depends on the business category, operating location and customer service model.',
    items: [
      {
        icon: 'store',
        title: 'Retail Shops and Local Stores',
        description:
          'Maintain accurate store information, opening hours, photographs and relevant profile details so customers can understand what the business offers.',
      },
      {
        icon: 'stethoscope',
        title: 'Healthcare and Professional Services',
        description:
          'Present accurate information about services, opening hours, contact details and other relevant business information.',
      },
      {
        icon: 'utensils',
        title: 'Restaurants and Hospitality Businesses',
        description:
          'Keep available customer-facing information up to date and use relevant profile features to communicate the business offering.',
      },
      {
        icon: 'house',
        title: 'Home Services and Real Estate Businesses',
        description:
          'Improve profile accuracy and service information for eligible businesses operating at a qualifying location or through an eligible service-area model.',
      },
      {
        icon: 'graduation-cap',
        title: 'Educational Institutions and Other Local Businesses',
        description:
          'Help prospective customers find relevant information, understand available services and take the next step.',
      },
    ],
  },

  whyChoose: {
    eyebrow: 'EXPERIENCE-LED DIGITAL SERVICES',
    title: 'Why Choose Grehasoft for Google Business Profile Optimization in Kerala?',
    intro:
      'Grehasoft brings experience across IT and digital services to help businesses improve how they present their information online. Our approach combines careful profile review, practical implementation and performance monitoring, with recommendations tailored to each business.',
    points: [
      {
        icon: 'award',
        title: '10+ Years of Industry Experience',
        // The document's internal note about not implying Google Business Profile-specific experience is
        // intentionally not published; the claim stays limited to general IT and digital services experience.
        description:
          'Grehasoft has more than 10 years of experience across IT and digital services. This broader industry experience informs our approach to your digital presence.',
      },
      {
        icon: 'route',
        title: 'A Strategy Based on Your Business',
        description:
          'We assess your profile, services, eligible locations and business objectives before recommending improvements. The goal is to prioritize work that is appropriate to your circumstances.',
      },
      {
        icon: 'eye',
        title: 'Transparent Implementation and Reporting',
        description:
          'We explain the agreed work, communicate relevant changes and use available performance data to guide further recommendations.',
      },
      {
        icon: 'handshake',
        title: 'Responsible Profile Management',
        description:
          'We focus on accurate business information, relevant categories and authentic customer feedback. Your business should retain ownership of its profile and grant the appropriate access required for management.',
      },
      {
        icon: 'globe',
        title: 'Connected Website and Local Search Experience',
        description:
          'Our broader digital services experience enables us to consider how your profile, website and customer contact routes work together. Where broader organic search improvements are needed, we can recommend complementary SEO services.',
      },
    ],
  },

  seoStrategy: {
    eyebrow: 'CONNECTED DIGITAL STRATEGY',
    title: 'Combine Profile Optimization with a Broader SEO Strategy',
    paragraphs: [
      [
        'Google Business Profile optimization and website SEO serve related but distinct purposes. Profile optimization focuses on the accuracy and usefulness of the business listing, while website SEO covers technical improvements, page content, internal linking and wider organic search visibility.',
      ],
      [
        'If your business needs support with both, Grehasoft can help you understand how the services complement one another.',
      ],
      [
        'Explore our ',
        { text: 'SEO services in Kochi', href: '/seo' },
        ' for broader organic search support, or ',
        { text: 'contact Grehasoft', href: '#enquiry-form' },
        ' to discuss your Google Business Profile requirements.',
      ],
    ],
  },

  faq: {
    title: 'Frequently Asked Questions About Google Business Profile Optimization',
    items: [
      {
        question: 'What is Google Business Profile optimization?',
        answer:
          "Google Business Profile optimization involves improving the accuracy, completeness and usefulness of a business's listing on Google. It can include business information, categories, services, photos, updates, review response guidance and performance monitoring.",
      },
      {
        question: 'Is Google My Business the same as Google Business Profile?',
        answer:
          'Yes. Google My Business was the previous name for Google Business Profile. Some business owners still use “Google My Business” or “GMB” when searching for profile optimization and management services, although Google Business Profile is the current name.',
      },
      {
        question: 'Does Google Business Profile optimization improve local rankings?',
        answer:
          'It can help Google and potential customers understand a business and its relevance to a search. Local results are also influenced by distance and prominence, so profile optimization cannot guarantee a particular position on Google Maps.',
      },
      {
        question: 'Can Grehasoft manage Google Business Profiles outside Kochi?',
        answer:
          "Yes. Grehasoft is based in Kochi and can work remotely with eligible businesses across Kerala, India and international markets, subject to Google's applicable profile requirements.",
      },
      {
        question: 'Can Grehasoft guarantee the first position on Google Maps?',
        answer:
          'No. Google does not provide a way to request or pay for a better organic local ranking. Results depend on factors including relevance, distance, prominence and competition. Our focus is on appropriate profile improvements and performance monitoring.',
      },
      {
        question: 'How long does Google Business Profile optimization take to show results?',
        answer:
          "There is no guaranteed timeline. The time needed to see meaningful changes depends on the initial profile condition, the work undertaken, competition and Google's processing of updates. We recommend establishing a baseline and reviewing available performance data over time.",
      },
      {
        question: 'Is Google Business Profile optimization different from Local SEO?',
        answer:
          'Yes. Business Profile optimization focuses on the Google listing itself. Local SEO is broader and may include website content, technical SEO, internal linking, local relevance and other organic search activities. Profile optimization can be one part of a wider Local SEO strategy.',
      },
      {
        question: 'Can Grehasoft help with verification or profile suspension issues?',
        answer:
          'We can review the available information, identify possible issues and guide you through relevant official procedures where appropriate. Google makes the final decisions on verification, reinstatement and policy enforcement, so no outcome can be guaranteed.',
      },
    ],
  },

  enquiry: {
    id: 'enquiry',
    formId: 'enquiry-form',
    eyebrow: 'TAKE THE NEXT STEP',
    title: "Let's Review Your Google Business Profile",
    paragraphs: [
      'Want customers to find accurate information about your business when they search locally? Grehasoft can review your current profile, identify relevant opportunities and recommend an optimization plan based on your services, locations and objectives.',
      'From Kochi to businesses across Kerala, India and eligible international markets, our approach starts with understanding your business and the customers you want to reach.',
    ],
    primaryCta: { label: 'Get a Google Business Profile Audit', href: '#enquiry-form' },
    secondaryCta: { label: 'Explore Our Services', href: '/services' },
    // The form asks for the five fields the page needs; every label below is a UI label.
    form: {
      name: { label: 'Name' },
      company: { label: 'Business Name' },
      phone: { label: 'Phone' },
      email: { label: 'Email' },
      details: { label: 'Details' },
      optionalLabel: 'Optional',
      submitLabel: 'Get a Google Business Profile Audit',
      submittingLabel: 'Sending your enquiry…',
      privacy: [
        'We will use the details you provide to respond to your enquiry. Read our ',
        { text: 'Privacy Policy', href: '/privacy' },
        '.',
      ],
      successMessage:
        'Thank you. Your enquiry has been submitted to Grehasoft. Our team will review your details and contact you using the information provided.',
      errorMessage:
        'Your enquiry could not be sent. Check your connection and try again, or contact us on WhatsApp.',
      validation: {
        nameRequired: 'Enter your name.',
        phoneRequired: 'Enter a phone or WhatsApp number.',
        phoneInvalid: 'Enter a phone number with at least 7 digits, including the country code if outside India.',
        emailRequired: 'Enter your email address.',
        emailInvalid: 'Enter an email address in the format name@company.com.',
      },
      subjectPrefix: 'Google Business Profile audit enquiry',
      sourceLabel: 'Google Business Profile page',
    },
  },
};
