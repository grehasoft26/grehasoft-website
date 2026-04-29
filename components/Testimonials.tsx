'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Play, X, Star, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH DATA
  useEffect(() => {
    fetch(`https://antiquewhite-swan-450844.hostingersite.com/wp-json/custom/v1/testimonials`)
      .then((res) => res.json())
      .then((data) => {
        console.log('API DATA:', data);

        if (Array.isArray(data)) {
          setTestimonials(data);
        } else {
          setTestimonials([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setTestimonials([]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-dark"
          >
            What Our <span className="text-primary">Clients Say</span> About Us
          </motion.h2>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center">Loading testimonials...</p>
        )}

        {/* SLIDER */}
        {!loading && Array.isArray(testimonials) && testimonials.length > 0 && (
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: '.testimonial-pagination',
              }}
              navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next',
              }}
              breakpoints={{
                1024: { slidesPerView: 2 },
              }}
              className="testimonial-slider !pb-16"
            >
              {testimonials.map((item: any, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center h-full">

                    {/* IMAGE / VIDEO */}
                    <div
                      className="relative w-full md:w-48 h-48 rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 shadow-lg"
                      onClick={() => item.video && setSelectedVideo(item.video)}
                    >
                      <img
                        src={item.image || '/placeholder.jpg'}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {item.video && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary">
                            <Play className="w-5 h-5 fill-current" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">
                      {/* STARS */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <Quote className="w-10 h-10 text-primary/20 mb-4" />

                      <p className="text-lg text-text-gray italic mb-6 leading-relaxed">
                        "{item.review}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                          src={item.image || '/placeholder.jpg'}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                          <h4 className="text-lg font-bold text-dark">
                            {item.name}
                          </h4>
                          <p className="text-sm text-text-gray font-medium">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAVIGATION */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button className="testimonial-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white">
                <ChevronLeft />
              </button>

              <div className="testimonial-pagination flex gap-2"></div>

              <button className="testimonial-next w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white">
                <ChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && testimonials.length === 0 && (
          <p className="text-center">No testimonials found.</p>
        )}
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setSelectedVideo(null)}
              >
                <X />
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