'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Code, Cpu, Database, Shield, Zap, Layout, Server, Settings, CheckCircle2, ArrowRight, MessageSquare, Sparkles, Layers, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const customFeatures = [
  {
    icon: Code,
    title: 'Tailor-Made Solutions',
    desc: 'Software built from scratch to meet your unique business requirements and operational workflows.',
  },
  {
    icon: Database,
    title: 'Robust Architecture',
    desc: 'Scalable and secure architectures that grow with your business and handle high traffic seamlessly.',
  },
  {
    icon: Cpu,
    title: 'Modern Tech Stack',
    desc: 'Using the latest technologies like React, Node.js, Python, and cloud-native tools for optimal performance.',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Built with industry-standard security best practices to protect your sensitive data and user privacy.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    desc: 'Optimized code and cloud infrastructure for lightning-fast speeds and high availability.',
  },
  {
    icon: Settings,
    title: 'Full Control',
    desc: 'You own the source code and have full control over your digital asset with no vendor lock-in.',
  },
];

const customProcess = [
  {
    step: '01',
    title: 'Requirements Analysis',
    desc: 'In-depth consultation to understand your business logic and technical requirements.',
  },
  {
    step: '02',
    title: 'Architecture Design',
    desc: 'Planning the system architecture, database schema, and technology stack.',
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: 'Iterative development with regular updates and feedback loops to ensure alignment.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    desc: 'Rigorous automated and manual testing to ensure a bug-free and reliable solution.',
  },
  {
    step: '05',
    title: 'Deployment & Scaling',
    desc: 'Launching the solution on secure cloud infrastructure with ongoing monitoring.',
  },
];

const faqs = [
  {
    question: 'Why choose custom development over off-the-shelf software?',
    answer: 'Custom development provides a solution tailored exactly to your business needs, offering better scalability, integration, and long-term cost-effectiveness without unnecessary features.',
  },
  {
    question: 'Who owns the source code of the custom software?',
    answer: 'You do. Once the project is completed and paid for, you own the full intellectual property and source code of the software we build for you.',
  },
  {
    question: 'How do you ensure the security of custom applications?',
    answer: 'We follow industry-standard security practices, including data encryption, secure authentication, regular security audits, and OWASP guidelines.',
  },
  {
    question: 'Can you integrate custom software with our existing systems?',
    answer: 'Yes, we specialize in building custom APIs and integrations to ensure your new software works seamlessly with your current tools and databases.',
  },
];

export default function CustomDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Custom Software Development Kochi"
        description="Building unique, high-performance digital solutions that solve your specific business challenges. Expert custom developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
          { name: 'Custom Development', href: '/custom-development' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Bespoke Solutions</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Innovative <span className="text-primary">Custom Development</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Sometimes off-the-shelf solutions just don't cut it. That's where custom development comes in. At Grehasoft, we specialize in building tailor-made software that fits your business like a glove.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our team of expert developers works closely with you to understand your unique challenges and goals. We then design and build a solution that is perfectly aligned with your business processes and vision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom Web Applications',
                  'Enterprise Software Solutions',
                  'Scalable SaaS Platforms',
                  'Secure API Development',
                  'Cloud-Native Architecture',
                  'Database Design & Optimization'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Custom Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/custom-dev-kochi/1200/900"
                  alt="Custom Development Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">100%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Custom Code</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Why Choose <span className="text-primary">Custom Development?</span></h2>
            <p className="text-text-gray text-lg">We build solutions that are specifically designed to solve your unique business challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-text-gray leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Build Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Development Journey</span></h2>
            <p className="text-gray-400 text-lg">A structured and agile approach to building high-quality custom software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {customProcess.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
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
              <p className="text-text-gray text-lg">Answers to common questions about our custom development services.</p>
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
