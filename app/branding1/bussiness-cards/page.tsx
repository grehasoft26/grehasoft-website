'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { CreditCard, Palette, CheckCircle2, ArrowRight, MessageSquare, Sparkles, Printer, MousePointer2, Layers, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const cardFeatures = [
  {
    icon: CreditCard,
    title: 'Custom Card Design',
    desc: 'Unique, professional business card designs that reflect your brand identity and make a memorable first impression.',
  },
  {
    icon: Palette,
    title: 'Brand Consistency',
    desc: 'Ensuring your business cards perfectly align with your existing brand guidelines, colors, and typography.',
  },
  {
    icon: Sparkles,
    title: 'Creative Layouts',
    desc: 'Innovative and modern layouts that stand out from the standard templates, making your card a conversation starter.',
  },
  {
    icon: Printer,
    title: 'Print-Ready Files',
    desc: 'We provide high-resolution files with correct bleeds, margins, and CMYK color profiles for professional printing.',
  },
  {
    icon: Shield,
    title: 'Premium Finishes',
    desc: 'Guidance on choosing the right paper stock and finishes like spot UV, foil stamping, or embossing for a premium feel.',
  },
  {
    icon: Layers,
    title: 'Multiple Concepts',
    desc: 'We provide several design directions to choose from, ensuring the final result is exactly what you envisioned.',
  },
];

const cardProcess = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Discussing your brand, preferences, and the key information to be included on your card.',
  },
  {
    step: '02',
    title: 'Concept Design',
    desc: 'Developing initial design concepts that explore different visual directions and layouts.',
  },
  {
    step: '03',
    title: 'Refinement',
    desc: 'Polishing the chosen design based on your feedback to ensure every detail is perfect.',
  },
  {
    step: '04',
    title: 'Final Delivery',
    desc: 'Providing all necessary print-ready files in various formats (AI, PDF, PNG).',
  },
];

const faqs = [
  {
    question: 'What information should I include on my business card?',
    answer: 'Typically, you should include your name, job title, company name, logo, phone number, email address, and website. You might also include social media handles or a QR code.',
  },
  {
    question: 'Can you design double-sided business cards?',
    answer: 'Yes, we specialize in both single and double-sided business card designs to maximize the impact of your card.',
  },
  {
    question: 'What is the standard size for a business card?',
    answer: 'The standard size is 3.5 x 2 inches (89 x 51 mm), but we can also design custom sizes and shapes if requested.',
  },
  {
    question: 'Do you provide the physical cards?',
    answer: 'We focus on the design and provide you with high-quality print-ready files. We can recommend trusted printing partners in Kochi and Kerala who can handle the physical printing.',
  },
];

export default function BusinessCardDesign() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Business Card Design Kochi"
        description="Professional business card design services in Kerala. We create unique, high-impact cards that leave a lasting impression."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Branding', href: '/branding' },
          { name: 'Business Card Design', href: '/branding/business-cards' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Identity Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Your Business Card is Your <span className="text-primary">First Impression</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **business card design company in Kochi**, dedicated to creating professional and memorable cards that represent your brand with excellence.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                In a world of digital connections, a physical business card still holds immense power. Our **design services in Kerala** ensure that your card is not just a piece of paper, but a powerful marketing tool that builds immediate trust and credibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom Creative Designs',
                  'Brand-Consistent Visuals',
                  'High-Resolution Print Files',
                  'Modern & Professional Layouts',
                  'Double-Sided Design Options',
                  'Premium Finish Guidance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Card Design <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/business-card-kochi/1200/900"
                  alt="Business Card Design Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <p className="text-primary font-bold text-4xl mb-2">1000+</p>
                <p className="text-sm text-text-gray font-medium uppercase tracking-wider">Cards Designed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Card Services</span></h2>
            <p className="text-text-gray text-lg">We offer tailored design solutions to ensure your business card perfectly represents you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardFeatures.map((feature, index) => (
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
            <p className="text-gray-400 text-lg">A structured process to ensure your business cards are delivered with precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {cardProcess.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
              <p className="text-text-gray text-lg">Everything you need to know about our business card design services.</p>
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
