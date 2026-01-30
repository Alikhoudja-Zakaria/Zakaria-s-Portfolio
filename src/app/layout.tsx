import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Zakaria Alikhoudja Portfolio',
  description: 'The personal portfolio of Zakaria Alikhoudja, showcasing skills in AI, robotics, and web development.',
  icons: {
    icon: 'https://res.cloudinary.com/dof5da1cj/image/upload/v1769731774/Gemini_Generated_Image_gqroougqroougqro_f4ojm6.png',
  },
  verification: {
    google: 'googlec3d94fc5cab87112',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
