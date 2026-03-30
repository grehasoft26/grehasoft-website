'use client';

import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Plus } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/portfolio1/800/600',
    slug: 'e-commerce-platform',
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/portfolio2/800/600',
    slug: 'healthcare-mobile-app',
  },
  {
    title: 'Financial Dashboard',
    category: 'Software Solution',
    image: 'https://picsum.photos/seed/portfolio3/800/600',
    slug: 'financial-dashboard',
  },
  {
    title: 'Real Estate Portal',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/portfolio4/800/600',
    slug: 'real-estate-portal',
  },
  {
    title: 'Logistics Management',
    category: 'Software Solution',
    image: 'https://picsum.photos/seed/portfolio5/800/600',
    slug: 'logistics-management',
  },
  {
    title: 'Education App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/portfolio6/800/600',
    slug: 'education-app',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block"
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark"
            >
              Case Studies of Our <span className="text-primary">Successful Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio" className="btn-primary">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg h-[450px]"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary mb-6 shadow-xl"
                >
                  <Plus className="w-8 h-8" />
                </motion.div>
                <span className="text-white/80 font-medium uppercase tracking-widest text-xs mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {project.title}
                </h3>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="px-6 py-2 bg-white text-primary rounded-full font-semibold text-sm hover:bg-accent hover:text-white transition-all"
                >
                  View Case Study
                </Link>
              </div>
              
              {/* Default Content Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-dark/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-accent font-bold uppercase tracking-widest text-xs mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
