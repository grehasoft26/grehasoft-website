'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Globe, Zap, Smartphone, Tablet, Layers, BarChart, CheckCircle2, ArrowRight, MessageSquare, Cpu, Settings, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const pwaFeatures = [
  {
    title: 'Offline Access',
    desc: 'Users can access your app even without an internet connection, thanks to advanced service workers.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Installable',
    desc: 'Users can add your PWA to their home screen without going through an app store.',
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: 'Push Notifications',
    desc: 'Re-engage your users with timely push notifications, just like a native mobile app.',
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: 'Fast & Reliable',
    desc: 'Optimized for speed and reliability, ensuring a smooth experience even on slow networks.',
    icon: <Shield className="w-6 h-6" />,
  },
];

const techStack = [
  { category: 'Frameworks', items: ['Next.js', 'React', 'Vue.js'] },
  { category: 'Core Tech', items: ['Service Workers', 'Web App Manifest', 'HTTPS'] },
  { category: 'Storage', items: ['IndexedDB', 'Cache API', 'Local Storage'] },
  { category: 'Tools', items: ['Lighthouse', 'Workbox', 'PWA Builder'] },
];

const faqs = [
  {
    question: 'What is a Progressive Web App (PWA)?',
    answer: 'A PWA is a type of application software delivered through the web, built using common web technologies including HTML, CSS, and JavaScript. It is intended to work on any platform that uses a standards-compliant browser.',
  },
  {
    question: 'How is a PWA different from a native app?',
    answer: 'PWAs are accessed through a browser and don\'t require installation from an app store. They are generally faster to develop and easier to maintain than native apps.',
  },
  {
    question: 'Do PWAs work on iOS?',
    answer: 'Yes, modern versions of iOS support PWAs, although some features like push notifications have historically had more limited support compared to Android.',
  },
  {
    question: 'Are PWAs secure?',
    answer: 'Yes, PWAs are required to be served over HTTPS, ensuring that all data transmitted between the user and the server is encrypted and secure.',
  },
];

export default function PwaDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="PWA Development Kochi"
        description="Expert Progressive Web App development services in Kerala. We build fast, reliable, and installable PWAs that offer a native app experience."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile Apps', href: '/mobile-apps' },
          { name: 'PWA Development', href: '/mobile-apps/pwa' },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Web & Mobile Fusion</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                The Best of Both Worlds: <span className="text-primary">Progressive Web Apps</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **PWA development company in Kochi**, specializing in building web applications that offer a seamless, app-like experience on any device.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our team of expert developers uses the latest web technologies to create **Progressive Web Apps** that are fast, reliable, and engaging, helping you reach your audience without the friction of app store downloads.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Custom PWA Development',
                  'Offline Capability Implementation',
                  'Push Notification Integration',
                  'Web App Manifest Configuration',
                  'Service Worker Optimization'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your PWA Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/pwa-kochi/1200/900"
                  alt="PWA Development Kerala"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <p className="text-primary font-bold text-4xl mb-2">30+</p>
                <p className="text-sm text-text-gray font-medium uppercase tracking-wider">PWAs Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">PWA Services</span></h2>
            <p className="text-text-gray text-lg">Modern solutions for a faster and more engaging web experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pwaFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Technology Stack</span></h2>
            <p className="text-text-gray text-lg">We use the most advanced web technologies to build high-quality PWAs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="text-xl font-bold text-dark mb-6 border-b border-primary/20 pb-4">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-text-gray">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              <p className="text-text-gray text-lg">Common questions about our PWA development services.</p>
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
      <Footer />
    </main>
  );
}
