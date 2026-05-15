'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Megaphone, Search, MousePointerClick, Share2, BarChart, Globe, Mail, Target, CheckCircle2, ArrowRight, MessageSquare, TrendingUp, Zap, Shield, Users, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const marketingServices = [
  {
    icon: Search,
    title: 'SEO Services',
    desc: 'Improve your search engine rankings and drive high-quality organic traffic to your website with data-driven SEO strategies.',
    href: '/seo',
  },
  {
    icon: MousePointerClick,
    title: 'SEM (Google Ads)',
    desc: 'Reach your target audience instantly with highly effective pay-per-click advertising and search engine marketing campaigns.',
    href: '/search-engine-marketing',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Engage with your audience and build a loyal community around your brand on all major social media platforms.',
    href: '/social-media-marketing',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Build lasting relationships and drive repeat sales with personalized and targeted email marketing automation.',
    href: '/digital-marketing',
  },
  {
    icon: Target,
    title: 'Content Marketing',
    desc: 'Attract and retain your target audience with valuable, relevant, and consistent content that drives profitable customer action.',
    href: '/digital-marketing',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    desc: 'Gain actionable insights into your marketing performance with detailed analytics and transparent reporting.',
    href: '/digital-marketing',
  },
];

const marketingProcess = [
  {
    step: '01',
    title: 'Strategy & Planning',
    desc: 'Defining clear goals and a roadmap to achieve them based on market research and competitor analysis.',
  },
  {
    step: '02',
    title: 'Execution & Launch',
    desc: 'Implementing the marketing strategies across chosen channels with precision and creativity.',
  },
  {
    step: '03',
    title: 'Monitoring & Analysis',
    desc: 'Continuous tracking of campaign performance using advanced analytics tools to measure success.',
  },
  {
    step: '04',
    title: 'Optimization',
    desc: 'Data-driven adjustments to improve campaign performance and maximize your return on investment.',
  },
];

const faqs = [
  {
    question: 'Why does my business need digital marketing?',
    answer: 'Digital marketing allows you to reach a global audience, target specific demographics, and measure your results in real-time, making it more cost-effective than traditional marketing.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results vary by service. SEM can drive traffic instantly, while SEO and content marketing are long-term strategies that typically show significant results in 3-6 months.',
  },
  {
    question: 'Do you provide customized marketing plans?',
    answer: 'Yes, we create tailored digital marketing strategies based on your unique business goals, industry, and target audience.',
  },
  {
    question: 'How do you track the success of campaigns?',
    answer: 'We use advanced tools like Google Analytics, Search Console, and platform-specific insights to track key metrics like traffic, conversions, and ROI.',
  },
];

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Digital Marketing Services Kochi"
        description="Grow your business online with expert digital marketing strategies in Kerala. We specialize in SEO, SEM, SMM, and data-driven growth solutions."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Growth Marketing Agency</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Scale Your Business with <span className="text-primary">Digital Excellence</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **digital marketing agency in Kochi**, dedicated to helping businesses achieve sustainable growth in the digital landscape. We combine creative thinking with data-driven strategies.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our **digital marketing services in Kerala** cover the entire spectrum of online growth. Whether you are a startup or an established enterprise, we have the expertise to elevate your brand and drive measurable results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Data-Driven SEO Strategies',
                  'High-ROI Google Ads (SEM)',
                  'Engaging Social Media Marketing',
                  'Targeted Content Marketing',
                  'Email Marketing Automation',
                  'Transparent Analytics & Reporting'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Get a Free Marketing Audit <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/digital-marketing-kochi/1200/900"
                  alt="Digital Marketing Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">150%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Average Traffic Growth</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">200+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Successful Campaigns</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Marketing Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a comprehensive range of digital marketing services to help you reach your target audience and achieve your goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
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

      {/* Marketing Process */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Growth Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-primary">Marketing Workflow</span></h2>
            <p className="text-gray-400 text-lg">A structured approach to building and scaling successful digital marketing campaigns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            
            {marketingProcess.map((step, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our digital marketing services.</p>
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
