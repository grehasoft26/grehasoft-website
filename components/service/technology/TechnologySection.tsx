'use client';

import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

interface Props {
  acf: any;
}

export default function TechnologySection({ acf }: Props) {
  const data = acf?.technology?.technologies_section || {};

  if (!data?.section_title) return null;

  const technologies = [
  {
    category: data.category_1,
    items: data.items_1?.split(","),
  },
  {
    category: data.category_2,
    items: data.items_2?.split(","),
  },
  {
    category: data.category_3,
    items: data.items_3?.split(","),
  },
  {
    category: data.category_4,
    items: data.items_4?.split(","),
  },
  {
    category: data.category_5,
    items: data.items_5?.split(","),
  },
].filter((item) => item.category);
  return (
    <section className="section-padding bg-gray-50 border-t border-b border-gray-100">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
         {data?.section_subtitle && (
  <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
    {data.section_subtitle}
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-between hover:border-primary/20 hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>

                <span className="text-xs font-black uppercase text-dark tracking-wider block mb-4 border-b border-gray-100 pb-2">
                  {tech.category}
                </span>

                <ul className="space-y-2">
                  {tech.items?.map((item: string, i: number) => (
                    <li
                      key={i}
                      className="text-xs text-gray-500 font-semibold flex items-center gap-1.5 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}