'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  HeartHandshake,
  Award,
  Globe,
  Sparkles,
  ArrowUpRight,
  Quote,
  Users,
  Layers,
  MessagesSquare,
  Target,
  ClipboardCheck,
} from 'lucide-react';

const points = [
  {
    title: 'Experienced IT & Digital Team',
    desc: 'A multidisciplinary team covering development, design, SEO and digital marketing requirements.',
    Icon: Users,
  },
  {
    title: 'Integrated Capabilities',
    desc: 'Technology, digital marketing and creative services can be combined when a project requires multiple digital capabilities.',
    Icon: Layers,
  },
  {
    title: 'Transparent Project Communication',
    desc: 'Clear communication and project updates help businesses stay informed throughout the development and delivery process.',
    Icon: MessagesSquare,
  },
  {
    title: 'Business-Focused Approach',
    desc: 'Solutions are planned around the business requirement, target audience, operational needs and intended outcome.',
    Icon: Target,
  },
  {
    title: 'Structured Project Management',
    desc: 'Defined stages, milestones and coordination help keep digital projects organised from planning through delivery.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Ongoing Technical Support',
    desc: 'Post-launch maintenance, technical assistance and optimisation can continue after the initial project is delivered.',
    Icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50/30 relative overflow-hidden border-t border-gray-100">
      {/* Decorative Brand Color Circles (Soft Background Opacity) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Bento grid. DOM order is heading → dark card → feature rows, so narrow screens stack exactly as before
            (heading, dark card, points). On desktop the dark card spans both rows of the left 5 columns, and the
            heading and the feature rows share the right 7 columns. The dark card stretches to the full height of the
            right column; its map frame absorbs the extra height. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-4 lg:gap-x-5 lg:gap-y-5 items-stretch">

          {/* Right-side heading area */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 mb-4 lg:mb-0">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-4"
            >
              <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-accent font-black uppercase tracking-wider text-[11px]">
                Why Grehasoft?
              </span>
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-fit max-w-full text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-black mb-3.5 tracking-tight leading-[1.15] text-balance bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why Businesses Choose Grehasoft
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-gray-500 text-base md:text-[17px] leading-relaxed"
            >
              Choosing a digital partner means looking at business requirements, technology, customer experience and digital growth together. Grehasoft combines IT, digital marketing and creative capabilities to support businesses across different stages of their digital journey.
            </motion.p>
          </div>

          {/* Main Bento Column: Trust & Global Reach Center (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-2 bg-dark text-white rounded-box-lg p-6 lg:p-7 shadow-2xl relative flex flex-col border border-white/5"
          >
            {/* Isolated Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-[80px] -ml-32 -mb-32" />
            </div>

            {/* Main Dark Card Content */}
            <div className="relative z-10 flex flex-col gap-4 lg:gap-5 lg:flex-1 lg:mb-5">
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

              {/* Network Connection Visual Block. On desktop the frame takes the spare height so the card matches the
                  right column. The map itself occupies a 790 × 383 region (x 146, y 480) of the 1080 × 1350 image; the
                  rest is transparent. The map is sized directly: 91% of the frame width, limited by the frame height
                  (container query units) so it is never clipped, centred, and always at its own aspect ratio. On
                  tablets the frame may grow to 310px so the map is not cut off top and bottom. */}
              <div className="lg:flex lg:flex-1 lg:flex-col">
                <div className="relative overflow-hidden rounded-box-sm border border-white/10 aspect-[16/9] max-h-[195px] md:max-h-[310px] lg:aspect-auto lg:max-h-none lg:min-h-[195px] lg:flex-1 w-full shadow-inner bg-black/40 group/photo [container-type:size]">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-[790/383] w-[min(91cqw,calc((100cqh-24px)*2.0627))] group-hover/photo:scale-105 transition-transform duration-700">
                    <Image
                      src="/images/footprint.png"
                      alt="Grehasoft Global IT Connectivity Network"
                      width={1080}
                      height={1350}
                      sizes="(max-width: 1023px) 110vw, 560px"
                      className="absolute left-[-18.481%] top-[-125.326%] w-[136.709%] max-w-none h-auto opacity-85 group-hover/photo:opacity-100 transition-opacity duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
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

          {/* Right-side feature rows: one full-width horizontal row per point (icon, then title with description below). */}
          <ul className="lg:col-span-7 lg:col-start-6 lg:row-start-2 flex flex-col gap-2">
            {points.map(({ title, desc, Icon }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 + index * 0.06 }}
                className="group flex items-start gap-3.5 sm:gap-4 bg-white px-4 py-3 sm:px-5 rounded-box-sm border border-gray-100 hover:border-primary/25 shadow-[0_8px_30px_-20px_rgba(5,4,74,0.1)] transition-colors duration-300"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-box-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-[17px] font-black text-dark tracking-tight leading-snug group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-normal mt-0.5">
                    {desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
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
