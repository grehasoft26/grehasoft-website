'use client';

import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Layers, Zap, Shield, BarChart } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Real-time data visualization and reporting for informed decision making.',
    icon: BarChart,
  },
  {
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security to protect your sensitive business data.',
    icon: Shield,
  },
  {
    title: 'Seamless Integration',
    description: 'Easily connect with your existing tools and workflows.',
    icon: Layers,
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed and efficiency to boost productivity.',
    icon: Zap,
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-dark text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Image/Mockup Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] group">
              <img
                src="https://picsum.photos/seed/pms-mockup/1200/800"
                alt="Grehasoft PMS Mockup"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badge */}
              <div className="absolute top-8 left-8 p-4 bg-accent rounded-2xl shadow-xl animate-bounce">
                <p className="text-xs font-bold uppercase tracking-widest text-white mb-1">New Version</p>
                <p className="text-xl font-bold text-white">PMS 2.0</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>
          
          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-4 block">
              Our Flagship Product
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Grehasoft <span className="text-accent">PMS</span>: Streamline Your Business Operations
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Our Property Management System (PMS) is a comprehensive solution designed to automate and optimize your business workflows, from lead generation to final delivery.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/products/pms" className="btn-accent w-full sm:w-auto">
                Explore PMS Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="text-white font-semibold hover:text-accent transition-colors flex items-center gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
