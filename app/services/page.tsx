'use client';

import { useState, useMemo } from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
  Globe, 
  Megaphone, 
  Palette, 
  Smartphone, 
  Code, 
  Cpu, 
  Search, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  Layout, 
  Workflow, 
  Clock, 
  MessageSquare, 
  Database, 
  Server, 
  Sliders, 
  Monitor, 
  Zap, 
  Code2, 
  Cloud, 
  Settings, 
  Lightbulb, 
  Award,
  ChevronDown,
  Building2,
  Rocket,
  Shield,
  Layers,
  Heart,
  TrendingUp,
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
      { name: "Static HTML Websites", desc: "Ultra-fast, highly secure static sites built to deliver extreme loading speeds and search optimization.", href: "/website-development/static-website" },
      { name: "WordPress Websites", desc: "Customized content-management hubs matching visual brand identity with full administrative independence.", href: "/wordpress-development" },
      { name: "eCommerce Development", desc: "Pristine digital store frameworks designed with robust cart security and seamless transaction steps.", href: "/ecommerce-development" },
      { name: "WooCommerce Stores", desc: "Convert standard WordPress platforms into fully functional online supermarkets with payment logic.", href: "/woocommerce-development" },
      { name: "Shopify Stores", desc: "Establish pre-configured storefronts, optimized templates, and clean product collections with speed.", href: "/shopify-development" },
      { name: "Landing Page Design", desc: "High-level visual triggers and clean sales copy designed to capture immediate sign-ups and leads.", href: "/landing-page-design" },
      { name: "Website Redesign", desc: "Breathe new vigor into legacy websites with updated structural wireframes, clean code, and fast assets.", href: "/website-redesign" },
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
      { name: "YouTube Marketing", desc: "Construct cinematic brand video content, high-performing video ads, and SEO-optimized channels.", href: "/youtube" },
      { name: "LinkedIn Marketing", desc: "B2B client acquisition pipelines, enterprise leadership campaigns, and executive recruitment networks.", href: "/linkedin" },
      { name: "Pinterest Marketing", desc: "Aesthetic pin boards that generate consistent referral traffic for design, lifestyle, and commerce brands.", href: "/pinterest" },
      { name: "Twitter (X) Marketing", desc: "Real-time industry comments, viral threads, and interactive brand conversations designed to engage power users.", href: "/twitter" },
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
      { name: "Logo Design", category: "Branding", href: "/branding/logo-design" },
      { name: "Branding Packages", category: "Branding", href: "/branding/packages" },
      { name: "Business Cards & Letterheads", category: "Branding", href: "/branding/business-cards" },
      { name: "UI/UX Design Services", category: "Branding", href: "/branding/ui-ux" }
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
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryTab, setActiveCategoryTab] = useState('all');
  const [selectedQuizGoal, setSelectedQuizGoal] = useState('brand');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Filter Sub-services based on search filter input
  const filteredCategories = useMemo(() => {
    return serviceCategories.map(category => {
      // Find matching sub-services
      const matchedItems = category.items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Category matches if name matches, or if items match
      const isCatMatched = category.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          category.description.toLowerCase().includes(searchTerm.toLowerCase());

      return {
        ...category,
        items: matchedItems,
        isDirectMatch: isCatMatched,
        hasMatchingItems: matchedItems.length > 0
      };
    }).filter(cat => {
      // Only keep categories that matching tab choice
      if (activeCategoryTab !== 'all' && cat.id !== activeCategoryTab) {
        return false;
      }
      return cat.isDirectMatch || cat.hasMatchingItems;
    });
  }, [searchTerm, activeCategoryTab]);

  const activeGoalDetails = useMemo(() => {
    return quizOptions.find(opt => opt.id === selectedQuizGoal) || quizOptions[0];
  }, [selectedQuizGoal]);

  const designProcessSteps = [
    { step: '01', title: 'Consult & Discover', desc: 'We start with an exhaustive inquiry of your functional operations, tech limits, and audience targets to set core deliverables.', icon: <Search className="w-5 h-5 text-accent" /> },
    { step: '02', title: 'UX Strategy', desc: 'Our layout team maps information architectures, screen hierarchies, and click sequences in digital wireframes.', icon: <Target className="w-5 h-5 text-accent" /> },
    { step: '03', title: 'Visual UI Design', desc: 'We deliver distinctive High-Fidelity prototypes inside Figma matching standard typographic palettes and consistent brand logic.', icon: <Palette className="w-5 h-5 text-accent" /> },
    { step: '04', title: 'Coding & Architecture', desc: 'Qualified engineers translate vectors into responsive client-side frameworks synced securely with solid server systems.', icon: <Code className="w-5 h-5 text-accent" /> },
    { step: '05', title: 'Thorough SQA', desc: 'Our dedicated quality unit enforces stringent regression checks, cross-viewport layout rendering tests, and stress reviews.', icon: <Shield className="w-5 h-5 text-accent" /> },
    { step: '06', title: 'Launch & CDN Deploy', desc: 'We deploy final codebases into hardened Cloud containers connected with CDN caches to drive extreme international speeds.', icon: <Clock className="w-5 h-5 text-accent" /> },
    { step: '07', title: 'Ongoing 24/7 Support', desc: 'Once live, we monitor host metrics regularly, maintain server dependencies, and optimize performance based on real-world telemetry.', icon: <Sliders className="w-5 h-5 text-accent" /> }
  ];

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
      <PageHeader
        title="Comprehensive IT & Creative Solutions"
        description="We combine precision-engineered custom software, high-converting digital marketing, and beautiful visual branding packages to expand your corporate potential."
        breadcrumb={[{ name: 'Our Services', href: '/services' }]}
      />

      {/* Dynamic Search & Interactive Sector Catalog Tab Panel */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container-custom">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Service Hub Directory</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Explore Our Absolute <span className="text-primary italic">Service Landscape</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Type custom keywords below to instantly highlight targeted layouts, SEO campaigns, Shopify stores, ERP dashboards, database parameters, or brand cards.
            </p>

            {/* Interactive Search Tool */}
            <div className="relative max-w-2xl mx-auto mb-8 shadow-xl rounded-2xl overflow-hidden bg-white border border-gray-200">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 h-6 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search database, SEO, Shopify, logo layout, hybrid apps, custom tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-16 pr-24 py-6 text-dark font-sans text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-16 pr-4 flex items-center text-xs font-bold text-gray-400 hover:text-dark uppercase font-mono tracking-widest"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Tab Choices */}
            <div className="flex flex-wrap justify-center gap-3.5 mt-8">
              <button
                onClick={() => setActiveCategoryTab('all')}
                className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all border font-mono ${
                  activeCategoryTab === 'all' 
                    ? 'bg-dark text-white border-dark shadow-md' 
                    : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-dark'
                }`}
              >
                All Categories (6)
              </button>
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryTab(cat.id)}
                  className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all border font-mono ${
                    activeCategoryTab === cat.id 
                      ? 'bg-primary text-white border-primary shadow-md animate-pulse-slow' 
                      : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-dark'
                  }`}
                >
                  {cat.name.split('&')[0]}
                </button>
              ))}
            </div>

          </div>

          {/* Directory Output Grid */}
          <div className="space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-white rounded-[3rem] p-8 md:p-14 border border-gray-100 shadow-xl relative overflow-hidden`}
                  >
                    
                    {/* Category Top Banner */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12 pb-10 border-b border-gray-100">
                      <div className="flex items-center gap-5">
                        <div className="p-4 rounded-3xl bg-gray-50 shadow-inner flex items-center justify-center flex-shrink-0 border border-gray-100">
                          {category.icon}
                        </div>
                        <div>
                          <span className={`text-[10px] font-black tracking-widest uppercase mb-1.5 block font-mono ${category.textAccent}`}>
                            Strategic Segment
                          </span>
                          <h3 className="text-2xl md:text-3xl font-black text-dark leading-none">{category.name}</h3>
                        </div>
                      </div>
                      <div className="max-w-xl">
                        <p className="text-gray-500 text-sm leading-relaxed">{category.description}</p>
                      </div>
                    </div>

                    {/* Sub-services Grid */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {category.items.map((sub, idx) => (
                        <div
                          key={idx}
                          className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:border-primary/20 hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
                        >
                          <div className="space-y-4">
                            <span className="w-8 h-8 rounded-full bg-white font-bold text-xs text-primary flex items-center justify-center border border-gray-100 shadow-inner">
                              0{idx + 1}
                            </span>
                            <h4 className="font-extrabold text-dark text-base leading-snug group-hover:text-primary transition-colors">
                              {sub.name}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{sub.desc}</p>
                          </div>

                          <div className="mt-8 pt-6 border-t border-gray-200/50 flex justify-end">
                            <Link
                              href={sub.href}
                              className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-gray-400 group-hover:text-primary transition-colors tracking-widest font-mono"
                            >
                              <span>Explore Service Detail</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-md max-w-xl mx-auto"
                >
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-dark mb-2">No matching services found</h4>
                  <p className="text-gray-500 text-sm mb-6">
                    We couldn't find matches for "{searchTerm}". Explore another term or browse our main categories.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategoryTab('all');
                    }}
                    className="btn-primary"
                  >
                    Reset Directory Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Goal Recommendation Interactive Engine Widget */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-120 h-120 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-120 h-120 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Interactive Recommendation Tool</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Match Grehasoft <span className="text-primary italic">To Your Business Goal</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Choose your direct growth objective below. Our smart layout selector instantly bundles the exact tech and design programs necessary to accelerate your targets.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Choose Goal column (Left) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-accent/60 text-[10px] font-black uppercase tracking-widest mb-2 block font-mono">Step 1: Choose Your Direct Purpose</span>
              {quizOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedQuizGoal(opt.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    selectedQuizGoal === opt.id 
                      ? 'bg-primary border-primary text-white shadow-xl translate-x-2' 
                      : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                      selectedQuizGoal === opt.id ? 'bg-white text-primary' : 'bg-white/10 text-white'
                    }`}>
                      {opt.id === 'brand' ? '01' : opt.id === 'ecommerce' ? '02' : opt.id === 'saas' ? '03' : '04'}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm md:text-base leading-tight text-accent">{opt.label}</h4>
                      <p className={`text-[14px] mt-1 line-clamp-1 leading-snug ${
                        selectedQuizGoal === opt.id ? 'text-white/80' : 'text-white/40'
                      }`}>
                        {opt.summary}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
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
                  className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-12 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                      <Zap className="text-primary w-5 h-5 animate-pulse" />
                      <div>
                        <span className="text-accent text-[9px] font-black tracking-widest uppercase block font-mono">Expert Recommended Strategy Bundle</span>
                        <h4 className="text-xl font-bold text-white font-sans">
                          Grehasoft Solution Package
                        </h4>
                      </div>
                    </div>

                    <p className="text-white/75 text-sm leading-relaxed">{activeGoalDetails.summary}</p>

                    <div className="space-y-3 pt-4">
                      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block font-mono">Recommended Services included:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeGoalDetails.recommended.map((service, sIdx) => (
                          <Link
                            href={service.href}
                            key={sIdx}
                            className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/20 p-4 rounded-xl flex items-center justify-between group transition-all"
                          >
                            <div>
                              <p className="font-bold text-white text-xs leading-tight">{service.name}</p>
                              <span className="text-[14px] text-white/30 font-bold block mt-1 uppercase tracking-widest font-mono">{service.category}</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Operational metrics details */}
                    <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/5">
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <p className="text-xs text-white/30 font-bold uppercase tracking-widest font-mono mb-1">Target Timeline</p>
                        <p className="font-bold text-accent text-sm font-sans">{activeGoalDetails.timeline}</p>
                      </div>
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <p className="text-xs text-white/30 font-bold uppercase tracking-widest font-mono mb-1">Expected Deliverables</p>
                        <p className="font-bold text-accent text-xs leading-normal font-sans">{activeGoalDetails.metrics}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-white/5 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-white/50 text-[11px] leading-relaxed font-mono">
                      Connect with a Grehasoft solution consultant to tailor this customized bundle package.
                    </p>
                    <Link
                      href="/contact"
                      className="bg-primary hover:bg-emerald-500 text-white font-extrabold text-xs px-8 py-4.5 rounded-xl shadow-lg transition-all uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-1.5"
                    >
                      <span>Inquire This Package</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Process Steps Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block font-mono">Deployment Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Our End-to-End <span className="text-primary italic">Delivery Methodology</span>
            </h2>
            <p className="text-gray-600">
              We leverage strict agile workflow constraints and rigorous visual standards to ensure every asset scales impeccably from scratch to production launch.
            </p>
          </div>

          <div className="relative border-l border-gray-100 max-w-4xl mx-auto pl-8 sm:pl-16 space-y-12">
            {designProcessSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative group page-process-item"
              >
                
                {/* Step Counter Indicator Bubble */}
                <div className="absolute -left-[53px] sm:-left-[85px] top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-lg group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 text-primary">
                  <span className="font-mono text-xs font-black">{step.step}</span>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:bg-white transition-all duration-300 shadow-sm shadow-indigo-500/[0.01]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent">{step.icon}</span>
                    <h3 className="font-extrabold text-lg text-dark group-hover:text-primary transition-colors">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
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
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="p-4 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
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
              
              <div className="p-8 bg-primary rounded-3xl text-white shadow-xl">
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
                  <div key={idx} className="border border-gray-100 rounded-2xl bg-gray-50/50 overflow-hidden shadow-sm">
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

      <CTA />
     
    </main>
  );
}
