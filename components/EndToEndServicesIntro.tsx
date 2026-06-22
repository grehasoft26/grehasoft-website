'use client';

import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

export default function EndToEndServicesIntro() {
  return (
    <section id="end-to-end-services-intro" className="section-padding bg-gray-50/50 border-t border-b border-gray-100 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-45 -z-10 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/10 border border-primary/20 rounded-full"
          >
            <Layers className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">
              Unified Strategy & Solutions
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-dark tracking-tight leading-tight"
          >
            End-to-End <span className="text-primary">IT Services</span> in Kochi
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-gray text-base md:text-lg leading-relaxed font-sans max-w-3xl mx-auto"
          >
            Grehasoft offers a comprehensive range of end-to-end IT services in Kochi, designed to take your business from concept to completion under one roof. As a full-service technology company in Kochi operating from our Kakkanad and Infopark delivery centres, we eliminate the need to manage multiple vendors — our integrated teams handle strategy, design, development, marketing, and ongoing support seamlessly.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
