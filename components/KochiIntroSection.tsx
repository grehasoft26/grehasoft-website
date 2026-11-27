import { MapPin, Target, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';
import KochiTechPlatform from '@/components/home/KochiTechPlatform';
import styles from './KochiIntroSection.module.css';

/**
 * "Kochi's Premier IT Leader": a hero after the Syntra composition. A full-width heading block
 * (eyebrow, H1, subtitle), then two columns: the introduction, actions and metrics on the left and
 * the interactive exploded platform on the right, with the highlight points beneath it.
 */
export default function KochiIntroSection() {
  // The "10+ years" and "100+ projects" points were dropped: the stat cards now carry those figures.
  const highlightPoints = [
    'Full-Service IT Solutions Company',
    'Custom Software & Digital Solutions',
    'Trusted by Businesses Across Kerala',
    'Results-Driven Technology Partner',
  ];

  const statCards = [
    { value: '10+', label: 'Years of IT & Digital Experience', icon: Award, tone: 'text-primary' },
    { value: '100+', label: 'Digital Projects', icon: Target, tone: 'text-accent' },
    { value: 'Infopark', label: 'Kochi, Kerala', icon: MapPin, tone: 'text-primary' },
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
        {/* Centred as one group; the intro paragraphs below stay left-aligned for readability. From 1500px the
            group widens past the content column (up to 1640px, keeping 2rem from the viewport edges) so the H1 can
            sit on one line; see `.title` in the module for the matching size. */}
        <header className="text-center min-[1500px]:relative min-[1500px]:left-1/2 min-[1500px]:w-[calc(100vw-4rem)] min-[1500px]:max-w-[1640px] min-[1500px]:-translate-x-1/2">
          <p className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
            <span aria-hidden="true" className={`${styles.dot} size-2 shrink-0 rounded-full bg-accent`} />
            Kochi&apos;s Premier IT Leader
          </p>

          <h1 id="kochi-it-leader-title" className={`${styles.title} mt-5 font-bold text-dark lg:mt-6`}>
            {/* "End-to-End" is kept on one line: browsers otherwise break it at its hyphens on phones. */}
            <span className={styles.gradientText}>
              Best IT Company in Kochi for <span className="whitespace-nowrap">End-to-End</span> IT &amp; Digital Solutions
            </span>
          </h1>
        </header>

        {/* ---------------- Hero: copy | platform ----------------
            1024–1279px gives the copy an even half so both actions sit on one row; wider screens use Syntra's 0.92 / 1.08.
            The copy is the taller column, so the platform is centred against it. */}
        <div className="mt-6 grid items-center gap-12 md:mt-8 md:gap-14 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-16">
          {/* Left: introduction */}
          <div className="flex min-w-0 flex-col justify-center">
            <div className="max-w-[36rem] space-y-5 text-base leading-[1.75] text-dark">
              <p className="md:text-[17px] md:leading-[1.7]">
                Grehasoft is an IT company in Kochi providing end-to-end IT and digital solutions for businesses. Our capabilities include website development, custom software, mobile applications, e-commerce, SEO, digital marketing and online advertising, helping businesses build and strengthen their digital presence.
              </p>
              <p>
                From strategy and product design to engineering, marketing and ongoing support, Grehasoft brings technology and digital capabilities together around specific business requirements. Whether a business is building a new digital presence or improving an existing one, our solutions are developed around its goals, audience and operational needs.
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

            {/* Metrics: value over label, divided like a spec row, in three equal columns. Labels may wrap onto two
                balanced lines; the icon sits beside the text where the column is wide enough and above it on
                phones and in the 1024–1279px half-column. */}
            <dl className="mt-10 grid grid-cols-3 lg:mt-12">
              {statCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`flex min-w-0 flex-col items-start gap-2 pr-2 last:pr-0 sm:flex-row sm:items-start sm:gap-3 sm:pr-5 lg:flex-col lg:gap-2 lg:pr-4 xl:flex-row xl:gap-2.5 xl:pr-4 ${i > 0 ? 'border-l border-dark/10 pl-2.5 sm:pl-5 lg:pl-4 xl:pl-4' : ''}`}
                >
                  <card.icon className={`size-7 shrink-0 sm:mt-0.5 sm:size-8 xl:size-7 ${card.tone}`} strokeWidth={1.4} aria-hidden="true" />
                  <div className="flex min-w-0 flex-col-reverse">
                    <dt className="text-[11px] font-medium leading-snug text-balance text-dark sm:text-[13px] xl:text-[12.5px]">{card.label}</dt>
                    <dd className="text-lg font-bold leading-6 text-dark sm:text-xl">{card.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: the interactive platform, frameless on the hero's own light, with the highlights beneath it */}
          <div className="mx-auto flex w-full min-w-0 max-w-[620px] flex-col lg:mx-0 lg:max-w-none">
            {/* The location lives in the third stat card ("Infopark — Kochi, Kerala"), so the visual carries no badge. */}
            <div className="relative w-full lg:w-[104%] xl:w-full">
              <KochiTechPlatform label="Grehasoft end-to-end IT and digital solutions platform: Website Development, SEO & Digital Marketing, E-Commerce, Online Advertising, Custom Software and Mobile Applications" />
            </div>

            {/* Highlights: a light panel tucked under the platform's caption, so it reads as part of the visual. */}
            {/* Compact: tight padding and gaps, two columns from 640px. */}
            <ul className="mt-5 grid gap-x-4 gap-y-2.5 rounded-box-lg border border-dark/[0.07] bg-white/75 px-4 py-3.5 shadow-[0_1px_2px_rgb(5_4_74/0.04),0_14px_34px_-18px_rgb(5_4_74/0.18)] sm:grid-cols-2 sm:px-5 sm:py-4 lg:mt-3">
              {highlightPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-px size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[13px] font-semibold leading-snug text-balance text-dark">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
