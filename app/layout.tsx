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

export const metadata: Metadata = {
  title: 'Grehasoft | Modern IT Solutions & Digital Agency',
  description: 'Grehasoft is a leading IT company providing premium software solutions, digital marketing, and PMS products.',
  keywords: ['IT Company', 'Software Development', 'PMS', 'Digital Agency', 'Grehasoft'],
 icons: {
    icon: '/images/icon.png',
  },
  robots: {
    index: false,
    follow: false,
  },
};

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
