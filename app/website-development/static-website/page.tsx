import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Layout, Zap, Shield, DollarSign, Search, Smartphone } from 'lucide-react';
import Footer from '@/components/Footer';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Static sites load instantly because they don\'t require server-side processing.',
  },
  {
    icon: Shield,
    title: 'Highly Secure',
    desc: 'With no database or server-side code, static sites are virtually unhackable.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    desc: 'Lower hosting and maintenance costs compared to dynamic websites.',
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    desc: 'Clean code and fast loading speeds help you rank higher on search engines.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Perfectly optimized for all devices, from mobile to desktop.',
  },
  {
    icon: Layout,
    title: 'Modern Look',
    desc: 'Clean, professional designs that build trust with your audience.',
  },
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
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
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/staticweb/800/600"
                alt="Static Website Development"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-primary font-bold text-3xl">100%</p>
                <p className="text-sm text-text-gray">Secure & Fast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Benefits of <span className="text-primary">Static Websites</span></h2>
            <p className="text-text-gray text-lg">Why many businesses are choosing static sites for their digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{benefit.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />


    </main>
  );
}
