import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      error: "Google authentication is not configured yet. Please use email and password login.",
    },
    { status: 501 }
  );
}
