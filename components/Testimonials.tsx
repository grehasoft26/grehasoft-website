'use client';

import { useState } from 'react';
import {
  Quote,
  Star,
  ArrowUpRight,
  CheckCircle,
  Shield,
  Sparkles,
  Pause,
  Play,
} from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sumesh Vadakkumkarayil',
    role: '',
    content: "We engaged Grehasoft for our Ecommerce website design, SMM, SEO, and Google Business Listing management, and the overall experience has been smooth and well-coordinated. The team understood our website requirements clearly and developed a website that presents our business in a simple and professional way.",
    image: 'https://picsum.photos/seed/user1/200/200',
    rating: 5,
    metrics: '99.8% Project Delivery Rate',
    stats: '2.5x Performance Jump'
  },
  {
    id: 2,
    name: 'Rafal Embroidery',
    role: '',
    content: "We contacted Grehasoft first for our website development, and then for SMM, SEO, and Google Business Profile management, and the experiences were so good from start to finish. They understood our requirements clearly and delivered an SEO friendly website that represents our business well.",
    image: 'https://picsum.photos/seed/user2/200/200',
    rating: 5,
    metrics: '340% Traffic Increase',
    stats: '180% Higher Sales Conversion'
  },
  {
    id: 3,
    name: 'Muhammed Nishab ',
    role: '',
    content: "Good experience with Grehasoft! Their Professional and creative website design services helped us build both our business and personal websites with outstanding quality and professionalism. Their SEO services really improved our search visibility, and the Local Map Listing support made it easier for customers to find us. Highly recommended!",
    image: 'https://picsum.photos/seed/user3/200/200',
    rating: 5,
    metrics: '40% Productivity Efficiency Boost',
    stats: 'No Extra Workforce Required'
  },
  {
    id: 4,
    name: 'Chithra Shukla',
    role: '',
    content: "I’m very satisfied with Grehasoft’s e-commerce website development services. They built my online store from scratch with great attention to design, speed, performance, and user experience. Their team is professional, reliable, and detail-oriented. I truly believe Grehasoft is one of the best e-commerce service providers I have worked with. Thanks a million Raji and team!!!",
    image: 'https://picsum.photos/seed/user4/200/200',
    rating: 5,
    metrics: '40% Productivity Efficiency Boost',
    stats: 'No Extra Workforce Required'
  },
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const renderTestimonialCard = (
    test: (typeof testimonials)[number],
    isClone: boolean
  ) => {
    const displayName = test.name.trim();

    return (
      <article
        key={`${isClone ? 'clone' : 'primary'}-${test.id}`}
        tabIndex={isClone ? undefined : 0}
        aria-hidden={isClone ? true : undefined}
        className="w-[calc(100vw-2.5rem)] max-w-[360px] sm:max-w-none sm:w-[560px] md:w-[620px] lg:w-[680px] xl:w-[700px] flex-shrink-0 bg-white rounded-box-lg p-5 sm:p-6 md:p-7 shadow-[0_12px_40px_-24px_rgba(5,4,74,0.16)] border border-gray-100 hover:border-primary/25 transition-colors duration-300 flex flex-col justify-between relative overflow-hidden snap-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Quote className="absolute -right-4 -top-4 w-32 h-32 text-primary/[0.04] select-none pointer-events-none" />

        <div className="relative z-10">
          {/* Top Bar: 5 Green Stars & Delivery Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-gray-100 pb-3 mb-3.5">
            <div
              className="flex gap-1 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100"
              aria-label={isClone ? undefined : `${test.rating} out of 5 stars`}
            >
              {[...Array(test.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-bold text-accent px-2.5 py-1 rounded-full bg-accent/5 border border-accent/15 uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{test.metrics}</span>
            </div>
          </div>

          {/* Complete Unclipped Review Text */}
          <blockquote className="text-dark/90 text-[15px] sm:text-lg md:text-[19px] leading-[1.55]">
            &ldquo;{test.content}&rdquo;
          </blockquote>
        </div>

        {/* Footer: Client Profile & Impact Realized */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3.5 mt-4 border-t border-gray-100 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm sm:text-base border-2 border-primary/20 flex-shrink-0">
              {getInitials(displayName)}
            </div>
            <div>
              <h3 className="text-base font-bold text-dark tracking-tight">
                {displayName}
              </h3>
              {test.role ? (
                <p className="text-sm text-text-gray font-medium">{test.role}</p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-0.5 sm:items-end">
            <span className="text-[10px] uppercase font-bold tracking-wider text-text-gray">
              IMPACT REALIZED
            </span>
            <div className="inline-flex items-center gap-1.5 bg-primary/5 text-primary text-xs font-extrabold px-2.5 py-1 rounded-box-sm border border-primary/10 w-fit">
              <Shield className="w-3.5 h-3.5 fill-current text-primary flex-shrink-0" />
              <span>{test.stats}</span>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="testimonials"
      className="section-padding !py-10 md:!py-14 bg-[#fafafa] relative overflow-hidden"
    >
      {/* Subtle brand ambient lights */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-1/2 -right-40 w-[460px] h-[460px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              Empowering Partners Worldwide
            </span>
          </div>

          <h2
            className="w-fit max-w-full mx-auto text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15] pb-1.5 mb-3 text-balance bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Client success stories that{' '}
            <br className="hidden sm:block" />
            inspire our growth
          </h2>

          <p className="text-text-gray text-base md:text-[17px] max-w-3xl mx-auto leading-relaxed">
            Discover how modern organizations scale operations, streamline workflows, and secure digital advantages leveraging Grehasoft&apos;s expert solutions.
          </p>
        </div>

        {/* Marquee Control Bar */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[11px] font-bold text-text-gray/80 uppercase tracking-widest">
            Verified Client Reviews
          </span>
          <button
            type="button"
            aria-pressed={isPaused}
            aria-label={
              isPaused
                ? 'Play client testimonials marquee'
                : 'Pause client testimonials marquee'
            }
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 hover:border-primary/40 text-xs font-bold text-dark hover:text-primary transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Full-Width Single Large-Card Continuous Marquee */}
      <div className="relative z-10 max-w-[1520px] mx-auto">
        <div
          role="region"
          aria-label="Client testimonials marquee"
          className={`${styles.marqueeViewport} ${isPaused ? styles.paused : ''}`}
        >
          <div className={styles.marqueeTrack}>
            {/* Primary accessible set */}
            <div className={styles.marqueeGroup}>
              {testimonials.map((test) => renderTestimonialCard(test, false))}
            </div>

            {/* Seamless visual loop clone (hidden from screen readers & tab order) */}
            <div
              aria-hidden="true"
              className={`${styles.marqueeGroup} ${styles.marqueeClone}`}
            >
              {testimonials.map((test) => renderTestimonialCard(test, true))}
            </div>
          </div>
        </div>
      </div>

      {/* Compact Trust Footer */}
      <div className="container-custom relative z-10">
        <div className="w-full mt-6 lg:mt-8 bg-white border border-gray-100 rounded-box-lg p-4 sm:px-6 sm:py-4 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
            <p className="text-xs sm:text-[13px] xl:text-sm font-bold text-dark leading-snug">
              Currently supervising active campaigns &amp; platforms for{' '}
              <span className="text-primary font-extrabold">250+ enterprises</span> across Kerala and UAE.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/CcVcPNMvPcXKQNjH7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary/5 border border-primary/20 hover:border-primary rounded-box-sm px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 flex-shrink-0 whitespace-nowrap"
          >
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span>Read More Reviews on Google</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
