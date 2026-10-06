// src/components/ui/Device.tsx
// Molduras de dispositivo em CSS puro — sem PNGs de mockup.
// Nítidas em qualquer resolução, seguem o tema (claro/escuro) e não pesam
// nada além do próprio screenshot. Todo o "chrome" é decorativo (aria-hidden):
// o texto alternativo continua no <Image> que vai dentro.
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrowserProps {
  /** O que aparece na barra de endereço: domínio real ou nome do produto. */
  address?: string;
  /** Mostra o cadeado — só quando o endereço é um domínio real (HTTPS). */
  secure?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Janela de browser genérica: três pontos neutros (sem cores de semáforo),
 * barra de endereço com o domínio em mono e o screenshot por baixo.
 */
export function BrowserFrame({
  address,
  secure,
  className,
  children,
}: BrowserProps) {
  return (
    <div className={cn('device-browser', className)}>
      <div className='device-bar' aria-hidden='true'>
        <span className='device-dots'>
          <i />
          <i />
          <i />
        </span>
        {address ? (
          <span className='device-address'>
            {secure && <Lock size={10} strokeWidth={2.25} />}
            <span>{address}</span>
          </span>
        ) : (
          <span />
        )}
        <span />
      </div>
      <div className='device-screen'>{children}</div>
    </div>
  );
}

/**
 * Telemóvel genérico (não é réplica de nenhum modelo). Os screenshots mobile
 * não trazem barra de estado, por isso o ecrã tem uma faixa de estado própria
 * com a câmara; a app começa por baixo dela, sem nada tapado.
 * As medidas estão em cqw: a moldura escala com a largura que lhe derem.
 */
export function PhoneFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('device-phone', className)}>
      <div className='device-phone-body'>
        <div className='device-phone-screen'>
          <div className='device-phone-status' aria-hidden='true'>
            <span className='device-phone-island' />
          </div>
          <div className='device-phone-view'>{children}</div>
        </div>
      </div>
    </div>
  );
}
