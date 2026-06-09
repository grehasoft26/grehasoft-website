'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { 
  Layout, Zap, Shield, DollarSign, Search, Smartphone, 
  CheckCircle2, Code2, Rocket, Settings, MessageSquare,
  Globe, Cpu, Server
} from 'lucide-react';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Static sites load instantly because they don\'t require server-side processing or database queries.',
  },
  {
    icon: Shield,
    title: 'Highly Secure',
    desc: 'With no database or server-side code, static sites are virtually unhackable and extremely secure.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    desc: 'Lower hosting and maintenance costs compared to dynamic websites. No expensive servers needed.',
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    desc: 'Clean code and fast loading speeds help you rank higher on search engines from day one.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Perfectly optimized for all devices, ensuring a seamless experience for every visitor.',
  },
  {
    icon: Layout,
    title: 'Modern Look',
    desc: 'Clean, professional designs that build immediate trust and credibility with your audience.',
  },
];

const useCases = [
  {
    title: 'Business Portfolios',
    desc: 'Showcase your company\'s services, team, and achievements with a professional look.',
  },
  {
    title: 'Landing Pages',
    desc: 'High-converting pages for specific marketing campaigns or product launches.',
  },
  {
    title: 'Personal Websites',
    desc: 'Perfect for resumes, portfolios, and personal blogs that don\'t need complex features.',
  },
  {
    title: 'Documentation',
    desc: 'Fast and searchable documentation sites for products or internal processes.',
  },
];

const techStack = [
  { name: 'HTML5', icon: Globe },
  { name: 'CSS3', icon: Layout },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Tailwind CSS', icon: Zap },
  { name: 'Next.js (Static)', icon: Rocket },
  { name: 'Cloudflare', icon: Shield },
];

const processSteps = [
  {
    step: '01',
    title: 'Planning',
    desc: 'We define the site structure and content strategy based on your goals.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Creating a modern, responsive UI that aligns with your brand identity.',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Writing clean, semantic HTML and CSS for maximum performance.',
  },
  {
    step: '04',
    title: 'Deployment',
    desc: 'Launching your site on a global CDN for lightning-fast access.',
  },
];

const faqs = [
  {
    question: 'What is a static HTML website?',
    answer: 'A static website consists of pre-built HTML, CSS, and JavaScript files that are delivered to the user exactly as stored. Unlike dynamic sites, they don\'t require a database or server-side processing for every request.',
  },
  {
    question: 'Can I update a static website easily?',
    answer: 'Yes, while it doesn\'t have a traditional CMS like WordPress, we can set up simple workflows or use Static Site Generators (SSGs) that make updates straightforward for developers or via Git.',
  },
  {
    question: 'Is hosting cheaper for static sites?',
    answer: 'Absolutely. Static sites can often be hosted for free or at a very low cost on platforms like Netlify, Vercel, or GitHub Pages because they require minimal server resources.',
  },
  {
    question: 'Are static sites good for SEO?',
    answer: 'They are excellent for SEO. Their fast loading times and clean code structure are highly favored by search engine algorithms.',
  },
];

const comparison = [
  { feature: 'Loading Speed', static: 'Instant (Pre-rendered)', dynamic: 'Variable (Server-side processing)' },
  { feature: 'Security', static: 'Highest (No database/server-side code)', dynamic: 'Moderate (Requires constant patching)' },
  { feature: 'Scalability', static: 'Seamless (CDN-based)', dynamic: 'Complex (Requires server scaling)' },
  { feature: 'Hosting Cost', static: 'Very Low / Free', dynamic: 'Medium to High' },
  { feature: 'Maintenance', static: 'Minimal', dynamic: 'Regular updates required' },
];

export default function StaticWebsite() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Static HTML Websites"
        description="Fast, secure, and cost-effective websites for businesses that need a strong digital presence without the complexity."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
          { name: 'Static Website', href: '/website-development/static-website' },
        ]}
      />

      {/* Section 1: Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-dark mb-6">Simple, Fast, and <span className="text-primary">Secure Static Sites</span></h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Static HTML websites are the perfect choice for small businesses, portfolios, and landing pages. They are built with pure HTML, CSS, and JavaScript, making them incredibly fast and easy to host.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                At Grehasoft, we specialize in creating high-performance static websites that deliver your message clearly and effectively. We focus on clean code and modern design to ensure your site looks great and performs perfectly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Fast Loading', 'Secure Architecture', 'Low Maintenance', 'SEO Optimized', 'Mobile Responsive', 'Custom Design'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
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
              <img
                src="/images/web design and coding collaboration.png"
                alt="Static Website Development"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-primary font-bold text-3xl">100%</p>
                <p className="text-sm text-text-gray">Secure & Fast</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Benefits of <span className="text-primary">Static Websites</span></h2>
            <p className="text-text-gray text-lg">Why many businesses are choosing static sites for their digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-dark mb-6">Where Static Sites <span className="text-primary">Excel</span></h2>
              <p className="text-text-gray text-lg mb-12">While dynamic sites have their place, static architecture is often the superior choice for these common scenarios.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {useCases.map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-text-gray text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="/images/Collaborative coding in a modern workspace.png" alt="Use Case 1" className="rounded-2xl shadow-lg" />
                <img src="/images/Modern UI mockup with plant accent.png" alt="Use Case 2" className="rounded-2xl shadow-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="/images/Rocket launch in a futuristic style.png" alt="Use Case 3" className="rounded-2xl shadow-lg" />
                <img src="/images/Modern workspace with coding setup.png" alt="Use Case 4" className="rounded-2xl shadow-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Technology Stack */}
      
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our <span className="text-primary">Tech Stack</span></h2>
            <p className="text-gray-400 text-lg">We use modern tools to build high-performance static websites.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <tech.icon className="w-10 h-10 text-primary" />
                <span className="font-medium text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Development Process</span></h2>
            <p className="text-text-gray text-lg">A streamlined approach to delivering your static website on time and within budget.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500"
              >
                <span className="absolute top-4 right-6 text-4xl font-bold text-primary/10 group-hover:text-white/20 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Static vs <span className="text-primary">Dynamic</span></h2>
            <p className="text-text-gray text-lg">Compare why static websites are often the better choice for many businesses.</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark text-white">
                  <th className="p-6 font-bold">Feature</th>
                  <th className="p-6 font-bold text-primary">Static Website</th>
                  <th className="p-6 font-bold text-gray-400">Dynamic Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-bold text-dark">{item.feature}</td>
                    <td className="p-6 text-primary font-medium">{item.static}</td>
                    <td className="p-6 text-text-gray">{item.dynamic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-6">Common <span className="text-primary">Questions</span></h2>
              <p className="text-text-gray text-lg">Everything you need to know about static HTML websites.</p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
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
