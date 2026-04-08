'use client'

import { motion } from 'motion/react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { ShoppingCart, Layout, Shield, Zap, Heart, Globe, Settings, Smartphone, RefreshCw, BarChart3, Users, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';


const features = [
  {
    icon: ShoppingCart,
    title: 'Custom Store Design',
    desc: 'Bespoke WooCommerce themes that reflect your brand identity and drive sales.',
  },
  {
    icon: Layout,
    title: 'Product Management',
    desc: 'Intuitive product catalogs, inventory tracking, and variation management.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    desc: 'Integration with major payment gateways like Stripe, PayPal, and more.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    desc: 'Optimized store speed for better user experience and higher conversion rates.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    desc: 'Seamless shopping experience across all devices, from mobile to desktop.',
  },
  {
    icon: Settings,
    title: 'Plugin Integration',
    desc: 'Extending store functionality with custom or popular WooCommerce plugins.',
  },
];

const services = [
  {
    title: 'WooCommerce Development',
    desc: 'End-to-end store setup and development using the latest WooCommerce standards.',
    icon: Settings,
  },
  {
    title: 'Custom Theme Design',
    desc: 'Unique, high-converting designs tailored specifically for your target audience.',
    icon: Layout,
  },
  {
    title: 'WooCommerce Migration',
    desc: 'Seamlessly migrate your existing store from Shopify, Magento, or other platforms.',
    icon: RefreshCw,
  },
  {
    title: 'Plugin Customization',
    desc: 'Modifying existing plugins or building custom ones to meet your specific needs.',
    icon: Zap,
  },
  {
    title: 'Store Optimization',
    desc: 'Improving speed, security, and SEO to maximize your store\'s performance.',
    icon: BarChart3,
  },
  {
    title: 'Support & Maintenance',
    desc: 'Ongoing technical support and regular updates to keep your store running smoothly.',
    icon: Users,
  },
];

const processSteps = [
  {
    title: 'Store Strategy',
    desc: 'Planning your store structure, product categories, and customer journey.',
  },
  {
    title: 'Design & UX',
    desc: 'Creating high-converting store layouts and user interfaces.',
  },
  {
    title: 'Development',
    desc: 'Building your WooCommerce store with clean, scalable code.',
  },
  {
    title: 'Payment & Shipping',
    desc: 'Configuring secure payment gateways and efficient shipping methods.',
  },
  {
    title: 'Testing & Launch',
    desc: 'Rigorous testing for functionality, security, and performance before launch.',
  },
];

const faqs = [
  {
    q: 'Why should I choose WooCommerce for my online store?',
    a: 'WooCommerce is highly flexible, cost-effective, and built on WordPress, giving you complete control over your store\'s design and functionality.',
  },
  {
    q: 'Can you migrate my existing store to WooCommerce?',
    a: 'Yes, we specialize in migrating stores from platforms like Shopify, Magento, and OpenCart to WooCommerce while preserving your data.',
  },
  {
    q: 'Is WooCommerce secure for online payments?',
    a: 'Absolutely. When properly configured with SSL and secure payment gateways like Stripe or PayPal, WooCommerce is extremely secure.',
  },
  {
    q: 'How long does it take to build a WooCommerce store?',
    a: 'A basic store can take 2-4 weeks, while complex custom solutions may take 8-12 weeks depending on your specific requirements.',
  },
];

export default function WooCommerceStores() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="WooCommerce Store Development"
        description="Build a powerful, scalable, and high-converting online store with WooCommerce and WordPress."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'eCommerce', href: '/ecommerce-development' },
          { name: 'WooCommerce', href: '/ecommerce-development/woocommerce' },
        ]}
      />

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Expert <span className="text-primary">WooCommerce</span> Solutions</h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                WooCommerce is the world's most popular open-source eCommerce platform, built on WordPress. At Grehasoft, we leverage the flexibility of WooCommerce to create **custom, high-performance online stores** that help businesses grow.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From simple product stores to complex subscription-based platforms, our WooCommerce experts deliver solutions that are not only visually stunning but also technically robust. We focus on **user experience, security, and conversion optimization** to ensure your store's success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Custom Theme Design', 'Payment Gateway Integration', 'Inventory Management', 'SEO-Friendly Structure', 'Mobile-First Design', 'Scalable Architecture'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/woocommerce-dev/800/600"
                alt="WooCommerce Development"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Key <span className="text-primary">Benefits</span> of Our WooCommerce Stores</h2>
            <p className="text-text-gray text-lg">Experience the power of a fully customized eCommerce solution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                Our WooCommerce <span className="text-primary">Services</span>
              </h2>
              <p className="text-text-gray text-lg md:text-xl">
                Comprehensive solutions for your online business needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Card Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
                
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-text-gray leading-relaxed text-base">
                  {service.desc}
                </p>

                <div className="mt-8 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Development Process</span></h2>
            <p className="text-text-gray text-lg">A systematic approach to building high-quality WooCommerce stores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 h-full shadow-sm">
                  <div className="text-4xl font-bold text-primary/20 mb-4">0{index + 1}</div>
                  <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-text-gray text-sm">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-200 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-text-gray text-lg">Common queries about our WooCommerce development services.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center text-primary">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark mb-3">{faq.q}</h3>
                    <p className="text-text-gray leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl -z-10" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose <span className="text-primary">Grehasoft</span> for WooCommerce?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Proven Track Record', desc: 'Successfully launched 100+ WooCommerce stores across various industries.' },
                  { title: 'Expert Developers', desc: 'Certified WordPress and WooCommerce experts with years of experience.' },
                  { title: 'Conversion Focused', desc: 'We don\'t just build stores; we build high-converting sales machines.' },
                  { title: 'End-to-End Support', desc: 'From strategy to post-launch maintenance, we are with you every step.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/ecommerce-success/800/800"
                alt="WooCommerce Success"
                className="rounded-[3rem] shadow-2xl border-8 border-white/5"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>
    </main>
  );
}
