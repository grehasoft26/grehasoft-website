'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { PlayCircle, Target, BarChart, Users, CheckCircle2, ArrowRight, MessageSquare, Share2, Megaphone, TrendingUp, Video, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const features = [
  {
    icon: Video,
    title: 'Video Storytelling',
    desc: 'Engage your audience with high-quality video content and compelling narratives on YouTube.',
  },
  {
    icon: Sparkles,
    title: 'Influencer Marketing',
    desc: 'Partner with top YouTube creators to expand your reach and build brand authority.',
  },
  {
    icon: Target,
    title: 'Advanced Targeting',
    desc: 'Leverage YouTube\'s precise targeting tools to reach your ideal viewers at the right time.',
  },
  {
    icon: TrendingUp,
    title: 'Engagement Growth',
    desc: 'Boost your subscribers and viewer engagement through strategic content planning and optimization.',
  },
];

export default function YouTubeMarketingPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="YouTube Marketing"
        description="Reach and engage your audience on the world's largest video platform."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'YouTube', href: '/social-media-marketing/youtube' },
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
              <h2 className="text-4xl font-bold text-dark mb-6">Expert <span className="text-primary">YouTube Marketing</span></h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our YouTube marketing services are focused on creating engaging video content that resonates with your audience and drives results.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Strategic YouTube ad campaign management',
                  'Engaging video content creation and optimization',
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
                src="https://picsum.photos/seed/youtube-marketing/800/600"
                alt="YouTube Marketing"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Matching Image Design */}
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
                className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4 leading-tight">{feature.title}</h3>
                <p className="text-text-gray text-base leading-relaxed">{feature.desc}</p>
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
