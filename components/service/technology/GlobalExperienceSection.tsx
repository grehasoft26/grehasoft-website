'use client';

import { motion } from 'motion/react';

interface Props {
  acf: any;
}

export default function GlobalExperienceSection({ acf }: Props) {
  const data = acf?.technology?.global_experience_section || {};

  if (!data?.section_title) return null;

  const cards = [
    {
      benchmark: data.benchmark_1,
      title: data.card_title_1,
      description: data.card_description_1,
    },
    {
      benchmark: data.benchmark_2,
      title: data.card_title_2,
      description: data.card_description_2,
    },
    {
      benchmark: data.benchmark_3,
      title: data.card_title_3,
      description: data.card_description_3,
    },
    {
      benchmark: data.benchmark_4,
      title: data.card_title_4,
      description: data.card_description_4,
    },
    {
      benchmark: data.benchmark_5,
      title: data.card_title_5,
      description: data.card_description_5,
    },
    {
      benchmark: data.benchmark_6,
      title: data.card_title_6,
      description: data.card_description_6,
    },
  ].filter((card) => card.title);

  return (
    <section className="section-padding bg-white border-b border-gray-100">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {data?.section_badge && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {data.section_badge}
            </span>
          )}

          {data?.section_title && (
            <h2 className="text-4xl font-black text-dark mb-6">
              {data.section_title}
            </h2>
          )}

          {data?.section_description && (
            <p className="text-gray-600">
              {data.section_description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-primary font-mono text-[10px] font-black tracking-widest uppercase block mb-3">
                  {card.benchmark}
                </span>

                <h4 className="font-bold text-dark text-lg mb-3 leading-snug">
                  {card.title}
                </h4>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {data?.bottom_description && (
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 font-medium italic">
              {data.bottom_description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

