"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { getPage, getMenu } from "@/lib/backend-api";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
 
} from "lucide-react";
import { FaPinterest, FaTumblr } from "react-icons/fa";

const socialMap: any = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  pinterest: FaPinterest,
  tumblr: FaTumblr,
};

const DEFAULT_FOOTER = {
  description: "Grehasoft is a leading IT solutions provider specializing in cutting-edge software development, cloud services, and digital transformation.",
  phone: "+918921540183",
  email: "info@grehasoft.com",
  address: "Infopark Phase 1, Kakkanad, Kochi",
  facebook: "https://www.facebook.com/grehasoft/",
  twitter: "https://x.com/grehasoft",
  instagram: "https://www.instagram.com/grehasoft/",
  linkedin:   "https://www.linkedin.com/company/grehasoft/",
  pinterest:  "https://in.pinterest.com/grehasoft/",
};

interface FooterProps {
  initialData?: any;
  initialMenu?: any[];
}

export default function Footer({ initialData, initialMenu }: FooterProps) {
  const [footerState, setFooterState] = useState<any>(initialData || null);
  const [menu, setMenu] = useState<any[]>(initialMenu || []);

  const footer = footerState || DEFAULT_FOOTER;
  const socialLinks = Object.keys(socialMap)
    .map((key) => ({
      name: key,
      icon: socialMap[key],
      href: footer?.[key],
    }))
    .filter((item) => item.href);

  useEffect(() => {
    const fetchData = async () => {
      if (!initialData) {
        try {
          const footerPage = await getPage("footer");
          setFooterState(footerPage?.acf || null);
        } catch (err: any) {
          console.warn("Footer ACF Error:", err?.message || err);
        }
      } else {
        setFooterState(initialData);
      }

      if (!initialMenu || initialMenu.length === 0) {
        try {
          const footerMenuData = await getMenu("footer-menu");
          setMenu(footerMenuData || []);
        } catch (err: any) {
          console.warn("Footer Menu Error:", err?.message || err);
          setMenu([]);
        }
      } else {
        setMenu(initialMenu);
      }
    };

    fetchData();
  }, [initialData, initialMenu]);

  // ✅ Group menu into sections (Company / Services / Products)
 const groupedMenu: any = {};

const menuArray = Array.isArray(menu) ? menu : [];

menuArray.forEach((item) => {
  if (item.parent === "0") {
    groupedMenu[item.title] = [];
  } else {
    const parent = menuArray.find((m) => m.id == item.parent);
    if (parent) {
      if (!groupedMenu[parent.title]) {
        groupedMenu[parent.title] = [];
      }
      groupedMenu[parent.title].push({
        name: item.title,
        href: item.url,
      });
    }
  }
});

  const footerLinks = Object.keys(groupedMenu).map((key) => ({
    title: key,
    links: groupedMenu[key],
  }));

  return (
    <footer className="bg-dark text-white pt-12 pb-6 md:pt-14 md:pb-8 overflow-hidden">
      <div className="container-custom">
        {/* Phones: two columns, the brand block spanning both and the menus side by side (an odd last menu spans both,
            its links in two content-sized columns). From md the existing 2-column / 5-column layouts apply. */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8 md:gap-x-8 lg:gap-12 mb-10 md:mb-12">
          
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo.png"
                alt="Grehasoft"
                className="h-8 w-auto transition-all duration-300 mb-5"
              />
            </Link>

            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              {footer?.description || "Loading..."}
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
  <Link
    key={index}
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
  >
    <social.icon className="w-5 h-5" />
  </Link>
))}
            </div>
          </div>

          {/* Dynamic Menu */}
          {footerLinks.map((section, index) => {
            // On phones an odd last menu spans both columns, with its links in two columns, so no column is left empty.
            const spanOnPhone = footerLinks.length % 2 === 1 && index === footerLinks.length - 1;
            return (
            <div key={index} className={spanOnPhone ? 'col-span-2 md:col-span-1' : undefined}>
              <h3 className="text-lg font-bold mb-4 text-white">
                {section.title}
              </h3>

              <ul className={spanOnPhone ? 'grid grid-cols-[auto_auto] justify-start gap-x-8 gap-y-3 md:block md:space-y-3' : 'space-y-3'}>
                {section.links.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href || "#"}
                      className="text-white/60 hover:text-accent transition-colors flex items-center group"
                    >
                      {/* Hover arrow: hidden on phones (no hover there), so its reserved 20px does not make the narrow columns wrap. */}
                      <ArrowRight aria-hidden="true" className="hidden md:block w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>

        {/* Contact Info: stacked on phones; at md Call and Email side by side with the address on its own row (the
            email cannot break, and three columns are too narrow for it there); three columns from lg. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:gap-6 md:p-5 bg-white/5 rounded-box-lg border border-white/10 mb-10 md:mb-12">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">
                Call Us
              </p>
              <p className="text-lg font-bold">
                {footer?.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Mail className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">
                Email Us
              </p>
              <p className="text-lg font-bold">
                {footer?.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 shrink-0 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">
                Visit Us
              </p>
              <p className="text-sm font-bold">
                {footer?.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/10 gap-3 md:gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Grehasoft. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-white/40">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>

          <p className="text-white/40 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Grehasoft Team
          </p>
        </div>
      </div>
    </footer>
  );
}