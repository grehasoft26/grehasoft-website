'use client';

import { motion } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Terminal,
  Rocket,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  acf: any;
  heroImageUrl?: string;
  featuredImage?: any;
}

export default function IntroSection({
  acf,
  heroImageUrl,
  featuredImage,
}: Props) {
  const intro = acf?.main_service?.intro_section || {};

  if (!intro?.main_title) return null;

  const features = [
    intro.feature_one,
    intro.feature_two,
    intro.feature_three,
    intro.feature_four,
    intro.feature_five,
    intro.feature_six,
  ].filter(Boolean);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {intro?.tag && (
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
                {intro.tag}
              </span>
            )}

            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              {intro.main_title}

              {intro?.highlight_title && (
                <>
                  {' '}
                  <span className="text-primary">
                    {intro.highlight_title}
                  </span>
                </>
              )}
            </h2>

            {intro?.description_one && (
              <div
                className="text-gray-600 mb-6 text-lg leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html:intro.description_one,
                }}
              />
            )}


            {intro?.description_two && (
             <div
                className="text-gray-600 mb-6 text-lg leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html:intro.description_two,
                }}
              />
            )}

            {/* FEATURES */}
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* BUTTON */}
            {intro?.button_text && (
              <Link
                href={intro.button_url || '/contact'}
                className="btn-primary inline-flex items-center gap-2"
              >
                {intro.button_text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <Image
                src={
                  intro?.main_image?.url ||
                  '/images/fallback.png'
                }
                alt={intro?.title || 'Technology Services'}
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
              
              {(intro?.stat_one_number || intro?.stat_one_label) && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Terminal className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-dark">
                      {intro.stat_one_number}
                    </p>

                    <p className="text-xs text-text-gray uppercase font-bold">
                      {intro.stat_one_label}
                    </p>
                  </div>
                </div>
              )}

              {(intro?.stat_two_number || intro?.stat_two_label) && (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Rocket className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-dark">
                      {intro.stat_two_number}
                    </p>

                    <p className="text-xs text-text-gray uppercase font-bold">
                      {intro.stat_two_label}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}