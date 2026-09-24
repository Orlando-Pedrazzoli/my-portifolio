// src/content/work/index.ts
import type { WorkCase } from '../types';
import { cdcManager } from './cdc-manager';
import { surfersParadise } from './surfers-paradise';
import { chiSublime } from './chi-sublime';
import { growkindWorld } from './growkind-world';
import { ferriSchoedl } from './ferri-schoedl';
import {
  centroDentarioColombo,
  eliteSurfingBrasil,
  goPortugalTours,
  streetPaint,
} from './more';

/** Ordem = ordem de apresentação. */
export const work: WorkCase[] = [
  cdcManager,
  surfersParadise,
  chiSublime,
  growkindWorld,
  ferriSchoedl,
  centroDentarioColombo,
  eliteSurfingBrasil,
  goPortugalTours,
  streetPaint,
];

/** Quatro cases principais; o primeiro é o case de destaque (grande). */
export const selectedWork = work.filter(w => w.selected);
export const featured = selectedWork[0];
/** Os restantes entram em "Mais trabalho" — lista compacta, todos com página. */
export const moreWork = work.filter(w => !w.selected);

export const getCase = (slug: string) => work.find(w => w.slug === slug);
