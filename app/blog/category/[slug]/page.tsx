'use client';

import { useState, use } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Search, ChevronDown, Check, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

// Mock Data for Categories
const allCategories = [
  "Data Analytics", "Press Release", "Agentic AI", "People and Culture", "UI/UX",
  "Software Quality Assurance", "DevSecOps", "Software Development", "Digital Marketing",
  "Web Application"
];

const categoryPosts = [
  {
    title: "Data Analytics and AI Integration in the Insurance Industry",
    description: "In today's competitive insurance market, every insurer has access to valuable data, but not everyone uses it to its full potential. The real advantage lies in how effectively data...",
    category: ["Artificial Intelligence", "Data Analytics"],
    date: "Oct 30, 2025",
    readTime: "3 min read",
    image: "https://picsum.photos/seed/insurance-data/800/600"
  },
  {
    title: "Understanding Predictive Analytics for Modern Retail",
    description: "Predictive analytics is transforming the retail landscape by allowing businesses to anticipate customer needs and optimize supply chain management with unprecedented precision...",
    category: ["Data Analytics", "Retail"],
    date: "Oct 15, 2025",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/retail-data/800/600"
  },
  {
    title: "The Future of Big Data in Custom Software Development",
    description: "Big data isn't just for tech giants anymore. Custom software development is increasingly incorporating big data features to provide actionable insights for businesses of all sizes...",
    category: ["Data Analytics", "Software Development"],
    date: "Sep 28, 2025",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/software-data/800/600"
  }
];

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [activeTags, setActiveTags] = useState<string[]>(["Data Analytics"]);

  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Data Analytics"
        description="Explore the latest insights and trends in data-driven decision making and advanced analytics."
        breadcrumb={[
          { name: 'Blogs', href: '/blog' },
          { name: 'Data Analytics', href: '#' }
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
              <input 
                type="text" 
                placeholder="Search blog posts..." 
                className="w-full pl-14 pr-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="relative min-w-[200px]">
              <div className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between cursor-pointer">
                <span className="font-medium text-dark">Newest</span>
                <ChevronDown className="w-5 h-5 text-text-gray" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-3 space-y-12">
              <div>
                <h3 className="text-xl font-bold text-dark mb-6">Filters</h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center transition-all group-hover:border-primary">
                    {/* Empty for "View All" */}
                  </div>
                  <span className="text-text-gray font-medium group-hover:text-primary transition-all">View All</span>
                </label>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark mb-6">Tags</h3>
                <div className="flex flex-col gap-4">
                  {allCategories.map((cat, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleTag(cat)}>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                        activeTags.includes(cat) ? "bg-primary border-primary" : "border-gray-300 group-hover:border-primary"
                      }`}>
                        {activeTags.includes(cat) && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className={`font-medium transition-all ${
                        activeTags.includes(cat) ? "text-primary" : "text-text-gray group-hover:text-primary"
                      }`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
                <button className="mt-6 text-primary font-bold text-sm border-b border-primary/30 hover:border-primary transition-all">
                  Show More...
                </button>
              </div>
            </aside>

            {/* Main Content: Post List */}
            <div className="lg:col-span-9 flex flex-col gap-10">
              {categoryPosts.map((post, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 group cursor-pointer"
                >
                  <div className="md:col-span-4 aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-500">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="md:col-span-8 py-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.category.map((cat, j) => (
                        <span key={j} className="text-xs font-bold text-text-gray bg-gray-100 px-3 py-1 rounded-full">{cat}</span>
                      ))}
                      <span className="text-xs font-medium text-text-gray px-3 py-1 ml-auto">{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-text-gray text-sm mb-6 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-dark">{post.readTime}</span>
                      <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
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
