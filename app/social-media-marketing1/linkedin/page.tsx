'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Linkedin, Target, BarChart, Users, CheckCircle2, ArrowRight, MessageSquare, Share2, Megaphone, TrendingUp, Briefcase, Award } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const features = [
  {
    icon: Briefcase,
    title: 'B2B Lead Generation',
    desc: 'Connect with decision-makers and generate high-quality B2B leads for your business.',
  },
  {
    icon: Award,
    title: 'Thought Leadership',
    desc: 'Establish your brand as an industry authority through strategic professional content.',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    desc: 'Reach professionals based on job title, industry, seniority, and company size.',
  },
  {
    icon: BarChart,
    title: 'ROI Analytics',
    desc: 'Track your professional reach and conversion metrics with detailed reporting.',
  },
];

export default function LinkedInMarketingPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="LinkedIn Marketing"
        description="Reach and engage your target audience on the world's largest professional social network."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'LinkedIn', href: '/social-media-marketing/linkedin' },
        ]}
      />

      {/* Features Section - Main Focus */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-gray text-base leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <img
                src="https://picsum.photos/seed/linkedin-marketing/800/800"
                alt="LinkedIn Marketing Strategy"
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 p-8 bg-white rounded-3xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark">+200%</div>
                    <div className="text-sm text-text-gray font-medium">B2B Lead Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
                Professional <span className="text-primary">LinkedIn Marketing</span> Solutions
              </h2>
              <p className="text-text-gray text-lg mb-10 leading-relaxed">
                Our LinkedIn marketing services are focused on creating engaging professional content that resonates with your audience and drives results. We help you build meaningful connections in the professional world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  'B2B Lead Generation',
                  'LinkedIn Ad Management',
                  'Thought Leadership Content',
                  'Company Page Optimization',
                  'Precision Audience Targeting',
                  'Professional Community Building'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg">
                Start Your Campaign <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>
    </main>
  );
}
