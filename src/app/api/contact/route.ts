// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { site } from '@/lib/site';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(4000),
  company: z.string().optional(), // honeypot
});

// Rate limit simples em memória (por instância). Suficiente para um portfólio.
const hits = new Map<string, { n: number; t: number }>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;

function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > WINDOW) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  h.n += 1;
  return h.n > LIMIT;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip))
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 });

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success)
    return NextResponse.json({ error: 'invalid' }, { status: 400 });

  const { name, email, message, company } = parsed.data;
  // Honeypot preenchido: responde OK e ignora.
  if (company) return NextResponse.json({ ok: true });

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY em falta');
    return NextResponse.json({ error: 'not_configured' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>',
    to: process.env.CONTACT_TO ?? site.email,
    replyTo: email,
    subject: `[orlandopedrazzoli.com] ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
