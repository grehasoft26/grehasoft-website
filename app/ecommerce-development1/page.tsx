'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { ShoppingBag, CreditCard, Shield, Zap, Layout, Globe, Search, BarChart, CheckCircle2, ShoppingCart, ArrowRight, Smartphone, Lock, Users, Star, MessageSquare, Code } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';
const ecommerceServices = [
  {
    icon: ShoppingCart,
    title: 'Custom eCommerce',
    desc: 'Bespoke online stores built with modern frameworks for unique business models and high-scale requirements.',
    href: '/ecommerce-development',
  },
  {
    icon: Globe,
    title: 'WooCommerce Stores',
    desc: 'Leverage the power of WordPress with a highly customizable and SEO-friendly WooCommerce store.',
    href: '/wordpress-development',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    desc: 'Fast-to-market, secure, and easy-to-manage Shopify stores optimized for conversions.',
    href: '/ecommerce-development',
  },
  {
    icon: Layout,
    title: 'Magento Enterprise',
    desc: 'Robust and scalable eCommerce solutions for large enterprises with complex product catalogs.',
    href: '/ecommerce-development',
  },
  {
    icon: Smartphone,
    title: 'M-Commerce Solutions',
    desc: 'Mobile-first shopping experiences and dedicated eCommerce apps for iOS and Android.',
    href: '/ecommerce-development',
  },
  {
    icon: Shield,
    title: 'Payment Integration',
    desc: 'Seamless integration with global and local payment gateways like Razorpay, Stripe, and PayPal.',
    href: '/ecommerce-development',
  },
];

const ecommerceFeatures = [
  {
    title: 'Conversion Optimized',
    desc: 'We design with a focus on UX/UI that guides users to complete purchases effortlessly.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Secure Transactions',
    desc: 'PCI-compliant security measures and SSL integration to protect your customers\' data.',
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: 'Inventory Management',
    desc: 'Advanced systems to track stock levels, manage variations, and automate reordering.',
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    title: 'SEO for eCommerce',
    desc: 'Product-level SEO optimization to ensure your items rank high on Google search results.',
    icon: <Search className="w-6 h-6" />,
  },
];

const ecommerceProcess = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'Understanding your products, target audience, and business goals to define the right platform.',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    desc: 'Creating intuitive shopping experiences that look great on all devices.',
  },
  {
    step: '03',
    title: 'Development & Integration',
    desc: 'Coding the store, integrating payments, shipping, and third-party APIs.',
  },
  {
    step: '04',
    title: 'QA & Launch',
    desc: 'Thorough testing of checkout flows and performance before going live.',
  },
];

const faqs = [
  {
    question: 'Which eCommerce platform is best for my business?',
    answer: 'The best platform depends on your budget, product volume, and technical requirements. Shopify is great for ease of use, WooCommerce for flexibility, and Magento for large-scale enterprises. We help you choose the right one.',
  },
  {
    question: 'How long does it take to build an online store?',
    answer: 'A standard eCommerce site can take 4-8 weeks, while complex custom solutions may take 3-6 months depending on the features and integrations required.',
  },
  {
    question: 'Can you integrate local payment gateways?',
    answer: 'Yes, we specialize in integrating popular Indian payment gateways like Razorpay, PayU, and CCAvenue, as well as international ones like Stripe and PayPal.',
  },
  {
    question: 'Will my eCommerce site be mobile-friendly?',
    answer: 'Absolutely. All our eCommerce websites are built with a mobile-first approach, ensuring a seamless shopping experience on smartphones and tablets.',
  },
];

export default function EcommerceDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="eCommerce Development Services in Kochi"
        description="Build high-converting online stores with Grehasoft. Expert eCommerce developers in Kerala specializing in Shopify, WooCommerce, and Custom solutions."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'eCommerce Development', href: '/ecommerce-development' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">eCommerce Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Drive Sales with a <span className="text-primary">Powerful Online Store</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a premier **eCommerce development company in Kochi**, helping businesses transform their traditional sales into digital success stories. We build scalable, secure, and feature-rich online stores.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Whether you are launching a new brand or migrating an existing store, our expert developers ensure your eCommerce platform is optimized for performance, speed, and most importantly, **conversions**.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom Storefront Design',
                  'Shopify & WooCommerce Experts',
                  'Secure Payment Integration',
                  'Mobile-First Shopping',
                  'Advanced Inventory Sync',
                  'Marketing & SEO Ready'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Store <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/ecommerce-kochi/1200/900"
                  alt="eCommerce Development Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-dark font-bold text-2xl">4.9/5</p>
                </div>
                <p className="text-xs text-text-gray font-medium uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">eCommerce Solutions</span></h2>
            <p className="text-text-gray text-lg">We provide end-to-end eCommerce services across all major platforms and custom frameworks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => (
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
                <p className="text-text-gray leading-relaxed mb-6">{service.desc}</p>
                <Link href={service.href} className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Service <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Features That <span className="text-primary">Drive Growth</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Our eCommerce solutions are packed with features designed to maximize your ROI and provide a seamless shopping experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {ecommerceFeatures.map((feature, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10">
                <img 
                  src="https://picsum.photos/seed/ecommerce-features/800/800" 
                  alt="eCommerce Features" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Development Process</span></h2>
            <p className="text-text-gray text-lg">A systematic approach to building your successful online store.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {ecommerceProcess.map((item, index) => (
              <div key={index} className="relative group">
                <div className="mb-6">
                  <span className="text-6xl font-black text-gray-100 group-hover:text-primary/10 transition-colors duration-500">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-gray-200">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
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
              <p className="text-text-gray text-lg">Answers to common questions about our eCommerce development services.</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-2xl border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
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
