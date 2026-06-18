import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { createToken, hashPassword } from "@/lib/auth";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    const name = String(body.name || "").trim();

    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return NextResponse.json({ error: "A user with that email already exists." }, { status: 409 });
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
    });

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
