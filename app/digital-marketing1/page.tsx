'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Megaphone, Search, MousePointerClick, Share2, BarChart, Globe, Mail, Target, CheckCircle2, ArrowRight, MessageSquare, TrendingUp, Zap, Shield, Users, Rocket, Facebook, Instagram, Youtube, Linkedin, Twitter, Pin, Award, Lightbulb, Heart, RefreshCw, Settings, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const marketingServices = [
  {
    icon: Search,
    title: 'SEO Services',
    desc: 'Improve your organic search engine visibility and capture higher organic keyword traffic inside Kochi, Kerala, and across global listings.',
    href: '/seo',
  },
  {
    icon: MousePointerClick,
    title: 'SEM (Google Ads)',
    desc: 'Capture immediate high-intent buyers with professionally optimized pay-per-click advertisements on target search engines.',
    href: '/search-engine-marketing',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Cultivate strong online community hubs, establish dynamic touchpoints, and raise organic reach across top networks.',
    href: '/social-media-marketing',
  },
  {
    icon: Facebook,
    title: 'Facebook Marketing',
    desc: 'Target granular customer characteristics, create effective custom leads pipelines, and boost conversions using specialized Meta Ads.',
    href: '/social-media-marketing/facebook',
  },
  {
    icon: Instagram,
    title: 'Instagram Marketing',
    desc: 'Engage modern viewers using pixel-perfect aesthetics, high-performing reels campaigns, and strategic brand integrations.',
    href: '/social-media-marketing/instagram',
  },
  {
    icon: Youtube,
    title: 'YouTube Marketing',
    desc: 'Establish powerful thought leadership, product demonstrations, and video SEO paths with structured digital video campaigns.',
    href: '/social-media-marketing/youtube',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Marketing',
    desc: 'Engage key corporate leaders, manage professional B2B lead generation streams, and elevate corporate industry authority.',
    href: '/social-media-marketing/linkedin',
  },
  {
    icon: Pin,
    title: 'Pinterest Marketing',
    desc: 'Drive organic visual discovery, build thematic boards, and tap into visual search directories to direct traffic back to your shop.',
    href: '/social-media-marketing/pinterest',
  },
  {
    icon: Twitter,
    title: 'Twitter Marketing',
    desc: 'Capture real-time user engagement, lead dynamic trend conversations, and publish high-converting micro-updates.',
    href: '/social-media-marketing/twitter',
  },
];

const marketingProcess = [
  {
    step: '01',
    title: 'Strategy & Planning',
    desc: 'Defining clear goals and a roadmap to achieve them based on market research and competitor analysis.',
  },
  {
    step: '02',
    title: 'Execution & Launch',
    desc: 'Implementing the marketing strategies across chosen channels with precision and creativity.',
  },
  {
    step: '03',
    title: 'Monitoring & Analysis',
    desc: 'Continuous tracking of campaign performance using advanced analytics tools to measure success.',
  },
  {
    step: '04',
    title: 'Optimization',
    desc: 'Data-driven adjustments to improve campaign performance and maximize your return on investment.',
  },
];

const faqs = [
  {
    question: 'Why does my business need digital marketing?',
    answer: 'Digital marketing allows you to reach a global audience, target specific demographics, and measure your results in real-time, making it more cost-effective than traditional marketing.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results vary by service. SEM can drive traffic instantly, while SEO and content marketing are long-term strategies that typically show significant results in 3-6 months.',
  },
  {
    question: 'Do you provide customized marketing plans?',
    answer: 'Yes, we create tailored digital marketing strategies based on your unique business goals, industry, and target audience.',
  },
  {
    question: 'How do you track the success of campaigns?',
    answer: 'We use advanced tools like Google Analytics, Search Console, and platform-specific insights to track key metrics like traffic, conversions, and ROI.',
  },
];

const valueProps = [
  {
    title: 'Strategic Approach',
    desc: "We don’t just execute tactics blindly; we craft strategic digital marketing plans tailored to each client's unique goals, target audience, and industry landscape.",
    icon: Target,
  },
  {
    title: 'Proven Expertise',
    desc: 'Our team comprises seasoned professionals with years of experience and a track record of driving tangible results for our clients across various digital marketing channels.',
    icon: Award,
  },
  {
    title: 'Innovative Solutions',
    desc: 'We stay ahead of the curve by constantly innovating and adapting to the latest trends and technologies in digital marketing, ensuring our clients always receive cutting-edge solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Customized Strategies',
    desc: 'We understand that one size doesn’t fit all. That’s why we take a personalized approach, customizing our strategies to meet the specific needs and objectives of each client.',
    icon: Settings,
  },
  {
    title: 'Data-Driven Insights',
    desc: 'Our decisions are backed by data. We leverage advanced analytics tools to gather valuable insights, track performance metrics, and optimize our campaigns for maximum ROI.',
    icon: BarChart,
  },
  {
    title: 'Transparent Communication',
    desc: 'We believe in open and transparent communication with our clients every step of the way. From initial consultations to regular progress updates, we keep our clients informed and involved in the process.',
    icon: MessageSquare,
  },
  {
    title: 'Collaborative Partnership',
    desc: 'We view our clients as partners, not just customers. We collaborate closely with them to understand their business inside and out, aligning our efforts with their long-term vision and objectives.',
    icon: Users,
  },
  {
    title: 'Continuous Improvement',
    desc: 'We are committed to continuous improvement and learning. We stay curious, seek feedback, and constantly refine our strategies and processes to deliver even better results for our clients.',
    icon: RefreshCw,
  },
  {
    title: 'Exceptional Customer Service',
    desc: 'Our dedicated team goes above and beyond to provide exceptional customer service and support. We’re always here to answer questions, address concerns, and ensure our clients are satisfied every step of the way.',
    icon: Heart,
  },
  {
    title: 'Measurable Results',
    desc: 'Ultimately, what makes us the best is our ability to deliver measurable results that drive business growth and success for our clients. We set clear objectives, track key performance indicators, and deliver tangible outcomes.’',
    icon: TrendingUp,
  },
];

export default function DigitalMarketing() {
  const advantagesList = [
    {
      title: 'Borderless Global Reach',
      subtitle: 'Worldwide Scaling',
      desc: 'Showcase your products and services online to find new markets globally. A sophisticated web presence acts as a borderless global directory available 24/7.',
      badge: 'Global Directories',
      icon: Globe,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      tagline: 'Connect instantly with customers in New York, London, Tokyo, and beyond from Kochi.'
    },
    {
      title: 'Significantly Lower Cost',
      subtitle: 'Budget Efficiency',
      desc: 'Compared to traditional marketing like print or television, a properly planned and targeted digital marketing campaign can reach the right customer demographics at a much lower cost.',
      badge: 'Highly Cost-Effective',
      icon: Zap,
      color: 'text-emerald-650 bg-emerald-50 border-emerald-100',
      tagline: 'Zero printed wastage. Pay exclusively for qualified clicks and active keywords search.'
    },
    {
      title: 'Improved Conversion Rates',
      subtitle: 'Seamless Purchasing',
      desc: 'If you list your services or products elegantly online, it becomes incredibly easy for people to make a direct purchase while searching. Digital marketing is seamless and immediate.',
      badge: 'Instant Buying Intent',
      icon: TrendingUp,
      color: 'text-amber-650 bg-amber-50 border-amber-100',
      tagline: 'Remove manual friction. Give buyers instant purchase control with one-click payment paths.'
    },
    {
      title: 'Trackable, Measurable Results',
      subtitle: 'Precision Metrics',
      desc: 'Gain detailed information on how customers use your website or react to your advertising through advanced web analytics. No more guess-work or speculative budgets.',
      badge: 'Precision Metrics',
      icon: BarChart,
      color: 'text-purple-650 bg-purple-50 border-purple-100',
      tagline: 'Track metrics down to the millisecond with precise attribution models of campaign ROI.'
    },
    {
      title: 'Deep Openness & Brand Loyalty',
      subtitle: 'Trust & Reputation Builder',
      desc: 'Being engaged in social media and managing it carefully builds powerful customer loyalty, fostering solid business reputation, high-integrity authority, and authentic client trust.',
      badge: 'Reputation Framework',
      icon: Users,
      color: 'text-primary bg-primary/5 border-primary/10',
      tagline: 'Direct, responsive consumer interaction cultivates long-term emotional brand advocate circles.'
    }
  ];
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Digital Marketing Services Kochi"
        description="Grow your business online with expert digital marketing strategies in Kerala. We specialize in SEO, SEM, SMM, and data-driven growth solutions."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
        ]}
      />

      {/* Hero Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Growth Marketing Agency</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Scale Your Business with <span className="text-primary">Digital Excellence</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **digital marketing agency in Kochi**, dedicated to helping businesses achieve sustainable growth in the digital landscape. We combine creative thinking with data-driven strategies.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our **digital marketing services in Kerala** cover the entire spectrum of online growth. Whether you are a startup or an established enterprise, we have the expertise to elevate your brand and drive measurable results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Data-Driven SEO Strategies',
                  'High-ROI Google Ads (SEM)',
                  'Engaging Social Media Marketing',
                  'Targeted Content Marketing',
                  'Email Marketing Automation',
                  'Transparent Analytics & Reporting'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Free Marketing Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                <img
                  src="https://picsum.photos/seed/digital-marketing-kochi/1200/900"
                  alt="Digital Marketing Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">150%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Average Traffic Growth</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">200+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Successful Campaigns</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages of Digital Marketing - Custom Interactive Grid Layout (SEO-style Process) */}
      <section className="section-padding bg-white overflow-hidden relative" id="advantages_digital_marketing_section">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Strategic Value</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Unrivaled <span className="text-primary">Advantages</span> of Going Digital
            </h2>
            <p className="text-text-gray text-lg leading-relaxed font-sans">
              Harness the capability of modern channels to optimize customer acquisition costs, capture global visibility, and build highly trusted corporate brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {advantagesList.slice(0, 3).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <div className="scale-125">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">{item.subtitle}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-[11px] text-primary italic font-medium pt-3 mt-3 border-t border-gray-100 font-sans w-full">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 justify-center mt-8 max-w-4xl mx-auto">
            {advantagesList.slice(3).map((item, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                  <div className="scale-125">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">{item.subtitle}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-[11px] text-primary italic font-medium pt-3 mt-3 border-t border-gray-100 font-sans w-full">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center max-w-3xl mx-auto p-10 bg-gray-50 rounded-[3rem] border border-dashed border-primary/30"
          >
            <p className="text-gray-705 font-medium leading-relaxed italic text-lg">
              "Transitioning your commercial operations to modernized digital marketing tracks is the single most powerful step to achieve scalable, high-authority, and lower-cost customer growth."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Marketing Expertise</span>
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Marketing Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a comprehensive range of digital marketing services to help you reach your target audience and achieve your goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-text-gray leading-relaxed mb-6">{service.desc}</p>
                <Link href={service.href} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Marketing Strategies */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-accent font-bold uppercase tracking-widest text-sm block">Growth & Visibility Blueprint</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">
                Online Marketing <span className="text-primary">Strategies</span> to Scale Internationally
              </h2>
              <div className="text-text-gray text-base leading-relaxed space-y-6 font-sans">
                <p>
                  At Grehasoft, marketing, technology, and analytics are the core pillars that guide our comprehensive strategic decisions. We build and refine robust strategies that are specifically tailored to scale your enterprise operations locally and globally. We help you achieve all major digital objectives across SEO, SEM, and SMM channels, actively optimizing websites alongside dynamic social feeds.
                </p>
                <p>
                  By optimizing websites, search indexing, and social media channels, we secure high brand loyalty and generate consistent sales. As your complete online marketing partner, we author engaging media content, manage performance-focused campaigns, and drive highly qualified organic leads directly to your storefront. Our custom plans act as catalysts to grant small and large brands unified access to the mass market.
                </p>
                <p>
                  Our advanced multi-channel solutions benefit businesses of all sizes by giving you reliable access to mass market channels. We enable you to connect with your precise buyer personas in a cost-effective, transparent, and measurable way—delivering deep personalization far superior to traditional print or broadcast media. Unlike legacy methods (print advertising or TV ads), our modern strategy ensures ultra-precise attribution.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
                <p className="text-primary font-semibold text-lg mb-2">High-Performing Paid Ads Ecosystems</p>
                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  We deploy smart, tailored budgets across Google Search Ads, Facebook Ads, LinkedIn Networks, and strategic PPC paths to generate predictable lead flow and rapid customer action.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Launch Your Custom Campaign <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative space-y-8"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
                <img
                  src="https://picsum.photos/seed/online-strategies-grehasoft/1200/900"
                  alt="Online Marketing Strategies"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                <div className="text-dark font-bold text-lg mb-2">Our Dual Marketing Engine</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Mass Market Access</div>
                    <p className="text-xs text-text-gray leading-relaxed">Expand your brand presence and establish consistent top-of-mind recall on visual feed screens across global directories.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Hyper-Personalization</div>
                    <p className="text-xs text-text-gray leading-relaxed">Direct dynamic advertisements to precise visitor demographics based on verified, real-time consumer intent data.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us the Best */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Excellence Standard</span>
            <h2 className="text-4xl font-extrabold text-dark mb-6">What Makes Us <span className="text-primary">the Best?</span></h2>
            <p className="text-text-gray text-lg">
              At Grehasoft, we pride ourselves on being the epitome of excellence in the realm of digital marketing agencies. Here are the core values and capabilities that set us apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {valueProps.map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-gray-50/50 rounded-3xl border border-gray-100/80 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <prop.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3 leading-snug">{prop.title}</h3>
                  <p className="text-text-gray text-xs leading-relaxed font-sans">{prop.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-1 bg-gray-50 border border-gray-100 rounded-full">
              <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm">
                <span className="font-semibold text-dark">Ready to skyrocket your growth and capture massive online revenue?</span>
                <Link href="/contact" className="text-primary font-extrabold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                  Team up with Grehasoft <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Growth Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Marketing Workflow</span></h2>
            <p className="text-gray-400 text-lg">A structured approach to building and scaling successful digital marketing campaigns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {marketingProcess.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-accent">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Support & Insights</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequent <br />Questions</h2>
              <p className="text-gray-500 mb-8">
                Learn more about our digital marketing process, expectations, and reporting standards across Kerala.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Growth Tip</p>
                <p className="text-lg italic font-medium">"Dynamic scaling starts with an integrated strategy. Keep all user touchpoints connected and fully tracked."</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-dark hover:text-accent transition-colors">
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-500 whitespace-pre-line border-t border-gray-100 pt-4 leading-relaxed text-xs md:text-sm font-sans">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
