import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.email(),
  phone: z.string().min(8),
  need: z.string().min(10),
  turnstileToken: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = payloadSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json({ success: false, message: "Payload invalido" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Recebemos sua mensagem, logo entraremos em contato!",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Nao foi possivel processar sua solicitacao agora.",
      },
      { status: 500 },
    );
  }
}
