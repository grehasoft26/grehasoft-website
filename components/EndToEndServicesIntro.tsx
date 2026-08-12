'use client';

import { motion } from 'motion/react';
import { Layers, ArrowRight, Compass, Palette, Code2, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    title: 'Strategy & Architecture',
    desc: 'Discovery, technology roadmapping & enterprise solution architecture.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'UI/UX & Product Design',
    desc: 'User-centric interfaces, high-fidelity prototypes & design systems.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Engineering & Development',
    desc: 'Full-stack web, mobile applications & secure cloud-native platforms.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Marketing, Growth & Support',
    desc: 'SEO optimization, digital marketing & continuous SLA-backed maintenance.',
    icon: TrendingUp,
  },
];

export default function EndToEndServicesIntro() {
  return (
    <section 
      id="end-to-end-services-intro" 
      className="py-14 md:py-18 lg:py-20 bg-gray-50/60 border-t border-b border-gray-100 relative overflow-hidden"
    >
      {/* Subtle background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl opacity-35 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Content & CTA (~55-60%) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <Layers className="w-3.5 h-3.5 text-primary animate-pulse" />
              
              <span className="text-[11px] font-black text-accent uppercase tracking-[0.18em]">
                Unified Strategy & Solutions
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-dark tracking-tight leading-[1.2]">
              End-to-End <span className="text-primary">IT Services</span> in Kochi
            </h2>

            {/* Paragraph */}
            <p className="text-text-gray text-base md:text-lg leading-relaxed font-sans max-w-2xl">
              Grehasoft offers a comprehensive range of end-to-end IT services in Kochi, designed to take your business from concept to completion under one roof. As a full-service technology company in Kochi operating from our Kakkanad and Infopark delivery centres, we eliminate the need to manage multiple vendors — our integrated teams handle strategy, design, development, marketing, and ongoing support seamlessly.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm shadow-sm shadow-primary/20 hover:bg-primary/95 hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Process Timeline Card (~40-45%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6 sm:p-7 relative">
              {/* Card Top Label */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-dark">
                    Our End-to-End Lifecycle
                  </span>
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50 border border-gray-200/60 px-2.5 py-1 rounded-md">
                  Phase 01 — 04
                </span>
              </div>

              {/* Vertical Process Timeline */}
              <div className="space-y-5">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === processSteps.length - 1;

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                      className="relative flex items-start gap-4 group"
                    >
                      {/* Number Node + Connecting Line */}
                      <div className="relative flex flex-col items-center flex-shrink-0">
                        <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-200/90 text-dark flex items-center justify-center font-bold text-xs group-hover:border-primary group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-200 shadow-xs">
                          {step.number}
                        </div>
                        {!isLast && (
                          <div className="w-[2px] h-9 bg-gray-150 group-hover:bg-primary/20 transition-colors duration-200 my-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-dark group-hover:text-primary transition-colors duration-200">
                            {step.title}
                          </h3>
                          <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent transition-colors duration-200 hidden sm:block" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
