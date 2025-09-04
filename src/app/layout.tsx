import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Portfolio - Full Stack Developer & AI Engineer',
  description:
    'Desenvolvedor Full Stack especializado em criar aplicações web modernas com integração de IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className='bg-gray-950 text-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
