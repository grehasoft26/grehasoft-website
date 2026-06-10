import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { ShoppingBag, Layout, Shield, Zap, Globe, Settings, Smartphone, BarChart } from 'lucide-react';
import Footer from '@/components/Footer';
const features = [
  {
    icon: ShoppingBag,
    title: 'Custom Shopify Themes',
    desc: 'Bespoke Shopify designs that align with your brand identity and maximize sales.',
  },
  {
    icon: Layout,
    title: 'Store Setup & Config',
    desc: 'Complete Shopify store setup, including product categories, navigation, and settings.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    desc: 'Integration with Shopify Payments and other major payment gateways.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    desc: 'Optimized Shopify stores for fast loading speeds and better user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    desc: 'Seamless shopping experience across all mobile devices, from smartphones to tablets.',
  },
  {
    icon: Settings,
    title: 'App Integration',
    desc: 'Extending store functionality with custom or popular Shopify apps.',
  },
];

const processSteps = [
  {
    title: 'Store Strategy',
    desc: 'Planning your store structure, product offerings, and customer journey.',
  },
  {
    title: 'Design & UX',
    desc: 'Creating high-converting Shopify store layouts and user interfaces.',
  },
  {
    title: 'Development',
    desc: 'Building your Shopify store with clean, scalable code and theme customization.',
  },
  {
    title: 'Payment & Shipping',
    desc: 'Configuring secure payment gateways and efficient shipping methods.',
  },
  {
    title: 'Testing & Launch',
    desc: 'Rigorous testing for functionality, security, and performance before launch.',
  },
];

export default function ShopifyStores() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Shopify Store Development"
        description="Build a powerful, scalable, and high-converting online store with Shopify's robust eCommerce platform."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'eCommerce', href: '/ecommerce-development' },
          { name: 'Shopify', href: '/ecommerce-development/shopify' },
        ]}
      />

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Expert <span className="text-primary">Shopify</span> Solutions</h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Shopify is a leading eCommerce platform that provides everything you need to sell online. At Grehasoft, we specialize in **custom Shopify store development**, helping businesses create powerful and scalable online stores that drive results.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                From small boutiques to large-scale enterprises, our Shopify experts deliver solutions that are not only visually stunning but also technically robust. We focus on **user experience, security, and conversion optimization** to ensure your store's success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Custom Theme Design', 'Payment Gateway Integration', 'Inventory Management', 'SEO-Friendly Structure', 'Mobile-First Design', 'Scalable Architecture'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/shopify/800/600"
                alt="Shopify Development"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Key <span className="text-primary">Benefits</span> of Our Shopify Stores</h2>
            <p className="text-text-gray text-lg">Experience the power of a fully customized eCommerce solution.</p>
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Development Process</span></h2>
            <p className="text-text-gray text-lg">A systematic approach to building high-quality Shopify stores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">0{index + 1}</div>
                  <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-text-gray text-sm">{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-200 z-10" />
                )}
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
