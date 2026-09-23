// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'pt',
  // PT vive em "/" (URLs atuais mantêm-se); EN vive em "/en".
  localePrefix: 'as-needed',
});
