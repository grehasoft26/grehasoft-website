'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  acf: any;
}

export default function StandOutSection({ acf }: Props) {
console.log(acf);
const data = acf?.digital_marketing?.expertise_section || {};
if (!data?.expert_left_title) return null;
  return (

    <section className="section-padding overflow-hidden">

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT BOX */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark rounded-[3rem] p-10 md:p-16 text-white"
          >

            {data?.expert_left_title && (
               <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
                {data.expert_left_title}
              </h2>
            )}

        {data?.expert_left_description && (
  <p className="text-gray-300 text-lg leading-relaxed mb-8">
    {data.expert_left_description}
  </p>
)}

{data?.expert_left_small_description && (
  <p className="text-gray-400 leading-relaxed mb-10">
    {data.expert_left_small_description}
  </p>
)}

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-6">

              {data?.expert_feature_one && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {data.expert_feature_one}
                  </span>
                </div>
              )}

              {data?.expert_feature_two && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {data.expert_feature_two}
                  </span>
                </div>
              )}

              {data?.expert_feature_three && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {data.expert_feature_three}
                  </span>
                </div>
              )}

              {data?.expert_feature_four && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {data.expert_feature_four}
                  </span>
                </div>
              )}
               {data?.expert_feature_five && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {data.expert_feature_five}
                  </span>
                </div>
              )}
               {data?.expert_feature_six && (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">
                    {data.expert_feature_six}
                  </span>
                </div>
              )}

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {data?.expert_right_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {data.expert_right_tag}
              </span>
            )}

            {data?.expert_right_title && (
               <h3 className="text-3xl font-black text-dark mb-6">
                {data.expert_right_title}
              </h3>
            )}

            {data?.expert_right_description_one && (
             
               <div
                className="text-gray-600 mb-6 text-lg leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html:data.expert_right_description_one,
                }}
              />
            )}
            

            {data?.expert_right_description_two && (
              
              <div
                className="text-gray-600 leading-relaxed mb-10"
                dangerouslySetInnerHTML={{
                  __html:data.expert_right_description_two,
                }}
              />
            )}

            {data?.expert_highlight_text && (
              

                 <p className="text-primary font-bold leading-relaxed italic border-l-4 border-primary pl-6">
                    {data.expert_highlight_text}
                </p>

             
            )}

          </motion.div>

        </div>

      </div>

    </section>

  );
}