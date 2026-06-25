'use client';

import PageHeader from '@/components/PageHeader';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Trophy, 
  Award, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  BookOpen, 
  Gem, 
  Quote, 
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Sparkle,
  ThumbsUp,
  Activity,
  ArrowUpRight,
  MapPin,
  Laptop,
  Check
} from 'lucide-react';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Awards from '@/components/Awards';
export default function AwardsPage() {
  const coreRecognitions = [
    {
      id: "01",
      title: "Promising Woman Entrepreneur Award",
      sub: "Presented to Our Founder / Grehasoft",
      body: "An official recognition of leadership, persistent entrepreneurship, and a deep-seated commitment to building a successful, value-driven IT business in India and beyond.",
      icon: <Award className="w-5 h-5 text-accent" />,
      tag: "Founder Honors"
    },
    {
      id: "02",
      title: "Lions Club Business Excellence Award",
      sub: "Public Corporate Honor",
      body: "Presented in public recognition of Grehasoft's active role as a trusted, accessible, and socially responsible IT company providing affordable, high-quality digital transformations.",
      icon: <Trophy className="w-5 h-5 text-primary" />,
      tag: "Excellence in Service"
    },
    {
      id: "03",
      title: "Business Insight Magazine Feature",
      sub: "Cover Page Story Profile",
      body: "A prominent editorial feature highlighting our natural referral-driven progress, organic customer milestones, and our core dedication to programming excellence since 2007.",
      icon: <BookOpen className="w-5 h-5 text-accent" />,
      tag: "Media Spotlight"
    },
    {
      id: "04",
      title: "Elite Kerala Business Award",
      sub: "Presented by Business Insight",
      body: "Celebrating distinguished IT Service Companies. Bestowed to recognize high-standard software architecture, professional website engineering, and client-centric approach.",
      icon: <Gem className="w-5 h-5 text-primary" />,
      tag: "Industry Standard"
    }
  ];

  const valueAxioms = [
    {
      id: "01",
      title: "Trust & Credibility",
      desc: "With official recognition and a strong portfolio, you can be absolutely confident that you are working with a proven, verified, and time-tested IT solutions provider.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      id: "02",
      title: "Quality Assurance",
      desc: "Awards, magazine features, and official state acknowledgments naturally reflect our high standards of software quality and pristine user-experience execution.",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      id: "03",
      title: "Stability & Proven Track Record",
      desc: "Honors from institutions like Business Insight Magazine and community bodies like Lions Club prove that Grehasoft is a stable, reliable, and deeply grounded IT company.",
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: "04",
      title: "Long-Term Support & Reliability",
      desc: "Our solid reputation and established local presence mean we are fully prepared to support, scale, and secure your digital systems over long, successful milestones.",
      icon: <Heart className="w-5 h-5" />
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        title="Awards & Recognitions"
        description="Celebrating our milestones and the official industry recognition we have received for our commitment to excellence, transparency, and accessible IT services."
        breadcrumb={[
          { name: 'About', href: '/about' },
          { name: 'Awards', href: '/about/awards' },
        ]}
      />

      {/* Intro Brand Story Section: Dual-Column Editorial Spread */}
      <section className="section-padding bg-white relative overflow-hidden text-dark border-b border-gray-100">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="text-accent font-black uppercase tracking-wider text-[10px]">
                  Grehasoft Achievements & Credibility
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-tight"
              >
                Business Awards, <span className="text-primary">Honors</span> & Achievements
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-gray-600 font-medium leading-relaxed"
              >
                At Grehasoft, we believe consistent quality, client trust and long-term commitment show not just through the projects we deliver — but also through the recognition we receive. The awards and honours collected over the years reflect our values, our dedication to service, and our growing reputation as a reliable IT solutions provider on a global scale.
              </motion.p>
            </div>

            {/* Right Interactive Highlights Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 w-full"
            >
              <div className="p-8 rounded-[2rem] bg-dark text-white shadow-xl relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-44 h-44 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                
                <h3 className="font-extrabold text-sm uppercase text-accent tracking-wider mb-2">
                  Pursuit of Perfection
                </h3>
                <p className="text-2xl font-black leading-snug text-white/95">
                  Over a decade of robust code, transparent consulting, and proven reliability.
                </p>

                <div className="border-t border-white/10 pt-6 mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-sm text-white/70">Verified State & Regional Recognitions</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-sm text-white/70">100+ Live Production Deployments</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-sm text-white/70">Zero Cost-Overrun Client Promise</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
  <Awards  />
      {/* Recognitions Section: Modern Asymmetric Columns Layout */}
      <section className="section-padding bg-gray-50/50 border-b border-gray-100 relative">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Focus Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-4">
              <span className="text-[10px] font-black uppercase text-accent tracking-widest bg-accent/25 border border-accent/30 px-3 py-1.5 rounded-full inline-block">
                Ecosystem Merits
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-dark tracking-tight leading-none">
                Our Recognitions
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                These awards and professional landmarks reflect our passion to construct custom engineering systems that matter for real ecosystem growth.
              </p>
              
              <div className="hidden lg:block pt-6">
                <div className="w-full h-[1px] bg-gray-200" />
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400 mt-4">
                  Honoring values since 2007
                </p>
              </div>
            </div>

            {/* Right Stacked Column */}
            <div className="lg:col-span-8 space-y-6">
              {coreRecognitions.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-7 md:p-9 rounded-[2rem] border border-gray-100 hover:border-primary/25 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {rec.icon}
                  </div>

                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <span className="text-[10px] font-mono tracking-widest text-primary font-black uppercase bg-primary/5 px-2.5 py-1 rounded">
                        {rec.tag}
                      </span>
                      <span className="text-[11px] font-black text-gray-300">
                        Rank {rec.id}
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-black text-dark leading-tight group-hover:text-primary transition-colors">
                      {rec.title}
                    </h4>
                    
                    <p className="text-xs text-accent font-extrabold uppercase tracking-wider bg-accent/5 inline-block px-2 py-0.5 rounded border border-accent/10">
                      {rec.sub}
                    </p>

                    <p className="text-sm text-gray-500 leading-relaxed pt-1">
                      {rec.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* What We Offer — Proof Through Work: Asymmetric Bento Grid Layout */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 mb-3 inline-block">
              Proof Through Output
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none mb-4">
              What We Offer — Proof Through Work
            </h2>
            <p className="text-gray-500 font-medium">
              Beyond trophies, what truly builds credibility for Grehasoft is real, measurable output for our clients. Our successful deployments serve as a living record of our engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Bento Block 1: Satisfied Clients Counter (4-cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 bg-gray-50/50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[10px] font-black text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded border border-accent/10">
                  Global Footprint
                </span>
                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-6xl md:text-7xl font-black text-dark tracking-tighter">100+</span>
                  <span className="text-accent text-3xl font-black">+</span>
                </div>
                <h4 className="font-extrabold text-lg text-dark mt-3 leading-tight">
                  Satisfied Clients Segment
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed mt-2">
                  Serving small, micro, and enterprise businesses successfully across India, the Middle East, Europe, and the USA.
                </p>
              </div>

              <div className="border-t border-gray-100/80 pt-5 mt-6 flex items-center gap-2.5 text-[9px] font-black text-gray-400 uppercase tracking-wider">
                <ThumbsUp className="w-4 h-4 text-accent" />
                <span>Verified Deliveries</span>
              </div>
            </motion.div>

            {/* Bento Block 2: Infopark Kochi Credibility (5-cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 bg-dark text-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-white/5 hover:border-primary/20 hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-primary uppercase tracking-wider bg-primary/20 px-2.5 py-1 rounded border border-primary/20">
                    Industry Credibility
                  </span>
                  <MapPin className="w-5 h-5 text-accent animate-pulse" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight mt-6">
                  Kochi Infopark Hub
                </h3>
                
                <p className="text-sm text-white/70 leading-relaxed mt-2.5">
                  Our core operational base at leading IT hub Infopark Kochi underlines our legitimacy, structures, and professional commitment as a verified software organization.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 md:mt-0">
                <a 
                  href="https://infopark.in/companies-profile/grehasoft" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full inline-flex items-center justify-between bg-primary hover:bg-primary/95 text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-all"
                >
                  <span>View Infopark Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/85" />
                </a>
              </div>
            </motion.div>

            {/* Bento Block 3: Complete Suite Checklist (3-cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 bg-gray-50/50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <Laptop className="w-6 h-6 text-primary mb-4" />
                <h4 className="font-extrabold text-base text-dark leading-tight mb-4">
                  Full-Suite Digital Deliveries
                </h4>
                
                <ul className="space-y-3.5 text-sm text-gray-500 font-medium">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Responsive Websites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Custom Web Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>eCommerce Scaling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Mobile Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Digital Systems & SEO</span>
                  </li>
                </ul>
              </div>

              <div className="text-[9px] uppercase font-black text-gray-400 mt-6 tracking-wider pt-4 border-t border-gray-100">
                Full-stack deployment
              </div>
            </motion.div>

          </div>

          {/* Central Quote Highlight Banner */}
          <div className="max-w-4xl mx-auto mt-12 bg-gray-50/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 relative overflow-hidden text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-gray-100 mb-6">
              <Quote className="w-4 h-4 fill-current" />
            </div>

            <p className="text-lg md:text-2xl font-black italic leading-relaxed text-dark max-w-2xl">
              &quot;While awards are valuable, we consider client success stories, long-term relationships, and consistently high-quality delivery as our greatest honours.&quot;
            </p>

            <div className="flex items-center gap-3 border-t border-gray-200/50 pt-5 mt-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-primary">
                The Grehasoft Collective
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-[10px] uppercase font-black tracking-widest text-accent">
                Kochi Infopark IT Team
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Client & Peer Appreciation Section: Editorial Highlight */}
      <section className="section-padding bg-gray-50/50 border-t border-b border-gray-100">
        <div className="container-custom">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 inline-block">
              Community Voices
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight leading-none mb-4">
              Client & Peer Appreciation
            </h2>
            <p className="text-gray-500 font-medium">
              In addition to formal awards, Grehasoft’s reputation is shaped by the words of clients, partners, and industry peers. The testimonials and referrals serves as solid evidence of our reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <p className="text-gray-650 italic text-base leading-relaxed relative z-10 mb-8 font-medium">
                &quot;Grehasoft has been our dedicated IT partner for web scaling, SEO enhancement, and corporate marketing materials. Their commitment to project timelines and budget integrity is outstanding. Absolute peace of mind.&quot;
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-50 pt-5 mt-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-xs">
                  PE
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-dark">Proprietor, Global Exports</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Middle East Operations</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <p className="text-gray-650 italic text-base leading-relaxed relative z-10 mb-8 font-medium">
                &quot;Their precise programming skills enabled us to deploy a dynamic operational logistics tracker to support shipping pipelines. Operating direct from Infopark Kochi gives us high system confidence.&quot;
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-50 pt-5 mt-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-dark font-black text-xs">
                  MD
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-dark">Managing Director, Logisystems</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">India Business Branch</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Why It Matters: Sequential Structured Panel List */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Sticky Banner */}
            <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-4">
              <span className="text-accent font-black uppercase tracking-wider text-[10px] bg-primary/5 rounded-full px-3 py-1 inline-block">
                Strategic Values
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-dark tracking-tight leading-none">
                Awards & Recognition — Why It Matters for You
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Why do these achievements matter to your project? Because they serve as an assurance of safety, verified execution, and deep corporate integrity.
              </p>

              <div className="pt-6">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors"
                >
                  Visit Our Home Page
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column Listed Checkpoints */}
            <div className="lg:col-span-8 space-y-8">
              {valueAxioms.map((ax, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50/50 p-6 md:p-8 rounded-[2rem] border border-gray-100/80 flex flex-col sm:flex-row gap-6 items-start hover:bg-white hover:border-primary/10 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary border border-gray-100 flex-shrink-0">
                    {ax.icon}
                  </div>

                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-black text-dark tracking-tight">
                        {ax.title}
                      </h3>
                      <span className="font-mono text-xs text-gray-350">{ax.id}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {ax.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
<CTA />
<Footer />
    </main>
  );
}
