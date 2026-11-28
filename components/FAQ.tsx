'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Briefcase, 
  HelpCircle as HelpIcon,
  HelpCircle as SupportIcon,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'company', name: 'About Grehasoft', icon: Cpu },
  { id: 'services', name: 'Services & Startup Support', icon: Briefcase },
  { id: 'support', name: 'Support & Security', icon: SupportIcon },
];

// Homepage FAQ content (14 questions), in display order. Categories use the filter ids above.
const faqs = [
  {
    id: 1,
    category: 'company',
    question: "What does Grehasoft do?",
    answer: "Grehasoft provides IT and digital services for businesses, including website development, e-commerce development, custom software, mobile applications, SEO, digital marketing, social media marketing, Google Ads, branding and graphic design. These services can be used individually or combined around a broader digital requirement.",
  },
  {
    id: 2,
    category: 'company',
    question: "Is Grehasoft an IT company in Kochi?",
    answer: "Yes. Grehasoft is an IT and digital services company based in Infopark, Kakkanad, Kochi, Kerala. The company provides website, software, mobile, e-commerce, SEO and digital marketing solutions for businesses.",
  },
  {
    id: 3,
    category: 'services',
    question: "What types of digital solutions does Grehasoft provide?",
    answer: "Grehasoft develops and supports business websites, e-commerce platforms, custom software, mobile applications, SEO strategies, digital marketing campaigns and creative brand assets. Its services cover technology, digital growth and creative requirements within one service ecosystem.",
  },
  {
    id: 4,
    category: 'services',
    question: "Does Grehasoft provide end-to-end IT and digital solutions?",
    answer: "Yes. Grehasoft can support different stages of a digital project, including strategy, UI/UX and product design, engineering and development, SEO, digital marketing, optimisation and ongoing technical support. The exact scope depends on the project's requirements.",
  },
  {
    id: 5,
    category: 'services',
    question: "Can I hire Grehasoft for only one service?",
    answer: "Yes. Businesses can engage Grehasoft for individual requirements such as website development, SEO, Google Ads, social media marketing, mobile app development, custom software or graphic design. Multiple services can also be combined when a project requires an integrated approach.",
  },
  {
    id: 6,
    category: 'services',
    question: "Does Grehasoft develop websites and e-commerce platforms?",
    answer: "Yes. Grehasoft develops business websites, WordPress websites, e-commerce platforms and custom web applications based on the project's requirements, customer journey, functionality and business objectives.",
  },
  {
    id: 7,
    category: 'services',
    question: "Does Grehasoft develop custom software and mobile applications?",
    answer: "Yes. Grehasoft develops custom software and mobile applications around business processes, workflows, customer requirements and specific functional needs. Projects can be planned around the required features, integrations and operational use cases.",
  },
  {
    id: 8,
    category: 'services',
    question: "Does Grehasoft provide SEO and digital marketing services?",
    answer: "Yes. Grehasoft provides SEO, social media marketing, Google Ads, Meta advertising, content marketing and related digital marketing services. SEO work can include technical optimisation, on-page optimisation, content strategy and local search optimisation.",
  },
  {
    id: 9,
    category: 'support',
    question: "How does Grehasoft approach a digital project?",
    answer: "Projects typically begin by understanding the business requirement, audience, existing digital presence and intended outcome. Depending on the scope, the process can move through strategy and architecture, UI/UX and product design, development, marketing, optimisation and ongoing support.",
  },
  {
    id: 10,
    category: 'company',
    question: "Does Grehasoft work with businesses outside Kochi?",
    answer: "Yes. Grehasoft is based in Kochi, Kerala and works with businesses across India and international markets. The type of support can vary by project, from website and software development to SEO, digital marketing and other digital services.",
  },
  {
    id: 11,
    category: 'company',
    question: "Does Grehasoft have its own software product?",
    answer: "Yes. Grehasoft has a flagship business management product, Grehasoft PMS. The platform is designed to help organisations manage operations, information and day-to-day workflows through connected digital tools.",
  },
  {
    id: 12,
    category: 'company',
    question: "What experience does Grehasoft have in IT and digital services?",
    answer: "Grehasoft has more than 10 years of IT and digital experience and has worked across website development, software, mobile applications, e-commerce, SEO, digital marketing and creative services. The website also presents selected client projects, case studies, testimonials and recognitions.",
  },
  {
    id: 13,
    category: 'company',
    question: "Where is Grehasoft located?",
    answer: "Grehasoft is based at Infopark Phase 1, Kakkanad, Kochi, Kerala, India. Its Kochi location supports businesses in Kerala while the company also works with businesses in other markets.",
  },
  {
    id: 14,
    category: 'company',
    question: "How can a business start a project with Grehasoft?",
    answer: "A business can contact Grehasoft with its project requirement, business objective and preferred service. The team can then understand the scope, discuss the required solution and determine the appropriate next steps for the project.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(1); // default expand first item

  // Filter logic
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section-padding !py-10 md:!py-12 bg-[#fafafa] relative overflow-clip" id="faq">
      {/* overflow-clip (not overflow-hidden) clips the decorative glows without creating a scroll container, so the
          desktop sidebar can stay sticky. */}
      {/* Decorative Brand Spotlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Centered Heading Layout */}
        {/* Wide enough for a one-line H2 and a two-line description on desktop. */}
        <div className="max-w-5xl mx-auto text-center mb-7 lg:mb-8">

          <p className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-3">
            <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              Knowledge Base Hub
            </span>
          </p>
          {/* Homepage H2 scale (28 / 36 / 40px) with the brand gradient, as in the other homepage sections. */}
          <h2
            className="w-fit max-w-full mx-auto text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight leading-[1.15] pb-1 mb-2.5 text-balance bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Frequently Asked Questions About Grehasoft
          </h2>
          <p className="text-text-gray text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-pretty lg:text-balance">
            Find clear answers about Grehasoft&apos;s IT services, digital solutions, development capabilities, project approach, location and business software.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-start">

          {/* Left Navigation, Category Filters, and Search dock (4 columns) */}
          {/* Sticky from lg (below the 64-76px fixed navbar); the sidebar is about 520px tall, so it fits the viewport. */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">

            {/* Search Input Panel */}
            <div className="bg-white p-4 rounded-box-lg overflow-hidden shadow-sm border border-gray-100 ring-1 ring-gray-900/5">
              <span className="text-[10px] uppercase font-black text-text-gray tracking-widest block mb-2.5">
                Search Questions
              </span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type keywords (e.g. SEO, mobile app)..."
                  aria-label="Search questions"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-primary/50 text-dark placeholder-text-gray/70 py-2.5 pl-10 pr-3.5 rounded-box-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-semibold"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-gray/80" />
              </div>
            </div>

            {/* Interactive Tab Selector buttons */}
            <div className="bg-white p-4 rounded-box-lg overflow-hidden shadow-sm border border-gray-100 ring-1 ring-gray-900/5">
              <span className="text-[10px] uppercase font-black text-text-gray tracking-widest block mb-2.5 px-1">
                Filter by Category
              </span>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        // Reset expansion on category change to prevent confusion
                        setExpandedId(null);
                      }}
                      className={cn(
                        "w-full text-left px-3.5 py-2.5 rounded-box-sm font-bold text-sm flex items-center gap-2.5 transition-all cursor-pointer",
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/10"
                          : "text-dark hover:bg-gray-50 bg-transparent border border-transparent hover:border-gray-100"
                      )}
                    >
                      <Icon className={cn("w-4 h-4 flex-shrink-0", isActive ? "text-white" : "text-text-gray")} />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Help card: compact white surface with a thin blue-to-green accent */}
            <div className="relative bg-white p-5 rounded-box-lg overflow-hidden shadow-sm border border-gray-100 ring-1 ring-gray-900/5">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-box-sm bg-primary/10 text-primary">
                  <MessageCircle className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold leading-snug text-dark">Still Have Questions?</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-gray">
                    Can&apos;t find the answer you&apos;re looking for? Talk to our team about your project or digital requirements.
                  </p>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-box-sm bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contact Our Team
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://wa.me/918921540183"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-center gap-1.5 text-xs font-semibold text-text-gray transition-colors hover:text-accent"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                or chat with us on WhatsApp
              </a>
            </div>

          </div>

          {/* Right Accordion Panel with smooth motion height transitions (8 columns) */}
          <div className="lg:col-span-8 space-y-2.5">

            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isExpanded = expandedId === faq.id;
                  return (
                    <motion.div
                      layout
                      key={faq.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        "rounded-box-lg border transition-all duration-300 bg-white overflow-hidden shadow-sm hover:shadow-md",
                        isExpanded ? "border-primary/40 ring-1 ring-primary/10" : "border-gray-100"
                      )}
                    >
                      <h3>
                      <button
                        type="button"
                        id={`faq-question-${faq.id}`}
                        aria-expanded={isExpanded}
                        aria-controls={`faq-answer-${faq.id}`}
                        onClick={() => toggleExpand(faq.id)}
                        className="w-full text-left px-5 py-3.5 md:px-6 md:py-4 flex items-center gap-3.5 justify-between cursor-pointer select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Sequential Tag Indicator */}
                          <span aria-hidden="true" className={cn(
                            "flex-shrink-0 w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center font-mono",
                            isExpanded ? "bg-primary/10 text-primary" : "bg-gray-100 text-text-gray/80"
                          )}>
                            Q{index + 1}
                          </span>
                          <span className={cn(
                            "min-w-0 text-[15px] md:text-base font-bold tracking-tight text-dark leading-snug text-pretty",
                            isExpanded && "text-primary transition-colors"
                          )}>
                            {faq.question}
                          </span>
                        </div>

                        <div className={cn(
                          "w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                          isExpanded ? "rotate-180 bg-primary/5 border-primary/20 text-primary" : "text-text-gray"
                        )}>
                          <ChevronDown aria-hidden="true" className="w-4 h-4" />
                        </div>
                      </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`faq-answer-${faq.id}`}
                            role="region"
                            aria-labelledby={`faq-question-${faq.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-4 md:px-6 md:pb-5 pl-[56px] md:pl-[60px] text-text-gray text-sm md:text-[15px] leading-relaxed border-t border-gray-100/80 pt-3">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-gray-100 rounded-box-lg overflow-hidden p-10 text-center text-text-gray"
                >
                  <p className="text-lg font-medium mb-2">No matching questions found.</p>
                  <p className="text-sm text-text-gray/80">Try refining your keyword query or switching categories above.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
