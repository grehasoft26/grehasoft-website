'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Smartphone, Briefcase, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function BusinessAppsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Business & Service Apps"
        description="Empower your business with custom mobile applications designed to solve your unique challenges."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Mobile Apps', href: '/mobile-apps' },
          { name: 'Business Apps', href: '/mobile-apps/business-apps' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark mb-6">Custom <span className="text-primary">Business Apps</span></h2>
            <p className="text-text-gray text-lg mb-8 leading-relaxed">
              We develop custom mobile applications that help you automate repetitive tasks, improve efficiency, and solve specific business challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              {[
                'Tailored to your specific business needs',
                'Automated workflows and task management',
                'Real-time data processing and reporting',
                'Seamless integration with existing tools',
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
      <Footer />
    </main>
  );
}
