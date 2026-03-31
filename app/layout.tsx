import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Grehasoft | Modern IT Solutions',
  description: 'Grehasoft is a leading IT company providing premium software solutions, digital marketing, and PMS products.',
  keywords: ['IT Company', 'Software Development', 'PMS', 'Digital Agency', 'Grehasoft'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased font-sans overflow-x-hidden relative" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
