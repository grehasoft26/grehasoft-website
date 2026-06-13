'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Database, Shield, Zap, Layout, CheckCircle2, ArrowRight, MessageSquare, Settings, Rocket, Server, Cpu, Globe, Monitor, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Layout,
    title: 'Responsive Design',
    desc: 'Seamless user experience across all devices, from mobile to desktop.',
  },
  {
    icon: Monitor,
    title: 'Modern UI/UX',
    desc: 'Visually stunning and intuitive interfaces that engage users.',
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    desc: 'Optimized frontend performance for quick page loads and smooth interactions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Approach',
    desc: 'Designing and developing with mobile users as a top priority.',
  },
];

const technologies = [
  {
    title: 'React.js',
    desc: 'The most popular library for building dynamic and interactive user interfaces.',
    icon: Zap,
  },
  {
    title: 'Next.js',
    desc: 'Powerful React framework for server-side rendering, static site generation, and SEO.',
    icon: Rocket,
  },
  {
    title: 'Tailwind CSS',
    desc: 'Utility-first CSS framework for rapid and consistent UI development.',
    icon: Layout,
  },
  {
    title: 'TypeScript',
    desc: 'Typed superset of JavaScript that ensures code quality and maintainability.',
    icon: Shield,
  },
];

const faqs = [
  {
    question: 'What is frontend development?',
    answer: 'Frontend development is the practice of producing HTML, CSS, and JavaScript for a website or Web Application so that a user can see and interact with them directly.',
  },
  {
    question: 'Why is responsive design important?',
    answer: 'Responsive design ensures that your website looks and functions perfectly on all devices, including smartphones, tablets, and desktops. This is crucial for user experience and SEO.',
  },
  {
    question: 'Which frontend framework do you recommend?',
    answer: 'We highly recommend React.js and Next.js for most modern web applications due to their performance, scalability, and excellent developer ecosystem.',
  },
  {
    question: 'How do you optimize frontend performance?',
    answer: 'We use various techniques including code splitting, lazy loading, image optimization, and efficient state management to ensure lightning-fast load times.',
  },
];

export default function FrontendTechPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Frontend Development Kochi"
        description="We create engaging, interactive, and high-performance user interfaces for your digital products. Expert frontend developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Technology', href: '/tech' },
          { name: 'Frontend', href: '/tech/frontend' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Visual Excellence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Interactive <span className="text-primary">User Interfaces</span> Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                The frontend is the face of your business. At Grehasoft, we focus on creating visually stunning, intuitive, and high-performance user interfaces that captivate your audience and drive engagement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Modern frontend frameworks',
                  'Responsive web design',
                  'Interactive UI components',
                  'Performance optimization',
                  'Cross-browser compatibility',
                  'Accessibility (a11y) focus'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Discuss Your UI <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/frontend-dev/1200/900"
                  alt="Frontend Development Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">100%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Responsive Design</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Frontend Capabilities</span></h2>
            <p className="text-text-gray text-lg">We use the latest tools and techniques to build interfaces that are as functional as they are beautiful.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Frontend Stack</span></h2>
            <p className="text-text-gray text-lg">We leverage modern frameworks to deliver fast, scalable, and maintainable user interfaces.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <tech.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">{tech.title}</h3>
                  <p className="text-text-gray leading-relaxed">{tech.desc}</p>
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
              <p className="text-text-gray text-lg">Answers to common questions about our frontend development services.</p>
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
      <Footer/>
    </main>
  );
}
