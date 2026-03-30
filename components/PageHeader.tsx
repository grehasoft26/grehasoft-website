'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumb: { name: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 bg-dark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-white/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <Link
                  href={item.href}
                  className={index === breadcrumb.length - 1 ? 'text-accent' : 'hover:text-accent transition-colors'}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
