// scripts/clean-build-cache.mjs
// Apaga a cache de build do Next (.next/cache) antes de cada `next build`.
//
// Porquê: num deploy na Vercel o HTML saiu novo mas o CSS veio da cache do
// build anterior — a página referenciava classes (device-*) que não existiam
// no stylesheet servido. A Vercel repõe .next/cache entre deploys; ao apagá-la
// aqui, o build parte sempre do zero. O site compila em segundos, por isso o
// custo é irrelevante. Não afeta `next dev` (usa .next/dev).
import { rmSync } from 'node:fs';

rmSync('.next/cache', { recursive: true, force: true });
console.log('[build] .next/cache removida — build limpo.');
