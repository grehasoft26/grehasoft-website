'use client';

import { motion } from 'motion/react';
import { Sparkles, Layers } from 'lucide-react';
import Image from 'next/image';

interface Props {
  acf: any;
  heroImageUrl?: string;
  featuredImage: string;
}

export default function IntroSection({
  acf,
  heroImageUrl,
  featuredImage,
}: Props) {

  const intro = acf?.branding?.intro_section || {};

  if (!intro?.hero_title) return null;

  return (
    <section className="section-padding overflow-hidden text-center md:text-left">

      <div className="container-custom">
 {intro?.hero_tag && (
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                {intro.hero_tag}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">

              {intro.hero_title}

              {intro.hero_highlight && (
                <>
                
                  <span className="text-primary italic">
                    {intro.hero_highlight}
                  </span>
                </>
              )}

            </h1>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

           

            {intro?.hero_description && (
              <div
                className="text-gray-600 mb-6 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: intro.hero_description,
                }}
              />
            )}

            {intro?.hero_description_2 && (
              <div
                className="text-gray-600 text-lg mb-6 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: intro.hero_description_2,
                }}
              />
            )}

            {intro?.hero_description_3 && (
              <div
                className="text-gray-600 text-lg mb-8 leading-relaxed "
                dangerouslySetInnerHTML={{
                  __html: intro.hero_description_3,
                }}
              />
            )}

            {/* STATS */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">

              {intro?.stat_1_number && (
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">

                  <p className="text-primary font-black text-2xl">
                    {intro.stat_1_number}
                  </p>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {intro.stat_1_text}
                  </p>

                </div>
              )}

              {intro?.stat_2_number && (
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">

                  <p className="text-accent font-black text-2xl">
                    {intro.stat_2_number}
                  </p>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {intro.stat_2_text}
                  </p>

                </div>
              )}

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="aspect-[4/5]  bg-gray-100 rounded-[3rem] overflow-hidden -rotate-2 shadow-2xl relative ">

              <Image
                 src={featuredImage || "/images/fallback.png"}
                alt={intro?.hero_title || 'Branding Service'}
                fill
                className="object-cover"
              />

            </div>

            {/* FLOATING CARD */}
            {(intro?.floating_title || intro?.floating_description) && (

              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">

                    <Layers className="w-6 h-6" />

                  </div>

                  <div>

                    <p className="text-xl font-bold text-dark">
                      {intro.floating_title}
                    </p>

                    <p className="text-sm text-gray-400">
                      {intro.floating_description}
                    </p>

                  </div>

                </div>

              </div>

            )}

          </motion.div>

        </div>

      </div>

    </section>
  );
}