'use client';

import CTA from '@/components/CTA';
import Link from 'next/link';
import { Monitor, Layout, Smartphone, Palette, Zap, Shield, CheckCircle2, Eye, MousePointer2, Layers, Heart, MessageSquare, Search } from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Layout,
    title: 'Custom UI/UX Design',
    desc: 'We create unique, user-centric designs that reflect your brand identity and engage your target audience effectively.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    desc: 'Our websites are built to perform flawlessly across all devices, ensuring a seamless experience for every user.',
  },
  {
    icon: Palette,
    title: 'Brand Identity Integration',
    desc: 'We weave your brand colors, typography, and voice into every pixel to create a cohesive digital presence.',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    desc: 'Fast-loading designs that reduce bounce rates and improve search engine rankings from the start.',
  },
  {
    icon: Shield,
    title: 'SEO-Friendly Structure',
    desc: 'We design with a clear hierarchy and search-engine-optimized layouts to help your business get discovered.',
  },
  {
    icon: Monitor,
    title: 'Modern Web Aesthetics',
    desc: 'Clean, professional, and visually stunning designs that build immediate trust with your visitors.',
  },
];

const designProcess = [
  {
    step: '01',
    title: 'Discovery & Research',
    desc: 'We dive deep into your business goals, target audience, and competitors to build a solid design strategy.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    step: '02',
    title: 'Wireframing & UX',
    desc: 'Creating the blueprint of your website, focusing on user flow, navigation, and information architecture.',
    icon: <Layers className="w-6 h-6" />,
  },
  {
    step: '03',
    title: 'Visual UI Design',
    desc: 'Bringing the wireframes to life with colors, typography, and imagery that resonate with your brand.',
    icon: <Palette className="w-6 h-6" />,
  },
  {
    step: '04',
    title: 'Prototyping & Feedback',
    desc: 'Interactive prototypes allow you to experience the design and provide feedback before development begins.',
    icon: <MousePointer2 className="w-6 h-6" />,
  },
];

const faqs = [
  {
    question: 'Why is professional website design important for my business?',
    answer: 'A professional design builds trust, improves user experience, and helps convert visitors into customers. It also ensures your brand is represented consistently across the web.',
  },
  {
    question: 'Do you provide responsive web design?',
    answer: 'Yes, all our designs are 100% responsive, meaning they adapt perfectly to desktops, tablets, and mobile phones.',
  },
  {
    question: 'How long does the website design process take?',
    answer: 'The timeline varies depending on the project complexity, but typically a custom design phase takes 2-4 weeks.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We specialize in website redesigns that modernize your look while improving performance and user experience.',
  },
];

export default function WebsiteDesign() {
  return (
    <main className="min-h-screen">
      {/* Custom Hero Section */}
      <section className="relative pt-40 pb-24 bg-dark overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-[1.1]">
                Website Design <br />
                <span className="text-primary">Services</span> that Create <br />
                Real Business Value
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
                At Grehasoft, we act as your digital design partner, combining strategy and creativity to build production-ready web experiences. We focus on automating critical workflows and turning your brand vision into measurable gains in efficiency and growth.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold hover:bg-white hover:text-dark transition-all duration-300 group"
                >
                  Let's Discuss Opportunities
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl ">
                <img
                  src="/images/web_design.png"
                  alt="Web Development Illustration"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Glow effect behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Creative Excellence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Crafting Digital Experiences That <span className="text-primary">Drive Results</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a leading **website design company in Kochi, Kerala**, dedicated to creating visually stunning and highly functional websites. We believe that great design is more than just aesthetics; it\'s about creating an intuitive journey for your users.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our team of expert designers combines creativity with data-driven insights to deliver **responsive web designs** that not only look beautiful but also perform exceptionally well on search engines. Whether you are a startup or an established enterprise, we tailor our services to meet your unique needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'User-Centric UI/UX Design',
                  '100% Responsive Layouts',
                  'SEO Optimized Structure',
                  'Conversion Rate Optimization',
                  'Brand Identity Integration',
                  'Fast Loading Performance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/team_work.png"
                  alt="Web Development Workspace"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">500+</p>
                    <p className="text-sm text-text-gray">Happy Clients</p>
                  </div>
                </div>
                <p className="text-sm text-text-gray italic">"Grehasoft transformed our online presence completely."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Design Expertise</span></h2>
            <p className="text-text-gray text-lg">We offer a comprehensive suite of design services to help your business stand out in the digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{feature.title}</h3>
                <p className="text-text-gray leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className=" font-bold uppercase tracking-widest text-sm mb-4 block text-accent">Our Workflow</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                How We Bring Your <span className="text-primary">Vision to Life</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Our structured design process ensures that every project is delivered with precision, creativity, and strategic alignment with your business goals.
              </p>
              
              <div className="space-y-8">
                {designProcess.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5">
                <img
                  src="/images/design_vision.png"
                  alt="Web Development Workflow"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="text-text-gray text-lg">Everything you need to know about our website design services.</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="text-text-gray leading-relaxed pl-8">
                    {faq.answer}
                  </p>
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
