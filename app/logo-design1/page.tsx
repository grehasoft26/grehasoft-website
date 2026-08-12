'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
  Palette, 
  Layers, 
  Monitor, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  PenTool, 
  RefreshCw, 
  Box, 
  Briefcase, 
  Award, 
  Download, 
  Eye, 
  Sliders, 
  Users, 
  ShieldCheck,
  ChevronDown,
  Cpu,
  Heart,
  GraduationCap,
  Utensils,
  Building2,
  Shirt,
  ShoppingBag,
  Compass,
  Rocket,
  Shield,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function LogoDesignPage() {
  const logoServices = [
    {
      title: "Custom Logo Design Services",
      desc: "We create custom logo designs tailored to your business objectives, industry requirements, target audience, and brand personality.",
      icon: <Palette className="w-10 h-10" />
    },
    {
      title: "Business Logo Design Services",
      desc: "Our Business Logo Design Services help startups, SMEs, and enterprises establish strong and professional visual identities.",
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: "Brand Identity Design",
      desc: "We provide Brand Identity Design Kerala businesses use to develop complete branding systems, including logos, colour palettes, typography, and brand guidelines.",
      icon: <Layers className="w-10 h-10" />
    },
    {
      title: "Corporate Logo Design",
      desc: "As a trusted Corporate Logo Design Company, we create professional logos that reflect credibility, trust, and business excellence.",
      icon: <Shield className="w-10 h-10" />
    },
    {
      title: "Startup Logo Design",
      desc: "Our Startup Logo Design Kerala solutions help new businesses launch with a strong, memorable, and professional brand image.",
      icon: <Rocket className="w-10 h-10" />
    },
    {
      title: "Logo Redesign & Rebranding",
      desc: "We modernize outdated logos and refresh brand identities to align with evolving market expectations and business goals.",
      icon: <RefreshCw className="w-10 h-10" />
    },
    {
      title: "Logo & Branding Packages",
      desc: "As a complete Logo & Branding Company Kerala, we provide logo design, brand guidelines, business cards, stationery, and marketing assets.",
      icon: <Box className="w-10 h-10" />
    },
    {
      title: "Digital & Print Logo Design Solutions",
      desc: "We ensure every logo works seamlessly across websites, social media platforms, mobile apps, packaging, advertising materials, and print media.",
      icon: <Monitor className="w-10 h-10" />
    }
  ];

  const logoProcess = [
    {
      title: 'Brand Discovery & Research',
      desc: 'We study your business, audience, industry, competitors, and branding goals to construct creative layouts.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Concept Development',
      desc: 'Our design experts draft multiple original sketches and logo concepts aligned with your exact brand parameters.',
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: 'Design Refinement',
      desc: 'Selected concepts are adjusted dynamically using precise visual geometry, tailored margins, and typographic balances.',
      icon: <Sliders className="w-6 h-6" />
    },
    {
      title: 'Review & Feedback',
      desc: 'We work and iterate with you directly to finalize the logo design until it perfectly represents your core mission.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Final Logo Creation',
      desc: 'We generate color-safe variations, monochrome alternatives, and transparent layout variations for multi-platform use.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Brand Identity Support',
      desc: 'We build standard rules and visual style-guides specifying color ratios, font families, and correct spacing configurations.',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: 'Asset Delivery',
      desc: 'You receive high-quality master source templates and vectors organized perfectly for websites, apparel, print, and signage.',
      icon: <Download className="w-6 h-6" />
    }
  ];

  const whyNeedsLogo = [
    { title: 'Build strong brand recognition with an immediate and striking visual mark', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { title: 'Create a memorable first impression that builds trust within sub-seconds', icon: <Eye className="w-5 h-5 text-primary" /> },
    { title: 'Improve customer trust and credibility with mature, professional visual styling', icon: <Shield className="w-5 h-5 text-primary" /> },
    { title: 'Differentiate from local and international competitors in crowded markets', icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { title: 'Establish solid foundations for all future physical and web marketing assets', icon: <Layers className="w-5 h-5 text-primary" /> },
  ];

  const industries = [
    { name: 'IT & Software Companies', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Healthcare & Medical Organizations', icon: <Heart className="w-5 h-5" /> },
    { name: 'Real Estate Developers', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Educational Institutions', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Restaurants & Cafes', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Fashion & Lifestyle Brands', icon: <Shirt className="w-5 h-5" /> },
    { name: 'E-Commerce Businesses', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Tourism & Hospitality Companies', icon: <Compass className="w-5 h-5" /> },
    { name: 'Startups & Small Businesses', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Professional Service Providers', icon: <Shield className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      q: 'Do you provide logo design services for businesses in Kochi?',
      a: 'Yes. We provide comprehensive, professional logo design services for businesses across Kochi, Kakkanad, Infopark, and nearby areas throughout Kerala.'
    },
    {
      q: 'Do you create custom logo designs?',
      a: 'Yes. Every logo is custom-designed specifically based on your business goals, target audience, and brand personality. We never use pre-made templates.'
    },
    {
      q: 'Can you design logos for startups?',
      a: 'Yes. We provide startup logo design solutions that help new businesses launch with a strong, highly professional, and memorable brand image.'
    },
    {
      q: 'Do you provide brand identity design services?',
      a: 'Yes. We provide complete brand identity design services, including logos, tailored color palettes, typography guidelines, and comprehensive branding documentation.'
    },
    {
      q: 'Can you redesign my existing logo?',
      a: 'Yes. We offer logo redesign and rebranding services to modernize outdated brand marks and align them with modern layout expectations.'
    },
    {
      q: 'Will I receive files for digital and print use?',
      a: 'Yes. We deliver logo files optimized for websites, social media channels, print packages, product wrappers, and large-format advertising.'
    },
    {
      q: 'How long does logo design usually take?',
      a: 'The timeline varies depending on the conceptual complexity and revision iterations, but we guarantee rapid and strategic milestones without compromising original design quality.'
    },
    {
      q: 'Do you provide branding packages along with logo design?',
      a: 'Yes. We offer complete branding packages containing letterheads, beautiful business cards, social media assets, and key stationery files.'
    },
    {
      q: 'Why is professional logo design important?',
      a: 'A professional logo immediately builds customer trust, establishes credible authority, boosts recall rates, and forms the core of your branding system.'
    },
    {
      q: 'Do you provide customised logo design solutions?',
      a: 'Yes. Every single asset is custom-tailored around your business requirements, specific geographic demographics, and long-term marketing objectives.'
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Best Logo Design Company in Kochi, Kerala"
        description="Build a Professional Brand Identity with Kochi's leading creative design experts."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Branding', href: '/branding' },
          { name: 'Logo Design', href: '/branding/logo-design' },
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
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Branding Identity Leader
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">
                Best Logo Design Company in Kochi, Kerala – <br /><span className="text-primary italic">Creative Brand Identity & Professional Logo Design Services</span>
              </h1>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Grehasoft is a leading <b>Logo Design Company in Kochi, Kerala</b>, helping businesses build memorable brand identities through creative, professional, and strategic logo design solutions. A logo is more than just a visual symbol—it represents your business values, brand personality, and the first impression customers have about your company.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a trusted <b>Professional Logo Design Company Kerala</b> businesses rely on, we create unique logos that are visually appealing, meaningful, and aligned with your business goals. Our design team combines creativity, branding strategy, typography, colour psychology, and modern design principles to create logos that strengthen recognition and long-term brand value.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10 years of industry experience, we have supported clients across India, the Middle East, Europe, and the USA with end-to-end digital solutions, branding services, and creative design strategies. This international experience allows us to understand diverse industries, audience expectations, and global branding trends, helping us create logos that perform effectively across local and international markets.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you are a startup, small business, corporate brand, e-commerce company, healthcare provider, educational institution, or professional service firm, Grehasoft provides <b>Logo Design Services Kerala</b> businesses can depend on for powerful branding, stronger market presence, and long-term business growth.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">10+ Years</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Design Experience</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">250+ Brands</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Designed Locally</p>
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
                  src="https://picsum.photos/seed/logocraft/800/1000"
                  alt="Kochi Logo Design Experts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">Original Mark</p>
                    <p className="text-sm text-gray-400">Copyright Ownership</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">What Makes Our Logo <br />Design Company in Kochi Stand Out</h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Grehasoft understands that a logo plays a critical role in brand recognition, trust building, customer perception, and business growth. Our logo design process focuses on creating timeless, scalable, and meaningful visual identities that work effectively across digital and print platforms.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed text-sm">
                This process guarantees that your final corporate identity is elegant, optimized, completely authentic, and ready to print or publish everywhere.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Unique Brand Identity', 'Professional Visuals', 'Modern & Memorable', 'Scalable Logo Systems'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-white/90 text-xs whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Creative Standards</span>
              <h3 className="text-3xl font-black text-dark mb-6">Timeless Logo Concepts</h3>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  For over 10 years, our design masters have crafted industry-specific branding profiles, strategic visual layouts, and responsive elements across major industries.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We integrate beautiful tailored typography, geometric balances, smart color choices, and precise execution margins to ensure high consumer retention.
                </p>
                <p className="text-primary font-bold leading-relaxed italic border-l-4 border-primary pl-6">
                  As a Professional Logo Design Company Kerala businesses trust, we create logos that help brands stand out in competitive industries while maintaining a strong and professional visual identity.
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
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Creative Portfolio Scope</span>
            <h2 className="text-4xl font-black text-dark mb-6">Logo Design Services We Provide in Kochi, Kerala</h2>
            <p className="text-gray-600">
              Grehasoft provides complete Logo Design Services Kerala businesses use to strengthen branding, visibility, and customer recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logoServices.map((service, i) => (
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

      {/* Why Needs Logo Section */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Description Column (Left) */}
            <div className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-32">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Decisive Visual Assets</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Your Business <br />
                <span className="text-primary italic">Needs Professional Logo Design</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  A professionally designed logo is one of the most valuable investments a digital or physical business can make. It serves as the immediate identifier of your visual footprint.
                </p>
                <p>
                  A beautiful mark ensures that potential clients instantly understand, trust, and choose your brand layout over generic industry competition.
                </p>
                <p className="text-white/40 pt-4">
                  A strong logo serves as the foundation of your entire branding system and contributes significantly to long-term business growth.
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
                  "Whether you are launching a startup in Kakkanad, building a new brand in Kochi, or rebranding an established company anywhere in Kerala, professional design helps your company establish instant credibility."
                </p>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {whyNeedsLogo.map((item, i) => (
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
                   <p className="font-black text-lg text-white uppercase tracking-tighter">Identity Boost</p>
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Regional Expertise</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Local Logo Design Expertise for Kochi & Kerala Businesses</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Grehasoft creates logo design solutions specifically for businesses targeting customers across Kochi, Kakkanad, Infopark, Edappally, Thrissur, Trivandrum, Calicut, and throughout Kerala.
              </p>
              <div className="space-y-4 mb-8 text-left max-w-sm mx-auto md:mx-0">
                {[
                  'Kerala-focused branding strategies',
                  'Industry-specific logo development',
                  'Regional audience-focused branding',
                  'Malayalam and English letter configurations'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-dark/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 leading-relaxed text-lg">
                By combining local market knowledge with modern design trends, we help businesses create strong and recognizable brands throughout Kerala. Our designers ensure absolute contrast, balance, scalable proportions, and vector precision.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Logo Design Strategy We Use for Kochi & Kerala Markets</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our logo design strategy combines creativity, audience psychology, branding expertise, and business understanding.
              </p>
              <ul className="space-y-6 mb-8">
                 {[
                   'Understanding your business vision and brand personality',
                   'Researching competitors and industry trends',
                   'Developing unique logo concepts and creative directions',
                   'Selecting effective colours and typography',
                   'Creating scalable logo systems',
                   'Ensuring branding consistency across channels',
                   'Building long-term visual recognition'
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
                This structured process helps businesses establish professional, memorable, and future-ready brand identities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block ">Structured Design Lifecycle</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Our Logo Design Process Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our logo design workflow is designed to create creative, strategic, and business-focused branding solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
            {logoProcess.slice(0, 4).map((step, i) => (
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
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Stage 0{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center mt-8">
            {logoProcess.slice(4).map((step, i) => (
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
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Stage 0{i + 5}</span>
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
              "We provide standard guidance on correct logo systems usage, brand guidelines document consistency, and premium physical asset configurations."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Creative Alignment</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve in Kochi, Kerala</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Grehasoft provides Logo Design Services for businesses across multiple industries. Every logo is tailored to industry requirements, customer expectations, and business objectives.
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
              Each unique conceptual rendering we execute matches specific market behaviors and brand guidelines to help you grow.
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
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 block ">Visual Engineering Roadmap</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Get Professional Logo Design Services in Kochi, Kerala – <br /><span className="text-primary italic">Build a Strong Brand Identity Today</span>
                </h2>
                <div className="space-y-6 text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
                  <p>
                    Grehasoft provides professional Logo Design Services Kerala businesses trust for stronger branding, improved visibility, and sustainable business growth.
                  </p>
                  <p>
                    Whether you are launching a startup in Kakkanad, building a new brand in Kochi, or rebranding an established company anywhere in Kerala, our creative team develops logo solutions tailored to your audience, industry, and growth goals.
                  </p>
                  <p className="text-white font-bold lg:text-xl">
                    With over 10 years of successful international projects delivered cross-border, our company integrates world-class design standards with deep Kerala regional roots.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group">
                    Build Your Identity Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                  <Award className="w-6 h-6" />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  From clean, high-contrast monochrome layouts to vibrant modern vectors, our team builds high-value logos perfectly designed for packaging, signs, and screens.
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
                  <Palette className="w-40 h-40" />
                </div>
                <h4 className="font-black text-xl mb-4 relative z-10">Complete Corporate Branding</h4>
                <p className="text-white/90 text-sm leading-relaxed relative z-10">
                  As a complete Logo & Branding Company Kerala, we deliver cohesive logo designs, brand usage guidelines, corporate business cards, custom typography presets, and marketing layouts.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Trust Signal Bar */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kochi Creative</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kakkanad Infopark Active</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kerala Nationwide Scope</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">10+ Years Brand Craft</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Expert Answers</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight font-sans">Frequently <br />Asked Questions</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Learn more about our customized logo creation, asset exports, vector formats, branding guidelines, and operational workflow.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Identity Tip</p>
                <p className="text-lg italic font-medium leading-relaxed">"Your logo represents the visual handshake of your enterprise. Make it memorable."</p>
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
     
    </main>
  );
}
