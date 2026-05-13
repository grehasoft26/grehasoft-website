'use client';

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
} from 'lucide-react';

import { motion } from 'motion/react';

interface Props {
  acf: any;
}

export default function ProcessSection({ acf }: Props) {

  const processData = acf?.digital_marketing?.process_section;

  const iconMap: any = {
    BarChart: BarChart,
    Search: Search,
    Settings: Settings,
    Layers: Layers,
    LinkIcon: LinkIcon,
    TrendingUp: TrendingUp,
    LineChart: LineChart,
    BarChart3: BarChart3,
    FileText: FileText,
    Layout: Layout,
    
  };

  const seoProcess = [
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
  ];
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

          {processData?.process_title && (
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              {processData.process_title}
            </h2>
          )}

          {processData?.process_description && (
            <p className="text-gray-600 text-lg leading-relaxed">
              {processData.process_description}
            </p>
          )}

        </div>

        {/* TOP 4 CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">

          {seoProcess.slice(0, 4).map((step, i) => {

            const IconComponent =
              iconMap[step.icon] || BarChart;

            return (

              step.title && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
                >

                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">

                    <div className="scale-125">
                      <IconComponent className="w-6 h-6" />
                    </div>

                  </div>

                  <div>

                    {step.phase && (
                      <div className="flex items-center gap-3 mb-2">

                        <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">
                          {step.phase}
                        </span>

                      </div>
                    )}

                    <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                </motion.div>
              )
            );
          })}

        </div>

        {/* BOTTOM 3 CARDS */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center mt-8">

          {seoProcess.slice(4).map((step, i) => {

            const IconComponent =
              iconMap[step.icon] || TrendingUp;

            return (

              step.title && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group p-8 md:p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start h-full"
                >

                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">

                    <div className="scale-125">
                      <IconComponent className="w-6 h-6" />
                    </div>

                  </div>

                  <div>

                    {step.phase && (
                      <div className="flex items-center gap-3 mb-2">

                        <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">
                          {step.phase}
                        </span>

                      </div>
                    )}

                    <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                </motion.div>
              )
            );
          })}

        </div>

        {/* BOTTOM TEXT */}
        {processData?.process_bottom_text && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center max-w-3xl mx-auto p-10 bg-gray-50 rounded-[3rem] border border-dashed border-primary/30"
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