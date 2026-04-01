'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Monitor, Code, Globe, ShoppingBag, Megaphone, Cpu, Palette, PenTool, CreditCard } from 'lucide-react';
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
   { 
    name: 'Services', 
    href: '/services',
    subItems: [
      { name: 'Website Design', href: '/services/website-design', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Website Development', href: '/services/website-development', icon: <Code className="w-4 h-4" /> },
      { name: 'WordPress Websites', href: '/services/wordpress-websites', icon: <Globe className="w-4 h-4" /> },
      { name: 'E-Commerce Websites', href: '/services/ecommerce-websites', icon: <ShoppingBag className="w-4 h-4" /> },
      { name: 'Digital Marketing', href: '/services/digital-marketing', icon: <Megaphone className="w-4 h-4" /> },
      { name: 'Software Programming', href: '/services/software-programming', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Graphic Design', href: '/services/graphic-design', icon: <Palette className="w-4 h-4" /> },
      { name: 'Logo Design', href: '/services/logo-design', icon: <PenTool className="w-4 h-4" /> },
      { name: 'Visiting Cards & Letter Heads', href: '/services/visiting-cards-letter-heads', icon: <CreditCard className="w-4 h-4" /> },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Products', href: '/products' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

function MobileMenuItem({ link, setIsMobileMenuOpen }: { link: any, setIsMobileMenuOpen: (val: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Link 
          href={link.href} 
          className="text-lg font-medium text-dark hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.name}
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-1 text-dark hover:text-primary transition-colors"
        >
          <ChevronDown className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")} />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden flex flex-col gap-3 pl-4 pt-2"
          >
            {link.subItems.map((subItem: any) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors py-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-primary">{subItem.icon}</span>
                {subItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
<Link href="/" className="flex items-center gap-2 group">
  <img
    src="/images/logo.png"
    alt="Grehasoft"
    className="h-10 w-auto transition-all duration-300"
  />
</Link>
       {/* <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className={cn(
              'text-2xl font-bold tracking-tight transition-colors',
              isScrolled ? 'text-dark' : 'text-white'
            )}>
              Greha<span className="text-accent">soft</span>
            </span>
          </div>
        </Link>*/}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent flex items-center gap-1',
                  isScrolled ? 'text-dark' : 'text-white'
                )}
              >
                {link.name}
                {link.subItems && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:-rotate-180 duration-300" />
                )}
              </Link>

              {link.subItems && (
                <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-72">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 overflow-hidden flex flex-col">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors flex items-center gap-3"
                      >
                        <span className="text-primary/70">{subItem.icon}</span>
                        {subItem.name}
                      </Link>
                    ))}
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
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden shadow-xl"
          >
            <div className="container-custom py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subItems ? (
                    <MobileMenuItem link={link} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                  ) : (
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-dark hover:text-primary transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="btn-primary w-full mt-4"
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
