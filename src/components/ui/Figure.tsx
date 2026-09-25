// src/components/ui/Figure.tsx
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Figure as FigureData } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { resolveImage } from '@/lib/site';

interface Props {
  figure: FigureData;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Se true, esconde a legenda (usado em cards). */
  bare?: boolean;
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

  const img = figure.src ? resolveImage(figure.src) : null;

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
