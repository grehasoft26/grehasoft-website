import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch(
    "https://cms.grehasoft.com/wp-json/wp/v2/pages/1072?_fields=yoast_head_json",
    { next: { revalidate: 60 } }
  );

  const page = await res.json();
console.log(page.yoast_head_json);
  return {
    
   title: page?.yoast_head_json?.title || "GrehaSoft",
  description: page?.yoast_head_json?.description || "",

  alternates: {
     canonical: page?.yoast_head_json?.og_url,
  },

  openGraph: {
    title: page?.yoast_head_json?.og_title,
    description: page?.yoast_head_json?.og_description,
    url: page?.yoast_head_json?.og_url,
    images: page?.yoast_head_json?.og_image?.map(
      (img: { url: string }) => img.url
    ) || [],
  },

    icons: {
      icon: "/images/icon.png", // adjust path if needed
    },

    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased font-sans overflow-x-hidden" suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        {children}
       
       <ScrollToTop />
      <WhatsAppButton />
      
      </body>
    </html>
  );
}
