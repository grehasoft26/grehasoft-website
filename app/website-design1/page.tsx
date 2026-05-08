'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
  Monitor, 
  Layout, 
  Smartphone, 
  Search, 
  CheckCircle, 
  Code, 
  Zap, 
  CreditCard, 
  Clock, 
  Users, 
  Trophy, 
  MessageSquare, 
  Lightbulb,
  MousePointer2,
  ChevronDown,
  Shield,
  Rocket,
  Settings,
  Layers,
  Globe,
  ShoppingCart,
  Eye,
  Check,
  Target,
  Palette,
  Briefcase,
  Store,
  Stethoscope,
  GraduationCap,
  Building2,
  Map,
  Utensils,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function WebsiteDesignPage() {
  const websiteFeatures = [
    { title: 'Modern UI/UX Design', desc: 'Visually stunning interfaces built for high engagement.', icon: <Palette className="w-6 h-6" /> },
    { title: 'Responsive Layouts', desc: 'Seamless performance across all screen sizes and devices.', icon: <Smartphone className="w-6 h-6" /> },
    { title: 'SEO-Friendly Structure', desc: 'Rank higher with search-engine optimized code and schema.', icon: <Search className="w-6 h-6" /> },
    { title: 'Fast Loading Pages', desc: 'Optimized performance for lightning-quick load times.', icon: <Zap className="w-6 h-6" /> },
    { title: 'Mobile Optimization', desc: 'Dedicated focus on the mobile-first browsing experience.', icon: <Smartphone className="w-6 h-6" /> },
    { title: 'Optimized Images', desc: 'Crystal clear visuals without sacrificing page speed.', icon: <Eye className="w-6 h-6" /> },
    { title: 'Clean Navigation', desc: 'Intuitive site architecture for effortless user journeys.', icon: <Map className="w-6 h-6" /> },
    { title: 'User-Friendly Interface', desc: 'Easy-to-use digital spaces that users love to browse.', icon: <MousePointer2 className="w-6 h-6" /> },
    { title: 'Brand-Focused Design', desc: 'Your identity woven into every pixel of the design.', icon: <Target className="w-6 h-6" /> },
    { title: 'Conversion-Oriented Layouts', desc: 'Strategically placed CTAs to turn visitors into customers.', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const designServices = [
    {
      title: 'Corporate Website Design',
      desc: 'Professional corporate websites designed to strengthen brand credibility and communicate business values effectively.',
      icon: <Building2 className="w-10 h-10" />,
    },
    {
      title: 'Business Website Design',
      desc: 'Creative business websites tailored to improve customer interaction and online visibility.',
      icon: <Briefcase className="w-10 h-10" />,
    },
    {
      title: 'Responsive Website Design',
      desc: 'We design fully responsive websites optimized for desktops, tablets, and smartphones.',
      icon: <Smartphone className="w-10 h-10" />,
    },
    {
      title: 'UI/UX Design',
      desc: 'Our UI/UX design approach focuses on intuitive navigation, visual consistency, and smooth user experiences.',
      icon: <Palette className="w-10 h-10" />,
    },
    {
      title: 'eCommerce Website Design',
      desc: 'Modern and conversion-focused eCommerce website designs for online businesses and retail brands.',
      icon: <ShoppingCart className="w-10 h-10" />,
    },
    {
      title: 'Landing Page Design',
      desc: 'High-converting landing pages designed for marketing campaigns and lead generation.',
      icon: <Layout className="w-10 h-10" />,
    },
  ];

  const whyChooseUs = [
    {
      title: 'Creative and Modern Designs',
      desc: 'We design visually attractive websites that align with modern design standards and user expectations.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'SEO-Friendly Website Structure',
      desc: 'Our websites are designed with SEO-friendly page structures, optimized URLs, fast loading speed, and mobile responsiveness.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Reliable and Trusted Service',
      desc: 'Reliability is one of our biggest strengths. We have successfully completed more than 100 websites and supported hundreds of satisfied clients across different industries and countries.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Strong Client Support',
      desc: 'We continue supporting our clients even after project completion. Our commitment to long-term client relationships sets us apart from many other agencies.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: 'Affordable Website Design Solutions',
      desc: 'We provide cost-effective website design services without compromising quality, creativity, or performance.',
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  const industries = [
    { name: 'Retail Businesses', icon: <Store className="w-5 h-5" /> },
    { name: 'Boutiques', icon: <Palette className="w-5 h-5" /> },
    { name: 'Healthcare', icon: <Stethoscope className="w-5 h-5" /> },
    { name: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Real Estate', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Tourism', icon: <Globe className="w-5 h-5" /> },
    { name: 'Restaurants', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Startups', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Corporate Companies', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Service Businesses', icon: <Settings className="w-5 h-5" /> },
  ];

  const faqs = [
    { 
      q: 'What is the difference between website design and website development?', 
      a: 'Website design focuses on the visual appearance, user experience, layout, and branding of a website, while website development focuses on coding, functionality, and technical implementation.' 
    },
    { 
      q: 'Why is professional website design important for a business?', 
      a: 'A professionally designed website helps build trust, improve customer engagement, strengthen brand identity, and create a better user experience for visitors.' 
    },
    { 
      q: 'Will my website be mobile responsive?', 
      a: 'Yes. All websites designed by Grehasoft are fully responsive and optimized for desktops, tablets, and mobile devices.' 
    },
    { 
      q: 'Do you create SEO-friendly website designs?', 
      a: 'Yes. We design websites with SEO-friendly structure, optimized layouts, mobile responsiveness, fast loading performance, and user-friendly navigation.' 
    },
    { 
      q: 'Can you redesign my existing website?', 
      a: 'Absolutely. We can redesign outdated websites with modern UI/UX, improved responsiveness, and better user experience.' 
    },
    { 
      q: 'How long does it take to design a website?', 
      a: 'The timeline depends on project complexity and requirements. Standard business websites usually take 1–3 weeks.' 
    },
    { 
      q: 'Do you provide support after website completion?', 
      a: 'Yes. We provide ongoing support and assistance even after the project is completed.' 
    },
    { 
      q: 'Which industries do you work with?', 
      a: 'We provide website design services for businesses in healthcare, education, retail, tourism, real estate, startups, technology, and many other industries.' 
    },
    { 
      q: 'Do you provide affordable website design services?', 
      a: 'Yes. We offer cost-effective website design solutions without compromising quality or performance.' 
    },
    { 
      q: 'Can you design eCommerce websites?', 
      a: 'Yes. We create modern and user-friendly eCommerce website designs for online businesses and retail brands.' 
    },
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Website Design Company in Kochi"
        description="Creative Website Design Services for Modern Businesses. Professional, responsive, and visually engaging web solutions."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Website Design', href: '/website-design' },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Modern & Professional</span>
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-8 leading-tight">
                Creative Website Design <br /><span className="text-primary italic">Services in Kochi</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Grehasoft is a professional website design company in Kochi delivering modern, responsive, and visually engaging website design solutions for businesses across Kerala, the Gulf region, and international markets including the USA, Australia, Ireland, and New Zealand.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We create websites that not only look impressive but also provide seamless user experiences across all devices. Our focus is on combining creativity, branding, user experience, and strategic content structure to help businesses establish a strong online presence.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                A website is often the first interaction customers have with a business. That first impression matters. At Grehasoft, we design websites that reflect your brand identity, build trust, and improve customer engagement.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">100+</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Websites Completed</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">Global</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Experience</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden rotate-2 shadow-2xl">
                <img
                  src="/images/website_design.png"
                  alt="Kochi Website Design Experts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">Reliable</p>
                    <p className="text-sm text-gray-400">Trusted by Hundreds</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Approach Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-dark rounded-[3rem] p-10 md:p-16 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">Strategic Website <br />Planning Approach</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Many websites are built without proper planning, resulting in poor structure, weak user experience, and low engagement. At Grehasoft, we take a strategic approach by studying:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Competitor websites',
                  'User behavior',
                  'Industry trends',
                  'Content structure',
                  'Navigation flow',
                  'Business goals'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div>
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Beyond Just Design</span>
              <h3 className="text-3xl font-black text-dark mb-6">Built for Success</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Based on our detailed analysis, we create website structures that improve usability, engagement, and long-term digital growth.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                This strategic planning is one of the biggest advantages of our website design service, ensuring your site doesn't just look good, but works hard for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Our Expertise</span>
            <h2 className="text-4xl font-black text-dark">Our Website Design Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group transition-all"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -mr-96 -mt-96" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6 block ">The Grehasoft Advantage</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">Why Choose Grehasoft?</h2>
            <p className="text-gray-600 leading-relaxed">
              Choosing Grehasoft means partnering with an agency that prioritizes your brand's digital excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
            {whyChooseUs.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-accent/40 hover:shadow-[0_20px_50px_-15px_rgba(26,183,40,0.08)] transition-all duration-500 flex flex-col gap-6 items-start"
              >
                <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  <div className="scale-125">
                    {reason.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-3 text-2xl group-hover:text-accent transition-colors">{reason.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Website Design Features - Redesigned */}
      <section className="section-padding bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Technical Excellence</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Website Design <br /><span className="text-primary italic">Core Features</span></h2>
              <p className="text-white/50 text-lg">
                We integrate these essential features into every project to ensure your website performs at the highest industry standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {websiteFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group p-6 rounded-3xl border transition-all duration-500 flex flex-col justify-between h-full ${
                  i % 3 === 0 
                  ? 'bg-white/5 border-white/10 hover:bg-primary hover:border-primary' 
                  : 'bg-white/5 border-white/10 hover:bg-accent hover:border-accent'
                }`}
              >
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-dark transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-black text-primary mb-3 group-hover:text-white transition-colors leading-tight">{feature.title}</h3>
                </div>
                <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/90 transition-colors">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Versatility</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve</h2>
            <p className="text-gray-600">We provide specialized website design services for businesses across diverse sectors.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-all">
                <div className="text-primary">{ind.icon}</div>
                <span className="font-bold text-dark text-sm">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Support & Help</span>
              <h2 className="text-4xl font-black text-dark mb-6">Frequent <br />Questions</h2>
              <p className="text-gray-500 mb-8">
                Learn more about our process, differences between design and development, and our technical standards.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Expert Tip</p>
                <p className="text-lg italic font-medium">"A professionally designed website builds trust and strengthens brand identity instantly."</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-dark hover:text-primary transition-colors">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-500 whitespace-pre-line border-t border-gray-100 pt-4 leading-relaxed text-sm">
                    {faq.a}
                  </div>
                </details>
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
