import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { ShoppingCart, CreditCard, Truck, BarChart } from 'lucide-react';

export default function EcommerceWebsitesPage() {
  const features = [
    {
      title: 'Shopping Cart',
      description: 'User-friendly shopping cart experience with easy add-to-cart and checkout processes.',
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Secure Payments',
      description: 'Integration with popular payment gateways like Razorpay, PayPal, and Stripe.',
      icon: <CreditCard className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Order Management',
      description: 'Efficient backend system to track orders, manage inventory, and handle shipping.',
      icon: <Truck className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Sales Analytics',
      description: 'Detailed reports and analytics to help you understand your customers and grow sales.',
      icon: <BarChart className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="E-Commerce Websites"
        description="Launch your online store with a powerful, secure, and scalable e-commerce platform."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'E-Commerce Websites', href: '/services/ecommerce-websites' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Build a Thriving Online Store
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In today's digital age, having an online store is essential for retail success. We provide comprehensive e-commerce solutions that help you sell products online effectively.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our e-commerce websites are designed to provide a seamless shopping experience for your customers while giving you full control over your products, orders, and customers. We focus on conversion optimization to help you maximize your online revenue.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/ecommerce/800/800"
                  alt="E-Commerce Websites"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
