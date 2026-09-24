// src/app/[locale]/page.tsx
// Homepage com blocos intencionais, por esta ordem:
// Hero → dois caminhos → trabalho selecionado (+ mais trabalho) →
// o que construo → princípios → percurso → stack → contacto.
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Paths from '@/components/home/Paths';
import SelectedWork from '@/components/home/SelectedWork';
import Capabilities from '@/components/home/Capabilities';
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
      <Paths />
      <SelectedWork />
      <Capabilities />
      <Principles />
      <Trajectory />
      <Stack />
      <Contact />
    </>
  );
}
