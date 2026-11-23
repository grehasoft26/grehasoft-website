'use client';

import { Code2, LifeBuoy, PenTool, Rocket, Search, ShieldCheck, Target } from 'lucide-react';
import RadialOrbitalTimeline, { type OrbitalStage } from '@/components/ui/radial-orbital-timeline';

/** Services page: "Our End-to-End Delivery Methodology" as a radial orbital timeline. */

const STAGES: OrbitalStage[] = [
  {
    id: 'consult',
    number: '01',
    title: 'Consult & Discover',
    description: 'We learn how your business works, who your customers are and what success looks like, then agree the goals and deliverables for the project.',
    icon: Search,
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy & Planning',
    description: 'We turn those goals into a clear plan: scope, information architecture, technology choices, milestones and responsibilities.',
    icon: Target,
  },
  {
    id: 'design',
    number: '03',
    title: 'UI/UX Design',
    description: 'We map user journeys and wireframes, then design high-fidelity interfaces and prototypes that reflect your brand.',
    icon: PenTool,
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    description: 'Our engineers build responsive front ends and secure, scalable back ends, integrating the systems and services you rely on.',
    icon: Code2,
  },
  {
    id: 'qa',
    number: '05',
    title: 'Testing & Quality Assurance',
    description: 'We test functionality, performance, security and compatibility across devices and browsers before anything goes live.',
    icon: ShieldCheck,
  },
  {
    id: 'launch',
    number: '06',
    title: 'Launch & Deployment',
    description: 'We release to production with a planned launch, configure hosting and monitoring, and make sure everything runs smoothly on day one.',
    icon: Rocket,
  },
  {
    id: 'support',
    number: '07',
    title: 'Support & Optimization',
    description: 'After launch we monitor, maintain and improve your solution, using real-world data to keep it fast, secure and effective.',
    icon: LifeBuoy,
  },
];

export default function DeliveryMethodology() {
  return (
    <section aria-labelledby="delivery-methodology-title" className="relative isolate overflow-hidden py-16 text-white lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(45% 50% at 32% 52%, rgba(7,83,246,0.28), transparent 70%), radial-gradient(30% 35% at 85% 80%, rgba(26,183,40,0.10), transparent 70%), linear-gradient(180deg, #05044A 0%, #040339 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(60%_60%_at_35%_50%,#000_20%,transparent_75%)]"
      />

      <div className="container-custom">
        <header className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Our Process
          </span>
          <h2 id="delivery-methodology-title" className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-5xl">
            Our End-to-End <span className="text-primary italic">Delivery Methodology</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
            From strategy to launch, every stage is carefully planned to deliver reliable digital solutions.
          </p>
        </header>

        <RadialOrbitalTimeline
          stages={STAGES}
          label="Delivery methodology stages"
          // Grehasoft "G" brand symbol (same asset as the site favicon). Its visible shape sits
          // ~8px left of centre in the 210px canvas, hence the small offset.
          centerImage={{ src: '/images/icon.png', width: 210, height: 190, offsetX: 0.04 }}
        />

      </div>
    </section>
  );
}
