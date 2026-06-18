"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const result = await response.json();
        setLoading(false);

        if (!response.ok) {
            setError(result.error || "Unable to create account. Please try again.");
            return;
        }

        router.push("/dashboard");
    }

    return (
        <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
            <div className="mx-auto flex w-full max-w-md flex-col gap-8 px-6 py-16">
                <div className="space-y-3 text-center">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Join Inbox Orbit</p>
                    <h1 className="text-4xl font-semibold text-white">Create your account</h1>
                    <p className="text-sm text-slate-400">
                        Sign up with email or continue with Google to start syncing your inbox and calendar.
                    </p>
                </div>

                <div className="rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-200">
                                Full name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Your full name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-200">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-slate-200">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Create a password"
                            />
                        </div>
                        {error ? <p className="text-sm text-destructive">{error}</p> : null}
                        <Button type="submit" className="w-full rounded-2xl bg-sky-500 hover:bg-sky-400" disabled={loading}>
                            {loading ? "Creating account..." : "Sign up"}
                        </Button>
                    </form>

                    <div className="my-6 flex items-center gap-3 text-sm text-slate-500">
                        <span className="h-px flex-1 bg-slate-700/80" />
                        <span>or continue with</span>
                        <span className="h-px flex-1 bg-slate-700/80" />
                    </div>

                    <Button
                        variant="outline"
                        className="w-full rounded-2xl border-slate-700/80 text-slate-100 hover:border-slate-500 hover:text-white"
                        onClick={() => {
                            window.location.href = "/api/auth/google";
                        }}
                    >
                        Sign up with Google
                    </Button>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-sky-300 hover:text-sky-200">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
