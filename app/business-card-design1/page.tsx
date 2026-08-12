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
  CreditCard,
  QrCode,
  Contact
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/Footer';

export default function BusinessCardDesignPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const standOutPoints = [
    { title: "Professional visual identity", desc: "Creating a coherent look and feel that highlights your brand standards instantly." },
    { title: "Strong brand representation", desc: "Crafting graphic assets that express your business values and professional scope." },
    { title: "Modern and creative layouts", desc: "Unconventional, elegant margins and spacing arrangements that stand out in any pile." },
    { title: "Clear information hierarchy", desc: "Arranging contacts and indicators scientifically so readers scan details instantly." },
    { title: "Premium design aesthetics", desc: "Sourcing beautiful typography and minimalist spacing options for an elite feel." },
    { title: "Print-ready quality standards", desc: "Configuring optimal CMYK colour schemes, high DPI levels, and standard print bleeds." },
    { title: "Consistent branding systems", desc: "Integrating perfectly with corporate stationery, brochures, and digital guidelines." },
    { title: "Long-term brand recognition", desc: "Engineered with visual anchors and lasting memory cues for maximal buyer recall." }
  ];

  const globalUnderstandDetails = [
    { title: "Global branding standards", desc: "Constructing grids and visual architectures that scale across any international market." },
    { title: "Professional business presentation requirements", desc: "Delivering sleek visual styles that inspire trust and build instant credibility." },
    { title: "Industry-specific identity systems", desc: "Detailing color schemes and styles matching target domains from medical to tech." },
    { title: "Networking & corporate branding trends", desc: "Utilizing modern patterns such as sleek flat styling or embossed tactile aesthetics." },
    { title: "Customer perception & brand positioning", desc: "Shaping buyer behavior and loyalty through high-quality visual signals." }
  ];

  const cardServices = [
    {
      title: "Custom Business Card Design Services",
      desc: "We create customized business cards tailored to your industry, brand identity, business goals, and audience expectations.",
      icon: <CreditCard className="w-10 h-10" />
    },
    {
      title: "Corporate Business Card Design",
      desc: "Our Corporate Business Card Design Kerala services help companies maintain a professional and consistent brand image across employees and departments.",
      icon: <Briefcase className="w-10 h-10" />
    },
    {
      title: "Premium Business Card Design",
      desc: "We design premium-quality business cards with modern layouts, elegant branding, and visually impactful presentation.",
      icon: <Sparkles className="w-10 h-10" />
    },
    {
      title: "Creative Visiting Card Design",
      desc: "Our Creative Visiting Card Designers Kochi team develops unique card concepts that help businesses stand out and leave lasting impressions.",
      icon: <Palette className="w-10 h-10" />
    },
    {
      title: "QR Code Business Card Design",
      desc: "We create modern business cards with QR code integration, allowing customers to access websites, contact details, portfolios, and digital profiles instantly.",
      icon: <QrCode className="w-10 h-10" />
    },
    {
      title: "Digital Business Card Design",
      desc: "We provide digital business card solutions suitable for online networking, professional branding, and contact sharing. Digital business cards are increasingly used for modern networking.",
      icon: <Monitor className="w-10 h-10" />
    },
    {
      title: "Corporate Identity Card Design Services",
      desc: "We design employee identity cards, business networking cards, and professional corporate identity solutions aligned with your brand system.",
      icon: <Contact className="w-10 h-10" />
    },
    {
      title: "Branding & Business Card Design Packages",
      desc: "As a provider of Branding & Business Card Design Kochi solutions, we create complete identity systems including logos, business cards, stationery, and marketing assets.",
      icon: <Layers className="w-10 h-10" />
    }
  ];

  const whyNeedsCard = [
    { title: 'Create strong first impressions with target prospects', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { title: 'Improve professional credibility and trust instantly', icon: <Shield className="w-5 h-5 text-primary" /> },
    { title: 'Strengthen continuous physical brand recognition', icon: <Layers className="w-5 h-5 text-primary" /> },
    { title: 'Support active regional networking opportunities', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Improve customer recall and visual memory retention', icon: <Eye className="w-5 h-5 text-primary" /> },
    { title: 'Maintain flawless branding across all customer touchpoints', icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
    { title: 'Communicate coordinate details with absolute clarity', icon: <FileText className="w-5 h-5 text-primary" /> },
    { title: 'Enhance ongoing local business credibility and visibility', icon: <TrendingUp className="w-5 h-5 text-primary" /> }
  ];

  const localExpertise = [
    { title: "Kerala-focused branding strategies", desc: "Aligning color psychology and communication methods to local sensibilities." },
    { title: "Startup business card solutions", desc: "Budget-friendly, high-concept cards designed to scale launching companies." },
    { title: "Corporate identity card systems", desc: "Flawless matching employee badge schemes styled to project unified professionalism." },
    { title: "Industry-specific business card concepts", desc: "Niche designs tailored precisely to medical, legal, tech, or retail fields." },
    { title: "Malayalam and English card designs", desc: "Expert typographical pairing spanning regional print requirements elegantly." },
    { title: "Professional networking materials", desc: "Conversion-optimized collateral engineered specifically to prompt responses." },
    { title: "Business-focused visual branding", desc: "Integrating your corporate logo, fonts, and slogans into a tight layout grid." }
  ];

  const strategySteps = [
    "Understanding your business identity and goals",
    "Creating brand-consistent visual layouts",
    "Organizing information for clarity and readability",
    "Developing professional and memorable designs",
    "Integrating modern branding elements",
    "Optimizing designs for print and digital use",
    "Strengthening long-term brand recognition"
  ];

  const designProcess = [
    {
      stage: "Stage 01",
      title: "Brand & Requirement Analysis",
      desc: "We understand your business, industry, audience, and branding requirements.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      stage: "Stage 02",
      title: "Creative Concept Development",
      desc: "Our designers develop layout concepts, typography systems, and branding directions aligned with your identity.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      stage: "Stage 03",
      title: "Information Structuring",
      desc: "We organize contact details, brand elements, and business information for maximum readability.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      stage: "Stage 04",
      title: "Design Creation",
      desc: "We create professional business card layouts with modern visual presentation and brand consistency.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      stage: "Stage 05",
      title: "Review & Refinement",
      desc: "Designs are refined based on feedback, branding guidelines, and business objectives.",
      icon: <Users className="w-6 h-6" />
    },
    {
      stage: "Stage 06",
      title: "Print & Digital Optimization",
      desc: "We optimize designs for printing, digital sharing, and professional networking applications.",
      icon: <Sliders className="w-6 h-6" />
    },
    {
      stage: "Stage 07",
      title: "Final Delivery",
      desc: "You receive high-quality print-ready and digital-ready files suitable for business use, marketing events, networking, and corporate branding.",
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
      q: "1. Do you provide business card design services in Kochi?",
      a: "Yes. We provide business card and visiting card design services for businesses across Kochi, Kakkanad, Infopark, and Kerala."
    },
    {
      q: "2. Do you create custom business card designs?",
      a: "Yes. Every business card is custom-designed based on your brand identity, industry, and business goals."
    },
    {
      q: "3. Do you provide corporate business card design solutions?",
      a: "Yes. We create corporate business card systems for organizations, teams, and professional businesses."
    },
    {
      q: "4. Can you create QR code business cards?",
      a: "Yes. We design modern business cards with QR code integration for quick access to websites, contact details, and digital profiles."
    },
    {
      q: "5. Do you provide digital business card designs?",
      a: "Yes. We create digital business card solutions suitable for online networking and contact sharing."
    },
    {
      q: "6. Will I receive print-ready files?",
      a: "Yes. All business card designs are delivered in professional print-ready formats."
    },
    {
      q: "7. Can you design both front and back side layouts?",
      a: "Yes. We create complete front and back business card designs with branding consistency."
    },
    {
      q: "8. Do you provide branding packages along with business cards?",
      a: "Yes. We offer complete branding packages including logos, stationery, business cards, and marketing materials."
    },
    {
      q: "9. How long does business card design usually take?",
      a: "Project timelines depend on requirements and revisions, but we ensure timely delivery with professional quality."
    },
    {
      q: "10. Do you provide customized business card design solutions?",
      a: "Yes. Every business card is custom-designed according to your branding requirements, audience expectations, and business objectives."
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Professional Business Card Design Kochi"
        description="Connect and command authority with high-impact custom visiting cards engineered for Kochi's business landscape."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Branding', href: '/branding' },
          { name: 'Business Card Design', href: '/branding/business-cards' },
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
                elite networking collateral
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">
                Best Business Card Design Company in Kochi, Kerala – <br />
                <span className="text-primary italic">Creative Visiting Card & Professional Brand Identity Solutions</span>
              </h1>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Grehasoft is a leading <strong>Business Card Design Company in Kochi</strong>, helping businesses create professional, memorable, and visually impactful business cards that strengthen brand identity and improve networking opportunities. A business card is often the first physical representation of your business, making it one of the most important branding tools for creating strong first impressions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a trusted <strong>Visiting Card Design Company Kochi</strong> businesses rely on, we combine creativity, branding strategy, typography, layout design, and visual communication principles to create business cards that reflect professionalism and brand value. Our designs are tailored to communicate your business information clearly while maintaining a strong visual identity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10 years of industry experience, we have supported clients across India, the Middle East, Europe, and the USA with end-to-end digital solutions, branding services, and creative design strategies. This global experience helps us create business card designs that align with international branding standards while remaining relevant to local and regional markets.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-semibold">
                Whether you are a startup, entrepreneur, corporate organization, healthcare provider, educational institution, real estate company, or professional service provider, Grehasoft provides <strong>Business Card Design Services Kochi</strong> businesses can depend on for stronger branding, professional networking, and long-term business visibility.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">100%</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Direct Custom Layouts</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">QR Ready</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Smart digital access</p>
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
              <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden -rotate-1 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/cards-kochi/800/1000"
                  alt="Kochi Business Card Design Specialists"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Contact className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">Tactile Appeal</p>
                    <p className="text-sm text-gray-400">Embossed & Spot UV Guidelines</p>
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
                What Makes Our Business Card Design Company in Kochi Stand Out
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                At Grehasoft, we understand that business cards are more than contact information—they are powerful branding tools that represent your company, create professional impressions, and strengthen customer trust.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed text-sm">
                As a trusted **Professional Business Card Design Kerala** provider, we create designs that help businesses stand out while maintaining professionalism and credibility. Business cards remain an important tool for networking, brand recall, and professional introductions across industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Modern Design Aesthetics', 'Embassy-Grade Guidelines', 'Flawless Grid Alignments', 'Digital QR Core Integrations'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-white/90 text-xs whitespace-nowrap">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Key Layout Foundations</span>
              <h3 className="text-3xl font-black text-dark mb-6">Engineered for Lasting Impressions</h3>
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
              <span className="text-primary font-black uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">Global Reach</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-4 mb-6">
                Global Branding Experience with Local Market Expertise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While headquartered in Kochi, Kerala, Grehasoft has successfully delivered branding and creative design projects for businesses across India, the Middle East, Europe, and the USA.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                By combining international creative expertise with Kerala market understanding, we create business cards that communicate professionalism while supporting business growth on any continent.
              </p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm text-dark font-bold italic leading-relaxed">
                  "Our designs align with international branding standards while remaining entirely relevant to local and regional audiences."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-accent text-xs font-black tracking-widest uppercase block mb-1">What This Global Exposure Enables Us to Master:</span>
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
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Product Scope</span>
            <h2 className="text-4xl font-black text-dark mb-6">Business Card Design Services We Provide</h2>
            <p className="text-gray-600">
              Grehasoft provides complete Visiting Card Design Services Kerala businesses use to strengthen branding, networking, and professional identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardServices.map((service, i) => (
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

      {/* Why Your Business Needs Professional Business Card Layouts */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Description Column (Left) */}
            <div className="lg:col-span-12 xl:col-span-5 text-center xl:text-left xl:sticky xl:top-32 mb-8 xl:mb-0">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Visual Handshake</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Your Business <br />
                <span className="text-primary italic">Needs Professional Card Design</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Business cards continue to play a major role in professional networking, brand communication, and customer engagement. A professionally designed business card helps create trust, improve recall, and strengthen brand perception.
                </p>
                <p>
                  A well-designed business card serves as a direct representation of your brand and business identity. Professional card design improves recognition and leaves a stronger impression on potential customers and business partners.
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
                  "A business card is often the first physical representation of your business. Elite layouts transform brief handshakes into secure partnerships."
                </p>
              </motion.div>

              {/* Grid cards */}
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {whyNeedsCard.map((item, i) => (
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Kerala Focus</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Local Business Card Design Expertise for Kochi & Kerala Businesses</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Grehasoft develops business card design solutions specifically for businesses operating across Kochi, Kakkanad, Infopark, Edappally, Thrissur, Trivandrum, Calicut, and throughout Kerala.
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
                By combining local market understanding with modern design trends, we create business cards that help businesses build stronger professional connections.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black block mb-2">Tactical Design Direction</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Business Card Design Strategy We Use for Kochi & Kerala Markets</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our business card design strategy combines branding, visual communication, audience psychology, and professional presentation. As a trusted provider of Business Branding Materials Kerala, our strategy includes:
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
                This structured process helps businesses create business cards that communicate professionalism and brand value effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Polished Design Workflow</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Our Business Card Design Process Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our business card design workflow is designed to create professional, creative, and business-focused identity solutions.
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
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Sector Synergy</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve in Kochi, Kerala</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Grehasoft provides Business Card Design Services Kochi businesses across multiple industries rely on. Every visual asset is tailored specifically for target markets.
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
              Whether you represent medical facilities, software domains, cafes, or hospitality estates, we adjust margins and paper guidance perfectly to capture sector trust.
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
                Get Professional Business Card Design Services in Kochi, Kerala – <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent">
                  Build Stronger Business Connections
                </span>
              </h2>

              {/* Asset Highlight Card */}
              <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/20 transition-all duration-300 shadow-2xl text-left">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1 leading-snug">
                  Your business card is often the first impression people have of your brand.
                </h3>
                <p className="text-white/60 text-xs mt-3 leading-relaxed">
                  A professionally designed card helps build trust, improve recognition, and create lasting professional relationships. Contact Grehasoft to map out template designs today.
                </p>
              </div>

              {/* Startup & Expansion Detail Panel */}
              <div className="flex gap-4 p-6 bg-white/[0.01] border border-white/5 rounded-2xl text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  <strong>Scalable Card Engineering:</strong> Whether you are launching a startup in Kakkanad, expanding your business in Kochi, or building a corporate identity anywhere in Kerala, our creative team develops business card solutions tailored to your audience, industry, and branding goals.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Strategic Summary */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 space-y-6 text-left">
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Contact className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base leading-none">Identity Printing Hub</h4>
                    <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">Kochi, Kerala Experts</span>
                  </div>
                </div>

                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Grehasoft provides professional <strong>Visiting Card Design Services Kerala</strong> businesses trust for stronger branding, professional networking, and long-term business growth.
                </p>

                {/* Local & International Synergy Metric */}
                <div className="grid grid-cols-12 gap-5 bg-white/[0.02] p-5 rounded-2xl border border-white/5 items-center">
                  <div className="col-span-3 text-center border-r border-white/5">
                    <p className="text-3xl font-black text-primary leading-none">10+</p>
                    <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">Years Regional Exposure</p>
                  </div>
                  <div className="col-span-9 text-xs text-white/60 leading-relaxed pl-2">
                    With over 10 years of experience and successful projects delivered for clients across India, the Middle East, Europe, and the USA, Grehasoft combines global branding expertise with local market understanding to create impactful business card designs that strengthen your professional image.
                  </div>
                </div>

                <p className="font-semibold text-white/80 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-5">
                  From custom business cards and corporate identity cards to digital business cards and complete branding systems, Grehasoft delivers professional design solutions that help businesses stand out and grow confidently.
                </p>
              </div>

              {/* Conversion Hub Trigger */}
              <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-primary/40 transition-all duration-300">
                <div className="space-y-1 z-10 text-left">
                  <h4 className="font-bold text-white text-base md:text-lg leading-tight">Ready to map out cards?</h4>
                  <p className="text-white/50 text-[11px] leading-snug">Connect with our Kerala graphics masterminds today for a custom quote.</p>
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
                Get answers regarding source files, QR configurations, and printing support coordinates.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Expert Perspective</p>
                <p className="text-lg italic font-medium leading-relaxed">"Minimalist text hierarchies always print with superior readability on premium physical stocks."</p>
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
