'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Calendar, Clock, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const bookingFeatures = [
  {
    icon: Calendar,
    title: 'Real-Time Scheduling',
    desc: 'Live availability updates ensure no double bookings and a seamless experience for your clients.',
  },
  {
    icon: Clock,
    title: 'Automated Reminders',
    desc: 'Reduce no-shows with automated SMS and email notifications for upcoming appointments.',
  },
  {
    icon: Zap,
    title: 'Instant Payments',
    desc: 'Integrated payment gateways allow you to collect deposits or full payments at the time of booking.',
  },
  {
    icon: Shield,
    title: 'Secure Data',
    desc: 'Enterprise-grade security to protect sensitive client information and booking history.',
  },
  {
    icon: Layout,
    title: 'Custom Workflows',
    desc: 'Tailored booking flows that match your specific business logic and service requirements.',
  },
  {
    icon: MessageSquare,
    title: 'Client Management',
    desc: 'Built-in CRM features to track client preferences, history, and communication in one place.',
  },
];

const bookingBenefits = [
  {
    title: '24/7 Online Presence',
    desc: 'Allow your customers to book your services anytime, anywhere, without needing a staff member on call.',
  },
  {
    title: 'Increased Efficiency',
    desc: 'Automate the administrative work of scheduling, rescheduling, and cancellations.',
  },
  {
    title: 'Better Resource Planning',
    desc: 'Gain insights into peak times and staff performance to optimize your business operations.',
  },
  {
    title: 'Improved Customer Experience',
    desc: 'Provide a modern, friction-less booking process that builds trust and encourages repeat business.',
  },
];

const faqs = [
  {
    question: 'What types of businesses can use your custom booking systems?',
    answer: 'Our solutions are versatile and can be tailored for clinics, salons, consulting firms, equipment rentals, event venues, and any service-based business that requires scheduling.',
  },
  {
    question: 'Can the booking system integrate with my existing calendar?',
    answer: 'Yes, we can integrate our systems with popular calendars like Google Calendar, Outlook, and iCal to ensure your schedule is always synchronized.',
  },
  {
    question: 'How do you handle cancellations and refunds?',
    answer: 'We build custom logic for cancellation windows and automated refund processes based on your specific business policies.',
  },
  {
    question: 'Is the booking system mobile-friendly?',
    answer: 'Absolutely. We ensure the booking interface is fully responsive, providing a perfect experience on smartphones, tablets, and desktops.',
  },
];

export default function BookingSystemsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Booking Systems Kochi"
        description="Streamline your appointments and reservations with our custom booking solutions. Expert booking system developers in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'Booking Systems', href: '/software/booking' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Seamless Scheduling</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Custom <span className="text-primary">Booking Solutions</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                In today's fast-paced world, convenience is key. At Grehasoft, we develop custom booking and reservation systems that make it easy for your customers to schedule appointments and services online, 24/7.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Real-time availability',
                  'Automated SMS/Email reminders',
                  'Secure payment integration',
                  'Staff & Resource management',
                  'User-friendly interface',
                  'Calendar synchronization'
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
                  src="https://picsum.photos/seed/booking-kochi/1200/900"
                  alt="Booking System Development Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">24/7</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Online Booking</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Powerful <span className="text-primary">Booking Features</span></h2>
            <p className="text-text-gray text-lg">Our systems are packed with features to help you manage your schedule effortlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookingFeatures.map((feature, index) => (
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

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Why Your Business Needs a <span className="text-primary">Custom Booking System?</span></h2>
            <p className="text-text-gray text-lg">Stop losing customers to manual scheduling errors and missed calls.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark mb-6">Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="text-text-gray text-lg">Answers to common questions about our booking system development services.</p>
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
      <Footer />
    </main>
  );
}
