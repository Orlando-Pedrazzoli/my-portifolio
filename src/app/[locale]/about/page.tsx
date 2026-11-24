// src/app/[locale]/about/page.tsx
// /about = percurso completo + formação + stack completa + CV.
// É a página para quem está a recrutar; a home é para quem está a construir.
import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import { imageSize } from 'image-size';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { trajectory, fullStack, certifications, leadership } from '@/content/home';
import { site, absoluteUrl, languageAlternates } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('aboutTitle'),
    description: intro[l][0],
    alternates: {
      canonical: absoluteUrl(l, '/about'),
      languages: languageAlternates('/about'),
    },
    openGraph: {
      type: 'profile',
      title: t('aboutTitle'),
      description: intro[l][0],
      url: absoluteUrl(l, '/about'),
      images: [{ url: site.photo, alt: site.name }],
    },
  };
}

const intro = {
  pt: [
    'Nasci em São Paulo em 1981 e vivo em Portugal desde 2017. Passei a maior parte da vida adulta a construir empresas — a fabricar produto, negociar com fornecedores, contratar, vender, fechar — antes de fazer a transição para software em 2023.',
    'Isso muda a forma como programo. Quando um cliente descreve um problema, consigo ver a operação por trás dele: quem faz o quê, onde se perde tempo, o que acontece quando alguém se engana. O código vem depois disso, e é melhor por causa disso.',
    'Hoje divido o tempo entre a Pedrazzoli Digital, onde construo produtos para clientes em Portugal e no Brasil, e a Accenture Portugal, onde trabalho como Content Operations Analyst. Todos os dias pratico a implementação de inteligência artificial em processos reais — com revisão humana, dados protegidos e um critério de qualidade antes de alargar o uso.',
  ],
  en: [
    'I was born in São Paulo in 1981 and have lived in Portugal since 2017. I spent most of my adult life building companies — manufacturing product, negotiating with suppliers, hiring, selling, closing — before transitioning to software in 2023.',
    'That changes how I write code. When a client describes a problem, I can see the operation behind it: who does what, where time is lost, what happens when someone makes a mistake. The code comes after that, and is better because of it.',
    'Today I split my time between Pedrazzoli Digital, where I build products for clients in Portugal and Brazil, and Accenture Portugal, where I work as a Content Operations Analyst. Every day I practise implementing artificial intelligence in real processes — with a human in the loop, protected data and a quality bar before the use is widened.',
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

  // ProfilePage (Google): página "sobre" com a Person como entidade principal.
  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(l, '/about'),
    inLanguage: l === 'pt' ? 'pt-PT' : 'en',
    mainEntity: { '@id': `${site.url}/#person` },
  };

  return (
    <article
      className='wrap'
      style={{ paddingBlock: 'clamp(3rem, 8vw, 6rem)' }}
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
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
          <a
            href={site.cv}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-solid mt-6'
          >
            {t('downloadCv')}
          </a>
        </div>
        <div className='md:col-span-8'>
          <p className='eyebrow'>Orlando Pedrazzoli — Full Stack Developer</p>
          <h1 className='display t-h1 mt-4'>
            {l === 'pt'
              ? 'Quinze anos a construir negócios. Agora, software.'
              : 'Fifteen years building businesses. Now, software.'}
          </h1>
          <div className='prose-measure t-lead mt-8 space-y-5 text-ink-2'>
            {intro[l].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h2 className='eyebrow mt-16'>
            {l === 'pt' ? 'Percurso' : 'Background'}
          </h2>
          <ol className='mt-4 divide-y divide-line border-t border-line'>
            {trajectory.map(item => (
              <li
                key={item.period}
                className='grid gap-2 py-8 sm:grid-cols-12 sm:gap-6'
              >
                <span className='font-mono text-sm text-ink-3 sm:col-span-3'>
                  {item.period}
                </span>
                <div className='sm:col-span-9'>
                  <h3 className='display text-2xl'>{item.title[l]}</h3>
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

          <h2 id='certificacoes' className='eyebrow mt-16 scroll-mt-24'>
            {l === 'pt' ? 'Certificações' : 'Certifications'}
          </h2>
          <p className='prose-measure mt-4 text-ink-2'>
            {l === 'pt'
              ? 'Percipio, concluídas na Accenture. Excel, Word e Outlook no trabalho de conteúdo e de operação — folhas, documentos e calendário, não como substituto da stack de engenharia.'
              : 'Percipio, completed at Accenture. Excel, Word and Outlook in content and operations work — spreadsheets, documents and calendar, not as a stand-in for the engineering stack.'}
          </p>
          <div className='mt-8 space-y-10'>
            {certifications.map(group => (
              <section key={group.title.en}>
                <h3 className='display text-2xl'>{group.title[l]}</h3>
                <p className='mt-1 font-mono text-xs text-ink-3'>
                  Percipio · {group.date[l]}
                </p>
                <ul className='mt-4 divide-y divide-line border-t border-line'>
                  {group.items.map(item => (
                    <li
                      key={item.id}
                      className='flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6'
                    >
                      <span className='text-ink-2'>{item.name}</span>
                      <span className='shrink-0 font-mono text-xs text-ink-3'>
                        nº {item.id} · {item.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <h2 id='lideranca' className='eyebrow mt-16 scroll-mt-24'>
            {l === 'pt' ? 'Liderança' : 'Leadership'}
          </h2>
          <p className='mt-4 font-mono text-xs text-ink-3'>
            {leadership.issuer} · {leadership.program}
          </p>
          <p className='prose-measure mt-3 text-ink-2'>{leadership.note[l]}</p>
          <ul className='mt-6 space-y-6'>
            {leadership.items.map(item => (
              <li key={item.title.en}>
                <h3 className='display text-xl'>{item.title[l]}</h3>
                <p className='mt-2 text-ink-2'>{item.body[l]}</p>
              </li>
            ))}
          </ul>

          <h2 id='stack' className='eyebrow mt-16 scroll-mt-24'>
            {l === 'pt' ? 'Stack técnica completa' : 'Full technical stack'}
          </h2>
          <dl className='mt-4 grid gap-x-10 gap-y-8 sm:grid-cols-2'>
            {fullStack.map(g => (
              <div key={g.title.en}>
                <dt className='eyebrow mb-2'>{g.title[l]}</dt>
                <dd className='text-ink-2'>{g.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}
