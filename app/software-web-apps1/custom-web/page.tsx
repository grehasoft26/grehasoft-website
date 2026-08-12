'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Code, Globe, Database, Cpu, Shield, Zap, Layout, Server, CheckCircle2, ArrowRight, MessageSquare, Settings, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Layout,
    title: 'Custom UI/UX',
    desc: 'Tailored user interfaces designed for optimal user experience and engagement.',
  },
  {
    icon: Database,
    title: 'Scalable Architecture',
    desc: 'Built on robust frameworks that grow with your business needs.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    desc: 'Enterprise-grade security measures to protect your data and users.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    desc: 'Optimized for speed and efficiency across all devices and platforms.',
  },
];

const technologies = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Laravel', 'Go'] },
  { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Azure', 'Docker', 'Kubernetes'] },
];

const faqs = [
  {
    question: 'How long does it take to build a custom web application?',
    answer: 'The timeline varies based on complexity. A simple MVP might take 8-12 weeks, while a complex enterprise solution can take 6 months or more. We provide a detailed timeline after the initial discovery phase.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern stacks including React/Next.js for frontend, and Node.js, Python, or Laravel for backend. We choose the best technology based on your specific project requirements.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Yes, we have extensive experience in API integrations. We can connect your new web application with existing CRMs, ERPs, payment gateways, and other third-party services.',
  },
  {
    question: 'Do you provide maintenance and support after launch?',
    answer: 'Absolutely. We offer various support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally as your business grows.',
  },
];

export default function CustomWebApps() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Custom Web Applications"
        description="We build powerful, scalable, and secure web applications tailored to your unique business requirements."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'Custom Web Apps', href: '/software/custom-web' },
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
              <h2 className="text-4xl font-bold text-dark mb-6">Tailored <span className="text-primary">Web Solutions</span></h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Our custom web application development services are designed to solve complex business challenges. We don't just build websites; we create powerful digital tools that streamline your operations and drive growth.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'End-to-end development from concept to launch',
                  'Modern tech stack (React, Node.js, Python, etc.)',
                  'Seamless API integrations and third-party connections',
                  'Responsive design for all screen sizes',
                  'Ongoing support and maintenance'
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
              <img
                src="https://picsum.photos/seed/software/800/600"
                alt="Custom Web Apps"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
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
            <p className="text-text-gray text-lg">We use the latest and most reliable technologies to build high-performance web applications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((techGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <h3 className="text-xl font-bold text-dark mb-6 border-b border-primary/20 pb-4">{techGroup.category}</h3>
                <ul className="space-y-3">
                  {techGroup.techs.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-gray">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {tech}
                    </li>
                  ))}
                </ul>
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
              <p className="text-text-gray text-lg">Everything you need to know about our custom web application development process.</p>
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
     
    </main>
  );
}
