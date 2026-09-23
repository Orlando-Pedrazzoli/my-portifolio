// src/proxy.ts
// Next 16: "proxy" substitui o antigo middleware. O next-intl trata da
// negociação de idioma (Accept-Language + cookie) e do prefixo /en.
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export const proxy = createMiddleware(routing);

export const config = {
  // Tudo exceto API, ficheiros estáticos e assets do Next.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
