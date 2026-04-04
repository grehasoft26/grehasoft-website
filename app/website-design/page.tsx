import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Monitor, Layout, Smartphone, Palette, Zap, Shield } from 'lucide-react';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Layout,
    title: 'Custom Layouts',
    desc: 'Unique designs tailored to your brand identity and business goals.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Websites that look and perform perfectly on all devices, from desktops to smartphones.',
  },
  {
    icon: Palette,
    title: 'UI/UX Excellence',
    desc: 'Intuitive user interfaces and engaging user experiences that drive conversions.',
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    desc: 'Optimized designs that ensure lightning-fast page load speeds.',
  },
  {
    icon: Shield,
    title: 'SEO Friendly',
    desc: 'Built with search engines in mind to help you rank higher from day one.',
  },
  {
    icon: Monitor,
    title: 'Modern Aesthetics',
    desc: 'Clean, professional, and modern designs that build trust with your audience.',
  },
];

export default function WebsiteDesign() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Website Design Services"
        description="Transform your digital presence with stunning, high-converting website designs tailored to your business."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Design', href: '/website-design' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Innovative <span className="text-primary">Website Design</span> in Kochi</h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                At Grehasoft, we believe a website is more than just a digital placeholder. It's your most powerful marketing tool. Our expert designers combine creativity with data-driven insights to create websites that not only look beautiful but also deliver measurable results.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Whether you need a simple corporate site or a complex web application, we focus on creating a seamless journey for your users, ensuring they find what they need and take the actions you want.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Corporate Websites', 'Portfolio Sites', 'Landing Pages', 'E-commerce Design', 'Blog Design', 'Custom UI/UX'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/webdesign/800/600"
                alt="Website Design"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <p className="text-primary font-bold text-3xl">100%</p>
                <p className="text-sm text-text-gray">Custom Designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Why Choose Our <span className="text-primary">Design Services?</span></h2>
            <p className="text-text-gray text-lg">We don't just make things look pretty; we build strategic digital assets that grow your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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

      <CTA />
      <Footer/>
    </main>
  );
}
