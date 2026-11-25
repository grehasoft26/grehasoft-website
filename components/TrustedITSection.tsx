'use client';

import { motion } from 'motion/react';
import {
  ArrowRight,
  Globe,
  Sparkles,
  Megaphone,
  Code,
  Laptop,
  Smartphone,
  Database,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import styles from './KochiIntroSection.module.css';

export default function TrustedITSection() {
  const approachItems = [
    {
      title: 'Smart solutions',
      desc: 'Advanced, tailored technologies configured for maximum business performance.',
    },
    {
      title: 'Honest support',
      desc: 'Transparent communication, reliable updates, and dedicated technical assistance.',
    },
    {
      title: 'On-time delivery',
      desc: 'Milestone tracking and efficient lifecycles ensuring punctual deployment.',
    },
    {
      title: 'Long-term client partnerships',
      desc: 'Working as your strategic technology partner to support your persistent growth.',
    },
  ];

  const coreOfferings = [
    { title: 'High-quality websites', icon: <Laptop className="w-4 h-4 text-primary shrink-0" /> },
    { title: 'Effective digital marketing', icon: <Megaphone className="w-4 h-4 text-primary shrink-0" /> },
    { title: 'Mobile app development', icon: <Smartphone className="w-4 h-4 text-primary shrink-0" /> },
    { title: 'Custom software solutions', icon: <Code className="w-4 h-4 text-primary shrink-0" /> },
    { title: 'CRM & ERP solutions', icon: <Database className="w-4 h-4 text-primary shrink-0" /> },
    { title: 'Business automation', icon: <Workflow className="w-4 h-4 text-primary shrink-0" /> },
  ];

  return (
    <section id="trusted-it-solutions" className="section-padding bg-gray-50/50 overflow-hidden border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: About Grehasoft */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full bg-white rounded-box-lg p-6 sm:p-8 lg:p-9 xl:p-10 border border-gray-100 shadow-[0_15px_40px_-20px_rgba(5,4,74,0.06)]"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-5">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="text-[11px] font-bold text-accent uppercase tracking-[0.16em]">
                  About Grehasoft
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold mb-5 leading-[1.2] tracking-tight">
                <span className={styles.gradientText}>
                  Trusted IT Company in Kochi - Offering Smart IT Solutions
                </span>
              </h2>

              <div className="space-y-4 text-text-gray mb-7">
                <p className="text-[15px] sm:text-base leading-relaxed font-normal">
                  Grehasoft is a trusted IT company delivering smart, scalable, and affordable digital solutions for businesses of all sizes. As a reliable IT service company, we focus on helping brands grow with high-quality websites, effective digital marketing, mobile applications, and custom software solutions.
                </p>
                <p className="text-[15px] sm:text-base leading-relaxed font-normal">
                  With years of experience as an IT services provider, we ensure every project is built for performance, reliability, and long-term success.
                </p>
              </div>

              {/* Core Offerings Mini-Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 justify-items-start">
                {coreOfferings.map((offering, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 w-fit max-w-full bg-gray-50 border border-gray-100 py-1.5 px-3.5 rounded-full"
                  >
                    {offering.icon}
                    <span className="text-sm font-semibold text-dark/90">{offering.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div className="border-t border-gray-100 pt-6">
                <p className="text-dark font-bold text-base sm:text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
                  Get powerful IT services designed for growth.
                </p>
                <Link
                  href="/contact-us"
                  className="btn-primary group inline-flex items-center whitespace-nowrap text-sm sm:text-base"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Global Footprint & Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col h-full bg-dark text-white rounded-box-lg p-6 sm:p-8 lg:p-9 xl:p-10 relative shadow-[0_20px_50px_-15px_rgba(5,4,74,0.15)]"
          >
            {/* Background Accent Gradient */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-box-lg pointer-events-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/10 rounded-full mb-5">
                <Globe className="w-3.5 h-3.5 animate-spin-slow text-accent" />
                <span className="text-[11px] font-bold text-white uppercase tracking-[0.16em]">
                  Global Footprint
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white mb-5 leading-[1.2] tracking-tight">
                IT Services Provider in India &amp; the Middle East
              </h3>

              <p className="text-white/85 text-[15px] sm:text-base leading-relaxed mb-6">
                Grehasoft is an experienced IT services provider helping businesses streamline operations, strengthen online presence, and achieve measurable digital success. For years, we have supported clients across India, the Middle East, Europe, and the USA with end-to-end digital solutions.
              </p>

              {/* Simple Approach Grid */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs uppercase tracking-widest text-accent font-black mb-3">
                  Our approach is simple:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
                  {approachItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col h-full min-w-0 bg-white/5 border border-white/5 hover:border-white/10 p-3 rounded-box-sm transition-all duration-300"
                    >
                      <p className="text-white font-bold text-sm leading-snug break-words">{item.title}</p>
                      <p className="text-white/65 text-sm mt-1 leading-snug break-words">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom trust indicator */}
            <div className="relative z-10 mt-auto pt-6">
              <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-white/40 text-xs tracking-wider uppercase font-medium">
                  Client Success Oriented
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
