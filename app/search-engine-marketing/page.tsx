'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { MousePointerClick, Target, BarChart, Zap, Shield, Layout, Settings, Search, CheckCircle2, ArrowRight, MessageSquare, TrendingUp, ShoppingCart, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const semServices = [
  {
    icon: Search,
    title: 'Google Search Ads',
    desc: 'Appear at the top of Google search results when potential customers are actively looking for your products or services.',
  },
  {
    icon: Layout,
    title: 'Display Advertising',
    desc: 'Build brand awareness with visually engaging banner ads across the Google Display Network, reaching users on millions of websites.',
  },
  {
    icon: Target,
    title: 'Remarketing Campaigns',
    desc: 'Stay top-of-mind by showing targeted ads to users who have previously visited your website, encouraging them to return and convert.',
  },
  {
    icon: ShoppingCart,
    title: 'Google Shopping Ads',
    desc: 'Showcase your products directly in search results with images, prices, and store names to drive high-intent traffic to your e-commerce store.',
  },
  {
    icon: PlayCircle,
    title: 'YouTube Video Ads',
    desc: 'Engage your audience with compelling video content on the world\'s largest video platform, targeting users based on interests and behavior.',
  },
  {
    icon: BarChart,
    title: 'PPC Audit & Strategy',
    desc: 'In-depth analysis of your current campaigns and a data-driven strategy to improve performance and maximize your ROI.',
  },
];

const semProcess = [
  {
    step: '01',
    title: 'Goal Setting',
    desc: 'Defining clear objectives, whether it\'s lead generation, sales, or brand awareness.',
  },
  {
    step: '02',
    title: 'Keyword Research',
    desc: 'Identifying high-intent keywords that your target audience is searching for.',
  },
  {
    step: '03',
    title: 'Ad Creation',
    desc: 'Crafting persuasive ad copy and engaging visuals that drive clicks.',
  },
  {
    step: '04',
    title: 'Campaign Launch',
    desc: 'Setting up and launching your campaigns with precise targeting and bidding.',
  },
  {
    step: '05',
    title: 'Optimization',
    desc: 'Continuous monitoring and data-driven adjustments to improve performance.',
  },
];

const faqs = [
  {
    question: 'How much should I spend on Google Ads?',
    answer: 'There is no fixed amount. We recommend starting with a budget that allows for enough data collection to optimize. We help you determine an ideal budget based on your goals and industry.',
  },
  {
    question: 'How soon will I see results from SEM?',
    answer: 'Unlike SEO, SEM provides immediate visibility. Your ads can start appearing and driving traffic as soon as the campaign is launched and approved.',
  },
  {
    question: 'Do I need a landing page for my ads?',
    answer: 'Yes, a dedicated, high-converting landing page is essential for a successful SEM campaign. It ensures that the traffic you pay for has the best chance of converting.',
  },
  {
    question: 'How do you measure the success of a campaign?',
    answer: 'We track key metrics like Click-Through Rate (CTR), Cost Per Click (CPC), Conversion Rate, and Return on Ad Spend (ROAS) to measure and optimize performance.',
  },
];

export default function SearchEngineMarketing() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="SEM Services Kochi"
        description="Expert Google Ads management and PPC services in Kerala. We drive immediate results and high ROI with data-driven search engine marketing."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SEM (Google Ads)', href: '/search-engine-marketing' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Paid Search Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Drive Instant Traffic with <span className="text-primary">Google Ads</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **SEM agency in Kochi**, specializing in high-performance Google Ads management. We help you reach your customers at the exact moment they are searching for your products or services.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our **PPC services in Kerala** are focused on delivering measurable results. We combine strategic keyword targeting, persuasive ad copy, and continuous optimization to ensure you get the best possible return on your investment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Strategic Google Ads Management',
                  'High-Converting Ad Copywriting',
                  'Advanced Audience Targeting',
                  'Conversion Tracking & Analysis',
                  'Remarketing & Retargeting',
                  'Transparent Performance Reporting'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Campaign <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/sem-kochi/1200/900"
                  alt="SEM Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">10x</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Average ROAS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <MousePointerClick className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">25%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Lower CPA</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">SEM Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a comprehensive range of paid search services to help you achieve your marketing goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {semServices.map((service, index) => (
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

      {/* SEM Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">PPC Workflow</span></h2>
            <p className="text-gray-400 text-lg">A data-driven approach to launching and scaling successful ad campaigns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {semProcess.map((step, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our SEM and Google Ads services.</p>
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
