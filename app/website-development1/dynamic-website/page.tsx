import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Database, Globe, Code, Shield, Zap, Layout, Server, Users } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
const dynamicFeatures = [
  {
    icon: Database,
    title: 'Database Integration',
    desc: 'Store and manage large amounts of data efficiently with robust database solutions.',
  },
  {
    icon: Users,
    title: 'User Management',
    desc: 'Create user accounts, profiles, and personalized experiences for your visitors.',
  },
  {
    icon: Layout,
    title: 'Content Management',
    desc: 'Easily update and manage your website content without any technical knowledge.',
  },
  {
    icon: Zap,
    title: 'Interactive Features',
    desc: 'Add complex functionality like search, filters, and real-time updates.',
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    desc: 'Built with security and scalability in mind to grow with your business.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Reach a wider audience with multi-language support and global performance.',
  },
];

export default function DynamicWebsite() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Dynamic Website Development"
        description="Building interactive, database-driven websites that provide a rich and engaging experience for your users."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
          { name: 'Dynamic Website', href: '/website-development/dynamic-website' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Powerful and <span className="text-primary">Interactive Dynamic Sites</span></h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Dynamic websites are the backbone of modern digital businesses. They allow you to manage large amounts of content, interact with your users, and provide personalized experiences.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                At Grehasoft, we specialize in building high-performance dynamic websites using the latest technologies. We focus on creating robust architectures that are easy to manage and scale.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['WordPress Development', 'Custom CMS', 'User Portals', 'Interactive Dashboards', 'API Integration', 'Scalable Architecture'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/dynamicweb/800/600"
                alt="Dynamic Website Development"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl text-white hidden md:block">
                <p className="font-bold text-4xl">100%</p>
                <p className="text-sm opacity-80">Interactive & Scalable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Features of <span className="text-primary">Dynamic Websites</span></h2>
            <p className="text-text-gray text-lg">Why many businesses are choosing dynamic sites for their digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dynamicFeatures.map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Dynamic Solutions</span></h2>
            <p className="text-text-gray text-lg">We offer a wide range of dynamic website solutions to meet your unique needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/wordpress-development" className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">WordPress Websites</h3>
              <p className="text-text-gray text-sm leading-relaxed mb-6">Custom WordPress themes and plugins for easy content control.</p>
              <span className="text-primary font-bold text-sm flex items-center gap-2">Learn More <Globe className="w-4 h-4" /></span>
            </Link>
            <Link href="/custom-development" className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">Custom Websites</h3>
              <p className="text-text-gray text-sm leading-relaxed mb-6">Tailor-made software solutions built from scratch to meet your unique needs.</p>
              <span className="text-primary font-bold text-sm flex items-center gap-2">Learn More <Code className="w-4 h-4" /></span>
            </Link>
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">Headless CMS</h3>
              <p className="text-text-gray text-sm leading-relaxed mb-6">Modern decoupled architectures for high performance and flexibility.</p>
              <span className="text-primary font-bold text-sm flex items-center gap-2">Modern Trend <Server className="w-4 h-4" /></span>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      

    </main>
  );
}
