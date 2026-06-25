'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

import {
  Rocket,
  Briefcase,
  TrendingUp,
  Zap,
  Shield,
  CheckCircle,
  Camera,
} from 'lucide-react';

interface Props {
  acf: any;
}


export default function ContactSection({ acf }: Props) {

  // CONTACT SECTION
  const contact = acf?.digital_marketing?.contact_section || {};
 
  const iconMap: any = {
    Briefcase,
    TrendingUp,
    Rocket,
    Zap,
    Shield,
    CheckCircle,
    Camera,
  };

  // TOP CARD ICON
  const TopIcon =
    iconMap[contact?.contact_top_card_icon] || Briefcase;

  // BOTTOM CARD ICON
  const BottomIcon =
    iconMap[contact?.contact_bottom_card_icon] || TrendingUp;
if (!contact.contact_title) return null;
  return (

    <section className="section-padding bg-gray-50 relative overflow-hidden">

      <div className="container-custom">

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT CTA BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-dark rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center"
          >

            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />

            <div className="relative z-10">

              {contact?.contact_tag && (
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 block">
                  {contact.contact_tag}
                </span>
              )}

              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">

                {contact?.contact_title}

                <br />

                <span className="text-primary italic">
                  {contact?.contact_highlight_text}
                </span>

              </h2>

              <div className="space-y-6 text-white/70 text-lg mb-10 leading-relaxed max-w-xl">

                {contact?.contact_description_one && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contact.contact_description_one,
                    }}
                  />
                )}

                {contact?.contact_description_two && (
                  <p className="text-white font-bold lg:text-xl">
                    {contact.contact_description_two}
                  </p>
                )}

              </div>

              {/* BUTTON */}
              {contact?.contact_button_text && (
                <div className="flex flex-wrap gap-4">

                  <Link
                    href={contact?.contact_button_link || '/contact-us'}
                    className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group"
                  >

                    {contact.contact_button_text}

                    <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />

                  </Link>

                </div>
              )}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-8">

            {/* TOP CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl flex flex-col justify-center"
            >

              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">

                <TopIcon className="w-6 h-6" />

              </div>

              {contact?.contact_top_card_description && (
                <p className="text-gray-600 leading-relaxed">
                  {contact.contact_top_card_description}
                </p>
              )}

            </motion.div>

            {/* BOTTOM CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-[3rem] p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden"
            >

              <div className="absolute -bottom-8 -right-8 opacity-10">

                <BottomIcon className="w-40 h-40" />

              </div>

              {contact?.contact_bottom_card_title && (
                <h4 className="font-black text-xl mb-4 relative z-10">
                  {contact.contact_bottom_card_title}
                </h4>
              )}

              {contact?.contact_bottom_card_description && (
                <p className="text-white/90 text-sm leading-relaxed relative z-10">
                  {contact.contact_bottom_card_description}
                </p>
              )}

            </motion.div>

          </div>

        </div>

        {/* BOTTOM TRUST BAR */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

          {contact?.contact_stat_1 && (
            <>
              <span className="text-dark font-bold uppercase tracking-widest text-[10px]">
                {contact.contact_stat_1}
              </span>

              <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
            </>
          )}

          {contact?.contact_stat_2 && (
            <>
              <span className="text-dark font-bold uppercase tracking-widest text-[10px]">
                {contact.contact_stat_2}
              </span>

              <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
            </>
          )}

          {contact?.contact_stat_3 && (
            <>
              <span className="text-dark font-bold uppercase tracking-widest text-[10px]">
                {contact.contact_stat_3}
              </span>

              <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
            </>
          )}

          {contact?.contact_stat_4 && (
            <span className="text-dark font-bold uppercase tracking-widest text-[10px]">
              {contact.contact_stat_4}
            </span>
          )}

        </div>

      </div>

    </section>

  );
}