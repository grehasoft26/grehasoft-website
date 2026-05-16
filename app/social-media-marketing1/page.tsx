'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Share2, Facebook, Instagram, Youtube, Linkedin, Twitter, Target, BarChart, Zap, Shield, Layout, Settings, CheckCircle2, ArrowRight, MessageSquare, TrendingUp, Users, Camera, Video } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const smmServices = [
  {
    icon: Facebook,
    title: 'Facebook Marketing',
    desc: 'Reach billions with targeted Facebook Ads and engaging page management to build a loyal community.',
    href: '/social-media-marketing/facebook',
  },
  {
    icon: Instagram,
    title: 'Instagram Marketing',
    desc: 'Visually stunning content and strategic Instagram Ads to connect with a younger, highly engaged audience.',
    href: '/social-media-marketing/instagram',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Marketing',
    desc: 'Establish professional authority and generate high-quality B2B leads with targeted LinkedIn strategies.',
    href: '/social-media-marketing/linkedin',
  },
  {
    icon: Youtube,
    title: 'YouTube Marketing',
    desc: 'Leverage the power of video with channel optimization and high-impact video advertising campaigns.',
    href: '/social-media-marketing/youtube',
  },
  {
    icon: Twitter,
    title: 'X (Twitter) Marketing',
    desc: 'Engage in real-time conversations and build brand awareness with strategic X marketing and promoted posts.',
    href: '/social-media-marketing/twitter',
  },
  {
    icon: Target,
    title: 'Pinterest Marketing',
    desc: 'Drive long-term traffic and sales with visually optimized pins and targeted Pinterest advertising.',
    href: '/social-media-marketing/pinterest',
  },
];

const smmProcess = [
  {
    step: '01',
    title: 'Social Audit',
    desc: 'Analyzing your current social presence and competitor landscape to identify opportunities.',
  },
  {
    step: '02',
    title: 'Content Strategy',
    desc: 'Creating a tailored content calendar that resonates with your target audience and brand voice.',
  },
  {
    step: '03',
    title: 'Community Management',
    desc: 'Proactive engagement with your audience to build trust and foster brand loyalty.',
  },
  {
    step: '04',
    title: 'Paid Advertising',
    desc: 'Launching and optimizing high-ROI ad campaigns across multiple social platforms.',
  },
  {
    step: '05',
    title: 'Reporting & Insights',
    desc: 'Detailed monthly reports with actionable insights to continuously improve performance.',
  },
];

const faqs = [
  {
    question: 'Which social media platform is best for my business?',
    answer: 'It depends on your target audience and business goals. We help you identify the platforms where your potential customers are most active.',
  },
  {
    question: 'How often should I post on social media?',
    answer: 'Consistency is key. We recommend posting 3-5 times per week on most platforms, but the ideal frequency varies by platform and audience behavior.',
  },
  {
    question: 'Do you provide content creation services?',
    answer: 'Yes, we offer full-service content creation, including graphic design, copywriting, and video production tailored for social media.',
  },
  {
    question: 'How do you measure the success of SMM?',
    answer: 'We track metrics like engagement rate, reach, website traffic, and most importantly, conversions and ROI from our social media efforts.',
  },
];

export default function SocialMediaMarketing() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Social Media Marketing Kochi"
        description="Transform your brand's social presence with expert SMM services in Kerala. We drive engagement and conversions across all major platforms."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'Social Media Marketing', href: '/social-media-marketing' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Social Engagement Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Build a Brand That <span className="text-primary">People Love</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **social media marketing agency in Kochi**, specializing in creating data-driven strategies that drive real business results.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our **SMM services in Kerala** go beyond just posting updates. We combine creative storytelling with advanced audience targeting to build a community around your brand and turn followers into loyal customers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Strategic Content Creation',
                  'High-ROI Social Advertising',
                  'Community Management',
                  'Influencer Marketing',
                  'Social Media Audits',
                  'Real-time Performance Tracking'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Free Social Audit <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/smm-kochi/1200/900"
                  alt="Social Media Marketing Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Icons */}
              <div className="absolute -top-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                    <Video className="w-6 h-6" />
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">SMM Expertise</span></h2>
            <p className="text-text-gray text-lg">We provide specialized marketing services for all major social networks to ensure your brand reaches its full potential.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smmServices.map((service, index) => (
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
                <p className="text-text-gray leading-relaxed mb-6">{service.desc}</p>
                <Link href={service.href} className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMM Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Social Strategy</span></h2>
            <p className="text-gray-400 text-lg">A structured approach to building and scaling your social media presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {smmProcess.map((step, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our social media marketing services.</p>
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
