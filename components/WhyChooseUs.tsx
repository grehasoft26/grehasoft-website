'use client';

import { motion } from 'motion/react';
import { 
  Users, 
  MessageSquare, 
  DollarSign, 
  FolderCheck, 
  HeartHandshake, 
  Award, 
  Globe,
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Quote
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Professional Team',
      desc: 'Expert developers, creative designers, and digital marketing specialists dedicated to absolute quality.',
      icon: <Users className="w-6 h-6" />,
      delay: 0.1
    },
    {
      title: 'Transparent Communication',
      desc: 'Clear, honest updates and absolute clarity with our clients at every step of development.',
      icon: <MessageSquare className="w-6 h-6" />,
      delay: 0.2
    },
    {
      title: 'Affordable Pricing',
      desc: 'Smart and accessible digital solutions crafted to align with your business goals without sacrificing premium performance.',
      icon: <DollarSign className="w-6 h-6" />,
      delay: 0.3
    },
    {
      title: 'Strong Project Management',
      desc: 'Punctual milestones, transparent planning, and rigorous scheduling to ensure flawless execution.',
      icon: <FolderCheck className="w-6 h-6" />,
      delay: 0.4
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50/30 relative overflow-hidden border-t border-gray-100">
      {/* Decorative Brand Color Circles (Soft Background Opacity) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header Block Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-accent font-black uppercase tracking-wider text-[10px]">
              Why Choose Grehasoft?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-6 tracking-tight leading-none"
          >
            Why <span className="text-primary"> Grehasoft </span> Is Kochi's Most Trusted IT Partner
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed border-l-4 border-accent pl-4 md:pl-0 md:border-none"
          >
            A dependable IT company that focuses on delivering real value.
          </motion.p>
        </div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-16">
          
          {/* Main Bento Column: The Epic Trust Center (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-dark text-white rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/5"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

            {/* Top Brand Tag */}
            <div className="relative z-10">
              <span className="text-accent font-bold uppercase tracking-widest text-[9px] bg-accent/20 px-3 py-1.5 rounded-full inline-block mb-8">
                We Stand Out Because:
              </span>
              
              {/* Massive 100+ Counter Block */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent">
                    100+
                  </span>
                  <span className="text-primary font-black text-3xl md:text-4xl">+</span>
                </div>
                <p className="text-sm font-bold text-white/90 tracking-wide uppercase mt-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Successfully Delivered IT Projects
                </p>
                <p className="text-sm text-white/50 mt-1 leading-relaxed">
                  Proven experience in delivering custom software, corporate websites, and enterprise integrations.
                </p>
              </div>

              {/* Global Reach Row */}
              <div className="border-t border-white/10 pt-8 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent flex-shrink-0 border border-white/10">
                    <Globe className="w-6 h-6 animate-spin-slow text-accent" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white tracking-wide uppercase">
                      Global Footprint
                    </h4>
                    <p className="text-sm text-white/60 leading-normal mt-1 mb-3">
                      Serving a diverse, world-class clientele across multiple strategic global zones:
                    </p>
                    {/* Region Pill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {['India', 'Middle East', 'Europe', 'USA'].map((region, key) => (
                        <span key={key} className="text-[10px] font-black bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/10 hover:border-primary/50 transition-colors">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Network Connection Visual block */}
            <div className="relative z-10 my-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] shadow-inner bg-black/40 group/photo">
                <img
                  src="/images/footprint.png"
                  alt="Grehasoft Global IT Connectivity Network"
                  className="w-full h-full object-cover opacity-80 group-hover/photo:opacity-100 group-hover/photo:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bottom Status Tag */}
            <div className="relative z-10 border-t border-white/10 pt-8 mt-12 flex items-center justify-between">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">
                Performance Verified
              </p>
              <ArrowUpRight className="text-accent w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {/* Right Bento Segment: Differentiators (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Map standard 4 core differentiators */}
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: point.delay }}
                whileHover={{ y: -6 }}
                className="bg-white hover:bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-primary/20 hover:shadow-[0_20px_50px_-25px_rgba(5,4,74,0.08)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-primary transition-all duration-300 mb-6 border border-primary/10">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-black text-dark mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-50 pt-5 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[9px] font-black uppercase text-primary tracking-widest">Enterprise Ready</span>
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}

            {/* Support card: Spans 2 Columns dynamically highlighting Post-Delivery care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -6 }}
              className="md:col-span-2 bg-primary/5 border border-primary/10 hover:border-primary/30 p-8 md:p-10 rounded-[2.5rem] hover:bg-white hover:shadow-[0_20px_50px_-25px_rgba(5,4,74,0.08)] transition-all duration-300 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6"
            >
              <div className="flex items-start md:items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Continuous Partnership
                  </span>
                  <h3 className="text-lg md:text-xl font-black text-dark tracking-tight mt-1">
                    Reliable Support After Delivery
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl mt-1">
                    Quality care doesn't stop after deployment. We offer continuous digital maintenance, robust server troubleshooting, and continuous security optimizations post-launch.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-primary/10 pt-4 md:pt-0 md:pl-8 flex-shrink-0 justify-between md:justify-start">
                <div>
                  <p className="text-sm font-black text-primary uppercase">Guaranteed</p>
                  <p className="text-[10px] text-gray-400">Response Window</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Editorial Goal / Motivation Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[3rem] border border-gray-100 p-8 md:p-14 text-center relative overflow-hidden shadow-xl shadow-gray-50/50"
        >
          {/* Symmetrical Quotation Graphic */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <Quote className="w-6 h-6 fill-current" />
            </div>
          </div>
          
          <p className="text-dark font-extrabold text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto relative z-10 italic">
            "With every project, our goal is simple — deliver IT services that make your business smarter, stronger, and more efficient."
          </p>
          
          {/* Bottom subtle design lines */}
          <div className="mt-8 flex justify-center items-center gap-3">
             <div className="w-8 h-0.5 bg-primary/20" />
             <span className="text-[10px] font-black uppercase tracking-widest text-primary">Our Pledge of Professionalism</span>
             <div className="w-8 h-0.5 bg-primary/20" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
