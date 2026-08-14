'use client';

import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Sparkles, 
  Clock, 
  HeartHandshake, 
  ShieldCheck, 
  Megaphone, 
  Code,
  Laptop
} from 'lucide-react';
import Link from 'next/link';

export default function TrustedITSection() {
  const approachItems = [
    {
      title: 'Smart solutions',
      desc: 'Advanced, tailored technologies configured for maximum business performance.',
      icon: <Sparkles className="w-6 h-6 text-accent" />
    },
    {
      title: 'Honest support',
      desc: 'Transparent communication, reliable updates, and dedicated technical assistance.',
      icon: <ShieldCheck className="w-6 h-6 text-accent" />
    },
    {
      title: 'On-time delivery',
      desc: 'Milestone tracking and efficient lifecycles ensuring punctual deployment.',
      icon: <Clock className="w-6 h-6 text-accent" />
    },
    {
      title: 'Long-term client partnerships',
      desc: 'Working as your strategic technology partner to support your persistent growth.',
      icon: <HeartHandshake className="w-6 h-6 text-accent" />
    }
  ];

  const coreOfferings = [
    { title: 'High-quality websites', icon: <Laptop className="w-4 h-4 text-primary" /> },
    { title: 'Effective digital marketing', icon: <Megaphone className="w-4 h-4 text-primary" /> },
    { title: 'Custom software solutions', icon: <Code className="w-4 h-4 text-primary" /> },
  ];

  return (
    <section id="trusted-it-solutions" className="section-padding bg-gray-50/50 overflow-hidden border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kochi IT Solutions Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col bg-white rounded-[2.5rem] p-8 lg:p-10 xl:p-12 border border-gray-100 shadow-[0_15px_40px_-20px_rgba(5,4,74,0.06)] h-full"
          >
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest ">
                About Grehasoft
              </span>
            </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">
                Trusted IT Company in Kochi - <br />
                <span className="text-primary">Offering Smart IT Solutions</span>
              </h2>
              
              <div className="space-y-4 text-text-gray mb-8">
                <p className="text-base md:text-lg leading-relaxed font-normal">
                  Grehasoft is a trusted IT company delivering smart, scalable, and affordable digital solutions for businesses of all sizes. As a reliable IT service company, we focus on helping brands grow with high-quality websites, effective digital marketing, mobile applications, and custom software solutions.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-normal">
                  With years of experience as an IT services provider, we ensure every project is built for performance, reliability, and long-term success.
                </p>
              </div>

              {/* Core Offerings Mini-Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {coreOfferings.map((offering, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 border border-gray-100 py-1.5 px-3.5 rounded-full">
                    {offering.icon}
                    <span className="text-sm font-semibold text-dark/90">{offering.title}</span>
                  </div>
                ))}
              </div>
            </div>

           <div className="mt-5">
  <div className="border-t border-gray-100 pt-6">
                <p className="text-dark font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Get powerful IT services designed for growth.
                </p>
                <Link href="/contact-us"  className="btn-primary group inline-flex items-center whitespace-nowrap text-sm sm:text-base">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Global Reach & simple approach Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
           className="
lg:col-span-6
flex
flex-col
bg-dark
text-white
rounded-[2.5rem]
p-8
lg:p-10
xl:p-12
relative
overflow-hidden
shadow-[0_20px_50px_-15px_rgba(5,4,74,0.15)]
h-full
"
          >
            {/* Background Accent Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="bg-white/10 text-white font-bold uppercase tracking-wider text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 animate-spin-slow text-accent" />
                  Global Footprint
                </span>
              </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
                IT Services Provider in India & the Middle East
              </h3>
              
             <p className="text-white/85 text-sm lg:text-base leading-relaxed mb-6">
                Grehasoft is an experienced IT services provider helping businesses streamline operations, strengthen online presence, and achieve measurable digital success. For years, we have supported clients across India, the Middle East, Europe, and the USA with end-to-end digital solutions.
              </p>

              {/* Simple Approach List */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs uppercase tracking-widest text-accent font-black mb-4">
                  Our approach is simple:
                </h4>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
                  {approachItems.map((item, index) => (
                    <div key={index} className="flex gap-3 bg-white/5 border border-white/5 hover:border-white/10 p-4 rounded-2xl transition-all duration-300">
                      <div className="p-1 rounded-lg bg-accent/15 h-fit text-accent">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm leading-snug">{item.title}</p>
                        <p className="text-white/60 text-sm mt-1 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom trust indicator */}
         <div className="relative z-10 border-t border-white/10 pt-6 mt-auto flex flex-wrap items-center justify-between gap-4">
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
