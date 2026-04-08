'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Smartphone, Tablet, Zap, Shield, Layout, BarChart, CheckCircle2, ArrowRight, MessageSquare, Code2, Globe, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const mobileServices = [
  {
    title: 'Android App Development',
    desc: 'Custom Android applications built with Kotlin and Java, optimized for performance and scalability on all devices.',
    icon: <Smartphone className="w-8 h-8" />,
    href: '/mobile-apps/android',
  },
  {
    title: 'iOS App Development',
    desc: 'High-end iOS applications for iPhone and iPad using Swift, following Apple\'s strict design and quality guidelines.',
    icon: <Tablet className="w-8 h-8" />,
    href: '/mobile-apps/ios',
  },
  {
    title: 'Hybrid App Development',
    desc: 'Cost-effective cross-platform apps using Flutter and React Native that work seamlessly on both Android and iOS.',
    icon: <Zap className="w-8 h-8" />,
    href: '/mobile-apps/hybrid',
  },
  {
    title: 'Progressive Web Apps (PWA)',
    desc: 'Web-based applications that offer an app-like experience, including offline access and push notifications.',
    icon: <Globe className="w-8 h-8" />,
    href: '/mobile-apps/pwa',
  },
];

const mobileFeatures = [
  {
    title: 'User-Centric UI/UX',
    desc: 'Intuitive and engaging interfaces designed specifically for mobile users.',
  },
  {
    title: 'High Performance',
    desc: 'Optimized code and architecture for smooth animations and fast response times.',
  },
  {
    title: 'Secure & Scalable',
    desc: 'Built with industry-standard security protocols and ready to grow with your user base.',
  },
  {
    title: 'API Integration',
    desc: 'Seamless integration with third-party services, social media, and payment gateways.',
  },
];

const devProcess = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'We define the app\'s purpose, target audience, and key features to create a roadmap.',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    desc: 'Creating wireframes and high-fidelity designs that focus on user engagement.',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Our expert developers bring the designs to life using the latest mobile technologies.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    desc: 'Rigorous testing on multiple devices to ensure a bug-free and smooth experience.',
  },
  {
    step: '05',
    title: 'Deployment & Support',
    desc: 'Launching your app on the App Store/Play Store and providing ongoing maintenance.',
  },
];

const faqs = [
  {
    question: 'How much does it cost to develop a mobile app?',
    answer: 'The cost depends on the complexity, features, and platform (Android, iOS, or both). We provide custom quotes based on your specific requirements.',
  },
  {
    question: 'How long does it take to build a mobile app?',
    answer: 'A simple app can take 2-3 months, while more complex applications with backend integrations can take 6 months or more.',
  },
  {
    question: 'Will you help with App Store and Play Store submission?',
    answer: 'Yes, we handle the entire submission process, ensuring your app meets all the guidelines for a successful launch.',
  },
  {
    question: 'Do you provide maintenance after the app is launched?',
    answer: 'Absolutely. We offer various maintenance packages to keep your app updated, secure, and compatible with the latest OS versions.',
  },
];

export default function MobileAppDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Mobile App Development Kochi"
        description="Top-rated mobile app development company in Kerala. We build custom Android, iOS, and Hybrid apps that drive business growth."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile App Development', href: '/mobile-apps' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Mobile Innovation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Building Next-Gen <span className="text-primary">Mobile Experiences</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a premier **mobile app development company in Kochi**, specializing in creating high-performance, user-centric applications for businesses of all sizes.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From **Android app development in Kerala** to high-end **iOS app development in Kochi**, we leverage the latest technologies like Flutter, React Native, and Swift to deliver apps that stand out in the crowded marketplace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Android & iOS Development',
                  'Cross-Platform Solutions',
                  'Custom UI/UX Design',
                  'Backend API Integration',
                  'App Store Optimization',
                  'Post-Launch Maintenance'
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
                  src="https://picsum.photos/seed/mobile-kochi/1200/900"
                  alt="Mobile App Development Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden xl:block z-20">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
                    <Code2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Mobile App Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a full spectrum of mobile development services to meet your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mobileServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                    <p className="text-text-gray leading-relaxed mb-6">{service.desc}</p>
                    <Link href={service.href} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {mobileFeatures.map((feature, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-dark">{feature.title}</h4>
                    <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Quality First</span>
              <h2 className="text-4xl font-bold text-dark mb-6">Features That <span className="text-primary">Drive Engagement</span></h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                We focus on building apps that users love to use. Our development process prioritizes performance, security, and a seamless user experience.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-lg font-medium mb-4 italic">"Grehasoft transformed our vision into a stunning mobile app that has significantly increased our customer engagement."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                  <div>
                    <p className="font-bold">Happy Client</p>
                    <p className="text-sm opacity-80">CEO, Tech Startup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary">Development Process</span></h2>
            <p className="text-gray-400 text-lg">A transparent and efficient workflow to bring your app to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {devProcess.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 z-0">{step.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-primary">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
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
              <p className="text-text-gray text-lg">Everything you need to know about our mobile app development services.</p>
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
