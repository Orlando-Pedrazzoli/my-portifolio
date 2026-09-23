// src/app/[locale]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Capabilities from '@/components/home/Capabilities';
import FeaturedCase from '@/components/home/FeaturedCase';
import SelectedWork from '@/components/home/SelectedWork';
import Principles from '@/components/home/Principles';
import Trajectory from '@/components/home/Trajectory';
import Stack from '@/components/home/Stack';
import Contact from '@/components/home/Contact';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedCase />
      <SelectedWork />
      <Principles />
      <Trajectory />
      <Stack />
      <Contact />
    </>
  );
}
