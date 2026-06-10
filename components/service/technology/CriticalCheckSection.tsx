'use client';

import { motion } from 'motion/react';

interface Props {
  acf: any;
}

export default function CriticalCheckSection({ acf }: Props) {
  const data = acf?.technology?.critical_check_section || {};
  if (!data?.signs_title) return null;

  const signsList = [
    {
      title: data.sign_1_title,
      desc: data.sign_1_desc,
    },
    {
      title: data.sign_2_title,
      desc: data.sign_2_desc,
    },
    {
      title: data.sign_3_title,
      desc: data.sign_3_desc,
    },
    
    {
      title: data.sign_4_title,
      desc: data.sign_4_desc,
    },
    {
      title: data.sign_5_title,
      desc: data.sign_5_desc,
    },
    {
      title: data.sign_6_title,
      desc: data.sign_6_desc,
    },
    {
      title: data.sign_7_title,
      desc: data.sign_7_desc,
    },
    {
      title: data.sign_8_title,
      desc: data.sign_8_desc,
    },

  ].filter((item) => item.title);

  return (
    <section className="section-padding bg-gray-50 font-sans">
      <div className="container-custom">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {data?.signs_badge && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block text-red-500">
              {data.signs_badge}
            </span>
          )}

          {data?.signs_title && (
            <h2 className="text-4xl font-black text-dark mb-6">
              {data.signs_title}
            </h2>
          )}

          {data?.signs_description && (
            <p className="text-gray-600 text-lg">
              {data.signs_description}
            </p>
          )}
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signsList.map((sign, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:border-red-500/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                <span className="text-xs font-mono font-black">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h4 className="font-bold text-dark text-md mb-3 leading-snug">
                {sign.title}
              </h4>

              <p className="text-gray-500 text-xs leading-relaxed">
                {sign.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        {data?.signs_bottom_text && (
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 font-semibold italic">
              {data.signs_bottom_text}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}