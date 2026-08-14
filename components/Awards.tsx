'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  X,
  Award,
  Trophy,
  Star,
  Target,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import { AwardsData } from '@/types/wordpress';

interface AwardsProps {
  data?: AwardsData | null;
  variant?: 'home' | 'page';
}

export default function Awards({
  data,
  variant = 'home',
}: AwardsProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  if (!data) return null;

  const awards = [
    {
      title: data.card1_title,
      year: data.card1_year,
      videoUrl: data.awards_media?.card1_video_url,
      icon: Trophy,
      color: 'bg-yellow-500',
      image: data.awards_media?.card1_image_url,
    },
    {
      title: data.card2_title,
      year: data.card2_year,
      videoUrl: data.awards_media?.card2_video_url,
      icon: Award,
      color: 'bg-blue-500',
      image: data.awards_media?.card2_image_url,
    },
    {
      title: data.card3_title,
      year: data.card3_year,
      videoUrl: data.awards_media?.card3_video_url,
      icon: Star,
      color: 'bg-purple-500',
      image: data.awards_media?.card3_image_url,
    },
    {
      title: data.card4_title,
      year: data.card4_year,
      videoUrl: data.awards_media?.card4_video_url,
      icon: Target,
      color: 'bg-green-500',
      image: data.awards_media?.card4_image_url,
    },
  ];

  const FeaturedIcon = awards[0]?.icon || Trophy;

  /* =====================================================
     HOME PAGE VERSION
  ===================================================== */

  if (variant === 'home') {
    return (
      <>
        <section className="section-padding bg-gray-50">
          <div className="container-custom">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">

              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />

                    <span className="text-xs font-bold text-accent uppercase tracking-widest">
                      {data.section_tag}
                    </span>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-dark"
                >
                  {data.section_title}{' '}
                  <span className="text-primary">
                    {data.highlight_text}
                  </span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="hidden lg:block"
              >
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Trophy className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-dark">
                      {data.awards_count}
                    </p>

                    <p className="text-sm text-text-gray">
                      {data.awards_label}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {awards.map((award, index) => {
                const Icon = award.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                    onClick={() =>
                      setSelectedVideo(award.videoUrl || null)
                    }
                  >
                    <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all duration-500 z-10" />

                    <img
                      src={
                        award.image ||
                        `https://picsum.photos/seed/award${index}/400/600`
                      }
                      alt={award.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${award.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <span className="text-accent font-bold text-lg mb-2 block">
                          {award.year}
                        </span>

                        <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-accent transition-colors">
                          {award.title}
                        </h3>

                        <div className="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-accent transition-all">
                            <Play className="w-4 h-4 fill-current" />
                          </div>

                          <span className="text-sm font-medium">
                            Watch Video
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <VideoModal
          selectedVideo={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      </>
    );
  }

  /* =====================================================
     DEDICATED AWARDS PAGE VERSION
  ===================================================== */

  return (
    <>
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-20 md:pb-32">

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">

          {/* SECTION INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />

              <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
                {data.section_tag}
              </span>
            </div>

           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark leading-tight tracking-[-1.5px]">
  {data.section_title}{' '}
  <span className="text-primary">
    {data.highlight_text}
  </span>
</h2>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">
              <p className="max-w-2xl text-lg md:text-xl text-text-gray leading-relaxed">
                Celebrating the achievements, milestones and industry
                recognition that continue to shape our journey.
              </p>

              <div className="flex items-center gap-4 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Trophy className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-3xl font-black text-dark">
                    {data.awards_count}
                  </p>

                  <p className="text-sm text-text-gray">
                    {data.awards_label}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* FEATURED AWARD */}
          {awards[0] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-24"
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] bg-dark rounded-[32px] overflow-hidden shadow-2xl">

                {/* IMAGE */}
                <div
                  className="relative min-h-[420px] lg:min-h-[560px] cursor-pointer overflow-hidden"
                  onClick={() =>
                    setSelectedVideo(awards[0].videoUrl || null)
                  }
                >
                  <img
                    src={
                      awards[0].image ||
                      `https://picsum.photos/seed/award-featured/1000/700`
                    }
                    alt={awards[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-dark/10 to-transparent" />

                  {/* PLAY */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-accent transition-all duration-300">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>

                  {/* YEAR */}
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold">
                      {awards[0].year}
                    </span>
                  </div>
                </div>


                {/* CONTENT */}
                <div className="relative p-10 md:p-14 lg:p-16 flex flex-col justify-center">

                  <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-primary/10 blur-xl" />

                  <div className="relative">

                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-8">
                      {FeaturedIcon && <FeaturedIcon className="w-7 h-7" />}
                    </div>

                    <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">
                      Featured Recognition
                    </p>

                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
  {awards[0].title}
</h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-10">
                      A milestone that reflects our commitment to excellence,
                      innovation and meaningful impact.
                    </p>

                    {awards[0].videoUrl && (
                      <button
                        onClick={() =>
                          setSelectedVideo(awards[0].videoUrl || null)
                        }
                        className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-primary text-white font-bold hover:bg-accent transition-all duration-300"
                      >
                        <Play className="w-4 h-4 fill-current" />

                        Watch Award Video

                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}


          {/* OTHER AWARDS */}
          <div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

              <div>
                <p className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3">
                  More Recognition
                </p>

                <h3 className="text-4xl md:text-5xl font-black text-dark">
                  Awards that mark our journey
                </h3>
              </div>

              <div className="hidden md:block w-32 h-[2px] bg-gradient-to-r from-primary to-accent" />
            </div>


            <div className="grid md:grid-cols-3 gap-8">

              {awards.slice(1).map((award, index) => {
                const Icon = award.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group"
                  >

                    <div
                      className="relative aspect-[4/3] rounded-[24px] overflow-hidden cursor-pointer bg-gray-100"
                      onClick={() =>
                        setSelectedVideo(award.videoUrl || null)
                      }
                    >

                      <img
                        src={
                          award.image ||
                          `https://picsum.photos/seed/award${index + 1}/800/600`
                        }
                        alt={award.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-all duration-500" />

                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1.5 rounded-full bg-white/90 text-dark text-sm font-bold">
                          {award.year}
                        </span>
                      </div>

                      {award.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                            <Play className="w-5 h-5 fill-current ml-1" />
                          </div>
                        </div>
                      )}
                    </div>


                    <div className="pt-6">

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <Icon className="w-5 h-5" />
                        </div>

                        <span className="text-sm font-bold text-accent uppercase tracking-wider">
                          {award.year}
                        </span>
                      </div>

                      <h4 className="text-xl md:text-2xl font-bold text-dark leading-tight group-hover:text-primary transition-colors">
                        {award.title}
                      </h4>

                      {award.videoUrl && (
                        <button
                          onClick={() =>
                            setSelectedVideo(award.videoUrl || null)
                          }
                          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-dark hover:text-primary transition-colors"
                        >
                          Watch Video

                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}

                    </div>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      <VideoModal
        selectedVideo={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}


/* =====================================================
   VIDEO MODAL
===================================================== */

function VideoModal({
  selectedVideo,
  onClose,
}: {
  selectedVideo: string | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
              onClick={onClose}
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              src={selectedVideo}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}