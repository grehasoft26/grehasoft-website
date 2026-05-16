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
    <section className="py-24 md:py-32 bg-[#02025c] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-green-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-accent" />

              <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">
                Trusted By Industry Leaders
              </span>
            </div>

           <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[70px] font-black text-white leading-none tracking-[-4px]">
  Clients
</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-white/40 text-2xl md:text-3xl font-semibold leading-tight">
              Our clients are everything to us; so are we to them.
            </p>

            <div className="flex gap-2 mt-5">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
          </motion.div>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative border-y border-white/10 py-12 overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#02025c] to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#02025c] to-transparent" />

          <motion.div
            className="flex items-center gap-24 w-max"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...clients, ...clients].map((client, index) => {
              const logo = client.logo;
              const name = client.title.rendered;
              const url = client.acf?.website_url;

              if (!logo) return null;

              return (
               <a
  key={index}
  href={url || '#'}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    flex
    items-center
    justify-center
    min-w-[200px]
    h-[90px]
  "
>
  {/* TOP LINE */}
  <div
    className="
      absolute
      top-0
      left-0
      h-[1px]
      w-0
      bg-primary
      group-hover:w-full
      transition-all
      duration-500
    "
  />

  {/* BOTTOM LINE */}
  <div
    className="
      absolute
      bottom-0
      right-0
      h-[1px]
      w-0
      bg-accent
      group-hover:w-full
      transition-all
      duration-500
    "
  />

  {/* GLOW */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-primary/0
      to-accent/0
      group-hover:from-primary/5
      group-hover:to-accent/5
      rounded-xl
      transition-all
      duration-500
    "
  />

  <img
    src={logo}
    alt={name}
    className="
      relative
      h-10
      md:h-14
      w-auto
      object-contain

      brightness-0
      invert
      opacity-80

      group-hover:brightness-100
      group-hover:invert-0
      group-hover:opacity-100
      group-hover:scale-100

      transition-all
      duration-500
    "
  />
</a>
              );
            })}
          </motion.div>
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-20"
        >
          <Link
            href="/portfolio"
            className="group relative px-10 py-5 rounded-full border border-white/10 overflow-hidden hover:border-green-400/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <div className="relative flex items-center gap-3">
              <span className="text-white uppercase tracking-wider font-bold">
                View All Clients
              </span>

              <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-2 transition-transform duration-500" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}