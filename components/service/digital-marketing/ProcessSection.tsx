'use client';

import { BarChart, Layers, LineChart, LinkIcon, Search, Settings, TrendingUp, } from 'lucide-react';
import { motion } from 'motion/react';

const seoProcess = [
    {
      title: 'Initial SEO Audit',
      desc: 'A complete review of technical issues, content gaps, user experience, and competitor landscape.',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'Keyword Research',
      desc: 'Identifying business-specific keywords, strong local intent terms, alternative variations, and search patterns relevant to Kochi and Kerala.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Technical Fixes',
      desc: 'Improving site speed, mobile usability, index management, structured data, and overall crawl efficiency.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Content Refinement',
      desc: 'Building topic clusters, strengthening semantic signals, and improving readability for both users and search engines.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'Authority Building',
      desc: 'Earning high-quality links, relevant mentions, and credibility signals that improve ranking strength over time.',
      icon: <LinkIcon className="w-6 h-6" />
    },
    {
      title: 'Ongoing Optimization',
      desc: 'Monthly updates, search behaviour insights, and performance-driven enhancements to maintain growth.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Reporting & Analytics',
      desc: 'Clear reports, measurable results, and actionable recommendations that show real progress.',
      icon: <LineChart className="w-6 h-6" />
    }
  ];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block ">Clarity & Consistency</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">How Our SEO Process Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our SEO process is built to deliver clarity, consistency, and long-term growth for businesses in Kochi and Kerala. Every step is designed to align your website with user behaviour, search intent, and ongoing performance insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center">
            {seoProcess.slice(0, 4).map((step, i) => (
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
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Phase 0{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 justify-center mt-8">
            {seoProcess.slice(4).map((step, i) => (
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
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/10 px-2 py-1 rounded">Phase 0{i + 5}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-3 text-xl group-hover:text-accent transition-colors leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center max-w-3xl mx-auto p-10 bg-gray-50 rounded-[3rem] border border-dashed border-primary/30"
          >
            <p className="text-gray-700 font-medium leading-relaxed italic text-lg">
              "This structured process ensures your website becomes stronger, faster, and more aligned with search demand — helping your business grow steadily in Kochi and Kerala."
            </p>
          </motion.div>
        </div>
      </section>
  );
}