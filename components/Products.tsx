'use client';

import { motion } from 'motion/react';
import { ArrowRight, Layers, Zap, Shield, BarChart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// ICON MAP (important)
const iconMap: any = {
  analytics: BarChart,
  security: Shield,
  integration: Layers,
  performance: Zap,
};

import { ProductsData } from '@/types/wordpress';

interface ProductsProps {
  data?: ProductsData | null;
}

export default function Products({ data }: ProductsProps) {
  const pms = data;

  if (!pms) return null;

  const features = [
    {
      title: pms.pms_feature1_title,
      description: pms.pms_feature1_desc,
      icon: iconMap.analytics,
    },
    {
      title: pms.pms_feature2_title,
      description: pms.pms_feature2_desc,
      icon: iconMap.security,
    },
    {
      title: pms.pms_feature3_title,
      description: pms.pms_feature3_desc,
      icon: iconMap.integration,
    },
    {
      title: pms.pms_feature4_title,
      description: pms.pms_feature4_desc,
      icon: iconMap.performance,
    },
  ];

  return (
    <section id="products" className="section-padding bg-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] group">
             <img src={pms.pms_image_url} 
                alt="Grehasoft PMS"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* BADGE */}
              <div className="absolute top-8 left-8 p-4 bg-accent rounded-2xl shadow-xl animate-bounce">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-1">
                  {pms.pms_badge || 'New Version'}
                </p>
                <p className="text-xl font-bold text-white">
                  PMS 2.0
                </p>
              </div>
            </div>

            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* BADGE */}
           
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                {pms.pms_badge}
              </span>
            </div>

            {/* TITLE */}
   <div className="w-full">      
<h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
  {`${pms.pms_title_part1 || ''} ${pms.pms_title_highlight || ''} ${pms.pms_title_part2 || ''}`}
</h2>

</div>
            {/* DESCRIPTION */}
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              {pms.pms_description}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href={pms.pms_btn1_link || '#'} className="btn-accent w-full sm:w-auto">
                {pms.pms_btn1_text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link href={pms.pms_btn2_link || '#'} className="text-white font-semibold hover:text-accent transition-colors flex items-center gap-2">
                {pms.pms_btn2_text}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}