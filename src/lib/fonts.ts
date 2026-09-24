// src/lib/fonts.ts
// Uma família para tudo (Geist) + mono para etiquetas. Sem serifa de display:
// a hierarquia vem do tamanho, do peso e do espaço, não de uma segunda fonte.
import { Geist, Geist_Mono } from 'next/font/google';

export const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
