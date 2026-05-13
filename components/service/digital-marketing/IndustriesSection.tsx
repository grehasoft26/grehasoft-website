'use client';

import { motion } from 'motion/react';

import {
  Globe,
  Monitor,
  Stethoscope,
  Building2,
  GraduationCap,
  Users,
  Utensils,
  ShoppingBag,
  Briefcase,
} from 'lucide-react';

interface Props {
  acf: any;
}

export default function IndustriesSection({ acf }: Props) {

  // GET INDUSTRY SECTION
  const industry = acf?.digital_marketing?.industry_section || {};

  const iconMap: any = {
    Globe,
    Stethoscope,
    Building2,
    GraduationCap,
    Users,
     Monitor,
    Utensils,
    ShoppingBag,
    Briefcase,
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

    <section className="section-padding bg-gray-50">

      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          {industry?.industry_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {industry.industry_tag}
            </span>
          )}

          {industry?.industry_title && (
            <h2 className="text-4xl font-black text-dark mb-6">
              {industry.industry_title}
            </h2>
          )}

          {industry?.industry_description && (
            <p className="text-gray-600 text-lg leading-relaxed">
              {industry.industry_description}
            </p>
          )}

        </div>

        {/* INDUSTRY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">

          {industries.map((ind, i) => {

            const IconComponent = iconMap[ind.icon] || Globe;

            return (

              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-all group"
              >

                <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>

                <span className="font-bold text-dark text-[10px] sm:text-xs leading-tight">
                  {ind.name}
                </span>

              </motion.div>

            );
          })}

        </div>

        {/* BOTTOM TEXT */}
        {industry?.industry_bottom_text && (
          <div className="max-w-3xl mx-auto text-center">

            <p className="text-gray-500 leading-relaxed font-medium italic border-t border-gray-200 pt-10">
              {industry.industry_bottom_text}
            </p>

          </div>
        )}

      </div>

    </section>

  );
}