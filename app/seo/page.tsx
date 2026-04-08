'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Search, BarChart, Globe, Target, Zap, Shield, Layout, Settings, CheckCircle2, ArrowRight, MessageSquare, TrendingUp, Users, MousePointer2 } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const seoServices = [
  {
    icon: Search,
    title: 'Keyword Research',
    desc: 'In-depth analysis to identify high-volume, low-competition keywords that drive targeted traffic to your site.',
  },
  {
    icon: Layout,
    title: 'On-Page SEO',
    desc: 'Optimizing meta tags, headers, content, and internal linking to improve your site\'s relevance and ranking.',
  },
  {
    icon: Settings,
    title: 'Technical SEO',
    desc: 'Fixing site speed, mobile-friendliness, crawlability, and indexing issues to ensure search engines can read your site.',
  },
  {
    icon: Globe,
    title: 'Off-Page SEO',
    desc: 'Building high-authority backlinks and managing your online reputation to boost your domain authority.',
  },
  {
    icon: Target,
    title: 'Local SEO',
    desc: 'Optimizing your Google Business Profile and local citations to dominate search results in your area.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    desc: 'Transparent monthly reports tracking your rankings, traffic growth, and conversion improvements.',
  },
];

const seoProcess = [
  {
    step: '01',
    title: 'SEO Audit',
    desc: 'A comprehensive review of your website\'s current performance and technical health.',
  },
  {
    step: '02',
    title: 'Strategy Development',
    desc: 'Creating a custom roadmap based on your business goals and competitor analysis.',
  },
  {
    step: '03',
    title: 'Implementation',
    desc: 'Executing on-page and technical optimizations to align with search engine guidelines.',
  },
  {
    step: '04',
    title: 'Content & Link Building',
    desc: 'Creating high-quality content and acquiring authoritative backlinks to build trust.',
  },
  {
    step: '05',
    title: 'Monitoring & Refinement',
    desc: 'Continuous tracking and data-driven adjustments to maintain and improve rankings.',
  },
];

const faqs = [
  {
    question: 'How long does it take to see results from SEO?',
    answer: 'SEO is a long-term strategy. Typically, you can expect to see significant improvements in rankings and traffic within 3 to 6 months, depending on the competition.',
  },
  {
    question: 'Do you guarantee #1 rankings on Google?',
    answer: 'No ethical SEO agency can guarantee a #1 ranking, as search algorithms are constantly changing. However, we guarantee to use best practices to significantly improve your visibility.',
  },
  {
    question: 'Is SEO better than PPC?',
    answer: 'Both have their place. PPC provides immediate results, while SEO builds long-term sustainable traffic. For most businesses, a combination of both is the most effective strategy.',
  },
  {
    question: 'What is Local SEO and do I need it?',
    answer: 'Local SEO focuses on optimizing your presence for local search queries. If you have a physical location or serve a specific geographic area, Local SEO is essential.',
  },
];

export default function SEO() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="SEO Services Kochi"
        description="Best SEO company in Kochi, Kerala. We provide expert search engine optimization services to improve your rankings and drive organic traffic."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SEO Services', href: '/seo' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Organic Growth Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Dominate Search Results with <span className="text-primary">Expert SEO</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a premier **SEO agency in Kochi**, dedicated to helping businesses achieve sustainable growth through data-driven search engine optimization.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                In today's competitive digital landscape, being on the first page of Google is not an option—it's a necessity. Our **SEO services in Kerala** are designed to improve your visibility, build trust, and drive high-quality organic traffic to your website.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Comprehensive SEO Audits',
                  'Strategic Keyword Research',
                  'Advanced On-Page Optimization',
                  'High-Authority Link Building',
                  'Local SEO & GMB Management',
                  'Technical SEO & Site Speed'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Free SEO Audit <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/seo-kochi/1200/900"
                  alt="SEO Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">85%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Traffic Increase</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">10k+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">New Leads</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">SEO Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a full range of SEO services to help you reach your target audience and grow your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
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

      {/* SEO Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">SEO Roadmap</span></h2>
            <p className="text-gray-400 text-lg">A systematic approach to achieving long-term search engine success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {seoProcess.map((step, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our SEO services.</p>
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
