// src/app/[locale]/work/[slug]/opengraph-image.tsx
// Imagem Open Graph dedicada por case study (1200×630), gerada em build com
// ImageResponse: título, categoria, tagline e o screenshot de capa. Substitui
// o screenshot "cru" de proporção arbitrária que era usado como og:image.
// twitter-image.tsx reutiliza este mesmo gerador.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { routing, type Locale } from '@/i18n/routing';
import { work, getCase } from '@/content/work';
import { site, resolveImage } from '@/lib/site';

// Gerar em build (SSG), como as páginas: na Vercel uma função não vê /public.
export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    work.map(w => ({ locale, slug: w.slug })),
  );
}

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Orlando Pedrazzoli — case study';

type Params = Promise<{ locale: string; slug: string }>;

/** Lê a capa de /public (build) e devolve um data URL; se não houver
    sistema de ficheiros (função), vai buscá-la ao site em produção. */
async function coverDataUrl(src?: string) {
  if (!src) return null;
  const img = resolveImage(src);
  if (!img) return null;
  const ext = img.src.split('.').pop()?.toLowerCase();
  const mime =
    ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
  try {
    const buf = readFileSync(join(process.cwd(), 'public', img.src));
    return { url: `data:${mime};base64,${buf.toString('base64')}`, ...img };
  } catch {
    try {
      const res = await fetch(`${site.url}${img.src}`);
      if (!res.ok) return null;
      const buf = Buffer.from(await res.arrayBuffer());
      return { url: `data:${mime};base64,${buf.toString('base64')}`, ...img };
    } catch {
      return null;
    }
  }
}

export default async function Image({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const l = locale as Locale;
  const c = getCase(slug);
  const cover = await coverDataUrl(c?.cover?.src);

  // Paleta = tokens de globals.css (tema claro).
  const paper = '#fcfcfc';
  const ink = '#0b0d10';
  const ink2 = '#3f434a';
  const ink3 = '#737780';
  const line = '#e4e6e9';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: paper,
          color: ink,
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Coluna de texto */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: cover ? 640 : 1200,
            padding: '64px 56px 56px 64px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: ink3,
              }}
            >
              {c ? c.category[l] : 'Case study'}
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 64,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: -2,
              }}
            >
              {c?.title ?? site.name}
            </div>
            {c && (
              <div
                style={{
                  marginTop: 24,
                  fontSize: 26,
                  lineHeight: 1.35,
                  color: ink2,
                }}
              >
                {c.headline[l]}
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 20,
              color: ink3,
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontWeight: 700, color: ink, whiteSpace: 'nowrap' }}>
              {site.name}
            </span>
            <span>·</span>
            <span style={{ whiteSpace: 'nowrap' }}>
              {l === 'pt'
                ? 'Full Stack Developer em Lisboa'
                : 'Full Stack Developer in Lisbon'}
            </span>
          </div>
        </div>

        {/* Screenshot de capa, num frame de 1px, a sair pela direita/baixo */}
        {cover && (
          <div
            style={{
              position: 'absolute',
              left: 640,
              top: 96,
              width: 720,
              height: 600,
              display: 'flex',
              border: `1px solid ${line}`,
              borderRadius: 8,
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 24px 64px rgba(11,13,16,0.12)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover.url}
              width={720}
              height={Math.round((720 * cover.height) / cover.width)}
              style={{ objectFit: 'cover', objectPosition: 'top left' }}
              alt=''
            />
          </div>
        )}
      </div>
    ),
    size,
  );
}
