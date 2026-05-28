'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Layers, 
  Clock, 
  Users, 
  FileText, 
  TrendingUp, 
  Server, 
  BarChart3,
  Check,
  Zap,
  Building2,
  Globe,
  Briefcase,
  Rocket,
  ShieldCheck,
  Monitor
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

const features = [
  {
    title: 'Real-Time Workforce Monitoring',
    description: 'Monitor employee activities live with intelligent workforce tracking and operational visibility. Managers can view active users, idle staff, tracking status, and ongoing work sessions in real time.',
    icon: Activity,
  },
  {
    title: 'Project Management System',
    description: 'Manage projects efficiently with task assignment, progress tracking, deadlines, milestones, and team collaboration features designed for modern workflows.',
    icon: Layers,
  },
  {
    title: 'Employee Activity Tracking',
    description: 'Track employee productivity, application usage, work duration, and active sessions to improve operational efficiency and accountability.',
    icon: Clock,
  },
  {
    title: 'CRM Management',
    description: 'Handle client management, lead tracking, communication workflows, and customer relationship operations from a centralized CRM module.',
    icon: Users,
  },
  {
    title: 'HR & Document Management',
    description: 'Store and manage employee records, HR documents, attendance workflows, onboarding files, and organizational resources securely.',
    icon: FileText,
  },
  {
    title: 'Finance & Operations',
    description: 'Simplify finance management, operational activities, approvals, and internal business workflows through an integrated management system.',
    icon: TrendingUp,
  },
  {
    title: 'Infrastructure Monitoring',
    description: 'Monitor organizational infrastructure and internal systems with centralized operational visibility and reporting tools.',
    icon: Server,
  },
  {
    title: 'Live Analytics Dashboard',
    description: 'Access real-time reports, workforce statistics, productivity insights, employee status monitoring, and operational analytics through an intuitive dashboard.',
    icon: BarChart3,
  },
];

const benefits = [
  'Centralized business management platform',
  'Real-time employee tracking & monitoring',
  'Improved workforce productivity',
  'Smart operational visibility',
  'Efficient project coordination',
  'Scalable for growing organizations',
  'Secure and user-friendly interface',
  'Designed for modern business workflows',
];

const useCases = [
  { name: 'IT Companies', icon: Server, color: 'bg-blue-50 text-blue-600' },
  { name: 'Software Development Firms', icon: Rocket, color: 'bg-purple-50 text-purple-600' },
  { name: 'Digital Agencies', icon: Globe, color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Remote Teams', icon: Users, color: 'bg-orange-50 text-orange-600' },
  { name: 'Corporate Offices', icon: Building2, color: 'bg-slate-50 text-slate-600' },
  { name: 'Startup Companies', icon: Zap, color: 'bg-amber-50 text-amber-600' },
  { name: 'Project-Based Organizations', icon: Briefcase, color: 'bg-rose-50 text-rose-600' },
  { name: 'Service Businesses', icon: TrendingUp, color: 'bg-indigo-50 text-indigo-600' },
];

export default function PMSPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <PageHeader
        title="Smart Project & Workforce Management Software"
        description="Grehasoft PMS is an advanced Project Management and Workforce Monitoring System designed to help businesses manage projects, teams, employee productivity, and operational workflows from a single platform. "
        breadcrumb={[
          { name: 'Products', href: '/products' },
          { name: 'Grehasoft PMS', href: '/products/pms' },
        ]}
      />

      {/* Short Introduction Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Intelligent Business hub
              </div>
              <h2 className="text-3xl md:text-4.5xl font-extrabold text-dark mb-6 leading-tight">
                Empower Your Business with <span className="text-primary">Next-Gen PMS</span>
              </h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Grehasoft PMS empowers businesses with intelligent project management, employee activity tracking, live workforce monitoring, CRM operations, HR documentation, financial workflows, and operational control tools. The platform helps organizations improve productivity, transparency, accountability, and team collaboration through real-time monitoring and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
                  Schedule demo <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#features" className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-dark font-bold py-4 px-8 rounded-xl transition-all">
                  Explore Features
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3]  rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/pms7.png"
                  alt="Grehasoft PMS Smart Team Board"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat element for design craft */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-50 max-w-xs md:max-w-sm">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-extrabold shadow-md">
                  <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark">Live Work Session</h4>
                  <p className="text-xs text-text-gray mt-0.5">Real-time activity active</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-4">
              Comprehensive Enterprise Key Features
            </h2>
            <p className="text-text-gray text-lg leading-relaxed">
              Achieve absolute visibility over projects and operational activities through powerful integrated features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-8 rounded-2.5xl shadow-sm border border-gray-100 ring-1 ring-gray-900/5 hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
             <div className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pms5.png"
                  alt="Modern workplace productivity"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">
                Why Businesses Choose <span className="text-primary">Grehasoft PMS</span>
              </h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Empower your operational control, eliminate modern workplace inefficiencies, and build an accountable culture built on pure clarity and intelligent automation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 bg-gray-50/50 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <span className="font-semibold text-dark text-sm leading-tight">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


        {/* Customized CTA Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl bg-dark p-8 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Ambient Background Glows using brand colors */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            
            {/* Split layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Premium Simulated PMS Dashboard Panel using brand colors */}
              <div className="lg:col-span-12 xl:col-span-5 order-2 lg:order-1 lg:mx-auto xl:mx-0 w-full max-w-lg xl:max-w-none">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md relative"
                >
                  {/* Top Panel Actions */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">Workforce Monitor</span>
                    </div>
                    <div className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-black tracking-wider uppercase font-mono">
                      LIVE ACTIVE
                    </div>
                  </div>

                  {/* Operational Stats list */}
                  <div className="space-y-3.5">
                    {/* Stat Item 1 */}
                    <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <Users className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Active Staff Sessions</p>
                          <p className="text-[10px] text-slate-400">Automatic activity polling</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-white font-mono">24 / 24</span>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                          <Activity className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Workplace Productivity</p>
                          <p className="text-[10px] text-slate-400">Average team efficiency</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-accent font-mono">98.4%</span>
                    </div>

                    {/* Stat Item 3 */}
                    <div className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <Layers className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Sprint Roadmap Velocity</p>
                          <p className="text-[10px] text-slate-400">Project tasks completed</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-white font-mono">94%</span>
                    </div>
                  </div>

                  {/* Small floating activity radar snippet */}
                  <div className="absolute -bottom-4 -right-4 bg-dark border border-white/10 p-3 rounded-xl shadow-lg flex items-center gap-2 font-mono text-[10px] text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-accent animate-spin" style={{ animationDuration: '4s' }} />
                    <span>Real-time Syncing Now</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Key Content Messaging & Button */}
              <div className="lg:col-span-12 xl:col-span-7 order-1 lg:order-2 text-center xl:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-black text-primary uppercase tracking-widest bg-primary/10 rounded-full">
                  <Zap className="w-3.5 h-3.5 text-accent fill-current" />
                  Grow Productive Today
                </div>
                
                <h2 className="text-3xl md:text-4.5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight select-none">
                  Transform Your Business Operations with <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Grehasoft PMS</span>
                </h2>
                
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto xl:mx-0">
                  Streamline projects, monitor workforce productivity, manage clients, and optimize operations using one powerful business management platform.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
                  <Link 
                    href="/contact" 
                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2.5 py-4 px-10 rounded-full bg-accent text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-xl hover:shadow-accent/20 hover:bg-accent/90 hover:translate-y-[-1px]"
                  >
                    Get Started Today
                    <ArrowRight className="w-4.5 h-4.5" />
                  </Link>
                  <a 
                    href="#features" 
                    className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 hover:bg-white/5 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full transition-all"
                  >
                    Explore Features
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
              Designed For Every Growing Industry
            </h2>
            <p className="text-text-gray text-lg leading-relaxed">
              Grehasoft PMS features flexible workflows configurable to support a wide range of specialized use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={useCase.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <span className="font-bold text-dark text-sm tracking-tight leading-snug">
                    {useCase.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
<Footer />
    
    </main>
  );
}
