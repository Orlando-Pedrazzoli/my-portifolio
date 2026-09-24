// src/app/[locale]/about/page.tsx
import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import { imageSize } from 'image-size';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { trajectory } from '@/content/home';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('aboutTitle') };
}

const intro = {
  pt: [
    'Nasci em São Paulo em 1981 e vivo em Portugal desde 2017. Passei a maior parte da vida adulta a construir empresas — a fabricar produto, negociar com fornecedores, contratar, vender, fechar — antes de fazer a transição para software em 2023.',
    'Isso muda a forma como programo. Quando um cliente descreve um problema, consigo ver a operação por trás dele: quem faz o quê, onde se perde tempo, o que acontece quando alguém se engana. O código vem depois disso, e é melhor por causa disso.',
    'Hoje divido o tempo entre a Pedrazzoli Digital, onde construo produtos para clientes em Portugal e no Brasil, e a Accenture Portugal, onde trabalho como Content Operations Analyst.',
  ],
  en: [
    'I was born in São Paulo in 1981 and have lived in Portugal since 2017. I spent most of my adult life building companies — manufacturing product, negotiating with suppliers, hiring, selling, closing — before transitioning to software in 2023.',
    'That changes how I write code. When a client describes a problem, I can see the operation behind it: who does what, where time is lost, what happens when someone makes a mistake. The code comes after that, and is better because of it.',
    'Today I split my time between Pedrazzoli Digital, where I build products for clients in Portugal and Brazil, and Accenture Portugal, where I work as a Content Operations Analyst.',
  ],
};

const education = {
  pt: [
    'Ironhack — Full Stack Web Development (part-time, 400+ h), 2023–2024',
    'Universidade São Judas Tadeu — Administração e Comércio Exterior',
    'Phoenix Academy, Perth — 2001',
  ],
  en: [
    'Ironhack — Full Stack Web Development (part-time, 400+ h), 2023–2024',
    'Universidade São Judas Tadeu — Business Administration & Foreign Trade',
    'Phoenix Academy, Perth — 2001',
  ],
};

/** Dimensões da foto lidas do ficheiro em /public, para não ficarem fixas no código. */
function photoSize() {
  try {
    const { width, height } = imageSize(
      fs.readFileSync(path.join(process.cwd(), 'public', site.photo)),
    );
    return width && height ? { width, height } : { width: 4, height: 5 };
  } catch {
    return { width: 4, height: 5 };
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations('common');
  const photo = photoSize();

  return (
    <article
      className='wrap'
      style={{ paddingBlock: 'clamp(3rem, 8vw, 6rem)' }}
    >
      <div className='grid gap-12 md:grid-cols-12'>
        <div className='md:col-span-4'>
          <div className='figure'>
            <Image
              src={site.photo}
              alt='Orlando Pedrazzoli'
              width={photo.width}
              height={photo.height}
              priority
              sizes='(min-width: 768px) 30vw, 100vw'
            />
          </div>
          <a href={site.cv} download className='btn mt-6'>
            {t('downloadCv')}
          </a>
        </div>
        <div className='md:col-span-8'>
          <h1 className='display text-[clamp(2.5rem,6vw,4.5rem)]'>
            {l === 'pt'
              ? 'Vinte anos a construir negócios. Agora, software.'
              : 'Twenty years building businesses. Now, software.'}
          </h1>
          <div className='prose-measure mt-8 space-y-5 text-lg text-ink-2'>
            {intro[l].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ol className='mt-16 divide-y divide-line border-t border-line'>
            {trajectory.map(item => (
              <li
                key={item.period}
                className='grid gap-2 py-8 sm:grid-cols-12 sm:gap-6'
              >
                <span className='font-mono text-sm text-ink-3 sm:col-span-3'>
                  {item.period}
                </span>
                <div className='sm:col-span-9'>
                  <h2 className='display text-2xl'>{item.title[l]}</h2>
                  <p className='mt-3 text-ink-2'>{item.body[l]}</p>
                  {item.link && (
                    <Link
                      href={`/work/${item.link.slug}`}
                      className='link mt-3 inline-flex items-center gap-1 font-mono text-xs text-ink'
                    >
                      {item.link.label} <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <h2 className='eyebrow mt-16'>
            {l === 'pt' ? 'Formação' : 'Education'}
          </h2>
          <ul className='mt-4 space-y-2 text-ink-2'>
            {education[l].map(e => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
