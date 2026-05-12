'use client';

import { motion } from 'motion/react';

interface Props {
  acf: any;
  designServices: any[];
}

export default function ServicesSection({
  acf,
  designServices,
}: Props) {

  if (!acf.services_section_title) return null;

  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          {acf.services_section_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {acf.services_section_tag}
            </span>
          )}

          <h2 className="text-4xl font-black text-dark">
            {acf.services_section_title}
          </h2>

        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {designServices?.map(
            (serviceItem, i) =>
              serviceItem.title && (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-xl relative z-10"
                >

                  {/* ICON */}
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">

                    {serviceItem.icon}

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-dark mb-4 transition-colors duration-300 group-hover:text-primary">

                    {serviceItem.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 leading-relaxed text-sm">

                    {serviceItem.desc}

                  </p>

                </motion.div>
              )
          )}

        </div>

      </div>

    </section>
  );
}