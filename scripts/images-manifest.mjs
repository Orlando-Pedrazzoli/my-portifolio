// scripts/images-manifest.mjs
// Gera src/content/images.json com {caminho: {width, height}} de tudo o que
// está em public/work. Corre antes de dev/build (ver package.json), para o
// Figure não precisar de ler o sistema de ficheiros em tempo de render —
// na Vercel a pasta public/ não existe dentro das funções.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { imageSize } from 'image-size';

const ROOT = process.cwd();
const PUBLIC = join(ROOT, 'public');
const SCAN = join(PUBLIC, 'work');
const OUT = join(ROOT, 'src', 'content', 'images.json');
const EXT = /\.(webp|jpe?g|png|avif)$/i;

function walk(dir, acc = []) {
  let entries = [];
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (EXT.test(e.name)) acc.push(p);
  }
  return acc;
}

const manifest = {};
for (const file of walk(SCAN)) {
  try {
    const { width, height } = imageSize(readFileSync(file));
    if (!width || !height) continue;
    const url = '/' + relative(PUBLIC, file).split(sep).join('/');
    manifest[url] = { width, height };
  } catch (err) {
    console.warn(`[images-manifest] ignorado ${file}: ${err.message}`);
  }
}

mkdirSync(join(ROOT, 'src', 'content'), { recursive: true });
writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n');
console.log(
  `[images-manifest] ${Object.keys(manifest).length} imagens → src/content/images.json`,
);
