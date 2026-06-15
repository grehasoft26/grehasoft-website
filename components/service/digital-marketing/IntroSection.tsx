'use client';

import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import Image from "next/image";
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

  if (!acf.hero_title1) return null;

  return (

    <section className="section-padding overflow-hidden text-center md:text-left">

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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark mb-8 leading-tight">

              {acf.hero_title1}

              {acf.hero_highlight && (
                <>
                  <br />

                  <span className="text-primary italic">
                    {acf.hero_highlight}
                  </span>
                </>
              )}

            </h1>

            {acf.hero_description && (
              <div
                className="text-gray-600 mb-6 text-lg leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: acf.hero_description,
                }}
              />
            )}

            {acf.hero_description_2 && (
              <div
                className="text-gray-600 mb-6 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: acf.hero_description_2,
                }}
              />
            )}

            {acf.hero_description_3 && (
              <div
                className="text-gray-600 mb-8 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: acf.hero_description_3,
                }}
              />
            )}

            {/* STATS */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">

              {acf.stat_1_number && (
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">

                  <p className="text-primary font-black text-2xl">
                    {acf.stat_1_number}
                  </p>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {acf.stat_1_text}
                  </p>

                </div>
              )}

              {acf.stat_2_number && (
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">

                  <p className="text-accent font-black text-2xl">
                    {acf.stat_2_number}
                  </p>

                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {acf.stat_2_text}
                  </p>

                </div>
              )}

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>
  {/* MAIN IMAGE CARD */}
  <motion.div
    className="relative aspect-[4/5] w-full max-w-[500px] bg-gray-100 rounded-[3rem] overflow-hidden rotate-2 shadow-2xl"
    animate={{
      y: [0, -15, 0],
      rotate: [2, 3, 2],
    }}
    transition={{
      y: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
  >
    <Image
      src={heroImageUrl || featuredImage}
      alt={acf?.hero_title1 || "Service Image"}
      fill
      className="object-cover"
      priority
    />
  </motion.div>

  {/* TOP RIGHT FLOATING BADGE */}
  <motion.div
    className="absolute top-10 -right-4 lg:-right-8 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3"
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="w-3 h-3 bg-green-500 rounded-full" />
    <span className="text-sm font-semibold text-dark">
      High Performance
    </span>
  </motion.div>

  {/* BOTTOM LEFT FLOATING BADGE */}
  <motion.div
    className="absolute bottom-16 -left-4 lg:-left-8 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3"
    animate={{
      y: [0, 12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    
    
  </motion.div>

  {/* EXISTING STATS CARD */}
  {acf.stat_3_text && (
    <motion.div
      className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          <TrendingUp className="w-6 h-6" />
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
  )}
</motion.div>

        </div>

      </div>

    </section>

  );
}