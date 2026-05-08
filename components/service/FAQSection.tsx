'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface Props {
  acf: any;
  faqs: any[];
}

export default function FAQSection({
  acf,
  faqs,
}: Props) {

  if (!faqs?.length) return null;

  return (
    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >

            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Support & Help
            </span>

            <h2 className="text-4xl font-black text-dark mb-6">
              {acf.faq_title}
            </h2>

            {acf.faq_desc && (
              <p className="text-gray-500 mb-8">
                {acf.faq_desc}
              </p>
            )}

            {/* TESTIMONIAL */}
            {(acf.faq_testimonial_title ||
              acf.faq_testimonial_desc) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-primary rounded-3xl text-white shadow-xl"
              >

                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">

                  {acf.faq_testimonial_title}

                </p>

                <p className="text-lg italic font-medium leading-relaxed">

                  {acf.faq_testimonial_desc}

                </p>

              </motion.div>
            )}

          </motion.div>

          {/* FAQ LIST */}
          <div className="lg:col-span-2 space-y-4">

            {faqs?.map(
              (faq, i) =>
                faq.q && (

                  <motion.details
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.5,
                    }}
                    className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
                  >

                    <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-dark">

                      {faq.q}

                      <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />

                    </summary>

                    <div className="px-6 pb-6 text-gray-500 border-t border-gray-100 pt-4 leading-relaxed text-sm">

                      {faq.a}

                    </div>

                  </motion.details>
                )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}