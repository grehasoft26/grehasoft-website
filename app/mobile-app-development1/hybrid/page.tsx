'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Zap, Code2, Smartphone, Tablet, Layers, BarChart, CheckCircle2, ArrowRight, MessageSquare, Cpu, Settings, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const hybridFeatures = [
  {
    title: 'Cross-Platform Efficiency',
    desc: 'Build once and deploy on both Android and iOS, significantly reducing development time and costs.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Native-Like Performance',
    desc: 'Using advanced frameworks like Flutter and React Native to deliver smooth, high-performance experiences.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: 'Single Codebase',
    desc: 'Maintain one set of code for all platforms, making updates and bug fixes faster and more consistent.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'Wider Reach',
    desc: 'Launch your app on multiple platforms simultaneously to reach a larger audience from day one.',
    icon: <Globe className="w-6 h-6" />,
  },
];

const techStack = [
  { category: 'Frameworks', items: ['Flutter', 'React Native', 'Ionic'] },
  { category: 'Languages', items: ['Dart', 'JavaScript', 'TypeScript'] },
  { category: 'State Management', items: ['Redux', 'Provider', 'Riverpod'] },
  { category: 'Database', items: ['SQLite', 'Hive', 'Firebase'] },
];

const faqs = [
  {
    question: 'What is hybrid app development?',
    answer: 'Hybrid app development involves creating a single application that can run on multiple platforms (Android and iOS) using a single codebase, typically using frameworks like Flutter or React Native.',
  },
  {
    question: 'Is hybrid development better than native?',
    answer: 'It depends on your goals. Hybrid is more cost-effective and faster to market, while native offers the absolute best performance and deepest integration with device features.',
  },
  {
    question: 'Will a hybrid app feel like a native app?',
    answer: 'Yes, modern frameworks like Flutter and React Native allow us to build apps that are virtually indistinguishable from native apps in terms of look, feel, and performance.',
  },
  {
    question: 'Can I migrate my hybrid app to native later?',
    answer: 'While it\'s possible, it usually involves a complete rewrite. We help you choose the right approach from the start to avoid such issues.',
  },
];

export default function HybridAppDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Hybrid App Development Kochi"
        description="Expert cross-platform mobile app development services in Kerala. We build high-performance hybrid apps using Flutter and React Native."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile Apps', href: '/mobile-apps' },
          { name: 'Hybrid Development', href: '/mobile-apps/hybrid' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Cross-Platform Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                One Codebase, <span className="text-primary">Infinite Possibilities</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **hybrid app development company in Kochi**, specializing in building high-performance cross-platform applications that work seamlessly on both Android and iOS.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our team of expert developers leverages the power of **Flutter and React Native** to deliver apps that are fast, beautiful, and cost-effective, helping you reach your audience on any device.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Flutter App Development',
                  'React Native App Development',
                  'Cross-Platform UI/UX Design',
                  'Single Codebase Maintenance',
                  'Faster Time-to-Market Solutions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Hybrid Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/hybrid-kochi/1200/900"
                  alt="Hybrid App Development Kerala"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <p className="text-primary font-bold text-4xl mb-2">60+</p>
                <p className="text-sm text-text-gray font-medium uppercase tracking-wider">Hybrid Apps Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Hybrid Services</span></h2>
            <p className="text-text-gray text-lg">Efficient and scalable solutions for cross-platform app development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hybridFeatures.map((feature, index) => (
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
            <p className="text-text-gray text-lg">We use the most advanced frameworks to build high-quality hybrid apps.</p>
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
              <p className="text-text-gray text-lg">Common questions about our hybrid development services.</p>
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
