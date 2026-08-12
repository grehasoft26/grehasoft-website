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
  FileText,
  Smartphone,
  Search,
  Target,
  Layout,
  Workflow
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/Footer';

export default function UIUXDesignPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const standOutPoints = [
    { title: "User-centered design methodology", desc: "Crafting interfaces built strictly around human behaviors, feedback loops, and daily habits." },
    { title: "Research-driven design decisions", desc: "Using scientific analytics, competitor benchmarking, and heatmaps instead of pure visual guesswork." },
    { title: "Modern interface design systems", desc: "Establishing strict component architectures inside Figma to ensure beautiful, consistent assets." },
    { title: "Mobile-first user experiences", desc: "Structuring pristine touch-friendly spacing and fluid navigation for smartphones and tablets." },
    { title: "Conversion-focused design strategies", desc: "Placing visual triggers and action buttons precisely to maximize lead capture and customer sign-ups." },
    { title: "Accessibility & usability optimization", desc: "Guiding contrasts, custom font sizes, and layout choices to support all legal accessibility standards." },
    { title: "Consistent visual design frameworks", desc: "Shaping cohesive UI elements so your dashboard matches your marketing page perfectly." },
    { title: "Scalable digital product experiences", desc: "Designing structured code-ready elements ready to scale from initial startup to enterprise heights." }
  ];

  const globalUnderstandDetails = [
    { title: "Global UX standards", desc: "Embedding high-performing global UX rules, crisp responsive behaviors, and modern navigation paradigms." },
    { title: "User behaviour across different markets", desc: "Understanding subtle regional demographics to optimize flows and reduce sign-up friction." },
    { title: "SaaS & enterprise design requirements", desc: "Designing complex data density, nested tables, and clear access levels with zero visual clutter." },
    { title: "Mobile-first design expectations", desc: "Prioritizing mobile gestures, thumb zones, and optimized assets for speed on mobile networks." },
    { title: "Accessibility and usability best practices", desc: "Enforcing WCAG contrast principles and tabbed keyboard accessibility patterns." },
    { title: "Conversion-focused design systems", desc: "Building UI pathways that drive users directly to purchase, contact, or subscription actions." }
  ];

  const uiuxServices = [
    {
      title: "Website UI Design Services",
      desc: "As a trusted Website UI Design Company Kochi, we create visually engaging, responsive, and conversion-focused website interfaces that improve user interaction and navigation.",
      icon: <Monitor className="w-10 h-10" />
    },
    {
      title: "Mobile App UI/UX Design",
      desc: "Our Mobile App UI UX Design Kerala services focus on creating intuitive mobile experiences that improve usability, retention, and customer satisfaction.",
      icon: <Smartphone className="w-10 h-10" />
    },
    {
      title: "UX Research & User Analysis",
      desc: "We conduct user research, behavioural analysis, competitor studies, and audience evaluation to create data-driven design strategies.",
      icon: <Search className="w-10 h-10" />
    },
    {
      title: "Wireframing & Prototyping",
      desc: "Our team develops wireframes, interactive prototypes, and user flow structures that help visualize and refine product experiences before development.",
      icon: <Workflow className="w-10 h-10" />
    },
    {
      title: "SaaS Product UI/UX Design",
      desc: "We create modern SaaS dashboards, admin panels, CRM interfaces, and enterprise platforms optimized for efficiency and user productivity.",
      icon: <Layout className="w-10 h-10" />
    },
    {
      title: "UX Audit & Experience Optimization",
      desc: "Our UX Research Services Kerala include usability analysis, interface evaluation, and conversion-focused improvements for existing products.",
      icon: <RefreshCw className="w-10 h-10" />
    },
    {
      title: "Dashboard & Web Application Design",
      desc: "We design user-friendly dashboards, web applications, portals, and digital platforms that simplify complex workflows and improve usability.",
      icon: <Sliders className="w-10 h-10" />
    },
    {
      title: "Figma UI/UX Design Services",
      desc: "We provide Figma UI UX Design Services for collaborative product design, prototyping, design systems, and developer handoff workflows. Modern UI/UX agencies commonly use tools such as Figma for collaborative design and rapid prototyping.",
      icon: <PenTool className="w-10 h-10" />
    }
  ];

  const whyNeedsUiUx = [
    { title: 'Improve customer satisfaction metrics from day one', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { title: 'Increase active user engagement across web & mobile', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Reduce customer bounce rates by reducing loading friction', icon: <ArrowRight className="w-5 h-5 text-primary" /> },
    { title: 'Improve website and app usability via intuitive flows', icon: <Monitor className="w-5 h-5 text-primary" /> },
    { title: 'Increase lead generation and active software conversions', icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { title: 'Strengthen customer retention with habit-forming UI UX', icon: <Heart className="w-5 h-5 text-primary" /> },
    { title: 'Simplify digital interactions with clean typography', icon: <FileText className="w-5 h-5 text-primary" /> },
    { title: 'Support long-term scalable business growth', icon: <Rocket className="w-5 h-5 text-primary" /> }
  ];

  const localExpertise = [
    { title: "Kerala-focused user behaviour analysis", desc: "Detailing touch flows matching dynamic regional digital consumption habits." },
    { title: "Mobile-first interface design", desc: "High-grade tactile layouts built meticulously for optimal on-the-go experience." },
    { title: "SaaS and startup product design", desc: "Establishing crisp Figma design systems optimized beautifully for developer handoff." },
    { title: "E-commerce user experience optimization", desc: "Ensuring near-zero shopping cart exit hurdles and frictionless payment architectures." },
    { title: "Service-based platform design", desc: "Polished multi-step forms and search modules built to pull regional conversions." },
    { title: "Healthcare and education portal design", desc: "Extremely simple, clear layout structures designed for patients, doctors, and students." },
    { title: "Business workflow optimization", desc: "Simplifying redundant clicks and nested menus to boost corporate operations." }
  ];

  const strategySteps = [
    "Understanding user needs and pain points",
    "Researching customer behaviour and workflows",
    "Creating wireframes and user journeys",
    "Designing intuitive interfaces",
    "Testing usability and accessibility",
    "Optimizing for engagement and conversions",
    "Building scalable design systems"
  ];

  const designProcess = [
    {
      stage: "Stage 01",
      title: "Discovery & Research",
      desc: "We study your business goals, users, competitors, and product requirements.",
      icon: <Search className="w-6 h-6" />
    },
    {
      stage: "Stage 02",
      title: "UX Strategy Planning",
      desc: "Our team defines user journeys, experience goals, information architecture, and usability objectives.",
      icon: <Target className="w-6 h-6" />
    },
    {
      stage: "Stage 03",
      title: "Wireframing & User Flow Creation",
      desc: "We develop wireframes, navigation systems, and interaction flows that structure the user experience.",
      icon: <Workflow className="w-6 h-6" />
    },
    {
      stage: "Stage 04",
      title: "UI Design Development",
      desc: "We create modern interfaces, visual design systems, components, and responsive layouts.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      stage: "Stage 05",
      title: "Interactive Prototyping",
      desc: "We build clickable prototypes for validation, stakeholder review, and user testing.",
      icon: <Sliders className="w-6 h-6" />
    },
    {
      stage: "Stage 06",
      title: "Usability Testing & Optimization",
      desc: "We evaluate usability, user behaviour, and interaction patterns to improve the overall experience.",
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      stage: "Stage 07",
      title: "Design Handoff & Support",
      desc: "We provide organized design assets, developer-ready files, and ongoing support throughout implementation.",
      icon: <Download className="w-6 h-6" />
    }
  ];

  const industries = [
    { name: "IT & Software Companies", icon: <Cpu className="w-5 h-5" /> },
    { name: "SaaS & Technology Startups", icon: <Rocket className="w-5 h-5" /> },
    { name: "Healthcare & Medical Platforms", icon: <Heart className="w-5 h-5" /> },
    { name: "Educational Institutions", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "E-Commerce Businesses", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Real Estate Companies", icon: <Building2 className="w-5 h-5" /> },
    { name: "Travel & Hospitality Brands", icon: <Compass className="w-5 h-5" /> },
    { name: "Financial Service Providers", icon: <Shield className="w-5 h-5" /> },
    { name: "Startups & SMEs", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Enterprise Organizations", icon: <Layers className="w-5 h-5" /> }
  ];

  const faqs = [
    {
      q: "1. Do you provide UI/UX design services in Kochi?",
      a: "Yes. We provide UI/UX design services for businesses across Kochi, Kakkanad, Infopark, and Kerala."
    },
    {
      q: "2. What UI/UX services do you offer?",
      a: "We provide website UI design, mobile app UI/UX design, UX research, wireframing, prototyping, dashboard design, and usability optimization."
    },
    {
      q: "3. Do you design mobile app interfaces?",
      a: "Yes. We create user-friendly and modern mobile app UI/UX designs for Android, iOS, and cross-platform applications."
    },
    {
      q: "4. Do you provide Figma design services?",
      a: "Yes. We provide Figma UI/UX design, prototyping, design systems, and collaborative product design workflows."
    },
    {
      q: "5. Can you redesign an existing website or app?",
      a: "Yes. We provide UI/UX redesign services to improve usability, engagement, and overall user experience."
    },
    {
      q: "6. Why is UI/UX important for business growth?",
      a: "Good UI/UX improves customer satisfaction, increases conversions, reduces user frustration, and strengthens customer retention."
    },
    {
      q: "7. Do you conduct UX research before designing?",
      a: "Yes. We perform user research, competitor analysis, and behavioural studies before developing design solutions."
    },
    {
      q: "8. Can you design SaaS dashboards and enterprise applications?",
      a: "Yes. We create SaaS dashboards, CRM systems, enterprise platforms, and complex web applications."
    },
    {
      q: "9. How long does a UI/UX project take?",
      a: "Timelines depend on project complexity, features, and research requirements, but we ensure structured delivery and professional quality."
    },
    {
      q: "10. Do you provide customized UI/UX solutions?",
      a: "Yes. Every UI/UX project is customized based on your business goals, target audience, product requirements, and industry needs."
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Best UI/UX Design Company in Kochi"
        description="Deliver user-centered digital experiences and interface layouts designed precisely to expand enterprise engagement."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Branding', href: '/branding' },
          { name: 'UI/UX Design', href: '/branding/ui-ux' },
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
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                USER-CENTERED DIGITIZED INTERFACES
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">
                Best UI/UX Design Company in Kochi, Kerala – <br />
                <span className="text-primary italic">User-Centered Digital Experience & Interface Design Services</span>
              </h1>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed font-normal">
                Grehasoft is a leading <strong>UI/UX Design Company in Kochi</strong>, helping businesses create intuitive, engaging, and conversion-focused digital experiences through strategic user interface and user experience design solutions. In today’s digital environment, users expect websites, mobile apps, and software platforms to be fast, visually appealing, and easy to use. Effective UI/UX design plays a critical role in improving customer satisfaction, engagement, and business performance.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a trusted <strong>User Experience Design Company Kerala</strong> businesses rely on, we combine user research, interface design, usability principles, interaction design, and modern design systems to create digital products that deliver seamless user experiences. Our design approach focuses on understanding user behaviour, reducing friction, and improving usability across websites, mobile applications, SaaS platforms, dashboards, and digital products.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10 years of industry experience, we have supported clients across India, the Middle East, Europe, and the USA with end-to-end digital solutions, branding services, software development, and creative design strategies. This international exposure enables us to create UI/UX solutions aligned with global usability standards while remaining relevant to local market expectations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-semibold">
                Whether you are a startup, SaaS company, enterprise business, healthcare organization, educational institution, e-commerce brand, or service provider, Grehasoft provides <strong>UI UX Design Services Kerala</strong> businesses can depend on for stronger engagement, improved usability, and long-term digital growth.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">100%</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Figma Native Systems</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">Pixel Perfect</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Frictionless workflows</p>
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
              <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden rotate-1 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/uiux-kochi/800/1000"
                  alt="Kochi Elite UI/UX Design Specialists"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">High Fidelity</p>
                    <p className="text-sm text-gray-400">Interactive Figma Prototypes</p>
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
                What Makes Our UI/UX Design Company in Kochi Stand Out
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                At Grehasoft, UI/UX design is built around users, business goals, and measurable outcomes. We focus on creating digital experiences that are visually appealing, highly functional, and optimized for customer interaction.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed text-sm">
                A well-designed user interface can significantly improve conversions, while strong user experience design helps increase engagement and customer satisfaction. As a trusted **UI Design Agency Kochi** businesses choose, we create digital experiences that help brands improve usability, customer retention, and overall business performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['User-Centered Methodology', 'Research-Driven Logic', 'Accessible Typography', 'Modern Visual Systems'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-white/90 text-xs whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Measurable Outcomes</span>
              <h3 className="text-3xl font-black text-dark mb-6">Designed to Influence Interaction</h3>
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

      {/* Global Branding Experience & Local Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <span className="text-primary font-black uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full font-mono">Cross Border Usability</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-4 mb-6">
                Global UI/UX Experience with Local Market Expertise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While headquartered in Kochi, Kerala, Grehasoft has successfully delivered UI/UX projects for businesses across India, the Middle East, Europe, and the USA. This international experience allows us to understand the precise nuances that drive cross-border digital layout usage.
              </p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm text-dark font-bold italic leading-relaxed">
                  "By combining international product design expertise with Kerala market understanding, we create user experiences that are scalable, intuitive, and business-focused."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-accent text-xs font-black tracking-widest uppercase block mb-1 font-mono">What this international experience allows us to master:</span>
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
                      0{i + 1}
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
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Interface Engineering</span>
            <h2 className="text-4xl font-black text-dark mb-6">UI/UX Design Services We Provide in Kochi</h2>
            <p className="text-gray-600">
              Grehasoft provides complete UI UX Design Services Kerala businesses use to improve user engagement, usability, and digital product performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uiuxServices.map((service, i) => (
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

      {/* Why Your Business Needs Professional Materials */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Description Column (Left) */}
            <div className="lg:col-span-12 xl:col-span-5 text-center xl:text-left xl:sticky xl:top-32 mb-8 xl:mb-0">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block font-mono">Core Value Drivers</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Your Business <br />
                <span className="text-primary italic">Needs Professional UI/UX</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-lg leading-relaxed col-span-1">
                <p>
                  User expectations continue to grow across websites, mobile apps, and digital platforms. Businesses that invest in UI/UX design create better customer experiences, stronger engagement, and improved business outcomes.
                </p>
                <p>
                  User-centered design helps businesses create digital experiences that are easier to use and more effective for customers.
                </p>
              </div>
            </div>

            {/* Visuals Grid (Right) */}
            <div className="lg:col-span-12 xl:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border-l-4 border-primary p-8 rounded-r-[3rem] mb-12 shadow-2xl backdrop-blur-sm"
              >
                <p className="text-white/90 text-lg md:text-xl font-medium italic leading-relaxed">
                  "Interface logic is the single highest driver of checkout, subscription, and lead conversions. If the layout is confusing, you lose active business."
                </p>
              </motion.div>

              {/* Grid cards */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {whyNeedsUiUx.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-5 hover:bg-white/10 hover:border-primary/30 transition-all group shadow-inner"
                  >
                     <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white group-hover:text-white transition-all">
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Kerala Context</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Local UI/UX Design Expertise for Kochi & Kerala Businesses</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed font-normal">
                Grehasoft develops UI/UX solutions specifically for businesses operating across Kochi, Kakkanad, Infopark, Edappally, Thrissur, Trivandrum, Calicut, and throughout Kerala.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {localExpertise.map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0" />
                      <span className="font-bold text-dark text-xs leading-snug">{item.title}</span>
                    </div>
                    <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                By combining local audience understanding with modern UX methodologies, we help businesses build digital products that users enjoy and trust completely.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black block mb-2 font-mono">Scientific Frameworks</span>
              <h2 className="text-3xl md:text-4xl font-black text-dark mb-6 leading-tight">UI/UX Design Strategy We Use for Kochi & Kerala Markets</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our UI/UX strategy combines research, design thinking, usability principles, and business objectives. As a trusted Digital Product Design Agency Kerala, our strategy includes:
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
                Research-driven UI/UX design helps businesses align user goals with business objectives and improve overall product effectiveness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block font-mono">Our Product Flow</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Our UI/UX Design Process Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our UI/UX workflow is designed to create user-focused, scalable, and business-driven digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
            {designProcess.slice(0, 4).map((step, i) => (
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
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded font-mono">{step.stage}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center mt-8">
            {designProcess.slice(4).map((step, i) => (
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
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded font-mono">{step.stage}</span>
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
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono font-bold">Comprehensive Verticals</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve in Kochi, Kerala</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">
              Grehasoft provides UI UX Design Services Kochi businesses across multiple industries rely on. Every UI/UX solution is customized according to business objectives, user expectations, and industry requirements.
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
              We align microinteraction behaviors and visual density parameters specifically to capture conversions in each sector vertical.
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-widest font-mono">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                Collaborate With Grehasoft
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Get Professional UI/UX Design Services in Kochi, Kerala – <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent">
                  Create Better Digital Experiences
                </span>
              </h2>

              {/* Asset Highlight Card */}
              <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/20 transition-all duration-300 shadow-2xl text-left">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1 leading-snug">
                  Your digital product is only as effective as the experience it delivers to users.
                </h3>
                <p className="text-white/60 text-xs mt-3 leading-relaxed">
                  A well-designed user interface and optimized user experience help businesses improve engagement, retention, and conversions seamlessly. Contact our digital architects today.
                </p>
              </div>

              {/* Startup & Expansion Detail Panel */}
              <div className="flex gap-4 p-6 bg-white/[0.01] border border-white/5 rounded-2xl text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  <strong>Flexible Platform Sizing:</strong> Whether you are building a website, launching a mobile application, developing a SaaS platform, or redesigning an existing digital product, our UI/UX team creates solutions tailored to your audience, industry, and business goals.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Strategic Summary */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 space-y-6 text-left">
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base leading-none font-mono">Digital Experience Hub</h4>
                    <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold font-mono">Kochi, Kerala Experts</span>
                  </div>
                </div>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Grehasoft provides professional <strong>UI UX Design Services Kerala</strong> businesses trust for stronger usability, improved customer satisfaction, and long-term digital growth.
                </p>

                {/* Local & International Synergy Metric */}
                <div className="grid grid-cols-12 gap-5 bg-white/[0.02] p-5 rounded-2xl border border-white/5 items-center">
                  <div className="col-span-3 text-center border-r border-white/5">
                    <p className="text-3xl font-black text-primary leading-none">10+</p>
                    <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1 font-mono">Years Global Exposure</p>
                  </div>
                  <div className="col-span-9 text-xs text-white/60 leading-relaxed pl-2">
                    With over 10 years of experience and successful projects delivered for clients across India, the Middle East, Europe, and the USA, Grehasoft combines global design expertise with local market understanding to create intuitive, user-friendly, and high-performing digital experiences.
                  </div>
                </div>

                <p className="font-semibold text-white/80 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-5">
                  From user research and wireframing to interface design and usability optimization, Grehasoft delivers complete UI/UX solutions that help businesses grow confidently in today’s digital world.
                </p>
              </div>

              {/* Conversion Hub Trigger */}
              <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-primary/40 transition-all duration-300">
                <div className="space-y-1 z-10 text-left">
                  <h4 className="font-bold text-white text-base md:text-lg leading-tight">Ready to maps your layouts?</h4>
                  <p className="text-white/50 text-[11px] leading-snug font-mono">Connect with our Kerala interface professionals today for a personalized quote.</p>
                </div>
                <div className="z-10 flex-shrink-0 font-sans">
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Knowledge Base</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight font-sans">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Get answers regarding Figma layout handoffs, mobile gestures, and WCAG rules.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase font-mono">Expert Perspective</p>
                <p className="text-lg italic font-medium leading-relaxed font-sans">"Perfect interactive prototypes clarify developer objectives, saving more than 60% in coding costs."</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = expandedFaq === i;
                return (
                  <div key={i} className="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : i)}
                      className="w-full text-left py-5 px-6 md:px-8 flex items-center justify-between gap-4 font-bold text-dark text-base md:text-lg select-none font-sans"
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
                          <div className="px-6 pb-6 md:px-8 text-sm text-gray-500 border-t border-gray-100 pt-3 leading-relaxed font-sans">
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
