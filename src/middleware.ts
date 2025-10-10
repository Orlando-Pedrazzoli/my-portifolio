// src/middleware.ts
// Middleware para internacionalização no App Router

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lista de idiomas suportados
const locales = ['pt', 'en'];
const defaultLocale = 'pt';

// Função para detectar o idioma preferido
function getLocale(request: NextRequest): string {
  // 1. Verificar cookie de preferência
  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Verificar header Accept-Language
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const detectedLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].split('-')[0].trim())
      .find(lang => locales.includes(lang));

    if (detectedLocale) {
      return detectedLocale;
    }
  }

  // 3. Retornar idioma padrão
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  // Pular para arquivos estáticos
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    request.nextUrl.pathname.includes('.') // arquivos estáticos
  ) {
    return NextResponse.next();
  }

  // Verificar se já tem locale na URL
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Detectar idioma e redirecionar
    const locale = getLocale(request);

    // Criar response com redirect
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );

    // Salvar preferência em cookie
    response.cookies.set('locale', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 ano
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     * - manifest.json
     * - *.png, *.jpg, *.jpeg, *.gif, *.webp, *.svg
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\..*).)',
  ],
};
