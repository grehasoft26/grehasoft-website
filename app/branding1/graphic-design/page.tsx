'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Palette, Layout, Image as ImageIcon, PenTool, Layers, Monitor, CheckCircle2, ArrowRight, MessageSquare, Sparkles, Brush, Shapes } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const designServices = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Creating a cohesive visual identity that reflects your brand\'s values and resonates with your audience.',
  },
  {
    icon: Brush,
    title: 'Logo Design',
    desc: 'Crafting unique and memorable logos that serve as the foundation of your brand\'s visual presence.',
  },
  {
    icon: Layout,
    title: 'Print Design',
    desc: 'Designing high-quality brochures, flyers, business cards, and other print materials that leave a lasting impression.',
  },
  {
    icon: Monitor,
    title: 'Digital Design',
    desc: 'Creating engaging social media graphics, website banners, and other digital assets for your online presence.',
  },
  {
    icon: Shapes,
    title: 'Illustrations',
    desc: 'Custom illustrations that add a unique and creative touch to your brand\'s storytelling.',
  },
  {
    icon: Layers,
    title: 'Packaging Design',
    desc: 'Designing attractive and functional packaging that stands out on the shelves and enhances the customer experience.',
  },
];

const designProcess = [
  {
    step: '01',
    title: 'Briefing',
    desc: 'Understanding your brand, goals, and design requirements through a detailed consultation.',
  },
  {
    step: '02',
    title: 'Research',
    desc: 'Analyzing your industry, competitors, and target audience to inform the creative direction.',
  },
  {
    step: '03',
    title: 'Conceptualization',
    desc: 'Developing initial design concepts and sketches that explore different creative directions.',
  },
  {
    step: '04',
    title: 'Refinement',
    desc: 'Iterating on the chosen concept based on your feedback to perfect every detail.',
  },
  {
    step: '05',
    title: 'Delivery',
    desc: 'Providing the final design assets in all necessary formats for print and digital use.',
  },
];

const faqs = [
  {
    question: 'How long does a design project take?',
    answer: 'The timeline varies depending on the scope and complexity of the project. A simple logo might take a week, while a full brand identity can take several weeks.',
  },
  {
    question: 'Do I own the rights to the designs?',
    answer: 'Yes, once the final payment is made, you own the full copyright to the designs we create for you.',
  },
  {
    question: 'What file formats will I receive?',
    answer: 'We provide all necessary formats, including high-resolution vector files (AI, EPS, PDF) for print and web-ready formats (PNG, JPG, SVG).',
  },
  {
    question: 'Can you work with my existing brand guidelines?',
    answer: 'Absolutely! We can create new designs that seamlessly integrate with your established brand identity and guidelines.',
  },
];

export default function GraphicDesign() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Graphic Design Kochi"
        description="Professional graphic design services in Kerala. We create stunning visuals that tell your brand's story and drive engagement."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Branding', href: '/branding' },
          { name: 'Graphic Design', href: '/branding/graphic-design' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Creative Design Studio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Visual Storytelling That <span className="text-primary">Inspires</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a premier **graphic design agency in Kochi**, dedicated to crafting visuals that captivate and communicate. We believe that great design is more than just aesthetics; it\'s about solving problems and building connections.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our **design services in Kerala** cover everything from brand identity to digital assets. We combine artistic creativity with strategic thinking to deliver designs that not only look beautiful but also achieve your business objectives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Custom Logo & Brand Identity',
                  'Professional Print Materials',
                  'Engaging Social Media Graphics',
                  'Creative Packaging Design',
                  'High-Quality Illustrations',
                  'Strategic UI/UX Design'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Design Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/graphic-design-kochi/1200/900"
                  alt="Graphic Design Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">500+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Projects Delivered</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Design Services</span></h2>
            <p className="text-text-gray text-lg">We offer a wide range of creative services to help your brand stand out in a competitive market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-text-gray leading-relaxed">{service.desc}</p>
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
            <p className="text-gray-400 text-lg">A structured process to ensure your vision is translated into stunning reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
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
              <p className="text-text-gray text-lg">Answers to common questions about our graphic design services.</p>
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
