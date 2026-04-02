'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
  Monitor,
  Code,
  Globe,
  ShoppingBag,
  Megaphone,
  Cpu,
  Palette,
  PenTool,
  CreditCard,
  Search,
  Target,
  Share2,
  Trophy,
  BookOpen
} from 'lucide-react';

const iconMap: any = {
  // About
  "book-open": BookOpen,     // Our Story
  "trophy": Trophy,          // Awards

  // Services
  monitor: Monitor,
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

export default function Navbar() {
  const [menu, setMenu] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile dropdown states
  const [openMenu, setOpenMenu] = useState<any>({});
  const [openSubMenu, setOpenSubMenu] = useState<any>({});

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

  // Fix URL issue and map WP routes to local routes
  const getPath = (url: string) => {
    if (!url) return "#";
    
    let path = url;
    if (url.startsWith("http")) {
      path = new URL(url).pathname;
    }
    
    // Map WordPress menu URLs to our local Next.js structure
    // remove trailing slash for comparison
    const cleanPath = path.replace(/\/$/, "");
    if (cleanPath === '/about/our-story') return '/about/brand-story';
    if (cleanPath === '/about/award-recognitions' || cleanPath === '/about/awards-recognitions') return '/about/awards';
    
    return path;
  };

  useEffect(() => {
    fetch("https://antiquewhite-swan-450844.hostingersite.com/wp-json/custom/v1/menu")
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainMenu = menu.filter(item => item.parent == 0);
  const getSubMenu = (id: any) => menu.filter(item => item.parent == id);

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    )}>
      <div className="container-custom flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Grehasoft" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {mainMenu.map((item) => (
            <div key={item.id} className="relative group">
              <Link
                href={getPath(item.url)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent flex items-center gap-1',
                  isScrolled ? 'text-dark' : 'text-white'
                )}
              >
                {item.title}
                {getSubMenu(item.id).length > 0 && (
                  <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition" />
                )}
              </Link>

              {/* Dropdown */}
              {getSubMenu(item.id).length > 0 && (
                <div
  className={cn(
    "absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block",
    item.title === "Services" ? "w-80" : "w-56"
  )}
>
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 flex flex-col">

                    {getSubMenu(item.id).map((sub) => {
                      const Icon = iconMap[sub.icon];
                      const nested = getSubMenu(sub.id);

                      return (
                        <div key={sub.id} className="relative group/sub">
                          <Link
                            href={getPath(sub.url)}
                            className="px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-primary transition-all flex items-center justify-between rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              {Icon && <Icon className="w-5 h-5 text-primary" />}
                              {sub.title}
                            </div>

                            {nested.length > 0 && (
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover/sub:text-primary" />
                            )}
                          </Link>

                          {/* Nested submenu */}
                          {nested.length > 0 && (
                            <div className="absolute top-0 left-full pl-3 hidden group-hover/sub:block w-56">
                              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 flex flex-col">
                                {nested.map((child) => {
                                  const ChildIcon = iconMap[child.icon];
                                  return (
                                    <Link
                                      key={child.id}
                                      href={getPath(child.url)}
                                      className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors flex items-center gap-3 rounded-lg"
                                    >
                                      {ChildIcon && <ChildIcon className="w-4 h-4 text-primary" />}
                                      {child.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                        </div>
                      );
                    })}

                  </div>
                </div>
              )}
            </div>
          ))}

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