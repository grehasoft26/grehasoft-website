'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { MessageSquare, Rocket } from 'lucide-react';

interface Props {
  acf: any;
}

export default function CtaSection({ acf }: Props) {
  const cta = acf?.main_service?.cta_section || {};

    if (!cta?.heading) return null;

  return (
    <section className="section-padding relative overflow-hidden border-t border-b border-white/5 text-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="container-custom   relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-dark backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -ml-32 -mb-32 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">

            {/* LEFT */}
            <div className="lg:col-span-6 flex flex-col justify-center">

              {cta?.badge_text && (
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md self-start">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">
                    {cta.badge_text}
                  </span>
                </div>
              )}

              <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight mb-8">
                {cta.heading}

                {cta?.highlight_heading && (
                  <>
                    <br />

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic font-serif font-light">
                      {cta.highlight_heading}
                    </span>
                  </>
                )}
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">

                {cta?.primary_button_text && (
                  <Link
                    href={cta?.primary_button_url?.url || '/contact'}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03]"
                  >
                    {cta.primary_button_text}

                    <MessageSquare className="w-4 h-4" />
                  </Link>
                )}

                {cta?.secondary_button_text && (
                  <Link
                    href={cta?.secondary_button_url?.url || '/contact'}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03]"
                  >
                    {cta.secondary_button_text}

                    <Rocket className="w-4 h-4 text-accent" />
                  </Link>
                )}

              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-10 space-y-8">

              {cta?.story_1_content && (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-accent font-mono">
                      {cta.story_1_label}
                    </span>
                    <div className="flex-grow h-px bg-white/10" />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {cta.story_1_content}
                  </p>
                </div>
              )}

              {cta?.story_2_content && (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary font-mono">
                      {cta.story_2_label}
                    </span>
                    <div className="flex-grow h-px bg-white/10" />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {cta.story_2_content}
                  </p>
                </div>
              )}

              {cta?.story_3_content && (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-accent font-mono">
                      {cta.story_3_label}
                    </span>
                    <div className="flex-grow h-px bg-white/10" />
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {cta.story_3_content}
                  </p>
                </div>
              )}

              {cta?.story_4_content && (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary font-mono">
                      {cta.story_4_label}
                    </span>
                    <div className="flex-grow h-px bg-white/10" />
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed italic font-medium">
                    {cta.story_4_content}
                  </p>
                </div>
              )}

            </div>

          </div>
        </motion.div>

        {/* Footer Labels */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

          {cta?.footer_label_1 && (
            <span className="text-slate-300 font-bold uppercase tracking-widest text-[9px] font-mono">
              {cta.footer_label_1}
            </span>
          )}

          {cta?.footer_label_2 && (
            <>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

              <span className="text-slate-300 font-bold uppercase tracking-widest text-[9px] font-mono">
                {cta.footer_label_2}
              </span>
            </>
          )}

          {cta?.footer_label_3 && (
            <>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

              <span className="text-slate-300 font-bold uppercase tracking-widest text-[9px] font-mono">
                {cta.footer_label_3}
              </span>
            </>
          )}

          {cta?.footer_label_4 && (
            <>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />

              <span className="text-slate-300 font-bold uppercase tracking-widest text-[9px] font-mono">
                {cta.footer_label_4}
              </span>
            </>
          )}

        </div>
      </div>
    </section>
  );
}