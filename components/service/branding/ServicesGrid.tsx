'use client';

import { motion } from 'motion/react';
import {
  Palette,
  Briefcase,
  Layers3,
  PenTool,
  Package,
  Monitor,
  Rocket,
  Megaphone,
  
  Smartphone,
  Search,
  Workflow,
  LayoutPanelTop,
  RefreshCw,
  SlidersVertical,
  
} from 'lucide-react';

interface Props {
  acf: any;
}

const iconMap: any = {
  Palette,
  Briefcase,
  Layers3,
  PenTool,
  Package,
  Monitor,
  Rocket,
  Megaphone,
    Smartphone,
  Search,
  Workflow,
  LayoutPanelTop,
  RefreshCw,
  SlidersVertical,
  
};

export default function ServicesGrid({ acf }: Props) {

  const data = acf?.branding?.services_section || {};

  const services = [
    {
      title: data?.services_card1_title,
      description: data?.services_card1_description,
      icon: data?.services_card1_icon,
    },
    {
      title: data?.services_card2_title,
      description: data?.services_card2_description,
      icon: data?.services_card2_icon,
    },
    {
      title: data?.services_card3_title,
      description: data?.services_card3_description,
      icon: data?.services_card3_icon,
    },
    {
      title: data?.services_card4_title,
      description: data?.services_card4_description,
      icon: data?.services_card4_icon,
    },
    {
      title: data?.services_card5_title,
      description: data?.services_card5_description,
      icon: data?.services_card5_icon,
    },
    {
      title: data?.services_card6_title,
      description: data?.services_card6_description,
      icon: data?.services_card6_icon,
    },
    {
      title: data?.services_card7_title,
      description: data?.services_card7_description,
      icon: data?.services_card7_icon,
    },
    {
      title: data?.services_card8_title,
      description: data?.services_card8_description,
      icon: data?.services_card8_icon,
    },
  ].filter((item) => item.title);

  if (!data?.services_section_title) return null;

  return (

    <section className="section-padding bg-white overflow-hidden">

      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          {data?.services_section_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {data.services_section_tag}
            </span>
          )}

          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
            {data.services_section_title}
          </h2>

          {data?.services_section_description && (
            <p className="text-gray-600 text-lg leading-relaxed">
              {data.services_section_description}
            </p>
          )}

        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {

            const IconComponent =
              iconMap[service.icon] || Palette;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 hover:border-primary/20 hover:shadow-[0_25px_60px_-15px_rgba(7,83,246,0.12)] transition-all duration-500"
              >

                {/* ICON */}
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm border border-gray-100 mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">

                  <IconComponent className="w-10 h-10" />

                </div>

                {/* TITLE */}
                <h3 className="text-xl font-black text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>

              </motion.div>

            );
          })}

        </div>

        {/* BOTTOM NOTE */}
        {data?.services_bottom_text && (

          <div className="max-w-4xl mx-auto text-center mt-16">

            <p className="text-gray-500 italic leading-relaxed border-t border-gray-100 pt-10">
              {data.services_bottom_text}
            </p>

          </div>

        )}

      </div>

    </section>

  );
}