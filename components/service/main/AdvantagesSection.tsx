'use client';

import { motion } from 'motion/react';
import {
  Globe,
  BarChart3,
  TrendingUp,
  Target,
  Users,
   Workflow,
  ShieldCheck,
  Waypoints,
} from 'lucide-react';

interface Props {
  acf: any;
}

export default function AdvantagesSection({ acf }: Props) {
  const data =
    acf?.main_service?.advantages_section || {};

  if (!data?.section_title) return null;

  const Icons = {
    Globe,
    BarChart3,
    TrendingUp,
    Target,
    Users,
     Workflow,
  ShieldCheck,
  Waypoints,
  };

  const cards = [
    {
      icon: data.card_1_icon,
      subtitle: data.card_1_subtitle,
      title: data.card_1_title,
      desc: data.card_1_description,
      tagline: data.card_1_tagline,
    },
    {
      icon: data.card_2_icon,
      subtitle: data.card_2_subtitle,
      title: data.card_2_title,
      desc: data.card_2_description,
      tagline: data.card_2_tagline,
    },
    {
      icon: data.card_3_icon,
      subtitle: data.card_3_subtitle,
      title: data.card_3_title,
      desc: data.card_3_description,
      tagline: data.card_3_tagline,
    },
    {
      icon: data.card_4_icon,
      subtitle: data.card_4_subtitle,
      title: data.card_4_title,
      desc: data.card_4_description,
      tagline: data.card_4_tagline,
    },
    {
      icon: data.card_5_icon,
      subtitle: data.card_5_subtitle,
      title: data.card_5_title,
      desc: data.card_5_description,
      tagline: data.card_5_tagline,
    },
  ].filter((item) => item.title);

  return (
    <section
      className="section-padding bg-white overflow-hidden relative"
      id="advantages_section"
    >
      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          {data?.section_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              {data.section_tag}
            </span>
          )}

          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
            {data.section_title}{' '}

            {data?.highlight_title && (
              <span className="text-primary">
                {data.highlight_title}
              </span>
            )}
          </h2>

          {data?.section_description && (
            <p className="text-text-gray text-lg leading-relaxed font-sans">
              {data.section_description}
            </p>
          )}

        </div>

        {/* FIRST ROW */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">

          {cards.slice(0, 3).map((item, i) => {
            const Icon =
              Icons[item.icon as keyof typeof Icons] || Globe;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">

                  <div className="scale-125">
                    <Icon className="w-6 h-6" />
                  </div>

                </div>

                <div>

                  {item.subtitle && (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">
                        {item.subtitle}
                      </span>
                    </div>
                  )}

                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {item.desc && (
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  )}

                  {item.tagline && (
                    <p className="text-[11px] text-primary italic font-medium pt-3 mt-3 border-t border-gray-100 font-sans w-full">
                      {item.tagline}
                    </p>
                  )}

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* SECOND ROW */}
        {cards.length > 3 && (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 justify-center mt-8 max-w-4xl mx-auto">

            {cards.slice(3).map((item, i) => {
              const Icon =
                Icons[item.icon as keyof typeof Icons] || Globe;

              return (
                <motion.div
                  key={i + 3}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                  }}
                  className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">

                    <div className="scale-125">
                      <Icon className="w-6 h-6" />
                    </div>

                  </div>

                  <div>

                    {item.subtitle && (
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">
                          {item.subtitle}
                        </span>
                      </div>
                    )}

                    <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {item.desc && (
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    )}

                    {item.tagline && (
                      <p className="text-[11px] text-primary italic font-medium pt-3 mt-3 border-t border-gray-100 font-sans w-full">
                        {item.tagline}
                      </p>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>
        )}

        {/* BOTTOM QUOTE */}
        {data?.bottom_quote && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center max-w-3xl mx-auto p-10 bg-gray-50 rounded-[3rem] border border-dashed border-primary/30"
          >
            <p className="text-gray-700 font-medium leading-relaxed italic text-lg">
              "{data.bottom_quote}"
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}