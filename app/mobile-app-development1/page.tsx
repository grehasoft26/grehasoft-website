'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { 
  Smartphone, 
  Tablet, 
  Zap, 
  Shield, 
  Layout, 
  BarChart, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Code2, 
  Globe, 
  Cpu, 
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
  Briefcase,
  Wrench
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const mobileServices = [
  {
    icon: Smartphone,
    title: 'Android App Development',
    desc: 'Custom Android applications built with Kotlin and Java, optimized for maximum performance, battery efficiency, and scalability on all device profiles.',
    href: '/mobile-apps/android',
  },
  {
    icon: Tablet,
    title: 'iOS App Development',
    desc: 'High-end iOS applications for iPhone and iPad using Swift, conforming to Apple\'s strict Human Interface Guidelines and premium quality checks.',
    href: '/mobile-apps/ios',
  },
  {
    icon: Zap,
    title: 'Hybrid App Development',
    desc: 'Highly budget-friendly cross-platform apps using Flutter and React Native that operate flawlessly across both Android and iOS devices.',
    href: '/mobile-apps/hybrid',
  },
  {
    icon: Globe,
    title: 'Progressive Web Apps (PWA)',
    desc: 'Cutting-edge web-based applications that offer an immersive app-like feel, native-level caching, offline capabilities, and instant loading speeds.',
    href: '/mobile-apps/pwa',
  },
  {
    icon: Briefcase,
    title: 'Enterprise & Business Apps',
    desc: 'Tailored corporate applications designed to streamline operations, facilitate internal communications, and automate field-force activities.',
    href: '/mobile-apps/business-apps',
  },
  {
    icon: Wrench,
    title: 'Custom Utility Applications',
    desc: 'Niche mobile and tablet tools built to perform specific tasks, offline calculations, biometric syncing, and hardware integrations perfectly.',
    href: '/mobile-apps/utility-apps',
  },
];

const valueProps = [
  {
    title: 'Strategic Architecture',
    desc: 'We map out detailed wireframes, user touchpoints, and systemic flowcharts before writing a single line of database or frontend code.',
    icon: Target,
  },
  {
    title: 'App Store Expertise',
    desc: 'Our expert team guides your app through the comprehensive compliance checklists required for swift approval on Google Play and Apple App Stores.',
    icon: Award,
  },
  {
    title: 'Cutting-Edge Tech Stack',
    desc: 'By utilizing modern performance standards like Kotlin, Swift, Flutter, and React Native, your applications remain robust, scalable, and stable.',
    icon: Lightbulb,
  },
  {
    title: 'Custom Adaptations',
    desc: 'Every layout is tailored to match your precise user personas, custom security parameters, and distinct corporate branding rules.',
    icon: Settings,
  },
  {
    title: 'Data & Behavior Analytics',
    desc: 'Integrate robust in-app click tracking, user journeys mapping, and system event logging to optimize user conversion loops over time.',
    icon: BarChart,
  },
  {
    title: 'Transparent Collaboration',
    desc: 'Receive active build updates, direct feedback opportunities, and sandbox testing credentials at every milestone of development.',
    icon: MessageSquare,
  },
  {
    title: 'Hardware Optimization',
    desc: 'We configure deep hardware utilities like biometric authentication, cameras, bluetooth handshakes, and offline storage queues securely.',
    icon: Cpu,
  },
  {
    title: 'Sustained Maintenance',
    desc: 'Keep your application aligned with sudden OS changes, deprecation warnings, security patches, and modern smartphone designs.',
    icon: RefreshCw,
  },
  {
    title: 'User-First Philosophy',
    desc: 'We prioritize touch target guidelines, minimal loading visual gaps, and fluid interface layouts to delight users first.',
    icon: Heart,
  },
  {
    title: 'Scalable Cloud Backends',
    desc: 'Ensure flawless, rapid data synchronization with secure, fast database backends capable of serving thousands of concurrent users.',
    icon: TrendingUp,
  },
];

const mobileProcess = [
  {
    step: '01',
    title: 'Product Strategy & Logic',
    desc: 'Establishing functional goals, backend pathways, competitor reviews, and targeted client personas.',
  },
  {
    step: '02',
    title: 'High-Fidelity UI/UX',
    desc: 'Drafting responsive screen blueprints, custom interactive components, and comprehensive design systems.',
  },
  {
    step: '03',
    title: 'Development & APIs',
    desc: 'Engineering optimize frontend code coupled with secure cloud APIs and highly safe payload exchanges.',
  },
  {
    step: '04',
    title: 'Testing & Store Launch',
    desc: 'Running intensive device diagnostics, unit diagnostics, and managing the complete official app store release.',
  },
];

const faqs = [
  {
    question: 'How much does it cost to develop a custom mobile application?',
    answer: 'The operational cost fluctuates depending on the structural complexity, overall feature count, visual design density, and choice of targets (Native Android/iOS or Cross-Platform Hybrid). We offer tailored development quotes based on your exact business roadmap.',
  },
  {
    question: 'How long does the mobile app development lifecycle take?',
    answer: 'A highly streamlined, clean MVP application typically spans 8 to 12 weeks. Large-scale enterprise platforms with microservice backends, extensive database integrations, or complicated hardware controls can require 16 to 24 weeks or more.',
  },
  {
    question: 'Will you manage Google Play and Apple App Store submissions?',
    answer: 'Absolutely. We coordinate and execute the entire marketplace compilation, legal privacy checks, application descriptions, and store screenshots, guaranteeing a complete submission that meets Apple and Google developer guidelines.',
  },
  {
    question: 'Do you offer ongoing post-launch maintenance packages?',
    answer: 'Yes. We provide recurring support and performance optimization plans to protect your software codebase against major operating system upgrades (iOS changes, Android versions), deprecation issues, and system expansions.',
  },
];

export default function MobileAppDevelopment() {
  const advantagesList = [
    {
      title: 'Direct Consumer Engagement',
      subtitle: 'Unrivaled Real Estate',
      desc: 'Earn a permanent spot on your clients\' home screens. Having a dedicated application increases top-of-mind brand visibility and builds direct interactive connections.',
      badge: 'Brand Real-Estate',
      icon: Smartphone,
      color: 'text-indigo-650 bg-indigo-50 border-indigo-100',
      tagline: 'Stay active inside high-intent channels where modern users spend over 90% of their mobile time.'
    },
    {
      title: 'Flawless Push Alerts',
      subtitle: 'Immediate Communication',
      desc: 'Send fast, highly engaging alerts directly to your customer base. Bypass cluttered email folders with instant updates, tailored deals, or critical application notifications.',
      badge: 'Immediate CTR Boost',
      icon: Zap,
      color: 'text-emerald-650 bg-emerald-50 border-emerald-100',
      tagline: 'Deliver time-sensitive announcements with instant, action-driven click-through paths.'
    },
    {
      title: 'Deep Hardware Utilities',
      subtitle: 'Advanced Capabilities',
      desc: 'Leverage built-in device features seamlessly. Connect your system to core biometric parameters, device cameras, high-definition GPS routes, and native calendar schedules.',
      badge: 'Hardware Syncing',
      icon: Cpu,
      color: 'text-amber-650 bg-amber-50 border-amber-100',
      tagline: 'Enable intuitive customer interactions like fingerprint authorization and automated site routing.'
    },
    {
      title: 'Offline Operational Flow',
      subtitle: 'Continuous Accessibility',
      desc: 'Give users essential access to features even during network outages. Native databases permit data lookups, draft writing, and transaction tracking offline.',
      badge: 'Fail-Safe Availability',
      icon: Shield,
      color: 'text-purple-650 bg-purple-50 border-purple-100',
      tagline: 'Keep business transactions queued securely for synchronization the exact second connection resumes.'
    },
    {
      title: 'Elevated Brand Trust',
      subtitle: 'Marketplace Authority',
      desc: 'Earn strong credibility by maintaining a verified app store presence. Safe app store distribution proves your enterprise meets strict security, privacy, and development policies.',
      badge: 'Store Verification',
      icon: Code2,
      color: 'text-primary bg-primary/5 border-primary/10',
      tagline: 'Build immediate corporate authority under official Apple and Google licensing protocols.'
    }
  ];

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Mobile App Development Kochi"
        description="Top-rated mobile app development company in Kerala. We build custom Android, iOS, and Hybrid apps that drive business growth."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile App Development', href: '/mobile-apps' },
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
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Mobile Innovation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Building Next-Gen <span className="text-primary">Mobile Experiences</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **mobile app development company in Kochi**, specialized in engineering fast, highly refined, and secure mobile applications. We help brands convert vision into flawless software products.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From **Android app development in Kerala** to high-performing native **iOS apps in Kochi**, our multi-disciplinary engineers deploy clean code, beautiful aesthetics, and solid database pathways that scale organically.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Robust Native Kotlin & Swift',
                  'Optimized Flutter & React Native',
                  'Intuitive Touch Interface Design',
                  'Secure Microservice API Sync',
                  'Full App Store Submissions',
                  'Reliable SLA Code Maintenanceing'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Mobile Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/mobile-kochi/1200/900"
                  alt="Mobile App Development Kochi"
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
                    <p className="text-2xl font-bold text-dark">99.9%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">App Crash-Free Rate</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">50+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Store Launches Done</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages of going mobile - Custom interactive grid */}
      <section className="section-padding bg-white overflow-hidden relative" id="advantages_mobile_apps_section">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Strategic Value</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Unrivaled <span className="text-primary">Advantages</span> of Custom Apps
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
              "A custom mobile app acts as the center-point of modern corporate interaction, letting you securely scale brand authority, engage audiences without friction, and gain deeper consumer data insights."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Marketing Expertise</span>
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Mobile App Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a full spectrum of mobile development services to meet your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
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
                  Learn More <ArrowRight className="w-4 h-4" />
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
                Mobile Strategy <span className="text-primary">Blueprints</span> Built To Scale
              </h2>
              <div className="text-text-gray text-base leading-relaxed space-y-6 font-sans">
                <p>
                  At Grehasoft, mobile apps, database sync, and rapid API response layers are the primary pillars driving our functional software engineering. We architect and implement scalable code bases customized to expand your enterprise services. We resolve hard structural constraints across iOS, Android, and PWAs, allowing you to delight clients seamlessly.
                </p>
                <p>
                  By creating responsive screens, fast cached data loops, and localized offline stores, we ensure maximum client retention. As your software partner, we build robust backend architectures, integrate secure payment platforms, and configure advanced telemetry tools that help you monitor performance metrics globally.
                </p>
                <p>
                  Our scalable solutions benefit organizations of any scale by establishing direct interaction lanes with your buyers. We help you skip third-party listing marketplaces, reduce intermediary dependencies, and establish secure personal channels to build long-term loyalty and scalable transaction volumes.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
                <p className="text-primary font-semibold text-lg mb-2">High-Performance Hybrid Platforms</p>
                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  We write extremely high-efficiency cross-platform applications that leverage unified code bases across iOS and Android, drastically lowering deployment costs while keeping core animations highly fluid.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Launch Your Mobile App <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/mobile-strategies-grehasoft/1200/900"
                  alt="Mobile Strategies"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                <div className="text-dark font-bold text-lg mb-2">Our Dual Engine Approach</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Direct Brand Real Estate</div>
                    <p className="text-xs text-text-gray leading-relaxed">Secure premium placement directly on user home screens, gaining 24/7 visual presence and automated notification channels.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Extreme Performance</div>
                    <p className="text-xs text-text-gray leading-relaxed">Optimize background threading, memory allocations, and network responses for rapid and friction-free user journeys.</p>
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
              At Grehasoft, we pride ourselves on being the epitome of excellence in mobile app development. Here are the core values and capabilities that set us apart:
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
                <span className="font-semibold text-dark">Ready to build your next custom mobile solution?</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Development Workflow</span></h2>
            <p className="text-gray-400 text-lg">A structured and transparent approach to engineering highly reliable custom mobile apps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {mobileProcess.map((step, index) => (
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
                Explore answers regarding timeline allocations, marketplace standards, and technical optimization loops.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Development Tip</p>
                <p className="text-lg italic font-medium">"Native-like responsive interactions deliver massive friction reduction. Always prioritize fast, secure cached storage loops."</p>
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
