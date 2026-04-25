import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: false,
    message: "Smart fetch de Open Graph sera implementado na Fase 2.",
  });
}
