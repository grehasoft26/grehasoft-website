'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

import {
  Sparkles,
  Award,
  CheckCircle2,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface Props {
  acf: any;
}

export default function ContactSection({ acf }: Props) {

  const contact = acf?.branding?.contact_section || {};

  if (!contact?.contact_title) return null;

  return (

    <section className="section-padding bg-gradient-to-br from-gray-950 via-dark to-black text-white relative overflow-hidden py-24 lg:py-32 border-t border-white/5">

      {/* BG EFFECTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">

            {contact?.contact_badge_text && (

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-widest">

                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />

                {contact.contact_badge_text}

              </div>

            )}

            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">

              {contact.contact_title}

              {contact?.contact_highlight && (

                <>
                  <br />

                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-accent">
                    {contact.contact_highlight}
                  </span>

                </>

              )}

            </h2>

            {/* ASSET CARD */}
            <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl text-left">

              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">

                <Award className="w-6 h-6" />

              </div>

              {contact?.asset_card_title && (

                <h3 className="text-lg md:text-xl font-bold text-white mt-1 leading-snug">
                  {contact.asset_card_title}
                </h3>

              )}

              {contact?.asset_card_description && (

                <p className="text-white/60 text-smmt-3 leading-relaxed">
                  {contact.asset_card_description}
                </p>

              )}

            </div>

            {/* STRATEGY CARD */}
            {contact?.strategy_card_text && (

              <div className="flex gap-4 p-6 bg-white/[0.01] border border-white/5 rounded-2xl text-left">

                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">

                  <CheckCircle2 className="w-4 h-4" />

                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  {contact.strategy_card_text}
                </p>

              </div>

            )}

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 space-y-6">

            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-10 space-y-6 text-left">

              <div className="flex items-center gap-3 border-b border-white/5 pb-5">

                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">

                  <Layers className="w-5 h-5" />

                </div>

                <div>

                  <h4 className="font-extrabold text-white text-base leading-none">
                    {contact.right_panel_title}
                  </h4>

                  <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">
                    {contact.right_panel_subtitle}
                  </span>

                </div>

              </div>

              {contact?.right_panel_description_1 && (

                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {contact.right_panel_description_1}
                </p>

              )}

              {/* EXPERIENCE BOX */}
              <div className="grid grid-cols-12 gap-5 bg-white/[0.02] p-5 rounded-2xl border border-white/5 items-center">

                <div className="col-span-3 text-center border-r border-white/5">

                  <p className="text-3xl font-black text-primary leading-none">
                    {contact.experience_number}
                  </p>

                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1">
                    {contact.experience_label}
                  </p>

                </div>

                <div className="col-span-9 text-sm text-white/60 leading-relaxed pl-2">

                  {contact.experience_description}

                </div>

              </div>

              {contact?.right_panel_description_2 && (

                <p className="font-semibold text-white/80 text-sm sm:text-sm leading-relaxed border-t border-white/5 pt-5">

                  {contact.right_panel_description_2}

                </p>

              )}

            </div>

            {/* CTA BOX */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-3xl p-8 text-center md:text-left flex flex-col sm:flex-row items-center justify-between gap-6">

              <div className="space-y-1 z-10 text-left">

                <h4 className="font-bold text-white text-base md:text-lg leading-tight">
                  {contact.cta_title}
                </h4>

                <p className="text-white/50 text-[11px] leading-snug">
                  {contact.cta_description}
                </p>

              </div>

              <div className="z-10 flex-shrink-0">

                <Link
                  href={contact?.cta_button_link || '/contact'}
                  className="bg-primary hover:bg-emerald-500 text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2 uppercase tracking-wider"
                >

                  <span>{contact.cta_button_text}</span>

                  <ArrowRight className="w-4 h-4" />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}