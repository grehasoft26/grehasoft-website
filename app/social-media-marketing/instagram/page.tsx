'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Instagram, Target, BarChart, Users, CheckCircle2, ArrowRight, MessageSquare, Share2, Megaphone, TrendingUp, Camera, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const features = [
  {
    icon: Camera,
    title: 'Visual Storytelling',
    desc: 'Engage your audience with stunning visuals and compelling stories on Instagram.',
  },
  {
    icon: Sparkles,
    title: 'Influencer Marketing',
    desc: 'Collaborate with influencers to reach a wider and more targeted audience.',
  },
  {
    icon: Target,
    title: 'Advanced Targeting',
    desc: 'Reach your ideal customers with Instagram\'s powerful targeting options.',
  },
  {
    icon: TrendingUp,
    title: 'Engagement Growth',
    desc: 'Increase your followers and engagement with strategic content and interactions.',
  },
];

export default function InstagramMarketingPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Instagram Marketing"
        description="Build your brand and engage with your audience on the world's most visual social platform."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'Instagram', href: '/social-media-marketing/instagram' },
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
              <h2 className="text-4xl font-bold text-dark mb-6">Visual <span className="text-primary">Instagram Marketing</span></h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Our Instagram marketing services are focused on creating visually stunning content that resonates with your audience and drives results.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Creative content strategy and production',
                  'Instagram ad campaign management',
                  'Influencer outreach and collaboration',
                  'Engagement and community management',
                  'Detailed performance analysis and reporting'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Grow Your Instagram <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/instagram/800/600"
                alt="Instagram Marketing"
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
