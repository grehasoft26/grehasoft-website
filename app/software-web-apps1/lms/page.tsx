'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { GraduationCap, BookOpen, Users, CheckCircle2, ArrowRight, MessageSquare, Zap, Layout, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const lmsFeatures = [
  {
    icon: BookOpen,
    title: 'Course Management',
    desc: 'Easily create, organize, and manage diverse course content including video, text, and interactive elements.',
  },
  {
    icon: Users,
    title: 'User Roles & Permissions',
    desc: 'Define specific roles for students, instructors, and administrators with custom access levels.',
  },
  {
    icon: Zap,
    title: 'Progress Tracking',
    desc: 'Real-time analytics and reporting to monitor student engagement and course completion rates.',
  },
  {
    icon: Shield,
    title: 'Secure Assessments',
    desc: 'Build interactive quizzes, assignments, and exams with automated grading and anti-cheat measures.',
  },
  {
    icon: Layout,
    title: 'Responsive Learning',
    desc: 'A seamless learning experience across desktops, tablets, and mobile devices for learning on the go.',
  },
  {
    icon: MessageSquare,
    title: 'Collaborative Tools',
    desc: 'Integrated discussion forums, chat, and messaging to foster communication between learners and teachers.',
  },
];

const lmsBenefits = [
  {
    title: 'Scalable Infrastructure',
    desc: 'Our LMS platforms are built to handle thousands of concurrent users without compromising on speed or reliability.',
  },
  {
    title: 'Custom Branding',
    desc: 'Fully white-labeled solutions that reflect your institution\'s identity and brand values perfectly.',
  },
  {
    title: 'Seamless Integrations',
    desc: 'Connect with Zoom, Google Workspace, payment gateways, and other third-party tools effortlessly.',
  },
  {
    title: 'Data-Driven Insights',
    desc: 'Gain deep insights into learner behavior to improve course quality and educational outcomes.',
  },
];

const faqs = [
  {
    question: 'What is a custom LMS and how is it different from Moodle or Canvas?',
    answer: 'A custom LMS is built from the ground up to match your specific pedagogical approach and business workflows. Unlike generic platforms like Moodle, a custom solution eliminates unnecessary bloat and provides a unique user experience tailored to your brand.',
  },
  {
    question: 'Can I sell my courses through the LMS?',
    answer: 'Yes, we integrate secure payment gateways like Razorpay, Stripe, or PayPal, allowing you to monetize your courses with one-time payments or subscription models.',
  },
  {
    question: 'Is the platform mobile-friendly?',
    answer: 'Absolutely. We prioritize a mobile-first approach, ensuring that students can access lessons, take quizzes, and track their progress seamlessly from any smartphone or tablet.',
  },
  {
    question: 'Do you provide technical support after the launch?',
    answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your LMS stays updated, secure, and performs optimally at all times.',
  },
];

export default function LMSPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="LMS Platforms Kochi"
        description="Empower your educational institution or business with our custom Learning Management Systems. Scalable, secure, and engaging e-learning solutions in Kerala."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software', href: '/software' },
          { name: 'LMS Platforms', href: '/software/lms' },
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
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">E-Learning Excellence</span>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                Innovative <span className="text-primary">LMS Development</span> in Kochi
              </h2>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                Education is evolving, and your platform should too. At Grehasoft, we build comprehensive Learning Management Systems (LMS) that make online education and corporate training more effective, engaging, and accessible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  'Course management and delivery',
                  'Student progress tracking',
                  'Interactive quizzes & assessments',
                  'Secure payment integrations',
                  'Mobile-friendly experience',
                  'White-label solutions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your LMS Project <ArrowRight className="w-5 h-5" />
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
                  src="https://picsum.photos/seed/lms-kochi/1200/900"
                  alt="LMS Platform Development Kochi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden xl:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-dark">50k+</p>
                    <p className="text-xs text-text-gray uppercase font-bold">Active Learners</p>
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
            <h2 className="text-4xl font-bold text-dark mb-6">Powerful <span className="text-primary">LMS Features</span></h2>
            <p className="text-text-gray text-lg">Everything you need to deliver a world-class e-learning experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lmsFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold text-dark mb-6">Why Choose Our <span className="text-primary">Custom LMS?</span></h2>
            <p className="text-text-gray text-lg">We build platforms that are not just functional, but also scalable and user-friendly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lmsBenefits.map((benefit, index) => (
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
              <p className="text-text-gray text-lg">Answers to common questions about our LMS development services.</p>
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
