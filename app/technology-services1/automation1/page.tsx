'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Zap, Settings, CheckCircle2, ArrowRight, MessageSquare, Layout, Shield, Rocket, Cloud } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const automationFeatures = [
  {
    icon: Zap,
    title: 'Process Automation',
    desc: 'Eliminate manual data entry and repetitive tasks with intelligent, automated workflows.',
  },
  {
    icon: Settings,
    title: 'Custom Integrations',
    desc: 'Connect your favorite tools and platforms to create a seamless, unified business ecosystem.',
  },
  {
    icon: Shield,
    title: 'Error Reduction',
    desc: 'Minimize human error and ensure data consistency across all your business operations.',
  },
  {
    icon: Layout,
    title: 'Real-time Monitoring',
    desc: 'Track your automated processes in real-time with comprehensive dashboards and alerts.',
  },
  {
    icon: MessageSquare,
    title: 'Smart Notifications',
    desc: 'Automated alerts and notifications to keep your team informed and responsive.',
  },
  {
    icon: ArrowRight,
    title: 'Scalable Workflows',
    desc: 'Design workflows that grow with your business, handling increased volume without extra effort.',
  },
];

const automationTech = [
  {
    title: 'Custom Scripts',
    desc: 'Tailored Python and Node.js scripts for complex, specialized automation needs.',
    icon: Zap,
  },
  {
    title: 'API Orchestration',
    desc: 'Sophisticated management of multiple APIs to coordinate complex business logic.',
    icon: Settings,
  },
  {
    title: 'Zapier & Make',
    desc: 'Expertise in low-code platforms for rapid deployment of common business integrations.',
    icon: Rocket,
  },
  {
    title: 'Cloud Functions',
    desc: 'Serverless automation that scales automatically and runs only when needed.',
    icon: Cloud,
  },
];

const automationBenefits = [
  {
    title: 'Increased Productivity',
    desc: 'Free your team from mundane tasks so they can focus on high-value strategic work.',
  },
  {
    title: 'Significant Cost Savings',
    desc: 'Reduce operational costs by automating labor-intensive processes and improving efficiency.',
  },
  {
    title: 'Faster Turnaround',
    desc: 'Accelerate your business cycles with instant data processing and automated responses.',
  },
  {
    title: 'Improved Accuracy',
    desc: 'Ensure 100% precision in data handling and task execution, every single time.',
  },
];

const faqs = [
  {
    question: 'What is workflow automation?',
    answer: 'Workflow automation is the process of using technology to execute repetitive tasks or processes in a business where manual effort was previously required.',
  },
  {
    question: 'How can automation benefit my small business?',
    answer: 'Automation helps small businesses compete with larger ones by increasing efficiency, reducing overhead costs, and allowing the team to focus on growth rather than admin.',
  },
  {
    question: 'Can you integrate with our existing software?',
    answer: 'Yes, we specialize in custom integrations. We can connect your CRM, accounting software, email marketing tools, and more into a unified workflow.',
  },
  {
    question: 'Is workflow automation secure?',
    answer: 'Absolutely. We implement enterprise-grade security protocols and ensure that all data transfers between systems are encrypted and authorized.',
  },
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Workflow Automation Kochi"
        description="Automate your business processes and increase efficiency with our custom solutions. Expert automation developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Technology', href: '/tech' },
          { name: 'Automation', href: '/tech/automation' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Efficiency First</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Intelligent <span className="text-primary">Workflow Automation</span> Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Stop wasting time on repetitive tasks. At Grehasoft, we develop custom workflow automation solutions that help you streamline your operations, improve efficiency, and focus on what truly matters—growing your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom business logic',
                  'Seamless tool integration',
                  'Real-time data sync',
                  'Automated reporting',
                  'Error-free processing',
                  'Scalable architecture'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/automation-kochi/1200/900"
                  alt="Workflow Automation Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">60%+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Time Saved</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Automation Expertise</span></h2>
            <p className="text-text-gray text-lg">We provide comprehensive automation solutions to help your business operate at peak efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-text-gray leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Automation Stack</span></h2>
            <p className="text-text-gray text-lg">We use modern tools and custom development to build robust automation pipelines.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <tech.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">{tech.title}</h3>
                  <p className="text-text-gray leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Why Your Business Needs <span className="text-primary">Workflow Automation?</span></h2>
            <p className="text-text-gray text-lg">Automation is no longer a luxury—it's a necessity for modern business growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">{benefit.title}</h3>
                  <p className="text-text-gray leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="text-text-gray text-lg">Answers to common questions about our workflow automation services.</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-text-gray leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>
    </main>
  );
}
