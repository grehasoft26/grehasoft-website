'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Database, Shield, Zap, Layout, CheckCircle2, ArrowRight, MessageSquare, Settings, Rocket, BarChart, Users, Briefcase, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Users,
    title: 'Customer Insights',
    desc: 'Understand your customers better with detailed profiles and interaction history.',
  },
  {
    icon: BarChart,
    title: 'Sales Tracking',
    desc: 'Monitor your sales pipeline and forecast future revenue with ease.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    desc: 'Centralize all customer communications across email, chat, and phone.',
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    desc: 'Automate follow-ups and lead nurturing to improve conversion rates.',
  },
];

const benefits = [
  {
    title: 'Increased Sales Productivity',
    desc: 'Empower your sales team with tools that automate data entry and provide actionable insights, allowing them to focus on closing deals.',
    icon: Rocket,
  },
  {
    icon: Heart,
    title: 'Enhanced Customer Loyalty',
    desc: 'Deliver personalized experiences by having a 360-degree view of every customer interaction, building long-term trust and retention.',
  },
  {
    icon: Shield,
    title: 'Data Security & Ownership',
    desc: 'Keep your sensitive customer data secure on your own infrastructure with custom access controls and full data ownership.',
  },
  {
    icon: Settings,
    title: 'Seamless Scalability',
    desc: 'Unlike off-the-shelf software, your custom CRM grows with your business, allowing for new features and integrations as you expand.',
  },
];

const faqs = [
  {
    question: 'What is a Custom CRM and why do I need one?',
    answer: 'A Custom CRM (Customer Relationship Management) system is built specifically for your business workflows. You need one if off-the-shelf solutions are too complex, too expensive, or lack the specific features your team needs to be productive.',
  },
  {
    question: 'Can a custom CRM integrate with my existing website?',
    answer: 'Yes, we specialize in integrating CRM systems with websites, landing pages, and third-party tools like email marketing platforms, accounting software, and social media.',
  },
  {
    question: 'How does a CRM help in sales forecasting?',
    answer: 'By tracking every lead and deal through the sales pipeline, a CRM provides data-driven insights into your sales cycle, conversion rates, and expected revenue, allowing for accurate forecasting.',
  },
  {
    question: 'Is my data safe in a custom-built CRM?',
    answer: 'Absolutely. We implement enterprise-grade security protocols, including data encryption, secure user authentication, and regular backups to ensure your customer information is always protected.',
  },
];

export default function CRMPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="CRM Systems"
        description="Build stronger relationships with your customers through our custom CRM solutions. Expert CRM developers in Kochi."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'CRM Systems', href: '/software/crm' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-dark mb-6">Custom <span className="text-primary">CRM Development</span> Kochi</h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                We design and build custom CRM systems that help you manage your customer relationships more effectively and drive sales growth. Our solutions are tailored to fit your unique business model.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Customized to your sales and marketing processes',
                  'Real-time lead tracking and management',
                  'Comprehensive customer interaction history',
                  'Automated email marketing and follow-ups',
                  'Detailed reporting and sales forecasting'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/crm-system/800/600"
                alt="Custom CRM Software"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Why Your Business Needs a <span className="text-primary">Custom CRM</span></h2>
            <p className="text-text-gray text-lg">Generic solutions often come with features you don't need and lack the ones you do. A custom CRM solves this.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <benefit.icon className="w-8 h-8" />
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
              <p className="text-text-gray text-lg">Common questions about our custom CRM development services.</p>
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
