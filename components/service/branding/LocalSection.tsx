'use client';

import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  acf: any;
}

export default function LocalSection({ acf }: Props) {

  const localData = acf?.branding?.local_section || {};

  const localExpertise = [
    {
      title: localData?.local_feature_1_title,
      desc: localData?.local_feature_1_description,
    },
    {
      title: localData?.local_feature_2_title,
      desc: localData?.local_feature_2_description,
    },
    {
      title: localData?.local_feature_3_title,
      desc: localData?.local_feature_3_description,
    },
    {
      title: localData?.local_feature_4_title,
      desc: localData?.local_feature_4_description,
    },
    {
      title: localData?.local_feature_5_title,
      desc: localData?.local_feature_5_description,
    },
    {
      title: localData?.local_feature_6_title,
      desc: localData?.local_feature_6_description,
    },
  ].filter((item) => item.title);

  const strategySteps = [
    localData?.strategy_point_1,
    localData?.strategy_point_2,
    localData?.strategy_point_3,
    localData?.strategy_point_4,
    localData?.strategy_point_5,
    localData?.strategy_point_6,
  ].filter(Boolean);

  if (!localData?.local_title) return null;

  return (

    <section className="section-padding bg-gray-50 relative overflow-hidden">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">

            {localData?.local_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {localData.local_tag}
              </span>
            )}

            <h2 className="text-4xl font-black text-dark mb-6 leading-tight">
              {localData.local_title}
            </h2>

            {localData?.local_description && (
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {localData.local_description}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">

              {localExpertise.map((item, i) => (

                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                >

                  <div className="flex items-center gap-2 mb-2">

                    <CheckCircle2 className="text-primary w-4 h-4 flex-shrink-0" />

                    <span className="font-bold text-dark text-xs">
                      {item.title}
                    </span>

                  </div>

                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              ))}

            </div>

            {localData?.local_bottom_description && (
              <p className="text-gray-500 leading-relaxed text-lg">
                {localData.local_bottom_description}
              </p>
            )}

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
          >

            {localData?.strategy_tag && (
              <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black block mb-2">
                {localData.strategy_tag}
              </span>
            )}

            <h2 className="text-4xl font-black text-dark mb-6 leading-tight">
              {localData.strategy_title}
            </h2>

            {localData?.strategy_description && (
              <div
                className="text-gray-600 mb-8 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: localData.strategy_description,
                }}
              />
            )}

            <ul className="space-y-6">

              {strategySteps.map((point, i) => (

                <li
                  key={i}
                  className="flex items-start gap-4"
                >

                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">

                    <ArrowRight className="w-3 h-3" />

                  </div>

                  <p className="text-gray-600 font-semibold text-sm md:text-base">
                    {point}
                  </p>

                </li>

              ))}

            </ul>

            {localData?.strategy_bottom_note && (

              <p className="text-gray-500 italic text-sm leading-relaxed border-t border-gray-100 pt-6 mt-8">
                {localData.strategy_bottom_note}
              </p>

            )}

          </motion.div>

        </div>

      </div>

    </section>

  );
}