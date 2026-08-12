'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Briefcase, Settings, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const toolFeatures = [
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Eliminate manual data entry and repetitive tasks with intelligent automated workflows tailored to your logic.',
  },
  {
    icon: Layout,
    title: 'Custom Dashboards',
    desc: 'Visualize your business metrics in real-time with intuitive, custom-built data dashboards.',
  },
  {
    icon: Shield,
    title: 'Internal Security Tools',
    desc: 'Protect your internal data with custom access controls, audit logs, and secure communication channels.',
  },
  {
    icon: Settings,
    title: 'Process Management',
    desc: 'Streamline complex business processes into simple, manageable digital steps for your team.',
  },
  {
    icon: MessageSquare,
    title: 'Collaboration Tools',
    desc: 'Build custom internal platforms for team communication, document sharing, and project tracking.',
  },
  {
    icon: Briefcase,
    title: 'Resource Planning',
    desc: 'Optimize how you allocate time, staff, and assets with tools designed for your specific industry.',
  },
];

const toolBenefits = [
  {
    title: 'Maximum Efficiency',
    desc: 'Custom tools are built around your existing workflows, not the other way around, leading to immediate productivity gains.',
  },
  {
    title: 'Cost Reduction',
    desc: 'Reduce operational costs by automating labor-intensive tasks and eliminating the need for multiple expensive subscriptions.',
  },
  {
    title: 'Better Decision Making',
    desc: 'Access accurate, real-time data that helps you make informed strategic decisions for your business growth.',
  },
  {
    title: 'Competitive Advantage',
    desc: 'Proprietary tools give you a unique edge by enabling faster service delivery and better internal coordination.',
  },
];

const faqs = [
  {
    question: 'What qualifies as a "Custom Business Tool"?',
    answer: 'A custom business tool is any software application built specifically to solve a unique internal challenge, such as a specialized calculator, an automated reporting engine, or a custom project management portal.',
  },
  {
    question: 'Can you integrate custom tools with our current software?',
    answer: 'Yes, we specialize in building tools that talk to your existing systems like Excel, Google Workspace, Slack, and various CRMs or ERPs via APIs.',
  },
  {
    question: 'How long does it take to develop a custom tool?',
    answer: 'Small utility tools can be built in as little as 2-4 weeks, while more complex internal platforms may take 2-4 months depending on the requirements.',
  },
  {
    question: 'Who owns the tool once it is built?',
    answer: 'You do. We provide full source code ownership and intellectual property rights to the custom tools we develop for your business.',
  },
];

export default function BusinessToolsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Custom Business Tools Kochi"
        description="Empower your business with custom-built tools designed to solve your unique challenges. Expert business automation developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'Business Tools', href: '/software/business-tools' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Business Automation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Innovative <span className="text-primary">Business Tools</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Off-the-shelf software often forces you to change your processes. At Grehasoft, we build custom business tools that adapt to your unique workflows, helping you automate tasks and improve overall efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Tailored to your needs',
                  'Workflow automation',
                  'Real-time reporting',
                  'Seamless integrations',
                  'Scalable architecture',
                  'Full code ownership'
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
                  src="https://picsum.photos/seed/business-tools/1200/900"
                  alt="Custom Business Tools Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">100%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Custom Built</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Specialized <span className="text-primary">Business Tools</span></h2>
            <p className="text-text-gray text-lg">We build a wide range of internal tools to help your team perform at their best.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolFeatures.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Why Invest in <span className="text-primary">Custom Internal Tools?</span></h2>
            <p className="text-text-gray text-lg">Empower your workforce with the exact digital tools they need to succeed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="text-text-gray text-lg">Answers to common questions about our custom business tool development.</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
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
      
    </main>
  );
}
