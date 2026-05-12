'use client';

import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { Briefcase, TrendingUp } from 'lucide-react';
export default function ContactSection() {
  return (
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Main CTA Block */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-dark rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="relative z-10">
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 block ">Growth Roadmap</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Get SEO Services in Kochi, Kerala – <br /><span className="text-primary italic">Start Growing Today</span>
                </h2>
                <div className="space-y-6 text-white/70 text-lg mb-10 leading-relaxed max-w-xl">
                  <p>
                    Your business deserves a strong online presence and a strategy built for long-term growth. With Grehasoft’s 10+ years of practical SEO experience, you receive a complete optimization system designed to improve visibility.
                  </p>
                  <p className="text-white font-bold lg:text-xl">
                    Start your SEO journey today — grow smarter, perform better, and reach the right customers at the right time.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group">
                    Start Growing Today <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Side Info Panels */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl flex flex-col justify-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Whether you are a startup in Kakkanad, a tech firm in Infopark, or a service-based business anywhere in Kochi or Kerala, our SEO team builds a roadmap that aligns with your goals.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary rounded-[3rem] p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden"
              >
                <div className="absolute -bottom-8 -right-8 opacity-10">
                  <TrendingUp className="w-40 h-40" />
                </div>
                <h4 className="font-black text-xl mb-4 relative z-10">Complete Optimization</h4>
                <p className="text-white/90 text-sm leading-relaxed relative z-10">
                  From technical refinement and content structuring to local authority signals and data-driven improvements, Grehasoft provides everything your business needs to stand out.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Trust Signal Bar */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Small labels or subtle icons showing regional presence */}
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kochi Active</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kakkanad & Infopark</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">Kerala Statewide</span>
             <div className="w-1.5 h-1.5 rounded-full bg-dark/20" />
             <span className="text-dark font-bold uppercase tracking-widest text-[10px]">10+ Years Expertise</span>
          </div>
        </div>
      </section>
  );
}