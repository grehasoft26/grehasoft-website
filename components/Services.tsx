'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import * as Icons from "lucide-react";
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  
  useEffect(() => {
    fetch("https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/services?_embed", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("SERVICES DATA:", data);
        setServices(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            Comprehensive IT Solutions for Your <span className="text-primary">Digital Transformation</span>
          </h2>
          <p className="text-lg text-text-gray">
            We combine technical expertise with creative vision to deliver solutions that drive growth and innovation.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
          const IconComponent = (Icons as any)[service.acf?.icon || "Code"];
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">
                  {service.title.rendered}
                </h3>

                {/* Description */}
                <div
                  className="text-text-gray mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: service.content.rendered,
                  }}
                />

                {/* Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}