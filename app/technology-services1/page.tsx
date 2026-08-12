'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { 
  Code, 
  Database, 
  Server, 
  Cpu, 
  Zap, 
  Shield, 
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
  Lock,
  Cloud,
  Network,
  Workflow,
  Layers,
  Terminal,
  Eye,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const techServices = [
  {
    icon: Server,
    title: 'Backend Development',
    desc: 'Robust, lightning-fast server architectures and optimized logical structures engineered with Next.js, Node.js, and Express.',
    href: '/tech/backend',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    desc: 'Breathtakingly responsive, modular, and eye-safe user interfaces built with React, Next.js, HTML5, and Tailwind CSS.',
    href: '/tech/frontend',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    desc: 'Secure SQL indexing, Firestore data rules, query performance tuning, and structured cloud storage configurations.',
    href: '/tech/databases',
  },
  {
    icon: Cloud,
    title: 'Server & Cloud Support',
    desc: 'Cloud-native load balancing, Docker container setup, and low-latency API proxy channels on AWS and Google Cloud.',
    href: '/tech/server-cloud',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Streamline repetitive daily activities, sync internal information, and optimize performance using advanced event-triggers.',
    href: '/tech/automation',
  },
];

const valueProps = [
  {
    title: 'Modern Stack Selection',
    desc: 'By selecting elite lightweight frameworks, we achieve lightningfast interactive screens and smaller overall file footprints.',
    icon: Code,
  },
  {
    title: 'Absolute Code Integrity',
    desc: 'We enforce intensive unit tests, type assertions, and modular setups to target zero structural regressions.',
    icon: Shield,
  },
  {
    title: 'Cloud Scalability Tuning',
    desc: 'We configure autoscaling groups and microservice clusters that grow effortlessly during peak client logins.',
    icon: Cloud,
  },
  {
    title: 'Hardened Threat Firewalls',
    desc: 'We implement CORS configurations, verified credentials handling, sanitization practices, and regular threat database scans.',
    icon: Lock,
  },
  {
    title: 'Optimized Query Indexing',
    desc: 'We structure databases to optimize performance speeds of search queries, even under massive multi-thousand transaction tables.',
    icon: Database,
  },
  {
    title: 'Biometric & Utility Integration',
    desc: 'Connect applications smoothly with biometric logins, cameras, physical printers, payment gateways, and Bluetooth.',
    icon: Cpu,
  },
  {
    title: 'API Microservices Gateway',
    desc: 'We architect decoupled, neat webhook nodes and payload channels that communicate seamlessly without blocking workflows.',
    icon: Network,
  },
  {
    title: '100% IP Intellectual Handover',
    desc: 'Full repository, developer documentation, configuration scripts, and master server codes transfer to you completely.',
    icon: Shield,
  },
  {
    title: 'Responsive Cross-Device Support',
    desc: 'All websites, layouts, panels, and tools adapt perfectly to mobile screens, physical tablets, laptops, and ultra-wide displays.',
    icon: Layers,
  },
  {
    title: 'Sustained Maintenance Plans',
    desc: 'Our long-term maintenance SLAs cover software updates, dependency upgrades, file hosting checkups, and bug diagnostics.',
    icon: RefreshCw,
  },
];

const techWorkflow = [
  {
    step: '01',
    title: 'Logic Audit & Architecture',
    desc: 'Deconstructing operational constraints, establishing secure database schemas, and mapping out the data flows.',
  },
  {
    step: '02',
    title: 'Modern UI/UX Screen Prototyping',
    desc: 'Designing intuitive, lightweight layout wires focused on high interaction efficiency and pixel-perfect aesthetics.',
  },
  {
    step: '03',
    title: 'High-Velocity Technical Coding',
    desc: 'Deploying modular Components, type-safe structures, and lightning-fast backend API paths.',
  },
  {
    step: '04',
    title: 'Diagnostics Sweeps & Live Deploy',
    desc: 'Performing rigid stress audits, network latency evaluations, and deploying live systems to production servers.',
  },
];

const faqs = [
  {
    question: 'How do you pick the ideal technology stack for a new custom project?',
    answer: 'We analyze your expected transaction volumes, scale objectives, future mobile capabilities, and offline query needs. Based on that, we choose high-speed, scalable stacks like Next.js, Node.js, and Express, utilizing stable SQL databases like PostgreSQL or enterprise Firestore.',
  },
  {
    question: 'How do you handle software data migration from outdated systems?',
    answer: 'We construct secure, temporary script mapping gateways to ingest your historical records, validate field sanitization rules, eliminate duplicates, and securely port your dataset over into the clean custom framework without operational downtime.',
  },
  {
    question: 'Will we have ongoing technical support following our platform launch?',
    answer: 'Yes. We offer robust SLA (Service Level Agreement) support structures. This includes standard monthly database health monitoring, cloud server maintenance, library security patches, and emergency operational debugging.',
  },
  {
    question: 'How do we protect user credentials and personal communications under strict rules?',
    answer: 'We build strict security practices into our codebases from line one. We run complete authorization checks, integrate secure JSON Web Token parameters, map multi-layered security rules, perform sanitization checks to prevent SQL injection, and schedule automated cloud data backups.',
  },
];

export default function TechnologyServicesPage() {
  const advantagesList = [
    {
      title: 'Decoupled Server Resilience',
      subtitle: 'Zero Interruption Operations',
      desc: 'Keep backend system logic fully separated from client interfaces. Decoupled server systems guarantee your applications stay fast, isolated from traffic spikes, and simple to expand.',
      badge: 'Fail-Safe Logic Engine',
      icon: Server,
      color: 'text-indigo-650 bg-indigo-50 border-indigo-100',
      tagline: 'Achieve absolute uptime by isolating critical data processing from regular system adjustments.'
    },
    {
      title: 'Cloud-Scale Acceleration',
      subtitle: 'Dynamic Speed Capabilities',
      desc: 'Minimize load bottlenecks completely. Fully leverage modern cloud microservices to handle sudden peaks in concurrent user transactions without raising storage billing margins.',
      badge: 'Optimized Server Spend',
      icon: Cloud,
      color: 'text-emerald-650 bg-emerald-50 border-emerald-100',
      tagline: 'Scale storage nodes organically according to actual daily traffic demands.'
    },
    {
      title: 'Flawless Hardware Hookups',
      subtitle: 'Seamless Device Synergies',
      desc: 'We engineer secure custom integrations with hardware utilities. Directly hook your tools into standard office biometric systems, security cameras, printers, and GPS mapping modules.',
      badge: 'Physical-Asset Sync',
      icon: Cpu,
      color: 'text-amber-650 bg-amber-50 border-amber-100',
      tagline: 'Gain instant real-world tracking metrics through secure API handshakes.'
    },
    {
      title: 'Next-Gen Interface Speeds',
      subtitle: 'Ultra-Fluid Navigation',
      desc: 'Deliver lightning-fast page loading times. We avoid complex bloat, optimize image loads, compress static files, and leverage native React caching structures to keep scroll states dynamic.',
      badge: 'Friction-Free CTR',
      icon: Zap,
      color: 'text-purple-650 bg-purple-50 border-purple-100',
      tagline: 'Reduce bounce rates with instant initial loads under a fraction of a second.'
    },
    {
      title: 'Hardened Security Firewalls',
      subtitle: 'Ultimate Data Defense',
      desc: 'Form complete security shields around your company databases. We set up comprehensive input sanitization, multi-layered JWT rules, private credentials storage, and regular cloud backups.',
      badge: 'Elite Data Encryption',
      icon: Shield,
      color: 'text-primary bg-primary/5 border-primary/10',
      tagline: 'Verify all operational handshakes under verified cryptographic compliance rules.'
    }
  ];

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Technology Services Kochi"
        description="Top-rated technology and software integration company in Kerala. We build secure backend structures, fast React frontends, and robust cloud automations."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Technology', href: '/tech' },
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
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Tech Innovation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Architecting Powerful <span className="text-primary">Digital Foundations</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a premiere **technology services company in Kochi**, specialized in crafting high-efficiency, secure digital solutions, fast database scaling schemas, and low-latency cloud systems for growing enterprises.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From type-safe **backend development in Kochi** to responsive, beautiful **Next.js frontends in Kerala**, our seasoned software engineers deploy clean, structured code mapped to your unique business growth trajectory.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Scalable Node.js & Express APIs',
                  'Optimized Next.js & React Frontends',
                  'High-ROI Database Performance Tuning',
                  'Secure OAuth & IAM Identity Systems',
                  'Automated Systems & Webhook Schedulers',
                  'AWS, Google Cloud & Docker Setup'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Consult With Our Tech Architects <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/tech-kochi/1200/900"
                  alt="Technology Services Kochi"
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
                    <p className="text-2xl font-bold text-dark">99.99%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Standard Cloud Uptime</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">80+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">API Integrations Formed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Custom interactive grid */}
      <section className="section-padding bg-white overflow-hidden relative" id="advantages_tech_section">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">Strategic Value</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Unrivaled <span className="text-primary">Advantages</span> of Modern Tech
            </h2>
            <p className="text-text-gray text-lg leading-relaxed font-sans">
              Keep databases secure, optimize cloud-server hosting structures, connect system components via fast webhooks, and deliver snappy navigation.
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
              "Robust core technology constitutes the structural blueprint of your digital asset. Upgrading server databases and performance parameters accelerates team velocity while lowering software risk."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Technology Expertise</span>
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Technology & Engineering Services</span></h2>
            <p className="text-text-gray text-lg">We deliver custom-architected web engines, database systems, and integration interfaces tailored for high productivity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {techServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-text-gray leading-relaxed mb-6 text-xs">{service.desc}</p>
                </div>
                <Link href={service.href} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-xs">
                  Explore Tech <ArrowRight className="w-4 h-4" />
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
                Advanced Systems <span className="text-primary">Engineered</span> for Extreme Scalability
              </h2>
              <div className="text-text-gray text-base leading-relaxed space-y-6 font-sans">
                <p>
                  At Grehasoft, visual fluidity, high container decoupling, and low database query latencies represent our core parameters for designing premium software. We construct type-safe backend environments, microservice APIs, and lightweight Next.js views tailored to protect and extend corporate operations globally.
                </p>
                <p>
                  By creating organized data mappings, choosing high-performance storage servers, and defining strict CORS and security logic, we prevent database degradation. As your long-term technology scaling partner, we deploy neat codebases, optimize hosting setups, and provide clear operational analytics boards to monitor your systems internationally.
                </p>
                <p>
                  Our scalable solutions benefit enterprises by establishing total system autarchy. We help you replace outdated monolithic setups, minimize server billing overheads, and construct solid, customized technologies that ensure security, high uptime speeds, and stable performance assets.
                </p>
              </div>
              <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-3xl">
                <p className="text-primary font-semibold text-lg mb-2">Cloud-Native Technology Architectures</p>
                <p className="text-text-gray text-sm leading-relaxed mb-4">
                  We write extremely high-efficiency cloud configurations and prepare clean developer guidelines, significantly simplifying downstream maintenance while safeguarding application stability.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Launch Your Tech Transformation <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/tech-strategies-grehasoft/1200/900"
                  alt="Technology Strategies"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                <div className="text-dark font-bold text-lg mb-2">Our Dual Engine Approach</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Scale-Ready Architecture</div>
                    <p className="text-xs text-text-gray leading-relaxed">Isolate core workflows inside independent containers that autoscale horizontally under traffic loads instantly.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="font-extrabold text-dark text-sm mb-1">Optimized Execution Nodes</div>
                    <p className="text-xs text-text-gray leading-relaxed">Minimize server lag, memory allocation spikes, and index failures to deliver beautiful UI feedback loops.</p>
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
              At Grehasoft, we strive to represent the standard of excellence in custom software engineering. Here are the core metrics and workflows that set us apart:
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
                <span className="font-semibold text-dark">Ready to build dynamic cloud infrastructures with us?</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Technology Workflow</span></h2>
            <p className="text-gray-400 text-lg">A structured and highly logical workflow to engineering enterprise-grade cloud integrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {techWorkflow.map((step, index) => (
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
                Learn more about migration standards, timeline schedules, platform custom security, and continuous SLAs.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Technology Tip</p>
                <p className="text-lg italic font-medium">"Type stability constitutes robust code logic. Choose clean, resilient frameworks to protect system scalability."</p>
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
