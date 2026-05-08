'use client';

import { motion } from 'motion/react';
import { Store } from 'lucide-react';

interface Props {
  acf: any;
  industries: string[];
}

export default function IndustriesSection({
  acf,
  industries,
}: Props) {

  if (!industries?.length) return null;

  return (
    <section className="section-padding bg-gray-50">

      <div className="container-custom">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          {acf.industries_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {acf.industries_tag}
            </span>
          )}

          {acf.industries_title && (
            <h2 className="text-4xl font-black text-dark mb-6">
              {acf.industries_title}
            </h2>
          )}

          {acf.industry_desc && (
            <p className="text-gray-600 leading-relaxed">
              {acf.industry_desc}
            </p>
          )}

        </motion.div>

        {/* INDUSTRIES GRID */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {industries?.map((industry, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.05,
                duration: 0.5,
              }}
              whileHover={{ y: -5 }}
             className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-all duration-500"
            >

              {/* ICON */}
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">

                <Store className="w-5 h-5" />

              </div>

              {/* TITLE */}
              <span className="font-bold text-dark text-sm group-hover:text-primary transition-colors duration-300">

                {industry}

              </span>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}