// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { ChevronLeft, ChevronRight, BookOpen, HelpCircle } from 'lucide-react';
// import { cn } from '@/lib/utils';

// export default function FAQ() {
//   const [faqs, setFaqs] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [direction, setDirection] = useState(0);

//   // ✅ FETCH WORDPRESS DATA
//   useEffect(() => {
//     fetch("/wp-json/wp/v2/faq")
//       .then(res => res.json())
//       .then(data => {
//         console.log("FAQ API:", data);

//         const formatted = data.map((item: any) => ({
//           question: item.acf?.question || "",
//           answer: item.acf?.answer || ""
//         }));

//         setFaqs(formatted);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   const totalPages = Math.ceil(faqs.length / 2);

//   const paginate = (newDirection: number) => {
//     if (currentPage + newDirection >= 0 && currentPage + newDirection < totalPages) {
//       setDirection(newDirection);
//       setCurrentPage(currentPage + newDirection);
//     }
//   };

//   const variants = {
//     enter: (direction: number) => ({
//       rotateY: direction > 0 ? 90 : -90,
//       opacity: 0,
//       x: direction > 0 ? 100 : -100,
//     }),
//     center: {
//       zIndex: 1,
//       rotateY: 0,
//       opacity: 1,
//       x: 0,
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       rotateY: direction < 0 ? 90 : -90,
//       opacity: 0,
//       x: direction < 0 ? 100 : -100,
//     }),
//   };

//   const currentFaqs = faqs.slice(currentPage * 2, currentPage * 2 + 2);

//   return (
//     <section className="section-padding bg-gray-50/50 relative overflow-hidden perspective-1000">

//       {/* Background */}
//       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
//       <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

//       <div className="container-custom relative z-10">

//         {/* HEADER (UNCHANGED) */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 bg-primary/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4"
//           >
           
//             Knowledge Base
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold mb-6 text-dark"
//           >
//             Explore Our <span className="text-primary">FAQ Book</span>
//           </motion.h2>

//           <p className="text-text-gray text-lg">
//             Flip through the pages to find answers to your most common questions.
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto relative">

//           {/* NAV BUTTONS */}
//           <button
//             onClick={() => paginate(-1)}
//             disabled={currentPage === 0}
//            className={cn(
//   "absolute left-4 md:left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-all border border-gray-100",
//   currentPage === 0
//     ? "opacity-30 cursor-not-allowed"
//     : "hover:bg-primary hover:text-white"
// )}
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={() => paginate(1)}
//             disabled={currentPage === totalPages - 1}
//            className={cn(
//   "absolute right-4 md:right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-all border border-gray-100",
//   currentPage === totalPages - 1
//     ? "opacity-30 cursor-not-allowed"
//     : "hover:bg-primary hover:text-white"
// )}
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* BOOK */}
//           <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative flex flex-col md:flex-row">

//             {/* Spine */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block z-20" />

//             <AnimatePresence initial={false} custom={direction} mode="wait">
//               <motion.div
//                 key={currentPage}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: "spring", stiffness: 300, damping: 30 },
//                   rotateY: { duration: 0.5 },
//                   opacity: { duration: 0.2 }
//                 }}
//                 className="w-full h-full flex flex-col md:flex-row"
//               >

//                 {/* LEFT PAGE */}
//                 <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-50 flex flex-col">
//                   {currentFaqs[0] && (
//                     <>
//                       <div className="flex items-center gap-3 mb-6">
//                         <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
//                           <HelpCircle className="w-6 h-6" />
//                         </div>
//                         <span className="text-sm font-bold text-primary/60 uppercase tracking-widest">
//                           QUESTION {currentPage * 2 + 1}
//                         </span>
//                       </div>

//                       <h3 className="text-2xl font-bold text-dark mb-6 leading-tight">
//                         {currentFaqs[0].question}
//                       </h3>

//                       <p className="text-text-gray text-lg leading-relaxed">
//                         {currentFaqs[0].answer}
//                       </p>

//                       <div className="mt-auto pt-8 text-xs text-gray-300 font-mono">
//                         PAGE {currentPage * 2 + 1}
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* RIGHT PAGE */}
//                 <div className="flex-1 p-8 md:p-12 flex flex-col bg-gray-50/30">
//                   {currentFaqs[1] ? (
//                     <>
//                       <div className="flex items-center gap-3 mb-6">
//                         <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
//                           <HelpCircle className="w-6 h-6" />
//                         </div>
//                         <span className="text-sm font-bold text-accent/60 uppercase tracking-widest">
//                           QUESTION {currentPage * 2 + 2}
//                         </span>
//                       </div>

//                       <h3 className="text-2xl font-bold text-dark mb-6 leading-tight">
//                         {currentFaqs[1].question}
//                       </h3>

//                       <p className="text-text-gray text-lg leading-relaxed">
//                         {currentFaqs[1].answer}
//                       </p>

//                       <div className="mt-auto pt-8 text-right text-xs text-gray-300 font-mono">
//                         PAGE {currentPage * 2 + 2}
//                       </div>
//                     </>
//                   ) : (
//                     <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
//                       <BookOpen className="w-16 h-16 mb-4 text-gray-300" />
//                       <p className="text-gray-400 italic">End of the FAQ Book</p>
//                     </div>
//                   )}
//                 </div>

//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* DOTS */}
//           <div className="mt-12 flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   setDirection(i > currentPage ? 1 : -1);
//                   setCurrentPage(i);
//                 }}
//                 className={cn(
//                   "h-1.5 transition-all duration-300 rounded-full",
//                   currentPage === i ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-300"
//                 )}
//               />
//             ))}
//           </div>

//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 text-center"
//         >
//           <p className="text-text-gray mb-6">Need more detailed information?</p>
//           <a href="/contact" className="btn-primary inline-flex items-center gap-2 group">
//             Speak to an Expert
//             <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </motion.div>

//       </div>

//       <style jsx global>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </section>
//   );
// }


'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Briefcase, 
  HelpCircle as HelpIcon,
  HelpCircle as SupportIcon,
  MessageCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'company', name: 'About Grehasoft', icon: Cpu },
  { id: 'services', name: 'Services & Startup Support', icon: Briefcase },
  { id: 'support', name: 'Support & Security', icon: SupportIcon },
];

const faqs = [
  {
    id: 1,
    category: 'company',
    question: "Which is the best software company in Kochi, Kerala?",
    answer: "Grehasoft is widely recognized as one of the best software companies in Kochi, Kerala, known for delivering high-quality, innovative IT solutions tailored to business needs."
  },
  {
    id: 2,
    category: 'services',
    question: "Can Grehasoft handle enterprise-level software projects?",
    answer: "Yes, we have extensive experience in managing and delivering complex, enterprise-level software projects with scalable architectures, enterprise-grade databases, and robust security frameworks."
  },
  {
    id: 3,
    category: 'services',
    question: "What services does Grehasoft offer for businesses and startups?",
    answer: "We offer a comprehensive suite of digital solutions, including premium website design, custom software development, high-performance mobile apps, data-driven digital marketing, and strategic IT consulting."
  },
  {
    id: 4,
    category: 'services',
    question: "How much does custom software development cost in Kochi?",
    answer: "The cost depends on project parameters such as feature complexity, timeline, and technology stack. We believe in transparency and offer competitive pricing with detailed, structural breakdowns after initial consultations."
  },
  {
    id: 5,
    category: 'services',
    question: "How can Grehasoft help a startup in Kerala?",
    answer: "We offer end-to-end technical companionship for startups, ranging from prototyping and Minimum Viable Product (MVP) designs to agile scaling and global SEO optimization."
  },
  {
    id: 6,
    category: 'support',
    question: "Does Grehasoft provide IT support and maintenance?",
    answer: "Yes, we provide proactive maintenance SLAs, cloud monitoring, emergency security patches, scale operations, and support desk integrations to guarantee optimal runtime compliance."
  },
  {
    id: 7,
    category: 'services',
    question: "Does Grehasoft provide mobile app development services in Kochi?",
    answer: "Absolutely. Our mobile engineering focus delivers beautiful native iOS, Android, and modular cross-platform apps characterized by smooth animations and offline state handling."
  },
  {
    id: 8,
    category: 'company',
    question: "How do I contact Grehasoft for a project?",
    answer: "You can use our secure online contact form, text us directly via WhatsApp, or call our team for friendly expert guidance. We usually respond with full system outlines within 24 business hours."
  },
  {
    id: 9,
    category: 'company',
    question: "Why should I choose Grehasoft over other software companies in Kochi?",
    answer: "Our commitments set us apart: absolute transparency, rigorous UX design principles, scalable framework architectures, and a proven track record of digital operational optimization."
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(1); // default expand first item

  // Filter logic
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section-padding bg-[#fafafa] relative overflow-hidden" id="faq">
      {/* Decorative Brand Spotlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Centered Heading Layout */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-[10px] font-black uppercase tracking-widest text-accent bg-primary/10 rounded-full border border-primary/5">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Knowledge Base Hub
          </div>
          <h2 className="text-4xl md:text-5.5xl font-extrabold text-dark tracking-tight leading-none mb-6">
            Frequently Asked <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Questions</span>
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about digital scaling, security baselines, budgets, or our workflows? Explore solutions compiled by our specialist team below.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Navigation, Category Filters, and Search dock (4 columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Search Input Panel */}
            <div className="bg-white p-5 rounded-2.5xl shadow-sm border border-gray-100 ring-1 ring-gray-900/5">
              <span className="text-[10px] uppercase font-black text-text-gray tracking-widest block mb-3.5">
                Search Questions
              </span>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Type keywords (e.g. startup, cost)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary/50 text-dark placeholder-text-gray/70 py-3.5 pl-11 pr-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-gray/80" />
              </div>
            </div>

            {/* Interactive Tab Selector buttons */}
            <div className="bg-white p-5 rounded-2.5xl shadow-sm border border-gray-100 ring-1 ring-gray-900/5 space-y-2">
              <span className="text-[10px] uppercase font-black text-text-gray tracking-widest block mb-3.5 px-1">
                Filter by Category
              </span>
              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        // Reset expansion on category change to prevent confusion
                        setExpandedId(null);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transition-all cursor-pointer",
                        isActive 
                          ? "bg-primary text-white shadow-md shadow-primary/10" 
                          : "text-dark hover:bg-gray-50 bg-transparent border border-transparent hover:border-gray-100"
                      )}
                    >
                      <Icon className={cn("w-4.5 h-4.5 flex-shrink-0", isActive ? "text-white" : "text-text-gray")} />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic support promo card */}
            <div className="bg-dark text-white rounded-2.5xl p-6 relative overflow-hidden shadow-xl border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-base font-extrabold mb-2 text-white">Still have questions?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Can't find what you are looking for? Send us a direct query on WhatsApp or drop a quick note.
              </p>
              <div className="flex flex-col gap-2.5">
                <a 
                  href="https://wa.me/919349942575" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all shadow-md hover:shadow-accent/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-white/95" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 border border-white/10 hover:bg-white/5 text-white font-bold text-xs py-3.5 px-5 rounded-xl transition-all"
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Accordion Panel with smooth motion height transitions (8 columns) */}
          <div className="lg:col-span-8 space-y-4">
            
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isExpanded = expandedId === faq.id;
                  return (
                    <motion.div
                      layout
                      key={faq.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        "rounded-2.5xl border transition-all duration-300 bg-white overflow-hidden shadow-sm hover:shadow-md",
                        isExpanded ? "border-primary/40 ring-1 ring-primary/10" : "border-gray-100"
                      )}
                    >
                      <button
                        onClick={() => toggleExpand(faq.id)}
                        className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-start gap-4 justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-start gap-3.5">
                          {/* Sequential Tag Indicator */}
                          <span className={cn(
                            "flex-shrink-0 w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center mt-0.5 font-mono",
                            isExpanded ? "bg-primary/10 text-primary" : "bg-gray-100 text-text-gray/80"
                          )}>
                            Q{index + 1}
                          </span>
                          <span className={cn(
                            "text-base md:text-lg font-bold tracking-tight text-dark leading-snug",
                            isExpanded && "text-primary transition-colors"
                          )}>
                            {faq.question}
                          </span>
                        </div>
                        
                        <div className={cn(
                          "w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                          isExpanded ? "rotate-180 bg-primary/5 border-primary/20 text-primary" : "text-text-gray"
                        )}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pl-[47px] md:pl-[59px] text-text-gray text-base leading-relaxed border-t border-gray-50 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-gray-100 rounded-3xl p-12 text-center text-text-gray"
                >
                  <p className="text-lg font-medium mb-2">No matching questions found.</p>
                  <p className="text-sm text-text-gray/80">Try refining your keyword query or switching categories above.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
