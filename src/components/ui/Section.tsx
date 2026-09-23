// src/components/ui/Section.tsx
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  id: string;
  n: string;
  label: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Secção editorial: regra horizontal, etiqueta em mono no rail esquerdo,
 * conteúdo nas 8–9 colunas da direita em desktop.
 */
export default function Section({
  id,
  n,
  label,
  title,
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
        <div className='md:col-span-3'>
          <p className='eyebrow md:sticky md:top-24'>
            <span className='mr-3 text-ink-3'>{n}</span>
            {label}
          </p>
        </div>
        <div className='md:col-span-9'>
          {title && (
            <h2 className='display mb-10 text-[clamp(2rem,4.5vw,3.25rem)]'>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
