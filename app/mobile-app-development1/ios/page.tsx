'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Tablet, Code2, Zap, Shield, Layout, BarChart, CheckCircle2, ArrowRight, MessageSquare, Cpu, Layers, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const iosFeatures = [
  {
    title: 'Custom iOS Apps',
    desc: 'Bespoke iPhone and iPad applications designed to meet your specific business requirements and user needs.',
    icon: <Tablet className="w-6 h-6" />,
  },
  {
    title: 'Swift & Objective-C',
    desc: 'We use modern Swift and robust Objective-C to build high-performance native iOS apps.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Human Interface Design',
    desc: 'Following Apple\'s Human Interface Guidelines for a premium and intuitive user experience.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Performance Optimization',
    desc: 'Ensuring your app runs smoothly on all iOS devices and versions, from iPhone to iPad.',
    icon: <Zap className="w-6 h-6" />,
  },
];

const techStack = [
  { category: 'Languages', items: ['Swift', 'Objective-C'] },
  { category: 'Frameworks', items: ['iOS SDK', 'SwiftUI', 'UIKit'] },
  { category: 'Database', items: ['Core Data', 'Realm', 'Firebase'] },
  { category: 'Tools', items: ['Xcode', 'CocoaPods', 'TestFlight'] },
];

const faqs = [
  {
    question: 'Why choose native iOS development?',
    answer: 'Native development offers the best performance, full access to device features (like camera and GPS), and a premium user experience tailored specifically for Apple devices.',
  },
  {
    question: 'Will my app work on iPhone and iPad?',
    answer: 'Yes, we design and develop apps that are fully responsive and optimized for both iPhone and iPad screen sizes.',
  },
  {
    question: 'Do you help with App Store submission?',
    answer: 'Yes, we handle the entire process of preparing and submitting your app to the Apple App Store, ensuring it meets all requirements.',
  },
  {
    question: 'Can you integrate third-party APIs?',
    answer: 'Absolutely. We have extensive experience integrating various APIs for payments, social media, maps, and more.',
  },
];

export default function IosAppDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="iOS App Development Kochi"
        description="Expert iOS app development services in Kerala. We build high-performance, custom native iPhone and iPad applications using Swift."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile Apps', href: '/mobile-apps' },
          { name: 'iOS Development', href: '/mobile-apps/ios' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Native iOS Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Empower Your Business with <span className="text-primary">Native iOS Apps</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **iOS app development company in Kochi**, specializing in building premium and high-performance applications for the Apple ecosystem.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our team of expert developers uses the latest technologies like **Swift and SwiftUI** to create apps that are not only visually stunning but also highly functional and secure.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Custom Native iOS Development',
                  'Human Interface Design Implementation',
                  'Performance & Security Audits',
                  'App Store Deployment & Management',
                  'Ongoing Support & Maintenance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your iOS Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/ios-kochi/1200/900"
                  alt="iOS App Development Kerala"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <p className="text-primary font-bold text-4xl mb-2">40+</p>
                <p className="text-sm text-text-gray font-medium uppercase tracking-wider">iOS Apps Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">iOS Services</span></h2>
            <p className="text-text-gray text-lg">Comprehensive solutions for all your iOS development needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iosFeatures.map((feature, index) => (
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
            <p className="text-text-gray text-lg">We use the most advanced tools and frameworks to build high-quality iOS apps.</p>
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
              <p className="text-text-gray text-lg">Common questions about our iOS development services.</p>
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
