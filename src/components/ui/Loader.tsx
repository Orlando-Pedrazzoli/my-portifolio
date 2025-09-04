// FILE: src/components/ui/Loader.tsx
// =====================================
import { motion } from 'framer-motion';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function Loader({ size = 'md', color = 'purple' }: LoaderProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className='flex items-center justify-center'>
      <motion.div
        className={`${sizes[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className={`absolute inset-0 border-4 border-gray-700 rounded-full`}
        />
        <div
          className={`absolute inset-0 border-4 border-${color}-500 border-t-transparent rounded-full`}
        />
      </motion.div>
    </div>
  );
}
