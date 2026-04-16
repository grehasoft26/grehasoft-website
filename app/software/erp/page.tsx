'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Database, Shield, Zap, Layout, CheckCircle2, ArrowRight, MessageSquare, Settings, Rocket, BarChart, Users, Briefcase, Target } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Layout,
    title: 'Unified Dashboard',
    desc: 'All your business operations in one place for better visibility and control.',
  },
  {
    icon: Database,
    title: 'Centralized Data',
    desc: 'Eliminate data silos and ensure consistency across all departments.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Robust security measures to protect your sensitive business data.',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    desc: 'Automate repetitive tasks to increase efficiency and reduce errors.',
  },
];

const modules = [
  {
    title: 'Finance & Accounting',
    desc: 'Manage your general ledger, accounts payable/receivable, and financial reporting with ease.',
    icon: BarChart,
  },
  {
    title: 'Human Resources',
    desc: 'Streamline payroll, recruitment, employee performance, and attendance tracking.',
    icon: Users,
  },
  {
    title: 'Inventory Management',
    desc: 'Real-time tracking of stock levels, orders, sales, and deliveries across multiple locations.',
    icon: Database,
  },
  {
    title: 'Sales & CRM',
    desc: 'Manage customer relationships, track sales pipelines, and automate marketing efforts.',
    icon: Target,
  },
  {
    title: 'Supply Chain',
    desc: 'Optimize procurement, vendor management, and logistics for better operational flow.',
    icon: Briefcase,
  },
  {
    title: 'Manufacturing',
    desc: 'Plan production schedules, manage bills of materials, and monitor shop floor activities.',
    icon: Settings,
  },
];

const faqs = [
  {
    question: 'What is a custom ERP system?',
    answer: 'A custom ERP (Enterprise Resource Planning) system is software tailored specifically to your business processes, integrating various departments into a single, unified platform.',
  },
  {
    question: 'How long does it take to implement a custom ERP?',
    answer: 'The timeline depends on the complexity and number of modules. Typically, a custom ERP project can take anywhere from 4 to 12 months from discovery to full deployment.',
  },
  {
    question: 'Can we migrate data from our existing legacy systems?',
    answer: 'Yes, we specialize in data migration. We ensure your historical data is cleaned, mapped, and securely transferred to the new ERP system without data loss.',
  },
  {
    question: 'Is the ERP system accessible on mobile devices?',
    answer: 'Absolutely. Our ERP solutions are built with responsive design, allowing your team to access critical business data and perform tasks from smartphones and tablets.',
  },
];

export default function ERPPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="ERP Solutions"
        description="Streamline your business operations with our custom Enterprise Resource Planning (ERP) solutions."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'ERP Solutions', href: '/software/erp' },
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
              <h2 className="text-4xl font-bold text-dark mb-6">Custom <span className="text-primary">ERP Development</span></h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                We develop custom ERP systems that integrate all aspects of your business, from finance and HR to inventory and supply chain management.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Tailored to your specific business processes',
                  'Real-time data analytics and reporting',
                  'Seamless integration with existing tools',
                  'Scalable architecture for future growth',
                  'User-friendly interface for all employees'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Custom Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/erp/800/600"
                alt="ERP Solutions"
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

      {/* Core Modules Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Core <span className="text-primary">ERP Modules</span></h2>
            <p className="text-text-gray text-lg">Comprehensive modules designed to cover every aspect of your enterprise operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <module.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{module.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{module.desc}</p>
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
              <p className="text-text-gray text-lg">Common questions about our ERP development and implementation process.</p>
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
      <Footer />
    </main>
  );
}
