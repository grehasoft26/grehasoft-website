'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const clients = [
  { name: 'Client 1', logo: 'https://picsum.photos/seed/client1/200/100' },
  { name: 'Client 2', logo: 'https://picsum.photos/seed/client2/200/100' },
  { name: 'Client 3', logo: 'https://picsum.photos/seed/client3/200/100' },
  { name: 'Client 4', logo: 'https://picsum.photos/seed/client4/200/100' },
  { name: 'Client 5', logo: 'https://picsum.photos/seed/client5/200/100' },
  { name: 'Client 6', logo: 'https://picsum.photos/seed/client6/200/100' },
  { name: 'Client 7', logo: 'https://picsum.photos/seed/client7/200/100' },
  { name: 'Client 8', logo: 'https://picsum.photos/seed/client8/200/100' },
];

export default function Clients() {
  return (
    <section className="py-20 bg-gray-100 border-y border-gray-200 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-dark/40 uppercase tracking-[0.3em] mb-4">
            Trusted by Industry Leaders
          </p>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full opacity-30"></div>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="client-slider"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
