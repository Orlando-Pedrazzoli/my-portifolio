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

export const featured = cdcManager;
export const selectedWork = work.filter(w => w.selected);
export const moreWork = work.filter(
  w => !w.selected && w.slug !== featured.slug,
);

export const getCase = (slug: string) => work.find(w => w.slug === slug);
