import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { createToken, verifyPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const validPassword = await verifyPassword(password, user.password);
  if (!validPassword) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = createToken(user.id);
  const redirectUrl = new URL("/dashboard", request.url);
  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set({
    name: "inbox-orbit-auth",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  return response;
}
