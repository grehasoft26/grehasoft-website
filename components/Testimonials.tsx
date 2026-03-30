'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Play, X, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: "Grehasoft's expertise in software development has been a game-changer for our business. Their team is professional, innovative, and highly responsive.",
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-shaking-hands-in-a-meeting-4352-large.mp4',
    image: 'https://picsum.photos/seed/user1/200/200',
    rating: 5,
  },
  {
    name: 'Sarah Smith',
    role: 'Marketing Director, GlobalBrand',
    content: "The digital marketing strategies implemented by Grehasoft have significantly boosted our online presence and ROI. Highly recommended!",
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-in-a-dark-office-4351-large.mp4',
    image: 'https://picsum.photos/seed/user2/200/200',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'CTO, InnovateX',
    content: "Their PMS product has streamlined our operations and improved our efficiency by 40%. A truly remarkable solution for modern businesses.",
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-4353-large.mp4',
    image: 'https://picsum.photos/seed/user3/200/200',
    rating: 5,
  },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
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
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-dark"
          >
            What Our <span className="text-primary">Clients Say</span> About Us
          </motion.h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center h-full">
                  {/* Video Thumbnail */}
                  <div 
                    className="relative w-full md:w-48 h-48 rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 shadow-lg"
                    onClick={() => setSelectedVideo(testimonial.videoUrl)}
                  >
                    <img
                      src={`https://picsum.photos/seed/testimonial${index}/400/400`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-dark/30 flex items-center justify-center group-hover:bg-dark/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary transition-all">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <p className="text-lg text-text-gray italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-dark">{testimonial.name}</h4>
                        <p className="text-sm text-text-gray font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button className="testimonial-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="testimonial-pagination !static !w-auto flex gap-2"></div>
            <button className="testimonial-next w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
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
