// src/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { sans, mono } from '@/lib/fonts';
import { absoluteUrl, languageAlternates } from '@/lib/site';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/layout/StructuredData';
import ThemeScript from '@/components/layout/ThemeScript';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(absoluteUrl(routing.defaultLocale)),
    title: { default: t('title'), template: `%s — Orlando Pedrazzoli` },
    description: t('description'),
    alternates: {
      canonical: absoluteUrl(l),
      languages: languageAlternates(),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: absoluteUrl(l),
      siteName: 'Orlando Pedrazzoli',
      locale: l === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: { google: 'gvmu36gpY8cEDhuxWZsByZ7n8QS_1QxwkOWWwEaje4k' },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <head>
        {/* Tema antes do primeiro paint: localStorage > prefers-color-scheme */}
        <ThemeScript />
        <StructuredData locale={locale as Locale} />
      </head>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
