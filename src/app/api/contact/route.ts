// FILE: src/app/api/contact/route.ts
// =====================================
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Implementar lógica de envio de email aqui
  console.log('Contact form data:', data);

  return NextResponse.json({
    success: true,
    message: 'Mensagem enviada com sucesso!',
  });
}
