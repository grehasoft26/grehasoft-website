'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              About Grehasoft
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark leading-tight">
              We Build <span className="text-primary">Digital Experiences</span> That Drive Growth
            </h2>
            <p className="text-lg text-text-gray mb-8 leading-relaxed">
              Grehasoft is a premier IT solutions provider dedicated to transforming businesses through innovative technology. With over a decade of experience, we've helped hundreds of clients worldwide achieve their digital goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                'Expert Team of Developers',
                'Innovative Software Solutions',
                'Customer-Centric Approach',
                'Proven Track Record',
                'Cutting-Edge Technology',
                '24/7 Support & Maintenance',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/about" className="btn-primary w-full sm:w-auto">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-dark font-semibold group-hover:text-primary transition-colors">
                  Our Success Story
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Video/Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="https://picsum.photos/seed/about-grehasoft/800/600"
                alt="Grehasoft Team"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-dark/20 group-hover:bg-dark/10 transition-colors">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl group-hover:bg-primary group-hover:text-white transition-all"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </motion.button>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="grid grid-cols-3 gap-4 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                  <div className="text-center border-r border-gray-200">
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-xs text-text-gray font-medium uppercase tracking-wider">Years Exp</p>
                  </div>
                  <div className="text-center border-r border-gray-200">
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-text-gray font-medium uppercase tracking-wider">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-xs text-text-gray font-medium uppercase tracking-wider">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
