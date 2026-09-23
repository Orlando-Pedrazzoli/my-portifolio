// src/components/ui/Figure.tsx
import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { imageSize } from 'image-size';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Figure as FigureData } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface Props {
  figure: FigureData;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Se true, esconde a legenda (usado em cards). */
  bare?: boolean;
}

const EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];

/**
 * Resolve o ficheiro em /public a partir do caminho do conteúdo.
 * Aceita qualquer extensão da lista: se o conteúdo diz "x.webp" e existe
 * "x.jpg", usa o .jpg. Devolve null se nenhum existir.
 */
function resolveFile(src: string) {
  const publicDir = path.join(process.cwd(), 'public');
  const exact = path.join(publicDir, src);
  if (fs.existsSync(exact)) return { file: exact, src };

  const base = src.replace(/\.[a-z0-9]+$/i, '');
  for (const ext of EXTENSIONS) {
    const candidate = path.join(publicDir, base + ext);
    if (fs.existsSync(candidate)) return { file: candidate, src: base + ext };
  }
  return null;
}

/** Lê as dimensões do cabeçalho do ficheiro (JS puro, sem binários nativos). */
function readSize(file: string) {
  try {
    const { width, height } = imageSize(fs.readFileSync(file));
    return width && height ? { width, height } : null;
  } catch {
    return null;
  }
}

/**
 * Server Component. Screenshot num frame de 1px com legenda em mono.
 * Se o ficheiro ainda não existir em /public, mostra um frame vazio com a
 * legenda — o layout não parte enquanto os screenshots não chegam.
 */
export default async function Figure({
  figure,
  priority,
  className,
  sizes,
  bare,
}: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('common');

  const resolved = figure.src ? resolveFile(figure.src) : null;
  const size =
    resolved &&
    (figure.width && figure.height
      ? { width: figure.width, height: figure.height }
      : readSize(resolved.file));

  return (
    <figure className={cn(className)}>
      <div className='figure'>
        {resolved && size ? (
          <Image
            src={resolved.src}
            alt={figure.alt[locale]}
            width={size.width}
            height={size.height}
            priority={priority}
            sizes={sizes ?? '(min-width: 1024px) 60vw, 100vw'}
          />
        ) : (
          <div className='figure-empty'>{t('screenshotPending')}</div>
        )}
      </div>
      {!bare && (
        <figcaption className='eyebrow mt-3 normal-case tracking-normal'>
          {figure.caption[locale]}
        </figcaption>
      )}
    </figure>
  );
}
