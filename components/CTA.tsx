'use client';

import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import axiosInstance from '@/lib/axios';

import { CTAData } from '@/types/wordpress';

interface CTAProps {
  data?: CTAData | null;
}

const DEFAULT_CTA: CTAData = {
  cta_badge: "Ready to grow?",
  cta_title_part1: "Let's build something",
  cta_title_highlight: "extraordinary",
  cta_title_part2: "together",
  cta_description: "Connect with our certified technical engineers today for a complimentary codebase health check or dynamic scope session.",
  cta_btn_link: "/contact-us",
  cta_btn_text: "Get Started",
  cta_btn2_link: "/services",
  cta_btn2_text: "Explore Services"
};

export default function CTA({ data }: CTAProps) {
  const [ctaState, setCtaState] = useState<CTAData | null>(data || null);

  useEffect(() => {
    if (data) {
      setCtaState(data);
      return;
    }

    const fetchCTA = async () => {
      try {
        const res = await axiosInstance.get('/wp-json/wp/v2/pages?slug=home&_fields=acf');
        const acf = res.data?.[0]?.acf || null;
        if (acf) {
          setCtaState(acf);
        }
      } catch (err: any) {
        console.warn("CTA fetch error:", err.message);
      }
    };

    fetchCTA();
  }, [data]);

  const cta = ctaState || DEFAULT_CTA;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-primary p-10 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold text-accent uppercase tracking-widest bg-white/10 rounded-full">
                <Zap className="w-4 h-4 fill-current" />
                {cta.cta_badge}
              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
  {cta.cta_title_part1}{' '}
  <span className="text-accent">{cta.cta_title_highlight}</span>{' '}
  {cta.cta_title_part2}
</h2>

              {/* DESCRIPTION */}
              <p className="text-lg text-white/80 mb-0 leading-relaxed">
                {cta.cta_description}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
              
              <Link
                href={cta.cta_btn_link || '#'}
                className="btn-accent w-full sm:w-auto text-lg py-4 px-10 whitespace-nowrap"
              >
                {cta.cta_btn_text}
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>

              <Link
                href={cta.cta_btn2_link || '#'}
                className="text-white font-bold hover:text-accent transition-colors flex items-center gap-2 text-lg whitespace-nowrap"
              >
                {cta.cta_btn2_text}
                <ArrowRight className="w-5 h-5" />
              </Link>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}