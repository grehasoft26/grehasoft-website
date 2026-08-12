'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Smartphone, Code2, Zap, Shield, Layout, BarChart, CheckCircle2, ArrowRight, MessageSquare, Cpu, Layers, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer'; 
const androidFeatures = [
  {
    title: 'Custom Android Apps',
    desc: 'Tailor-made applications designed to meet your specific business requirements and user needs.',
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: 'Kotlin & Java Expertise',
    desc: 'We use modern languages like Kotlin and robust Java to build high-performance native apps.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Material Design',
    desc: 'Following Google\'s Material Design guidelines for a consistent and intuitive user interface.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Performance Optimization',
    desc: 'Ensuring your app runs smoothly on a wide range of Android devices and OS versions.',
    icon: <Zap className="w-6 h-6" />,
  },
];

const techStack = [
  { category: 'Languages', items: ['Kotlin', 'Java'] },
  { category: 'Frameworks', items: ['Android SDK', 'Jetpack Compose'] },
  { category: 'Database', items: ['SQLite', 'Room', 'Firebase'] },
  { category: 'Tools', items: ['Android Studio', 'Gradle', 'Git'] },
];

const faqs = [
  {
    question: 'Why choose native Android development?',
    answer: 'Native development offers the best performance, full access to device features (like camera and GPS), and a seamless user experience tailored specifically for Android.',
  },
  {
    question: 'Will my app work on all Android devices?',
    answer: 'We test on a wide variety of devices and screen sizes to ensure maximum compatibility across the fragmented Android ecosystem.',
  },
  {
    question: 'Do you help with Play Store submission?',
    answer: 'Yes, we handle the entire process of preparing and submitting your app to the Google Play Store, ensuring it meets all requirements.',
  },
  {
    question: 'Can you integrate third-party APIs?',
    answer: 'Absolutely. We have extensive experience integrating various APIs for payments, social media, maps, and more.',
  },
];

export default function AndroidAppDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Android App Development Kochi"
        description="Expert Android app development services in Kerala. We build high-performance, custom native Android applications using Kotlin and Java."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile Apps', href: '/mobile-apps' },
          { name: 'Android Development', href: '/mobile-apps/android' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Native Android Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Empower Your Business with <span className="text-primary">Native Android Apps</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **Android app development company in Kochi**, specializing in building robust and scalable applications for the world's most popular mobile platform.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our team of expert developers uses the latest technologies like **Kotlin and Jetpack Compose** to create apps that are not only visually stunning but also highly functional and secure.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Custom Native Android Development',
                  'Material Design Implementation',
                  'Performance & Security Audits',
                  'Play Store Deployment & Management',
                  'Ongoing Support & Maintenance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Android Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/android-kochi/1200/900"
                  alt="Android App Development Kerala"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <p className="text-primary font-bold text-4xl mb-2">50+</p>
                <p className="text-sm text-text-gray font-medium uppercase tracking-wider">Android Apps Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Android Services</span></h2>
            <p className="text-text-gray text-lg">Comprehensive solutions for all your Android development needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {androidFeatures.map((feature, index) => (
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
            <p className="text-text-gray text-lg">We use the most advanced tools and frameworks to build high-quality Android apps.</p>
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
              <p className="text-text-gray text-lg">Common questions about our Android development services.</p>
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
      
    </main>
  );
}
