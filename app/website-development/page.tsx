'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Code, Globe, Database, Cpu, Shield, Zap, Layout, Server, CheckCircle2, Terminal, Settings, Rocket, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

const devServices = [
  {
    icon: Layout,
    title: 'Static HTML Websites',
    desc: 'Lightning-fast, secure, and cost-effective websites built with modern static site generators for optimal performance.',
    href: '/website-development/static-website',
  },
  {
    icon: Database,
    title: 'Dynamic Web Applications',
    desc: 'Feature-rich, interactive web applications with robust database integrations and custom business logic.',
    href: '/website-development/dynamic-website',
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    desc: 'Expertly crafted custom WordPress themes and plugins that give you full control over your content.',
    href: '/wordpress-development',
  },
  {
    icon: Code,
    title: 'Custom Software Solutions',
    desc: 'Tailor-made software built from the ground up to solve your specific business challenges and automate workflows.',
    href: '/custom-development',
  },
  {
    icon: Server,
    title: 'Headless CMS Solutions',
    desc: 'Modern decoupled architectures using Strapi, Contentful, or Sanity for ultimate flexibility and speed.',
    href: '/website-development/dynamic-website',
  },
  {
    icon: Shield,
    title: 'Enterprise Web Portals',
    desc: 'Secure, scalable, and high-performance portals designed to handle complex data and large user bases.',
    href: '/website-development',
  },
];

const techStack = [
  { category: 'Frontend', techs: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS'] },
  { category: 'Backend', techs: ['Node.js', 'PHP (Laravel)', 'Python (Django)', 'Go', 'Java'] },
  { category: 'Database', techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
];

const devProcess = [
  {
    step: '01',
    title: 'Architecture & Planning',
    desc: 'We define the technical roadmap, database schema, and system architecture to ensure scalability.',
    icon: <Settings className="w-6 h-6" />,
  },
  {
    step: '02',
    title: 'Agile Development',
    desc: 'Our developers write clean, maintainable code in iterative sprints, ensuring transparency and quality.',
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    step: '03',
    title: 'Quality Assurance',
    desc: 'Rigorous testing including unit testing, integration testing, and security audits to ensure a bug-free launch.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    step: '04',
    title: 'Deployment & Support',
    desc: 'Seamless deployment to cloud servers and ongoing maintenance to keep your application running smoothly.',
    icon: <Rocket className="w-6 h-6" />,
  },
];

const faqs = [
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use a wide range of modern technologies including React, Next.js, Node.js, Laravel, and various cloud platforms like AWS and Azure.',
  },
  {
    question: 'Can you build custom e-commerce solutions?',
    answer: 'Yes, we specialize in custom e-commerce development using platforms like WooCommerce and Shopify, as well as fully custom-built solutions.',
  },
  {
    question: 'Do you provide maintenance after the website is launched?',
    answer: 'Absolutely! We offer various maintenance packages to ensure your website remains secure, updated, and performing at its best.',
  },
  {
    question: 'How do you ensure the security of the web applications?',
    answer: 'We follow industry-standard security practices, including data encryption, secure authentication, and regular security audits.',
  },
];

export default function WebsiteDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Web Development Company in Kochi"
        description="Building powerful, scalable, and high-performance web applications tailored to your business goals. Expert web developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
        ]}
      />

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Technical Excellence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Scalable Solutions for the <span className="text-primary">Modern Web</span>
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Grehasoft is a premier **web development company in Kochi**, specialized in building robust, secure, and scalable digital products. We don\'t just write code; we engineer solutions that solve real-world business problems.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Our development team stays at the forefront of technology, utilizing the latest frameworks and tools to deliver high-performance **custom web applications**. From simple corporate sites to complex enterprise-level platforms, we ensure your digital presence is built to last.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'Custom Web App Development',
                  'Enterprise CMS Solutions',
                  'API Design & Integration',
                  'Cloud-Native Architectures',
                  'Database Optimization',
                  'Security-First Approach'
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
                  src="/images/software_3d.png"
                  alt="Web Development Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-primary p-10 rounded-3xl shadow-2xl text-white hidden xl:block">
                <p className="font-bold text-5xl mb-2">10+</p>
                <p className="text-lg opacity-80">Years of Technical Mastery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Development Expertise</span></h2>
            <p className="text-text-gray text-lg">We specialize in a wide range of web technologies to deliver the best results for our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href} className="block p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                  <p className="text-text-gray leading-relaxed mb-6">{service.desc}</p>
                  <span className="text-primary font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Explore Service <Globe className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Technology Stack</span></h2>
            <p className="text-text-gray text-lg">We use the most advanced and reliable technologies to build your digital future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100"
              >
                <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-widest">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.techs.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-dark font-medium">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="section-padding bg-dark text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5">
                <img
                  src="/images/base-core.png"
                  alt="Web Development Process"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                Engineering <span className="text-primary">Reliable Software</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                We follow a rigorous agile development process that prioritizes quality, security, and timely delivery.
              </p>
              
              <div className="space-y-8">
                {devProcess.map((item, index) => (
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="text-text-gray text-lg">Common queries about our web development services.</p>
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
