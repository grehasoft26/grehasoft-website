'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  HeartHandshake,
  Award,
  Globe,
  Sparkles,
  ArrowUpRight,
  Quote
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Professional Team',
      desc: 'Expert developers, creative designers, and digital marketing specialists dedicated to absolute quality.',
      delay: 0.1
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear, honest updates and absolute clarity with our clients at every step of development.',
      delay: 0.18
    },
    {
      title: 'Affordable Pricing',
      desc: 'Smart and accessible digital solutions crafted to align with your business goals without sacrificing premium performance.',
      delay: 0.26
    },
    {
      title: 'Strong Project Management',
      desc: 'Punctual milestones, transparent planning, and rigorous scheduling to ensure flawless execution.',
      delay: 0.34
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50/30 relative overflow-hidden border-t border-gray-100">
      {/* Decorative Brand Color Circles (Soft Background Opacity) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Header Block Section */}
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-accent font-black uppercase tracking-wider text-[11px]">
              Why Choose Grehasoft?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-fit max-w-full mx-auto text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-black mb-3.5 tracking-tight leading-[1.15] text-balance bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Why Grehasoft Is Kochi&apos;s{' '}
            <br className="hidden sm:block" />
            Most Trusted IT Partner
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-gray-500 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
          >
            A dependable IT company that focuses on delivering real value.
          </motion.p>
        </div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">

          {/* Main Bento Column: Trust & Global Reach Center (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group lg:col-span-5 bg-dark text-white rounded-box-lg p-6 lg:p-7 shadow-2xl relative flex flex-col border border-white/5"
          >
            {/* Isolated Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-[80px] -ml-32 -mb-32" />
            </div>

            {/* Main Dark Card Content */}
            <div className="relative z-10 space-y-4 lg:space-y-5">
              <div>
                <span className="text-accent font-bold uppercase tracking-widest text-[11px] bg-accent/15 border border-accent/20 px-3 py-1 rounded-full inline-block mb-3.5">
                  We Stand Out Because:
                </span>

                {/* 100+ Counter Block */}
                <div className="flex items-baseline gap-0.5">
                  <span className="text-5xl sm:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent">
                    100
                  </span>
                  <span className="text-accent font-black text-4xl sm:text-5xl">+</span>
                </div>
                <p className="text-sm font-bold text-white/95 tracking-wide uppercase mt-1.5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent flex-shrink-0" />
                  Successfully Delivered IT Projects
                </p>
                <p className="text-sm text-white/65 mt-1 leading-relaxed">
                  Proven experience in delivering custom software, corporate websites, and enterprise integrations.
                </p>
              </div>

              {/* Global Reach Row */}
              <div className="border-t border-white/10 pt-4 lg:pt-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-box-sm bg-white/5 flex items-center justify-center text-accent flex-shrink-0 border border-white/10">
                    <Globe className="w-5 h-5 animate-spin-slow text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-sm text-white tracking-wide uppercase">
                      Global Footprint
                    </h3>
                    <p className="text-sm text-white/65 leading-relaxed mt-1 mb-2.5">
                      Serving a diverse, world-class clientele across multiple strategic global zones:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['India', 'Middle East', 'Europe', 'USA'].map((region) => (
                        <span
                          key={region}
                          className="text-[11px] font-bold bg-white/10 text-white/90 px-2.5 py-0.5 rounded-full border border-white/10 hover:border-primary/50 transition-colors"
                        >
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Connection Visual Block */}
              <div>
                <div className="overflow-hidden rounded-box-sm border border-white/10 aspect-[16/9] max-h-[195px] w-full shadow-inner bg-black/40 group/photo">
                  <Image
                    src="/images/footprint.png"
                    alt="Grehasoft Global IT Connectivity Network"
                    width={1080}
                    height={1350}
                    sizes="(max-width: 1023px) 100vw, 480px"
                    className="w-full h-full object-cover opacity-85 group-hover/photo:opacity-100 group-hover/photo:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="relative z-10 border-t border-white/10 mt-auto pt-4 flex items-center justify-between">
              <p className="text-[11px] text-white/55 uppercase tracking-widest font-bold">
                Performance Verified
              </p>
              <ArrowUpRight className="text-accent w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </motion.div>

          {/* Right Bento Segment: Differentiators (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr_auto] gap-4 lg:gap-5">

            {/* 4 Core Differentiators */}
            {points.map((point) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: point.delay }}
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-box-lg border border-gray-100 hover:border-primary/25 shadow-[0_8px_30px_-20px_rgba(5,4,74,0.1)] hover:shadow-[0_20px_45px_-25px_rgba(5,4,74,0.14)] transition-all duration-300 group flex flex-col justify-center"
              >
                <h3 className="text-base sm:text-[17px] font-black text-dark mb-1.5 tracking-tight group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}

            {/* Support Card: Spans 2 Columns highlighting Post-Delivery Care */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="md:col-span-2 bg-primary/5 border border-primary/15 hover:border-primary/30 p-5 md:p-6 rounded-box-lg hover:bg-white hover:shadow-[0_20px_45px_-25px_rgba(5,4,74,0.12)] transition-all duration-300 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4"
            >
              <div className="flex items-start md:items-center gap-4">
                <div className="w-12 h-12 rounded-box-sm bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-box-xs inline-block">
                    Continuous Partnership
                  </span>
                  <h3 className="text-lg font-black text-dark tracking-tight mt-1">
                    Reliable Support After Delivery
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xl mt-1">
                    Quality care doesn&apos;t stop after deployment. We offer continuous digital maintenance, robust server troubleshooting, and continuous security optimizations post-launch.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-primary/15 pt-3.5 md:pt-0 md:pl-6 flex-shrink-0 justify-between md:justify-start">
                <div>
                  <p className="text-sm font-black text-primary uppercase tracking-wide">Guaranteed</p>
                  <p className="text-xs text-gray-500">Response Window</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Editorial Goal / Motivation Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 lg:mt-5 bg-white rounded-box-lg border border-gray-100 p-5 md:p-7 text-center relative shadow-[0_8px_30px_-20px_rgba(5,4,74,0.08)]"
        >
          <div className="flex justify-center mb-3.5">
            <div className="w-10 h-10 rounded-box-sm bg-accent/10 flex items-center justify-center text-accent">
              <Quote className="w-5 h-5 fill-current" />
            </div>
          </div>

          <p className="text-dark font-extrabold text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto italic">
            &ldquo;With every project, our goal is simple — deliver IT services that make your business smarter, stronger, and more efficient.&rdquo;
          </p>

          <div className="mt-4 flex justify-center items-center gap-3">
            <div className="w-8 h-0.5 bg-primary/20" />
            <span className="text-[11px] font-black uppercase tracking-widest text-primary">
              Our Pledge of Professionalism
            </span>
            <div className="w-8 h-0.5 bg-primary/20" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
