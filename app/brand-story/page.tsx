'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Globe, 
  ExternalLink, 
  ShieldCheck, 
  Activity, 
  Star, 
  Heart, 
  ThumbsUp, 
  CheckCircle2, 
  Laptop, 
  ChevronRight, 
  ArrowUpRight,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function BrandStoryPage() {
  const trustPoints = [
    { title: "A growing team", desc: "Nurturing modern programmers and design architects." },
    { title: "A reliable delivery system", desc: "Providing streamlined, bug-free, robust custom code structures." },
    { title: "Good client reviews", desc: "Earning stellar domestic and worldwide satisfaction scores." },
    { title: "Strong reputation", desc: "A brand synonymous with total technical and advisory honesty." },
    { title: "100+ completed projects", desc: "Deploying high-performance websites and bespoke applications." },
    { title: "A proven SEO record", desc: "Powering smart visibility campaign ranks on global search engines." },
    { title: "Presence on Google & socials", desc: "Maintaining a highly active professional ecosystem." }
  ];

  const brandNewSymbols = [
    { title: "A modern approach to technology", desc: "Embracing lightning-fast frameworks like React and custom native architectures." },
    { title: "Reliability and long-term partnership", desc: "Proactively maintaining digital health, security, and updates post-delivery." },
    { title: "Affordable and accessible digital solutions", desc: "Bringing top-tier coding standards within sustainable budgets for SMBs." },
    { title: "A renewed commitment to quality and innovation", desc: "Bridging creative branding with robust system designs." },
    { title: "Serving more clients globally", desc: "Stepping confidently into broader regional and international markets." }
  ];

  const permanentValues = [
    { title: "Our honesty and reliability", desc: "Honest scoping with zero hidden charges or unviable promises right from discovery." },
    { title: "Our dedication to client success", desc: "Viewing each client's growth metrics as our true business badge." },
    { title: "Our effort to treat every project importanly", desc: "Treating every single client, whether a micro-startup or global firm, with absolute importance." },
    { title: "Our mission to provide smart solutions", desc: "Formulating efficient, lightweight, and high-performance digital tools." }
  ];

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="Our Brand Story"
        description="The heart and soul of Grehasoft – our journey from a small freelance launch to a reliable global technology partner."
        breadcrumb={[
          { name: 'About', href: '/about-us' },
          { name: 'Brand Story', href: '/brand-story' },
        ]}
      />

     

      {/* Modern Horizontal Epoch Timeline Row */}
      <section className="section-padding bg-gray-50/50 border-t border-b border-gray-100 relative">
        <div className="container-custom">
          
          <div className="text-center md:text-left max-w-2xl mb-16">
            <span className="text-accent font-black uppercase tracking-[0.2em] text-[10px]">
              Chronicles
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-dark tracking-tight">
              Our Journey Through Time
            </h3>
            <p className="text-gray-500 text-sm mt-1.5">
              How a solo freelance initiative evolved organically into a global operations team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Step 1: 2007 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-black text-primary/30">2007</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d8a832] bg-[#d8a832]/10 px-3 py-1 rounded-full">
                    January Debut
                  </span>
                </div>
                
                <h4 className="text-xl font-black text-dark mb-4 tracking-tight leading-snug">
                  Beginning of Grehasoft
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  Grehasoft’s story started in January 2007, when our founder began taking up freelance works like Web application programming works and web development projects from home. There were no big teams, no funding, no corporate setup — just passion, skill, and determination to deliver good work. Clients appreciated the honesty, the effort, and the results. Slowly, the small freelance brand started becoming a trusted name locally.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-8 flex items-center justify-between text-[10px] text-gray-400 font-extrabold uppercase">
                <span>Freelance Foundation</span>
                <span>Work from Home</span>
              </div>
            </motion.div>

            {/* Step 2: 2013 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-black text-primary/30">2013</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Official Headspace
                  </span>
                </div>
                
                <h4 className="text-xl font-black text-dark mb-4 tracking-tight leading-snug">
                  Grehasoft as a Brand
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  In 2013, Grehasoft took a major step by opening its first office at the ITES Habitat Centre under Kerala IT Mission. This was a turning point. It marked Grehasoft’s evolution from freelance services into a professional IT solutions provider. With more structured processes, official workspace, and growing trust, the brand began taking on larger and more diverse projects.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-8 flex items-center justify-between text-[10px] text-gray-400 font-extrabold uppercase">
                <span>Kerala IT Mission Support</span>
                <span>Structured Studio</span>
              </div>
            </motion.div>

            {/* Step 3: Global Reach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-black text-primary/30">Present</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#9333ea] bg-[#9333ea]/10 px-3 py-1 rounded-full">
                    Global Reach
                  </span>
                </div>
                
                <h4 className="text-xl font-black text-dark mb-4 tracking-tight leading-snug">
                  Growth, Trust & Global Reach
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  As years passed, Grehasoft continued serving businesses across India. Clients began referring us to their partners, friends, and international networks — leading to projects in: UAE & Middle East, Europe, USA and Various parts of Asia. Grehasoft expanded its capabilities from simple websites to complete digital solutions, like Website Development, Digital marketing, Mobile Apps, and Custom Software Solutions.
                </p>
                <p className="text-xs text-primary font-bold mt-3 leading-relaxed">
                  Every client added to our experience. Every project added to our credibility.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-8 flex items-center justify-between text-[10px] text-gray-400 font-extrabold uppercase">
                <span>Worldwide Clients</span>
                <span>Full-Suite Digitizations</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Section 3: Earned Trust Grid */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-primary/5 px-3 py-1.5 rounded-full inline-block">
                No Sales Gimmicks
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none">
                Grehasoft - A Brand That Earned Trust
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                We didn’t grow through ads or aggressive sales. We grew through trust, referrals, consistent quality and support. Over time, Grehasoft built a strong, undeniable foundation of reliability.
              </p>

              {/* Special Quote Box */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                <p className="text-dark font-bold text-base leading-relaxed italic">
                  &quot;What truly defines Grehasoft is simple: clients trust us to do honest work, and we deliver code that works flawlessly.&quot;
                </p>
              </div>
            </div>

            {/* Right side checklist grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustPoints.map((pt, key) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: key * 0.05 }}
                    className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-dark text-[10px] font-bold">
                        ✓
                      </div>
                      <h4 className="text-sm font-black text-dark tracking-tight">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-normal pl-8">
                      {pt.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Brand Rebranding Section (The 2025 Rebrand) */}
      <section className="section-padding bg-gray-50/50 border-t border-b border-gray-100 relative overflow-hidden text-dark">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 mb-3 inline-block">
              Modern Evolution
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none mb-4">
              Presenting the NEW Grehasoft: The 2025 Rebrand
            </h2>
            <p className="text-gray-500 font-medium">
              Explore how we refined our brand identity to represent a cleaner, faster, globally expansive operational scope while preserving our founding values.
            </p>
          </div>

          {/* Logo Evolution Comparative Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-16">
            
            {/* Old Logo Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gray-100 text-[10px] font-black uppercase text-gray-400 rounded-bl-2xl">
                Archived Identity
              </div>

              <div className="flex flex-col items-center">
                <div className="w-44 h-28 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-100 mb-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                   <div
                  className="
                    w-40
                    h-28

                    sm:w-48
                    sm:h-32

                    flex
                    items-center
                    justify-center

                    grayscale
                    opacity-80

                    group-hover:grayscale-0
                    group-hover:opacity-100

                    transition-all
                    duration-500
                  "
                >
                  <img
                    src="/images/old.png"
                    alt="Old Grehasoft Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                </div>
                <h4 className="text-base font-black text-dark">Original Web Layout</h4>
                <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-widest">2007 - 2024</p>
              </div>
            </motion.div>

            {/* New Logo Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-[2.5rem] border border-primary/20 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary text-[10px] font-black uppercase text-white rounded-bl-2xl">
                Current Standard
              </div>

              <div className="flex flex-col items-center">
                <div className="w-44 h-28 bg-primary/5 rounded-2xl flex items-center justify-center overflow-hidden border border-primary/10 mb-6">
                  <div
                    className="
                      w-40
                      h-28

                      sm:w-48
                      sm:h-32

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src="/images/logo.png"
                      alt="New Grehasoft Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <h4 className="text-base font-black text-primary">Modern Global Emblem</h4>
                <p className="text-xs text-accent mt-1 uppercase font-bold tracking-widest bg-accent/10 px-2 py-0.5 rounded border border-accent/10">Active Rebrand</p>
              </div>
            </motion.div>

          </div>

          {/* New Look Description Column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6 bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-dark mb-4 tracking-tight">
                  A New Look. A Stronger Vision.
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Today, Grehasoft stands as a grounded, client-focused IT solutions company. After years of building a strong presence, Grehasoft entered a new phase of growth — expanding services, strengthening operations, and stepping more confidently into global markets. This new brand identity marks the next chapter for Grehasoft — a chapter of global expansion, innovative solutions, and deeper partnerships.
                </p>
                <p className="text-sm font-bold text-accent">
                  But while the look changed, our values did not.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-5 mt-6 text-[12px] uppercase font-black tracking-widest text-gray-400">
                Next Chapter of Growth
              </div>
            </div>

            {/* Right Symbols Grid */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest">
                Our New Identity Symbolizes:
              </h4>

              <div className="space-y-3">
                {brandNewSymbols.map((item, key) => (
                  <div key={key} className="bg-white px-6 py-4 rounded-2xl border border-gray-100 flex items-start gap-3.5 shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold flex-shrink-0 mt-0.5 animate-pulse">
                      ★
                    </div>
                    <div>
                      <h5 className="font-extrabold text-sm text-dark">{item.title}</h5>
                      <p className="text-sm text-gray-500 mt-0.5 font-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section 5: What Will Never Change (Our Core Foundations) */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 mb-3 inline-block">
              Absolute Constants
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none mb-4">
              What Will Never Change
            </h2>
            <p className="text-gray-500 font-medium">
              While our visual look transitions gracefully to match forward-looking benchmarks, our basic service values remain completely unaltered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {permanentValues.map((ax, idx) => (
              <div 
                key={idx}
                className="bg-gray-50/50 hover:bg-white p-7 md:p-8 rounded-[2rem] border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100 mb-5 text-[10px] font-mono font-black">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-black text-dark mb-2.5 tracking-tight leading-snug">
                    {ax.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">
                    {ax.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 mt-6 text-[12px] font-black uppercase tracking-widest text-primary border-t border-gray-100 pt-4">
                  <span>Heart of Grehasoft</span>
                </div>
              </div>
            ))}
          </div>

          {/* Thank you section with different layout */}
          <div className="mt-24 border-t border-gray-100 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Big typography message of appreciation */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-primary/5 px-3 py-1.5 rounded-full inline-block">
                  A Message of Gratitude
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark tracking-tight leading-none">
                  Thank You
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  Our growth from a solo freelancer in January 2007 to a trusted IT solutions team serving international clients is a journey we share entirely with you. Your trust is our strongest code.
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <span className="h-0.5 w-10 bg-primary/30" />
                  <span className="text-[12px] font-mono uppercase tracking-wider text-gray-400">Est. 2007, Kochi Infopark</span>
                </div>
              </div>

              {/* Right Column: Clean Premium card with sign-off */}
              <div className="lg:col-span-7">
                <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-gray-150/80 shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold italic">
                      &quot;To every Grehasoft client: thank you for being an indispensable part of our story. Your support and word-of-mouth recommendations have shaped our service benchmarks. We look forward to engineering many more secure, high-performance web systems in the years to come.&quot;
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                      <div>
                        <h4 className="font-extrabold text-sm text-dark">The Grehasoft Collective</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Software Engineering & Advisory Services</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-black text-primary bg-primary/5 border border-primary/10 rounded-full px-3.5 py-1.5 inline-block uppercase tracking-wider">
                          Kochi, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
     
      <CTA />
      <Footer />
    </main>
  );
}
