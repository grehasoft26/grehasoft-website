'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Award, Trophy, Star, Target } from 'lucide-react';

const awards = [
  {
    title: 'Best Digital Agency 2023',
    year: '2023',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-shaking-hands-in-a-meeting-4352-large.mp4',
    icon: Trophy,
    color: 'bg-yellow-500',
  },
  {
    title: 'Top Software Developers',
    year: '2022',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-in-a-dark-office-4351-large.mp4',
    icon: Award,
    color: 'bg-blue-500',
  },
  {
    title: 'Innovation Excellence Award',
    year: '2021',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-4353-large.mp4',
    icon: Star,
    color: 'bg-purple-500',
  },
  {
    title: 'Customer Success Award',
    year: '2020',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-working-in-the-office-4354-large.mp4',
    icon: Target,
    color: 'bg-green-500',
  },
];

export default function Awards() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block"
            >
              Recognition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark"
            >
              Awards & Recognition for Our <span className="text-primary">Commitment to Excellence</span>
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
                <p className="text-2xl font-bold text-dark">15+</p>
                <p className="text-sm text-text-gray">Global Awards</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setSelectedVideo(award.videoUrl)}
            >
              {/* Background Image/Video Placeholder */}
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all duration-500 z-10" />
              <img
                src={`https://picsum.photos/seed/award${index}/400/600`}
                alt={award.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${award.color}`}>
                  <award.icon className="w-6 h-6" />
                </div>
                
                <div>
                  <span className="text-accent font-bold text-lg mb-2 block">{award.year}</span>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-accent transition-colors">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-accent transition-all">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-sm font-medium">Watch Video</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <video
                src={selectedVideo}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
