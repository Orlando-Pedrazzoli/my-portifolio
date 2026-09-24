// src/components/ui/Section.tsx
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  id: string;
  n: string;
  label: string;
  title?: ReactNode;
  intro?: ReactNode;
  /** Ocupa as 12 colunas (para grids de cards e imagens grandes). */
  wide?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Secção editorial: regra horizontal, etiqueta em mono no rail esquerdo,
 * conteúdo nas 9 colunas da direita — ou nas 12 quando `wide`.
 */
export default function Section({
  id,
  n,
  label,
  title,
  intro,
  wide,
  children,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={cn('rule', className)}
      style={{ paddingBlock: 'var(--section)' }}
    >
      <div className='wrap grid gap-8 md:grid-cols-12'>
        <div className={wide ? 'md:col-span-12' : 'md:col-span-3'}>
          <p className={cn('eyebrow', !wide && 'md:sticky md:top-24')}>
            <span className='mr-3 text-ink-3'>{n}</span>
            {label}
          </p>
        </div>
        <div className={wide ? 'md:col-span-12' : 'md:col-span-9'}>
          {title && <h2 className='display t-h2 mb-6'>{title}</h2>}
          {intro && (
            <p className='prose-measure t-lead mb-12 text-ink-2'>{intro}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
