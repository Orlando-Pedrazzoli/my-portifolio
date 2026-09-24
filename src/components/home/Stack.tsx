// src/components/home/Stack.tsx
// Discreto por decisão: nove tecnologias numa linha e um link para a lista
// completa. Os cases já demonstram o resto.
import { getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import { stackShort } from '@/content/home';

export default async function Stack() {
  const t = await getTranslations();

  return (
    <Section id='stack' n='05' label={t('sections.stack')}>
      <ul className='flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-ink-2'>
        {stackShort.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link
        href='/about#stack'
        className='link mt-8 inline-flex items-center gap-1 font-mono text-xs text-ink'
      >
        {t('common.fullStack')} <ArrowUpRight size={12} />
      </Link>
    </Section>
  );
}
