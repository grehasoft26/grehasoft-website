'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const clients = [
  { name: 'IKEA', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg' },
  { name: 'Star', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Star_Plus_logo.svg' },
  { name: 'LuLu', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Lulu_Group_International_logo.svg' },
  { name: 'Garmin', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Garmin_logo.svg' },
  { name: 'Federal Bank', logo: 'https://upload.wikimedia.org/wikipedia/en/2/24/Federal_Bank_logo.svg' },
  { name: 'Marriott', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Marriott_International_logo.svg' },
  { name: 'Joyalukkas', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Joyalukkas_logo.svg' },
  { name: 'Synthite', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Synthite_logo.png' },
  { name: 'Alyasra', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Alyasra_Fashion_logo.png' },
  { name: 'Geojit', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Geojit_Logo.svg' },
  { name: 'Middlesex University', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Middlesex_University_logo.svg' },
  { name: 'Al-Qatami', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Al_Qatami_Group_logo.png' },
  { name: 'Etihad Rail', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Etihad_Rail_logo.svg' },
  { name: 'Nestle', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Nestl%C3%A9_logo.svg' },
  { name: 'Landmark Group', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Landmark_Group_logo.svg' },
];

export default function Clients() {
  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      {/* Background Brand Glows - Enhanced for depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[160px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs">
                Trusted by Industry Leaders
              </span>
            </div>
            <h2 className="text-8xl md:text-[4rem] font-black tracking-tighter text-white leading-[0.8] select-none">
              Clients
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-white/5">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className="group relative aspect-[4/3] flex items-center justify-center border-b border-r border-white/5 hover:bg-white/[0.01] transition-all duration-500"
            >
              {/* Brand Color Hover Glow - Subtle and elegant */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-700" />
              
              {/* Corner Accents on Hover */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />

              <div className="relative w-full h-14 px-10 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-30 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const span = document.createElement('span');
                      span.className = 'text-xs font-bold text-white/10 group-hover:text-accent tracking-[0.2em] uppercase transition-all duration-500';
                      span.innerText = client.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <Link 
            href="/portfolio" 
            className="group relative px-12 py-5 bg-transparent border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-accent/50"
          >
            {/* Hover Background Fill */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            
            <div className="relative flex items-center gap-3">
              <span className="text-lg font-bold text-white tracking-wider uppercase">
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
