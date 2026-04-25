import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Autenticacao admin sera implementada na Fase 2.",
  });
}
