'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Layout, MousePointer2, CheckCircle2, ArrowRight, MessageSquare, Zap, Shield, Monitor, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function UIUXDesignPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="UI/UX Design"
        description="We create stunning, intuitive, and user-centric designs that engage and delight your users."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Branding', href: '/branding/graphic-design' },
          { name: 'UI/UX Design', href: '/branding/ui-ux' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark mb-6">User-Centric <span className="text-primary">UI/UX Design</span></h2>
            <p className="text-text-gray text-lg mb-8 leading-relaxed">
              Our UI/UX design services are focused on creating visually stunning and intuitive interfaces that provide a seamless user experience across all devices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              {[
                'User research and persona development',
                'Information architecture and wireframing',
                'Interactive prototyping and user testing',
                'Visual design and user interface creation',
                'Responsive and adaptive design'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Discuss Your Design <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
