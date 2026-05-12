'use client';

import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

interface Props {
  acf: any;
  heroImageUrl: string;
  featuredImage: string;
  serviceTitle: string;
}

export default function HeroSection({
  acf,
  heroImageUrl,
  featuredImage,
  serviceTitle,
}: Props) {

  if (!acf.hero_title1) return null;

  return (
    <section className="section-padding overflow-hidden">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {acf.hero_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {acf.hero_tag}
              </span>
            )}

            <h2 className="text-3xl md:text-5xl font-black text-dark mb-8 leading-tight">

              {acf.hero_title1}

              {acf.hero_highlight && (
                <>
                  <br />

                  <span className="text-primary italic">
                    {acf.hero_highlight}
                  </span>
                </>
              )}

            </h2>

            {acf.hero_description && (
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {acf.hero_description}
              </p>
            )}

            {acf.hero_description_2 && (
              <div
                className="text-gray-600 mb-8 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: acf.hero_description_2,
                }}
              />
            )}

            {/* STATS */}
            <div className="flex flex-wrap gap-4">

              {acf.stat_1_number && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10 transition-all duration-500 hover:shadow-lg"
                >

                  <p className="text-primary font-black text-2xl">
                    {acf.stat_1_number}
                  </p>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {acf.stat_1_text}
                  </p>

                </motion.div>
              )}

              {acf.stat_2_number && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10 transition-all duration-500 hover:shadow-lg"
                >

                  <p className="text-accent font-black text-2xl">
                    {acf.stat_2_number}
                  </p>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {acf.stat_2_text}
                  </p>

                </motion.div>
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

            {/* IMAGE */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden rotate-2 shadow-2xl"
            >

              <img
                src={heroImageUrl || featuredImage}
                alt={serviceTitle}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block transition-all duration-500"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">

                  <Trophy className="w-6 h-6" />

                </div>

                <div>

                  <p className="text-xl font-bold text-dark">
                    {acf.stat_3_text}
                  </p>

                  <p className="text-sm text-gray-400">
                    {acf.stat_3_number}
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}