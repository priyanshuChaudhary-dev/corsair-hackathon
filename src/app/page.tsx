import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between rounded-3xl border border-slate-700/80 bg-slate-950/80 px-5 py-4 shadow-xl shadow-slate-950/10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Inbox Orbit" className="h-12 w-12 rounded-2xl" />
            <div>
              <p className="text-sm font-semibold text-white">Inbox Orbit</p>
              <p className="text-xs text-slate-400">Gmail + Calendar</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/signup"
              className="rounded-full border border-slate-600/80 bg-slate-900/80 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Login
            </Link>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-0 py-0 lg:px-0">
          <section className="flex flex-col gap-10 pt-6 lg:pt-10">
            <div className="flex flex-col gap-6 lg:max-w-3xl">
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  One workspace for Gmail and Calendar.
                  <span className="block text-sky-400">Schedule smarter. Reply faster. Stay in flow.</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Inbox Orbit brings your Gmail inbox and Google Calendar into one elegant dashboard so you can manage messages, meetings, and time with less context switching.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
                >
                  Get started free
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
                >
                  Explore features
                </a>
              </div>
            </div>

            <div className="grid gap-6 gap-y-8 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-400">Unified view</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Inbox + Calendar</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Keep email and schedule in sync without opening separate apps. See upcoming meetings next to important threads.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">Smart workflow</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Priority inbox</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Automatically surface the right conversations, event invites, and follow-ups so you can act quickly.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-violet-400">Better planning</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Calendar insights</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Visualize your day with agenda highlights, booking density, and email-triggered events in one glance.
                </p>
              </div>
            </div>
          </section>

          <section id="features" className="grid gap-12 items-center lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/15 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Designed for modern teams</p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-white">
                  Everything you need to manage your inbox and calendar from a single, beautiful command center.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 text-slate-300 shadow-lg shadow-slate-950/10">
                  <h3 className="text-xl font-semibold text-white">Email to event</h3>
                  <p className="mt-3 text-sm leading-6">
                    Turn invites, follow-ups, and scheduling requests into calendar items without leaving your inbox.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 text-slate-300 shadow-lg shadow-slate-950/10">
                  <h3 className="text-xl font-semibold text-white">Focused agenda</h3>
                  <p className="mt-3 text-sm leading-6">
                    See the day ahead plus the most important threads, all sorted by urgency and time.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 text-slate-300 shadow-lg shadow-slate-950/10">
                  <h3 className="text-xl font-semibold text-white">Context cards</h3>
                  <p className="mt-3 text-sm leading-6">
                    Know who you’re meeting, the latest email conversation, and suggested next actions instantly.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 text-slate-300 shadow-lg shadow-slate-950/10">
                  <h3 className="text-xl font-semibold text-white">Fast actions</h3>
                  <p className="mt-3 text-sm leading-6">
                    Reply, schedule, snooze, or join calls from a single row without opening extra tabs.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/30">
              <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-sky-500/20 via-transparent to-transparent" />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center justify-between rounded-3xl bg-slate-900/95 p-4 text-slate-200 shadow-inner shadow-slate-950/20 backdrop-blur">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Live preview</p>
                    <p className="mt-2 text-lg font-semibold text-white">Inbox Orbit dashboard</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/90 px-3 py-1 text-sm text-slate-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Connected
                  </div>
                </div>
                <div className="grid gap-4 rounded-[1.75rem] border border-slate-800/90 bg-slate-950/95 p-5">
                  <div className="space-y-4 rounded-[1.5rem] border border-slate-800/90 bg-slate-900/80 p-4">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-sm">Primary inbox</span>
                      <span className="text-sm text-slate-400">12 new</span>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-3xl bg-slate-950/80 p-4">
                        <p className="text-sm text-slate-400">From: alice@example.com</p>
                        <p className="mt-2 text-base font-semibold text-white">Meeting follow-up and prep notes</p>
                      </div>
                      <div className="rounded-3xl bg-slate-950/80 p-4">
                        <p className="text-sm text-slate-400">From: product@orbit.com</p>
                        <p className="mt-2 text-base font-semibold text-white">Calendar sync complete, 3 events added</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-800/90 bg-slate-900/95 p-4">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="font-semibold text-white">Today</span>
                      <span className="text-sm text-slate-500">4 events</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-3xl bg-slate-950/80 p-3">
                        <p className="text-sm uppercase tracking-[0.18em] text-sky-400">10:00 AM</p>
                        <p className="mt-2 font-semibold text-white">Product sync</p>
                      </div>
                      <div className="rounded-3xl bg-slate-950/80 p-3">
                        <p className="text-sm uppercase tracking-[0.18em] text-violet-300">1:30 PM</p>
                        <p className="mt-2 font-semibold text-white">Client planning call</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-3xl border border-slate-800/90 bg-slate-900/90 p-4 text-slate-300">
                  <span className="text-sm">Next sync in 2m</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">Gmail + Calendar</span>
                </div>
              </div>
            </div>
          </section>

          <section id="get-started" className="rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Launch your workflow</p>
                <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">One dashboard that keeps your inbox and day aligned.</h2>
                <p className="max-w-2xl text-base leading-7 text-slate-300">
                  Inbox Orbit helps teams stay on top of email and meetings with fewer tabs, fewer interruptions, and more focus on what matters.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" href="#">
                    Start free trial
                  </a>
                  <a className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white" href="#">
                    Request a demo
                  </a>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-6 text-slate-300 ring-1 ring-slate-800/80">
                <div className="mb-6 rounded-3xl border border-slate-700/80 bg-slate-950/95 p-5 shadow-lg shadow-slate-950/10">
                  <p className="text-sm uppercase tracking-[0.22em] text-sky-400">Trusted by teams</p>
                  <p className="mt-4 text-2xl font-semibold text-white">Save 2 hrs/week</p>
                </div>
                <div className="space-y-4 text-sm leading-6">
                  <p>• Syncs Gmail priority messages with your daily agenda automatically.</p>
                  <p>• Shows calendar conflicts and suggested times in your inbox.</p>
                  <p>• Lets you reply and reschedule from a unified command toolbar.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Frequently asked questions</p>
                <h2 className="text-3xl font-semibold text-white">Get answers about Inbox Orbit</h2>
              </div>
              <Accordion className="space-y-3 border-none">
                <AccordionItem value="faq-1" className="rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-lg shadow-slate-950/10">
                  <AccordionTrigger className="px-6 py-5 text-left text-base text-white">
                    Does Inbox Orbit work with Gmail and Google Calendar?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-400">
                    Yes. Inbox Orbit is designed as a unified workspace for Gmail and Google Calendar, surfacing email threads and event details together.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-lg shadow-slate-950/10">
                  <AccordionTrigger className="px-6 py-5 text-left text-base text-white">
                    Can I schedule meetings from email?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-400">
                    Absolutely. The platform makes it easy to convert messages into event invites, suggest times, and manage RSVPs without switching apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-lg shadow-slate-950/10">
                  <AccordionTrigger className="px-6 py-5 text-left text-base text-white">
                    Is there a free trial?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-400">
                    Yes, there is a free starter tier to explore the core email and calendar integration with no credit card required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4" className="rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-lg shadow-slate-950/10">
                  <AccordionTrigger className="px-6 py-5 text-left text-base text-white">
                    Can my team use it together?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-400">
                    Inbox Orbit supports team workflows with shared event views, collaboration-ready inbox prioritization, and simple account management.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <footer className="rounded-[2rem] border border-slate-700/80 bg-slate-950/80 px-8 py-12 text-slate-300 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <div className="space-y-4">
                <p className="text-lg font-semibold text-white">Inbox Orbit</p>
                <p className="max-w-sm text-sm text-slate-400">
                  The unified workspace for Gmail and Google Calendar that helps teams stay focused, organized, and in sync.
                </p>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800/90 text-sky-300">IO</span>
                  <span>Trusted by modern teams worldwide.</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Product</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <Link href="/pricing" className="block transition hover:text-white">Pricing</Link>
                  <Link href="/signup" className="block transition hover:text-white">Get started</Link>
                  <Link href="#features" className="block transition hover:text-white">Features</Link>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Company</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <Link href="/" className="block transition hover:text-white">About us</Link>
                  <Link href="/pricing" className="block transition hover:text-white">Careers</Link>
                  <Link href="/contact" className="block transition hover:text-white">Contact</Link>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Resources</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <Link href="#faq" className="block transition hover:text-white">FAQ</Link>
                  <Link href="/" className="block transition hover:text-white">Privacy policy</Link>
                  <Link href="/" className="block transition hover:text-white">Terms of service</Link>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-700/70 pt-6 text-sm text-slate-500 md:flex md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Inbox Orbit. All rights reserved.</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 md:mt-0">
                <Link href="/" className="transition hover:text-white">Twitter</Link>
                <Link href="/" className="transition hover:text-white">LinkedIn</Link>
                <Link href="/" className="transition hover:text-white">Support</Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
