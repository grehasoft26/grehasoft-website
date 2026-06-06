'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Database, Shield, Zap, Layout, CheckCircle2, ArrowRight, MessageSquare, Settings, Rocket, Server, Cpu, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Database,
    title: 'Database Management',
    desc: 'Expertise in SQL and NoSQL databases for efficient data storage and retrieval.',
  },
  {
    icon: Shield,
    title: 'Secure APIs',
    desc: 'Developing robust and secure RESTful and GraphQL APIs for seamless communication.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    desc: 'Optimized server-side logic for fast response times and high concurrency.',
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    desc: 'Deployment and management on leading cloud platforms like AWS and Azure.',
  },
];

const technologies = [
  {
    title: 'Node.js',
    desc: 'Fast, scalable server-side JavaScript for real-time applications and microservices.',
    icon: Zap,
  },
  {
    title: 'Python (Django/FastAPI)',
    desc: 'Powerful and flexible frameworks for rapid development and data-heavy applications.',
    icon: Cpu,
  },
  {
    title: 'PHP (Laravel)',
    desc: 'Elegant and feature-rich framework for building secure and scalable web applications.',
    icon: Globe,
  },
  {
    title: 'PostgreSQL / MongoDB',
    desc: 'Reliable relational and document-based databases for complex data structures.',
    icon: Database,
  },
];

const faqs = [
  {
    question: 'What is backend development?',
    answer: 'Backend development refers to the server-side of an application. it focuses on databases, scripting, and the architecture of websites. It handles the logic, database interactions, and user authentication that power the frontend.',
  },
  {
    question: 'Which backend technology is best for my project?',
    answer: 'The choice depends on your project requirements. Node.js is great for real-time apps, Python is excellent for AI and data processing, and Laravel is perfect for robust enterprise web applications. We help you choose the right stack.',
  },
  {
    question: 'How do you ensure backend security?',
    answer: 'We implement multiple layers of security, including data encryption, secure API authentication (JWT/OAuth), protection against SQL injection and XSS, and regular security audits of the codebase.',
  },
  {
    question: 'Can you scale the backend as my user base grows?',
    answer: 'Yes, we design our backends with scalability in mind. We use microservices architecture and cloud-native tools that allow your system to handle increasing traffic by scaling resources horizontally or vertically.',
  },
];

export default function BackendTechPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Backend Development Kochi"
        description="We build robust, scalable, and secure server-side solutions that power your digital products. Expert backend developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Technology', href: '/tech' },
          { name: 'Backend', href: '/tech/backend' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Engine of Your App</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Robust <span className="text-primary">Backend Architecture</span> Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Our backend development services focus on creating the engine that drives your application. We build high-performance, secure, and scalable server-side systems that ensure your business logic is executed flawlessly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Scalable server-side logic',
                  'Secure API development',
                  'Database design & optimization',
                  'Real-time data processing',
                  'Cloud-native development',
                  'Microservices architecture'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Talk to an Expert <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/backend-dev/1200/900"
                  alt="Backend Development Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">99.9%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Uptime Guarantee</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Backend Capabilities</span></h2>
            <p className="text-text-gray text-lg">We provide end-to-end server-side solutions to power your web and mobile applications.</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Tech Stack</span></h2>
            <p className="text-text-gray text-lg">We use industry-leading technologies to build fast, secure, and reliable backends.</p>
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
              <p className="text-text-gray text-lg">Answers to common questions about our backend development services.</p>
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
