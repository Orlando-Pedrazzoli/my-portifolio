// FILE: src/components/ui/Card.tsx
// =====================================
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
}

export function Card({
  className,
  gradient = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-700 backdrop-blur-sm',
        gradient
          ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50'
          : 'bg-gray-800/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
