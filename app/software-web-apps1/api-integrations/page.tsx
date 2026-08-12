'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Globe, Link as LinkIcon, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const apiFeatures = [
  {
    icon: LinkIcon,
    title: 'Third-Party Integrations',
    desc: 'Connect your business with popular services like Stripe, Twilio, Salesforce, and Google Workspace seamlessly.',
  },
  {
    icon: Zap,
    title: 'Custom API Development',
    desc: 'We build robust, scalable, and secure RESTful and GraphQL APIs tailored to your specific business needs.',
  },
  {
    icon: Globe,
    title: 'Data Synchronization',
    desc: 'Ensure real-time data consistency across all your platforms, eliminating manual entry and data silos.',
  },
  {
    icon: Shield,
    title: 'Secure Data Transfer',
    desc: 'Implementation of enterprise-grade security protocols, including OAuth2, JWT, and SSL encryption.',
  },
  {
    icon: Layout,
    title: 'Legacy System Connection',
    desc: 'Bridge the gap between your modern applications and legacy software through custom-built API layers.',
  },
  {
    icon: MessageSquare,
    title: 'Webhooks & Notifications',
    desc: 'Set up real-time event-driven notifications to keep your systems and team updated instantly.',
  },
];

const apiBenefits = [
  {
    title: 'Operational Efficiency',
    desc: 'Automate data flow between systems to reduce manual work and minimize the risk of human error.',
  },
  {
    title: 'Unified Ecosystem',
    desc: 'Create a cohesive digital environment where all your tools work together in perfect harmony.',
  },
  {
    title: 'Enhanced Scalability',
    desc: 'Our API solutions are designed to grow with your business, handling increasing data loads effortlessly.',
  },
  {
    title: 'Better Decision Making',
    desc: 'Access consolidated data from multiple sources in real-time for more accurate business intelligence.',
  },
];

const faqs = [
  {
    question: 'What is an API integration?',
    answer: 'An API (Application Programming Interface) integration is a connection between two or more applications via their APIs that allows them to share data and perform actions automatically.',
  },
  {
    question: 'Can you integrate any software with an API?',
    answer: 'Most modern software platforms provide APIs for integration. If a platform has an API, we can connect it. For legacy systems without APIs, we can often build custom middleware to enable connectivity.',
  },
  {
    question: 'How long does a typical API integration project take?',
    answer: 'Simple integrations can take 1-2 weeks, while complex projects involving multiple systems or custom API development can take several months. We provide a detailed timeline after assessing your requirements.',
  },
  {
    question: 'Is data security guaranteed during integration?',
    answer: 'Yes, security is our top priority. We use industry-standard encryption, secure authentication methods, and rigorous testing to ensure your data remains protected at all times.',
  },
];

export default function APIIntegrationsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="API Integrations Kochi"
        description="Connect your digital ecosystem with our custom API integration services. Expert API developers in Kerala for seamless data flow."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'API Integrations', href: '/software/api-integrations' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Connected Ecosystems</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Seamless <span className="text-primary">API Integrations</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                In a connected world, your software shouldn't work in isolation. At Grehasoft, we help you connect your disparate software systems and tools through custom API integrations, ensuring a seamless flow of data across your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom API development',
                  'Third-party connections',
                  'Real-time data sync',
                  'Secure data transfer',
                  'Legacy system bridging',
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
                  src="https://picsum.photos/seed/api-kochi/1200/900"
                  alt="API Integration Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <LinkIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">100+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">APIs Integrated</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">API Expertise</span></h2>
            <p className="text-text-gray text-lg">We provide comprehensive API solutions to help your business stay connected and efficient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold text-dark mb-6">Why Your Business Needs <span className="text-primary">API Integration?</span></h2>
            <p className="text-text-gray text-lg">Break down data silos and empower your business with a unified digital strategy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiBenefits.map((benefit, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our API integration and development services.</p>
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
