import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shubham Singh | AI Educator & Creative Developer',
  description:
    'I Make Tech, AI & Design Simple — So You Can Do More. 400K+ students across 190+ countries on 21+ platforms.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`${jakarta.className} antialiased bg-[#0d0d0d]`}>
        {children}
      </body>
    </html>
  );
}
