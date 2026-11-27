'use client';

import { motion } from 'motion/react';
import { Layers, ArrowRight, Compass, Palette, Code2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import styles from './KochiIntroSection.module.css';

const processSteps = [
  {
    number: '01',
    title: 'Strategy & Architecture',
    desc: 'Understand the business requirement, define the technology approach, map the customer journey and establish the solution architecture before development begins.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'UI/UX & Product Design',
    desc: 'Create intuitive interfaces, high-fidelity prototypes and consistent design systems focused on usability, clarity and customer experience.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Engineering & Development',
    desc: 'Build responsive websites, web applications, mobile applications and custom software around the functional and technical requirements of each project.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Marketing, Growth & Support',
    desc: 'Improve digital visibility through SEO and digital marketing while supporting ongoing optimisation, maintenance and technical requirements after launch.',
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
        {/* Top-aligned columns. The lifecycle card gets a slightly wider column (0.92 / 1.08) so its longer step
            descriptions wrap less and both columns end at about the same height, without fixed heights. */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 lg:gap-12 lg:items-start">
          
          {/* Left Column: Content & CTA (50%) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left"
          >
            <div className="space-y-4 lg:space-y-5">
              {/* Badge */}
              <div>
                <p className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/10 border border-primary/20 rounded-full">
                  <Layers className="w-3.5 h-3.5 text-primary animate-pulse" aria-hidden="true" />

                  <span className="text-[11px] font-black text-accent uppercase tracking-[0.18em]">
                    Unified Strategy &amp; Solutions
                  </span>
                </p>
              </div>

              {/* Heading */}
              <h2
                className="w-fit max-w-full text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-black tracking-tight leading-[1.18] pb-1 text-balance bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {/* "End-to-End" is kept on one line: browsers otherwise break it at its hyphens. */}
                <span className="whitespace-nowrap">End-to-End</span> IT &amp; Digital Solutions for Businesses
              </h2>

              {/* Paragraphs */}
              <p className="text-text-gray text-base md:text-lg leading-[1.75] font-sans max-w-2xl">
                Grehasoft brings technology, digital marketing and creative capabilities together to help businesses build, improve and grow their digital presence. From websites and e-commerce platforms to custom software, mobile applications, SEO and digital marketing, our services can be combined around the requirements and objectives of each project.
              </p>
              <p className="text-text-gray text-base md:text-lg leading-[1.75] font-sans max-w-2xl">
                Whether a business needs to establish a new digital presence, improve an existing platform or connect technology with digital marketing, Grehasoft provides the capabilities to support different stages of the digital journey.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-7 lg:pt-8">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-box-sm bg-primary text-white font-semibold text-sm shadow-sm shadow-primary/20 hover:bg-primary/95 hover:shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Process Timeline Card (50%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <div className="bg-white rounded-box-lg border border-gray-200/90 shadow-sm px-5 py-5 sm:px-6 sm:py-6 relative">
              {/* Card Top Label */}
              <div className="flex items-center justify-between gap-3 pb-3.5 mb-4 border-b border-gray-100">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 shrink-0 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-dark">
                    Our End-to-End Lifecycle
                  </span>
                </p>
                <span className="shrink-0 text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-50 border border-gray-200/60 px-2.5 py-1 rounded-box-xs">
                  Phase 01 — 04
                </span>
              </div>

              {/* Card heading and introduction (a card-level H2, sized below the section H2 on the left) */}
              <h2 className="text-xl sm:text-[1.375rem] lg:text-2xl font-bold leading-snug tracking-tight text-dark text-balance">
                From Strategy to Development, Marketing and Support
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                A successful digital project involves more than development alone. Grehasoft connects strategy, product design, engineering, digital marketing and ongoing support to create a structured approach from planning through post-launch growth.
              </p>

              {/* Vertical Process Timeline: each connector runs the full height of its step down to the next number */}
              <ol className="mt-5">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === processSteps.length - 1;

                  return (
                    <motion.li
                      key={step.number}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                      className="relative flex items-stretch gap-3.5 group"
                    >
                      {/* Number Node + Connecting Line */}
                      <div className="relative flex flex-col items-center flex-shrink-0">
                        <div className="w-9 h-9 rounded-box-xs bg-gray-50 border border-gray-200/90 text-dark flex items-center justify-center font-bold text-xs group-hover:border-primary group-hover:bg-primary/5 group-hover:text-primary transition-colors duration-200 shadow-xs">
                          {step.number}
                        </div>
                        {!isLast && (
                          <div aria-hidden="true" className="w-[2px] flex-1 min-h-4 bg-gray-200 group-hover:bg-primary/20 transition-colors duration-200 my-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className={`flex-1 min-w-0 pt-1.5 ${isLast ? '' : 'pb-3.5'}`}>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-dark group-hover:text-primary transition-colors duration-200">
                            {step.title}
                          </h3>
                          <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent transition-colors duration-200 hidden sm:block" aria-hidden="true" />
                        </div>
                        <p className="text-[13px] text-gray-500 leading-[1.6] mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </motion.div>

        </div>
      </div>
     
    </section>
    
  );
}
