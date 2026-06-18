import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <section className="rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_0.6fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
              <h1 className="text-4xl font-semibold text-white">Get in touch with Inbox Orbit</h1>
              <p className="max-w-2xl text-base leading-7 text-slate-400">
                Need help with setup, want to learn about pricing, or want to share feedback? Our team is ready to support you.
              </p>
              <div className="space-y-4 rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 text-slate-300 shadow-lg shadow-slate-950/10">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Support</p>
                  <p className="mt-2 text-lg font-semibold text-white">support@inboxorbit.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Sales</p>
                  <p className="mt-2 text-lg font-semibold text-white">sales@inboxorbit.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Phone</p>
                  <p className="mt-2 text-lg font-semibold text-white">+1 (800) 555-0187</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/15 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact form</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Send us a message</h2>
              <form className="mt-8 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-200">Name</label>
                  <input id="name" type="text" className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-200">Email</label>
                  <input id="email" type="email" className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-200">Message</label>
                  <textarea id="message" rows={5} className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500" placeholder="Tell us how we can help." />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-400">
                  Send message
                </button>
                <p className="text-sm text-slate-500">We aim to reply within one business day.</p>
              </form>
            </div>
          </div>
        </section>

        <div className="rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Office</p>
              <p className="text-base leading-7 text-slate-300">123 Orbit Avenue<br />San Francisco, CA 94103</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Hours</p>
              <p className="text-base leading-7 text-slate-300">Monday–Friday: 9am–6pm PT<br />Saturday: 10am–4pm PT</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Need help?</p>
              <p className="text-base leading-7 text-slate-300">Visit our <Link href="/pricing" className="text-sky-400 hover:text-sky-300">pricing page</Link> or start with <Link href="/signup" className="text-sky-400 hover:text-sky-300">a free trial</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
