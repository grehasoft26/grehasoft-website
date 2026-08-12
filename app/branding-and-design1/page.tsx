'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { 
  Palette, 
  PenTool, 
  Layout, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Award, 
  Lightbulb, 
  Settings, 
  Heart, 
  RefreshCw, 
  TrendingUp, 
  Users, 
  Target, 
  Rocket,
  Paintbrush,
  Eye,
  Briefcase,
  Compass,
  Layers,
  FileText,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const brandingServices = [
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Visually stunning and high-impact graphics designed to grab attention, deliver messages, and build brand reputation across digital platforms.',
    href: '/branding/graphic-design',
  },
  {
    icon: Paintbrush,
    title: 'Logo Design & Identity',
    desc: 'Custom-crafted, iconic logos that convey your company\'s vision, value system, and industry authority with instant recall value.',
    href: '/branding/logo-design',
  },
  {
    icon: Shield,
    title: 'Branding Packages',
    desc: 'All-inclusive corporate branding kits, typography structures, style guides, and master palettes designed from baseline research.',
    href: '/branding/packages',
  },
  {
    icon: Layout,
    title: 'User Interface (UI/UX) Design',
    desc: 'Polished layouts, web elements design, and high-fidelity mockups crafted strictly to maximize retention and conversion loops.',
    href: '/branding/ui-ux',
  },
  {
    icon: FileText,
    title: 'Brochure & Flyer Design',
    desc: 'Professional, custom-tailored print and digital marketing collateral to reinforce your field campaigns and corporate pitches.',
    href: '/branding/brochure-flyer',
  },
  {
    icon: Briefcase,
    title: 'Business Cards & Stationery',
    desc: 'Premium design files for corporate business cards, letterheads, brand envelopes, and physical assets that establish authority immediately.',
    href: '/branding/business-cards',
  },
];

const valueProps = [
  {
    title: 'Human-Centered Concepting',
    desc: 'We research exact client personas, market triggers, and competitor dynamics before illustrating a single visual concept.',
    icon: Target,
  },
  {
    title: 'Vector Precision & Guidelines',
    desc: 'We deliver ultra-sharp, mathematical vector files that scale flawlessly from 16px favicons to massive street-side exhibition bill-boards.',
    icon: Compass,
  },
  {
    title: 'Color Psychology Mapping',
    desc: 'Our design team selects tone variations that represent your enterprise\'s specific traits, ensuring proper emotional responses from viewers.',
    icon: Palette,
  },
  {
    title: 'Systemic Hierarchy Rules',
    desc: 'We map detailed brand guidelines defining exact font uses, proper spacing ratios, and permitted background colors.',
    icon: Settings,
  },
  {
    title: 'Interactive Design Alignment',
    desc: 'We design digital touchpoints with a strong focus on touch targets, negative spacing, and rapid visual reading flows.',
    icon: Layout,
  },
  {
    title: 'Multi-Medium Adaptability',
    desc: 'Every graphic asset is crafted to render cleanly on light and dark interfaces, print media, social feeds, and corporate software panels.',
    icon: Layers,
  },
  {
    title: 'Total Copyright Transition',
    desc: 'Gain 100% outright ownership and legal rights to all original vector files, design blueprints, and style guidelines securely.',
    icon: Shield,
  },
  {
    title: 'Agile Collaborative Iterations',
    desc: 'We establish modern staging reviews, interactive mockup playgrounds, and direct feedback loops with Senior Art Directors.',
    icon: RefreshCw,
  },
  {
    title: 'Performance-Safe Optimization',
    desc: 'Files are meticulously compressed as WebP and lightweight SVGs to keep your website speeds remarkably rapid.',
    icon: Zap,
  },
  {
    title: 'Esthetic Consistency',
    desc: 'By building comprehensive visual design systems, your social pages, software layouts, and physical cards speak a single cohesive voice.',
    icon: Heart,
  },
];

const designProcess = [
  {
    step: '01',
    title: 'Audit & Discovery Scope',
    desc: 'Deciphering corporate goals, target viewer psychological behaviors, competitors, and core value markers.',
  },
  {
    step: '02',
    title: 'Concept & Wireframe Drafts',
    desc: 'Sketching multiple creative directions, layout wires, and typographic formulas for direct evaluation.',
  },
  {
    step: '03',
    title: 'Vector Refining & Detailing',
    desc: 'Refining chosen concepts into perfect vector shapes, choosing color swatches, and building typography rules.',
  },
  {
    step: '04',
    title: 'Brand Book & Handover Assets',
    desc: 'Assembling complete corporate mockups, exporting standard scaling formats, and releasing legal master copyrights.',
  },
];

const faqs = [
  {
    question: 'Why choose custom strategic branding over cheap online logo generators?',
    answer: 'Cheap template generators output repetitive, unoriginal vectors that cannot be trademarked, confusing your audience and weakening brand trust. A custom strategic branding campaign establishes secure credibility, unique brand storytelling, and consistent visual systems that command market premium.',
  },
  {
    question: 'What deliverables are included inside a full corporate branding kit?',
    answer: 'A comprehensive branding package from Grehasoft includes responsive primary/secondary logos, clean typography structures, detailed color guidelines, layout grid specifications, stationery vector files, business card layouts, social profile assets, and a complete design handbook.',
  },
  {
    question: 'How long does a complete brand identity design project take?',
    answer: 'A standard custom logo design lifecycle spans 2 to 3 weeks. A full enterprise identity blueprint — including research audits, custom guidelines books, collateral design, and online element scaling — typically requires 6 to 10 weeks.',
  },
  {
    question: 'Do we receive full copyrights and vector file formats for our designs?',
    answer: 'Yes, 100%. Upon finalizing and settling the design stages, full intellectual property copyrights are transferred to you. We hand over highly organized master vector packages (AI, SVG, EPS) along with print-ready PDFs and responsive web formats.',
  },
];

export default function BrandingServicesPage() {
  const advantagesList = [
    {
      title: 'Instant Marketplace Recall',
      subtitle: 'Premium Visual Real Estate',
      desc: 'Form a permanent, memorable imprint on your target audience\'s memory. Consistent, beautiful visuals increase organic top-of-mind recall and build strong customer trust.',
      badge: 'Immediate Recognition',
      icon: Eye,
      color: 'text-indigo-650 bg-indigo-50 border-indigo-100',
      tagline: 'Establish an elite voice that elevates click-through ratios across print and web campaigns alike.'
    },
    {
      title: 'Sustained Premium Positioning',
      subtitle: 'Market Value Dominance',
      desc: 'Businesses with beautiful, well-documented design systems successfully escape commodity price battles. High-quality visuals establish immediate authority and justify premium pricing structures.',
      badge: 'Margin Upgrade',
      icon: TrendingUp,
      color: 'text-emerald-650 bg-emerald-50 border-emerald-100',
      tagline: 'Position your business as the obvious premium choice inside Kerala\'s competitive corporate markets.'
    },
    {
      title: 'Unbreakable Consumer Trust',
      subtitle: 'Immediate Credibility',
      desc: 'Sloppy design signals sloppy physical services. Perfect color balance, premium layouts, and consistent style guides assure current buyers that your operations meet strict standards.',
      badge: 'Verified Integrity',
      icon: Shield,
      color: 'text-amber-650 bg-amber-50 border-amber-100',
      tagline: 'Deliver deep, structural reliability at the first point of contact with your potential leads.'
    },
    {
      title: 'Flawless Digital Translation',
      subtitle: 'Smooth System Alignment',
      desc: 'Our design systems translate smoothly onto advanced web apps, digital advertising campaigns, and interactive screens. Code-ready design components facilitate faster frontend builds.',
      badge: 'Seamless Implementation',
      icon: Cpu,
      color: 'text-purple-650 bg-purple-50 border-purple-100',
      tagline: 'Eliminate design fragmentation across social assets, mobile apps, and enterprise dashboards.'
    },
    {
      title: 'Emotional Audience Catalyst',
      subtitle: 'Humanized Connection',
      desc: 'Strategic art direction aligns your brand voice with the real-world motivations of your demographic. We construct visual stories that resonate deeply and convert viewers into loyal repeat advocates.',
      badge: 'Direct Conversion Fuel',
      icon: Users,
      color: 'text-primary bg-primary/5 border-primary/10',
      tagline: 'Build immediate corporate authority under official Apple and Google licensing protocols.'
    }
  ];

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Branding & Logo Design Kochi"
        description="Top branding agency in Kerala. We create custom logos, corporate identity systems, rich graphics, and complete visual guidelines engineered to grow."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Branding & Design', href: '/branding' },
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
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Branding Innovation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Crafting Identities that <span className="text-primary">Connect & Inspire</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **branding agency in Kochi**, specializing in sculpting memorable corporate identity engines, clean typography frameworks, and modern, eye-safe web design styles.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From hand-crafted **logo design in Kochi** to professional corporate identity packages across Kerala, our creators synthesize art, psychology, and design to help your company dominate digital marketplaces.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Strategic Icon & Logo Craft',
                  'Master Typographic Frameworks',
                  'High-ROI Digital Graphics Packages',
                  'Interactive Web Touchpoints UX',
                  'Comprehensive Brand Guidelines Book',
                  '100% Vector Source Copyrights'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Launch Your Brand Transformation <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/branding-kochi/1200/900"
                  alt="Branding & Design Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">100%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Original Artistry</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">120+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Brand Kits Formulated</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Custom interactive grid */}
      <section className="section-padding bg-white overflow-hidden relative" id="advantages_branding_design_section">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Strategic Value</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Unrivaled <span className="text-primary">Advantages</span> of Strategic Branding
            </h2>
            <p className="text-text-gray text-lg leading-relaxed font-sans">
              Engage clients directly with secure native databases, immediate notification structures, offline operational speed, and reliable device hardware access.
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
            <p className="text-gray-750 font-medium leading-relaxed italic text-lg">
              "Strategic art direction is not just visual decoration; it is a long-term business accelerant that transforms standard communications into an elite asset, command premium pricing, and binds users directly."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Marketing Expertise</span>
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Design & Branding Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a full spectrum of graphic and brand strategy services to match your goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
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
                <p className="text-text-gray leading-relaxed mb-6 text-sm">{service.desc}</p>
                <Link href={service.href} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Explore Deliverable <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform & Product Blueprint */}
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
                Design Blueprints <span className="text-primary">Engineered</span> To Build Market Equity
              </h2>
              <div className="text-text-gray text-base leading-relaxed space-y-6 font-sans">
                <p>
                  At Grehasoft, visual rhythm, unified style parameters, and typography pairing schemes represent our core vectors for constructing brand equity. We draft secure, modern, high-precision vector artwork tailored strictly to project systemic authority and scale. We optimize readability matrices across both screens and physical sheets, letting you connect with potential leads flawlessly.
                </p>
                <p>
                  By designing tailored icon patterns, choosing human-focused color weights, and establishing guidelines, we ensure long-term visual consistency. As your creative engineering partner, we deliver print-ready assets, configure SVG code blocks, and establish clear guidelines to protect your design patterns internationally.
                </p>
                <p>
                  Our scalable solutions benefit companies by establishing direct aesthetic clarity. We help you replace boring template resources, eliminate third-party licensing risks, and construct an elite, customized asset structure that guarantees long-term brand authority and high market premiums.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
                <p className="text-primary font-semibold text-lg mb-2">High-Resolution Vector Architectures</p>
                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  We write extremely performant vector code assets and prepare extensive design guides that leverage unified designs, drastically simplifying future web development while maintaining brand integrity.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Launch Your Branding Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/branding-strategies-grehasoft/1200/900"
                  alt="Branding Strategies"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                <div className="text-dark font-bold text-lg mb-2">Our Dual Engine Approach</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Stretched Recall Value</div>
                    <p className="text-xs text-text-gray leading-relaxed">Synthesize iconic visual identifiers that hook interest across competitive feeds and stay top-of-mind eternally.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Design System Uniformity</div>
                    <p className="text-xs text-text-gray leading-relaxed">Establish strict layouts, font pairing hierarchies, and padding guides to secure seamless digital scaling.</p>
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
              At Grehasoft, we pride ourselves on being the epitome of excellence in corporate branding. Here are the core values and capabilities that set us apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
                  <h3 className="text-base font-bold text-dark mb-3 leading-snug">{prop.title}</h3>
                  <p className="text-text-gray text-xs leading-relaxed font-sans">{prop.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-1 bg-gray-50 border border-gray-100 rounded-full">
              <div className="flex flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm">
                <span className="font-semibold text-dark">Ready to design your next brand asset with us?</span>
                <Link href="/contact" className="text-primary font-extrabold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                  Team up with Grehasoft <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Growth Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Branding Workflow</span></h2>
            <p className="text-gray-400 text-lg">A structured and highly collaborative workflow to engineering distinctive, memorable identities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {designProcess.map((step, index) => (
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
                Learn more about vector standards, timeline schedules, intellectual property, and branding book guidelines.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Creative Tip</p>
                <p className="text-lg italic font-medium">"Strategic design represents raw business architecture. Avoid generic vector templates to claim authentic value."</p>
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
    
    </main>
  );
}
