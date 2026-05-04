'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Award, Trophy, Star, Target } from 'lucide-react';

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function Awards() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]); // ✅ ADDED

  // ✅ FETCH ACF DATA
  useEffect(() => {
    axios
      .get(`${API}/pages?slug=home&_fields=acf`)
      .then((res) => {
        setData(res.data[0]?.acf);
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ FETCH IMAGE URLs
  useEffect(() => {
    if (!data) return;

    const fetchImages = async () => {
      const ids = [
        data.card1_image,
        data.card2_image,
        data.card3_image,
        data.card4_image,
      ];

      const urls = await Promise.all(
        ids.map(async (id: number) => {
          if (!id) return null;
          const res = await axios.get(`${API}/media/${id}`);
          return res.data.source_url;
        })
      );

      setImages(urls as string[]);
    };

    fetchImages();
  }, [data]);

  // ✅ FETCH VIDEO URLs (MAIN FIX)
  useEffect(() => {
    if (!data) return;

    const fetchVideos = async () => {
      const ids = [
        data.card1_video,
        data.card2_video,
        data.card3_video,
        data.card4_video,
      ];

      const urls = await Promise.all(
        ids.map(async (id: number) => {
          if (!id) return null;
          const res = await axios.get(`${API}/media/${id}`);
          return res.data.source_url;
        })
      );

      setVideos(urls as string[]);
    };

    fetchVideos();
  }, [data]);

  if (!data) return null;

  // ✅ SAME STRUCTURE (NO DESIGN CHANGE)
  const awards = [
    {
      title: data.card1_title,
      year: data.card1_year,
      videoUrl: videos[0], // ✅ FIXED
      icon: Trophy,
      color: 'bg-yellow-500',
      image: images[0],
    },
    {
      title: data.card2_title,
      year: data.card2_year,
      videoUrl: videos[1],
      icon: Award,
      color: 'bg-blue-500',
      image: images[1],
    },
    {
      title: data.card3_title,
      year: data.card3_year,
      videoUrl: videos[2],
      icon: Star,
      color: 'bg-purple-500',
      image: images[2],
    },
    {
      title: data.card4_title,
      year: data.card4_year,
      videoUrl: videos[3],
      icon: Target,
      color: 'bg-green-500',
      image: images[3],
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block"
            >
              {data.section_tag}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-dark"
            >
              {data.section_title}{' '}
              <span className="text-primary">{data.highlight_text}</span>
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
                <p className="text-2xl font-bold text-dark">{data.awards_count}</p>
                <p className="text-sm text-text-gray">{data.awards_label}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setSelectedVideo(award.videoUrl)}
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
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${award.color}`}>
                  <award.icon className="w-6 h-6" />
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
                    <span className="text-sm font-medium">Watch Video</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"
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