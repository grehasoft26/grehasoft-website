'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Database, Shield, Zap, CheckCircle2, ArrowRight, MessageSquare, Layout, Server, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const databaseFeatures = [
  {
    icon: Database,
    title: 'SQL & NoSQL Design',
    desc: 'Expertise in relational (PostgreSQL, MySQL) and non-relational (MongoDB, Redis) database architectures.',
  },
  {
    icon: Zap,
    title: 'Performance Tuning',
    desc: 'Optimization of queries, indexing, and server configurations to ensure lightning-fast data retrieval.',
  },
  {
    icon: Shield,
    title: 'Data Security',
    desc: 'Implementation of robust encryption, access controls, and regular security audits to protect your assets.',
  },
  {
    icon: Server,
    title: 'Migration Services',
    desc: 'Seamless migration of data between different database systems with zero downtime and data integrity.',
  },
  {
    icon: Layout,
    title: 'Scalable Architecture',
    desc: 'Designing databases that can handle massive growth through sharding, replication, and clustering.',
  },
  {
    icon: MessageSquare,
    title: 'Backup & Recovery',
    desc: 'Automated backup solutions and disaster recovery planning to ensure your business continuity.',
  },
];

const databaseTech = [
  {
    title: 'PostgreSQL',
    desc: 'Advanced open-source relational database known for its reliability and feature robustness.',
    icon: Database,
  },
  {
    title: 'MongoDB',
    desc: 'Flexible document-based NoSQL database for modern applications with dynamic schemas.',
    icon: Layout,
  },
  {
    title: 'MySQL',
    desc: 'The world\'s most popular open-source database, ideal for high-performance web applications.',
    icon: Zap,
  },
  {
    title: 'Redis',
    desc: 'In-memory data structure store used as a database, cache, and message broker.',
    icon: Rocket,
  },
];

const databaseBenefits = [
  {
    title: 'High Availability',
    desc: 'Ensure your data is always accessible with redundant systems and automated failover mechanisms.',
  },
  {
    title: 'Data Integrity',
    desc: 'Maintain accurate and consistent data across your entire organization with strict validation rules.',
  },
  {
    title: 'Cost Efficiency',
    desc: 'Optimize storage and compute resources to reduce infrastructure costs while maintaining performance.',
  },
  {
    title: 'Actionable Insights',
    desc: 'Well-structured databases enable faster and more accurate reporting and business intelligence.',
  },
];

const faqs = [
  {
    question: 'What is the difference between SQL and NoSQL?',
    answer: 'SQL databases are relational and use structured schemas, making them ideal for complex queries and transactional data. NoSQL databases are non-relational and flexible, perfect for large-scale, unstructured data and rapid development.',
  },
  {
    question: 'How do you ensure database performance?',
    answer: 'We use a combination of query optimization, proper indexing, caching strategies (like Redis), and hardware resource tuning to ensure your database performs at its peak.',
  },
  {
    question: 'Can you migrate our existing data to a new system?',
    answer: 'Yes, we specialize in database migrations. We ensure that your data is moved safely, accurately, and with minimal impact on your live operations.',
  },
  {
    question: 'How do you handle data security and backups?',
    answer: 'We implement enterprise-grade security protocols, including encryption at rest and in transit. We also set up automated, multi-region backup systems to prevent data loss.',
  },
];

export default function DatabasesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Database Solutions Kochi"
        description="Expert database design, management, and optimization services for your business data. Expert database architects in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Technology', href: '/tech' },
          { name: 'Databases', href: '/tech/databases' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Data Architecture</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Expert <span className="text-primary">Database Solutions</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Data is the lifeblood of your business. At Grehasoft, we provide expert database design, management, and optimization services to ensure your business data is secure, accessible, and high-performing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'SQL & NoSQL expertise',
                  'Performance optimization',
                  'Secure data migration',
                  'High availability design',
                  'Automated backups',
                  'Scalable architecture'
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
                  src="https://picsum.photos/seed/database-kochi/1200/900"
                  alt="Database Management Services Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">99.99%</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Data Reliability</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Database Expertise</span></h2>
            <p className="text-text-gray text-lg">We provide comprehensive database solutions to help your business manage data effectively and securely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {databaseFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Database Stack</span></h2>
            <p className="text-text-gray text-lg">We use industry-leading database technologies to build fast, secure, and reliable data layers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {databaseTech.map((tech, index) => (
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
            <h2 className="text-4xl font-bold text-dark mb-6">Why Your Business Needs <span className="text-primary">Expert Database Management?</span></h2>
            <p className="text-text-gray text-lg">A well-managed database is the foundation of a successful digital strategy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {databaseBenefits.map((benefit, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our database design and management services.</p>
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
