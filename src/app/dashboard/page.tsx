import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/lib/auth";

export default async function DashboardPage() {
    const token = (await cookies()).get("inbox-orbit-auth")?.value;
    if (!token) {
        redirect("/login");
    }

    const user = await getUserFromToken(token);
    if (!user) {
        redirect("/login");
    }

    return (
        <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16">
                <div className="rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Dashboard</p>
                    <h1 className="mt-4 text-4xl font-semibold text-white">Welcome back, {user.email}</h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                        You are now signed into Inbox Orbit. Your Gmail and Calendar workspace is ready to be connected.
                    </p>
                </div>
            </div>
        </main>
    );
}
