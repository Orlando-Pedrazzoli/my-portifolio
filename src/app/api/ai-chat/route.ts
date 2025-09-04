// FILE: src/app/api/ai-chat/route.ts
// =====================================
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Implementar lógica de chat AI aqui
  console.log('AI chat message:', data);

  return NextResponse.json({
    success: true,
    message: 'Resposta do AI',
    data: { response: 'Esta é uma resposta de exemplo' },
  });
}
