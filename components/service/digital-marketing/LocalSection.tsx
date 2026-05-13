'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface Props {
  acf: any;
}

export default function LocalSection({ acf }: Props) {

  const localData = acf?.digital_marketing?.local_section;

  const localFeatures = [
    localData?.local_feature_one,
    localData?.local_feature_two,
    localData?.local_feature_three,
    localData?.local_feature_four,
    localData?.local_feature_five,
    localData?.local_feature_six,
  ];

  const strategies = [
    localData?.local_point_one,
    localData?.local_point_two,
    localData?.local_point_three,
    localData?.local_point_four,
    localData?.local_point_five,
    localData?.local_point_six,
  ];
if (!localData?.local_title) return null;
  return (

    <section className="section-padding bg-gray-50 relative overflow-hidden">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >

            {localData?.local_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {localData.local_tag}
              </span>
            )}

            {localData?.local_title && (
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">
                {localData.local_title}
              </h2>
            )}

            {localData?.local_description && (
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {localData.local_description}
              </p>
            )}

            {/* FEATURES */}
            <div className="space-y-4 mb-8 text-left max-w-sm mx-auto md:mx-0">

              {localFeatures.map((item, index) => (

                item && (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />

                    <span className="font-bold text-dark/80 text-sm">
                      {item}
                    </span>

                  </div>
                )

              ))}

            </div>

            {localData?.local_bottom_description && (
              <p className="text-gray-500 leading-relaxed text-lg">
                {localData.local_bottom_description}
              </p>
            )}

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
          >

            {localData?.local_right_title && (
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">
                {localData.local_right_title}
              </h2>
            )}

            {localData?.local_right_description && (
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {localData.local_right_description}
              </p>
            )}

            {/* STRATEGY POINTS */}
            <ul className="space-y-6 mb-8">

              {strategies.map((point, index) => (

                point && (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">

                      <ArrowRight className="w-3 h-3" />

                    </div>

                    <p className="text-gray-600 font-medium text-sm md:text-base">
                      {point}
                    </p>

                  </li>
                )

              ))}

            </ul>

            {localData?.local_bottom_note && (
              <p className="text-gray-500 italic text-sm leading-relaxed border-t border-gray-100 pt-6">
                {localData.local_bottom_note}
              </p>
            )}

          </motion.div>

        </div>

      </div>

    </section>

  );
}