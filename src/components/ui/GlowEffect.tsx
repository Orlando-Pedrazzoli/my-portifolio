// FILE: src/components/ui/GlowEffect.tsx
// =====================================
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlowEffectProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'purple' | 'blue' | 'pink' | 'green';
  intensity?: 'low' | 'medium' | 'high';
}

export function GlowEffect({
  className,
  color = 'purple',
  intensity = 'medium',
  children,
  ...props
}: GlowEffectProps) {
  const colors = {
    purple: 'from-purple-600 to-purple-400',
    blue: 'from-blue-600 to-blue-400',
    pink: 'from-pink-600 to-pink-400',
    green: 'from-green-600 to-green-400',
  };

  const intensities = {
    low: 'opacity-20 blur-xl',
    medium: 'opacity-30 blur-2xl',
    high: 'opacity-40 blur-3xl',
  };

  return (
    <div className={cn('relative', className)} {...props}>
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-r',
          colors[color],
          intensities[intensity],
          '-z-10'
        )}
      />
      {children}
    </div>
  );
}
