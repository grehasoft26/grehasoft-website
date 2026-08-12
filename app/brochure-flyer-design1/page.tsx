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
  FileText,
  BookOpen,
  Printer,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/Footer';

export default function BrochureFlyerDesignPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const standOutPoints = [
    { title: "Strategic visual communication", desc: "Structuring your brand message with powerful visual hierarchy to convey core values instantly." },
    { title: "Brand-focused design systems", desc: "Ensuring alignment with existing corporate colors, tailored modern fonts, and design rules." },
    { title: "Marketing-oriented layouts", desc: "Arranging key information scientifically to guide client attention and maximize read rates." },
    { title: "Professional content presentation", desc: "Formatting complex data, product features, and lists cleanly for instant assimilation." },
    { title: "Customer engagement & readability", desc: "Selecting legible fonts and layout paths to heighten visual ergonomics and interest." },
    { title: "Creative design concepts", desc: "Delivering custom concepts designed specifically to stand out completely from competitors." },
    { title: "Print and digital compatibility", desc: "Ensured correct page color spaces (CMYK for print, RGB for standard digital monitors)." },
    { title: "Long-term brand consistency", desc: "Formed on sustainable guidelines for easy future duplication and template expansion." }
  ];

  const globalUnderstandDetails = [
    { title: "Global branding standards", desc: "Applying universal layout ratios, clean grid styles, and contemporary aesthetic designs." },
    { title: "Marketing communication strategies", desc: "Injecting conversion triggers, concise summaries, and impactful calls-to-action." },
    { title: "Industry-specific design requirements", desc: "Deep knowledge about visual colors, symbols, and layouts matching specific sectors." },
    { title: "Customer engagement behaviour", desc: "Mapping visual guides matching how buyers explore and retain paper and digital documents." },
    { title: "Professional visual presentation methods", desc: "Delivering crisp details, polished lines, and elite composition standards." }
  ];

  const brochureServices = [
    {
      title: "Corporate Brochure Design",
      desc: "Our Corporate Brochure Design Kerala solutions help businesses present company information, services, achievements, and brand identity in a professional format.",
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: "Promotional Flyer Design",
      desc: "We create eye-catching flyers for product launches, promotions, events, campaigns, offers, and business advertisements.",
      icon: <Sparkles className="w-10 h-10" />
    },
    {
      title: "Company Profile Design Services",
      desc: "Our Company Profile Design Services Kochi businesses trust help create professional company presentations that strengthen credibility and business visibility.",
      icon: <FileText className="w-10 h-10" />
    },
    {
      title: "Product Catalogue Design",
      desc: "We design detailed product catalogues that showcase products, features, specifications, and offerings in an organized and visually engaging manner.",
      icon: <BookOpen className="w-10 h-10" />
    },
    {
      title: "Marketing Collateral Design",
      desc: "As a provider of Marketing Collateral Design Kochi solutions, we create brochures, flyers, sales sheets, presentations, and promotional materials aligned with your brand identity.",
      icon: <Palette className="w-10 h-10" />
    },
    {
      title: "Business Flyer Design Services",
      desc: "Our flyer designs are optimized for customer attention, quick communication, and promotional effectiveness across print and digital channels.",
      icon: <TrendingUp className="w-10 h-10" />
    },
    {
      title: "Digital Brochure Design",
      desc: "We create interactive digital brochures and PDF presentations suitable for email marketing, websites, online sharing, and business presentations.",
      icon: <Monitor className="w-10 h-10" />
    },
    {
      title: "Event & Campaign Design Materials",
      desc: "Our team develops event flyers, exhibition materials, promotional handouts, and campaign-based marketing creatives that increase audience engagement.",
      icon: <Layers className="w-10 h-10" />
    }
  ];

  const whyNeedsBrochure = [
    { title: 'Improve brand visibility across target markets', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { title: 'Build trust and credibility with professional layouts', icon: <Shield className="w-5 h-5 text-primary" /> },
    { title: 'Present products and services professionally to prospects', icon: <FileText className="w-5 h-5 text-primary" /> },
    { title: 'Support sales and marketing campaigns effectively', icon: <Award className="w-5 h-5 text-primary" /> },
    { title: 'Increase buyer engagement levels dramatically', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Strengthen continuous physical brand consistency', icon: <Layers className="w-5 h-5 text-primary" /> },
    { title: 'Generate inbound business enquiries and direct responses', icon: <Mail className="w-5 h-5 text-primary" /> },
    { title: 'Improve the overall return of offline marketing initiatives', icon: <TrendingUp className="w-5 h-5 text-primary" /> }
  ];

  const localExpertise = [
    { title: "Kerala-focused marketing designs", desc: "Custom graphical styles matching regional cultural aesthetics perfectly." },
    { title: "Business profile design solutions", desc: "High-grade corporate profiles customized strictly for Kerala client acquisition." },
    { title: "Industry-specific brochure concepts", desc: "Colors, themes, and illustrations constructed scientifically around key sectors." },
    { title: "Corporate branding materials", desc: "Consistent styling applied across all business cards, directories, and flyers." },
    { title: "Product promotion designs", desc: "Conversion-led retail flyers optimized to draw attention locally." },
    { title: "Malayalam & English design considerations", desc: "Professional typography guidelines and native language text configurations." },
    { title: "Audience-focused communication layouts", desc: "Engineered visual hierarchies that align perfectly with local reader paths." }
  ];

  const strategySteps = [
    "Understanding your business goals and audience",
    "Organizing content for maximum clarity",
    "Creating visually engaging layouts",
    "Maintaining branding consistency",
    "Developing strong visual hierarchy",
    "Designing conversion-focused marketing materials",
    "Building long-term brand recognition"
  ];

  const designProcess = [
    {
      stage: "Stage 01",
      title: "Requirement Analysis",
      desc: "We understand your business objectives, target audience, content requirements, and marketing goals.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      stage: "Stage 02",
      title: "Creative Planning",
      desc: "Our team develops layout concepts, design directions, and visual strategies aligned with your brand identity.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      stage: "Stage 03",
      title: "Content Structuring",
      desc: "We organize content, visuals, call-to-actions, and brand messaging for maximum impact and readability.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      stage: "Stage 04",
      title: "Design Development",
      desc: "We create brochure layouts, flyer designs, product catalogues, and promotional materials using modern design principles.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      stage: "Stage 05",
      title: "Review & Refinement",
      desc: "Designs are refined based on feedback, branding requirements, and marketing objectives.",
      icon: <Users className="w-6 h-6" />
    },
    {
      stage: "Stage 06",
      title: "Print & Digital Optimization",
      desc: "We optimize all materials for both print production and digital distribution.",
      icon: <Printer className="w-6 h-6" />
    },
    {
      stage: "Stage 07",
      title: "Final Delivery",
      desc: "You receive high-quality print-ready and digital-ready files suitable for marketing, advertising, events, and business presentations.",
      icon: <Download className="w-6 h-6" />
    }
  ];

  const industries = [
    { name: "IT & Software Companies", icon: <Cpu className="w-5 h-5" /> },
    { name: "Healthcare & Medical Organizations", icon: <Heart className="w-5 h-5" /> },
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
      q: "1. Do you provide brochure design services for businesses in Kochi?",
      a: "Yes. We provide brochure design services for businesses across Kochi, Kakkanad, Infopark, and Kerala."
    },
    {
      q: "2. What types of brochures do you design?",
      a: "We design tri-fold brochures, bi-fold brochures, corporate brochures, company profiles, product catalogues, and digital brochures."
    },
    {
      q: "3. Do you provide flyer design services?",
      a: "Yes. We create promotional flyers, event flyers, advertising flyers, product flyers, and campaign marketing materials."
    },
    {
      q: "4. Can you design company profiles?",
      a: "Yes. We provide professional company profile design services for startups, SMEs, and corporate organizations."
    },
    {
      q: "5. Do you provide print-ready files?",
      a: "Yes. All brochure and flyer designs are delivered in high-resolution print-ready formats."
    },
    {
      q: "6. Can you create digital brochure versions?",
      a: "Yes. We create interactive PDF brochures and digital versions suitable for websites, email marketing, and online sharing."
    },
    {
      q: "7. Do you provide branding integration in brochure designs?",
      a: "Yes. All brochure and flyer designs are aligned with your brand identity, colours, typography, and visual guidelines."
    },
    {
      q: "8. Can you create multilingual brochures?",
      a: "Yes. We can create brochures and flyers in English, Malayalam, and multilingual formats based on business requirements."
    },
    {
      q: "9. How long does brochure design usually take?",
      a: "Project timelines depend on content, design complexity, and revisions, but we ensure timely delivery with professional quality."
    },
    {
      q: "10. Do you provide customized brochure and flyer design solutions?",
      a: "Yes. Every brochure and flyer is custom-designed based on your business goals, target audience, branding requirements, and marketing objectives."
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Professional Brochure & Flyer Design Kochi"
        description="Craft stunning, high-converting print and digital marketing collateral with Kerala's premier design agency."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Branding', href: '/branding' },
          { name: 'Brochure & Flyer Design', href: '/branding/brochure-flyer' },
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
                Premium Print & Digital Layouts
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">
                Best Brochure & Flyer Design Company in Kochi, Kerala – <br />
                <span className="text-primary italic">Creative Marketing & Print Design Solutions</span>
              </h1>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Grehasoft is a leading <strong>Brochure Design Company in Kochi</strong>, helping businesses create professional, visually appealing, and conversion-focused brochures, flyers, company profiles, and marketing materials. Well-designed brochures and flyers play an important role in building brand awareness, communicating business information, and creating strong customer impressions across both digital and print platforms.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a trusted <strong>Brochure & Flyer Design Company Kerala</strong> businesses rely on, we combine creativity, branding strategy, visual storytelling, and marketing-focused design principles to create impactful promotional materials. Our designs help businesses present products, services, company information, and brand messages in a clear, engaging, and professional format.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10 years of industry experience, we have supported clients across India, the Middle East, Europe, and the USA with end-to-end digital solutions, branding services, and creative design strategies. This international experience allows us to create brochure and flyer designs that align with global branding standards while remaining relevant to local and regional audiences.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-semibold">
                Whether you need company brochures, product catalogues, promotional flyers, corporate profiles, event materials, or complete marketing collateral, Grehasoft provides <strong>Brochure & Flyer Design Services Kerala</strong> businesses can depend on for stronger branding, customer engagement, and business growth.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">100%</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Unique Layouts</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">Print & Digital</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Dual compatible files</p>
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
                  src="https://picsum.photos/seed/brochures-kerala/800/1000"
                  alt="Kochi Brochure & Flyer Design Specialists"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Printer className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">High-Resolution</p>
                    <p className="text-sm text-gray-400">CMYK Print Ready</p>
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
                What Makes Our Brochure & Flyer Design Company in Kochi Stand Out
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                At Grehasoft, we understand that brochures and flyers are more than just printed materials—they are powerful marketing tools that influence customer decisions, communicate brand value, and support sales growth.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed text-sm">
                As a trusted **Professional Flyer Design Company Kerala** businesses choose, we create marketing materials that strengthen brand visibility and leave lasting impressions on customers. Professionally designed brochures help businesses communicate products, services, and brand value more effectively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Custom Brochure Layouts', 'Digital Integration', 'Conversion Strategy', 'Multilingual Typography'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-white/90 text-xs whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Strategic Focus Points</span>
              <h3 className="text-3xl font-black text-dark mb-6">Designed to Influence Decisions</h3>
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

      {/* Global Creative Experience & Local Expertise */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <span className="text-primary font-black uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">Global Reach</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-4 mb-6">
                Global Creative Experience with Local Market Expertise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While headquartered in Kochi, Kerala, Grehasoft has successfully delivered creative branding and marketing projects for businesses across India, the Middle East, Europe, and the USA.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                This international exposure enables us to master cross-border layouts and professional presentation styles, while our native team ensures absolute affinity with localized demographics.
              </p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm text-dark font-bold italic leading-relaxed">
                  "By combining international creative expertise with Kerala market understanding, we create brochures and flyers that connect effectively with both local and global audiences."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-accent text-xs font-black tracking-widest uppercase block mb-1">What This International Exposure Allows Us To Master:</span>
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
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Creative Scope</span>
            <h2 className="text-4xl font-black text-dark mb-6">Brochure & Flyer Design Services We Provide</h2>
            <p className="text-gray-600">
              Grehasoft provides complete Brochure Design Services Kochi businesses use to improve branding, marketing communication, and customer engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brochureServices.map((service, i) => (
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Business Drivers</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Your Business <br />
                <span className="text-primary italic">Needs Professional Design</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Brochures and flyers remain some of the most effective marketing tools for presenting information, promoting services, and generating customer interest.
                </p>
                <p>
                  Professionally designed marketing materials help businesses communicate more effectively while creating stronger brand impressions. Custom brochure design improves brand identity, professionalism, and audience engagement across print and digital platforms.
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
                  "Every print sheet or corporate PDF represents your business presence in front of decision makers. Premium layouts establish absolute authority."
                </p>
              </motion.div>

              {/* Grid cards */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {whyNeedsBrochure.map((item, i) => (
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Target Demographic</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Local Brochure & Flyer Design Expertise for Kochi & Kerala Businesses</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Grehasoft develops creative brochure and flyer solutions specifically for businesses operating across Kochi, Kakkanad, Infopark, Edappally, Thrissur, Trivandrum, Calicut, and throughout Kerala.
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
                By combining local market understanding with modern design trends, we help businesses create impactful marketing materials that connect with their audience.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black block mb-2">Conversion Driven Planning</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Brochure & Flyer Design Strategy We Use for Kochi & Kerala Markets</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our design strategy combines branding, visual storytelling, customer psychology, and marketing communication principles. As a trusted provider of Brochure & Branding Design Services, our strategy includes:
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
                This structured design approach helps businesses communicate more effectively while improving marketing performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Our Creative Flow</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Our Brochure & Flyer Design Process Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our brochure and flyer design workflow is designed to create professional, creative, and business-focused marketing materials.
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
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">{step.stage}</span>
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
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Creative Adaptation</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve in Kochi, Kerala</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Grehasoft provides Brochure Design Services Kochi businesses across multiple industries rely on. Every brochure and flyer is customized according to industry requirements, audience behaviour, and marketing objectives.
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
              We adjust typography density, illustration styles, and layout flow to match vertical expectations perfectly.
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                Collaborate With Grehasoft
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Get Professional Brochure & Flyer Design Services in Kochi, Kerala – <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent">
                  Promote Your Business Effectively
                </span>
              </h2>

              {/* Asset Highlight Card */}
              <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/20 transition-all duration-300 shadow-2xl text-left">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1 leading-snug">
                  Your marketing materials represent your brand and play a major role in customer engagement.
                </h3>
                <p className="text-white/60 text-xs mt-3 leading-relaxed">
                  Professionally designed brochures and flyers help businesses communicate clearly, attract attention, and create stronger brand impressions. Connect with Grehasoft today.
                </p>
              </div>

              {/* Startup & Expansion Detail Panel */}
              <div className="flex gap-4 p-6 bg-white/[0.01] border border-white/5 rounded-2xl text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  <strong>Scalable Print Delivery:</strong> Whether you are promoting a new product, launching a marketing campaign, creating a company profile, or building brand awareness, our creative team develops brochure and flyer solutions tailored to your audience, industry, and business goals.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Strategic Summary */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 space-y-6 text-left">
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base leading-none">Print & Digital Design Hub</h4>
                    <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">Kochi, Kerala Experts</span>
                  </div>
                </div>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Grehasoft provides professional <strong>Brochure & Flyer Design Services Kerala</strong> businesses trust for better branding, stronger customer communication, and long-term marketing success.
                </p>

                {/* Local & International Synergy Metric */}
                <div className="grid grid-cols-12 gap-5 bg-white/[0.02] p-5 rounded-2xl border border-white/5 items-center">
                  <div className="col-span-3 text-center border-r border-white/5">
                    <p className="text-3xl font-black text-primary leading-none">10+</p>
                    <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">Years Team Experience</p>
                  </div>
                  <div className="col-span-9 text-xs text-white/60 leading-relaxed pl-2">
                    With over 10 years of experience and successful projects delivered for clients across India, the Middle East, Europe, and the USA, Grehasoft combines global creative expertise with local business understanding to create marketing materials that generate real business impact.
                  </div>
                </div>

                <p className="font-semibold text-white/80 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-5">
                  From corporate brochures and promotional flyers to company profiles and product catalogues, Grehasoft delivers creative print and digital design solutions that help businesses grow confidently.
                </p>
              </div>

              {/* Conversion Hub Trigger */}
              <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-primary/40 transition-all duration-300">
                <div className="space-y-1 z-10 text-left">
                  <h4 className="font-bold text-white text-base md:text-lg leading-tight">Ready to promote your enterprise?</h4>
                  <p className="text-white/50 text-[11px] leading-snug">Connect with our Kerala graphics professionals today for a personalized quote.</p>
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Knowledge Hub</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Get instant answers regarding source file standards, bleed lines, and revision rules.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Expert Perspective</p>
                <p className="text-lg italic font-medium leading-relaxed">"High visual density must always pair with crisp alignment to convert causal readers into active buyers."</p>
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
