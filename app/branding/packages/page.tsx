'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Palette, CheckCircle2, ArrowRight, MessageSquare, Sparkles, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function BrandingPackagesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Branding Packages"
        description="Comprehensive branding solutions tailored to your business needs and goals."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Branding', href: '/branding/graphic-design' },
          { name: 'Packages', href: '/branding/packages' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark mb-6">Complete <span className="text-primary">Branding Packages</span></h2>
            <p className="text-text-gray text-lg mb-8 leading-relaxed">
              We offer comprehensive branding packages that include everything you need to build a strong and consistent brand identity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              {[
                'Custom logo design and brand guidelines',
                'Business card and stationery design',
                'Social media branding and templates',
                'Brochure and marketing material design',
                'Brand strategy and positioning'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Discuss Your Brand <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTA />
      
    </main>
  );
}
