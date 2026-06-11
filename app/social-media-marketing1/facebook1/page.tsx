'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Facebook, Target, BarChart, Users, CheckCircle2, ArrowRight, MessageSquare, Share2, Megaphone, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const features = [
  {
    icon: Target,
    title: 'Targeted Advertising',
    desc: 'Reach your ideal audience with precision using Facebook\'s advanced targeting options.',
  },
  {
    icon: Users,
    title: 'Community Building',
    desc: 'Engage with your customers and build a loyal community around your brand.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    desc: 'Track the performance of your campaigns with detailed insights and data.',
  },
  {
    icon: Megaphone,
    title: 'Brand Awareness',
    desc: 'Increase your brand\'s visibility and reach a wider audience on the world\'s largest social network.',
  },
];

export default function FacebookMarketingPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Facebook Marketing"
        description="Reach and engage your target audience on the world's largest social media platform."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'Facebook', href: '/social-media-marketing/facebook' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-dark mb-6">Expert <span className="text-primary">Facebook Marketing</span></h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Our Facebook marketing services are designed to help you achieve your business goals, whether it's increasing brand awareness, driving website traffic, or generating leads.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Strategic Facebook ad campaign management',
                  'Engaging content creation and page management',
                  'Advanced audience targeting and retargeting',
                  'Detailed performance analysis and reporting',
                  'Continuous optimization for better ROI'
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
              <img
                src="https://picsum.photos/seed/facebook/800/600"
                alt="Facebook Marketing"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>
    </main>
  );
}
