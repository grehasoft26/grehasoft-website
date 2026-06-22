// 'use client';

// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { motion, AnimatePresence } from 'motion/react';
// import { Quote, Play, X, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// export default function Testimonials() {
//   const [testimonials, setTestimonials] = useState<any[]>([]);
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ FETCH DATA
//   useEffect(() => {
//     fetch(`/wp-json/custom/v1/testimonials`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('API DATA:', data);

//         if (Array.isArray(data)) {
//           setTestimonials(data);
//         } else {
//           setTestimonials([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setTestimonials([]);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section className="section-padding bg-white overflow-hidden">
//       <div className="container-custom">

//         {/* TITLE */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-accent font-semibold uppercase tracking-wider text-sm mb-4 block"
//           >
//             Testimonials
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold mb-6 text-dark"
//           >
//             What Our <span className="text-primary">Clients Say</span> About Us
//           </motion.h2>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <p className="text-center">Loading testimonials...</p>
//         )}

//         {/* SLIDER */}
//         {!loading && Array.isArray(testimonials) && testimonials.length > 0 && (
//           <div className="relative">
//             <Swiper
//               modules={[Autoplay, Pagination, Navigation]}
//               spaceBetween={30}
//               slidesPerView={1}
//               loop
//               autoplay={{ delay: 5000, disableOnInteraction: false }}
//               pagination={{
//                 clickable: true,
//                 el: '.testimonial-pagination',
//               }}
//               navigation={{
//                 prevEl: '.testimonial-prev',
//                 nextEl: '.testimonial-next',
//               }}
//               breakpoints={{
//                 1024: { slidesPerView: 2 },
//               }}
//               className="testimonial-slider !pb-16"
//             >
//               {testimonials.map((item: any, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center h-full">

//                     {/* IMAGE / VIDEO */}
//                     <div
//                       className="relative w-full md:w-48 h-48 rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 shadow-lg"
//                       onClick={() => item.video && setSelectedVideo(item.video)}
//                     >
//                       <img
//                         src={item.image || '/placeholder.jpg'}
//                         alt={item.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />

//                       {item.video && (
//                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                           <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary">
//                             <Play className="w-5 h-5 fill-current" />
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* CONTENT */}
//                     <div className="flex-1">
//                       {/* STARS */}
//                       <div className="flex gap-1 mb-4">
//                         {[...Array(item.rating || 5)].map((_, i) => (
//                           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                         ))}
//                       </div>

//                       <Quote className="w-10 h-10 text-primary/20 mb-4" />

//                       <p className="text-lg text-text-gray italic mb-6 leading-relaxed">
//                         "{item.review}"
//                       </p>

//                       <div className="flex items-center gap-4">
//                         <img
//                           src={item.image || '/placeholder.jpg'}
//                           alt={item.name}
//                           className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
//                         />
//                         <div>
//                           <h4 className="text-lg font-bold text-dark">
//                             {item.name}
//                           </h4>
//                           <p className="text-sm text-text-gray font-medium">
//                             {item.designation}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* NAVIGATION */}
//             <div className="flex items-center justify-center gap-6 mt-8">
//               <button className="testimonial-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white">
//                 <ChevronLeft />
//               </button>

//               <div className="testimonial-pagination flex gap-2"></div>

//               <button className="testimonial-next w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white">
//                 <ChevronRight />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* EMPTY STATE */}
//         {!loading && testimonials.length === 0 && (
//           <p className="text-center">No testimonials found.</p>
//         )}
//       </div>

//       {/* VIDEO MODAL */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <motion.div
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
//             onClick={() => setSelectedVideo(null)}
//           >
//             <motion.div
//               className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-4 right-4 text-white"
//                 onClick={() => setSelectedVideo(null)}
//               >
//                 <X />
//               </button>

//               <video
//                 src={selectedVideo}
//                 autoPlay
//                 controls
//                 className="w-full h-full object-contain"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ArrowUpRight, CheckCircle, Shield, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'SumesH VadakkumkarayiL',
    role: '',
    content: "We engaged Grehasoft for our Ecommerce website design, SMM, SEO, and Google Business Listing management, and the overall experience has been smooth and well-coordinated. The team understood our website requirements clearly and developed a website that presents our business in a simple and professional way.",
    image: 'https://picsum.photos/seed/user1/200/200',
    rating: 5,
    metrics: '99.8% Project Delivery Rate',
    stats: '2.5x Performance Jump'
  },
  {
    id: 2,
    name: 'Rafal Embroidery',
    role: '',
    content: "We contacted Grehasoft first for our website development, and then for SMM, SEO, and Google Business Profile management, and the experiences were so good from start to finish. They understood our requirements clearly and delivered an SEO friendly website that represents our business well.",
    image: 'https://picsum.photos/seed/user2/200/200',
    rating: 5,
    metrics: '340% Traffic Increase',
    stats: '180% Higher Sales Conversion'
  },
  {
    id: 3,
    name: 'Muhammed Nishab ',
    role: '',
    content: "Good experience with Grehasoft! Their Professional and creative website design services helped us build both our business and personal websites with outstanding quality and professionalism. Their SEO services really improved our search visibility, and the Local Map Listing support made it easier for customers to find us. Highly recommended!",
    image: 'https://picsum.photos/seed/user3/200/200',
    rating: 5,
    metrics: '40% Productivity Efficiency Boost',
    stats: 'No Extra Workforce Required'
  },
  {
    id: 4,
    name: 'Chithra Shukla',
    role: '',
    content: "I’m very satisfied with Grehasoft’s e-commerce website development services. They built my online store from scratch with great attention to design, speed, performance, and user experience. Their team is professional, reliable, and detail-oriented. I truly believe Grehasoft is one of the best e-commerce service providers I have worked with. Thanks a million Raji and team!!!",
    image: 'https://picsum.photos/seed/user4/200/200',
    rating: 5,
    metrics: '40% Productivity Efficiency Boost',
    stats: 'No Extra Workforce Required'
  },
];
const getInitials = (name: string) => {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = testimonials[activeIdx];

  return (
    <section className="section-padding bg-[#fafafa] relative overflow-hidden">
      {/* Structural subtle brand vector mesh lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
           
         
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                Empowering Partners Worldwide
              </span>
            </div>
          <h2 className="text-4xl md:text-5.5xl font-extrabold text-dark tracking-tight leading-tight mb-6">
            Client success stories that <br></br><span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">inspire our growth</span>
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how modern organizations scale operations, streamline workflows, and secure digital advantages leveraging Grehasoft's expert solutions.
          </p>
        </div>

        {/* Core Layout Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT PANEL: Selected spotlight details (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Embedded dynamic quote icon blur */}
                <Quote className="absolute -right-4 -top-4 w-40 h-40 text-primary/[0.03] select-none pointer-events-none" />

                <div>
                  {/* Rating Stars & Stats Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
                    <div className="flex gap-1 bg-gray-50 px-3.5 py-1.5 rounded-full border border-gray-100">
                      {[...Array(active.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/5 border border-accent/10 uppercase tracking-wider">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {active.metrics}
                    </div>
                  </div>

                  {/* Testimonial Core Block */}
                 
                 <p className="text-text-gray text-lg max-w-2xl mx-auto leading-relaxed ">
                    "{active.content}"
                  </p>
                </div>

                {/* Client Profile and Stats block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-gray-100 relative z-10">
                  <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg border-2 border-primary/20">
  {getInitials(active.name)}
</div>
                    <div>
                      <h4 className="text-lg font-bold text-dark tracking-tight">{active.name}</h4>
                      <p className="text-sm text-text-gray font-medium">{active.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 sm:items-end">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-text-gray">IMPACT REALIZED</span>
                    <div className="flex items-center gap-2 bg-primary/5 text-primary text-xs font-extrabold px-3 py-1.5 rounded-xl border border-primary/10">
                      <Shield className="w-3.5 h-3.5 fill-current text-primary" />
                      <span>{active.stats}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL: Interactive story selection list dock (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <div className="text-xs font-bold text-text-gray/80 px-2 uppercase tracking-widest block mb-1">
                Select Client Success File
              </div>
              
              {testimonials.map((test, index) => {
                const isActive = activeIdx === index;
                return (
                  <button
                    key={test.id}
                    onClick={() => setActiveIdx(index)}
                    className={`w-full text-left p-5 rounded-2.5xl border transition-all duration-300 flex items-center gap-4 relative group ${
                      isActive 
                        ? 'bg-white shadow-md border-primary ring-1 ring-primary/10' 
                        : 'bg-white/80 hover:bg-white border-gray-100 hover:shadow-sm'
                    }`}
                  >
                    {/* Active Accent Tag bar */}
                    {isActive && (
                      <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r-lg bg-primary" />
                    )}

                    {/* Client Avatar */}
                    <div
  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 ${
    isActive
      ? 'border-primary bg-gradient-to-br from-primary to-accent'
      : 'border-gray-200 bg-gradient-to-br from-[#0753F6] to-[#1AB728]'
  }`}
>
  {getInitials(test.name)}
</div>

                    {/* Short text snippet details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-dark text-sm tracking-tight truncate">
                          {test.name}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-black tracking-wider text-primary uppercase font-mono bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                            Spotlight <ArrowUpRight className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-gray font-medium truncate mt-0.5">{test.role}</p>
                      <p className="text-sm text-text-gray/80 line-clamp-1 mt-1">{test.content}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Google Reviews CTA */}
<a
  href="https://maps.app.goo.gl/CcVcPNMvPcXKQNjH7"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 bg-white border border-primary/20 hover:border-primary rounded-2xl p-4 font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
>
  ⭐ Read More Reviews on Google
  <ArrowUpRight className="w-4 h-4" />
</a>


            {/* Custom brand statistics footer note */}
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 mt-6 lg:mt-0">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent animate-ping flex-shrink-0" />
                <p className="text-xs font-bold text-dark leading-snug">
                  Currently supervising active campaigns & platforms for <span className="text-primary font-extrabold">250+ enterprises</span> across Kerala and UAE.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
