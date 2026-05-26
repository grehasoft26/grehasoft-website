'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Layout, Palette, CheckCircle2, ArrowRight, MessageSquare, FileText, Layers, Sparkles, Printer, MousePointer2 } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const designFeatures = [
  {
    icon: FileText,
    title: 'Custom Brochure Design',
    desc: 'Unique layouts that tell your brand story effectively, from bi-folds to complex multi-page brochures.',
  },
  {
    icon: Sparkles,
    title: 'Creative Flyer Design',
    desc: 'Eye-catching flyers designed to grab attention and drive action for your events or promotions.',
  },
  {
    icon: Palette,
    title: 'Brand Alignment',
    desc: 'Ensuring every print material perfectly aligns with your brand colors, fonts, and overall identity.',
  },
  {
    icon: Printer,
    title: 'Print-Ready Files',
    desc: 'We provide high-resolution, print-ready files with correct bleeds and margins for professional printing.',
  },
  {
    icon: Layers,
    title: 'Multiple Concepts',
    desc: 'We provide various design directions to choose from, ensuring the final result is exactly what you need.',
  },
  {
    icon: MousePointer2,
    title: 'Digital Versions',
    desc: 'Optimized PDF versions of your brochures and flyers for easy sharing via email or on your website.',
  },
];

const designProcess = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We discuss your goals, target audience, and the key message you want to convey.',
  },
  {
    step: '02',
    title: 'Content Strategy',
    desc: 'Organizing your information for maximum impact and readability.',
  },
  {
    step: '03',
    title: 'Creative Design',
    desc: 'Developing unique visual concepts that bring your message to life.',
  },
  {
    step: '04',
    title: 'Refinement',
    desc: 'Polishing the design based on your feedback until it\'s perfect.',
  },
  {
    step: '05',
    title: 'Final Delivery',
    desc: 'Providing all necessary files for both high-quality printing and digital use.',
  },
];

const faqs = [
  {
    question: 'What information do I need to provide for a brochure design?',
    answer: 'You\'ll need to provide your logo, brand guidelines (if any), the text content, and any specific images you want to include. We can also help with copywriting and stock image selection.',
  },
  {
    question: 'How many revisions do I get?',
    answer: 'We typically include 2-3 rounds of revisions to ensure the final design meets your expectations perfectly.',
  },
  {
    question: 'Can you handle the printing as well?',
    answer: 'While we focus on the design, we can recommend trusted printing partners in Kochi and Kerala, and we ensure the files are perfectly prepared for them.',
  },
  {
    question: 'What is the typical turnaround time?',
    answer: 'A standard flyer design usually takes 2-3 business days, while a multi-page brochure can take 5-10 business days.',
  },
];

export default function BrochureFlyerDesign() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Brochure & Flyer Design Kochi"
        description="Professional brochure and flyer design services in Kerala. We create high-impact print materials that captivate your audience."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Branding', href: '/branding' },
          { name: 'Brochure & Flyer Design', href: '/branding/brochure-flyer' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Print Design Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Make a Lasting Impression with <span className="text-primary">Stunning Print Design</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **brochure design company in Kochi**, specializing in creating high-quality print materials that effectively communicate your brand message.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Whether you need a promotional flyer for an event or a comprehensive corporate brochure, our **design services in Kerala** ensure that your print materials stand out. We combine creative layouts with strategic content organization to drive engagement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom Brochure Layouts',
                  'Creative Flyer Designs',
                  'High-Resolution Print Files',
                  'Strategic Content Flow',
                  'Brand-Consistent Visuals',
                  'Digital PDF Versions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Design Quote <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/brochure-kochi/1200/900"
                  alt="Brochure Design Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <p className="text-primary font-bold text-4xl mb-2">100%</p>
                <p className="text-sm text-text-gray font-medium uppercase tracking-wider">Custom Designs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Print Services</span></h2>
            <p className="text-text-gray text-lg">We offer comprehensive design solutions for all your print marketing needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designFeatures.map((feature, index) => (
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

      {/* Design Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Creative Flow</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Design Journey</span></h2>
            <p className="text-gray-400 text-lg">A structured process to ensure your print materials are delivered with precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {designProcess.map((step, index) => (
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
              <p className="text-text-gray text-lg">Everything you need to know about our brochure and flyer design services.</p>
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
