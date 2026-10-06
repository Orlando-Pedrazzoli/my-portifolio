// scripts/build.mjs
// DIAGNÓSTICO TEMPORÁRIO — a remover assim que a causa estiver identificada.
//
// Sintoma: em produção o HTML sai novo mas referencia um CSS antigo.
// Este wrapper faz um build limpo, regista o que o build realmente emitiu
// (ficheiros CSS, referências no HTML/RSC) em public/build-info.json e volta
// a correr o build para que esse ficheiro seja publicado.
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';

const sha1 = buf => createHash('sha1').update(buf).digest('hex').slice(0, 12);
const count = (s, needle) => s.split(needle).length - 1;
const ls = dir => (existsSync(dir) ? readdirSync(dir) : null);

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function cssRefs(file) {
  if (!existsSync(file)) return null;
  const txt = readFileSync(file, 'utf8');
  return [...new Set(txt.match(/\/_next\/static\/[^"'\\ )]+\.css/g) ?? [])];
}

function inspectBuild() {
  const css = walk('.next/static')
    .filter(f => f.endsWith('.css'))
    .map(f => {
      const txt = readFileSync(f, 'utf8');
      return {
        file: f.replaceAll('\\', '/'),
        bytes: txt.length,
        sha1: sha1(txt),
        deviceRules: count(txt, '.device-'),
        hasFigurePhone: txt.includes('.figure-phone'),
      };
    });
  return {
    css,
    refs: {
      'pt.rsc': cssRefs('.next/server/app/pt.rsc'),
      'pt.html': cssRefs('.next/server/app/pt.html'),
      'en.html': cssRefs('.next/server/app/en.html'),
    },
    buildId: existsSync('.next/BUILD_ID')
      ? readFileSync('.next/BUILD_ID', 'utf8').trim()
      : null,
  };
}

function nextBuild() {
  const r = spawnSync(
    process.execPath,
    ['node_modules/next/dist/bin/next', 'build'],
    { stdio: 'inherit' },
  );
  if (r.status !== 0) process.exit(r.status ?? 1);
}

const globals = readFileSync('src/app/globals.css', 'utf8');

const info = {
  at: new Date().toISOString(),
  env: {
    VERCEL: process.env.VERCEL ?? null,
    VERCEL_ENV: process.env.VERCEL_ENV ?? null,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
    VERCEL_DEPLOYMENT_ID: process.env.VERCEL_DEPLOYMENT_ID ?? null,
    NEXT_DEPLOYMENT_ID: process.env.NEXT_DEPLOYMENT_ID ?? null,
    node: process.version,
  },
  source: {
    globalsSha1: sha1(globals),
    globalsBytes: globals.length,
    globalsDeviceRules: count(globals, '.device-'),
    globalsHasFigurePhone: globals.includes('.figure-phone'),
  },
  before: {
    dotNext: ls('.next'),
    dotNextCache: ls('.next/cache'),
    nodeModulesCache: ls('node_modules/.cache'),
  },
};

// 1) Build limpo: nada reaproveitado do deploy anterior.
rmSync('.next', { recursive: true, force: true });
rmSync('node_modules/.cache', { recursive: true, force: true });
nextBuild();
info.cleanBuild = inspectBuild();
writeFileSync('public/build-info.json', JSON.stringify(info, null, 2));

// 2) Segundo build (cache quente do passo 1) só para publicar o relatório.
nextBuild();
info.finalBuild = inspectBuild();
writeFileSync('public/build-info.json', JSON.stringify(info, null, 2));
console.log('[build-info]', JSON.stringify(info));
