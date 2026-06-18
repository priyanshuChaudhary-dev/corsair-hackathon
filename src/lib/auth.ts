import crypto from "node:crypto";
import { promisify } from "node:util";
import { prisma } from "@/lib/db";

const scryptAsync = promisify(crypto.scrypt);
const AUTH_SECRET = process.env.AUTH_SECRET;
const AUTH_COOKIE = "inbox-orbit-auth";

function getAuthSecret() {
    if (!AUTH_SECRET) {
        throw new Error("AUTH_SECRET environment variable is required for authentication.");
    }
    return AUTH_SECRET;
}

function base64UrlEncode(input: string | Buffer) {
    return Buffer.from(input)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

function base64UrlDecode(input: string) {
    return Buffer.from(input.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");
}

export async function hashPassword(password: string) {
    const salt = crypto.randomBytes(16).toString("hex");
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${salt}:${derivedKey.toString("hex")}`;
}

export async function verifyPassword(password: string, storedHash: string) {
    const [salt, hash] = storedHash.split(":");
    if (!salt || !hash) return false;
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    return crypto.timingSafeEqual(Buffer.from(hash, "hex"), derivedKey);
}

export function createToken(userId: string) {
    const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
    const payload = base64UrlEncode(JSON.stringify({ sub: userId, exp }));
    const signature = crypto
        .createHmac("sha256", getAuthSecret())
        .update(`${header}.${payload}`)
        .digest("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    return `${header}.${payload}.${signature}`;
}

export function verifyToken(token: string) {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;
    const expected = crypto
        .createHmac("sha256", getAuthSecret())
        .update(`${header}.${payload}`)
        .digest("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
        return null;
    }

    const decoded = JSON.parse(base64UrlDecode(payload)) as { sub: string; exp: number };
    if (decoded.exp < Math.floor(Date.now() / 1000)) {
        return null;
    }

    return decoded;
}

export async function getUserFromToken(token: string) {
    const payload = verifyToken(token);
    if (!payload?.sub) return null;
    return prisma.user.findUnique({ where: { id: payload.sub } });
}

export function createAuthCookie(response: Response, token: string) {
    const cookieValue = `${AUTH_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7};`;
    response.headers.append("Set-Cookie", cookieValue);
}

export const authCookieName = AUTH_COOKIE;
