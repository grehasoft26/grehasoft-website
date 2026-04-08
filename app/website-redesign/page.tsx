'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { RefreshCw, Layout, Smartphone, Palette, Zap, Shield, ArrowRight, CheckCircle2, MessageSquare, Search, BarChart, Users } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const redesignSteps = [
  {
    step: '01',
    title: 'Audit & Analysis',
    desc: 'We evaluate your current website\'s performance, user behavior, and technical debt to identify key areas for improvement.',
  },
  {
    step: '02',
    title: 'Strategic Planning',
    desc: 'Setting clear KPIs for the redesign, from improved UX and accessibility to higher conversion rates and better SEO.',
  },
  {
    step: '03',
    title: 'Modern UI/UX Design',
    desc: 'Creating a fresh, contemporary look that aligns with your evolving brand identity and current design trends.',
  },
  {
    step: '04',
    title: 'Performance Upgrade',
    desc: 'Rebuilding with modern frameworks for lightning-fast speeds, better security, and a future-proof architecture.',
  },
];

const redesignBenefits = [
  {
    title: 'Enhanced User Experience',
    desc: 'Intuitive navigation and clear information architecture to reduce bounce rates.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Mobile-First Optimization',
    desc: 'Ensuring your site looks and functions perfectly on every screen size.',
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: 'SEO Performance Boost',
    desc: 'Optimizing site structure and speed to improve your search engine rankings.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: 'Conversion Rate Lift',
    desc: 'Strategically placed CTAs and optimized flows to turn more visitors into leads.',
    icon: <BarChart className="w-6 h-6" />,
  },
];

const faqs = [
  {
    question: 'When should I consider a website redesign?',
    answer: 'If your site is slow, not mobile-friendly, has a high bounce rate, or no longer reflects your brand identity, it\'s time for a redesign. Typically, websites should be refreshed every 2-3 years.',
  },
  {
    question: 'Will a redesign affect my current SEO rankings?',
    answer: 'If done correctly, a redesign should improve your SEO. We use 301 redirects and maintain your URL structure to ensure you don\'t lose your existing rankings.',
  },
  {
    question: 'How much does a website redesign cost?',
    answer: 'The cost varies based on the size of the site and the complexity of the features. We offer tailored packages to fit different budgets and requirements.',
  },
  {
    question: 'How long does the redesign process take?',
    answer: 'A typical redesign project takes between 4 to 8 weeks, depending on the scope of work and the number of pages.',
  },
];

export default function WebsiteRedesign() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Website Redesign Services in Kochi"
        description="Transform your outdated website into a modern, high-performance digital asset. Expert website revamp and UI/UX refresh services in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Redesign', href: '/website-redesign' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Website Revamp</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Give Your Website a <span className="text-primary">Fresh New Life</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **website redesign company in Kochi**, helping businesses modernize their digital presence. We don't just change the look; we improve the performance and results.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                In today's fast-paced digital world, an outdated website can hurt your credibility. Our **website revamp services** focus on creating a modern, fast, and user-centric experience that aligns with your current business goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Modern UI/UX Refresh',
                  'Mobile-First Optimization',
                  'Speed & Performance Boost',
                  'SEO-Friendly Architecture',
                  'Brand Identity Alignment',
                  'Conversion Rate Optimization'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg grayscale opacity-40 group">
                    <img
                      src="https://picsum.photos/seed/old-web/600/800"
                      alt="Old Website Design"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-dark/20 flex items-center justify-center">
                      <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-dark">Before</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary group">
                    <img
                      src="https://picsum.photos/seed/new-web/600/800"
                      alt="New Website Redesign"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                      <span className="bg-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white">After</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden xl:block">
                <p className="font-bold text-2xl">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold">Modernized</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Why Redesign Your <span className="text-primary">Website?</span></h2>
            <p className="text-text-gray text-lg">A redesign is an investment in your business's future growth and digital authority.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {redesignBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesign Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Redesign Journey</span></h2>
            <p className="text-gray-400 text-lg">A structured process to ensure your new website exceeds expectations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {redesignSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-8 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
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
              <p className="text-text-gray text-lg">Answers to common questions about our website redesign services.</p>
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
