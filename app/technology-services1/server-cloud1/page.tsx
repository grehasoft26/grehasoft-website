'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Server, Cloud, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const cloudFeatures = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'Design and deployment of highly available and scalable cloud environments on AWS, Azure, and Google Cloud.',
  },
  {
    icon: Server,
    title: 'Server Management',
    desc: 'Proactive monitoring, maintenance, and optimization of your server fleet to ensure 24/7 uptime.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Implementation of robust security protocols, firewalls, and compliance measures to protect your data.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    desc: 'Fine-tuning your cloud resources to ensure maximum speed and efficiency for your applications.',
  },
  {
    icon: Layout,
    title: 'Disaster Recovery',
    desc: 'Comprehensive backup and recovery strategies to ensure business continuity in any situation.',
  },
  {
    icon: MessageSquare,
    title: 'DevOps & Automation',
    desc: 'Streamlining your development lifecycle with CI/CD pipelines and infrastructure as code.',
  },
];

const cloudTech = [
  {
    title: 'Amazon Web Services (AWS)',
    desc: 'The world\'s most comprehensive and broadly adopted cloud platform.',
    icon: Cloud,
  },
  {
    title: 'Microsoft Azure',
    desc: 'A flexible cloud platform that helps you build, deploy, and manage applications.',
    icon: Server,
  },
  {
    title: 'Google Cloud Platform',
    desc: 'High-performance infrastructure for data-intensive and AI-driven applications.',
    icon: Zap,
  },
  {
    title: 'Docker & Kubernetes',
    desc: 'Containerization and orchestration for modern, scalable microservices.',
    icon: Layout,
  },
];

const cloudBenefits = [
  {
    title: 'Infinite Scalability',
    desc: 'Easily scale your resources up or down based on demand, ensuring you only pay for what you use.',
  },
  {
    title: 'Enhanced Reliability',
    desc: 'Leverage global data centers and redundant systems to achieve near-perfect uptime.',
  },
  {
    title: 'Global Reach',
    desc: 'Deploy your applications closer to your users worldwide for reduced latency and better experience.',
  },
  {
    title: 'Reduced IT Costs',
    desc: 'Eliminate the need for expensive on-premise hardware and maintenance with cloud-based solutions.',
  },
];

const faqs = [
  {
    question: 'Why should I move my business to the cloud?',
    answer: 'The cloud offers superior scalability, reliability, and cost-efficiency compared to traditional on-premise servers. It allows you to access your data from anywhere and scale resources instantly as your business grows.',
  },
  {
    question: 'Which cloud provider is best for my project?',
    answer: 'The choice depends on your specific needs. AWS is great for general purpose and massive scale, Azure is excellent for enterprise and Microsoft-centric environments, and Google Cloud excels in data and AI.',
  },
  {
    question: 'How do you ensure the security of my cloud data?',
    answer: 'We implement multiple layers of security, including encryption at rest and in transit, identity and access management (IAM), firewalls, and regular security audits.',
  },
  {
    question: 'Can you help with migrating our existing servers to the cloud?',
    answer: 'Yes, we specialize in cloud migrations. We ensure a smooth transition of your data and applications with minimal downtime and full data integrity.',
  },
];

export default function ServerCloudPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Server & Cloud Solutions Kochi"
        description="Scalable, secure, and reliable cloud infrastructure for your business. Expert cloud architects in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Technology', href: '/tech' },
          { name: 'Server & Cloud', href: '/tech/server-cloud' },
        ]}
      />

      {/* Hero Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Modern Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Scalable <span className="text-primary">Cloud Solutions</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Your business deserves an infrastructure that grows with it. At Grehasoft, we provide scalable, secure, and reliable cloud solutions that empower your digital operations and ensure maximum performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Cloud design & deployment',
                  'Server management',
                  'Scalable architecture',
                  'Secure data storage',
                  'Cloud-native development',
                  'DevOps automation'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                <img
                  src="https://picsum.photos/seed/cloud-kochi/1200/900"
                  alt="Cloud Infrastructure Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">99.99%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Uptime Promise</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Cloud Expertise</span></h2>
            <p className="text-text-gray text-lg">We provide comprehensive server and cloud solutions to help your business stay agile and competitive.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudFeatures.map((feature, index) => (
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

      {/* Technologies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Cloud Stack</span></h2>
            <p className="text-text-gray text-lg">We leverage industry-leading cloud platforms to build robust and scalable infrastructures.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudTech.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <tech.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">{tech.title}</h3>
                  <p className="text-text-gray leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Why Your Business Needs <span className="text-primary">Cloud Infrastructure?</span></h2>
            <p className="text-text-gray text-lg">The cloud is the foundation of modern business agility and growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-3">{benefit.title}</h3>
                  <p className="text-text-gray leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="text-text-gray text-lg">Answers to common questions about our server and cloud solutions.</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-text-gray leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>
    </main>
  );
}
