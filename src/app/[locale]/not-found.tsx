// src/app/[locale]/not-found.tsx
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('common');
  return (
    <section
      className='wrap'
      style={{ paddingBlock: 'clamp(4rem, 12vw, 9rem)' }}
    >
      <p className='eyebrow'>404</p>
      <h1 className='display mt-4 text-5xl'>
        Não há nada aqui. / Nothing here.
      </h1>
      <Link href='/' className='btn mt-8'>
        {t('backHome')}
      </Link>
    </section>
  );
}
