"use client";

import { useEffect, useState } from "react";
import axios from "axios";
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
  phone: "+91 9876543210",
  email: "info@grehasoft.com",
  address: "Grehasoft Technologies, Bangalore, India",
  facebook: "https://facebook.com/grehasoft",
  twitter: "https://twitter.com/grehasoft",
  instagram: "https://instagram.com/grehasoft",
  linkedin: "https://linkedin.com/company/grehasoft",
};

export default function Footer({
  initialData,
  initialMenu,
}: {
  initialData?: any;
  initialMenu?: any[];
}) {
  const [footerState, setFooterState] = useState<any>(initialData || null);
  const [menu, setMenu] = useState<any[]>(initialMenu || []);
  const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  const footer = footerState || DEFAULT_FOOTER;

  const socialLinks = Object.keys(socialMap)
    .map((key) => ({
      icon: socialMap[key],
      href: footer?.[key],
    }))
    .filter((item) => item.href);

  useEffect(() => {
    const fetchData = async () => {
      if (!initialData) {
        try {
          const footerRes = await axios.get(
            `${API}/pages?slug=footer&_fields=acf`
          );
          setFooterState(footerRes.data?.[0]?.acf || null);
        } catch (err: any) {
          console.warn("Footer ACF Error:", err?.message || err);
        }
      } else {
        setFooterState(initialData);
      }

      if (!initialMenu || initialMenu.length === 0) {
        try {
          const menuRes = await axios.get(
            "https://antiquewhite-swan-450844.hostingersite.com/wp-json/custom/v1/menu/footer-menu"
          );
          setMenu(menuRes.data || []);
        } catch (err: any) {
          console.warn("Footer Menu Error:", err?.message || err);
          setMenu([]);
        }
      } else {
        setMenu(initialMenu);
      }
    };

    fetchData();
  }, [initialData, initialMenu, API]);

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
    <footer className="bg-dark text-white pt-20 pb-10 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo.png"
                alt="Grehasoft"
                className="h-8 w-auto transition-all duration-300 mb-5"
              />
            </Link>

            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
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
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-8 text-white">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link: any, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href || "#"}
                      className="text-white/60 hover:text-accent transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10 mb-20">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">
                Call Us
              </p>
              <p className="text-lg font-bold">
                {footer?.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">
                Email Us
              </p>
              <p className="text-lg font-bold">
                {footer?.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
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
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 gap-6">
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