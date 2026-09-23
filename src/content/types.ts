// src/content/types.ts
import type { Locale } from '@/i18n/routing';

export type Bilingual<T = string> = Record<Locale, T>;

export interface Figure {
  /** Caminho em /public. Se omitido, a UI mostra um frame vazio com a legenda. */
  src?: string;
  width?: number;
  height?: number;
  caption: Bilingual;
  alt: Bilingual;
}

export interface Decision {
  title: Bilingual;
  body: Bilingual;
}

export interface WorkCase {
  slug: string;
  title: string;
  /** Uma linha: o que é, para quem. */
  tagline: Bilingual;
  client: Bilingual;
  year: string;
  status: Bilingual;
  liveUrl?: string;
  repoUrl?: string;
  /** Aparece na home em "Trabalho selecionado". */
  selected?: boolean;
  cover?: Figure;
  context: Bilingual<string[]>;
  problem: Bilingual<string[]>;
  role: Bilingual;
  solution: Bilingual<string[]>;
  features: Bilingual<string[]>;
  decisions: Decision[];
  architecture?: Bilingual<string[]>;
  result: Bilingual<string[]>;
  stack: string[];
  figures: Figure[];
}
