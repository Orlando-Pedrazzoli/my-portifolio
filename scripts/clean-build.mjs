// scripts/clean-build.mjs
// Apaga o output e a cache do build anterior (.next) antes de `next build`.
// A Vercel repõe .next/cache entre deploys; partir do zero garante que o CSS
// e os manifests são sempre gerados a partir do código deste commit.
// Não afeta `next dev`, que usa .next/dev.
import { rmSync } from 'node:fs';

rmSync('.next', { recursive: true, force: true });
console.log('[build] .next removida — build limpo.');
