'use client';

import { motion } from 'motion/react';

import {
  Globe,
  Building2,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  Users,
  Store,
  Rocket,
  Palette,
  Monitor,
  Utensils,
  Stethoscope,
 
  HeartPulse,
 
  Compass,
  TrendingUp,
 
  Microchip,
  Code2,
  
  BadgeCheck,
   
  Smartphone,
 
} from 'lucide-react';

interface Props {
  acf: any;
}

export default function IndustriesSection({ acf }: Props) {

  const industry = acf?.branding?.industry_section || {};

  const iconMap: any = {
    Globe,
    Building2,
    ShoppingBag,
    GraduationCap,
    Briefcase,
    Users,
    Store,
    Rocket,
    Palette,
    Monitor,
    Utensils,
    Stethoscope,
    
  HeartPulse,
 
  Compass,
  TrendingUp,
  
  Microchip,
  Code2,
 
  BadgeCheck,
  Smartphone,
  };

  const industries = [
    {
      name: industry?.industry1_title,
      icon: industry?.industry1_icon,
    },
    {
      name: industry?.industry_2_title,
      icon: industry?.industry_2_icon,
    },
    {
      name: industry?.industry_3_title,
      icon: industry?.industry_3_icon,
    },
    {
      name: industry?.industry_4_title,
      icon: industry?.industry_4_icon,
    },
    {
      name: industry?.industry_5_title,
      icon: industry?.industry_5_icon,
    },
    {
      name: industry?.industry_6_title,
      icon: industry?.industry_6_icon,
    },
    {
      name: industry?.industry_7_title,
      icon: industry?.industry_7_icon,
    },
    {
      name: industry?.industry_8_title,
      icon: industry?.industry_8_icon,
    },
    {
      name: industry?.industry_9_title,
      icon: industry?.industry_9_icon,
    },
  ].filter((item) => item.name);

  if (!industry?.industry_title) return null;

  return (

    <section className="section-padding bg-gray-50 overflow-hidden">

      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          {industry?.industry_tag && (

            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {industry.industry_tag}
            </span>

          )}

          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
            {industry.industry_title}
          </h2>

          {industry?.industry_description && (

            <p className="text-gray-600 text-lg leading-relaxed">
              {industry.industry_description}
            </p>

          )}

        </div>

        {/* INDUSTRIES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">

          {industries.map((item, index) => {

            const IconComponent =
              iconMap[item.icon] || Globe;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >

                <div className="flex flex-col items-center text-center gap-4">

                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">

                    <IconComponent className="w-6 h-6" />

                  </div>

                  <span className="font-bold text-dark text-sm leading-tight">
                    {item.name}
                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* BOTTOM TEXT */}
        {industry?.industry_bottom_text && (

          <div className="max-w-4xl mx-auto text-center">

            <p className="text-gray-500 leading-relaxed italic border-t border-gray-200 pt-10">
              {industry.industry_bottom_text}
            </p>

          </div>

        )}

      </div>

    </section>

  );
}