'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  acf: any;
}

export default function StandOutSection({ acf }: Props) {

  const data = acf?.branding?.standout_section || {};

  const features = [
    data?.feature_1,
    data?.feature_2,
    data?.feature_3,
    data?.feature_4,
  ].filter(Boolean);

  const standOutPoints = [
    {
      title: data?.point_1_title,
      desc: data?.point_1_description,
    },
    {
      title: data?.point_2_title,
      desc: data?.point_2_description,
    },
    {
      title: data?.point_3_title,
      desc: data?.point_3_description,
    },
    {
      title: data?.point_4_title,
      desc: data?.point_4_description,
    },
     {
      title: data?.point_5_title,
      desc: data?.point_5_description,
    },
     {
      title: data?.point_6_title,
      desc: data?.point_6_description,
    },
     {
      title: data?.point_7_title,
      desc: data?.point_7_description,
    },
     {
      title: data?.point_8_title,
      desc: data?.point_8_description,
    },

  ].filter((item) => item.title);

  if (!data?.left_title) return null;

  return (
    <section className="section-padding bg-gray-50">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-dark rounded-[3rem] p-10 md:p-16 text-white"
          >

            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
              {data.left_title}
            </h2>

            {data?.left_description && (
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                {data.left_description}
              </p>
            )}

            {data?.left_small_description && (
              <p className="text-white/40 mb-8 leading-relaxed text-sm">
                {data.left_small_description}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {features.map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />

                  <span className="font-bold text-white/90 text-sm whitespace-nowrap">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="text-center md:text-left">

            {data?.right_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {data.right_tag}
              </span>
            )}

            {data?.right_title && (
              <h3 className="text-3xl font-black text-dark mb-6">
                {data.right_title}
              </h3>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

              {standOutPoints.map((pt, i) => (

                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                >

                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-black text-xs mb-3">
                    0{i + 1}
                  </div>

                  <h4 className="font-extrabold text-sm text-dark mb-1">
                    {pt.title}
                  </h4>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pt.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}