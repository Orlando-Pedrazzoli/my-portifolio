// src/components/ui/Figure.tsx
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import manifest from '@/content/images.json';
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

type Manifest = Record<string, { width: number; height: number }>;
const images = manifest as Manifest;
const EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];

/**
 * Resolve a imagem no manifesto gerado em build (scripts/images-manifest.mjs).
 * Aceita qualquer extensão: se o conteúdo diz "x.webp" e existe "x.jpg", usa
 * o .jpg. Devolve null se a imagem ainda não existir em public/work.
 */
function resolve(src: string) {
  if (images[src]) return { src, ...images[src] };
  const base = src.replace(/\.[a-z0-9]+$/i, '');
  for (const ext of EXTENSIONS) {
    const key = base + ext;
    if (images[key]) return { src: key, ...images[key] };
  }
  return null;
}

/**
 * Server Component. Screenshot num frame de 1px com legenda em mono.
 * Se a imagem ainda não existir, mostra um frame vazio com a legenda —
 * o layout não parte enquanto os screenshots não chegam.
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

  const img = figure.src ? resolve(figure.src) : null;

  return (
    <figure className={cn(className)}>
      <div className='figure'>
        {img ? (
          <Image
            src={img.src}
            alt={figure.alt[locale]}
            width={figure.width ?? img.width}
            height={figure.height ?? img.height}
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
