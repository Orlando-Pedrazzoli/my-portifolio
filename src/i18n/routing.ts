// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  // EN é o idioma principal (recrutamento internacional): vive em "/".
  // PT vive em "/pt". A negociação Accept-Language + cookie (proxy.ts)
  // continua a levar visitantes portugueses para /pt automaticamente.
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
