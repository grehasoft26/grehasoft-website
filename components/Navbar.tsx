'use client';
import {
  Monitor, Code,  ShoppingBag, Megaphone, Cpu, Palette,
  PenTool, CreditCard, Search, Target, Share2,  BookOpen, RefreshCw,
  MessageCircle
} from 'lucide-react';

const iconMap: any = {
  "book-open": BookOpen,
  "trophy": Trophy,
  monitor: Monitor,
  RefreshCw: RefreshCw,
  code: Code,
  globe: Globe,
  "shopping-bag": ShoppingBag,
  megaphone: Megaphone,
  cpu: Cpu,
  palette: Palette,
  "pen-tool": PenTool,
  "credit-card": CreditCard,
  search: Search,
  target: Target,
  "share-2": Share2,
};
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Trophy, Globe, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ExplodingImage from './ExplodingImage';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';

/* -------------------- NAVBAR -------------------- */
const DEFAULT_MENU = [
  { id: "1", title: "Home", url: "/", parent: "0" },
  { id: "2", title: "About Us", url: "/about-us", parent: "0" },
  { id: "3", title: "Services", url: "/services", parent: "0" },
  { id: "4", title: "Portfolio", url: "/portfolio", parent: "0" },
  { id: "5", title: "Products", url: "/products", parent: "0" },
  { id: "6", title: "Careers", url: "/careers", parent: "0" },
  { id: "7", title: "Blog", url: "/blog", parent: "0" },
  { id: "8", title: "Contact", url: "/contact", parent: "0" }
];

export default function Navbar() {
  const [menu, setMenu] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    // Mobile dropdown states
  const [openMenu, setOpenMenu] = useState<any>({});
  const [openSubMenu, setOpenSubMenu] = useState<any>({});
  const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "";

const API_BASE = API.replace(
  "/wp-json/wp/v2",
  ""
);
const pathname = usePathname();
 
  const toggleMenu = (id: any) => {
    setOpenMenu((prev: any) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSubMenu = (id: any) => {
    setOpenSubMenu((prev: any) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Fetch WordPress Menu
  useEffect(() => {
    if (!API_BASE) return;

    const fetchMenu = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/wp-json/custom/v1/menu/primary-menu`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error(
            `Menu API failed: ${res.status}`
          );
        }

        const data = await res.json();

        console.log("MENU DATA:", data);

        setMenu(Array.isArray(data) ? data : []);
      } catch (error: any) {
        console.warn(
          "Navbar menu error:",
          error?.message || error
        );
        setMenu([]);
      }
    };

    fetchMenu();
  }, [API_BASE]);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu helpers
  const menuArray = Array.isArray(menu) && menu.length > 0 ? menu : DEFAULT_MENU;

const mainMenu = menuArray.filter(item => item.parent == "0");

const getSubMenu = (id: any) =>
  menuArray.filter(item => item.parent == id);

  // Fix WP URL → Next.js URL
  const getPath = (url: string) => {
    if (!url) return "#";
    if (url.startsWith("http")) return new URL(url).pathname;
    return url;
  };
 const isLightPage = pathname.includes('/blog/') && !pathname.includes('/blog/category/');

 
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        (isScrolled || isLightPage) ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 '
      )}
    >
      <div className="container-custom flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" className="h-10" />
          
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {mainMenu.map((item) => {
            const subMenu = getSubMenu(item.id);

            return (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => (subMenu.length > 0 || item.title === "Services") && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={getPath(item.url)}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 py-2',
                   (isScrolled || isLightPage) ? 'text-dark' : 'text-white'
                  )}
                >
                  {item.title}
                  {(subMenu.length > 0 || item.title === "Services") && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* ABOUT DROPDOWN */}
                <AnimatePresence>
                  {activeDropdown === item.title && subMenu.length > 0 && item.title !== "Services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-primary"
                    >
                      {subMenu.map((sub) => (
                        <Link
                          key={sub.id}
                          href={getPath(sub.url)}
                          className="px-6 py-3 text-sm text-dark hover:bg-gray-50 hover:text-primary block"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* SERVICES MEGA MENU */}
                <AnimatePresence>
                  {activeDropdown === "Services" && item.title === "Services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl bg-white shadow-2xl rounded-b-2xl overflow-hidden border-t-4 border-primary"
                    >
                      <div className="flex">
                        {/* LEFT */}
                       {/* LEFT CONTENT - Dynamic from WordPress */}
<div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
  {getSubMenu(
    mainMenu.find((m) => m.title === "Services")?.id
  ).map((column) => {
    const columnLinks = getSubMenu(column.id);
    

    return (
      <div key={column.id} className="flex flex-col gap-4">
       <Link
  href={getPath(column.url)}
  className="text-sm font-bold text-dark uppercase tracking-wider hover:text-primary transition-colors inline-block"
>
  {column.title}
</Link>

        <div className="flex flex-col gap-2">
          {columnLinks.map((link) => (
            <Link
              key={link.id}
              href={getPath(link.url)}
              className="text-[13px] text-gray-500 hover:text-primary hover:translate-x-1 transition-all duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  })}
</div>

                        {/* RIGHT */}
                       <div className="w-full lg:w-96 bg-gray-50 p-8 border-l border-gray-100 flex flex-col gap-6">
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-dark leading-tight">
                              Empowering Startups and Enterprises With Services That Drive Real Impact
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              We help businesses turn ideas into reliable digital products that work, mobile, and custom solutions that drive results. Need extra hands on your project? Hire skilled developers with ease.
                            </p>
                          </div>

                          {/* IMAGE SECTION */}
<div className="flex-1 flex items-center justify-center ">
  <ExplodingImage />
</div>

{/* BUTTON */}
<div className="mt-6">
  <Link
    href="/contact"
    className="btn-primary w-full text-center block py-3 rounded-lg"
  >
    Get Started
  </Link>
</div>

                          <div className="mt-auto pt-6 border-t border-gray-200">
                            <Link 
                              href="/services" 
                              className="flex items-center gap-2 text-sm font-bold text-primary group/all"
                            >
                              Explore All Services
                              <ArrowUpRight className="w-4 h-4 group-hover/all:translate-x-1 group-hover/all:-translate-y-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  
                  )
          }
                </AnimatePresence>

              </div>
            );
          })}

          <Link href="/contact" className="btn-primary py-2 px-6 text-sm">
            Get Started
          </Link>
          
        </div>

          {/* Mobile Toggle */}
{!isMobileMenuOpen && (
  <button
    className="lg:hidden p-2 z-[100]"
    onClick={() => setIsMobileMenuOpen(true)}
  >
    <Menu className={isScrolled ? "text-dark w-7 h-7" : "text-white w-7 h-7"} />
  </button>
)}
      </div>

     {/* Mobile Menu Fullscreen */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-full h-screen bg-white z-50 overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 ">
        <img src="/images/logo.png" className="h-10" />
        <button onClick={() => setIsMobileMenuOpen(false)}>
          <X className="w-7 h-7 text-dark" />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col px-6 py-4">

        {mainMenu.map((item) => {
          const subMenu = getSubMenu(item.id);

          return (
            <div key={item.id} className=" py-3">
              
              {/* Main Menu */}
              <div className="flex justify-between items-center">
                <Link
                  href={getPath(item.url)}
                 className="text-lg font-semibold text-dark hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>

                {subMenu.length > 0 && (
                  <button onClick={() => toggleMenu(item.id)}>
                    <ChevronDown
                      className={`w-5 h-5 transition ${
                        openMenu[item.id] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Submenu */}
              {openMenu[item.id] && (
                <div className="pl-4 mt-3 flex flex-col gap-3">
                  {subMenu.map((sub) => {
                    const Icon = iconMap[sub.icon];
                    const nested = getSubMenu(sub.id);

                    return (
                      <div key={sub.id}>
                        <div className="flex justify-between items-center">
                          <Link
                            href={getPath(sub.url)}
                            className="flex items-center gap-3 text-gray-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {Icon && (
                              <Icon className="w-4 h-4 text-primary" />
                            )}
                            {sub.title}
                          </Link>

                          {nested.length > 0 && (
                            <button onClick={() => toggleSubMenu(sub.id)}>
                              <ChevronDown
                                className={`w-4 h-4 transition ${
                                  openSubMenu[sub.id] ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Nested submenu */}
                        {openSubMenu[sub.id] && (
                          <div className="pl-6 mt-2 flex flex-col gap-2">
                            {nested.map((child) => {
                              const ChildIcon = iconMap[child.icon];
                              return (
                                <Link
                                  key={child.id}
                                  href={getPath(child.url)}
                                  className="flex items-center gap-2 text-gray-500"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {ChildIcon && (
                                    <ChildIcon className="w-4 h-4 text-primary" />
                                  )}
                                  {child.title}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Button */}
        <Link
          href="/contact"
          className="btn-primary w-full mt-6 text-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}