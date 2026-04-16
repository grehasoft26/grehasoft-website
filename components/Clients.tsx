'use client';

import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Clients() {
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
  const fetchClients = async () => {
    try {
      const res = await axios.get(
        'https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/clients?per_page=100'
      );

      const clientsWithImages = await Promise.all(
        res.data.map(async (client: any) => {
          let logo = null;

          if (client.featured_media) {
            const imgRes = await axios.get(
              `https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/media/${client.featured_media}`
            );

            logo = imgRes.data.source_url;
          }

          return {
            ...client,
            logo,
          };
        })
      );

      setClients(clientsWithImages);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  fetchClients();
}, []);

  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[160px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs">
                Trusted by Industry Leaders
              </span>
            </div>

            <h2 className="text-8xl md:text-[4rem] font-black tracking-tighter text-white leading-[0.8]">
              Clients
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg lg:text-right"
          >
            <p className="text-2xl md:text-3xl font-medium text-white/40 leading-tight mb-4">
              Our clients are everything to us; so are we to them.
            </p>

            <div className="flex justify-start lg:justify-end gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
          </motion.div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  border-t border-white/5">
          {clients.map((client, index) => {
          const logo = client.logo;
            const url = client.acf?.website_url;
            const name = client.title.rendered;

            if (!logo) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                className="group relative aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 hover:bg-white/[0.01] transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-700" />

                {/* Lines */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />

                {/* Logo */}
                <a
                  href={url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-14 px-10 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="group relative px-12 py-5 border border-white/10 rounded-full overflow-hidden hover:border-accent/50 transition"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <div className="relative flex items-center gap-3">
              <span className="text-lg font-bold text-white uppercase">
                View All Clients
              </span>
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}