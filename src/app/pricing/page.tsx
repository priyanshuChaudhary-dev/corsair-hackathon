import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Pricing</p>
          <h1 className="text-4xl font-semibold text-white">Plans for every user</h1>
          <p className="text-sm text-slate-400">Pick a plan that fits your use case.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-700/80 bg-slate-950/80 p-6 text-center">
            <h2 className="text-xl font-semibold">Free</h2>
            <p className="mt-2 text-slate-400">$0 — Basic features</p>
            <ul className="mt-4 text-sm text-slate-400">
              <li>Sync 1 inbox</li>
              <li>Basic support</li>
            </ul>
            <Link href="/signup" className="mt-6 inline-block rounded-2xl bg-sky-500 px-4 py-2 text-sm font-medium hover:bg-sky-400">
              Get started
            </Link>
          </div>

          <div className="rounded-lg border border-slate-700/80 bg-slate-950/80 p-6 text-center">
            <h2 className="text-xl font-semibold">Pro</h2>
            <p className="mt-2 text-slate-400">$9 / month — Advanced features</p>
            <ul className="mt-4 text-sm text-slate-400">
              <li>Sync unlimited inboxes</li>
              <li>Priority support</li>
            </ul>
            <Link href="/signup" className="mt-6 inline-block rounded-2xl bg-sky-500 px-4 py-2 text-sm font-medium hover:bg-sky-400">
              Choose Pro
            </Link>
          </div>

          <div className="rounded-lg border border-slate-700/80 bg-slate-950/80 p-6 text-center">
            <h2 className="text-xl font-semibold">Enterprise</h2>
            <p className="mt-2 text-slate-400">Contact us for pricing</p>
            <Link href="/contact" className="mt-6 inline-block rounded-2xl bg-sky-500 px-4 py-2 text-sm font-medium hover:bg-sky-400">
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
