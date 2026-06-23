'use client';

import { motion } from 'motion/react';

interface Props {
  acf: any;
}

export default function GlobalExperienceSection({ acf }: Props) {

  const data = acf?.branding?.global_section || {};

  const understandPoints = [
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
  ].filter((item) => item.title);

  if (!data?.section_title) return null;

  return (

    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">

            {data?.section_tag && (

              <span className="text-primary font-black uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full">
                {data.section_tag}
              </span>

            )}

            <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-4 mb-6">
              {data.section_title}
            </h2>

            {data?.section_description && (

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {data.section_description}
              </p>

            )}

            {data?.section_description_2 && (

              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {data.section_description_2}
              </p>

            )}

            {data?.quote_text && (

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">

                <p className="text-sm text-dark font-bold italic leading-relaxed">
                  "{data.quote_text}"
                </p>

              </div>

            )}

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">

            {data?.right_tag && (

              <span className="text-accent text-xs font-black tracking-widest uppercase block mb-1">
                {data.right_tag}
              </span>

            )}

            <div className="grid grid-cols-1 gap-4">

              {understandPoints.map((item, i) => (

                <motion.div
                  key={i}
                  className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >

                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl text-primary flex-shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>

                  <div>

                    <h4 className="font-bold text-dark text-sm mb-1 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}