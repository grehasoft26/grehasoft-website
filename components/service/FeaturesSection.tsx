'use client';

import { motion } from 'motion/react';

interface Props {
  acf: any;
  websiteFeatures: any[];
}

export default function FeaturesSection({
  acf,
  websiteFeatures,
}: Props) {

  if (!acf.feature_section_title) return null;

  return (
    <section className="section-padding bg-dark text-white overflow-hidden relative">

      {/* BACKGROUND PATTERN */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >

          <div className="max-w-2xl">

            {acf.feature_section_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {acf.feature_section_tag}
              </span>
            )}

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">

              {acf.feature_section_title}

              {acf.feature_section_highlight && (
                <>
                  <br />

                  <span className="text-primary italic">
                    {acf.feature_section_highlight}
                  </span>
                </>
              )}

            </h2>

            {acf.feature_section_description && (
              <p className="text-white/50 text-lg">
                {acf.feature_section_description}
              </p>
            )}

          </div>

        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">

          {websiteFeatures?.map(
            (feature, i) =>
              feature.title && (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.05,
                  }}
                  className={`group p-6 rounded-3xl border transition-all duration-500 flex flex-col justify-between h-full ${
                    i % 3 === 0
                      ? 'bg-white/5 border-white/10 hover:bg-primary hover:border-primary'
                      : 'bg-white/5 border-white/10 hover:bg-accent hover:border-accent'
                  }`}
                >

                  <div>

                    {/* ICON */}
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-dark transition-colors">

                      {feature.icon}

                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg font-black text-primary mb-3 group-hover:text-white transition-colors leading-tight">

                      {feature.title}

                    </h3>

                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/90 transition-colors">

                    {feature.desc}

                  </p>

                </motion.div>
              )
          )}

        </div>

      </div>

    </section>
  );
}