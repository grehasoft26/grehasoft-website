'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
  Megaphone, 
  Search, 
  MousePointerClick, 
  Share2, 
  BarChart, 
  Globe, 
  Target, 
  Zap, 
  Shield, 
  Layout, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  MousePointer2,
  MapPin,
  LineChart,
  Layers,
  Link as LinkIcon,
  ShoppingBag,
  Navigation,
  CheckCircle,
  ChevronDown,
  Rocket,
  Building2,
  Briefcase,
  Monitor,
  Utensils,
  Stethoscope,
  GraduationCap,
  Store,
  FileText,
  Clock,
  Award,
  Cpu,
  RefreshCw,
  Sparkles,
  HelpCircle,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export default function DigitalMarketingPage() {
  const primaryServices = [
    {
      title: 'Search Engine Optimisation (SEO)',
      desc: 'SEO is the process of improving your website\'s organic visibility in Google search results. Our SEO service covers: technical site audit and fixes, on-page optimisation (title tags, meta descriptions, heading structure, internal linking), keyword research and content strategy, authoritative backlink building, and local SEO for Kochi and Kerala businesses. SEO generates compounding long-term traffic without ongoing advertising spend.',
      icon: <Search className="w-10 h-10" />,
    },
    {
      title: 'Google Ads & PPC Management',
      desc: 'We design, build, and actively manage Google Ads campaigns across Search, Display, Shopping, YouTube, and Performance Max. Every campaign is structured for maximum Quality Score, minimum cost per click, and highest conversion rate. We do not set up campaigns and leave them — we monitor, test, and optimise weekly to ensure every rupee of your advertising budget works as hard as possible.',
      icon: <MousePointerClick className="w-10 h-10" />,
    },
    {
      title: 'Social Media Marketing',
      desc: 'Strategic organic and paid social media campaigns across Facebook, Instagram, LinkedIn, YouTube, and WhatsApp Business. We handle content creation, community management, paid social advertising, influencer coordination, and performance analytics. Our social media strategies are built to grow your audience, build brand trust, and generate real enquiries — not just likes.',
      icon: <Share2 className="w-10 h-10" />,
    },
    {
      title: 'Local SEO',
      desc: 'Local SEO improves your visibility in Google\'s local search results and Google Maps when customers in your area search for your products or services. For Kochi businesses, this means ranking for \'near me\' searches, map pack positions, and location-specific queries like \'dentist in Ernakulam\' or \'IT company Infopark\'. We optimise your Google Business Profile, build local citations, and create location-specific content.',
      icon: <MapPin className="w-10 h-10" />,
    },
    {
      title: 'Content Marketing',
      desc: 'Data-backed content strategy and creation including blog posts, service pages, case studies, whitepapers, and video scripts. All content is researched for search intent, optimised for target keywords, and written to establish your brand as the go-to authority in your industry. Quality content attracts organic traffic, earns backlinks, and converts visitors into leads without ongoing ad spend.',
      icon: <FileText className="w-10 h-10" />,
    },
    {
      title: 'Performance Marketing',
      desc: 'Performance marketing campaigns focused entirely on measurable outcomes: leads, sales, app downloads, or customer acquisitions. We use advanced audience segmentation, conversion tracking, multi-channel attribution, and continuous A/B testing to maximise return on every marketing rupee. Performance marketing is ideal for businesses that need fast, scalable growth with full cost transparency.',
      icon: <Target className="w-10 h-10" />,
    },
    {
      title: 'Conversion Rate Optimisation (CRO)',
      desc: 'Getting traffic to your website is only half the challenge — converting that traffic into customers is the other half. Our CRO service analyses user behaviour through heat maps, session recordings, and funnel analysis, then designs and tests improvements to landing pages, forms, calls-to-action, and user experience elements that increase the percentage of visitors who take your desired action.',
      icon: <TrendingUp className="w-10 h-10" />,
    }
  ];

  const operationalWorkflow = [
    {
      num: '01',
      title: 'Business Discovery',
      desc: 'We begin with a detailed consultation to understand your business goals, revenue targets, existing marketing activity, competitive landscape, and target customer profile. This discovery session typically takes 60–90 minutes and shapes everything that follows.',
      icon: <Search className="w-6 h-6" />
    },
    {
      num: '02',
      title: 'Market & Competitor Research',
      desc: 'Our team conducts a thorough analysis of your top competitors — what keywords they rank for, what content they publish, where they advertise, what their backlink profile looks like, and where their gaps are. These gaps are your opportunities.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      num: '03',
      title: 'Keyword & Audience Research',
      desc: 'We identify the specific search terms your ideal customers use when looking for your products or services. We analyse search volume, competition level, and commercial intent for each keyword, then map them to the stages of your customer journey.',
      icon: <Target className="w-6 h-6" />
    },
    {
      num: '04',
      title: 'Strategic Roadmap Creation',
      desc: 'Based on the research findings, we create a customised 90-day digital marketing roadmap with specific goals, KPIs, budget allocations, channel priorities, and content plans. You review and approve this roadmap before we begin execution.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      num: '05',
      title: 'Campaign Execution',
      desc: 'Our certified specialists implement SEO improvements, launch paid advertising campaigns, publish optimised content, and activate social media strategies. All channels are launched in a coordinated sequence to maximise early momentum.',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      num: '06',
      title: 'Performance Monitoring',
      desc: 'From day one, we track all key metrics using Google Analytics 4, Google Search Console, Google Ads dashboards, and Meta Business Suite. Key metrics include organic rankings, traffic volume, CTR, conversion rate, cost per lead, and return on ad spend.',
      icon: <LineChart className="w-6 h-6" />
    },
    {
      num: '07',
      title: 'Continuous Optimisation',
      desc: 'Based on real-time performance data, we make weekly refinements to targeting, ad copy, landing pages, bid strategies, and content. We test new approaches systematically and scale what the data shows is working.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      num: '08',
      title: 'Transparent Monthly Reporting',
      desc: 'Every month, you receive a comprehensive performance report in plain language — no jargon, no spin. The report shows what we achieved against targets, what we are testing next, and what the trajectory looks like for the coming month.',
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const valueHighlights = [
    { title: '10+ years of digital marketing experience — Founded in Kochi in 2014, we have been delivering results before most agencies existed.', icon: <Clock className="w-5 h-5 text-primary" /> },
    { title: 'Google Certified & Meta Blueprint Certified — Our team holds verified certifications from Google and Meta, not just claimed expertise.', icon: <Award className="w-5 h-5 text-primary" /> },
    { title: '100+ projects completed — Proven campaigns across healthcare, real estate, education, e-commerce, and SaaS.', icon: <Target className="w-5 h-5 text-primary" /> },
    { title: 'Transparent monthly reporting — Monthly performance metrics showing exactly what your investments achieved.', icon: <BarChart className="w-5 h-5 text-primary" /> },
    { title: 'Customised strategies only — No campaign templates; built completely from scratch for your target audience.', icon: <Settings className="w-5 h-5 text-primary" /> },
    { title: 'AI-assisted analytics — Integrating AI research tools to extract growth vectors competitors completely miss.', icon: <Cpu className="w-5 h-5 text-primary" /> },
    { title: 'Ethical, white-hat SEO — Strict adherence to sustainable search rules, avoiding black-hat risks.', icon: <Shield className="w-5 h-5 text-primary" /> },
    { title: 'Dedicated account managers — Single, direct contact points for agile team synchronization.', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Full-funnel approach — Optimised paths leading your user from initial click directly to loyalty.', icon: <RefreshCw className="w-5 h-5 text-primary" /> },
    { title: 'Local depth, global scale — Deeply knowledgeable about Ernakulam while managing UAE/US campaigns.', icon: <Globe className="w-5 h-5 text-primary" /> }
  ];

  const industryVerticals = [
    { name: 'Healthcare & Hospitals', desc: 'Patient acquisition, doctor reputation, health content', details: 'Local SEO, Google Ads, Content', icon: <Stethoscope className="w-5 h-5" /> },
    { name: 'Real Estate', desc: 'Project launches, buyer leads, NRI targeting', details: 'Performance marketing, Meta Ads', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Education (Schools/Colleges)', desc: 'Student enrolment, course enquiries, overseas students', details: 'SEO, Google Ads, Social Media', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'E-Commerce', desc: 'Product visibility, cart abandonment, repeat purchase', details: 'Shopping Ads, SEO, Email, CRO', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Restaurants & Cafes', desc: 'Footfall, delivery orders, local search visibility', details: 'Local SEO, Google Business, Social', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Hospitality & Tourism', desc: 'Seasonal bookings, OTA alternatives, travel content', details: 'SEO, Google Ads, Content Marketing', icon: <Globe className="w-5 h-5" /> },
    { name: 'IT Companies & SaaS', desc: 'B2B lead generation, product demos, LinkedIn growth', details: 'SEO, LinkedIn Ads, Content', icon: <Monitor className="w-5 h-5" /> },
    { name: 'Manufacturing', desc: 'Industrial SEO, export market reach, dealer network', details: 'Technical SEO, LinkedIn, B2B Ads', icon: <Settings className="w-5 h-5" /> },
    { name: 'Finance & Insurance', desc: 'Lead generation with IRDAI/SEBI compliance', details: 'Google Ads, SEO, Content', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Construction', desc: 'Project marketing, contractor leads, land development', details: 'Local SEO, Google Ads, Social', icon: <Layers className="w-5 h-5" /> },
    { name: 'Professional Services', desc: 'Lawyer, CA, architect, consultant enquiries', details: 'Local SEO, Google Ads, Content', icon: <Users className="w-5 h-5" /> },
    { name: 'Startups', desc: 'Go-to-market, investor visibility, growth hacking', details: 'Performance Marketing, SEO, Social', icon: <Rocket className="w-5 h-5" /> }
  ];

  const pricingPackages = [
    {
      name: 'Starter — Local Visibility',
      cost: '₹15,000 – ₹30,000',
      desc: 'Best for small local businesses, single-location shops looking to capture nearby customer footfall.',
      includes: ['Google Business Profile Optimization', 'Local SEO & Citation Correction', 'Basic Social Media Posting (1 Location)']
    },
    {
      name: 'Growth — Lead Generation',
      cost: '₹35,000 – ₹75,000',
      desc: 'Best for SMEs seeking active leads, customer phone cycles, and stronger visibility inside Ernakulam.',
      includes: ['Comprehensive On-page SEO', 'Google Ads Core Campaign Engine', 'Social Media SMM (2 core network hubs)', 'Structured Leads Metrics Dashboard']
    },
    {
      name: 'Performance — ROI Focus',
      cost: '₹80,000 – ₹1,50,000',
      desc: 'Best for aggressive B2C acquisition campaigns, competitive environments, and ecommerce scale-ups.',
      includes: ['Advanced Technical SEO Auditing', 'Google Integrated Search + Display PPC', 'Meta Social Paid Advertising Stack', 'CRO Heatmapping & User Logs', 'Continuous monthly content production']
    },
    {
      name: 'Enterprise — Full Digital',
      cost: '₹2,00,000 – ₹5,00,000+',
      desc: 'Best for multi-location groups, high-scale networks, international exports, and mature companies.',
      includes: ['Complete Omnichannel Integration', 'Dedicated Account & Design Teams', 'Continuous Performance Audits', 'A/B landing page testing systems']
    },
    {
      name: 'Custom — International',
      cost: 'Custom Quote',
      desc: 'Best for Kerala brands exporting products or services to UAE, Oman, Europe, UK, and USA.',
      includes: ['Global Target Competitor Analysis', 'High-volume international search maps', 'Multi-country ad placement management', 'SaaS or premium B2B lead generation campaigns']
    }
  ];

  const resultsTimeline = [
    { channel: 'Google Ads (Search)', initial: '24–72 hours', significant: 'Week 2–4 (after optimisation)', compound: 'Ongoing while budget runs' },
    { channel: 'Google Ads (Shopping)', initial: '48–96 hours', significant: 'Week 3–5', compound: 'Ongoing while budget runs' },
    { channel: 'Social Media Paid', initial: '24–48 hours', significant: 'Week 2–3', compound: 'Ongoing while budget runs' },
    { channel: 'SEO (On-page)', initial: '2–4 weeks (crawl + index)', significant: 'Month 3–5', compound: 'Month 6–12+ (compounding)' },
    { channel: 'Local SEO', initial: '3–6 weeks', significant: 'Month 2–4', compound: 'Builds continuously' },
    { channel: 'Content Marketing', initial: 'Month 1–2 (indexing)', significant: 'Month 4–6', compound: 'Month 8–12+ (authority builds)' },
    { channel: 'Performance Marketing', initial: '24–48 hours', significant: 'Week 2–4', compound: 'Scales with budget' }
  ];

  const performanceKPIs = [
    { metric: 'Organic search traffic', result: '40–150% increase', timeline: 'Months 4–8' },
    { metric: 'Keyword rankings (page 1)', result: '5–20 new page-1 keywords', timeline: 'Months 3–6' },
    { metric: 'Google Ads cost per lead', result: '20–40% reduction after optimisation', timeline: 'Month 2–3' },
    { metric: 'Google Ads CTR', result: '2–5x improvement over unoptimised campaigns', timeline: 'Month 1–2' },
    { metric: 'Social media reach', result: '3–8x growth with paid amplification', timeline: 'Month 1–3' },
    { metric: 'Lead volume (SEO + Ads)', result: '2–4x within 6 months', timeline: 'Month 4–6' },
    { metric: 'Conversion rate', result: '15–35% improvement through CRO', timeline: 'Month 2–4' },
    { metric: 'Google Business profile views', result: '3–6x increase with Local SEO', timeline: 'Month 2–4' }
  ];

  const trustKeys = [
    {
      title: 'Unflattering, 100% Honest Support',
      desc: 'Our monthly performance reports show the good, the tentative, and what we are doing to refine campaigns. Your budget is tracked with extreme clarity.'
    },
    {
      title: 'Completely Tailored Strategies',
      desc: 'Your goals require unique execution. We construct distinct roadmap patterns for each business based exclusively on search and conversion behavior.'
    },
    {
      title: 'Commercial Business Outcomes First',
      desc: 'We define marketing targets based purely on direct, qualified client enquiries, total lead counts, and sales volumes—not misleading likes.'
    },
    {
      title: 'Dedicated Account Managers',
      desc: 'Your designated accounts director answers direct communication in less than one business day, without any endless phone menus.'
    },
    {
      title: 'Deep Native Kerala Knowledge',
      desc: 'We understand Ernakulam\'s local business hubs, seasonal shopping behaviors, and precise regional keywords that generate immediate clicks.'
    },
    {
      title: 'Scales Organically Over Time',
      desc: 'As your customer pipeline generates momentum, your system evolves. We actively propose next-phase scaling opportunities.'
    }
  ];

  const faqs = [
    {
      q: 'What is digital marketing and why does your business need it?',
      a: 'Digital marketing is the strategic promotion of products and services through online channels — including Google Search, social media, paid advertising, content, and email — to attract customers and grow revenue. Your business needs digital marketing because 85% of Indian consumers research products online before buying. Businesses without a strong digital presence lose customers to competitors who are visible when buyers search. A professional digital marketing strategy ensures your business appears at the right place, at the right time, in front of the right customer.'
    },
    {
      q: 'What does a digital marketing company in Kochi actually do?',
      a: 'A digital marketing company in Kochi improves your online visibility, attracts qualified leads, and helps convert those leads into paying customers. Specifically, Grehasoft handles keyword research, SEO implementation, Google Ads campaign management, social media marketing, content creation, local SEO, conversion rate optimisation, and performance reporting. We handle the entire online marketing function so you can focus on running your business, while we drive the digital growth.'
    },
    {
      q: 'How much does digital marketing cost in Kochi?',
      a: 'Digital marketing in Kochi typically costs between ₹15,000 and ₹5,00,000 per month depending on your goals, industry, and required services. A basic local SEO and social media package for a small business starts from ₹15,000 per month. A comprehensive package including SEO, Google Ads, social media advertising, content marketing, and CRO for a competitive industry ranges from ₹80,000 to ₹1,50,000 per month. Enterprise-level campaigns with dedicated teams start from ₹2,00,000 per month. Grehasoft provides a detailed, itemised quote after a free strategy consultation.'
    },
    {
      q: 'How long does digital marketing take to show results?',
      a: 'Google Ads and paid social media campaigns can generate leads and sales within 24 to 72 hours of launch. SEO and content marketing typically take 3 to 6 months to produce significant organic traffic growth, but deliver compounding results over time — traffic grows without ongoing ad spend. Local SEO improvements are often visible within 4 to 8 weeks. Most Grehasoft clients see measurable improvements across all active channels within 90 days, with substantial growth — often 2 to 4 times their starting traffic and lead volume — by month six.'
    },
    {
      q: 'What is the difference between SEO and Google Ads for Kerala businesses?',
      a: 'SEO (Search Engine Optimisation) improves your organic ranking in Google search results over time — it generates free traffic but requires 3 to 6 months to build. Google Ads is a paid advertising platform where your ad appears immediately and you pay per click — results are instant but stop when your budget stops. SEO builds a long-term asset; Google Ads provides an immediate lead tap. Most Kerala businesses benefit from running both: Google Ads for immediate leads while SEO builds a foundation of organic traffic that reduces long-term marketing costs.'
    },
    {
      q: 'What is Local SEO and do Kochi businesses need it?',
      a: 'Local SEO is the process of optimising your online presence to appear in Google\'s local map pack and local search results when nearby customers search for your services. Yes — every Kochi business that serves local customers needs Local SEO. When someone searches \'restaurant in Kochi\', \'dentist near Ernakulam\', or \'plumber Kakkanad\', the businesses appearing in the top three map positions get the majority of calls and visits. Grehasoft optimises your Google Business Profile, builds local citations, and creates location-specific content to win those positions.'
    },
    {
      q: 'Do you provide digital marketing services outside Kochi?',
      a: 'Yes. While Grehasoft is headquartered in Kochi, we provide digital marketing services across all of Kerala including Thiruvananthapuram, Kozhikode, Thrissur, Kannur, and Kollam. We also serve businesses across India, and manage international campaigns targeting the Middle East (UAE, Qatar, Saudi Arabia, Oman), Europe (UK, Germany, Netherlands), and the USA. Our remote-delivery model means geography is no barrier — we manage campaigns for clients anywhere in the world with the same quality, transparency, and results as our Kochi-based clients.'
    },
    {
      q: 'How do you measure the success of a digital marketing campaign?',
      a: 'Grehasoft measures campaign success through business-relevant KPIs aligned to your specific goals, not vanity metrics. For lead generation, we track number of leads, cost per lead, and lead quality. For e-commerce, we track revenue, ROAS (return on ad spend), and conversion rate. For brand building, we track organic traffic growth, keyword rankings, and share of voice. We also measure organic CTR, Google Ads quality score, social media engagement rate, and customer acquisition cost. You receive all of this in a plain-language monthly report.'
    },
    {
      q: 'What makes Grehasoft different from other digital marketing companies in Kerala?',
      a: 'Three things differentiate Grehasoft from other digital marketing companies in Kerala. First, depth of verified experience — 10+ years and 100+ completed campaigns with measurable outcomes, not just activity. Second, genuine transparency — you see every metric, every rupee spent, and every test we run, with no hidden fees or inflated reporting. Third, customisation — we have never used a campaign template; every strategy is built from scratch for your specific business, industry, and audience. We also integrate AI-assisted research tools to identify opportunities that manual research misses.'
    },
    {
      q: 'Can digital marketing help a small business or startup in Kerala?',
      a: 'Yes — digital marketing is especially powerful for small businesses and startups in Kerala because it allows you to compete with much larger brands on a controlled budget. Local SEO can put a small Kochi shop above national chains in local search results. Google Ads lets a startup target specific customer segments without wasting budget on broad audiences. Content marketing builds long-term authority that large brands often neglect. Grehasoft offers starter packages designed for SMEs and early-stage businesses starting from ₹15,000 per month, with a clear ROI focus from day one.'
    }
  ];

  return (
    <main className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Digital Marketing Company in Kochi, Kerala"
        description="Helping businesses achieve sustainable growth through Digital Marketing, SEO, Google Ads, Social media Marketing, and Performance Marketing."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
        ]}
      />

      {/* Intro Section - Matching SEO page structure */}
      <section className="section-padding overflow-hidden text-center md:text-left">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Sustainable Business Growth</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">
                Digital Marketing Company in Kochi, Kerala – <br />
                <span className="text-primary italic">Powering Growth Through High-Performance Strategies</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-extrabold text-dark mb-6">
                Digital Marketing Company in Kochi That Delivers Measurable Business Growth
              </h2>

              <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
                Grehasoft is a <strong className="text-dark font-bold">Digital Marketing Company in Kochi, Kerala</strong> with over 10 years of experience and 100+ successfully delivered campaigns across Kerala, India, and international markets including the UAE, UK, and USA.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We help businesses in <strong className="text-dark font-semibold">Ernakulam</strong>, <strong className="text-dark font-semibold">Kakkanad</strong>, <strong className="text-dark font-semibold">Infopark</strong>, and across Kerala improve their online visibility, generate qualified leads, and achieve sustainable revenue growth through data-driven digital marketing strategies that deliver measurable, real-world business results.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of Google-certified and Meta Blueprint-certified digital marketing professionals combines technical SEO expertise, high-performance Google Ads management, strategic social media marketing, content creation, and AI-assisted analytics to build customised marketing plans aligned with your specific business goals — not templates, not guesswork, not vanity metrics.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you are a Kochi startup launching your first campaign, an established Kerala SME looking to scale, or an enterprise targeting customers in India and beyond, Grehasoft builds digital marketing strategies that produce results you can see, measure, and grow from.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">10+ Years</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Campaign Integrity</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">100+ Brands</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Scaled Successfully</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden rotate-2 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/digitalexperts/800/1000"
                  alt="Kochi Digital Marketing Experts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">Data Driven</p>
                    <p className="text-sm text-gray-400">Guaranteed Return</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Structured like SEO list */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-dark rounded-[3rem] p-10 md:p-16 text-white"
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight">
                Why Should Kochi Businesses Choose Grehasoft as Their Digital Marketing Company?
              </h2>
              <p className="text-white/60 text-base mb-6 leading-relaxed font-sans">
                Choosing the right digital marketing company in Kochi is one of the most important decisions a growing business can make. Not all agencies deliver what they promise — and vanity metrics like impressions and followers don't pay your bills. At Grehasoft, we build strategies grounded in your actual business objectives, backed by 10+ years of experience and more than 100 successfully completed campaigns.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed text-sm font-sans">
                Here is why Kerala businesses choose us as their trusted digital marketing partner:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Google & Meta Certified', 
                  'Transparent Reporting', 
                  'Custom Solutions Only', 
                  'No Cookie-cutter Plans'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-white/90 text-xs whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="text-center md:text-left space-y-6">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs block">Absolute Authority</span>
              <h3 className="text-3xl font-black text-dark">Our Track Record Speaks Volumes</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-sans">
                Our team holds verified credentials direct from Google and Meta. This guarantees campaign architecture based on official frameworks rather than unproven guesswork.
              </p>
              <ul className="space-y-4 text-left">
                {valueHighlights.slice(0, 5).map((point, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-gray-600 font-sans">{point.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Proven Services</span>
            <h2 className="text-4xl font-black text-dark mb-6">What Digital Marketing Services Does Grehasoft Offer in Kochi and Kerala?</h2>
            <p className="text-gray-600">
              Grehasoft provides end-to-end digital marketing services designed specifically to improve your online visibility, generate qualified leads, and grow your revenue. Every service is delivered by specialists in that channel — not generalists doing everything at average quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all duration-300"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-xs font-sans">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Description Column (Left) */}
            <div className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-32">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Kochi Dominance</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                What Is Local SEO and <br />
                <span className="text-primary italic">How Does It Help Your Kochi Business?</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-lg leading-relaxed font-sans">
                <p>
                  Local SEO (Local Search Engine Optimisation) is the process of optimising your online presence to appear prominently in location-based search results — specifically in Google's local map pack and local organic results — when people near you search for your products or services.
                </p>
                <p>
                  When a Kochi resident searches 'dentist near Ernakulam', 'plumber in Kakkanad', or 'restaurant near Infopark', Google displays a map with three local business listings before the organic results.
                </p>
                <p className="text-white/40 pt-4">
                  Appearing here drives significant phone calls, website visits, and direct walk-in traffic to your local physical hub.
                </p>
              </div>
            </div>

            {/* Visuals Column (Right) */}
            <div className="lg:col-span-7">
              {/* Quote Block placed above cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border-l-4 border-primary p-8 rounded-r-[3rem] mb-12 shadow-2xl backdrop-blur-sm"
              >
                <p className="text-white/90 text-lg md:text-xl font-medium italic leading-relaxed font-sans">
                  "For Kochi businesses, ranking on local map packs ensures you intercept customers right at the exact second they are prepared to make a physical visit or make a service call."
                </p>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { title: 'Google Business Profile optimization — complete setup, verified categories, map pins, and Q&A management.', icon: <MapPin className="w-5 h-5 text-primary" /> },
                  { title: 'NAP consistency — ensuring your Name, Address, and Phone details are fully coordinated across directories.', icon: <CheckCircle className="w-5 h-5 text-primary" /> },
                  { title: 'Local citation building — listing on JustDial, Sulekha, IndiaMART, and major search registries.', icon: <Layers className="w-5 h-5 text-primary" /> },
                  { title: 'Location-specific articles — targeted landing hubs focusing exactly on Kochi, Ernakulam, or Kakkanad.', icon: <FileText className="w-5 h-5 text-primary" /> },
                  { title: 'Ethical review generation — plans helping you build real client feedback safely and professionally.', icon: <MessageSquare className="w-5 h-5 text-primary" /> },
                  { title: 'Local business Schema — embedding precise location scripts structured so Google reads coordinates.', icon: <Settings className="w-5 h-5 text-primary" /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                     <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white group-hover:text-white transition-all shadow-inner">
                       {item.icon}
                     </div>
                     <p className="font-bold text-white/90 leading-snug text-xs font-sans">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Operational Process Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Our Structured Formula</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Does Our Data-Driven Digital Marketing Strategy Work?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Grehasoft, we follow a structured eight-step process for every new client. This process ensures your strategy is grounded in data, aligned with your business goals, and continuously improving based on real-world performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
            {operationalWorkflow.slice(0, 4).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-500 flex flex-col gap-6 items-start h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <div className="scale-125">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Step 0{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center mt-8">
            {operationalWorkflow.slice(4).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-500 flex flex-col gap-6 items-start h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <div className="scale-125">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Step 0{i + 5}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines Matrix Section */}
      <section className="section-padding bg-gray-50 border-t border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Measurable Milestones</span>
            <h2 className="text-4xl font-black text-dark mb-6">How Long Does It Take for Digital Marketing to Show Results?</h2>
            <p className="text-gray-600">
              The time to results depends heavily on the channel, initial baseline health, and your competition intensity.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-gray-150 bg-white shadow-xl max-w-5xl mx-auto">
            <table className="w-full text-left border-collapse font-sans min-w-[700px]">
              <thead>
                <tr className="bg-gray-100/60 text-dark border-b border-gray-200">
                  <th className="p-6 text-xs font-extrabold uppercase">Channel</th>
                  <th className="p-6 text-xs font-extrabold uppercase">Initial Results</th>
                  <th className="p-6 text-xs font-extrabold uppercase">Significant Results</th>
                  <th className="p-6 text-xs font-extrabold uppercase">Long-term Compounding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 text-xs text-gray-600">
                {resultsTimeline.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 font-bold text-dark text-sm">{row.channel}</td>
                    <td className="p-6 text-indigo-600 font-semibold">{row.initial}</td>
                    <td className="p-6 text-emerald-600 font-semibold">{row.significant}</td>
                    <td className="p-6 italic font-medium">{row.compound}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-gray-500 mt-8 max-w-3xl mx-auto leading-relaxed font-sans">
            By day 90, post-launch alignment strategies produce clear outcomes. By month six, customers combining premium SEO with targeted Google Ads structures report average traffic expansions of <strong>2x to 4x</strong>.
          </p>
        </div>
      </section>

      {/* Pricing and Packages Section */}
      <section className="section-padding bg-white" id="leads-pricing">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Transparent Commitments</span>
            <h2 className="text-4xl font-black text-dark mb-6">What Is the Cost of Hiring a Digital Marketing Company in Kochi?</h2>
            <p className="text-gray-600">
              Unlike agencies that mask actual investments under confusing setups, Grehasoft aligns pricing with concrete monthly actions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.slice(0, 3).map((pkg, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">Package Type</span>
                    <h3 className="text-lg font-black text-dark leading-tight">{pkg.name}</h3>
                    <div className="text-2xl font-black text-primary">{pkg.cost}</div>
                    <span className="text-[10px] text-gray-400 font-medium font-sans">Typical Monthly Range</span>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed font-sans border-t border-gray-200/50 pt-4">{pkg.desc}</p>

                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-black text-dark uppercase tracking-widest block opacity-60">Services Included</span>
                    {pkg.includes.map((inc, index) => (
                      <div key={index} className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 font-sans">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/contact" className="btn-primary w-full text-center text-xs py-3.5 block rounded-xl">
                    Select Plan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Packages Comparative view */}
          <div className="mt-16 overflow-x-auto rounded-3xl border border-gray-150 bg-white max-w-5xl mx-auto shadow-sm">
            <table className="w-full text-left border-collapse font-sans min-w-[800px]">
              <thead>
                <tr className="bg-gray-100/60 text-dark border-b border-gray-200">
                  <th className="p-6 text-xs font-extrabold uppercase">Package Name</th>
                  <th className="p-6 text-xs font-extrabold uppercase">Monthly Range</th>
                  <th className="p-6 text-xs font-extrabold uppercase">Perfect Audience Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 text-xs">
                {pricingPackages.map((pkg, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-6 font-bold text-dark text-sm">{pkg.name}</td>
                    <td className="p-6 text-primary font-extrabold text-sm">{pkg.cost}</td>
                    <td className="p-6 text-gray-600 max-w-md font-sans">{pkg.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industries Grid Segment - Styled like SEO segment */}
      <section className="section-padding bg-gray-55">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Proven Vertical expertise</span>
            <h2 className="text-4xl font-black text-dark mb-6">Which Industries Do We Serve Across Kochi and Kerala?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every vertical behaves strictly differently. Our marketers construct native, targeted keyword arrays matching exact customer pipelines:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industryVerticals.map((ind, i) => (
              <div key={i} className="flex flex-col bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-primary/30 hover:scale-105 transition-all group">
                <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0 mb-4 bg-primary/5 w-10 h-10 rounded-xl flex items-center justify-center">
                  {ind.icon}
                </div>
                <h4 className="font-bold text-dark text-sm mb-1 leading-snug">{ind.name}</h4>
                <p className="text-[10px] text-gray-400 mb-2 font-sans">{ind.desc}</p>
                <span className="text-[9px] font-bold text-primary uppercase tracking-wider font-sans mt-auto">{ind.details}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Performance Targets Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Realistic projections</span>
            <h2 className="text-4xl font-black text-dark mb-6">What Results Can You Expect from Grehasoft's Digital Marketing Campaigns?</h2>
            <p className="text-gray-600">
              We focus purely on setting realistic, data-informed metrics rather than inflating reports with vanity indicators.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-gray-150 bg-gray-50/50 max-w-4xl mx-auto shadow-sm">
            <table className="w-full text-left border-collapse font-sans min-w-[600px]">
              <thead>
                <tr className="bg-gray-100/60 text-dark border-b border-gray-200">
                  <th className="p-6 text-xs font-extrabold uppercase">Campaign Metric</th>
                  <th className="p-6 text-xs font-extrabold uppercase">Typical Performance Improvement</th>
                  <th className="p-6 text-xs font-extrabold uppercase">Benchmark Timeframe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-150 text-xs text-gray-600">
                {performanceKPIs.map((k, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="p-6 font-bold text-dark text-sm">{k.metric}</td>
                    <td className="p-6 text-indigo-600 font-extrabold">{k.result}</td>
                    <td className="p-6 font-medium text-gray-550">{k.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Kerala Businesses Trust us Section - Styled like SEO's stand out dark area */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs block">Operational Pillars</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Why Do Kerala Businesses Trust Grehasoft <br />
              <span className="text-primary italic">as Their Digital Marketing Partner?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trustKeys.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary font-black text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Area */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Main CTA Block */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-dark rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="relative z-10">
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Ready to Connect?</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Partner with Kochi's <br /><span className="text-primary italic">Preferred Marketing Company</span>
                </h2>
                <div className="space-y-6 text-white/70 text-lg mb-10 leading-relaxed max-w-xl font-sans">
                  <p>
                    Stop burning ad budgets on unoptimized structures. Let our certified managers engineer real performance loops built completely around conversion intents.
                  </p>
                  <p className="text-white font-bold lg:text-xl">
                    Get your custom roadmap today—crafted precisely for your corporate goals.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group">
                    Begin Marketing Evolution <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Side Info Panels */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl flex flex-col justify-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <p className="text-gray-600 leading-relaxed font-sans text-sm">
                  Whether you operation from Infopark tech spaces, commercial centers in Ernakulam, or service client clusters across key international networks, we deliver outcome-driven campaigns.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary rounded-[3rem] p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden"
              >
                <div className="absolute -bottom-8 -right-8 opacity-10">
                  <TrendingUp className="w-40 h-40" />
                </div>
                <h4 className="font-black text-xl mb-4 relative z-10">Absolute Integrity</h4>
                <p className="text-white/90 text-xs leading-relaxed relative z-10 font-sans">
                  With weekly data checks, certified team members, completely bespoke roadmaps, and full transparency, your company retains absolute command over advertising conversions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Knowledge Center</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequent <br />Questions</h2>
              <p className="text-gray-500 mb-8 font-sans">
                Get clear, jargon-free explanations regarding budgeting, deliverables, timelines, and organic comparisons.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Expert Tip</p>
                <p className="text-lg italic font-medium font-sans">"Vanity numbers like impressions do not pay your staff. Optimize for direct leads."</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-dark hover:text-primary transition-colors">
                    <span className="text-sm md:text-base">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-550 whitespace-pre-line border-t border-gray-100 pt-4 leading-relaxed text-xs md:text-sm font-sans">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
