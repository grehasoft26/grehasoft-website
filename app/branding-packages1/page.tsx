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
  TrendingUp,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/Footer';

export default function BrandingPackagesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const standOutPoints = [
    { title: "Brand identity development", desc: "Crafting end-to-end visual symbols and layout schemes for seamless recognition." },
    { title: "Logo and visual identity design", desc: "High-contrast custom vector marks and distinct corporate typography." },
    { title: "Brand positioning strategies", desc: "Defining market voice and unique positioning matrices to stand out." },
    { title: "Business branding consistency", desc: "Rigorous standards ensuring multi-channel graphics match perfectly." },
    { title: "Marketing collateral creation", desc: "Design systems for brochures, fly-sheets, and digital corporate profiles." },
    { title: "Social media branding", desc: "Customizable social media template libraries and creative banners." },
    { title: "Corporate branding systems", desc: "Complete visual standards built specifically for enterprise compliance." },
    { title: "Long-term brand recognition", desc: "Aesthetic systems designed with high-retention cues for lasting impact." }
  ];

  const globalUnderstandDetails = [
    { title: "Global branding standards", desc: "World-class ratios, clean visual grids, and strict technical guidelines." },
    { title: "Industry-specific branding trends", desc: "Up-to-date styles tailored precisely to match sector customer requirements." },
    { title: "Customer perception & engagement", desc: "Strategic design parameters engineered around deep audience psychology." },
    { title: "Professional positioning strategies", desc: "Dynamic positioning matrices that establish secure corporate authority." },
    { title: "Cross-market visual communication", desc: "Clean and direct aesthetics designed to bridge local and global barriers." }
  ];

  const brandingServices = [
    {
      title: "Startup Branding Packages",
      desc: "Our Startup Branding Packages Kerala businesses use include logo design, brand identity development, business stationery, social media branding, and marketing assets required for launch.",
      icon: <Rocket className="w-10 h-10" />
    },
    {
      title: "Logo & Brand Identity Design",
      desc: "As a trusted Logo & Branding Company Kochi, we create logos, colour systems, typography guidelines, and visual identity frameworks that strengthen brand recognition.",
      icon: <Palette className="w-10 h-10" />
    },
    {
      title: "Corporate Branding Services",
      desc: "Our Corporate Branding Services Kochi businesses trust help companies build professional and consistent brand identities across all communication channels.",
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: "Social Media Branding",
      desc: "We create profile branding, social media templates, promotional creatives, cover designs, and digital assets that maintain visual consistency.",
      icon: <Monitor className="w-10 h-10" />
    },
    {
      title: "Packaging & Product Branding",
      desc: "Our team develops packaging design, product branding systems, label designs, and visual packaging concepts that improve product visibility and customer trust.",
      icon: <Box className="w-10 h-10" />
    },
    {
      title: "Marketing Collateral Design",
      desc: "We design brochures, company profiles, business cards, flyers, presentations, catalogues, and promotional materials that support business growth.",
      icon: <FileText className="w-10 h-10" />
    },
    {
      title: "Rebranding Solutions",
      desc: "Our Rebranding Services Kerala help businesses modernize outdated identities while preserving valuable brand recognition and customer trust.",
      icon: <RefreshCw className="w-10 h-10" />
    },
    {
      title: "Complete Branding Solutions",
      desc: "As a provider of Complete Branding Solutions Kochi, we deliver end-to-end branding systems covering strategy, design, implementation, and long-term consistency.",
      icon: <Layers className="w-10 h-10" />
    }
  ];

  const whyNeedsBranding = [
    { title: 'Build stronger brand recognition among target groups', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { title: 'Improve customer trust and credibility instantly', icon: <Shield className="w-5 h-5 text-primary" /> },
    { title: 'Create a highly consistent business identity across physical and digital formats', icon: <Layers className="w-5 h-5 text-primary" /> },
    { title: 'Strengthen the effectiveness of all direct marketing campaigns', icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { title: 'Improve customer recall and long-term buyer loyalty', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Differentiate dynamically from regional and country competitors', icon: <Award className="w-5 h-5 text-primary" /> },
    { title: 'Support fast-scaling business growth models securely', icon: <Rocket className="w-5 h-5 text-primary" /> },
    { title: 'Increase long-term brand asset value and overall customer perception', icon: <TrendingUp className="w-5 h-5 text-primary" /> }
  ];

  const localExpertise = [
    { title: "Kerala-focused branding strategies", desc: "Harnessing local market behavior to convert consumers effectively." },
    { title: "Startup and SME branding systems", desc: "Tailored start-up packs designed specifically for rapid local scaling." },
    { title: "Corporate identity development", desc: "World-class corporate visual signatures suited to represent enterprise excellence." },
    { title: "Regional audience-focused visual communication", desc: "Connecting directly with regional cultural norms and consumer expectations." },
    { title: "Industry-specific branding packages", desc: "Targeted color systems structured strictly for high vertical retention." },
    { title: "Malayalam and English branding considerations", desc: "Expert typography composition spanning multi-language graphic materials." },
    { title: "Business-focused marketing materials", desc: "Conversion-optimized profiles, stationery, and brochures ready to pitch." }
  ];

  const strategySteps = [
    "Understanding your business goals and audience",
    "Analyzing competitors and market positioning",
    "Defining brand personality and messaging",
    "Creating visual identity systems",
    "Developing brand consistency guidelines",
    "Designing marketing and promotional assets",
    "Building long-term brand recognition"
  ];

  const brandingProcess = [
    {
      stage: "Stage 01",
      title: "Brand Discovery & Research",
      desc: "We study your business, industry, audience, competitors, and market positioning.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      stage: "Stage 02",
      title: "Brand Strategy Development",
      desc: "Our team defines brand messaging, personality, visual direction, and communication goals.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      stage: "Stage 03",
      title: "Visual Identity Creation",
      desc: "We create logos, colour palettes, typography systems, icon styles, and visual branding assets.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      stage: "Stage 04",
      title: "Branding Asset Development",
      desc: "We design business cards, brochures, social media creatives, company profiles, and marketing materials.",
      icon: <Sliders className="w-6 h-6" />
    },
    {
      stage: "Stage 05",
      title: "Review & Refinement",
      desc: "We refine branding elements based on feedback and business requirements.",
      icon: <Users className="w-6 h-6" />
    },
    {
      stage: "Stage 06",
      title: "Brand Guidelines Creation",
      desc: "We prepare brand usage guidelines that ensure consistency across all platforms.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      stage: "Stage 07",
      title: "Final Delivery & Support",
      desc: "You receive complete branding assets along with implementation support for websites, social media, advertising, and print materials.",
      icon: <Download className="w-6 h-6" />
    }
  ];

  const industries = [
    { name: "IT & Software Companies", icon: <Cpu className="w-5 h-5" /> },
    { name: "Healthcare & Medical Brands", icon: <Heart className="w-5 h-5" /> },
    { name: "Educational Institutions", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Restaurants & Cafes", icon: <Utensils className="w-5 h-5" /> },
    { name: "Real Estate Developers", icon: <Building2 className="w-5 h-5" /> },
    { name: "Fashion & Lifestyle Brands", icon: <Shirt className="w-5 h-5" /> },
    { name: "E-Commerce Businesses", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Tourism & Hospitality Companies", icon: <Compass className="w-5 h-5" /> },
    { name: "Startups & Small Businesses", icon: <Rocket className="w-5 h-5" /> },
    { name: "Professional Service Providers", icon: <Shield className="w-5 h-5" /> }
  ];

  const faqs = [
    {
      q: "1. What is included in your branding packages?",
      a: "Our branding packages can include logo design, brand identity, business cards, stationery, social media branding, marketing materials, brand guidelines, and more."
    },
    {
      q: "2. Do you provide branding packages for startups?",
      a: "Yes. We provide Startup Branding Packages Kerala businesses use to launch with a professional and memorable identity."
    },
    {
      q: "3. Can you create complete brand identity systems?",
      a: "Yes. We provide complete Brand Identity Design Kerala solutions including logos, colour palettes, typography, and branding guidelines."
    },
    {
      q: "4. Do you offer rebranding services?",
      a: "Yes. We provide rebranding solutions for businesses looking to modernize or reposition their brand identity."
    },
    {
      q: "5. Can branding improve business growth?",
      a: "Yes. Strong branding improves recognition, trust, customer engagement, and overall marketing effectiveness."
    },
    {
      q: "6. Do you create social media branding assets?",
      a: "Yes. We design social media templates, profile branding, promotional creatives, and digital marketing assets."
    },
    {
      q: "7. Do you provide packaging and product branding?",
      a: "Yes. We create packaging design systems, label designs, and product branding solutions."
    },
    {
      q: "8. How long does branding usually take?",
      a: "Project timelines depend on branding scope and requirements, but we ensure structured delivery and professional quality."
    },
    {
      q: "9. Do you provide branding support after project completion?",
      a: "Yes. We provide branding guidance and support to maintain consistency across platforms."
    },
    {
      q: "10. Do you provide customized branding packages?",
      a: "Yes. Every branding package is tailored to your business goals, audience, industry, and branding requirements."
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Best Branding Packages Company in Kochi, Kerala"
        description="Build a robust, memorable, and stunning brand identity with Kochi's premier branding agency."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Branding', href: '/branding' },
          { name: 'Branding Packages', href: '/branding/packages' },
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
                Comprehensive Brand Identity
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">
                Best Branding Packages Company in Kochi, Kerala – <br />
                <span className="text-primary italic">Complete Brand Identity & Business Branding Solutions</span>
              </h1>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Grehasoft is a leading <strong>Branding Packages Company in Kochi, Kerala</strong>, helping businesses build powerful, memorable, and professional brand identities through complete branding solutions. In today’s competitive market, branding is more than just a logo—it defines how customers perceive, recognize, and connect with your business.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a trusted <strong>Business Branding Company Kerala</strong> businesses rely on, we create strategic branding systems that combine visual identity, brand messaging, creative design, and marketing consistency. Our branding packages are designed to help businesses establish a strong presence across digital platforms, print materials, social media, advertising campaigns, and customer touchpoints.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10 years of industry experience, we have supported clients across India, the Middle East, Europe, and the USA with end-to-end digital solutions, branding services, and creative business strategies. This global experience enables us to create branding systems that align with international standards while remaining relevant to local and regional markets.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-semibold">
                Whether you are launching a startup, rebranding an existing company, expanding your business, or creating a new product identity, Grehasoft provides <strong>Branding Packages Kerala</strong> businesses can depend on for long-term growth, stronger recognition, and professional market positioning.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">10+ Years</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Industry Mastery</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">Global Reach</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Middle East, US, EU</p>
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
              <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden -rotate-2 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/branding-agency/800/1000"
                  alt="Kochi Branding & Identity Specialists"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">Brand Guidelines</p>
                    <p className="text-sm text-gray-400">Robust manual included</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
                What Makes Our Branding Packages in Kochi Stand Out
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                At Grehasoft, branding is built around strategy, creativity, consistency, and business growth. We focus on creating complete brand ecosystems that help businesses communicate clearly and build trust with customers.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed text-sm">
                As a trusted **Branding Agency Kerala** businesses choose, we create branding solutions that strengthen visibility, credibility, and customer engagement across multiple channels. Our meticulous approach encompasses every aspect crucial to identity building.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Brand Developer Support', 'Conversion Patterns', 'High Visual Retention', 'Unified Brand Manuals'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-white/90 text-xs whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Branding Focus</span>
              <h3 className="text-3xl font-black text-dark mb-6">Complete Brand Ecosystems</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {standOutPoints.map((pt, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-black text-xs mb-3">
                      0{i + 1}
                    </div>
                    <h4 className="font-extrabold text-sm text-dark mb-1">{pt.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Experience & Local Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <span className="text-primary font-black uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">Global Reaching Scope</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-4 mb-6">
                Global Branding Experience with Local Market Expertise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While headquartered in Kochi, Kerala, Grehasoft has successfully delivered branding projects for businesses across India, the Middle East, Europe, and the USA.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                This combination of international branding expertise and deep regional Kerala market understanding helps us construct brand identities that are scalable, memorable, and business-focused on any landscape.
              </p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm text-dark font-bold italic leading-relaxed">
                  "Our master designers marry refined global visual structures with cultural parameters to capture local consumer emotions immediately."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-accent text-xs font-black tracking-widest uppercase block mb-1">What This Global Exposure Allows Us To Understand:</span>
              <div className="grid grid-cols-1 gap-4">
                {globalUnderstandDetails.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl text-primary flex-shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-sm mb-1 leading-snug">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Visual Scope</span>
            <h2 className="text-4xl font-black text-dark mb-6">Branding Packages We Provide in Kochi, Kerala</h2>
            <p className="text-gray-600">
              Grehasoft provides complete Branding Packages Kerala businesses use to establish strong visual identities and professional market presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 group transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-xs">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Needs Branding Packages */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Description Column (Left) */}
            <div className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-32">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Visual Foundations</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Your Business <br />
                <span className="text-primary italic">Needs Professional Branding Packages</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Strong branding helps businesses stand out, build trust, and create lasting customer relationships. Businesses across Kochi and Kerala increasingly invest in branding because customers connect more easily with recognizable and professional brands.
                </p>
                <p>
                  A complete branding system creates a strong foundation for all future marketing, advertising, and business development efforts. Branding agencies play a major role in creating, managing, and strengthening brand identities for businesses.
                </p>
              </div>
            </div>

            {/* Visuals Column (Right) */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border-l-4 border-primary p-8 rounded-r-[3rem] mb-12 shadow-2xl backdrop-blur-sm"
              >
                <p className="text-white/90 text-lg md:text-xl font-medium italic leading-relaxed">
                  "Your corporate signature acts as the primary visual handshake. It transforms casual target viewers into devoted buyers."
                </p>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {whyNeedsBranding.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-5 hover:bg-white/10 hover:border-primary/30 transition-all group animate-[fadeIn_0.5s_ease-out]"
                  >
                     <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white group-hover:text-white transition-all shadow-inner">
                       {item.icon}
                     </div>
                     <p className="font-bold text-white/90 leading-snug text-sm">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Local Expertise & Strategy Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Regional Expertise</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Local Branding Expertise for Kochi & Kerala Businesses</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Grehasoft develops branding solutions specifically for businesses operating across Kochi, Kakkanad, Infopark, Edappally, Thrissur, Trivandrum, Calicut, and throughout Kerala.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {localExpertise.map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0" />
                      <span className="font-bold text-dark text-xs">{item.title}</span>
                    </div>
                    <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 leading-relaxed text-lg">
                By combining local market knowledge with global branding expertise, we help businesses build stronger identities across Kerala and beyond.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black block mb-2">Conversion Strategy</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Branding Strategy We Use for Kochi & Kerala Markets</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our branding strategy combines creativity, business positioning, customer psychology, and visual communication. As a trusted provider of Brand Development Services Kochi, our strategy includes:
              </p>
              <ul className="space-y-6">
                 {strategySteps.map((point, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                       <ArrowRight className="w-3 h-3" />
                     </div>
                     <p className="text-gray-600 font-semibold text-sm md:text-base">{point}</p>
                   </li>
                 ))}
              </ul>
              <p className="text-gray-500 italic text-sm leading-relaxed border-t border-gray-100 pt-6 mt-8">
                This structured branding process helps businesses create stronger market presence and customer trust.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Structured Branding Lifecycle</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Our Branding Process Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our branding workflow is designed to create professional, scalable, and business-focused brand identities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
            {brandingProcess.slice(0, 4).map((step, i) => (
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
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">{step.stage}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center mt-8">
            {brandingProcess.slice(4).map((step, i) => (
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
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">{step.stage}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Creative Alignment</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve in Kochi, Kerala</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Grehasoft provides Business Branding Services Kochi businesses across multiple industries rely on. Every branding package is customized based on industry requirements, audience expectations, and business goals.
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
            <p className="text-gray-500 leading-relaxed font-semibold italic border-t border-gray-200 pt-10">
              From fast startups to healthcare facilities, we tailor every graphic package specifically for the targeted market sector.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="section-padding bg-gradient-to-br from-gray-950 via-dark to-black text-white relative overflow-hidden py-24 lg:py-32 border-t border-white/5">
        {/* Modern grid and concentric glow effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        <div className="absolute -top-40 -right-40 w-120 h-120 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-widest bronze-glow">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                Collaborate With Grehasoft
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Get Professional Branding Packages in Kochi, Kerala – <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent">
                  Build a Strong Brand Today
                </span>
              </h2>

              {/* Spectacular Asset Highlight Card */}
              <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/20 transition-all duration-300 shadow-2xl text-left">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1 leading-snug">
                  Your brand is one of the most valuable assets your business can own.
                </h3>
                <p className="text-white/60 text-xs mt-3 leading-relaxed">
                  A strong brand creates recognition, trust, credibility, and long-term business growth. Our customized Kochi packages help your enterprise secure immediate visual authority.
                </p>
              </div>

              {/* Startup & Expansion Detail Panel */}
              <div className="flex gap-4 p-6 bg-white/[0.01] border border-white/5 rounded-2xl text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  <strong>Scalable Geographic Integration:</strong> Whether you are launching a startup in Kakkanad, expanding a business in Kochi, or rebranding an established company anywhere in Kerala, our branding team develops complete brand systems tailored to your audience, industry, and business goals.
                </p>
              </div>
            </div>

            {/* Right Column: Custom Strategy Summary & Core Form Actions */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Context Copy Blocks organized professionally inside an elegant viewport */}
              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 space-y-6 text-left">
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base leading-none">Complete Strategic Solutions</h4>
                    <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">Kochi, Kerala Expertise</span>
                  </div>
                </div>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Grehasoft provides professional <strong>Branding Packages Kerala</strong> businesses trust for stronger market positioning, improved visibility, and sustainable growth.
                </p>

                {/* Local & International Synergy Metric */}
                <div className="grid grid-cols-12 gap-5 bg-white/[0.02] p-5 rounded-2xl border border-white/5 items-center">
                  <div className="col-span-3 text-center border-r border-white/5">
                    <p className="text-3xl font-black text-primary leading-none">10+</p>
                    <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">Years Client Experience</p>
                  </div>
                  <div className="col-span-9 text-xs text-white/60 leading-relaxed pl-2">
                    With over 10 years of experience and successful projects delivered for clients across India, the Middle East, Europe, and the USA, Grehasoft combines global branding expertise with local business understanding to create impactful and future-ready brand identities.
                  </div>
                </div>

                <p className="font-semibold text-white/80 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-5">
                  From logo design and brand identity development to complete branding packages and marketing collateral creation, Grehasoft delivers professional branding solutions that help businesses stand out and grow confidently.
                </p>
              </div>

              {/* Conversion Hub Trigger */}
              <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-primary/40 transition-all duration-300">
                <div className="space-y-1 z-10 text-left">
                  <h4 className="font-bold text-white text-base md:text-lg leading-tight">Ready to craft your company's legacy?</h4>
                  <p className="text-white/50 text-[11px] leading-snug">Connect with our Kerala branding masterminds today for a custom quote.</p>
                </div>
                <div className="z-10 flex-shrink-0">
                  <Link href="/contact" className="bg-primary hover:bg-emerald-500 text-white font-extrabold text-xs px-8 py-4.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-center inline-flex items-center gap-2 uppercase tracking-wider cursor-pointer">
                    <span>Inquire Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Knowledge Center</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Understand more about our customized templates, rebrandings, asset formats, and delivery timelines.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Expert Perspective</p>
                <p className="text-lg italic font-medium leading-relaxed">"Consistency is the secret key to consumer authority. Align your packages today."</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = expandedFaq === i;
                return (
                  <div key={i} className="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : i)}
                      className="w-full text-left py-5 px-6 md:px-8 flex items-center justify-between gap-4 font-bold text-dark text-base md:text-lg select-none"
                    >
                      <span className="text-sm md:text-base leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 md:px-8 text-sm text-gray-500 border-t border-gray-100 pt-3 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    
    </main>
  );
}
