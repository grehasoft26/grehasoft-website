'use client';

import { motion } from 'motion/react';
import {
  Globe,
  MapPin,
  Rocket,
  Shield,
  TrendingUp,
  Zap,
   MessageSquare,
   Target,
   Camera,
   Palette,
   Users,
    BadgeHelp,
  BadgeCheck,
  FileText,
  Heart,
  Megaphone,
  Sparkles,
  Eye,
  
  
  Layers,
   TimerReset,
   Clock3,
  ShieldCheck,
  Activity,
 
  ChartColumn,

 Cpu,
 Layers3,
  
} from 'lucide-react';

interface Props {
  acf: any;
}

export default function WhySEOSection({ acf }: Props) {

  const whySeo = acf?.digital_marketing?.why_seo_section;

  const iconMap: any = {
    MapPin: MapPin,
    Globe: Globe,
    Zap: Zap,
    TrendingUp: TrendingUp,
    Shield: Shield,
    Rocket: Rocket,
    MessageSquare: MessageSquare,
    Target: Target,
    Camera: Camera,
    Palette: Palette,
    Users: Users,
    BadgeHelp: BadgeHelp,
    BadgeCheck: BadgeCheck,
    FileText: FileText,
    Heart: Heart,
    Megaphone: Megaphone,
    Sparkles: Sparkles,
    Eye: Eye,
    Layers: Layers,
    TimerReset: TimerReset,
    Clock3: Clock3,
    ShieldCheck: ShieldCheck,
    Activity: Activity,
    
    ChartColumn: ChartColumn,
      Cpu: Cpu,
      Layers3: Layers3,
    

  };

  const cards = [
    {
      title: whySeo?.why_seo_card1_title,
      icon: whySeo?.why_seo_card1_icon,
    },
    {
      title: whySeo?.why_seo_card2_title,
      icon: whySeo?.why_seo_card2_icon,
    },
    {
      title: whySeo?.why_seo_card3_title,
      icon: whySeo?.why_seo_card3_icon,
    },
    {
      title: whySeo?.why_seo_card4_title,
      icon: whySeo?.why_seo_card4_icon,
    },
    {
      title: whySeo?.why_seo_card5_title,
      icon: whySeo?.why_seo_card5_icon,
    },
  ];
if (!whySeo?.why_seo_title_1) return null;
  return (
    <section className="section-padding bg-dark text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="container-custom relative z-10">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 text-center lg:text-left lg:sticky lg:top-32">

            {whySeo?.why_seo_tag && (
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
                {whySeo.why_seo_tag}
              </span>
            )}

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">

              {whySeo?.why_seo_title_1}

              <br />

              <span className="text-primary italic">
                {whySeo?.why_seo_highlight}
              </span>

            </h2>

            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
 {whySeo?.why_seo_description_1 && (
              <div
                className="text-gray-60 mb-6 text-lg leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: whySeo.why_seo_description_1,
                }}
              />
            )}

             

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">

            {/* QUOTE */}
            {whySeo?.why_seo_quote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border-l-4 border-primary p-8 rounded-r-[3rem] mb-12 shadow-2xl backdrop-blur-sm"
              >

                <p className="text-white/90 text-lg md:text-xl font-medium italic leading-relaxed">
                  {whySeo.why_seo_quote}
                </p>

              </motion.div>
            )}

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">

              {cards.map((item, i) => {

                const IconComponent = iconMap[item.icon] || Globe;

                return (
                  item.title && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-5 hover:bg-white/10 hover:border-primary/30 transition-all group"
                    >

                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white transition-all shadow-inner">

                        <IconComponent className="w-5 h-5" />

                      </div>

                      <div
                        className=" text-white/90 leading-snug text-sm"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />

                    </motion.div>
                  )
                );
              })}

              {/* BOTTOM CARD */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-primary/20 border border-primary/30 p-6 rounded-[2rem] flex flex-col justify-center items-center text-center gap-4"
              >

                {(() => {

                  const BottomIcon =
                    iconMap[whySeo?.why_seo_bottom_icon] || Rocket;

                  return <BottomIcon className="w-8 h-8 text-primary mb-1" />;

                })()}

                <p className="font-black text-lg text-white uppercase tracking-tighter">
                  {whySeo?.why_seo_bottom_title}
                </p>

                <p className="text-white/60 text-[9px] uppercase tracking-[0.2em]">
                  {whySeo?.why_seo_bottom_small_text}
                </p>

              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}