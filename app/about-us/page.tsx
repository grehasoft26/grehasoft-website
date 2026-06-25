'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Sparkles, 
  Users, 
  Compass, 
  Target, 
  Eye, 
  Palette, 
  Layout, 
  ShoppingCart, 
  Rocket, 
  Smartphone, 
  Code, 
  Cpu, 
  Globe, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  HeartHandshake, 
  Activity, 
  Award, 
  ChevronRight, 
  ArrowUpRight, 
  Quote, 
  FileCheck, 
  Heart, 
  Star, 
  MapPin, 
  ThumbsUp, 
  Wrench
} from 'lucide-react';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
export default function AboutPage() {
  const customServices = [
    {
      title: 'Online Branding & Creative Graphic Design',
      desc: 'Logos, Flyers, Brochures, Brand identity systems, and Corporate materials that tell your story.',
      href: '/branding',
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: 'Website Design & Development',
      desc: 'All types of static or Dynamic websites - Modern, fast, responsive websites custom-built for all industries.',
      href: '/website-design',
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: 'eCommerce Development',
      desc: 'User-friendly, secure online stores and WooCommerce/Shopify platforms designed to maximize conversions.',
      href: '/ecommerce-development',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'Organic growth strategies, social media management, paid search campaigns, and content optimization.',
      href: '/digital-marketing',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Mobile App Development',
      desc: 'High-performance Android & iOS applications customized for fluid experiences on all mobile devices.',
      href: '/mobile-app-development',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'Custom Web Applications',
      desc: 'Tailored web applications built with modern stacks to streamline daily business operations.',
      href: '/custom-web-app-development',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Custom Software Solutions',
      desc: 'Robust custom software engineering designed specifically, securely, and scalably to solve business problems.',
      href: '/software-web-apps',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Domain Name & Website Hosting Support',
      desc: 'End-to-end consulting and technical support to acquire the best domain names and elite web hosting servers.',
      href: '/contact-us',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const coreStrengths = [
    {
      title: 'Transparent',
      desc: 'Zero hidden fees, zero false promises. Direct, honest communications from consulting to completion.',
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: 'Reliable',
      desc: 'Unwavering commitment to delivery dates, clean code architecture, and high product integrity.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: 'Affordable',
      desc: 'Helping small, micro, and medium businesses digitize smartly within realistic budget guardrails.',
      icon: <HeartHandshake className="w-5 h-5" />
    },
    {
      title: 'Creative',
      desc: 'Fresh, tailored design ideas custom-crafted to align with individual brand personalities.',
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: 'Supportive',
      desc: 'An active, client-loved technical support provider offering dedicated care post-launch.',
      icon: <Wrench className="w-5 h-5" />
    },
    {
      title: 'Technically Strong',
      desc: 'Perfectly bridging elite graphic aesthetics with powerful software programming expertise.',
      icon: <Code className="w-5 h-5" />
    }
  ];

  const brandPillars = [
    {
      title: 'Who We Are',
      desc: 'Grehasoft is an IT support provider offering digital services that help brands build a strong online presence. Over the years, we have built 100+ websites, delivered successful SEO campaigns, managed digital branding, and developed software solutions that solve real business problems. Our team blends creativity, technology, and strategy to deliver IT solutions that are modern, scalable, and result-driven.',
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: 'Our Mission',
      desc: 'To empower businesses — micro, small, medium, and enterprise — with affordable and high-quality IT services that help them grow sustainably.',
      icon: <Target className="w-6 h-6 text-primary" />,
      link: { text: "Visit Our Home Page", href: "/" }
    },
    {
      title: 'Our Vision',
      desc: 'To become a global, client-focused IT solutions company known for trust, innovation, and long-term partnerships.',
      icon: <Compass className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="About Grehasoft"
        description="A trusted and client-focused partner committed to helping businesses grow sustainably through beautiful, high-performing digital experiences."
        breadcrumb={[{ name: 'About', href: '/about' }]}
      />

      {/* Intro Brand Story Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5"
              >
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-primary font-black uppercase tracking-wider text-[10px]">
                  Welcome to Grehasoft
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none">
                  A <span className="text-primary">Trusted IT Solutions</span> Company
                </h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  Grehasoft is one of the best IT solutions company committed to helping businesses grow through meaningful digital experiences. What began as a small web application development initiative in Kochi, Kerala has grown into a reliable IT solutions provider serving clients across India, the Middle East, Europe, and beyond.
                </p>
              </motion.div>

              {/* Core Commitment Highlight Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-3xl relative overflow-hidden flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm uppercase text-primary tracking-wider mb-1">
                    Our Day One Focus
                  </h4>
                  <p className="text-dark font-black text-lg italic leading-relaxed">
                    "Deliver quality, affordable, honesty, and results — without overpromising."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Graphic Badge / Accent Counter Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="min-h-[460px] h-full rounded-[2.5rem] bg-dark text-white p-10 md:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/25 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="text-accent font-black tracking-widest text-[9px] bg-accent/20 px-3 py-1.5 rounded-full inline-block uppercase mb-6">
                    Our Impact
                  </span>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
                      100+
                    </span>
                    <span className="text-accent text-3xl font-black">+</span>
                  </div>
                  <h3 className="font-extrabold text-lg text-white mt-2">
                    Delivered Digital Products
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mt-2">
                    Delivered high-performance dynamic software integrations, ecommerce, core architectures, and stunning web systems globals.
                  </p>
                </div>

                <div className="relative z-10 border-t border-white/10 pt-6 mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                    <Globe className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase font-black">Regional Reach</p>
                    <p className="text-xs font-bold text-white">India • Middle East • Europe • USA</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Who We Are, Mission & Vision (Interactive Pillars) */}
      <section className="section-padding bg-gray-50/50 border-t border-b border-gray-100 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {brandPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 border border-primary/10">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-black text-dark mb-4 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {pillar.link && (
                  <div className="border-t border-gray-100 pt-6 mt-8">
                    <Link 
                      href={pillar.link.href} 
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors"
                    >
                      {pillar.link.text}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 mb-3 inline-block">
              Multi-Service IT Solutions Provider
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none mb-4">
              What We Do
            </h2>
            <p className="text-gray-500 font-medium">
              We deliver client-focused, strategic, and high-performance digital services tailored specifically to your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {customServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="items-center justify-between mb-5 flex">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-primary border border-primary/5 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-black text-gray-300">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-black text-dark mb-2.5 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="border-t border-gray-50 pt-4 mt-6">
                  <Link 
                    href={service.href}
                    className="flex justify-between items-center group/btn text-[10px] font-black uppercase text-primary tracking-widest"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-primary group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section (Editorial Road Map Timeline) */}
      <section className="section-padding bg-gray-50/50 border-t border-gray-100 relative overflow-hidden text-dark">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <span className="text-primary font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 mb-3 inline-block">
              Milestones of Growth
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none mb-4">
              Our Journey
            </h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">
              Driven by pure passion and clean values, explore how we transformed from a one-person startup in Kerala into an international partner.
            </p>
          </div>

          {/* Timeline Process Structure */}
          <div className="max-w-3xl mx-auto relative pl-6 md:pl-0">
            
            {/* Center Line for Desktop / Left Line for Mobile */}
            <div className="absolute left-1.5 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            {/* Event 1: 2007 (The Beginning) */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-stretch md:items-center">
                
                {/* Left side spacer on Desktop */}
                <div className="w-full md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm"
                  >
                    <span className="text-accent font-black tracking-widest text-[10px] bg-accent/10 px-2.5 py-1 rounded-full uppercase inline-block mb-3">
                      Jan 2007
                    </span>
                    <h3 className="text-xl font-bold mb-2">Freelance Beginnings</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Grehasoft began its journey offering small freelance web projects driven by passion, and a commitment to quality. What started as a one-person initiative with a strong software programming background soon matured, helping clients build robust digital systems.
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Center Badge */}
                <div className="absolute left-[-18px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-accent z-20 flex items-center justify-center order-1 md:order-2" />

                {/* Right side spacer on Desktop */}
                <div className="w-full md:w-1/2 md:pl-12 order-3 hidden md:block">
                  <span className="text-4xl md:text-6xl font-black text-gray-200">2007</span>
                </div>
              </div>
            </div>

            {/* Event 2: Referral Growth (Organically Expanding) */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-stretch md:items-center">
                
                {/* Left side element on Desktop */}
                <div className="w-full md:w-1/2 md:pr-12 md:text-right hidden md:block">
                  <span className="text-4xl md:text-6xl font-black text-gray-200">The Growth</span>
                </div>

                {/* Timeline Center Badge */}
                <div className="absolute left-[-18px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary z-20 flex items-center justify-center" />

                {/* Right side element on Desktop */}
                <div className="w-full md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm"
                  >
                    <span className="text-primary font-black tracking-widest text-[10px] bg-primary/10 px-2.5 py-1 rounded-full uppercase inline-block mb-3">
                      Referral Foundation
                    </span>
                    <h3 className="text-xl font-bold mb-2">Natural Growth & Word of Mouth</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Over the years, we dedicated ourselves to delivering work that spoke for itself. The brand grew naturally through referrals, consistent quality, client trust, and word-of-mouth validation.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Event 3: 2013 Habitat Centre Kerala IT Mission */}
            <div className="relative mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-stretch md:items-center">
                
                {/* Left side element on Desktop */}
                <div className="w-full md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm"
                  >
                    <span className="text-accent font-black tracking-widest text-[10px] bg-accent/10 px-2.5 py-1 rounded-full uppercase inline-block mb-3">
                      Year 2013
                    </span>
                    <h3 className="text-xl font-bold mb-2">ITES Habitat Centre Head Office</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Grehasoft took a major step forward by setting up its first official office space at the ITES Habitat Centre under the Kerala IT Mission. Transitioning from small domestic contracts to handling high-status international assignments successfully.
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Center Badge */}
                <div className="absolute left-[-18px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-accent z-20 flex items-center justify-center order-1 md:order-2" />

                {/* Right side element on Desktop */}
                <div className="w-full md:w-1/2 md:pl-12 order-3 hidden md:block">
                  <span className="text-4xl md:text-6xl font-black text-gray-200">2013</span>
                </div>
              </div>
            </div>

            {/* Event 4: Infopark Kochi (Today) */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-stretch md:items-center">
                
                {/* Left side element on Desktop */}
                <div className="w-full md:w-1/2 md:pr-12 md:text-right hidden md:block">
                  <span className="text-4xl md:text-6xl font-black text-primary">Today</span>
                </div>

                {/* Timeline Center Badge */}
                <div className="absolute left-[-18px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white z-20 flex items-center justify-center" />

                {/* Right side element on Desktop */}
                <div className="w-full md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-dark text-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-white/5 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-xl pointer-events-none" />
                    
                    <span className="text-accent font-black tracking-widest text-[10px] bg-accent/20 px-2.5 py-1 rounded-full uppercase inline-block mb-3">
                      Infopark Kochi
                    </span>
                    <h3 className="text-xl font-bold mb-2">Global Operations Hub</h3>
                    <p className="text-sm text-white/75 leading-relaxed">
                      Today, Grehasoft proudly operates from our main enterprise office at Infopark, Kochi. We continue to serve a fantastic worldwide client base while expanding strategically into global zones with our signature authentic, humble engineering focus.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
       {/* Our Commitment / Brand Banner CTA */}
      <section className="section-padding bg-dark text-white relative overflow-hidden border-t border-white/5">
        {/* Glowing atmospheric brand graphics */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Dedication philosophy and pledges */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-accent font-black uppercase tracking-wider text-[10px]">
                    Dedicated Partnership Commitment
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  Our Dedication to <span className="text-accent">Long-Term</span> Success
                </h2>
                
                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl font-medium">
                  Grehasoft remains dedicated to offering honest work, quality service, and long-term digital support. As an evolving IT solutions company, we continue building better experiences, better technology, and better relationships.
                </p>
              </div>

              {/* Core Commitment Pledges Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 border border-primary/10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Uncompromising Quality</h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Pristine lines of code, responsive design systems, and robust performance standards on every single project deployment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent/25 flex items-center justify-center text-accent flex-shrink-0 border border-accent/10 animate-pulse">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Post-Launch Care</h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Continuous technical support, server fine-tuning, proactive speed upgrades, and security validations post-delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Glowing Call-To-Action Card Block */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-white/15 to-white/5 p-1 rounded-[2.5rem] shadow-2xl relative">
                <div className="bg-dark rounded-[2.25rem] p-8 md:p-10 relative overflow-hidden">
                  
                  {/* Internal ambient graphics */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/25 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/25 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">Ready To Scale?</p>
                        <h4 className="text-base font-black text-white">Let's Build Something Great</h4>
                      </div>
                    </div>

                    <p className="text-sm text-white/60 leading-relaxed">
                      Whether you require customized enterprise web applications, high conversion eCommerce, clean product branding, or top search engineering, our modern specialists are ready.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2.5 text-sm text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        <span>Free Consultation Scoping Call</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Transparent Cost Scoping</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Long-term Reliable Partnership Care</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <Link 
                        href="/contact-us" 
                        className="w-full text-center block bg-accent hover:bg-accent/90 text-dark py-4 px-6 rounded-xl font-black uppercase text-xs tracking-wider shadow-lg shadow-accent/20 transition-all duration-300"
                      >
                        Contact Grehasoft Now
                      </Link>
                    </div>

                    <p className="text-[12px] text-white/30 text-center font-bold tracking-widest uppercase">
                      No overpromising • Only high results
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Why Businesses Choose Grehasoft Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 mb-3 inline-block">
              Why We Stand Out
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none mb-4">
              Why Businesses Choose Grehasoft
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              We are chosen not because we are big, but because we stay focused, transparent, and entirely dedicated to actual results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {coreStrengths.map((str, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-gray-50/50 hover:bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {str.icon}
                  </div>
                  <h3 className="text-lg font-black text-dark tracking-tight">
                    {str.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {str.desc}
                </p>
                <div className="flex items-center gap-2 mt-4 text-[12px] text-primary/40 font-black tracking-widest uppercase">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  <span>Trusted Standard</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Proof Badges / Meta Points Row */}
          <div className="bg-primary/5 rounded-[2.5rem] p-6 md:p-8 border border-primary/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xs font-bold text-dark">
                Recognitions, awards & industry credibility
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Globe className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-dark">
                Long-term clients in India, Middle East, Europe & USA
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-dark">
                Phenomenal client referrals & proud reputation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-dark">
                Robust and active social business identity
              </p>
            </div>
          </div>

          {/* Concluding trust citation */}
          <div className="max-w-2xl mx-auto text-center mt-12 bg-white px-6 py-4 rounded-full border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500 font-bold">
              Clients trust us because we stay authentic and deliver solutions that are affordable, reliable, and designed with the client's success in mind.
            </p>
          </div>

        </div>
      </section>

     
       <CTA />
            
            <Footer />
    </main>
  );
}
