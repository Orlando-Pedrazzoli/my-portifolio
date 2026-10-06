// src/app/api/revalidate/route.ts
// TEMPORÁRIO (diagnóstico): invalida todas as páginas pré-renderizadas para
// que sejam regeneradas pelo deploy atual. A remover depois do diagnóstico.
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

let last = 0;

export async function GET() {
  const now = Date.now();
  if (now - last < 60_000) {
    return NextResponse.json({ revalidated: false, reason: 'rate-limited' }, { status: 429 });
  }
  last = now;
  revalidatePath('/', 'layout');
  return NextResponse.json({
    revalidated: true,
    at: new Date(now).toISOString(),
    sha: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'local',
  });
}
