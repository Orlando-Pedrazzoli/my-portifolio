// scripts/images-manifest.mjs
// Gera src/content/images.json com {caminho: {width, height}} de tudo o que
// está em public/work. É chamado pelo next.config.ts (corre em qualquer build,
// incluindo `next build` direto na Vercel) e também via `npm run images`.
// Na Vercel a pasta public/ não existe dentro das funções, por isso o Figure
// não pode ler o sistema de ficheiros em tempo de render.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize } from 'image-size';

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

/** Gera o manifesto e devolve o número de imagens encontradas. */
export function generateImagesManifest(root = process.cwd()) {
  const PUBLIC = join(root, 'public');
  const SCAN = join(PUBLIC, 'work');
  const OUT = join(root, 'src', 'content', 'images.json');

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

  mkdirSync(join(root, 'src', 'content'), { recursive: true });
  writeFileSync(OUT, JSON.stringify(manifest, null, 2) + '\n');
  const count = Object.keys(manifest).length;
  console.log(`[images-manifest] ${count} imagens → src/content/images.json`);
  return count;
}

// Execução direta: `node scripts/images-manifest.mjs`
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  generateImagesManifest();
}
