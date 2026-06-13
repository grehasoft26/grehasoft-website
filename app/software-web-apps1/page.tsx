'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Layout, 
  BarChart, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Code2, 
  Globe, 
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
  Database,
  Lock,
  Cloud,
  Network,
  Workflow,
  Server,
  Layers,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const softwareServices = [
  {
    icon: Code2,
    title: 'Custom Web Applications',
    desc: 'High-performing, fully tailored web applications built with modern frameworks to streamline specialized business workflows.',
    href: '/software/custom-web',
  },
  {
    icon: Layers,
    title: 'ERP Solutions',
    desc: 'Comprehensive enterprise resource planning software to consolidate and manage your backend business processes flawlessly.',
    href: '/software/erp',
  },
  {
    icon: Users,
    title: 'CRM Systems',
    desc: 'Custom-built relationship platforms to automate lead nurturing, track pipelines, and elevate customer retention rates.',
    href: '/software/crm',
  },
  {
    icon: Award,
    title: 'LMS Platforms',
    desc: 'Highly interactive, stable, and secure learning management hubs configured for schools, colleges, and training enterprises.',
    href: '/software/lms',
  },
  {
    icon: RefreshCw,
    title: 'Booking & Dispatch Systems',
    desc: 'Intuitive calendars, reservations matrices, automated schedulers, and payment sync for perfect operation mechanics.',
    href: '/software/booking',
  },
  {
    icon: Database,
    title: 'Inventory Management',
    desc: 'Real-time multi-location warehouse trackers, stock automated alerts, purchase management workflows, and instant status updates.',
    href: '/software/inventory',
  },
  {
    icon: Settings,
    title: 'Business Automation Tools',
    desc: 'Empower your workers by replacing boring manual routines with high-speed automated software systems and triggers.',
    href: '/software/business-tools',
  },
  {
    icon: Network,
    title: 'API & Gateway Integrations',
    desc: 'Link all your legacy platforms, cloud storage, payment handlers, and third-party databases through clean microservice APIs.',
    href: '/software/api-integrations',
  },
];

const valueProps = [
  {
    title: 'Scalable Microservices',
    desc: 'We partition logic into modular containers that scale independently to ensure high availability on sudden user spikes.',
    icon: Layers,
  },
  {
    title: 'State-of-the-Art Security',
    desc: 'We configure AES encryption, multi-factor logins, data sanitization, and automated backups to shield enterprise databases.',
    icon: Lock,
  },
  {
    title: 'Cloud-Native Prowess',
    desc: 'Leverage AWS, Google Cloud, or Azure optimizations to maintain extremely high server speeds and lower hosting overheads.',
    icon: Cloud,
  },
  {
    title: 'Agile Implementation',
    desc: 'Gain total transparency through weekly sprints, functional staging previews, and rapid adaptation loops.',
    icon: Workflow,
  },
  {
    title: 'Robust Core Integrity',
    desc: 'We enforce strict unit diagnostics and end-to-end integration automated checks to assure robust offline behavior.',
    icon: Shield,
  },
  {
    title: 'Elegant Component Architecture',
    desc: 'By separating state management from design layers, layouts remain fast, elegant, and simple to expand.',
    icon: Layout,
  },
  {
    title: 'Database Load Tuning',
    desc: 'We optimize PostgreSQL and NoSQL indexing structures to deliver lightning-fast read/write queries at scale.',
    icon: Server,
  },
  {
    title: 'SLA Maintenance Plans',
    desc: 'Keep applications constantly up-to-date with library security upgrades, database health sweeps, and performance monitoring.',
    icon: RefreshCw,
  },
  {
    title: 'Direct Product Mentoring',
    desc: 'Our senior product team helps wireframe and logic-test workflows to maximize real user utility before dev cycles begin.',
    icon: Target,
  },
  {
    title: 'Performance Optimization',
    desc: 'We analyze query runtime latency & file bundles size to provide an app with instant startup speeds and smooth scrolling.',
    icon: Zap,
  },
];

const developmentProcess = [
  {
    step: '01',
    title: 'System Analysis & Blueprinting',
    desc: 'Mapping out clear relational data schemas, secure security limits, and interactive page layouts.',
  },
  {
    step: '02',
    title: 'High-Fidelity Modern UI/UX',
    desc: 'Translating concepts into gorgeous responsive designs that drive high user adoption.',
  },
  {
    step: '03',
    title: 'High-Speed Engineering',
    desc: 'Writing optimized modular components, fast APIs, and secure database pathways.',
  },
  {
    step: '04',
    title: 'Testing Sweeps & Launch',
    desc: 'Conducting deep load stress audits, multi-browser diagnostics, and launching live systems.',
  },
];

const faqs = [
  {
    question: 'Why choose custom software over ready-made off-the-shelf products?',
    answer: 'Ready-made systems impose major custom license constraints and force you to mold your business operations around rigid features. Custom development gives you absolute ownership of secure, unique features structured precisely to serve your actual workflow and save overhead pricing.',
  },
  {
    question: 'Which software development tech stacks do you specialize in?',
    answer: 'At Grehasoft, we deploy highly secure and performant technology. We focus on modern frameworks including Next.js, React, Node.js, and Express, utilizing stable SQL databases like PostgreSQL, enterprise Firestore, and AWS Lambda microservices.',
  },
  {
    question: 'How do you preserve security and keep data pathways safe?',
    answer: 'We build strict secure practices into our codebases from line one. We run complete authorization checks, integrate secure JSON Web Token parameters, map multi-layered security rules, perform sanitization checks to prevent SQL injection, and schedule automated cloud data backups.',
  },
  {
    question: 'Will we have complete intellectual property ownership over the source code?',
    answer: 'Yes, 100%. Upon completing and settling the project phases, full legal intellectual property rights, database codebases, and custom server credentials transfer to your systems directly.',
  },
];

export default function SoftwareServicesPage() {
  const advantagesList = [
    {
      title: 'Automate Operational Friction',
      subtitle: 'Seamless Efficiency',
      desc: 'Ditch lagging spreadsheets and manually repeated admin steps. Tailored workflows let your team automate reporting, client communications, and complex data tracking in real time.',
      badge: 'Zero Manual Workload',
      icon: RefreshCw,
      color: 'text-indigo-650 bg-indigo-50 border-indigo-100',
      tagline: 'Refunnel resource hours toward direct growth targets instead of managing repetitive backend routines.'
    },
    {
      title: 'Total System Control & IP',
      subtitle: 'Complete Ownership',
      desc: 'Free your business from endless user licensing fees, rigid third-party upgrades, and platform closures. A custom system guarantees you own the entire intellectual asset from day one.',
      badge: 'Unrestricted Expansion',
      icon: Shield,
      color: 'text-emerald-650 bg-emerald-50 border-emerald-100',
      tagline: 'Configure and expand your core features freely without paying heavy per-user licensing taxes.'
    },
    {
      title: 'Flawless App Connectivity',
      subtitle: 'Integrated Data Hub',
      desc: 'Break down administrative information silos. Sync your custom system securely with payment gateways, biometric controllers, legacy CRM dashboards, or any external public web API.',
      badge: 'High-Integrity Syncing',
      icon: Network,
      color: 'text-amber-650 bg-amber-50 border-amber-100',
      tagline: 'Consolidate multiple operations into a single cohesive system of truth with immediate updates.'
    },
    {
      title: 'Scalable Modular Design',
      subtitle: 'Engineered for Growth',
      desc: 'Your application evolves strictly alongside practical operational requirements. Seamless, scalable codebases permit you to append new databases, dashboard features, and user groups.',
      badge: 'Painless Adaptations',
      icon: Cpu,
      color: 'text-purple-650 bg-purple-50 border-purple-100',
      tagline: 'Deploy new modules and API tunnels without interrupting current workflows.'
    },
    {
      title: 'Premium Security Protocols',
      subtitle: 'Enterprise Shield',
      desc: 'Guard your proprietary data files from threat leaks. Build hardened, customized access configurations, secure identity systems, data encryption, and automatic off-site server backups.',
      badge: 'Hardened Security',
      icon: Lock,
      color: 'text-primary bg-primary/5 border-primary/10',
      tagline: 'Deliver safe, robust security to audit trails and verify strict privacy standards.'
    }
  ];

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Software & Web App Development Kochi"
        description="Top software development company in Kerala. We engineer secure custom software, cloud-native ERPs, CRM platforms, and scalable web apps."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
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
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Software Innovation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Engineered for <span className="text-primary">Operational Scale</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **software development company in Kochi**, helping forward-thinking enterprises design and build secure, feature-rich custom web applications and business automation tools.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From high-performing native **Next.js web apps in Kerala** to resilient database-driven enterprise planning platforms, our engineers write clean, robust code that solves hard administrative challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Scalable Next.js & React Apps',
                  'Secure Microservices & REST APIs',
                  'Enterprise CRM & ERP Systems',
                  'PostgreSQL & Cloud Load Tuning',
                  'Automated Biometric System Sync',
                  '100% Code Ownership Transfer'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Consult With A Software Engineer <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 text-accent">
                <img
                  src="https://picsum.photos/seed/software-kochi/1200/900"
                  alt="Software & Web Apps Koch"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">100%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Code Transparency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">45+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Cloud Platfoms Deployed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Custom Interactive Grid */}
      <section className="section-padding bg-white overflow-hidden relative" id="advantages_software_web_section">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Strategic Value</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Unrivaled <span className="text-primary">Advantages</span> of Custom Software
            </h2>
            <p className="text-text-gray text-lg leading-relaxed font-sans">
              Accelerate team output, secure critical intellectual data assets, sync legacy APIs, and scale enterprise databases safely.
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
              "Custom software is not just an administrative tool; it is a long-term compound asset that eliminates monthly software tax rates, scales internal workflows, and protects operational workflows."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services/Expertise Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Software Expertise</span>
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Software & Web Services</span></h2>
            <p className="text-text-gray text-lg">We deliver custom-architected web engines, database systems, and integration interfaces tailored for high productivity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {softwareServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-text-gray leading-relaxed mb-6 text-xs">{service.desc}</p>
                </div>
                <Link href={service.href} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-xs">
                  Explore Solution <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform & Product Blueprint Section */}
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
                Software Systems <span className="text-primary">Engineered</span> To Scale Dynamically
              </h2>
              <div className="text-text-gray text-base leading-relaxed space-y-6 font-sans">
                <p>
                  At Grehasoft, high availability, load-balanced backend routes, and database optimization are the central principles driving our specialized web developments. We build clean software logic tailored strictly to accelerate internal business velocities. We resolve hard structural constraints inside your business systems, letting you organize operational records cleanly.
                </p>
                <p>
                  By creating responsive components, low-latency queues, and robust authorization models, we ensure full data alignment. As your long-term engineering partner, we deliver secure, fast APIs, configure continuous integration, and coordinate clear telemetry boards to track application performance indices worldwide.
                </p>
                <p>
                  Our scalable custom microservices benefit corporations by establishing fully independent lanes. We help you stop relying on rigid SaaS structures with increasing user taxes, reduce third-party limitations, and build a highly customized system to ensure corporate authority.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
                <p className="text-primary font-semibold text-lg mb-2">Cloud-Native Software Infrastructure</p>
                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  We write extremely performant database structures and integrate clean REST APIs that scale dynamically with your operations, significantly reducing query response time while keeping code elegant.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Launch Your Software Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/software-strategies-grehasoft/1200/900"
                  alt="Software Strategies"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                <div className="text-dark font-bold text-lg mb-2">Our Dual Engine Approach</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Tailored CRM & Automations</div>
                    <p className="text-xs text-text-gray leading-relaxed">Consolidate multiple internal data paths and customer interactions into a single highly responsive operations panel.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Architectural Load Tuning</div>
                    <p className="text-xs text-text-gray leading-relaxed">Optimize background queries, index structures, and memory pipelines to support high numbers of concurrent users.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us the Best Section */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Excellence Standard</span>
            <h2 className="text-4xl font-extrabold text-dark mb-6">What Makes Us <span className="text-primary">the Best?</span></h2>
            <p className="text-text-gray text-lg">
              At Grehasoft, we strive to represent the standard of excellence in custom software engineering. Here are the core metrics and workflows that set us apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <span className="font-semibold text-dark">Ready to build your next next-generation custom software solution?</span>
                <Link href="/contact" className="text-primary font-extrabold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                  Team up with Grehasoft <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development Process Section */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Growth Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Development Workflow</span></h2>
            <p className="text-gray-400 text-lg">A structured and highly secure workflow to build stable, scalable software solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {developmentProcess.map((step, index) => (
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

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Support & Insights</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequent <br />Questions</h2>
              <p className="text-gray-500 mb-8">
                Learn more about our custom programming processes, hosting configurations, security rules, and code ownership.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Development Tip</p>
                <p className="text-lg italic font-medium">"Custom programming guarantees direct brand asset ownership. Avoid rigid per-user license models to scale freely."</p>
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
