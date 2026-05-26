'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Palette, Layout, Image as ImageIcon, PenTool, Layers, Monitor, CheckCircle2, ArrowRight, MessageSquare, Sparkles, Brush, Shapes, Target, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const logoStyles = [
  {
    icon: Palette,
    title: 'Minimalist Logos',
    desc: 'Clean, simple, and modern designs that convey your brand\'s essence with minimal elements.',
  },
  {
    icon: Shapes,
    title: 'Geometric Logos',
    desc: 'Using shapes and patterns to create a structured and balanced visual identity.',
  },
  {
    icon: Brush,
    title: 'Hand-Drawn Logos',
    desc: 'Custom illustrations and lettering that add a personal and organic touch to your brand.',
  },
  {
    icon: Layers,
    title: '3D & Gradient Logos',
    desc: 'Dynamic and visually engaging designs that use depth and color transitions to stand out.',
  },
  {
    icon: ImageIcon,
    title: 'Pictorial Logos',
    desc: 'Using a specific icon or symbol to represent your brand and its values.',
  },
  {
    icon: PenTool,
    title: 'Typography Logos',
    desc: 'Focusing on custom fonts and lettering to create a unique and recognizable brand name.',
  },
];

const logoProcess = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Understanding your brand values, target audience, and design preferences.',
  },
  {
    step: '02',
    title: 'Sketching',
    desc: 'Developing initial concepts and exploring different creative directions.',
  },
  {
    step: '03',
    title: 'Digitalization',
    desc: 'Transforming the best sketches into high-quality digital designs.',
  },
  {
    step: '04',
    title: 'Feedback',
    desc: 'Reviewing the concepts with you and making necessary refinements.',
  },
  {
    step: '05',
    title: 'Finalization',
    desc: 'Providing the final logo in all necessary formats for print and web.',
  },
];

const faqs = [
  {
    question: 'How many logo concepts will I receive?',
    answer: 'Depending on the package you choose, we typically provide 3-5 initial logo concepts for you to choose from.',
  },
  {
    question: 'Can I request revisions?',
    answer: 'Yes, we offer multiple rounds of revisions to ensure you are completely satisfied with the final design.',
  },
  {
    question: 'What file formats will I receive?',
    answer: 'We provide all necessary formats, including vector files (AI, EPS, PDF) and web-ready formats (PNG, JPG, SVG).',
  },
  {
    question: 'How long does the logo design process take?',
    answer: 'The process typically takes 1-2 weeks from the initial briefing to the final delivery of assets.',
  },
];

export default function LogoDesign() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Logo Design Kochi"
        description="Professional logo design services in Kerala. We create unique and memorable logos that serve as the foundation of your brand."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Branding', href: '/branding' },
          { name: 'Logo Design', href: '/branding/logo-design' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Brand Identity Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                A Logo That Defines Your <span className="text-primary">Brand Identity</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **logo design agency in Kochi**, specializing in creating unique and impactful brand marks. We believe that a great logo is the cornerstone of a successful brand identity.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our **logo design services in Kerala** are focused on capturing the essence of your business in a single, memorable mark. We combine strategic thinking with creative excellence to deliver logos that stand the test of time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom Logo Concepts',
                  'Multiple Design Revisions',
                  'High-Resolution Vector Files',
                  'Brand Color Palette',
                  'Typography Selection',
                  'Full Copyright Ownership'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Your Custom Logo <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/logo-design-kochi/1200/900"
                  alt="Logo Design Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">100%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Unique Designs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Styles Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Logo Styles</span></h2>
            <p className="text-text-gray text-lg">We offer a variety of logo styles to match your brand\'s personality and industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoStyles.map((style, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <style.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{style.title}</h3>
                <p className="text-text-gray leading-relaxed">{style.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Creative Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Logo Journey</span></h2>
            <p className="text-gray-400 text-lg">A structured approach to creating a logo that perfectly represents your brand.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {logoProcess.map((step, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our logo design services.</p>
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
      <Footer/>
    </main>
  );
}
