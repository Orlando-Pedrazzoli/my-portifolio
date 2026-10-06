// src/components/ui/Figure.tsx
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Figure as FigureData } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { hostOf, resolveImage } from '@/lib/site';
import { BrowserFrame, PhoneFrame } from './Device';

/**
 * - `none`: frame simples de 1px (comportamento antigo).
 * - `browser` / `phone`: moldura de dispositivo.
 * - `auto`: decide pela proporção da imagem — retrato → telemóvel,
 *   paisagem → browser. Os conteúdos não precisam de saber nada de molduras.
 */
export type DeviceKind = 'none' | 'browser' | 'phone' | 'auto';

interface Props {
  figure: FigureData;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Se true, esconde a legenda (usado em cards). */
  bare?: boolean;
  device?: DeviceKind;
  /** URL público do projeto: o domínio vai para a barra do browser, com cadeado. */
  url?: string;
  /** Sem URL público (ex.: sistema interno): nome mostrado na barra, sem cadeado. */
  label?: string;
  /** Classes extra para a moldura (ex.: variante "bleed" dentro de um palco). */
  frameClassName?: string;
}

/** Retrato claro (telemóvel) vs. paisagem (desktop). */
const PORTRAIT_RATIO = 1.2;

/**
 * Server Component. Screenshot numa moldura (browser, telemóvel ou frame de
 * 1px) com legenda em mono. Se a imagem ainda não existir, mostra a moldura
 * vazia com a legenda — o layout não parte enquanto os screenshots não chegam.
 */
export default async function Figure({
  figure,
  priority,
  className,
  sizes,
  bare,
  device = 'none',
  url,
  label,
  frameClassName,
}: Props) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('common');

  const img = figure.src ? resolveImage(figure.src) : null;

  const kind: Exclude<DeviceKind, 'auto'> =
    device === 'auto'
      ? img && img.height / img.width > PORTRAIT_RATIO
        ? 'phone'
        : 'browser'
      : device;

  const media = img ? (
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
  );

  let frame: React.ReactNode;
  if (kind === 'browser') {
    frame = (
      <BrowserFrame
        address={url ? hostOf(url) : label}
        secure={Boolean(url)}
        className={frameClassName}
      >
        {media}
      </BrowserFrame>
    );
  } else if (kind === 'phone') {
    frame = <PhoneFrame className={frameClassName}>{media}</PhoneFrame>;
  } else {
    frame = <div className={cn('figure', frameClassName)}>{media}</div>;
  }

  return (
    <figure className={cn(className)}>
      {frame}
      {!bare && (
        <figcaption className='eyebrow mt-3 normal-case tracking-normal'>
          {figure.caption[locale]}
        </figcaption>
      )}
    </figure>
  );
}
