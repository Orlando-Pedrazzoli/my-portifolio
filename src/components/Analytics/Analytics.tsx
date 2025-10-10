// components/Analytics/Analytics.tsx
// Componente para Google Analytics e Vercel Analytics

'use client';

import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Substitua pelo seu ID do Google Analytics
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Tipo para o gtag global
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: {
        page_path?: string;
        cookie_flags?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: string | number | undefined;
      }
    ) => void;
    dataLayer: Array<unknown>;
  }
}

export function GoogleAnalytics() {
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    return null;
  }

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}

export function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
}

// Função para rastrear eventos personalizados
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Rastrear cliques em links externos
export const trackOutboundLink = (url: string) => {
  trackEvent('click', 'outbound', url);
};

// Rastrear downloads
export const trackDownload = (fileName: string) => {
  trackEvent('download', 'file', fileName);
};

// Rastrear formulários
export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

// Rastrear scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`);
};

// Rastrear tempo na página
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'engagement', `${seconds} seconds`, seconds);
};
