// src/content/types.ts
import type { Locale } from '@/i18n/routing';

export type Bilingual<T = string> = Record<Locale, T>;

export interface Figure {
  /** Caminho em /public. Se omitido, a UI mostra um frame vazio com a legenda. */
  src?: string;
  width?: number;
  height?: number;
  /** A legenda explica o que o screenshot demonstra — nunca só "Dashboard". */
  caption: Bilingual;
  alt: Bilingual;
}

export interface Decision {
  title: Bilingual;
  body: Bilingual;
}

/** Métrica curta e verificável: "34 / 37" + "requisitos entregues". */
export interface Metric {
  value: string;
  label: Bilingual;
}

export interface WorkCase {
  slug: string;
  title: string;
  /** Uma linha de impacto orientada ao negócio (título do card e do case). */
  headline: Bilingual;
  /** Categoria curta para o card: "Plataforma de operações dentárias". */
  category: Bilingual;
  /** 2–4 etiquetas de trabalho, não tecnologias: Product · Full stack · SaaS. */
  tags: Bilingual<string[]>;
  /** Uma linha: o que é, para quem. */
  tagline: Bilingual;
  client: Bilingual;
  year: string;
  status: Bilingual;
  liveUrl?: string;
  repoUrl?: string;
  /** Aparece na home em "Trabalho selecionado" (o primeiro é o case principal). */
  selected?: boolean;
  cover?: Figure;
  /** Até 3 números reais. Sem métricas, sem invenções: o array fica vazio. */
  metrics: Metric[];
  context: Bilingual<string[]>;
  problem: Bilingual<string[]>;
  role: Bilingual;
  /** Restrições reais do projeto — demonstram senioridade. */
  constraints?: Bilingual<string[]>;
  solution: Bilingual<string[]>;
  features: Bilingual<string[]>;
  decisions: Decision[];
  architecture?: Bilingual<string[]>;
  result: Bilingual<string[]>;
  /** O que aprendi / o que mudaria numa segunda iteração. */
  learned?: Bilingual<string[]>;
  stack: string[];
  figures: Figure[];
}
