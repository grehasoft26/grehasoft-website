'use client';

import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { getClients } from '@/lib/backend-api';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const LOGO_BOX_W = 220;
const LOGO_BOX_H = 100;
// Every logo gets roughly the same visible area, so wide and compact marks carry similar visual weight.
const LOGO_TARGET_AREA = LOGO_BOX_W * LOGO_BOX_H * 0.45;

// Visible content of an image, as fractions of its full size, plus its aspect ratio.
type ContentBox = { x: number; y: number; w: number; h: number; aspect: number };

const contentBoxCache = new Map<string, Promise<ContentBox | null>>();

// Finds the bounding box of non-transparent, non-white pixels so padding baked into
// a logo file doesn't shrink it. The image is read through the same-origin Next.js
// optimizer because the WordPress media host doesn't send CORS headers.
function measureContentBox(src: string): Promise<ContentBox | null> {
  if (!contentBoxCache.has(src)) {
    contentBoxCache.set(src, new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          if (!ctx || !width || !height) return resolve(null);
          ctx.drawImage(img, 0, 0);
          const { data } = ctx.getImageData(0, 0, width, height);

          let minX = width, minY = height, maxX = -1, maxY = -1;
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const i = (y * width + x) * 4;
              const isBackground = data[i + 3] < 16 || (data[i] > 235 && data[i + 1] > 235 && data[i + 2] > 235);
              if (isBackground) continue;
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
          if (maxX < 0) return resolve(null);

          resolve({
            x: minX / width,
            y: minY / height,
            w: (maxX - minX + 1) / width,
            h: (maxY - minY + 1) / height,
            aspect: width / height,
          });
        } catch {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = `/_next/image?url=${encodeURIComponent(src)}&w=256&q=75`;
    }));
  }
  return contentBoxCache.get(src)!;
}

function ClientLogo({ src, alt }: { src: string; alt: string }) {
  const [box, setBox] = useState<ContentBox | null>(null);

  useEffect(() => {
    let cancelled = false;
    setBox(null);
    measureContentBox(src).then((result) => {
      if (!cancelled) setBox(result);
    });
    return () => {
      cancelled = true;
    };
  }, [src]);

  let fit: React.CSSProperties | undefined;
  if (box) {
    // Size the visible content to the target area, capped by the logo box.
    const ratio = (box.w * box.aspect) / box.h;
    let contentH = Math.sqrt(LOGO_TARGET_AREA / ratio);
    let contentW = contentH * ratio;
    if (contentW > LOGO_BOX_W) {
      contentW = LOGO_BOX_W;
      contentH = contentW / ratio;
    }
    if (contentH > LOGO_BOX_H) {
      contentH = LOGO_BOX_H;
      contentW = contentH * ratio;
    }

    // Scale the whole image so its content hits that size, then centre the content.
    const imgH = contentH / box.h;
    const imgW = imgH * box.aspect;
    fit = {
      position: 'absolute',
      left: (LOGO_BOX_W - contentW) / 2 - box.x * imgW,
      top: (LOGO_BOX_H - contentH) / 2 - box.y * imgH,
      width: imgW,
      height: imgH,
      maxWidth: 'none',
    };
  }

  return (
    <div className="relative flex items-center justify-center w-[220px] h-[100px] shrink-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        style={fit}
        className={`
          block
          ${fit ? '' : '!w-full !h-full'}
          object-contain
          object-center
          opacity-100
          transition-all
          duration-500
        `}
      />
    </div>
  );
}

export default function Clients({ initialClients = [] }: { initialClients?: any[] }) {
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    if (initialClients && initialClients.length > 0) {
      const clientsWithImages = initialClients.map((client: any) => ({
        ...client,
        image: client.featured_image_url || "/images/placeholder.jpg",
      }));
      setClients(clientsWithImages);
      return;
    }

    const fetchClients = async () => {
      try {
        const res = await getClients();

        const clientsWithImages = (res || []).map((client: any) => ({
          ...client,
          image:
            client.featured_image_url ||
            "/images/placeholder.jpg",
        }));

        setClients(clientsWithImages);
      } catch (error: any) {
        console.warn("Error fetching clients:", error?.message || error);
      }
    };

    fetchClients();
  }, [initialClients]);

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
            {/* <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-accent" />

              <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">
                Trusted By Industry Leaders
              </span>
            </div> */}
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
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
        <div className="relative bg-white border-y border-white/10 py-12 overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#02025c]/40 via-[#02025c]/10 to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#02025c]/40 via-[#02025c]/10 to-transparent" />

        <div className="clients-marquee-track flex items-center gap-24 pr-24 w-max">
  {[...clients, ...clients].map((client, index) => {
    const logo = client.image;
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
          min-w-[260px]
          h-[140px]
          shrink-0
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

        <ClientLogo src={logo} alt={name} />
      </a>
    );
  })}
</div>
        </div>

        {/* BUTTON */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
}