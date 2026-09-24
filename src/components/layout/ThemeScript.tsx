// src/components/layout/ThemeScript.tsx
'use client';

import { useServerInsertedHTML } from 'next/navigation';

/**
 * Aplica a classe `dark` no <html> antes do primeiro paint
 * (localStorage 'theme' > prefers-color-scheme), para não haver flash de tema.
 *
 * Porquê useServerInsertedHTML e não um <script> no JSX do layout:
 * o React 19 avisa sobre qualquer <script> renderizado por um componente
 * ("Encountered a script tag while rendering React component"), porque no
 * cliente esse script nunca executa. Com useServerInsertedHTML o <script> é
 * escrito diretamente no HTML durante o SSR, fora da árvore React — o browser
 * executa-o ao fazer parse, e o React nunca o volta a encontrar no cliente.
 * O componente em si não renderiza nada.
 */
const THEME_INIT =
  "(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})()";

export default function ThemeScript() {
  useServerInsertedHTML(() => (
    <script id='theme-init' dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
  ));
  return null;
}
