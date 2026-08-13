// import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
// import '../styles/globals.css';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import CustomCursor from '@/components/CustomCursor';
// import ScrollToTop from '@/components/ScrollToTop';
// import WhatsAppButton from '@/components/WhatsAppButton';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
//   variable: '--font-sans',
// });

// export const metadata: Metadata = {
//   icons: {
//     icon: "/images/icon.png",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
//       <body className="antialiased font-sans overflow-x-hidden" suppressHydrationWarning>
//         <CustomCursor />
//         <Navbar />
//         {children}
       
//        <ScrollToTop />
//       <WhatsAppButton />
      
//       </body>
//     </html>
//   );
// }
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import FooterWrapper from '@/components/FooterWrapper';
import Navbar from '@/components/Navbar';
import { getMenu } from '@/lib/backend-api';

import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  icons: {
    icon: '/images/icon.png',
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getMenu();

  return (
    <html
      lang="en"
      className={`${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="antialiased font-sans overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* <CustomCursor /> */}

        <Navbar initialMenu={menu} />

        {children}
        <FooterWrapper />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}