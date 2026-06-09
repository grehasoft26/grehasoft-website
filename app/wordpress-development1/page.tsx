'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Globe, Layout, Code, Shield, Zap, Search, Smartphone, Settings, CheckCircle2, ExternalLink, ShoppingCart, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

const wpFeatures = [
  {
    icon: Layout,
    title: 'Custom Themes',
    desc: 'Unique WordPress themes designed and developed specifically for your brand.',
  },
  {
    icon: Code,
    title: 'Plugin Development',
    desc: 'Custom plugins to add unique functionality to your WordPress website.',
  },
  {
    icon: Settings,
    title: 'Easy Management',
    desc: 'User-friendly interface for managing your content without any technical knowledge.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    desc: 'Built with search engines in mind to help you rank higher from day one.',
  },
  {
    icon: Shield,
    title: 'Secure & Robust',
    desc: 'Regular updates and security best practices to keep your site safe.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    desc: 'Optimized code and caching to ensure lightning-fast page load speeds.',
  },
];

const wpProjects = [
  {
    title: 'E-Learning Portal',
    category: 'Education',
    image: 'https://picsum.photos/seed/wp1/600/400',
    desc: 'A comprehensive LMS built with custom WordPress themes and plugins.',
  },
  {
    title: 'Real Estate Hub',
    category: 'Real Estate',
    image: 'https://picsum.photos/seed/wp2/600/400',
    desc: 'Dynamic property listing site with advanced search and filtering.',
  },
  {
    title: 'Corporate Magazine',
    category: 'Media',
    image: 'https://picsum.photos/seed/wp3/600/400',
    desc: 'High-traffic news portal optimized for performance and ad revenue.',
  },
];

export default function WordPressDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="WordPress Website Development"
        description="Custom WordPress solutions that empower you to manage your content with ease while delivering a premium experience."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
          { name: 'WordPress Development', href: '/wordpress-development' },
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
              <h2 className="text-4xl font-bold text-dark mb-6">Expert <span className="text-primary">WordPress Development</span> in Kochi</h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                WordPress is the world's most popular content management system, and for good reason. It's flexible, powerful, and easy to use. At Grehasoft, we take WordPress to the next level with custom themes and plugins.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                We don't just use off-the-shelf templates. We build custom WordPress solutions from the ground up to ensure your site is unique, fast, and secure. We focus on creating a seamless experience for both you and your users.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Custom Theme Design', 'Plugin Development', 'WooCommerce Setup', 'WP Performance Optimization', 'Security Hardening', 'Maintenance & Support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/wordpress/800/600"
                alt="WordPress Development"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-primary font-bold text-3xl">43%</p>
                <p className="text-sm text-text-gray">of Web Powered by WP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block"
            >
              Our Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-dark mb-6"
            >
              Featured <span className="text-primary">WordPress Projects</span>
            </motion.h2>
            <p className="text-text-gray text-lg">Take a look at some of the high-performance websites we've built using WordPress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wpProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed mb-6">{project.desc}</p>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">WordPress Expertise</span></h2>
            <p className="text-text-gray text-lg">Why many businesses are choosing WordPress for their digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wpFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WooCommerce Section */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <ShoppingCart className="w-4 h-4" />
                eCommerce Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Scale Your Business with <span className="text-primary">WooCommerce</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Transform your WordPress site into a powerful online store. WooCommerce provides the flexibility and features needed to sell anything, anywhere.
              </p>
              <div className="space-y-4">
                {[
                  'Custom Product Layouts',
                  'Secure Payment Gateways',
                  'Inventory & Order Management',
                  'Automated Tax & Shipping',
                  'Customer Accounts & Reviews',
                  'Advanced Analytics Integration'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/woo/800/600" 
                  alt="WooCommerce Development" 
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                <p className="font-bold text-2xl">#1</p>
                <p className="text-xs uppercase tracking-widest font-bold">eCommerce Platform</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance & Security Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <Lock className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-dark mb-2">Security Audits</h4>
                  <p className="text-text-gray text-sm">Regular scans to prevent malware and vulnerabilities.</p>
                </div>
                <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 mt-8">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-dark mb-2">Speed Optimization</h4>
                  <p className="text-text-gray text-sm">Keeping your site fast with the latest caching tech.</p>
                </div>
                <div className="p-8 bg-accent/5 rounded-3xl border border-accent/10">
                  <Settings className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-bold text-dark mb-2">Core Updates</h4>
                  <p className="text-text-gray text-sm">Safe updates for WP core, themes, and plugins.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 mt-8">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold text-dark mb-2">Daily Backups</h4>
                  <p className="text-text-gray text-sm">Off-site backups to ensure your data is always safe.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Peace of Mind</span>
              <h2 className="text-4xl font-bold text-dark mb-6">WordPress <span className="text-primary">Maintenance & Security</span></h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                A WordPress site is never "done." It requires ongoing care to stay secure and performant. Our maintenance plans take the technical burden off your shoulders.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                We monitor your site 24/7, ensuring that every update is tested and every security patch is applied immediately. With Grehasoft, you can focus on your business while we handle the technology.
              </p>
              <button className="btn-primary">View Maintenance Plans</button>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

    </main>
  );
}
