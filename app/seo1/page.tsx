'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
  Search, 
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
  Stethoscope,
  GraduationCap,
  Store,
  Rocket,
  Building2,
  Briefcase,
  Monitor,
  Utensils,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function SEOPage() {
  const seoServices = [
    {
      title: 'On-Page SEO Optimization',
      desc: 'We refine titles, headings, internal links, page structure, and semantic keywords to make your content more relevant and easier for search engines to understand.',
      icon: <Layout className="w-10 h-10" />,
    },
    {
      title: 'Technical SEO Enhancements',
      desc: 'Our team resolves crawl errors, improves loading speed, strengthens mobile responsiveness, optimizes sitemaps, and ensures every important page is properly indexed.',
      icon: <Settings className="w-10 h-10" />,
    },
    {
      title: 'Local SEO for Kochi & Kerala',
      desc: 'We optimize your Google Business Profile, enhance visibility on Google Maps, build local citations, and improve rankings for location-based searches across Kerala.',
      icon: <MapPin className="w-10 h-10" />,
    },
    {
      title: 'Keyword Research & Competitor Insights',
      desc: 'We identify high-intent keywords, including city-level and state-level variants, and analyze competitor strategies to uncover growth opportunities.',
      icon: <Search className="w-10 h-10" />,
    },
    {
      title: 'Content Development & Optimization',
      desc: 'Our content team builds topic clusters, plans search-focused articles, optimizes landing pages, and writes value-driven content that matches audience intent.',
      icon: <FileText className="w-10 h-10" />,
    },
    {
      title: 'Link Building & Brand Mentions',
      desc: 'We acquire relevant mentions from industry-specific websites to strengthen your site’s authority signals and improve ranking stability.',
      icon: <LinkIcon className="w-10 h-10" />,
    },
    {
      title: 'E-Commerce SEO',
      desc: 'We optimize product pages, category architecture, filters, schema markup, and user-behavior elements to enhance search visibility for online stores.',
      icon: <ShoppingBag className="w-10 h-10" />,
    },
    {
      title: 'Website Architecture & Navigation',
      desc: 'We improve your site’s URL structure, menu flow, and navigation pathways to support better crawling, indexing, and user experience.',
      icon: <Navigation className="w-10 h-10" />,
    },
  ];

  const seoProcess = [
    {
      title: 'Initial SEO Audit',
      desc: 'A complete review of technical issues, content gaps, user experience, and competitor landscape.',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'Keyword Research',
      desc: 'Identifying business-specific keywords, strong local intent terms, alternative variations, and search patterns relevant to Kochi and Kerala.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Technical Fixes',
      desc: 'Improving site speed, mobile usability, index management, structured data, and overall crawl efficiency.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Content Refinement',
      desc: 'Building topic clusters, strengthening semantic signals, and improving readability for both users and search engines.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'Authority Building',
      desc: 'Earning high-quality links, relevant mentions, and credibility signals that improve ranking strength over time.',
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      title: 'Ongoing Optimization',
      desc: 'Monthly updates, search behaviour insights, and performance-driven enhancements to maintain growth.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Reporting & Analytics',
      desc: 'Clear reports, measurable results, and actionable recommendations that show real progress.',
      icon: <LineChart className="w-6 h-6" />
    }
  ];

  const whyNeedsSEO = [
    { title: 'Reach more location-based customers who are already looking for your service', icon: <MapPin className="w-5 h-5 text-primary" /> },
    { title: 'Strengthen online visibility across multiple search touchpoints', icon: <Globe className="w-5 h-5 text-primary" /> },
    { title: 'Generate consistent, high-intent leads from organic search', icon: <Zap className="w-5 h-5 text-primary" /> },
    { title: 'Stay competitive against larger and more established companies', icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { title: 'Build long-term traffic growth without depending entirely on paid ads', icon: <Shield className="w-5 h-5 text-primary" /> },
  ];

  const industries = [
    { name: 'IT & Software Companies', icon: <Monitor className="w-5 h-5" /> },
    { name: 'Healthcare, Clinics, and Doctors', icon: <Stethoscope className="w-5 h-5" /> },
    { name: 'Real Estate Developers & Builders', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Educational Institutions & Training Centers', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Restaurants, Cafes & Cloud Kitchens', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Travel, Tourism & Hospitality Services', icon: <Globe className="w-5 h-5" /> },
    { name: 'E-Commerce Stores & Online Retailers', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Professional Service Providers', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Small & Medium Businesses across multiple sectors', icon: <Users className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      q: 'Do you offer SEO services for small and mid-size businesses in Kochi?',
      a: 'Yes. Our SEO plans are designed to support businesses of all sizes, including small and mid-size companies in Kochi, Kakkanad, Infopark, and nearby areas.'
    },
    {
      q: 'How long does it take to see SEO results?',
      a: 'Most websites begin showing improvements within 8–12 weeks, depending on competition, search behavior, and your website’s current condition.'
    },
    {
      q: 'Do you provide SEO reports?',
      a: 'Yes. You receive detailed monthly reports with performance insights, user behavior patterns, keyword movements, and actionable recommendations.'
    },
    {
      q: 'Can SEO help my business outside Kochi?',
      a: 'Yes. Our strategies work for both Kochi-focused searches and broader Kerala-based search intent.'
    },
    {
      q: 'Do you optimize Google Business Profile?',
      a: 'Yes. We optimize Maps visibility, reviews signals, local citations, and location-based search triggers.'
    },
    {
      q: 'Can you help my business appear in “near me” searches in Kochi?',
      a: 'Yes. We strengthen your local presence with accurate business details, location signals, map optimization, and content that matches how people search in Kochi.'
    },
    {
      q: 'Do you create SEO plans based on how people search and behave online?',
      a: 'Absolutely. We study user intent, search patterns, and browsing behavior to build an SEO plan that aligns with what customers are actually looking for.'
    },
    {
      q: 'Do you support businesses targeting multiple locations in Kerala?',
      a: 'Yes. We optimize for Kochi along with Infopark, Kakkanad, Thrissur, Calicut, Trivandrum, and other Kerala regions to help you attract location-specific traffic.'
    },
    {
      q: 'Can you optimize my website for better performance across different devices?',
      a: 'Yes. We ensure your website runs smoothly on mobile, desktop, and tablets, offering a faster, more responsive experience for all types of users.'
    },
    {
      q: 'Do you provide SEO strategies for businesses that rely heavily on maps and direction-based searches?',
      a: 'Yes. We optimize your presence in Google Maps, improve route discovery, and enhance signals that help users find your business easily when searching for nearby services.'
    },
    {
      q: 'Do your SEO services help businesses that receive calls and walk-ins from local customers?',
      a: 'Yes. Our optimization improves visibility for intent-driven searches like “open now,” “near me,” and location-specific keywords, helping you attract more calls and visits.'
    },
    {
      q: 'Do you offer content optimization that matches how people ask questions on search engines?',
      a: 'Yes. We create and refine content that answers real user questions, matches conversational search patterns, and supports better visibility in rich answers and snippets.'
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Best SEO Company in Kochi, Kerala"
        description="Professional SEO Services for Business Growth. Dominate search results with Kochi's leading SEO experts."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'SEO Services', href: '/seo' },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding overflow-hidden text-center md:text-left">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Organic Growth Leader</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">
                Best SEO Company in Kochi, Kerala – <br /><span className="text-primary italic">Professional SEO Services for Business Growth</span>
              </h1>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Grehasoft is widely known as the **Best SEO Company in Kochi, Kerala**, helping businesses gain stronger search visibility, higher rankings, and consistent traffic through a structured and intelligent optimization process. With over 10 years of hands-on experience, we combine strategic expertise, market data, and advanced analysis to build SEO frameworks that support real business goals—not just algorithm updates.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our system focuses on how people across Kochi and Kerala search, the terms they use, the questions they ask, and the pages they expect to find. By aligning this behavior with clean site architecture, semantic keyword patterns, smart content organization, and high-quality technical improvements, we create a long-term growth model that works across competitive niches.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every optimization we perform is designed to improve website clarity, search accessibility, and local relevance—making **Grehasoft the Best SEO Company in Kochi, Kerala** for businesses that want digital growth backed by experience, precision, and measurable results.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">10+ Years</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">SEO Experience</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">Data Driven</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Optimization</p>
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
                  src="https://picsum.photos/seed/seoexperts/800/1000"
                  alt="Kochi SEO Experts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">Top Rankings</p>
                    <p className="text-sm text-gray-400">Guaranteed Growth</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stand Out Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-dark rounded-[3rem] p-10 md:p-16 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">What Makes Our SEO <br />Company in Kochi, Kerala Stand Out</h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Located in Kochi and actively working across Kakkanad and Infopark, Grehasoft has a strong understanding of how Kerala’s digital ecosystem functions — from how local customers search, to how different industries compete for visibility.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed text-sm">
                This regional experience allows us to create search strategies that match real audience behavior, industry patterns, and commercial goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Local Search Patterns', 'Industry Competition', 'Commercial Goals', 'Regional Relevancy'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-white/90 text-xs whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Proven Expertise</span>
              <h3 className="text-3xl font-black text-dark mb-6">10+ Years of Success</h3>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  For over 10 years, we’ve supported startups, IT companies, service providers, healthcare brands, real estate businesses, and e-commerce stores with structured SEO plans.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our approach includes precise keyword mapping, continuous performance tracking, well-built content frameworks, and technical improvements that strengthen your website’s relevance and visibility.
                </p>
                <p className="text-primary font-bold leading-relaxed italic border-l-4 border-primary pl-6">
                  The result is a refined SEO process that gives your Kochi- and Kerala-based business better search clarity, stronger growth signals, and consistent performance across all major search journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Our SEO Expertise</span>
            <h2 className="text-4xl font-black text-dark mb-6">SEO Services We Provide in Kochi, Kerala</h2>
            <p className="text-gray-600">
              Grehasoft provides a complete range of SEO services built for businesses across Kochi and Kerala. Each service is structured to improve visibility, strengthen search signals, and support long-term organic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-xs">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Needs SEO Section */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Description Column (Left) */}
            <div className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-32">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Evolving Search Landscape</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Your Business <br />
                <span className="text-primary italic">Needs SEO in Kochi, Kerala</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Search behaviour in Kochi and Kerala continues to evolve as more customers use mobile search, voice search, local queries, and comparison-based browsing.
                </p>
                <p>
                  To stay visible in this environment, businesses need an SEO system that aligns with how real users search, evaluate options, and make decisions.
                </p>
                <p className="text-white/40 pt-4">
                  SEO has become essential for any business aiming for sustainable digital growth. It helps your website respond to search demand and stay aligned with evolving online behaviour without depending entirely on paid ads.
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
                <p className="text-white/90 text-lg md:text-xl font-medium italic leading-relaxed">
                  "Whether you're a startup in Kakkanad, an IT company near Infopark, a clinic in Panampilly Nagar, or a service provider anywhere in Kerala, SEO helps your business work smarter."
                </p>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {whyNeedsSEO.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-5 hover:bg-white/10 hover:border-primary/30 transition-all group"
                  >
                     <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white group-hover:text-white transition-all shadow-inner">
                       {item.icon}
                     </div>
                     <p className="font-bold text-white/90 leading-snug text-sm">{item.title}</p>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary/20 border border-primary/30 p-6 rounded-[2rem] flex flex-col justify-center items-center text-center gap-4"
                >
                   <Rocket className="w-8 h-8 text-primary mb-1" />
                   <p className="font-black text-lg text-white uppercase tracking-tighter">Growth Synergy</p>
                   <p className="text-white/60 text-[9px] uppercase tracking-[0.2em]">Kochi & Kerala Focus</p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Local SEO & Strategy Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Local Authority</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Local SEO Expertise for Kochi, Kerala-Based Businesses</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Local SEO plays a crucial role for businesses aiming to stand out in areas such as Kochi, Kakkanad, Infopark, Edappally, and other fast-growing neighbourhoods across Kerala. Grehasoft builds precise local ranking signals that strengthen your visibility in:
              </p>
              <div className="space-y-4 mb-8 text-left max-w-sm mx-auto md:mx-0">
                {[
                  'Google Maps',
                  'Location-driven search results',
                  '“Near me” queries',
                  'Local business listings and directories'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-dark/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 leading-relaxed text-lg">
                Our team focuses on improving your Google Business Profile, enhancing local citations, organising review signals, and creating content that aligns with real location-based search intent. This ensures your business appears in front of the right local audience at the exact moment they are searching for your service — giving you a strong advantage in Kochi and Kerala’s competitive markets.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">SEO Strategy We Use for Kochi & Kerala Markets</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our SEO strategy is built on a practical, data-informed, and user-focused approach tailored to the search behaviour of Kochi and Kerala audiences. We combine long-term experience with intelligent insights to create a framework that supports stable and scalable growth.
              </p>
              <ul className="space-y-6 mb-8">
                 {[
                   'Understanding user intent across city-level, locality-level, and state-level searches',
                   'Creating structured topic clusters that strengthen topical relevance and search visibility',
                   'Resolving technical issues that affect crawling, indexing, mobile performance, and overall site health',
                   'Enhancing internal linking to distribute authority and improve page-level strength',
                   'Implementing website improvements based on behaviour patterns, engagement signals, and performance data',
                   'Leveraging insights from large-scale search interactions to align content with what users expect to find'
                 ].map((point, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                       <ArrowRight className="w-3 h-3" />
                     </div>
                     <p className="text-gray-600 font-medium text-sm md:text-base">{point}</p>
                   </li>
                 ))}
              </ul>
              <p className="text-gray-500 italic text-sm leading-relaxed border-t border-gray-100 pt-6">
                This balanced and holistic strategy ensures your website remains competitive in both the Kochi and Kerala markets—strong in structure, clear in content, and optimized to match real search demand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block ">Clarity & Consistency</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Our SEO Process Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our SEO process is built to deliver clarity, consistency, and long-term growth for businesses in Kochi and Kerala. Every step is designed to align your website with user behaviour, search intent, and ongoing performance insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
            {seoProcess.slice(0, 4).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <div className="scale-125">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Phase 0{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center mt-8">
            {seoProcess.slice(4).map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <div className="scale-125">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Phase 0{i + 5}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center max-w-3xl mx-auto p-10 bg-gray-50 rounded-[3rem] border border-dashed border-primary/30"
          >
            <p className="text-gray-700 font-medium leading-relaxed italic text-lg">
              "This structured process ensures your website becomes stronger, faster, and more aligned with search demand — helping your business grow steadily in Kochi and Kerala."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Tailored Focus</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve in Kochi, Kerala</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Grehasoft supports a diverse mix of industries across Kochi and Kerala, offering tailored SEO strategies that match each sector’s search behaviour, audience demand, and competition levels. We work closely with:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-all group">
                <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">{ind.icon}</div>
                <span className="font-bold text-dark text-[10px] sm:text-xs leading-tight">{ind.name}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 leading-relaxed font-medium italic border-t border-gray-200 pt-10">
              Every industry receives a customised SEO plan built around intent-based keywords, local search patterns, and content that reflects real user needs. This ensures each business gains meaningful visibility in the Kochi and Kerala markets.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 block ">Growth Roadmap</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Get SEO Services in Kochi, Kerala – <br /><span className="text-primary italic">Start Growing Today</span>
                </h2>
                <div className="space-y-6 text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
                  <p>
                    Your business deserves a strong online presence and a strategy built for long-term growth. With Grehasoft’s 10+ years of practical SEO experience, you receive a complete optimization system designed to improve visibility.
                  </p>
                  <p className="text-white font-bold lg:text-xl">
                    Start your SEO journey today — grow smarter, perform better, and reach the right customers at the right time.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group">
                    Start Growing Today <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
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
                <p className="text-gray-600 leading-relaxed">
                  Whether you are a startup in Kakkanad, a tech firm in Infopark, or a service-based business anywhere in Kochi or Kerala, our SEO team builds a roadmap that aligns with your goals.
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
                <h4 className="font-black text-xl mb-4 relative z-10">Complete Optimization</h4>
                <p className="text-white/90 text-sm leading-relaxed relative z-10">
                  From technical refinement and content structuring to local authority signals and data-driven improvements, Grehasoft provides everything your business needs to stand out.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Trust Signal Bar */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Small labels or subtle icons showing regional presence */}
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kochi Active</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kakkanad & Infopark</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kerala Statewide</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">10+ Years Expertise</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Support & Insights</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequent <br />Questions</h2>
              <p className="text-gray-500 mb-8">
                Learn more about our SEO process, timelines, and reporting standards across Kerala.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Growth Tip</p>
                <p className="text-lg italic font-medium">"Search behavior evolves. Stay aligned with what users expect to find."</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-dark hover:text-primary transition-colors">
                    <span className="text-sm md:text-base">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-500 whitespace-pre-line border-t border-gray-100 pt-4 leading-relaxed text-xs md:text-sm">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>
    </main>
  );
}
