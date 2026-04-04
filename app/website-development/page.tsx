import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Code, Globe, Database, Cpu, Shield, Zap, Layout, Server } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const devServices = [
  {
    icon: Layout,
    title: 'Static HTML Websites',
    desc: 'Fast, secure, and cost-effective websites for simple business needs.',
    href: '/website-development/static-website',
  },
  {
    icon: Database,
    title: 'Dynamic Websites',
    desc: 'Interactive websites with database integration and content management.',
    href: '/website-development/dynamic-website',
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    desc: 'Custom WordPress themes and plugins for easy content control.',
    href: '/wordpress-development',
  },
  {
    icon: Code,
    title: 'Custom Web Applications',
    desc: 'Tailor-made software solutions built from scratch to meet your unique needs.',
    href: '/custom-development',
  },
  {
    icon: Server,
    title: 'Headless CMS',
    desc: 'Modern decoupled architectures for high performance and flexibility.',
    href: '/website-development/dynamic-website',
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    desc: 'Robust architectures that grow with your business and protect your data.',
    href: '/website-development',
  },
];

export default function WebsiteDevelopment() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Website Development Services"
        description="Building powerful, scalable, and high-performance web applications tailored to your business goals."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Expert <span className="text-primary">Website Development</span> in Kochi</h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                At Grehasoft, we don't just build websites; we build digital solutions. Our team of expert developers uses the latest technologies and best practices to create websites that are fast, secure, and easy to manage.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From simple static sites to complex enterprise applications, we have the skills and experience to bring your vision to life. We focus on clean code, robust architecture, and seamless user experiences.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['React & Next.js', 'Node.js & Express', 'PHP & Laravel', 'Python & Django', 'WordPress & CMS', 'Custom APIs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/webdev/800/600"
                alt="Website Development"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl text-white hidden md:block">
                <p className="font-bold text-4xl">10+</p>
                <p className="text-sm opacity-80">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Development Expertise</span></h2>
            <p className="text-text-gray text-lg">We specialize in a wide range of web technologies to deliver the best results for our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devServices.map((service, index) => (
              <Link key={index} href={service.href} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-primary font-bold text-sm flex items-center gap-2">
                  Learn More <Globe className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      
    </main>
  );
}
