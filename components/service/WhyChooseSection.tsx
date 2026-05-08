'use client';

import { motion } from 'motion/react';

interface Props {
  acf: any;
  whyChooseUs: any[];
}

export default function WhyChooseSection({
  acf,
  whyChooseUs,
}: Props) {

  if (!acf.why_title) return null;

  return (
    <section className="section-padding bg-gray-50 overflow-hidden relative">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -mr-96 -mt-96" />

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          {acf.why_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              {acf.why_tag}
            </span>
          )}

          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
            {acf.why_title}
          </h2>

          {acf.why_description && (
            <p className="text-gray-600 leading-relaxed">
              {acf.why_description}
            </p>
          )}

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">

          {whyChooseUs?.map(
            (reason, i) =>
              reason.title && (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                  }}
                  className="group p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start"
                >

                  {/* ICON */}
                  <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">

                    <div className="scale-125">
                      {reason.icon}
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="font-bold text-dark mb-3 text-2xl group-hover:text-accent transition-colors">

                      {reason.title}

                    </h3>

                    <p className="text-gray-500 leading-relaxed text-sm">

                      {reason.desc}

                    </p>

                  </div>

                </motion.div>
              )
          )}

        </div>

      </div>

    </section>
  );
}