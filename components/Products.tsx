'use client';

import { motion } from 'motion/react';
import { ArrowRight, Layers, Zap, Shield, BarChart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { toInternalHref } from '@/lib/internal-href';
import PmsShowcaseSlider from '@/components/home/PmsShowcaseSlider';
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
  /** 'home': the homepage section heading scale (28 / 36 / 40px). Other pages keep the default. */
  headingSize?: 'default' | 'home';
}

export default function Products({ data, headingSize = 'default' }: ProductsProps) {
  const pms = data;

  if (!pms) return null;

  const isHome = headingSize === 'home';
  // The home ACF group delivers the description as `pms_description___`; read either key so the ACF text renders.
  const description = pms.pms_description || pms.pms_description___;
  // Join only the title parts that are set, so no stray spaces are rendered.
  const title = [pms.pms_title_part1, pms.pms_title_highlight, pms.pms_title_part2]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(' ');

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

  // Homepage layout: a centred intro (badge, H2, description) across the full section width; below it the product
  // image (left) beside the four features in a 2 x 2 grid (right); both CTAs centred underneath. The image card keeps
  // the artwork's own ratio (object-contain on its white background), so it is never cropped or distorted.
  // Other pages (e.g. /products) keep the original layout below.
  if (isHome) {
    return (
      <section id="products" className="py-12 md:py-14 bg-dark text-white overflow-hidden">
        <div className="container-custom">
          {/* INTRO: centred across the full section width. From xl the H2 may use the full width (one line at the
              current title); the description widens from lg (60rem, then 66rem at xl) so it sits on about two lines. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto flex w-full flex-col items-center text-center mb-8 lg:mb-10"
          >
            <p className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Sparkles aria-hidden="true" className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                {pms.pms_badge}
              </span>
            </p>

            <h2 className="max-w-[48rem] xl:max-w-none text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight text-balance">
              {title}
            </h2>

            {description && (
              <p className="mt-3 max-w-[46rem] lg:max-w-[60rem] xl:max-w-[66rem] text-base md:text-lg text-white/70 leading-relaxed text-pretty lg:text-balance">
                {description}
              </p>
            )}
          </motion.div>

          {/* SLIDESHOW (left) + FEATURES 2 x 2 (right) from xl, the slideshow taking about 46% of the content width
              (0.95 : 1.05). Below xl they stack, so the screenshots stay large: the slideshow up to 760px, the features below. */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 xl:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[760px] xl:max-w-none"
            >
              {/* PMS screenshot slideshow (local mock-data screenshots), filling the left column: about 555px wide from xl,
                  up to 760px when stacked (below xl). No overlay badge: the eyebrow above the heading already says
                  "Our Flagship Product". */}
              <PmsShowcaseSlider sizes="(max-width: 799px) 100vw, (max-width: 1279px) 760px, 580px" />


              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto grid w-full max-w-3xl xl:max-w-none grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-box-sm bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Icon aria-hidden="true" className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white leading-snug mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* BUTTONS: centred under both columns. The secondary CTA is an outlined pill (same height and radius as the
              primary, thin white border on a faint white tint) so the solid green primary stays dominant. */}
          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href={toInternalHref(pms.pms_btn1_link || '#')} className="btn-accent w-full sm:w-auto whitespace-nowrap">
              {pms.pms_btn1_text?.trim()}
              <ArrowRight aria-hidden="true" className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href={toInternalHref(pms.pms_btn2_link || '/contact-us')}
              className="group inline-flex w-full sm:w-auto whitespace-nowrap items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-[11px] font-medium text-white transition-all duration-300 hover:border-white/55 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {pms.pms_btn2_text?.trim()}
              <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

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
            <div className="relative rounded-box-lg overflow-hidden shadow-2xl aspect-[16/10] group">
             {pms.pms_image_url && (
              <Image
                src={pms.pms_image_url}
                alt="Grehasoft PMS"
                fill
                sizes="(max-width: 1023px) 100vw, 600px"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
             )}

              {/* BADGE */}
              <div className="absolute top-8 left-8 p-4 bg-accent rounded-box-sm shadow-xl animate-bounce">
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
  {title}
</h2>

</div>
            {/* DESCRIPTION */}
            {description && (
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                {description}
              </p>
            )}

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-box-sm bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
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
              <Link href={toInternalHref(pms.pms_btn1_link || '#')} className="btn-accent w-full sm:w-auto">
                {pms.pms_btn1_text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link href={toInternalHref(pms.pms_btn2_link || '/contact-us')} className="text-white font-semibold hover:text-accent transition-colors flex items-center gap-2">
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