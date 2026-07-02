'use client';

import { motion } from 'motion/react';

import {
   BarChart,
  Layers,
  LineChart,
  LinkIcon,
  Search,
  Settings,
  TrendingUp,
  BarChart3,
  FileText,
  Layout,
  PanelTop,
  Palette,
  Megaphone,
  ChartColumn,
  ChartNoAxesCombined,
  LayoutDashboard,
  Rocket,
  BarChart3Icon,
  ChartNoAxesColumn,
  Eye,
  
  SlidersHorizontal,
  Users,
  ShieldCheck,
  Download,
 
  LayoutGrid,
  
  MessageSquare,
  CheckCircle,
  Layers3,
  Sparkles,
  
  Tags,
  SlidersVertical,
  UsersRound,
  Award,
 
  Printer,
  
 
  Code,
  Database,
  Shield,
  Zap,
   
 
  Code2,
  Cloud,
  RefreshCw,

  Target,
  PenTool,
  
} from 'lucide-react';

interface Props {
  acf: any;
}

export default function ProcessSection({ acf }: Props) {

  const processData = acf?.branding?.process_section || {};

  const iconMap: any = {
     BarChart,
  Layers,
  LineChart,
  LinkIcon,
  Search,
  Settings,
  TrendingUp,
  BarChart3,
  FileText,
  Layout,
  PanelTop,
  Palette,
  Megaphone,
  ChartColumn,
  ChartNoAxesCombined,
  LayoutDashboard,
  Rocket,
  BarChart3Icon,
  ChartNoAxesColumn,
  Eye,
  
  SlidersHorizontal,
  Users,
  ShieldCheck,
  Download,
 
  LayoutGrid,
  
  MessageSquare,
  CheckCircle,
  Layers3,
  Sparkles,
  
  Tags,
  SlidersVertical,
  UsersRound,
  Award,
 
  Printer,
  
 
  Code,
  Database,
  Shield,
  Zap,
   
 
  Code2,
  Cloud,
  RefreshCw,

  Target,
  PenTool,
  };

  const brandingProcess = [
    {
      phase: processData?.process1_phase,
      title: processData?.process1_title,
      desc: processData?.process1_description,
      icon: processData?.process1_icon,
    },
    {
      phase: processData?.process2_phase,
      title: processData?.process2_title,
      desc: processData?.process2_description,
      icon: processData?.process2_icon,
    },
    {
      phase: processData?.process3_phase,
      title: processData?.process3_title,
      desc: processData?.process3_description,
      icon: processData?.process3_icon,
    },
    {
      phase: processData?.process4_phase,
      title: processData?.process4_title,
      desc: processData?.process4_description,
      icon: processData?.process4_icon,
    },
    {
      phase: processData?.process5_phase,
      title: processData?.process5_title,
      desc: processData?.process5_description,
      icon: processData?.process5_icon,
    },
    {
      phase: processData?.process6_phase,
      title: processData?.process6_title,
      desc: processData?.process6_description,
      icon: processData?.process6_icon,
    },
    {
      phase: processData?.process7_phase,
      title: processData?.process7_title,
      desc: processData?.process7_description,
      icon: processData?.process7_icon,
    },
  ].filter((item) => item.title);

  if (!processData?.process_title) return null;

  return (

    <section className="section-padding bg-white overflow-hidden relative">

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          {processData?.process_tag && (
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              {processData.process_tag}
            </span>
          )}

          <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
            {processData.process_title}
          </h2>

          {processData?.process_description && (
            <p className="text-gray-600 text-lg leading-relaxed">
              {processData.process_description}
            </p>
          )}

        </div>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {brandingProcess.slice(0, 4).map((step, i) => {

            const IconComponent =
              iconMap[step.icon] || Search;

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-[0_20px_50px_-15px_rgba(7,83,246,0.08)] transition-all duration-500 flex flex-col gap-6"
              >

                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">

                  <IconComponent className="w-6 h-6" />

                </div>

                <div>

                  {step.phase && (
                    <span className="inline-flex text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                      {step.phase}
                    </span>
                  )}

                  <h3 className="font-black text-dark mb-3 text-xl leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* BOTTOM ROW */}
        {brandingProcess.length > 4 && (

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-8">

            {brandingProcess.slice(4).map((step, i) => {

              const IconComponent =
                iconMap[step.icon] || Rocket;

              return (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                  }}
                  className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-[0_20px_50px_-15px_rgba(7,83,246,0.08)] transition-all duration-500 flex flex-col gap-6"
                >

                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">

                    <IconComponent className="w-6 h-6" />

                  </div>

                  <div>

                    {step.phase && (
                      <span className="inline-flex text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                        {step.phase}
                      </span>
                    )}

                    <h3 className="font-black text-dark mb-3 text-xl leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        )}

        {/* BOTTOM NOTE */}
        {processData?.process_bottom_text && (

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center max-w-4xl mx-auto p-10 bg-gray-50 rounded-[3rem] border border-dashed border-primary/30"
          >

            <p className="text-gray-700 font-medium leading-relaxed italic text-lg">
              {processData.process_bottom_text}
            </p>

          </motion.div>

        )}

      </div>

    </section>

  );
}