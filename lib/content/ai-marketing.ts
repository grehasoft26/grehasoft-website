import type { AiMarketingContent } from '@/types/ai-marketing';
import { leadGenerationContent } from '@/lib/content/lead-generation';

/**
 * Local content for /ai-marketing-service-agency.
 * Copy comes from "AI marketing services-corrected.docx" (section order kept).
 * Changes from the document: the editor's note about the WhatsApp video was
 * removed, the four "Explore our …" links point to the matching site routes
 * (the document's links pointed to chatgpt.com), and the meta title and
 * description are the approved Phase 1 values. Labels marked "UI label" are
 * interface text not present in the document.
 */

const PAGE_PATH = '/ai-marketing-service-agency';
const ENQUIRY_FORM_HREF = '#enquiry-form';

// The five service areas listed under "What Our AI Marketing Services Cover".
const COVER: AiMarketingContent['discovery']['cover'] = [
  {
    icon: 'search',
    title: 'AI Search Visibility (AEO & GEO)',
    description:
      'Structuring your website and brand entities so Google AI Overviews, ChatGPT, Gemini, and Perplexity cite and recommend your business.',
  },
  {
    icon: 'pen',
    title: 'AI-Assisted Content Planning & Copywriting',
    description:
      'Researching high-intent customer questions and producing accurate, human-verified service pages, blogs, and guides.',
  },
  {
    icon: 'video',
    title: 'AI Promotional Video & Reels Production',
    description:
      'Creating high-converting product explainers, social media reels, and campaign videos faster and more cost-effectively.',
  },
  {
    icon: 'share',
    title: 'AI-Assisted Social Media & Ad Creative',
    description:
      'Developing platform-ready captions, scripts, and ad variations tailored for LinkedIn, Instagram, Facebook, and Google Ads.',
  },
  {
    icon: 'workflow',
    title: 'Connected Omnichannel Workflows',
    description:
      'Integrating AI content and search optimization directly with your existing SEO, paid ads, and lead generation campaigns.',
  },
];

export const aiMarketingContent: AiMarketingContent = {
  seo: {
    path: PAGE_PATH,
    title: 'AI Marketing Agency in Kochi | AEO & GEO | Grehasoft',
    description:
      'Grehasoft provides AI marketing services in Kochi, Kerala, helping B2B and B2C brands improve visibility across ChatGPT, Google AI Overviews and search.',
    breadcrumbLabel: 'AI Marketing Services', // UI label
    service: {
      // Service JSON-LD values from the document's schema block.
      name: 'AI Marketing Service Agency in Kochi | AEO & GEO | Grehasoft',
      description:
        'Looking for an AI marketing service agency in Kochi? Grehasoft helps B2B & B2C brands get found in Google AI Overviews & ChatGPT with AEO, GEO & AI video.',
      serviceType: [
        'AI Marketing Services',
        'AI Search Optimization',
        'Answer Engine Optimization',
        'Generative Engine Optimization',
        'AI-Assisted Content Creation',
        'AI Video Creation',
      ],
      areaServed: [
        { type: 'City', name: 'Kochi' },
        { type: 'AdministrativeArea', name: 'Kerala' },
        { type: 'Country', name: 'India' },
      ],
    },
  },

  hero: {
    title: 'AI Marketing Service Agency in Kochi, Kerala — Rank in Search & AI Engines',
    body: 'Get your business recommended by AI tools like ChatGPT, Google AI Overviews, Gemini, and Perplexity while scaling your content and video marketing. At Grehasoft, our Infopark Kochi team combines Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), AI-assisted content creation, and AI promotional video production to attract high-intent B2B and B2C buyers across Kerala, India, and international markets.',
    capabilities: [
      'Answer Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'AI-assisted content creation',
      'AI promotional video production',
    ],
    primaryCta: { label: 'Book a Free AI Marketing Strategy Call', href: ENQUIRY_FORM_HREF },
    secondaryCta: { label: 'Explore AI Search Visibility', href: '#search-visibility' },
    contact: { label: 'Contact Now', href: ENQUIRY_FORM_HREF },
    whatsapp: {
      label: 'WhatsApp Chat',
      href: 'https://wa.me/918921540183?text=Hi!%20I%20would%20like%20to%20discuss%20AI%20marketing%20for%20my%20business.',
    },
  },

  discovery: {
    eyebrow: 'Smarter Digital Discovery',
    title: 'AI Marketing Services for Search Visibility, Content & Revenue',
    paragraphs: [
      'Looking for an AI marketing service agency in Kochi to grow your brand visibility and inbound leads? Grehasoft helps businesses improve visibility across AI-powered search, develop relevant marketing content and create engaging video assets. We support businesses across Kerala, India and international markets.',
      'Our approach combines appropriate AI tools with audience research, marketing expertise and human review. We focus on practical applications that align with your business goals, branding and customer enquiries.',
    ],
    coverTitle: 'What Our AI Marketing Services Cover:',
    cover: COVER,
  },

  searchVisibility: {
    id: 'search-visibility',
    eyebrow: 'Search Visibility',
    title: 'Get Discovered & Recommended Across Google & Generative AI Search',
    paragraphs: [
      'Customers use search engines and AI-powered tools such as Google AI Overviews, ChatGPT, Gemini, and Perplexity to compare providers, services, check pricing, and find businesses. Grehasoft optimizes your online business presence, so search engines and AI models clearly understand what you offer, who you serve, and why your brand is credible.',
      'Our AI search optimization approach combines established SEO practices, relevant content, clear website structure and meaningful internal links to support discoverability across traditional search and AI-assisted experiences. Since AI platforms dynamically generate answers, no ethical agency can guarantee fixed placement in every AI response. Hence, we build the technical authority and structured proof points AI engines rely on to cite your business.',
    ],
    items: [
      {
        icon: 'scan',
        title: 'Answer Engine Optimization (AEO)',
        paragraphs: [
          'Answer Engine Optimization focuses on making information useful and easy to understand in question-and-answer experiences. This may include answering customer questions directly, explaining concepts clearly. We structure your website content to win Google Featured Snippets, People Also Ask boxes, and voice search answers.',
        ],
      },
      {
        icon: 'sparkles',
        title: 'Generative Engine Optimization (GEO)',
        paragraphs: [
          'Generative Engine Optimization focuses on making relevant, credible content easier for generative AI experiences to discover and understand. This may involve strengthening topical relevance, explaining services accurately and connecting related information through useful internal links. We optimize your brand authority, topical depth, and structured data so generative AI engines (ChatGPT, Google Gemini, Perplexity, and Microsoft Copilot) accurately retrieve, summarize, and recommend your business in buyer comparisons.',
        ],
      },
      {
        icon: 'network',
        title: 'Generative Intelligence Optimization (GIO) and AI Optimization (AIO)',
        paragraphs: [
          'Generative Intelligence Optimization (GIO) and AI Optimization (AIO) refer to the same discipline and we focus on the practical technical and content signals that drive real AI citations. We consider these within a broader AI discovery strategy rather than presenting it as a separate ranking method.',
          'AEO, AIO, GEO and GIO can overlap in practice. The priority is useful content, an accessible website and established search optimisation—not the use of acronyms alone.',
        ],
      },
      {
        icon: 'fingerprint',
        title: 'Entity & Brand Authority Building',
        paragraphs: [
          'AI engines recommend businesses they trust. We strengthen your brand entity across your website, Google Business Profile (GBP), industry directories, and authoritative citations—linking your services, location, and verifiable expertise into a clear signal for AI crawlers.',
        ],
      },
    ],
  },

  contentCreation: {
    eyebrow: 'Content with Purpose',
    title: 'Create AI-Assisted Marketing Content That Fits Your Brand',
    paragraphs: [
      'Our AI content creation services can help businesses research topics, organise information, prepare initial drafts and adapt approved material for different marketing channels. Grehasoft can help plan content workflows that connect audience needs, search intent, brand messaging and business objectives.',
      'AI should support the content process, not replace editorial judgement. Deliverables should be reviewed for accuracy, originality, relevance and suitability before publication.',
    ],
    items: [
      {
        title: 'AI-Assisted Content Planning',
        description:
          'Identify relevant customer questions, topics and content opportunities to organise your publishing plan. This can support service-page planning, blog outlines, campaign concepts and related topic research.',
      },
      {
        title: 'AI Content Drafting and Refinement',
        description:
          'Use suitable AI-assisted workflows to develop initial outlines, organise information and refine marketing copy. Human review helps ensure that the final content is accurate, distinctive and consistent with your brand voice.',
      },
      {
        title: 'Content Repurposing Across Marketing Channels',
        description:
          'Adapt approved content into suitable formats, including social media captions, video scripts, campaign messages and short summaries. Each version should reflect its platform and audience without changing the original meaning.',
      },
    ],
    closing:
      'The objective is not to publish more content simply because AI makes production faster. It is to create useful material that answers genuine customer needs and adds value beyond generic, repetitive content.',
  },

  video: {
    eyebrow: 'Visual Storytelling',
    title: 'AI Video Creation for Product Launches, Ads & Social Media Marketing',
    body: 'Video drives higher engagement and faster buyer trust, yet traditional video shoots are expensive and slow. Grehasoft’s AI video creation services help businesses turn product briefs, service features, and campaign ideas into polished visual assets ready for social media, landing pages, and paid ads.',
    items: [
      {
        title: 'AI Promotional Video Creation',
        description:
          'Develop promotional video concepts for products, services, launches and business announcements. Creative direction should reflect your brand, audience and campaign objective.',
      },
      {
        title: 'AI Videos for Instagram Reels, Meta Ads & YouTube Shorts',
        description:
          'Plan short-form video content for platforms such as Instagram, Facebook and YouTube. Scripts, visual concepts and creative variations can be developed around the format and purpose of each campaign.',
      },
      {
        title: 'AI Video Scripts and Storyboards',
        description:
          'Turn a campaign brief into a structured script and storyboard before production. Review the message, visuals, voiceover and generated elements to maintain accuracy and brand suitability.',
      },
    ],
    cta: { label: 'Discuss Your AI Video Project', href: ENQUIRY_FORM_HREF },
    // asset: Grehasoft's AI video is not supplied yet. When it is, set
    // { src, type, title, poster, captions } and the click-to-play player appears.
  },

  connected: {
    eyebrow: 'Connected Marketing',
    title: 'Connect AI Marketing with Your Existing Digital Channels',
    intro:
      'AI-assisted workflows can complement your existing marketing activities by supporting research, content planning, creative development and the organisation of campaign information. They should strengthen your marketing strategy rather than duplicate the work of every dedicated service.',
    items: [
      {
        title: 'AI-Assisted SEO and Website Content',
        description:
          'AI tools can support content briefs, topic research, question-led content planning and content organisation. Technical SEO, indexing, crawlability, internal links and content quality remain important.',
        followUp: [
          'Explore our ',
          { text: 'SEO services', href: '/seo' },
          ' for technical optimisation, on-page improvements, keyword research and organic search strategy.',
        ],
      },
      {
        title: 'AI-Assisted Social Media Content',
        description:
          'AI-assisted workflows can help develop content ideas, captions, scripts and creative variations for different social platforms. Each asset should be reviewed for audience relevance, brand consistency and platform suitability.',
        followUp: [
          'Explore our ',
          { text: 'Social Media Marketing services', href: '/social-media-marketing' },
          ' for dedicated social media planning, content management and campaign support.',
        ],
      },
      {
        title: 'AI-Assisted Advertising Creative',
        description:
          'AI tools can help generate creative ideas and draft alternative advertising messages. Campaign targeting, budget allocation, tracking and performance optimisation still require appropriate platform settings and informed decisions.',
        followUp: [
          'Explore our ',
          { text: 'Google Ads services', href: '/search-engine-marketing' },
          ' and ',
          { text: 'Meta Ads services', href: '/facebook' },
          ' for dedicated paid advertising solutions.',
        ],
      },
    ],
    closing:
      'AI-assisted marketing should strengthen the connection between your channels without making every activity a separate, disconnected process.',
  },

  process: {
    eyebrow: 'A Clear Workflow',
    title: 'Our Process for AI Marketing Services',
    intro:
      'Every project begins with a business objective. Our workflow connects discovery, planning, production and review so that AI is applied where it is relevant to the work.',
    stepLabel: 'Step', // rendered as "Step 1 — …", as in the document
    steps: [
      {
        title: 'Understand Your Business and Audience',
        description:
          'Review your services, target audience, industry, existing digital presence and marketing priorities to establish the project requirements.',
      },
      {
        title: 'Identify Relevant Opportunities',
        description:
          'Assess where AI-assisted search visibility, content creation or video production could support your goals. Prioritise the most relevant activities for your business.',
      },
      {
        title: 'Develop Content and Creative Assets',
        description:
          'Create the agreed content plans, drafts, scripts or visual concepts using suitable tools and human input.',
      },
      {
        title: 'Review and Refine',
        description:
          'Check factual accuracy, brand voice, originality, message clarity and suitability before publishing or deploying a deliverable.',
      },
      {
        title: 'Measure and Improve',
        description:
          'Evaluate relevant performance data against agreed objectives, then refine the workflow based on the results.',
      },
    ],
  },

  whyChoose: {
    eyebrow: 'Experience Meets Practical Application',
    title: 'Why Choose Grehasoft as Your AI Marketing Agency in Kerala?',
    intro:
      'Grehasoft brings more than 10 years of industry experience across digital marketing and technology services, as represented on its existing website. This broader experience helps us consider AI-assisted marketing alongside website content, search visibility and established digital channels.',
    points: [
      {
        icon: 'layers',
        title: 'Experience Across Digital Marketing and Technology',
        description:
          'Our experience across digital marketing and technology services helps us consider how AI-assisted activities fit your website, content and wider business goals.',
      },
      {
        icon: 'shield',
        title: 'Human Review and Brand Consistency',
        description:
          'AI-generated material may need revision and verification. We review deliverables for accuracy, relevance and brand suitability rather than treating generated output as automatically ready to publish.',
      },
      {
        icon: 'workflow',
        title: 'Connected Digital Marketing Expertise',
        description:
          'AI-assisted work can complement existing SEO, social media and advertising activities, with detailed channel-specific work handled by the relevant service teams.',
      },
      {
        icon: 'target',
        title: 'Business-Focused Planning',
        description:
          'We begin with your requirements and agree on the project scope, deliverables and relevant measures of success before proceeding.',
      },
    ],
  },

  faq: {
    eyebrow: 'Clear Answers',
    title: 'Frequently Asked Questions About AI Marketing Services',
    items: [
      {
        question: 'What are AI marketing services?',
        answer:
          'AI marketing services use artificial intelligence tools to support marketing activities such as content planning, search visibility, content creation and video production. The specific services depend on business requirements, selected tools and the agreed project scope.',
      },
      {
        question: 'What is the difference between AEO, AIO and GEO?',
        answer:
          'AEO focuses on making information useful for answer-based experiences. AIO is a broad term for optimising information for AI-assisted discovery, while GEO focuses on discoverability in generative AI experiences. The terminology can overlap and is not standardised across the industry.',
      },
      {
        question: 'Can AI marketing replace traditional SEO?',
        answer:
          'No. AI-assisted marketing can complement SEO, but it does not remove the need for accessible pages, useful content, sound website architecture, appropriate internal links and technical optimisation.',
      },
      {
        question: 'Can AI marketing help businesses in Kochi and Kerala?',
        answer:
          'AI-assisted marketing can help businesses in Kochi and across Kerala organise content, explore search topics and develop marketing assets. The appropriate approach depends on the business, audience, competition and intended outcomes.',
      },
      {
        question: 'How do I choose an AI marketing company in Kochi?',
        answer:
          'Look for a provider that clearly explains its services, review process, project deliverables and approach to measuring results. Choose a strategy that fits your business goals and existing marketing activities, and ask for relevant examples where available.',
      },
      {
        question: 'Can anyone guarantee visibility in Google AI Overviews or ChatGPT?',
        answer:
          'No. A service provider cannot guarantee that a website will appear in every AI-generated answer. A responsible approach focuses on accessible pages, useful information, relevant expertise and established SEO practices rather than guaranteed placements.',
      },
      {
        question: 'Does Grehasoft serve businesses outside Kochi?',
        answer:
          'Grehasoft serves businesses across Kerala, India and international markets. The appropriate service scope and delivery arrangements can be discussed according to your location and business requirements.',
      },
    ],
  },

  enquiry: {
    id: 'enquiry',
    formId: 'enquiry-form',
    eyebrow: "Let's Plan Your Next Step",
    title: 'Ready to Explore AI Marketing for Your Business?',
    paragraphs: [
      'AI can support more organised content creation, clearer search-oriented information and engaging video assets when applied to the right business objectives.',
      'Tell Grehasoft about your goals, target audience and current marketing activities. We can discuss which AI-assisted services are relevant to your business and how they can complement your existing digital marketing strategy.',
    ],
    primaryCta: { label: 'Discuss Your AI Marketing Requirements', href: ENQUIRY_FORM_HREF },
    secondaryCta: { label: 'Explore All Digital Marketing Services', href: '/digital-marketing' },
    // The shared enquiry form: same fields, validation and NestJS /contact submission as
    // the Lead Generation page. "Main Goal" options, subject prefix and source label are
    // the approved values for this page.
    form: {
      ...leadGenerationContent.enquiry.form,
      goal: {
        label: 'Main Goal',
        placeholder: 'Select a goal', // UI label
        options: [
          'AI Search Visibility (AEO & GEO)',
          'AI Content Creation',
          'AI Video Creation',
          'AI Social Media & Ad Creative',
          'Connected Marketing',
          'Other / General Enquiry',
        ],
      },
      subjectPrefix: 'AI marketing enquiry',
      sourceLabel: 'AI marketing services page',
    },
  },
};
