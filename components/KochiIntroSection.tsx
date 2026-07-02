'use client';

import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Target, 
  TrendingUp, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Award,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function KochiIntroSection() {
  const highlightPoints = [
    'Full-Service Technology Partner',
    'Over a Decade of Experience',
    '100+ Successful Digital Products',
    'Designed Around Real Goals',
    'Kakkanad & Infopark Centric',
    'Outcome-Driven, No Templates'
  ];

  const statCards = [
    {
      value: '10+',
      label: 'Years Experience',
      icon: Award,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      value: '100+',
      label: 'Digital Products',
      icon: Target,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    },
    {
      value: '100%',
      label: 'Outcome Delivered',
      icon: Shield,
      color: 'text-primary bg-primary/5 border-primary/10'
    }
  ];

  return (
    <section id="kochi-it-leader" className="section-padding bg-white relative overflow-hidden border-b border-gray-100">
      {/* Subtle Background Art */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      
      <div className="container-custom">
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                Kochi's Premier IT Leader
              </span>
            </div>

            {/* H1 Tag requested by user */}
           <h1 className="text-4xl lg:text-[44px] font-black text-primary leading-tight">
  Smart IT Solutions
</h1>

<p className="mt-3 text-2xl lg:text-[30px] font-light text-gray-700 leading-tight">
  From one of the best IT companies in Kochi, Kerala
</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
          
          {/* Left Block: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
           

            {/* Paragraph 1 */}
            <p className="text-text-gray text-base md:text-lg leading-relaxed font-sans">
              Grehasoft is the best IT company in Kochi, Kerala — a full-service technology partner with over a decade of experience helping businesses across <span className="font-semibold text-dark">Ernakulam</span>, <span className="font-semibold text-dark">Kakkanad</span>, <span className="font-semibold text-dark">Infopark</span>, and Kerala's key commercial hubs grow faster and operate smarter. We build custom software, web applications, mobile apps, ERP systems, and digital marketing campaigns that are designed around your real business goals — not off-the-shelf templates.
            </p>

            {/* Paragraph 2 */}
            <p className="text-text-gray text-base md:text-lg leading-relaxed font-sans">
              Whether you are a startup in Infopark Kochi looking to launch your first product, an SME in Ernakulam seeking a reliable IT partner, or an established enterprise across Kerala ready to modernise your technology stack — Grehasoft delivers end-to-end solutions with the professionalism and speed your business demands. From the Kakkanad tech corridor to Thiruvananthapuram and Thrissur, our teams have built over 100 successful digital products for clients who trust us to deliver.
            </p>

            {/* Paragraph 3 */}
            <p className="text-text-gray text-base md:text-lg leading-relaxed font-sans">
              We are Kochi's most relied-upon technology company — and we are here to power your next phase of growth. When businesses in Kerala search for the best IT company in Kochi, they consistently choose Grehasoft for one simple reason: <span className="italic font-bold text-primary">we deliver outcomes, not just deliverables</span>.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-4 border-t border-gray-150">
              {highlightPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-semibold text-dark text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Link href="/contact-us" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                Launch Your Next Phase <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="px-6 py-4 border border-gray-200 hover:border-primary hover:text-primary rounded-xl font-bold text-dark transition-all duration-300 w-full sm:w-auto text-center text-sm">
                Explore Services Hub
              </Link>
            </div>
          </motion.div>

          {/* Right Block: Image, Location, and Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative space-y-8"
          >
            {/* Embedded Location Badge */}
            <div className="absolute top-4 left-4 z-20 bg-primary/85 backdrop-blur-md text-white py-2 px-4 rounded-2xl flex items-center gap-2 shadow-lg border border-white/10">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-xs font-extrabold tracking-wider uppercase">Infopark, Kochi</span>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 aspect-[4/4] group bg-gray-50">
              <img
                src="/images/IT-company1.webp"
                alt="Best IT Company in Kochi, Kerala"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent pointer-events-none" />
            </div>

            {/* Grid of Mini Stats */}
            <div className="grid grid-cols-3 gap-4">
              {statCards.map((card, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-2xl border ${card.color} flex flex-col items-center text-center space-y-2 shadow-sm bg-white hover:shadow-md transition-shadow duration-300`}
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-gray-100 flex-shrink-0">
                    <card.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-dark">{card.value}</div>
                    <div className="text-[10px] text-text-gray uppercase tracking-wider font-bold leading-tight">{card.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Slogan Area */}
            <div className="p-6 bg-gray-50 rounded-3xl border border-dashed border-primary/20">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm mb-1">Serving Key Growth Nodes</h4>
                  <p className="text-sm text-text-gray leading-relaxed">
                    Deploying custom architectures for SMEs and large-scale commercial centers spanning Thiruvananthapuram, Thrissur, Ernakulam, Kakkanad, and high-tech corporate zones.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}