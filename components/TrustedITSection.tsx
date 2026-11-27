'use client';

import { motion } from 'motion/react';
import { ArrowRight, Globe, Sparkles, Megaphone, Code, Laptop, Workflow } from 'lucide-react';
import Link from 'next/link';
import styles from './KochiIntroSection.module.css';

const capabilities = [
  { title: 'Website & Technology Solutions', Icon: Laptop },
  { title: 'SEO & Digital Marketing', Icon: Megaphone },
  { title: 'Custom Software & Applications', Icon: Code },
  { title: 'Digital Products & Business Platforms', Icon: Workflow },
];

const featureCards = [
  {
    title: 'Smart Solutions',
    desc: 'Technology and digital solutions planned around business requirements, customer needs and practical use cases.',
  },
  {
    title: 'Clear Communication',
    desc: 'Structured communication, project updates and collaboration throughout the development and delivery process.',
  },
  {
    title: 'On-Time Delivery',
    desc: 'Defined milestones, project coordination and focused execution throughout the delivery lifecycle.',
  },
  {
    title: 'Long-Term Support',
    desc: 'Ongoing technical assistance, maintenance and digital support after project delivery where required.',
  },
];

export default function TrustedITSection() {
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
            className="flex flex-col h-full bg-white rounded-box-lg p-6 sm:p-8 lg:p-7 xl:p-10 border border-gray-100 shadow-[0_15px_40px_-20px_rgba(5,4,74,0.06)]"
          >
            <div>
              <p className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-5">
                <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="text-[11px] font-bold text-accent uppercase tracking-[0.16em]">
                  About Grehasoft
                </span>
              </p>

              {/* Homepage H2 scale (28 / 36 / 40px; 36px at lg where the columns are narrowest) with the brand gradient. */}
              <h2 className="text-[1.75rem] md:text-4xl xl:text-[2.5rem] font-extrabold mb-5 leading-[1.15] tracking-tight text-balance">
                <span className={styles.gradientText}>
                  IT &amp; Digital Solutions Company in Kochi, Kerala
                </span>
              </h2>

              <div className="space-y-4 text-text-gray mb-7">
                <p className="text-[15px] sm:text-base leading-relaxed font-normal">
                  Grehasoft provides IT and digital services for businesses looking to build, improve or expand their digital presence. Our capabilities span website development, <span className="whitespace-nowrap">e-commerce</span>, custom software, mobile applications, SEO, digital marketing, branding and creative services.
                </p>
                <p className="text-[15px] sm:text-base leading-relaxed font-normal">
                  Based in Infopark, Kakkanad, Kochi, Grehasoft brings technology, design and digital marketing capabilities together to develop practical solutions around different business requirements.
                </p>
              </div>

              {/* Capability points */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
                {capabilities.map(({ title, Icon }) => (
                  <li
                    key={title}
                    className="flex items-center gap-2.5 min-w-0 bg-gray-50 border border-gray-100 py-2 px-3.5 rounded-box-sm"
                  >
                    <Icon aria-hidden="true" className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-semibold leading-snug text-dark/90">{title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-7">
              <div className="border-t border-gray-100 pt-6">
                <Link
                  href="/contact-us"
                  className="btn-primary group inline-flex items-center whitespace-nowrap text-sm sm:text-base"
                >
                  Get a Free Consultation
                  <ArrowRight aria-hidden="true" className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Global Footprint */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col h-full bg-dark text-white rounded-box-lg p-6 sm:p-8 lg:p-7 xl:py-10 xl:px-8 relative shadow-[0_20px_50px_-15px_rgba(5,4,74,0.15)]"
          >
            {/* Background Accent Gradient */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-box-lg pointer-events-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32" />
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <p className="self-start inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/10 rounded-full mb-5">
                <Globe aria-hidden="true" className="w-3.5 h-3.5 animate-spin-slow text-accent" />
                <span className="text-[11px] font-bold text-white uppercase tracking-[0.16em]">
                  Global Footprint
                </span>
              </p>

              <h2 className="text-[1.75rem] md:text-4xl xl:text-[2.5rem] font-extrabold text-white mb-5 leading-[1.15] tracking-tight text-balance">
                IT Services for Businesses in India and Global Markets
              </h2>

              <p className="text-white/85 text-[15px] sm:text-base leading-relaxed mb-5">
                Based in Kochi, Kerala, Grehasoft works with businesses across India and international markets, providing website development, software, mobile applications, SEO, digital marketing and other IT services based on project requirements.
              </p>

              {/* Feature cards: one full-width horizontal row each (number on the left, title and description beside it),
                  following the description directly (20px gap, no divider). */}
              <ol className="flex flex-col gap-2.5">
                {featureCards.map((item, index) => (
                  <li
                    key={item.title}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-center sm:items-start gap-x-3 sm:gap-x-3.5 gap-y-1.5 sm:gap-y-0.5 bg-white/5 border border-white/5 hover:border-white/10 px-3.5 py-3 sm:px-4 rounded-box-sm transition-colors duration-300"
                  >
                    {/* On phones the number sits beside the title and the description spans the full card width. */}
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 sm:h-8 sm:w-8 sm:row-span-2 shrink-0 items-center justify-center rounded-box-xs border border-white/10 bg-white/10 text-[11px] sm:text-xs font-bold text-accent"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-[15px] leading-snug break-words sm:pt-px">{item.title}</h3>
                    <p className="col-span-2 sm:col-span-1 sm:col-start-2 text-white/70 text-sm leading-[1.5] break-words">{item.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
