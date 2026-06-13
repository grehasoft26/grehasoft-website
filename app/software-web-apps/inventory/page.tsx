'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Package, BarChart, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const inventoryFeatures = [
  {
    icon: Package,
    title: 'Real-Time Tracking',
    desc: 'Monitor stock levels across multiple warehouses and locations in real-time with automated alerts.',
  },
  {
    icon: Zap,
    title: 'Automated Reordering',
    desc: 'Set low-stock thresholds and automate purchase orders to ensure you never run out of essential items.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    desc: 'Gain insights into stock turnover, demand forecasting, and inventory valuation with detailed reports.',
  },
  {
    icon: Shield,
    title: 'Secure Auditing',
    desc: 'Maintain a complete audit trail of all stock movements, adjustments, and user actions for full accountability.',
  },
  {
    icon: Layout,
    title: 'Multi-Channel Sync',
    desc: 'Synchronize inventory across your website, physical stores, and marketplaces like Amazon or eBay.',
  },
  {
    icon: MessageSquare,
    title: 'Vendor Management',
    desc: 'Manage supplier information, track lead times, and evaluate vendor performance in one central hub.',
  },
];

const inventoryBenefits = [
  {
    title: 'Reduced Carrying Costs',
    desc: 'Optimize your stock levels to reduce storage costs and minimize capital tied up in slow-moving inventory.',
  },
  {
    title: 'Eliminate Human Error',
    desc: 'Automate manual data entry and stock counting to significantly reduce errors and improve accuracy.',
  },
  {
    title: 'Improved Fulfillment',
    desc: 'Streamline your picking, packing, and shipping processes to ensure faster and more accurate order delivery.',
  },
  {
    title: 'Scalable Operations',
    desc: 'Our systems are built to grow with your business, handling increasing SKU counts and complex logistics.',
  },
];

const faqs = [
  {
    question: 'What is a custom inventory management system?',
    answer: 'A custom inventory management system is software designed specifically for your business\'s unique logistics, product types, and warehouse workflows, offering more flexibility than generic tools.',
  },
  {
    question: 'Can the system integrate with my existing e-commerce store?',
    answer: 'Yes, we specialize in integrating inventory systems with platforms like Shopify, WooCommerce, Magento, and custom-built e-commerce websites.',
  },
  {
    question: 'Does the system support barcode and QR code scanning?',
    answer: 'Absolutely. We can integrate barcode and QR code scanning capabilities to speed up receiving, picking, and cycle counting processes.',
  },
  {
    question: 'Can I manage inventory across multiple warehouse locations?',
    answer: 'Yes, our custom solutions are built to handle multi-location inventory, allowing you to track stock levels and transfers between different warehouses or retail stores.',
  },
];

export default function InventoryManagementPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Inventory Management Kochi"
        description="Optimize your supply chain and inventory with our custom management solutions. Expert inventory software developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'Inventory Management', href: '/software/inventory' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Supply Chain Optimization</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Custom <span className="text-primary">Inventory Solutions</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Managing stock shouldn't be a headache. At Grehasoft, we develop custom inventory management systems that help you track stock levels, manage orders, and optimize your entire supply chain with precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Real-time stock tracking',
                  'Automated reordering',
                  'Multi-location support',
                  'Barcode/QR integration',
                  'Advanced stock analytics',
                  'E-commerce synchronization'
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
                  src="https://picsum.photos/seed/inventory-kochi/1200/900"
                  alt="Inventory Management Software Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">99.9%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Stock Accuracy</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Powerful <span className="text-primary">Inventory Features</span></h2>
            <p className="text-text-gray text-lg">Our solutions are designed to give you total control over your products and logistics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventoryFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold text-dark mb-6">Why Your Business Needs <span className="text-primary">Custom Inventory Software?</span></h2>
            <p className="text-text-gray text-lg">Stop relying on spreadsheets and outdated tools that slow down your growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inventoryBenefits.map((benefit, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our inventory management development services.</p>
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
