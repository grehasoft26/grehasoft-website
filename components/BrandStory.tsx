'use client';

import { motion } from 'motion/react';
import { History, Target, Users, Rocket, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const milestones = [
  {
    year: '2015',
    title: 'The Beginning',
    desc: 'Grehasoft was founded with a vision to bridge the gap between complex technology and business needs.',
    icon: History,
  },
  {
    year: '2018',
    title: 'Global Expansion',
    desc: 'We expanded our reach beyond borders, serving clients across Europe and North America.',
    icon: Rocket,
  },
  {
    year: '2021',
    title: 'Innovation Hub',
    desc: 'Established our dedicated R&D wing to focus on AI, Machine Learning, and Blockchain solutions.',
    icon: Target,
  },
  {
    year: '2023',
    title: 'Community Impact',
    desc: 'Reached a milestone of 500+ successful projects and a team of 100+ passionate experts.',
    icon: Users,
  },
];

export default function BrandStory() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark leading-tight">
              A Story of <span className="text-primary">Passion, Innovation,</span> and Growth
            </h2>
            <div className="space-y-6 text-text-gray text-lg leading-relaxed">
              <p>
                Grehasoft started as a small team of three visionaries in a modest office, driven by a single goal: to make high-end technology accessible to businesses of all sizes.
              </p>
              <p>
                Over the years, we have evolved into a global technology partner, but our core values remain unchanged. We believe that every line of code we write should contribute to our clients' success.
              </p>
              <p>
                Today, we are proud to be at the forefront of digital transformation, helping brands navigate the complexities of the modern digital landscape with confidence and creativity.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/about/brand-story" className="btn-primary inline-flex items-center gap-2 group">
                Read Full Brand Story
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline Decoration */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 relative z-10 ${
                    index % 2 === 1 ? 'md:translate-y-12' : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
