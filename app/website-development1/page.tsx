'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { 
  Code, 
  Globe, 
  Database, 
  Cpu, 
  Shield, 
  Zap, 
  Layout, 
  Server, 
  CheckCircle, 
  Terminal, 
  Settings, 
  Rocket, 
  MessageSquare,
  LayoutGrid,
  ShoppingCart,
  Layers,
  Cog,
  Monitor,
  Trophy,
  Users,
  ChevronDown,
  MonitorSmartphone,
  CpuIcon as CpuIc,
  Globe2,
  Lock,
  Search,
  Gauge,
  Smartphone,
  Check,
  Building2,
  Briefcase,
  Layers2,
  DatabaseZap,
  Braces,
  Box,
  Palette,
  CreditCard,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function WebsiteDevelopmentPage() {
  const developmentServices = [
    {
      title: 'Custom Website Development',
      desc: 'Tailor-made website development solutions designed to meet unique business requirements and workflows.',
      icon: <Code className="w-10 h-10" />,
    },
    {
      title: 'Business Website Development',
      desc: 'Professional business websites focused on functionality, performance, and user engagement.',
      icon: <Briefcase className="w-10 h-10" />,
    },
    {
      title: 'Corporate Website Development',
      desc: 'Secure and scalable corporate websites suitable for growing organizations and enterprises.',
      icon: <Building2 className="w-10 h-10" />,
    },
    {
      title: 'eCommerce Website Development',
      desc: 'Modern eCommerce platforms with payment integration, product management, and optimized shopping experiences.',
      icon: <ShoppingCart className="w-10 h-10" />,
    },
    {
      title: 'CMS Development',
      desc: 'Flexible CMS solutions using WordPress, Shopify, WooCommerce, or Headless CMS platforms.',
      icon: <Layers2 className="w-10 h-10" />,
    },
    {
      title: 'Web Application Development',
      desc: 'Custom web applications built for business automation, management systems, and advanced workflows.',
      icon: <MonitorSmartphone className="w-10 h-10" />,
    },
  ];

  const whyChooseUs = [
    {
      title: 'Modern Technologies',
      desc: 'We use advanced technologies and frameworks to develop fast, scalable, and secure websites.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Performance-Focused Development',
      desc: 'Our websites are optimized for speed, security, scalability, user experience, and technical SEO foundations.',
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: 'Reliable Development Partner',
      desc: 'We have successfully delivered more than 100 projects with a strong reputation for reliability and quality service.',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: 'Long-Term Technical Support',
      desc: 'We provide ongoing support and maintenance to ensure website stability and smooth operation after deployment.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Affordable Development Solutions',
      desc: 'Our development services are cost-effective while maintaining high-quality standards and modern practices.',
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  const techStack = [
    { category: 'Frontend', techs: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'], icon: <Layout className="w-5 h-5" /> },
    { category: 'Backend', techs: ['Python Django', 'Node.js', 'PHP'], icon: <Server className="w-5 h-5" /> },
    { category: 'Database', techs: ['MySQL', 'MongoDB'], icon: <Database className="w-5 h-5" /> },
    { category: 'CMS & eCommerce', techs: ['WordPress', 'Shopify', 'WooCommerce', 'Headless CMS'], icon: <Layers className="w-5 h-5" /> },
  ];

  const seoFeatures = [
    { title: 'Optimized URL structure', desc: 'Search-friendly permalinks that improve crawlability and user experience.', icon: <Globe className="w-6 h-6" /> },
    { title: 'Mobile responsiveness', desc: 'Fluid layouts ensuring your site looks perfect on every device and screen size.', icon: <Smartphone className="w-6 h-6" /> },
    { title: 'Fast loading performance', desc: 'Minified code and optimized assets for lightning-quick page speeds.', icon: <Zap className="w-6 h-6" /> },
    { title: 'Clean coding standards', desc: 'W3C compliant code that search engines love to index and rank.', icon: <Code className="w-6 h-6" /> },
    { title: 'Optimized images and assets', desc: 'Next-gen formats and lazy loading for high-quality visuals without the bloat.', icon: <Box className="w-6 h-6" /> },
    { title: 'Structured website architecture', desc: 'Logical hierarchy and internal linking to boost domain authority.', icon: <Layers className="w-6 h-6" /> },
    { title: 'Secure development practices', desc: 'Implementation of HTTPS, security headers, and safe data handling.', icon: <Lock className="w-6 h-6" /> },
  ];

  const faqs = [
    {
      q: 'What technologies do you use for website development?',
      a: 'We use modern technologies including React.js, Next.js, Python Django, Node.js, WordPress, Shopify, PHP, MySQL, and MongoDB.'
    },
    {
      q: 'Do you develop custom websites?',
      a: 'Yes. We provide fully customized website and web application development solutions based on business requirements.'
    },
    {
      q: 'Are your websites SEO-friendly?',
      a: 'Yes. We develop websites with SEO-friendly architecture, optimized URLs, fast loading speed, responsive layouts, and clean coding practices.'
    },
    {
      q: 'Do you provide eCommerce website development?',
      a: 'Yes. We develop scalable eCommerce platforms with payment integration, product management, and optimized shopping experiences.'
    },
    {
      q: 'Will my website be secure?',
      a: 'Yes. We follow secure coding practices and modern development standards to ensure website security and stability.'
    },
    {
      q: 'Do you provide CMS-based website development?',
      a: 'Yes. We develop CMS websites using WordPress, Shopify, WooCommerce, and Headless CMS platforms.'
    },
    {
      q: 'Can you upgrade or rebuild existing websites?',
      a: 'Absolutely. We can modernize and rebuild outdated websites with improved functionality, design, and performance.'
    },
    {
      q: 'Do you provide ongoing technical support?',
      a: 'Yes. We provide continuous technical support, maintenance, and assistance after deployment.'
    },
    {
      q: 'How long does website development take?',
      a: 'The timeline depends on project scope and features. Simple business websites may take a few weeks, while custom platforms may require additional time.'
    },
    {
      q: 'Why choose Grehasoft for website development?',
      a: 'Grehasoft focuses on reliability, scalable architecture, modern technologies, strong technical support, and affordable development solutions tailored to business needs.'
    }
  ];

  return (
    <main className="bg-white">
      <PageHeader
        title="Website Development Company in Kochi"
        description="Professional Website Development Services for Scalable Digital Solutions. Secure, high-performance, and maintainable web development."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Website Development', href: '/website-development' },
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
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Scalable & Secure</span>
              <h2 className="text-3xl md:text-5xl font-black text-dark mb-8 leading-tight">
                Top Website Development <br /><span className="text-primary italic">Solutions in Kochi</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Grehasoft is a leading website development company in Kochi providing secure, scalable, and high-performance web development solutions for businesses across Kerala, the Gulf region, and international markets including the USA, Australia, Ireland, and New Zealand.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in developing custom websites, web applications, and business platforms using modern technologies and frameworks. Our development process focuses on functionality, performance, security, scalability, and long-term maintainability.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you require a business website, custom web application, eCommerce platform, CMS solution, or enterprise portal, our development team delivers tailored solutions based on your business requirements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10">
                  <p className="text-primary font-black text-2xl">Modern</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Technologies</p>
                </div>
                <div className="bg-accent/5 px-6 py-4 rounded-2xl border border-accent/10">
                  <p className="text-accent font-black text-2xl">Scalable</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Architecture</p>
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
              <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden -rotate-2 shadow-2xl">
                <img
                  src="/images/web_dev.png"
                  alt="Kochi Website Development Experts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-dark">Secure</p>
                    <p className="text-sm text-gray-400">Coding Standards</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">Strategic Website <br />Development Approach</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                At Grehasoft, development is not just about writing code. We carefully plan website architecture, functionality, scalability, and technical performance through:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Requirement analysis',
                  'Technical planning',
                  'Scalable architecture setup',
                  'SEO-friendly structure',
                  'Performance optimization',
                  'Security-focused dev'
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
              <h3 className="text-3xl font-black text-dark mb-6">Future-Ready Platforms</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our process ensures that every digital solution we build is not only powerful today but also ready to scale with your business growth. 
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                This strategic approach helps businesses build reliable and future-ready digital platforms that support long-term operational efficiency.
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
            <h2 className="text-4xl font-black text-dark">Our Website Development Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, i) => (
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

      {/* Technologies Section - Redesigned */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Our Technical Prowess</span>
              <h2 className="text-4xl md:text-5xl font-black text-dark leading-tight">Technologies We <span className="text-primary italic">Use</span></h2>
            </div>
            <p className="text-gray-500 max-w-sm text-lg italic mx-auto md:mx-0">
              "We leverage modern and powerful technologies to create high-performance web solutions."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all group"
              >
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-primary/10">
                    <div className="scale-150">
                      {tech.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-black text-dark mb-6 group-hover:text-primary transition-colors">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {tech.techs.map((t) => (
                      <span key={t} className="bg-gray-50 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider text-gray-400 border border-gray-100 hover:border-primary/30 hover:text-primary transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Friendly Features - Redesigned */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Engineered for Search</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6">SEO-Friendly <br /><span className="text-primary italic">Development Features</span></h2>
            <p className="text-gray-600">
              We build every website with a "SEO-first" architecture, ensuring search engines can easily discover and rank your content from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-primary/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
            
            {/* Additional Value Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group p-8 rounded-[2rem] border border-dashed border-primary/30 bg-primary/5 flex flex-col justify-center items-center text-center h-full"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 animate-pulse">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Ready to Rank High?</h3>
              <p className="text-gray-600 text-sm mb-6">Our technical foundations provide the perfect starting point for any SEO strategy.</p>
              <Link href="/contact" className="text-primary font-bold text-sm underline underline-offset-4 hover:text-accent transition-colors">
                Get Targeted Success
              </Link>
            </motion.div>
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
              Choosing Grehasoft means partnering with an agency that prioritizes technical excellence and reliability.
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
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Versatility</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve</h2>
            <p className="text-gray-600">We provide specialized website development services for businesses across diverse sectors.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Healthcare', 'Education', 'Retail', 'Tourism', 'Real Estate', 'Startups', 'Technology Companies', 'Corporate Businesses', 'Service Industries'].map((ind, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-all">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="font-bold text-dark text-sm">{ind}</span>
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
                Learn more about our development process, technologies, and technical standards.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Reliability</p>
                <p className="text-lg italic font-medium">"Grehasoft focuses on scalable architecture and modern technologies tailored to business needs."</p>
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
     
    </main>
  );
}
