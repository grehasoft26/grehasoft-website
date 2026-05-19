'use client';

import { motion } from 'motion/react';

import {
  Layout,
  Settings,
  MapPin,
  Search,
  FileText,
  Link as LinkIcon,
  ShoppingBag,
  Navigation,
  ChartColumn,
  SearchCheck,
  Target,
  PlayCircle,
  Monitor,
 Zap,
 Palette,
 Facebook,
 Instagram,
 Linkedin,
 Megaphone,
  Video,
  Layers3,
  TrendingUp,
  Users,
  Rocket,

} from 'lucide-react';

interface Props {
  acf: any;
}

const iconMap: any = {
  LayoutGrid: Layout,
  Settings: Settings,
  MapPin: MapPin,
  Search: Search,
  FileText: FileText,
  Link: LinkIcon,
  ShoppingCart: ShoppingBag,
  Globe: Navigation,
  ChartColumn: ChartColumn,
  SearchCheck: SearchCheck,
  Layout: Layout,
  Target: Target,
  PlayCircle: PlayCircle,
  Monitor: Monitor,
   instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  megaphone: Megaphone,
  palette: Palette,
  video: Video,
  target: Target,
  zap: Zap,
  layers3: Layers3,
  trendingUp: TrendingUp,
  users: Users,
  Rocket: Rocket,

};

export default function ServicesGrid({ acf }: Props) {

  const data = acf?.digital_marketing?.services_section || {};

  const seoServices = [
    {
      title: data.services_card1_title,
      desc: data.services_card1_description,
      icon: data.services_card1_icon,
    },
    {
      title: data.services_card2_title,
      desc: data.services_card2_description,
      icon: data.services_card2_icon,
    },
    {
      title: data.services_card3_title,
      desc: data.services_card3_description,
      icon: data.services_card3_icon,
    },
    {
      title: data.services_card4_title,
      desc: data.services_card4_description,
      icon: data.services_card4_icon,
    },
    {
      title: data.services_card5_title,
      desc: data.services_card5_description,
      icon: data.services_card5_icon,
    },
    {
      title: data.services_card6_title,
      desc: data.services_card6_description,
      icon: data.services_card6_icon,
    },
    {
      title: data.services_card7_title,
      desc: data.services_card7_description,
      icon: data.services_card7_icon,
    },
    {
      title: data.services_card8_title,
      desc: data.services_card8_description,
      icon: data.services_card8_icon,
    },
  ];
if (!data?.services_section_title) return null;
  return (

    <section className="section-padding bg-white">

      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto mb-20">

          {data?.services_section_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {data.services_section_tag}
            </span>
          )}

          {data?.services_section_title && (
            <h2 className="text-4xl font-black text-dark mb-6">
              {data.services_section_title}
            </h2>
          )}

          {data?.services_section_description && (
            <p className="text-gray-600">
              {data.services_section_description}
            </p>
          )}

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {seoServices.map((service, i) => {

            const IconComponent = iconMap[service.icon];

            return (

              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all"
              >

                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">

                  {IconComponent && (
                    <IconComponent className="w-10 h-10" />
                  )}

                </div>

                <h3 className="text-xl font-bold text-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-xs">
                  {service.desc}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}