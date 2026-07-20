'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Database,
  Server,
  Code2,
  Cpu,
  Layers,
  
  Blocks,
  UsersRound,
  GraduationCap,
  CalendarCheck2,
  Package,
  Workflow,
  Waypoints,
  BadgeDollarSign,
  HeartPulse,
  ShoppingCart,
  Store,
  CloudCog,
  KanbanSquare,
  FileText,
  Warehouse,
  Truck,
  ChartColumnIncreasing,
  UserRoundCog,
  BrainCircuit,
  Palette,
  ShieldCheck,
  Fingerprint,
  ChartLine,
  Handshake,
  BadgeCheck,
  MonitorSmartphone,
  CreditCard,
  Layers3,
    Smartphone,
  TabletSmartphone,
  
  Building2,
  Wrench,
} from 'lucide-react';

interface Props {
  acf: any;
}

export default function ServicesSection({ acf }: Props) {
  const data =
    acf?.main_service?.services_section || {};

  if (!data?.section_title) return null;

  const Icons = {
    Globe,
    Database,
    Server,
    Code2,
    Cpu,
    Layers,
    Blocks,
  UsersRound,
  GraduationCap,
  CalendarCheck2,
  Package,
  Workflow,
  Waypoints,
  BadgeDollarSign,
  HeartPulse,
  ShoppingCart,
  Store,
  CloudCog,
  KanbanSquare,
  FileText,
  Warehouse,
  Truck,
  ChartColumnIncreasing,
  UserRoundCog,
  BrainCircuit,
  Palette,
  ShieldCheck,
  Fingerprint,
  ChartLine,
  Handshake,
  BadgeCheck,
  MonitorSmartphone,
  CreditCard,
    Smartphone,
  TabletSmartphone,
  Layers3,

  Building2,
  Wrench,
  };

 const services = [
  {
    icon: data.service_1_icon,
    title: data.service_1_title,
    desc: data.service_1_description,
    href: data.service_1_url,
  },
  {
    icon: data.service_2_icon,
    title: data.service_2_title,
    desc: data.service_2_description,
    href: data.service_2_url,
  },
  {
    icon: data.service_3_icon,
    title: data.service_3_title,
    desc: data.service_3_description,
    href: data.service_3_url,
  },
  {
    icon: data.service_4_icon,
    title: data.service_4_title,
    desc: data.service_4_description,
    href: data.service_4_url,
  },
  {
    icon: data.service_5_icon,
    title: data.service_5_title,
    desc: data.service_5_description,
    href: data.service_5_url,
  },
  {
    icon: data.service_6_icon,
    title: data.service_6_title,
    desc: data.service_6_description,
    href: data.service_6_url,
  },
  {
    icon: data.service_7_icon,
    title: data.service_7_title,
    desc: data.service_7_description,
    href: data.service_7_url,
  },
  {
    icon: data.service_8_icon,
    title: data.service_8_title,
    desc: data.service_8_description,
    href: data.service_8_url,
  },
  {
    icon: data.service_9_icon,
    title: data.service_9_title,
    desc: data.service_9_description,
    href: data.service_9_url,
  },
].filter((service) => service.title);
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <div className="text-center max-w-3xl mx-auto mb-16">

          {data?.section_tag && (
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
              {data.section_tag}
            </span>
          )}

          <h2 className="text-4xl font-bold text-dark mb-6">
            {data.section_title}{' '}

            {data?.highlight_title && (
              <span className="text-primary">
                {data.highlight_title}
              </span>
            )}
          </h2>

          {data?.section_description && (
            <p className="text-text-gray text-lg">
              {data.section_description}
            </p>
          )}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {services.map((service, index) => {
            const Icon =
              Icons[
                service.icon as keyof typeof Icons
              ] || Globe;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div>

                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-dark mb-3">
                    {service.title}
                  </h3>

                  <p className="text-text-gray leading-relaxed mb-6 text-sm">
                    {service.desc}
                  </p>

                </div>

                <Link
                  href={service.href || '#'}
                  className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
                >
                  Explore Tech
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}