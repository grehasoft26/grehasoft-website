'use client';

import { use, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Layout, Code2, Smartphone, Globe } from 'lucide-react';
import CTA from '@/components/CTA';
import PageHeader from '@/components/PageHeader';
// Mock Data for Case Studies
const caseStudiesData: Record<string, any> = {
  'e-commerce-platform': {
    title: "Transforming Retail with a Modern E-Commerce Platform",
    subtitle: "A scalable, high-performance solution for a global fashion brand",
    category: "Web Development",
    client: "Global Styles Co.",
    services: ["UI/UX Design", "Web Development", "Search Engine Optimisation", "Content Management System (CMS)", "Cloud Services"],
    stats: [
      { label: "Language", value: "Next.js / Headless / Node.js" },
      { label: "Timescale", value: "16 Weeks" },
      { label: "System", value: "Sanity.io / Shopify" },
    ],
    liveUrl: "https://example.com",
    overview: "Global Styles Co. needed to migrate from their legacy systems to a modern, fast, and scalable e-commerce infrastructure. They faced challenges with site speed during peak holiday seasons and a cumbersome backend that made content updates difficult for their marketing team.",
    challenge: "The existing platform was failing to handle concurrent users during flash sales, leading to significant revenue loss. Additionally, the checkout process had a high abandonment rate due to slow loading states and lack of local payment options.",
    solution: "We developed a headless e-commerce architecture using Next.js for the frontend and Shopify for the commerce engine. By decoupling the presentation layer, we achieved lightning-fast page transitions and implemented a highly modular CMS (Sanity.io) that allows the team to launch campaigns in minutes rather than days.",
    results: [
      "45% Increase in Mobile Conversions",
      "60% Reduction in Average Page Load Time",
      "Zero Downtime during Black Friday peak",
      "30% Growth in repeat customer rate within 6 months"
    ],
    images: [
      "https://picsum.photos/seed/shop1/1200/800",
      "https://picsum.photos/seed/shop2/1200/800",
      "https://picsum.photos/seed/shop3/1200/800"
    ]
  },
  'healthcare-mobile-app': {
    title: "Revolutionizing Patient Care with Healthcare Mobile App",
    subtitle: "A seamless connection between patients and specialized clinicians",
    category: "Mobile App",
    client: "HealthFirst Network",
    services: ["React Native", "UI/UX Design", "Hipaa Compliance", "Backend Development"],
    stats: [
      { label: "Language", value: "React Native / Node.js" },
      { label: "Timescale", value: "24 Weeks" },
      { label: "System", value: "AWS / PostgreSQL" },
    ],
    liveUrl: "https://example.com",
    overview: "HealthFirst wanted to reduce wait times for non-emergency consultations and provide patients with a secure platform to manage their medical records and appointments remotely.",
    challenge: "The primary challenge was ensuring strict HIPAA compliance while maintaining a friction-less user experience. The app needed to handle high-resolution video calls and real-time messaging between patients and doctors.",
    solution: "We built a specialized mobile application with end-to-end encryption. The solution features an AI-driven triage system that guides users to the right specialist based on their symptoms, and integrated secure video conferencing natively.",
    results: [
      "85% Patient satisfaction score",
      "50k+ Active monthly users",
      "25% Reduction in no-show appointments",
      "Successful HIPAA audit completion"
    ],
    images: [
      "https://picsum.photos/seed/health1/1200/800",
      "https://picsum.photos/seed/health2/1200/800"
    ]
  }
};

export default function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = caseStudiesData[slug] || caseStudiesData['e-commerce-platform']; // Fallback for demo

  return (
    <main className="min-h-screen bg-white">
         {/* HEADER */}
              <PageHeader
                title="Portfolio Details"
              description="Discover detailed insights into our projects, showcasing our approach, solutions, and the impact we deliver for our clients."
                breadcrumb={[
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Details', href: '#' },
                ]}
              />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 text-text-gray hover:text-primary mb-8 font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  {data.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-text-gray max-w-3xl leading-relaxed">
                {data.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sidebar: Services & Specs */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-8">Services Provided</h3>
                  <div className="flex flex-wrap gap-3">
                    {data.services.map((service: string) => (
                      <span 
                        key={service} 
                        className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-text-gray hover:border-primary hover:text-primary transition-all shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-10">
                  <div className="space-y-6">
                    {data.stats.map((stat: any) => (
                      <div key={stat.label} className="flex items-center justify-between group py-2 border-b border-gray-50 last:border-0">
                        <span className="text-sm font-medium text-text-gray">{stat.label}</span>
                        <span className="text-sm font-bold text-dark group-hover:text-primary transition-colors">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <Link 
                      href={data.liveUrl} 
                      target="_blank"
                      className="group flex items-center gap-3 text-lg font-bold text-primary hover:text-dark transition-all"
                    >
                      View Live Site 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Narrative Content */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-20">
              <div className="space-y-10">
                <h2 className="text-4xl font-bold text-dark leading-tight border-l-4 border-primary pl-6">
                  Transforming the Digital Identity for Enhanced Impact
                </h2>
                <p className="text-lg text-text-gray leading-relaxed">
                  {data.overview}
                </p>
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={data.images[0]} 
                    alt="Work Preview" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-dark">The Challenge</h3>
                  <p className="text-text-gray leading-relaxed">
                    {data.challenge}
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-dark">Our Solution</h3>
                  <p className="text-text-gray leading-relaxed">
                    {data.solution}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16">
                <h3 className="text-3xl font-bold text-dark mb-10 text-center">Project Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {data.results.map((result: string, index: number) => (
                    <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <p className="font-bold text-dark">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
                <img 
                  src={data.images[1]} 
                  alt="Interface Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Works */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-4">Related Works</h2>
              <p className="text-lg text-text-gray">Explore more of our success stories</p>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
              View All Works <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {Object.keys(caseStudiesData).filter(k => k !== slug).map((key) => {
               const item = caseStudiesData[key];
               return (
                 <Link key={key} href={`/portfolio/${key}`} className="group block">
                   <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6 shadow-lg">
                     <img 
                      src={item.images[0]} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors" />
                   </div>
                   <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                   <span className="text-primary font-bold inline-flex items-center gap-2">
                     View Case Study <ArrowRight className="w-4 h-4" />
                   </span>
                 </Link>
               )
             })}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
