import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const maven = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jake - Frontend Developer',
  description: 'Jake H. - Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={maven.className}>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
