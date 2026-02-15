import Link from "next/link";

const milestones = [
  {
    year: "2015",
    title: "Started with field-first curiosity",
    body: "A small team, a big set of questions, and an obsession with doing evidence work that people can actually use.",
  },
  {
    year: "2017",
    title: "Systems for quality",
    body: "Stronger instruments, training playbooks, monitoring routines, and analysis workflows—quality became a habit.",
  },
  {
    year: "2019",
    title: "Scale without losing nuance",
    body: "Work expanded across sectors and geographies, while keeping stakeholder context and field realities central.",
  },
  {
    year: "2022",
    title: "Analytics & learning loops",
    body: "More teams asked for dashboards, rapid feedback, and learning systems—not just endline reports.",
  },
  {
    year: "Today",
    title: "A decade of impact",
    body: "Ten years in, the mission stays the same: illuminate impact and help organizations act on evidence.",
  },
];

export default function TenYears() {
  return (
    <div className="grain min-h-screen bg-[color:var(--paper)]">
      <header className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-[color:var(--paper)] shadow-[var(--shadow)]">
              <span className="font-[var(--font-display)] text-lg">D</span>
            </span>
            <span className="font-[var(--font-display)] text-lg tracking-tight">
              DevInsights
            </span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white"
          >
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <section className="print-border overflow-hidden rounded-3xl bg-white/60 p-7 shadow-sm sm:p-10">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-black/60">
            DevInsights — 10 years
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            A decade of insights,
            <span className="block text-black/70">impact and innovation.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/70">
            This page keeps the same spirit as the original site: a simple,
            grateful reflection. Use it as a scaffold—swap in real milestones,
            photos, and project highlights whenever you’re ready.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="print-border rounded-3xl bg-white/60 p-7 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-black/60">
                {m.year}
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-2xl tracking-tight">
                {m.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-black/70">{m.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 print-border rounded-3xl bg-black p-8 text-[color:var(--paper)] shadow-[var(--shadow)] sm:p-10">
          <h2 className="font-[var(--font-display)] text-2xl tracking-tight sm:text-3xl">
            Want this to be the real journey page?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--paper)]/80">
            Send the exact content you want (milestones, years, partner logos,
            photos). I’ll wire it up with a polished timeline, filters, and an
            image story layout.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[color:var(--paper)] px-4 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
          >
            Back to homepage
          </Link>
        </section>
      </main>
    </div>
  );
}
