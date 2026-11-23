'use client';

import { useState, useMemo } from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceExplorer from '@/components/services/ServiceExplorer';
import DeliveryMethodology from '@/components/services/DeliveryMethodology';
import CTABottomSection from '@/components/CTABottomSection';
import Link from 'next/link';
import {
  Globe,
  Megaphone,
  Palette,
  Smartphone,
  Code,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  Workflow,
  Database,
  Server,
  Zap,
  Cloud,
  Award,
  ChevronDown,
  Building2,
  Rocket,
  Shield,
  Layers,
  Heart,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/Footer';

// Sub-services and Categories Metadata definitions
const serviceCategories = [
  {
    id: "web-dev",
    name: "Web Design & Development",
    icon: <Globe className="w-10 h-10 text-primary" />,
    description: "Transform your digital footprint with high-performance responsive websites and custom web solutions. We combine advanced design with seamless code to scale your online audience.",
    accentColor: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
    textAccent: "text-blue-500",
    bgAccent: "bg-blue-500",
    items: [
      { name: "Website Design", desc: "Breathtaking layouts matching brand goals, designed in Figma with absolute layout precision.", href: "/website-design" },
      { name: "Website Development", desc: "Robust backend API integration, swift load-times, and pixel-precise desktop and mobile experiences.", href: "/website-development" },
      { name: "Static HTML Websites", desc: "Ultra-fast, highly secure static sites built to deliver extreme loading speeds and search optimization.", href: "/static-html-websites" },
      { name: "WordPress Websites", desc: "Customized content-management hubs matching visual brand identity with full administrative independence.", href: "/wordpress-development" },
      { name: "eCommerce Development", desc: "Pristine digital store frameworks designed with robust cart security and seamless transaction steps.", href: "/ecommerce-development" },
      { name: "WooCommerce Stores", desc: "Convert standard WordPress platforms into fully functional online supermarkets with payment logic.", href: "/woocommerce-development" },
      { name: "Shopify Stores", desc: "Establish pre-configured storefronts, optimized templates, and clean product collections with speed.", href: "/shopify-development" },
      { name: "Landing Page Design", desc: "High-level visual triggers and clean sales copy designed to capture immediate sign-ups and leads.", href: "/landing-page-design" },
      { name: "Website Redesign", desc: "Breathe new vigor into legacy websites with updated structural wireframes, clean code, and fast assets.", href: "/website-redesign-services" },
    ]
  },
  {
    id: "marketing",
    name: "Digital Marketing & SEO",
    icon: <Megaphone className="w-10 h-10 text-accent" />,
    description: "Expand your digital audience reach and accelerate leads using our scientific data-driven visibility campaigns. We align rankings, keywords, and creative posts to optimize your business conversions.",
    accentColor: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    textAccent: "text-accent",
    bgAccent: "bg-accent",
    items: [
      { name: "SEO Services", desc: "Climb search rankings sustainably with structured content strategy, on-page optimization, and authoritative backlink architectures.", href: "/seo" },
      { name: "SEM (Google Ads)", desc: "Deploy precision targeting for search ads, shopping, and display networks to drive swift, measurable returns on ad spend.", href: "/search-engine-marketing" },
      { name: "Social Media Marketing", desc: "Nurture brand loyalty with daily creative updates, custom graphics, and customer interaction on major socials.", href: "/social-media-marketing" },
      { name: "Facebook Marketing", desc: "Micro-target user demographics, craft viral video campaigns, and manage organic business groups with ease.", href: "/facebook" },
      { name: "Instagram Marketing", desc: "Eye-catching visual reels, interactive stories, and influencer synergies optimized for high-impact brand retention.", href: "/instagram" },
      { name: "YouTube Marketing", desc: "Construct cinematic brand video content, high-performing video ads, and SEO-optimized channels.", href: "/youtube-marketing" },
      { name: "LinkedIn Marketing", desc: "B2B client acquisition pipelines, enterprise leadership campaigns, and executive recruitment networks.", href: "/linkedin" },
      { name: "Pinterest Marketing", desc: "Aesthetic pin boards that generate consistent referral traffic for design, lifestyle, and commerce brands.", href: "/pinterest" },
      { name: "Twitter (X) Marketing", desc: "Real-time industry comments, viral threads, and interactive brand conversations designed to engage power users.", href: "/twitter" },
      { name: "Lead Generation Services", desc: "Attract and convert qualified prospects with targeted campaigns, optimized landing funnels, and lead nurturing that fills your sales pipeline.", href: "/lead-generation-services" },
      { name: "AI Marketing Services", desc: "Harness AI-driven audience insights, predictive targeting, and automated campaign optimization to scale results with less guesswork.", href: "/ai-marketing-service-agency" },
    ]
  },
  {
    id: "branding",
    name: "Branding & Visual Design",
    icon: <Palette className="w-10 h-10 text-indigo-500" />,
    description: "Translate your core values into elegant, distinctive corporate elements. We build design systems, logos, presentation sheets, and UI/UX flows that inspire customer belief.",
    accentColor: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20",
    textAccent: "text-indigo-500",
    bgAccent: "bg-indigo-500",
    items: [
      { name: "Graphic Design", desc: "Custom illustrations, print banners, and promotional visual media built with gorgeous editorial typography.", href: "/graphic-design" },
      { name: "Logo Design", desc: "Timeless vector emblems with high-contrast scaling that encapsulate your core brand storytelling.", href: "/logo-design" },
      { name: "Branding Packages", desc: "Complete operational kits containing brand guides, color swatches, font pairings, and design system templates.", href: "/branding-packages" },
      { name: "Brochure & Flyer Design", desc: "Elegant print and digital layouts optimized to introduce products or events with maximum visual balance.", href: "/brochure-flyer-design" },
      { name: "Business Cards & Letterheads", desc: "Premium paper and PDF designs that preserve corporate visual consistency during customer handshakes.", href: "/business-card-design" },
      { name: "UI/UX Design", desc: "Human-centric research, responsive wireframes, Figma prototyping, and thorough usability audits.", href: "/ui-ux-design" },
    ]
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    icon: <Smartphone className="w-10 h-10 text-orange-500" />,
    description: "Launch premium mobile applications built to run seamlessly on native iOS, Android, and cross-platform devices. We emphasize responsive gesture design and robust local persistence.",
    accentColor: "from-orange-500/10 to-red-500/10 border-orange-500/20",
    textAccent: "text-orange-500",
    bgAccent: "bg-orange-500",
    items: [
      { name: "Android Apps", desc: "Native Kotlin applications built optimized for the Google Play Store with responsive system interactions.", href: "/android-app-development" },
      { name: "iOS Apps", desc: "Swift applications with beautiful premium layouts designed to leverage advanced Apple hardware ecosystems.", href: "/ios-app-development" },
      { name: "Hybrid Apps (Flutter, React)", desc: "Develop unified codebases that deploy to multiple operating systems with fully native performance platforms.", href: "/hybrid-app-development" },
      { name: "Progressive Web Apps (PWA)", desc: "Offline-first web portals that behave exactly like native apps directly through browser installation.", href: "/progressive-web-app-development" },
      { name: "Business/Service Apps", desc: "Dynamic utility systems featuring calendars, real-time push alerts, and direct payment pathways.", href: "/business-app-development" },
      { name: "Custom Utility Apps", desc: "Solve specific operational challenges with precise task trackers, visual tools, and lightweight applets.", href: "/utility-app-development" },
    ]
  },
  {
    id: "software",
    name: "Software & Web Applications",
    icon: <Code className="w-10 h-10 text-pink-500" />,
    description: "Scale business workflow efficiency with modular, enterprise-grade cloud platforms and internal digital instruments. We design for fluid data density and flawless user control.",
    accentColor: "from-pink-500/10 to-rose-500/10 border-pink-500/20",
    textAccent: "text-pink-500",
    bgAccent: "bg-pink-500",
    items: [
      { name: "Custom Web Applications", desc: "Dynamic, cloud-hosted SaaS applications built with secure user access levels and real-time database feeds.", href: "/custom-web-app-development" },
      { name: "ERP Solutions", desc: "Formulate complete central resource dashboards tracking active projects, payrolls, and operations.", href: "/erp-software-development" },
      { name: "CRM Systems", desc: "Empower sales and customer-success reps with client timeline charts, logs, and automatic lead triggers.", href: "/crm-software-development" },
      { name: "LMS Platforms", desc: "Construct courses, stream video materials, issue digital exams, and track student completion paths smoothly.", href: "/lms-development" },
      { name: "Booking Systems", desc: "Integrate multi-currency calendars, hourly time-slots, therapist routing, and automated SMS reminders.", href: "/booking-system-development" },
      { name: "Inventory Management", desc: "Track physical warehouse assets, automate low-stock notifications, and export barcode scans.", href: "/inventory-management-software" },
      { name: "Custom Business Tools", desc: "Formulate calculators, dynamic report exporters, and digital document signing pathways.", href: "/custom-business-software-development" },
      { name: "API Integrations", desc: "Synergize third-party payment gateways, CRM storage, shipping APIs, and maps services smoothly.", href: "/api-development-integration" },
    ]
  },
  {
    id: "tech",
    name: "Technology Infrastructure Services",
    icon: <Cpu className="w-10 h-10 text-cyan-500" />,
    description: "Establish solid foundation services utilizing top-tier coding practices, high-efficiency server architectures, and comprehensive workflow automations.",
    accentColor: "from-cyan-500/10 to-sky-500/10 border-cyan-500/20",
    textAccent: "text-cyan-500",
    bgAccent: "bg-cyan-500",
    items: [
      { name: "Backend (Laravel, Node.js)", desc: "Maintain lightning-fast API responses, advanced relational DB query routing, and robust state safety.", href: "/backend-development" },
      { name: "Frontend (React, Vue, Angular)", desc: "Employ component architectures with strict visual alignment, micro-animations, and modular state.", href: "/frontend-development" },
      { name: "Databases (MySQL, MongoDB)", desc: "Optimize collection schemas, indexing, complex query aggregation, and persistent backup snapshots.", href: "/database-development" },
      { name: "Server & Cloud (AWS, Azure)", desc: "Configure safe firewalls, horizontal container auto-scaling, CDN distributions, and continuous deploy pipes.", href: "/server-cloud-solutions" },
      { name: "Workflow Automation", desc: "Reduce employee overhead by automating CSV parsing, email dispatches, and inter-app webhook events.", href: "/workflow-automation" },
    ]
  }
];

// Interactive Goal Recommender data
const quizOptions = [
  {
    id: "brand",
    label: "Kickstart Brand Identity",
    summary: "Establish complete brand assets (logo, font rules, visual guidelines) designed to command industry authority.",
    recommended: [
      { name: "Logo Design", category: "Branding", href: "/logo-design" },
      { name: "Branding Packages", category: "Branding", href: "/branding-packages" },
      { name: "Business Cards & Letterheads", category: "Branding", href: "/business-card-design" },
      { name: "UI/UX Design Services", category: "Branding", href: "/ui-ux-design" }
    ],
    timeline: "2-4 Weeks",
    metrics: "100% Vector native Figma assets ready for immediate trade-marking."
  },
  {
    id: "ecommerce",
    label: "Launch High-Conv Store",
    summary: "Build an elegant, optimized digital catalog matching modern cart interactions and fast payment checkout API integrations.",
    recommended: [
      { name: "eCommerce Development", category: "Web Design", href: "/ecommerce-development" },
      { name: "Shopify Storefronts", category: "Web Design", href: "/ecommerce-development/shopify" },
      { name: "WooCommerce Solutions", category: "Web Design", href: "/ecommerce-development/woocommerce" },
      { name: "SEO Services", category: "Marketing", href: "/seo" }
    ],
    timeline: "4-6 Weeks",
    metrics: "Reduced bounce rate, integrated payment routing, and optimized cart loading speed."
  },
  {
    id: "saas",
    label: "Build Custom Web or App",
    summary: "Construct state-of-the-art SaaS software or mobile platforms customized precisely to internal workflow parameters.",
    recommended: [
      { name: "Custom Web Applications", category: "Software", href: "/software/custom-web" },
      { name: "Android & iOS Native Apps", category: "Mobile Apps", href: "/mobile-apps" },
      { name: "Backend Infrastructure", category: "Tech Services", href: "/tech/backend" },
      { name: "Database Design (MySQL, Mongo)", category: "Tech Services", href: "/tech/databases" }
    ],
    timeline: "8-12 Weeks",
    metrics: "Full operational controls, secure JWT credentials, and automated redundant DB backup pipelines."
  },
  {
    id: "optimize",
    label: "Optimize Traffic & Leads",
    summary: "Execute data-validated search and social campaigns to scale active lead capture, newsletter signups, and customer acquisition.",
    recommended: [
      { name: "SEO Services", category: "Marketing", href: "/seo" },
      { name: "SEM & Google Ads", category: "Marketing", href: "/search-engine-marketing" },
      { name: "Social Media Campaigns", category: "Marketing", href: "/social-media-marketing" },
      { name: "Landing Page Redesigns", category: "Web Design", href: "/landing-page-design" }
    ],
    timeline: "Continuous Monthly Drive",
    metrics: "+150% Page visibility, optimized Cost-Per-Click budgets, and verified structural metrics."
  }
];

export default function ServicesPage() {
  const [selectedQuizGoal, setSelectedQuizGoal] = useState('brand');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const activeGoalDetails = useMemo(() => {
    return quizOptions.find(opt => opt.id === selectedQuizGoal) || quizOptions[0];
  }, [selectedQuizGoal]);

  const targetIndustries = [
    { name: "IT & Software Platforms", icon: <Cpu className="w-6 h-6 text-primary" /> },
    { name: "SaaS & technology Startups", icon: <Rocket className="w-6 h-6 text-primary" /> },
    { name: "E-Commerce Corporations", icon: <Globe className="w-6 h-6 text-primary" /> },
    { name: "Healthcare & Patient Portals", icon: <Heart className="w-6 h-6 text-primary" /> },
    { name: "Educational Institutions", icon: <Award className="w-6 h-6 text-primary" /> },
    { name: "Finance & Fintech Systems", icon: <Shield className="w-6 h-6 text-primary" /> },
    { name: "Real Estate Portals", icon: <Building2 className="w-6 h-6 text-primary" /> },
    { name: "Enterprise Organizations", icon: <Layers className="w-6 h-6 text-primary" /> },
  ];

  return (
    <main className="bg-white min-h-screen">
      <ServicesHero
        categories={serviceCategories.map(({ id, name }) => ({ id, name }))}
        serviceCount={serviceCategories.reduce((total, category) => total + category.items.length, 0)}
        directoryId="service-directory"
      />

      {/* Service directory: category explorer and 3D flick-card deck */}
      <ServiceExplorer
        id="service-directory"
        categories={serviceCategories.map(({ id, name, description, items }) => ({ id, name, description, items }))}
      />

      {/* Delivery methodology: radial orbital timeline */}
      <DeliveryMethodology />

      {/* Goal Recommendation Interactive Engine Widget */}
      <section className="py-24 bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FC_100%)] text-dark relative overflow-hidden">
        {/* Soft hand-off from the dark section above */}
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(5,4,74,0.07),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,4,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,4,74,0.035)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000_20%,transparent_75%)] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-120 h-120 bg-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-120 h-120 bg-accent/[0.06] rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Interactive Recommendation Tool</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">
              Match Grehasoft <span className="text-primary italic">To Your Business Goal</span>
            </h2>
            <p className="text-[#626783] text-base leading-relaxed">
              Choose your direct growth objective below. Our smart layout selector instantly bundles the exact tech and design programs necessary to accelerate your targets.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Choose Goal column (Left) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-accent text-[10px] font-black uppercase tracking-widest mb-2 block font-mono">Step 1: Choose Your Direct Purpose</span>
              {quizOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedQuizGoal(opt.id)}
                  className={`w-full text-left p-6 rounded-box-lg border transition-all duration-300 relative group cursor-pointer ${
                    selectedQuizGoal === opt.id
                      ? 'bg-[#EEF3FF] border-primary text-dark shadow-[0_16px_34px_-20px_rgba(7,83,246,0.55)] translate-x-2'
                      : 'bg-white border-[#E3E8F2] text-dark shadow-[0_8px_22px_-18px_rgba(5,4,74,0.35)] hover:border-primary/40 hover:shadow-[0_12px_28px_-18px_rgba(5,4,74,0.4)]'
                  }`}
                >
                  <div className="min-w-0">
                    <h4 className={`font-extrabold text-sm md:text-base leading-tight ${selectedQuizGoal === opt.id ? 'text-[#127A1C]' : 'text-dark'}`}>{opt.label}</h4>
                    <p className={`text-[14px] mt-1 line-clamp-1 leading-snug ${
                      selectedQuizGoal === opt.id ? 'text-[#4b5076]' : 'text-[#626783]'
                    }`}>
                      {opt.summary}
                    </p>
                  </div>
                </button>
              ))}

              {/* Consultant CTA, pinned to the column bottom so it lines up with the panel */}
              <div className="mt-2 lg:mt-auto rounded-box-lg border border-primary/15 bg-[linear-gradient(135deg,#F3F7FF_0%,#FFFFFF_100%)] p-5 md:p-6 shadow-[0_12px_30px_-22px_rgba(7,83,246,0.45)] flex flex-col gap-4">
                <p className="text-left text-[#4b5076] text-[13px] leading-relaxed">
                  Connect with a Grehasoft solution consultant to tailor this customized bundle package.
                </p>
                <Link
                  href="/contact-us"
                  className="bg-primary hover:bg-emerald-500 text-white font-extrabold text-xs px-8 py-4.5 rounded-box-sm shadow-lg transition-all uppercase tracking-wider whitespace-nowrap flex w-full items-center justify-center gap-1.5"
                >
                  <span>Inquire This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Recommendation column (Right) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedQuizGoal}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[linear-gradient(160deg,#FFFFFF_0%,#F6F9FF_100%)] border border-[#E3E8F2] shadow-[0_24px_60px_-34px_rgba(5,4,74,0.35)] rounded-box-lg p-8 md:p-12 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-[#E3E8F2] pb-6">
                      <Zap className="text-primary w-5 h-5 animate-pulse" />
                      <div>
                        <span className="text-accent text-[9px] font-black tracking-widest uppercase block font-mono">Expert Recommended Strategy Bundle</span>
                        <h4 className="text-xl font-bold text-dark font-sans">
                          Grehasoft Solution Package
                        </h4>
                      </div>
                    </div>

                    <p className="text-[#626783] text-sm leading-relaxed">{activeGoalDetails.summary}</p>

                    <div className="space-y-3 pt-4">
                      <span className="text-[#626783] text-[10px] font-bold uppercase tracking-widest block font-mono">Recommended Services included:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeGoalDetails.recommended.map((service, sIdx) => (
                          <Link
                            href={service.href}
                            key={sIdx}
                            className="bg-white hover:bg-[#F3F7FF] border border-[#E3E8F2] hover:border-primary/40 shadow-[0_6px_16px_-12px_rgba(5,4,74,0.3)] p-4 rounded-box-sm flex items-center justify-between group transition-all"
                          >
                            <div>
                              <p className="font-bold text-dark text-xs leading-tight">{service.name}</p>
                              <span className="text-[14px] text-[#626783] font-bold block mt-1 uppercase tracking-widest font-mono">{service.category}</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-[#8a90ad] group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Operational metrics details */}
                    <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-[#E3E8F2]">
                      <div className="p-4 bg-[#F5F8FF] border border-[#E3E8F2] rounded-box-sm">
                        <p className="text-xs text-[#626783] font-bold uppercase tracking-widest font-mono mb-1">Target Timeline</p>
                        <p className="font-bold text-[#127A1C] text-sm font-sans">{activeGoalDetails.timeline}</p>
                      </div>
                      <div className="p-4 bg-[#F5F8FF] border border-[#E3E8F2] rounded-box-sm">
                        <p className="text-xs text-[#626783] font-bold uppercase tracking-widest font-mono mb-1">Expected Deliverables</p>
                        <p className="font-bold text-[#127A1C] text-xs leading-normal font-sans">{activeGoalDetails.metrics}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Target Sectors we specialize in */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Focused Sectors</span>
            <h2 className="text-4xl font-black text-dark mb-6">
              Industries We Drive <span className="text-primary italic">Innovation In</span>
            </h2>
            <p className="text-gray-600">
              We customize interactive behaviors, server queries, and layout structures according to the distinct habits and regulatory metrics of each industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {targetIndustries.map((ind, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-box-lg border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="p-4 bg-gray-50 rounded-box-sm group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h4 className="font-extrabold text-dark text-xs sm:text-sm leading-tight leading-normal">
                  {ind.name}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Faq Desk</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Get answers regarding platform staging, support packages, SEO timelines, and visual asset delivery workflows.
              </p>
              
              <div className="p-8 bg-primary rounded-box-lg text-white shadow-xl">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 block mb-3 font-mono">Consultant Tip</span>
                <p className="text-base italic leading-relaxed font-normal">
                  "Establishing custom design systems inside Figma prior to developers typing any code saves over 50% in development loop delays."
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  q: "What types of services do you offer exactly?",
                  a: "Grehasoft specializes in 6 major digital areas: Custom Web Design & Development (including WordPress/Shopify stores), High-Converting Digital Marketing & SEO Services, Branding & Design kits, Enterprise-grade Software and Web Applications, Native Android & iOS Mobile Development, and Core Tech Services (backend database tuning, cloud servers)."
                },
                {
                  q: "How do you coordinate design handoffs with engineers?",
                  a: "Our designers construct highly organized visual assets entirely inside Figma utilizing strict modern auto-layout, variable classes, and reusable design elements. This ensures developers can easily inspect coordinates, extract SVG items, and produce pixel-perfect responsive layouts swiftly."
                },
                {
                  q: "Can you provide custom support packages for our servers?",
                  a: "Yes. Post-launch, we provide continuous technical assistance packages which cover container monitoring, regular database state checks, security audits, dependency updates, and responsive load-speed testing."
                },
                {
                  q: "Why should we invest in SEO services regularly?",
                  a: "SEO is a sustainable traffic strategy. Continuous optimization ensures your business ranks on organic searching without paying continuous cost-per-click charges. It boosts authority, expands site credibility, and yields consistent long-term leads."
                },
                {
                  q: "Do you design SaaS products and internal CRM software structures?",
                  a: "Absolutely. We are highly proficient in modular admin dashboards, nested data tables, inventory tracks, booking engines, CRM flows, and LMS portals designed to run lag-free."
                }
              ].map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div key={idx} className="border border-gray-100 rounded-box-lg bg-gray-50/50 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full text-left py-5 px-6 md:px-8 flex items-center justify-between gap-4 font-bold text-dark text-base"
                    >
                      <span className="leading-snug text-dark">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
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

      <CTABottomSection />
     
    </main>
  );
}
