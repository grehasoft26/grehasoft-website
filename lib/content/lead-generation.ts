import type { LeadGenerationContent } from '@/types/lead-generation';

/**
 * Phase 1 content source for /lead-generation-services.
 * Copy comes from the "Grehasoft lead generation page content" document.
 * Labels marked "UI label" are interface text not present in the document.
 */

const SITE_URL = 'https://grehasoft.com';
const PAGE_URL = `${SITE_URL}/lead-generation-services`;

const PHONE = '+918921540183';

export const leadGenerationContent: LeadGenerationContent = {
  seo: {
    title: 'Lead Generation Agency in Kochi, Kerala | Grehasoft',
    description:
      'Need a lead generation agency in Kochi? Grehasoft drives qualified leads through SEO, Google Ads & Social Media for businesses across Kerala & beyond. Get a free consultation.',
    canonical: PAGE_URL,
    breadcrumbLabel: 'Lead Generation Services',
    service: {
      name: 'Lead Generation Services in Kochi, Kerala',
      alternateName: [
        'Lead Generation Agency in Kochi',
        'Lead Generation Company in Kerala',
        'B2B Lead Generation Services in Kochi',
      ],
      serviceType: 'Lead Generation and Digital Customer Acquisition',
      description:
        'Grehasoft helps B2B and B2C businesses attract and qualify customer enquiries through SEO, Google Ads, Meta Ads, audience targeting, landing pages, conversion tracking and lead management.',
      areaServed: [
        { type: 'City', name: 'Kochi' },
        { type: 'AdministrativeArea', name: 'Kerala' },
        { type: 'Country', name: 'India' },
      ],
      providerId: `${SITE_URL}/#/schema/organization/1`,
      providerName: 'Grehasoft',
      providerUrl: SITE_URL,
    },
  },

  hero: {
    title: 'Lead Generation Agency in Kochi, Kerala – for Qualified Business Leads',
    lead: 'Reach relevant prospects and turn interest into business enquiries.',
    body: 'Grehasoft helps B2B and B2C businesses attract potential customers through targeted campaigns, landing pages and clear enquiry journeys. Based in Kochi, we build lead generation strategies around your audience, target market and sales goals.',
    primaryCta: { label: 'Book a Lead Strategy Call', href: '#enquiry-form' },
    secondaryCta: { label: 'Explore Lead Generation Methods', href: '#solutions' },
    // UI labels
    phone: { label: 'Contact now', href: `tel:${PHONE}` },
    whatsapp: {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/918921540183?text=Hi!%20I%20would%20like%20to%20discuss%20lead%20generation%20for%20my%20business.',
    },
  },

  partner: {
    eyebrow: 'Your lead generation partner',
    title: 'Lead Generation Services Built Around Your Sales Goals',
    paragraphs: [
      'As a lead generation agency in Kochi, Kerala, Grehasoft helps businesses attract potential customers, capture relevant enquiries and identify prospects who match their products or services. Our approach considers your business objectives and creates a lead generation strategy with audience-focused planning, identification of relevant digital channels and marketing technology based on your target audience, offer and budget.',
      'Your campaign may focus on local customers in Kochi, buyers across Kerala or a defined international market. We connect audience targeting, campaign messaging and enquiry capture so your sales team receives the information it needs to assess each opportunity.',
    ],
    cards: [
      {
        icon: 'award',
        title: '10+ Years of Proven Industry Expertise',
        description:
          'A decade of experience across digital marketing, website development, and software technology services.',
      },
      {
        icon: 'layers',
        title: 'Multi-Channel Digital Marketing Capabilities',
        description:
          'SEO, AEO, GEO, GBP, Google Ads, Meta Ads, LinkedIn Ads, Social Media Marketing and Content marketing to aggressively accelerate your customer acquisition.',
      },
      {
        icon: 'globe',
        title: '100+ Happy Clients around the world',
        description:
          'Trusted by businesses worldwide across India, Middle East, Europe, North America, Australia, New Zealand, and the Asia-Pacific.',
      },
    ],
  },

  solutions: {
    id: 'solutions',
    eyebrow: 'Our lead generation solutions',
    title: 'Lead Generation Solutions for B2B and B2C Businesses',
    intro: [
      'Choose the support your business needs, from a focused paid campaign to a broader acquisition strategy. We recommend ',
      { text: 'digital marketing', href: '/digital-marketing' },
      ' channels and deliverables based on your goals, resources and sales process.',
    ],
    indexLabel: 'Solutions on this page', // UI label
    items: [
      {
        id: 'inbound-lead-generation',
        icon: 'search',
        title: 'Inbound Lead Generation (Organic Search & Content Marketing)',
        body: 'Attract customers who are searching on Google and AI tools for the products or services you offer. Inbound lead generation brings ready-to-buy visitors to your website through helpful content, strong search rankings, and clear service pages—without relying on paid ads. We connect customer search intent directly to simple inquiry forms, phone calls, and WhatsApp leads, so visitors have a clear path to contact your business. Our organic marketing approach focuses on four proven pillars:',
        points: [
          {
            title: 'High-Intent Service Pages',
            description: 'Website pages that answer customer questions about pricing, process, and benefits.',
          },
          {
            title: 'Google & AI Search Visibility',
            description:
              'Optimizing your website to rank in Google search results, Featured Snippets, and AI recommendations (ChatGPT, Gemini, Perplexity).',
          },
          {
            title: 'Helpful Guides & Resources',
            description: 'Blogs, FAQs, and case studies to build trust for customers.',
          },
          {
            title: 'Clear Conversion Paths',
            description:
              'Enquiry forms, click-to-call buttons, and WhatsApp chat options where visitors are ready to take action.',
          },
        ],
        followUp: [
          'Want to bring more leads without paying for online advertising? Explore our ',
          { text: 'SEO Services', href: '/seo' },
          // No AI Search Visibility page exists yet; link it once one is published.
          ' and AI Search Visibility Services.',
        ],
        schemaName: 'Inbound Lead Generation (Organic Search and Content Marketing)',
        schemaDescription:
          'Attract potential customers through high-intent service pages, organic search visibility, helpful content, blogs, FAQs and clear enquiry paths.',
      },
      {
        id: 'paid-lead-generation',
        icon: 'megaphone',
        title: 'Paid Lead Generation Campaigns',
        body: 'Get more customer inquiries, phone calls, and WhatsApp messages with targeted online paid campaigns built for measurable sales—not just website clicks. At Grehasoft, we set up, manage, and optimize paid lead generation advertisements on Google Search, Facebook, Instagram and LinkedIn focused on lowering your cost per lead (CPL) and increasing sales. Every campaign is built around six core steps:',
        points: [
          { title: 'Audience Targeting', description: 'Reaching active buyers on your target market.' },
          {
            title: 'Ad Copy & Offers',
            description: 'Clear ads and promotional offers that attract genuine customer inquiries.',
          },
          {
            title: 'High-Converting Landing Pages',
            description: 'Sending ad traffic to fast, mobile-friendly pages designed to capture leads.',
          },
          {
            title: 'Conversion Tracking',
            description: 'Tracking every phone call, form submission, and WhatsApp messages.',
          },
          {
            title: 'Lead Qualification',
            description: 'Filtering out spam and low-intent clicks to lower your cost per lead (CPL).',
          },
          {
            title: 'ROI Reporting',
            description:
              'Measuring success by real business inquiries and sales pipeline growth rather than vanity impressions.',
          },
        ],
        followUp: [
          'Wish to grow your customer inquiries? Explore our ',
          { text: 'Google Ads services', href: '/search-engine-marketing' },
          ' and ',
          { text: 'social media marketing services', href: '/social-media-marketing' },
          '.',
        ],
        schemaName: 'Paid Lead Generation Campaigns',
        schemaDescription:
          'Targeted paid advertising campaigns through Google Search, Facebook, Instagram and LinkedIn to generate phone calls, form submissions and customer enquiries.',
      },
      {
        id: 'b2b-lead-generation',
        icon: 'briefcase',
        title: 'B2B Lead Generation',
        body: 'Reach business owners and corporate decision-makers who are looking for a trusted partner. We build targeted B2B lead generation campaigns across Google Search, LinkedIn and other social medias, tailored to your ideal industry, company size, and sales cycle.',
        followUp: [
          'Explore our ',
          { text: 'LinkedIn marketing services', href: '/linkedin' },
          '.',
        ],
        schemaName: 'B2B Lead Generation',
        schemaDescription:
          'Targeted campaigns designed to reach business owners and corporate decision-makers based on industry, company size and sales requirements.',
      },
      {
        id: 'b2c-local-lead-generation',
        icon: 'map-pin',
        title: 'B2C and Local Lead Generation',
        body: 'Reach everyday consumers and local customers who are searching for your products or services. We run targeted B2C and local lead generation campaigns across Google Search, Google Maps, Facebook, and Instagram—designed to drive phone calls, WhatsApp chats, and store visits. We focus on the exact cities and neighborhoods your business serve, and connecting local buyer intent with fast, mobile-friendly ways to contact your team.',
        schemaName: 'B2C and Local Lead Generation',
        schemaDescription:
          'Local and consumer-focused campaigns using Google Search, Google Maps, Facebook and Instagram to generate enquiries, calls and store visits.',
      },
      {
        id: 'landing-pages-conversion',
        icon: 'layout',
        title: 'Landing Pages and Conversion Optimisation',
        body: 'Convert clicks into real customer inquiries with dedicated, fast-loading website landing pages. Rather than sending ad visitors to a general homepage, we build focused pages with clear offers, simple benefits, mobile-friendly layouts, and short inquiry forms—removing friction between customer interest and action.',
        followUp: [
          'Explore our ',
          { text: 'Website & Landing Page Design Services', href: '/landing-page-design' },
          '.',
        ],
        schemaName: 'Landing Pages and Conversion Optimisation',
        schemaDescription:
          'Mobile-friendly landing pages, focused offers and enquiry forms designed to convert campaign visitors into customer enquiries.',
      },
      {
        id: 'lead-nurturing',
        icon: 'workflow',
        title: 'Lead Nurturing and Enquiry Management',
        body: 'Never lose a potential customer to slow follow-ups or disorganized spreadsheets. We help you capture, track, and nurture incoming leads through CRM integration, instant sales team alerts, lead qualification forms, and automated email or WhatsApp follow-ups. Together with your team, we map out a simple workflow so every enquiry reaches the right person fast.',
        schemaName: 'Lead Nurturing and Enquiry Management',
        schemaDescription:
          'Lead qualification forms, CRM integration, instant sales team notifications and automated email or WhatsApp follow-ups.',
      },
    ],
    closing: [
      'Not every business needs every marketing channel. Depending on your budget, target customers, and sales goals, these lead generation methods can be used individually or combined into a complete growth strategy. Grehasoft helps businesses in Kochi, Kerala, and beyond select the most effective channels—focusing on practical campaigns that deliver real inquiries and measurable ROI. ',
      { text: 'Get in touch with our team to plan your next lead generation campaign.', href: '#enquiry-form' },
    ],
  },

  process: {
    eyebrow: 'Our process',
    title: 'How Our Lead Generation Process Works',
    intro:
      'We follow a clear 7-step process to plan, launch, and optimize lead generation campaigns that bring consistent customer enquiries.',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Business Discovery',
        description:
          'We review your services, target buyers, sales process, and growth goals to build a tailored campaign plan.',
      },
      {
        title: 'Audience & Competitor Research',
        description:
          'We analyze customer search habits, buying triggers, and competitor strategies in your market.',
      },
      {
        title: 'Channel & Offer Planning',
        description:
          'We select the best channels (Google Ads, SEO, Meta, or LinkedIn) and map out a clear path from first click to inquiry.',
      },
      {
        title: 'Campaign & Landing Page Setup',
        description:
          'We build your ads, fast landing pages, enquiry forms, and call/WhatsApp conversion tracking.',
      },
      {
        title: 'Lead Capture & Routing',
        description:
          'We configure lead qualification forms and instant alerts so enquiries reach your sales team quickly.',
      },
      {
        title: 'Performance & CPL Review',
        description:
          'We measure lead volume, lead quality, conversion rates, and cost per lead (CPL) against your business targets.',
      },
      {
        title: 'Ongoing Optimisation',
        description:
          'We use campaign results and sales team feedback to improve targeting, messaging, and landing page conversions over time.',
      },
    ],
  },

  metrics: {
    eyebrow: 'Lead generation agency',
    title: 'How We Measure Lead Quality & Campaign ROI',
    intro:
      'We measure success by real business inquiries and sales opportunities. Our reports clearly separate your ad spend from service cost and track six core metrics.',
    // UI labels: funnel stages that group the six metrics
    stages: [
      { id: 'visitors', label: 'Visitors', description: 'People who reach your website or landing page' },
      { id: 'enquiries', label: 'Enquiries', description: 'Calls, forms and WhatsApp messages' },
      { id: 'qualified', label: 'Qualified leads', description: 'Enquiries that match your target customer profile' },
      { id: 'opportunities', label: 'Sales opportunities', description: 'Leads your sales team is actively pursuing' },
    ],
    items: [
      {
        stage: 'enquiries',
        title: 'Lead Volume',
        description: 'Total valid calls, forms, and WhatsApp inquiries.',
      },
      {
        stage: 'qualified',
        title: 'Qualified Lead Rate',
        description: 'Percentage of leads that match your target customer profile.',
      },
      {
        stage: 'enquiries',
        title: 'Cost Per Lead (CPL)',
        description: 'Total ad spend divided by total valid leads captured.',
      },
      {
        stage: 'qualified',
        title: 'Cost Per Qualified Lead (CPQL)',
        description: 'Ad spend divided by sales-qualified leads only.',
      },
      {
        stage: 'visitors',
        title: 'Enquiry Conversion Rate',
        description: 'The percentage of website or landing page visitors who send an enquiry.',
      },
      {
        stage: 'opportunities',
        title: 'Lead-to-Opportunity Rate',
        description: 'Percentage of leads that convert into active sales opportunities.',
      },
    ],
  },

  whyChoose: {
    title: 'Why Choose Grehasoft as Your Lead Generation Agency in Kerala?',
    intro:
      'Grehasoft brings digital marketing, web design, and lead management solutions together to turn online searches into paying customers.',
    points: [
      {
        icon: 'map-pin',
        title: 'Kochi-Based Local Team',
        description:
          'Deep understanding of businesses and buyers across Kochi, Kerala, and international markets.',
      },
      {
        icon: 'route',
        title: 'Complete End-to-End Execution',
        description:
          'Ad campaigns backed by high-converting landing pages, tracking, and lead management.',
      },
      {
        icon: 'handshake',
        title: 'Tailored Channel Selection',
        description: 'Strategies built around your actual budget, audience, and sales workflow.',
      },
      {
        icon: 'eye',
        title: 'Transparent Deliverables',
        description:
          'Clear separation of ad spend and service fees with full ownership of your data and leads.',
      },
    ],
  },

  overseas: {
    title: 'Work With a Kochi Based Lead Generation Team From Overseas',
    body: "If you run a business in the UAE, GCC, UK, Australia, Canada, or the USA and want a trusted lead generation agency in Kerala, Grehasoft makes cross-border collaboration simple. From our office in Infopark, Kochi, we manage end-to-end Google Ads, SEO, and social media lead generation for international and NRI-owned businesses. Your business location and target audience don't have to match—we run campaigns to your overseas business, or generate local leads in your international market. Before launching, we set clear agreements on time-zone communication, full ad account access, transparent reporting, and instant lead handover.",
    commitmentsTitle: 'Agreed before launch', // UI label
    commitments: [
      'Time-zone communication',
      'Full ad account access',
      'Transparent reporting',
      'Instant lead handover',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions About Lead Generation Services',
    // Wording follows the document's FAQPage schema so page text and JSON-LD match exactly.
    items: [
      {
        question: 'What does Grehasoft do as a lead generation agency?',
        answer:
          'Grehasoft, as a lead generation agency, helps your business attract potential customers and capture real sales enquiries. We provide lead generation and management using Google Ads, LinkedIn Ads, Meta (Facebook and Instagram) ads, SEO, and high-converting landing pages.',
      },
      {
        question: 'Does Grehasoft provide lead generation services in Kochi and Kerala?',
        answer:
          'Yes. Grehasoft is based in Infopark, Kochi, and provides custom lead generation services for businesses across Kochi, Ernakulam, Trivandrum, Kozhikode, Thrissur, and all of Kerala. We tailor your campaign channels and local targeting to reach buyers in the exact cities and regions you serve.',
      },
      {
        question: 'What is a qualified lead?',
        answer:
          'A qualified lead is a genuine customer enquiry that meets your specific sales criteria—such as the right location, budget, project need, and buying timeline. Not every website form submission is a qualified lead, so we use screening questions and call tracking to filter out spam and low-intent enquiries before your sales team follows up.',
      },
      {
        question: 'Do you support both B2B and B2C lead generation?',
        answer:
          'Yes. For B2B lead generation, we target business owners, founders, and corporate decision-makers. For B2C and local lead generation, we target everyday consumers and families using Google Maps, local SEO, Facebook, and Instagram to drive immediate phone calls, WhatsApp chats, and store visits.',
      },
      {
        question: 'Which channels should my business use to get more leads?',
        answer:
          'The best channels depend on where your customers search and how fast you want results. Most businesses see the strongest ROI from a combination of Google Search Ads (for high-intent buyers ready to inquire now), Meta Ads (for visual offers and local awareness), and SEO and content (for long-term organic leads), all connected to a fast landing page.',
      },
      {
        question: 'Is lead generation different from SEO and Google Ads?',
        answer:
          'Yes. Lead generation is the complete system of attracting visitors, capturing their contact details, qualifying their interest, and handing them over to your sales team. SEO and Google Ads are individual traffic channels used inside that system—alongside landing page design, WhatsApp chat integration, and CRM follow-up.',
      },
      {
        question: 'How much do lead generation services cost in Kerala?',
        answer:
          'The cost of lead generation depends on your target market, industry competition, chosen channels (Google Ads, Meta, or SEO), and whether you need landing page design or CRM setup. At Grehasoft, every proposal clearly separates your monthly ad spend (paid directly to Google or Meta) from our agency management fees, with zero hidden charges.',
      },
      {
        question: 'How soon can we expect customer enquiries?',
        answer:
          'Paid advertising campaigns on Google Ads, Facebook, and Instagram usually start generating phone calls, form submissions, and WhatsApp leads within 2 to 7 days of launch. SEO and organic content take longer—typically 3 to 6 months—to build top search rankings, though they deliver lower-cost, long-term leads over time.',
      },
      {
        question: 'Can you guarantee a fixed number of leads or sales?',
        answer:
          'No ethical digital marketing agency can guarantee an exact number of sales, because final conversions depend on market competition, your pricing, offer strength, and how fast your sales team responds to enquiries. Instead, we agree on clear targets for cost per lead (CPL) and lead quality, and continuously optimize your ads and landing pages to improve ROI.',
      },
      {
        question: 'Who qualifies leads and follows up with prospects?',
        answer:
          'We define lead handover responsibilities with your team before launching any campaign. Grehasoft sets up automated qualification questions, instant email and WhatsApp notifications, and CRM routing so enquiries reach your staff immediately. Unless dedicated inside-sales support is included in your scope, your internal sales team calls and closes the prospects.',
      },
      {
        question: 'Can overseas businesses work with Grehasoft?',
        answer:
          "Yes. Businesses based in the UAE, GCC, UK, Australia, Canada, and the USA can work with Grehasoft's Kochi team to attract customers in Kerala and India or manage lead generation campaigns targeting buyers in their overseas markets, with time-zone aligned communication and client ownership of advertising accounts.",
      },
      {
        question: 'How do you measure campaign performance and ROI?',
        answer:
          'We track real business outcomes rather than vanity clicks. Your reports clearly measure Total Lead Volume, Qualified Lead Rate, Cost Per Lead (CPL), Cost Per Qualified Lead (CPQL), Landing Page Conversion Rate, and Lead-to-Opportunity Rate—always separating your advertising budget from service fees.',
      },
    ],
  },

  enquiry: {
    id: 'enquiry',
    formId: 'enquiry-form',
    eyebrow: 'Let us discuss your next campaign',
    title: 'Ready to Get More Qualified Leads for Your Business?',
    paragraphs: [
      'Whether you want to attract local customers in Kochi and Kerala, connect with high-value B2B buyers, or expand into international markets like the UAE, UK, USA, Canada, or Australia, every successful campaign starts with understanding your ideal customer and sales goals.',
      'At Grehasoft, our Infopark Kochi team reviews your current marketing setup and builds a practical, custom lead generation strategy—combining Google Ads, Meta Ads, SEO, and high-converting landing pages to bring consistent customer inquiries, phone calls, and WhatsApp leads.',
    ],
    primaryCta: { label: 'Get a Free Lead Generation Consultation', href: '#enquiry-form' },
    secondaryCta: { label: 'Explore All Digital Marketing Services', href: '/digital-marketing' },
    form: {
      name: { label: 'Your Name' },
      company: { label: 'Company / Business Name' },
      phone: { label: 'Phone / WhatsApp Number' },
      email: { label: 'Work Email Address' },
      market: {
        label: 'Target Location / Market',
        placeholder: 'Select a market', // UI label
        options: ['Kochi', 'Kerala', 'All India', 'UAE & GCC', 'UK, USA, Canada, Australia'],
      },
      goal: {
        label: 'Main Goal',
        placeholder: 'Select a goal', // UI label
        options: [
          'More Local Inquiries & Calls',
          'B2B Corporate Leads',
          'Google & Meta Ads Management',
          'SEO & Organic Leads',
          'Full Lead Generation System',
        ],
      },
      details: { label: 'Tell Us Briefly About Your Business & Goals' },
      optionalLabel: 'Optional', // UI label
      submitLabel: 'Send My Requirements',
      submittingLabel: 'Sending your requirements…', // UI label
      privacy: [
        'We will use the details you provide to respond to your enquiry. Read our ',
        { text: 'Privacy Policy', href: '/privacy' },
        '.',
      ],
      successMessage:
        'Thank you. Your enquiry has been submitted to Grehasoft. Our team will review your requirements and contact you using the details provided.',
      // UI labels
      errorMessage:
        'Your enquiry could not be sent. Check your connection and try again, or contact us on WhatsApp.',
      validation: {
        nameRequired: 'Enter your name.',
        phoneRequired: 'Enter a phone or WhatsApp number.',
        phoneInvalid: 'Enter a phone number with at least 7 digits, including the country code if outside India.',
        emailRequired: 'Enter your work email address.',
        emailInvalid: 'Enter an email address in the format name@company.com.',
      },
      subjectPrefix: 'Lead generation enquiry',
      sourceLabel: 'Lead generation services page',
    },
  },
};
