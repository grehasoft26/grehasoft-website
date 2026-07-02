'use client';

import { motion } from 'motion/react';

import {
  Sparkles,
  Shield,
  Layers3,
  TrendingUp,
  Users,
  BadgeHelp,
  Rocket,
  MoveUpRight,
  Layers,
  FileText,
  BadgeCheck,
  Eye,
  ArrowRight,
Monitor,
Globe,
  MapPin,
 
  
  
  Zap,
   MessageSquare,
   Target,
   Camera,
   Palette,
  
   
  
  
  Heart,
  Megaphone,
  
 
  
  
  
   TimerReset,
   Clock3,
  ShieldCheck,
  Activity,
 
  ChartColumn,

 Cpu,
 
  
 
  Settings,
  Microchip,
  
 
} from 'lucide-react';

interface Props {
  acf: any;
}

const iconMap: any = {
  Sparkles,
  Shield,
  Layers3,
  TrendingUp,
  Users,
  BadgeHelp,
  Rocket,
  MoveUpRight,
  Layers,
  FileText,
  BadgeCheck,
  Eye,
  ArrowRight,
Monitor,
Globe,
  MapPin,
  Zap,
    MessageSquare,
    Target,
  Camera,
  Palette,
  Heart,
  Megaphone,
  TimerReset,
  Clock3,
  ShieldCheck,
  Activity,
  ChartColumn,
  Cpu,
 
 
 
  Settings,
  Microchip,
 
};

export default function WhyBrandingSection({ acf }: Props) {

  const data = acf?.branding?.why_branding_section || {};

  const whyNeedsBranding = [
    {
      title: data?.card_1_title,
      icon: data?.card_1_icon,
    },
    {
      title: data?.card_2_title,
      icon: data?.card_2_icon,
    },
    {
      title: data?.card_3_title,
      icon: data?.card_3_icon,
    },
    {
      title: data?.card_4_title,
      icon: data?.card_4_icon,
    },
    {
      title: data?.card_5_title,
      icon: data?.card_5_icon,
    },
    {
      title: data?.card_6_title,
      icon: data?.card_6_icon,
    },
  ].filter((item) => item.title);

  if (!data?.section_title) return null;

  return (

    <section className="section-padding bg-dark text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-32">

            {data?.section_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
                {data.section_tag}
              </span>
            )}

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">

              {data.section_title}

              {data?.section_highlight && (
                <>
                  <br />
                  <span className="text-primary italic">
                    {data.section_highlight}
                  </span>
                </>
              )}

            </h2>

            <div className="space-y-6 text-white/60 text-lg leading-relaxed">

              {data?.description_1 && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.description_1,
                  }}
                />
              )}

              {data?.description_2 && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.description_2,
                  }}
                />
              )}

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">

            {data?.quote_text && (

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border-l-4 border-primary p-8 rounded-r-[3rem] mb-12 shadow-2xl backdrop-blur-sm"
              >

                <p className="text-white/90 text-lg md:text-xl font-medium italic leading-relaxed">
                  {data.quote_text}
                </p>

              </motion.div>

            )}

            {/* CARDS GRID */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">

              {whyNeedsBranding.map((item, i) => {

                const IconComponent =
                  iconMap[item.icon] || Sparkles;

                return (

                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-5 hover:bg-white/10 hover:border-primary/30 transition-all group animate-[fadeIn_0.5s_ease-out]"
                  >

                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all duration-300">

                      <IconComponent className="w-5 h-5" />

                    </div>

                    <p className="font-bold text-white/90 leading-snug text-sm">
                      {item.title}
                    </p>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}