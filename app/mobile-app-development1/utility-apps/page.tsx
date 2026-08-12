'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Smartphone, Settings, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function UtilityAppsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Custom Utility Apps"
        description="Empower your users with custom mobile utility applications designed to solve specific tasks."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile Apps', href: '/mobile-apps' },
          { name: 'Utility Apps', href: '/mobile-apps/utility-apps' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark mb-6">Custom <span className="text-primary">Utility Apps</span></h2>
            <p className="text-text-gray text-lg mb-8 leading-relaxed">
              We develop custom mobile utility applications that help users perform specific tasks more efficiently and effectively.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              {[
                'Tailored to specific user needs and tasks',
                'Intuitive and easy-to-use interfaces',
                'Real-time data processing and reporting',
                'Seamless integration with device features',
                'Scalable architecture for future growth'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTA />
     
    </main>
  );
}
