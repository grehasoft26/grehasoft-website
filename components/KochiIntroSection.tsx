import { MapPin, Target, Shield, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';
import KochiTechPlatform from '@/components/home/KochiTechPlatform';
import styles from './KochiIntroSection.module.css';

/**
 * "Kochi's Premier IT Leader": a hero after the Syntra composition. A full-width heading block
 * (eyebrow, H1, subtitle), then two columns: the introduction, actions and metrics on the left and
 * the interactive exploded platform on the right, with the highlight points beneath it.
 */
export default function KochiIntroSection() {
  const highlightPoints = [
    'Full-Service IT Solutions Company',
    '10+ Years of Industry Experience',
    '100+ Successfully Delivered Projects',
    'Custom Software & Digital Solutions',
    'Trusted by Businesses Across Kerala',
    'Results-Driven Technology Partner',
  ];

  const statCards = [
    { value: '10+', label: 'Years Experience', icon: Award, tone: 'text-primary' },
    { value: '100+', label: 'Digital Products', icon: Target, tone: 'text-accent' },
    { value: '100%', label: 'Outcome Delivered', icon: Shield, tone: 'text-primary' },
  ];

  return (
    <section
      id="kochi-it-leader"
      aria-labelledby="kochi-it-leader-title"
      className={`${styles.section} relative isolate overflow-x-clip border-b border-gray-100 pb-14 pt-8 md:pb-20 md:pt-10 lg:pb-24 lg:pt-12`}
    >
      <div aria-hidden="true" className={styles.floor} />

      <div className="container-custom">
        {/* ---------------- Heading block: eyebrow, H1 and subtitle, full width above both columns ---------------- */}
        <header>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
            <span aria-hidden="true" className={`${styles.dot} size-2 shrink-0 rounded-full bg-accent`} />
            Kochi&apos;s Premier IT Leader
          </p>

          <h1 id="kochi-it-leader-title" className={`${styles.title} mt-5 font-bold text-dark lg:mt-6`}>
            <span className={styles.gradientText}>One of the Best IT Companies in Kochi, Kerala</span>
          </h1>

          <p className="mt-1.5 text-xl font-light leading-snug text-balance text-dark sm:text-2xl lg:mt-2 lg:text-[26px]">
            Delivering Smart IT Solutions since 2007
          </p>
        </header>

        {/* ---------------- Hero: copy | platform ----------------
            1024–1279px gives the copy an even half so both actions sit on one row; wider screens use Syntra's 0.92 / 1.08.
            The copy is the taller column, so the platform is centred against it. */}
        <div className="mt-5 grid items-center gap-12 md:mt-6 md:gap-14 lg:mt-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-16">
          {/* Left: introduction */}
          <div className="flex min-w-0 flex-col justify-center">
            <div className="max-w-[36rem] space-y-5 text-base leading-[1.75] text-dark">
              <p className="md:text-[17px] md:leading-[1.7]">
                Grehasoft is a leading IT company in Kochi, Kerala, delivering innovative software solutions that help businesses grow, automate operations, and stay ahead in the digital world. With years of industry expertise, we specialize in custom software development, web and mobile applications, ERP solutions, digital marketing, and branding services tailored to your unique business needs.
              </p>
              <p>
                We combine cutting-edge technology with strategic thinking to create scalable, secure, and high-performing digital solutions. Whether you&apos;re a startup, SME, or enterprise, our experienced team ensures every solution aligns with your business goals and delivers measurable results.
              </p>
              <p>
                At Grehasoft, we believe technology should simplify your business, improve productivity, and drive long-term success. From designing modern websites and developing powerful business applications to implementing SEO strategies and digital marketing campaigns, we provide complete end-to-end IT services under one roof. Our customer-first approach, transparent communication, and commitment to quality have earned us the trust of businesses across multiple industries.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-9">
              <Link href="/contact-us" className="btn-primary h-13 w-full gap-2 whitespace-nowrap sm:w-auto lg:px-5 lg:text-[15px] xl:px-8 xl:text-base">
                Launch Your Next Phase <ArrowRight className="size-[18px]" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-13 w-full items-center justify-center rounded-full border border-white/15 bg-gradient-to-r from-[#05044a] to-[#0753f6] px-7 text-sm font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_-10px_rgb(7_83_246/0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 hover:shadow-[0_16px_30px_-12px_rgb(7_83_246/0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto lg:px-5 xl:px-7"
              >
                Explore Services Hub
              </Link>
            </div>

            {/* Metrics: value over label, divided like a spec row. Labels stay on one line from tablet up:
                icon beside the text where the column is wide enough, above it in the 1024–1279px half-column. */}
            <dl className="mt-10 grid grid-cols-3 sm:flex sm:items-stretch lg:mt-12">
              {statCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`flex flex-col items-start gap-2 pr-3 last:pr-0 sm:flex-row sm:items-center sm:gap-3 sm:pr-7 lg:flex-col lg:items-start lg:gap-2 lg:pr-6 xl:flex-row xl:items-center xl:gap-2.5 xl:pr-5 ${i > 0 ? 'border-l border-dark/10 pl-4 sm:pl-7 lg:pl-6 xl:pl-5' : ''}`}
                >
                  <card.icon className={`size-7 shrink-0 sm:size-8 xl:size-7 ${card.tone}`} strokeWidth={1.4} aria-hidden="true" />
                  <div className="flex flex-col-reverse">
                    <dt className="text-[11px] font-medium leading-tight text-dark sm:text-[13px] sm:whitespace-nowrap xl:text-[12.5px]">{card.label}</dt>
                    <dd className="text-lg font-bold leading-6 text-dark sm:text-xl">{card.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: the interactive platform, frameless on the hero's own light, with the highlights beneath it */}
          <div className="mx-auto flex w-full min-w-0 max-w-[620px] flex-col lg:mx-0 lg:max-w-none">
            <div className="relative w-full lg:w-[104%]">
              {/* On phones the service grid below the visual makes this wrapper taller, so the badge is placed in px there. */}
              <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-primary/90 px-3.5 py-1.5 text-white shadow-lg shadow-primary/20 backdrop-blur-md sm:left-[4%] sm:top-[3%] sm:px-4 sm:py-2">
                <MapPin className="size-3.5 text-accent sm:size-4" aria-hidden="true" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider sm:text-xs">Infopark, Kochi</span>
              </div>

              <KochiTechPlatform label="Best IT Company in Kochi, Kerala: Grehasoft services platform with Web Design & Development, SEO & Digital Marketing, Branding & Graphic Design, Mobile App Development, Software & Web Applications and Technology Services" />
            </div>

            {/* Highlights: a light panel tucked under the platform's caption, so it reads as part of the visual. */}
            <ul className="mt-6 grid gap-x-6 gap-y-3.5 rounded-box-lg border border-dark/[0.07] bg-white/75 p-5 shadow-[0_1px_2px_rgb(5_4_74/0.04),0_14px_34px_-18px_rgb(5_4_74/0.18)] sm:grid-cols-2 sm:p-6 lg:mt-4">
              {highlightPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-px size-[18px] shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[13.5px] font-semibold leading-snug text-dark">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
