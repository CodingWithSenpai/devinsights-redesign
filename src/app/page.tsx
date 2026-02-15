import Link from "next/link";

const focusAreas = [
  "Public Health",
  "Nutrition",
  "WASH",
  "Gender",
  "Livelihood",
  "Child Protection",
  "Climate Change",
  "Education",
  "Governance",
  "Knowledge Management",
];

const services = [
  {
    title: "Social Research",
    desc: "Field-to-boardroom research design, sampling, instruments, and rigorous analysis—built for real-world constraints.",
    accent: "--teal",
  },
  {
    title: "Impact Assessment",
    desc: "Causal thinking, contribution analysis, and practical MEL frameworks to understand what changed, and why.",
    accent: "--saffron",
  },
  {
    title: "Impact Evaluation",
    desc: "Baseline, midline and endline evaluations with clear, decision-ready findings and recommendations.",
    accent: "--rose",
  },
  {
    title: "Data Analytics",
    desc: "Dashboards, data quality systems, and insight workflows that help teams move from reporting to learning.",
    accent: "--teal",
  },
];

const testimonials = [
  {
    quote:
      "The final evaluation report addressed every component of the ToR in detail and presented analyses of good quality and standards. We appreciate their willingness to support additional analyses and interpretation even months after completion.",
    name: "CARE — Madhya Pradesh Nutrition Project",
    role: "Partner feedback",
  },
  {
    quote:
      "Very happy with the dedication and effort shown by the DevInsights team. Right from the beginning, you took time to understand the subject and worked to accommodate our continuous feedback.",
    name: "Deepak Krishnan",
    role: "Additional Director (Energy Program), WRI India",
  },
  {
    quote:
      "Thank you for submitting the report on time and meeting all timelines. The report is also satisfactory to key stakeholders — we can proudly say we selected the right agency.",
    name: "Dr. Ritu Kumar Mishra",
    role: "Monitoring, Evaluation & Learning Advisor — THALI Project (John Snow/India)",
  },
  {
    quote:
      "Professional, focused and flexible. We had great insights that helped us better understand our target on the field.",
    name: "Laurence Gence",
    role: "Senior Marketing Project Manager",
  },
  {
    quote:
      "Organized and timeline-driven, with strong data quality. A collaborative effort, and supportive even when modifications were suggested.",
    name: "Tunisha Kapoor",
    role: "William J. Clinton Foundation, India",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/55 px-3 py-1 text-sm text-black/80 backdrop-blur-sm">
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-8">
      <div>
        <p className="text-xs font-semibold tracking-[0.24em] text-black/60 uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-[var(--font-display)] text-3xl leading-tight tracking-tight text-black sm:text-4xl">
          {title}
        </h2>
        {desc ? (
          <p className="mt-3 max-w-2xl text-base leading-7 text-black/70">
            {desc}
          </p>
        ) : null}
      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <span className="h-[1px] w-16 bg-black/20" />
        <span className="text-xs text-black/50">DevInsights</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="grain min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--paper)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="group inline-flex items-baseline gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-[color:var(--paper)] shadow-[var(--shadow)]">
              <span className="font-[var(--font-display)] text-lg">D</span>
            </span>
            <span className="leading-none">
              <span className="block font-[var(--font-display)] text-lg tracking-tight">
                DevInsights
              </span>
              <span className="block text-xs text-black/60">
                Illuminating Impact
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-black/70 sm:flex">
            <a className="hover:text-black" href="#who-we-are">
              Who we are
            </a>
            <a className="hover:text-black" href="#solutions">
              Solutions
            </a>
            <a className="hover:text-black" href="#coverage">
              Coverage
            </a>
            <a className="hover:text-black" href="#focus">
              Focus areas
            </a>
            <a className="hover:text-black" href="#testimonials">
              Testimonials
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/devinsights-10-years"
              className="hidden rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-white sm:inline-flex"
            >
              10 years
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-[color:var(--paper)] shadow-[var(--shadow)] transition hover:translate-y-[-1px]"
            >
              Work with us
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16">
        <div className="print-border relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,var(--paper),var(--paper-2))] p-6 shadow-[var(--shadow)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(700px_260px_at_15%_10%,rgba(10,122,122,0.14),transparent_70%),radial-gradient(760px_320px_at_90%_0%,rgba(208,122,0,0.14),transparent_65%),radial-gradient(620px_260px_at_80%_92%,rgba(178,58,72,0.12),transparent_60%)]" />

          <div className="relative grid gap-10 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="rise">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-black/70">
                <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--teal)]" />
                Social Research • Impact Assessment • Evaluation • Analytics
              </div>

              <h1 className="mt-5 font-[var(--font-display)] text-4xl leading-[1.05] tracking-tight text-black sm:text-6xl">
                Evidence that travels
                <span className="block text-black/70">from fieldwork to policy.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-black/70 sm:text-lg">
                In the ever-evolving landscape of social development, data is the
                compass guiding organizations toward meaningful change. DevInsights
                partners with teams across sectors to measure, learn, and maximize
                impact—without losing the nuance of lived realities.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-[var(--shadow)] transition hover:translate-y-[-1px]"
                >
                  Explore solutions
                </a>
                <a
                  href="#who-we-are"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Learn who we are
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4">
                <div className="print-border rounded-2xl bg-white/55 p-4">
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-black/55">
                    Coverage
                  </dt>
                  <dd className="mt-2 font-[var(--font-display)] text-2xl tracking-tight">
                    29
                    <span className="ml-1 text-sm text-black/60">states/UTs</span>
                  </dd>
                </div>
                <div className="print-border rounded-2xl bg-white/55 p-4">
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-black/55">
                    Samples
                  </dt>
                  <dd className="mt-2 font-[var(--font-display)] text-2xl tracking-tight">
                    350k+
                  </dd>
                </div>
                <div className="print-border rounded-2xl bg-white/55 p-4">
                  <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-black/55">
                    Projects
                  </dt>
                  <dd className="mt-2 font-[var(--font-display)] text-2xl tracking-tight">
                    100+
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="rise sm:pt-3" style={{ animationDelay: "120ms" }}>
              <div className="print-border relative overflow-hidden rounded-3xl bg-white/55 p-6">
                <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full bg-[color:var(--teal)]/10 blur-2xl" />
                <div className="absolute bottom-[-50px] left-[-50px] h-56 w-56 rounded-full bg-[color:var(--saffron)]/10 blur-2xl" />

                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">
                  Celebrating 10 years
                </p>
                <p className="mt-3 font-[var(--font-display)] text-2xl leading-snug">
                  A decade of insights, impact and innovation.
                </p>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  Thank you for being with us. Explore the milestones that shaped
                  our work—and the questions we’re excited to answer next.
                </p>
                <Link
                  href="/devinsights-10-years"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-[color:var(--paper)] shadow-sm transition hover:translate-y-[-1px]"
                >
                  See our journey
                </Link>

                <div className="mt-6 grid gap-3">
                  <div className="print-border rounded-2xl bg-[color:var(--paper)]/70 p-4">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">
                      What we deliver
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-black/75">
                      <li className="flex items-start gap-2">
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[color:var(--teal)]" />
                        Decision-ready findings (not just reports).
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[color:var(--saffron)]" />
                        Transparent methods and defensible evidence.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[color:var(--rose)]" />
                        Collaboration that respects field realities.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section id="who-we-are" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Who we are"
          title="Illuminating impact"
          desc="RMEL solutions tailored to context—grounded in rigorous methods, built for action."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="print-border rounded-3xl bg-white/60 p-7 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">
              The work
            </p>
            <p className="mt-4 text-base leading-7 text-black/70">
              From Education, WASH, Livelihood and Healthcare to poverty alleviation
              and environmental sustainability, we’ve evaluated diverse programs and
              helped teams measure and maximize their impact.
            </p>
          </div>

          <div className="print-border rounded-3xl bg-white/60 p-7 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">
              The craft
            </p>
            <p className="mt-4 text-base leading-7 text-black/70">
              We combine field research discipline with modern analytics—clear
              instruments, strong QA, and reporting that makes evidence usable.
            </p>
          </div>

          <div className="print-border rounded-3xl bg-white/60 p-7 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">
              The promise
            </p>
            <p className="mt-4 text-base leading-7 text-black/70">
              Join us on a journey of exploration. Let DevInsights guide your path
              to a more sustainable and equitable future.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Impactful solutions"
          title="Innovation and reach"
          desc="A complete suite of services designed to drive change and informed decision-making."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="rise print-border group relative overflow-hidden rounded-3xl bg-white/60 p-7 shadow-sm transition hover:translate-y-[-2px]"
              style={{ animationDelay: `${120 + idx * 80}ms` }}
            >
              <div
                className="pointer-events-none absolute right-[-60px] top-[-60px] h-48 w-48 rounded-full blur-3xl"
                style={{ background: `color-mix(in oklab, var(${s.accent}) 22%, transparent)` }}
              />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-[var(--font-display)] text-2xl tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/70">{s.desc}</p>
                </div>
                <span
                  className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-[color:var(--paper)]/70"
                  aria-hidden
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: `var(${s.accent})` }}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Our coverage"
          title="Where we have reached"
          desc="Research across India, at scale—without compromising quality."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="print-border relative overflow-hidden rounded-3xl bg-white/60 p-7 shadow-sm">
            <p className="text-sm leading-7 text-black/70">
              DevInsights has a proven track record of conducting research in 29
              states and union territories across India, covering over 350,000
              samples and successfully completing more than 100 projects.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                { label: "States/UTs covered", value: "29" },
                { label: "Samples covered", value: "350,000+" },
                { label: "Projects completed", value: "100+" },
              ].map((k) => (
                <div key={k.label} className="print-border rounded-2xl bg-[color:var(--paper)]/70 p-4">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/55">
                    {k.label}
                  </p>
                  <p className="mt-2 font-[var(--font-display)] text-2xl tracking-tight">
                    {k.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Education",
                "WASH",
                "Livelihood",
                "Healthcare",
                "Climate",
                "Nutrition",
              ].map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>

          <div className="print-border relative overflow-hidden rounded-3xl bg-white/60 p-7 shadow-sm">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">
              Fieldwork footprint
            </p>
            <p className="mt-3 text-sm leading-6 text-black/70">
              A stylized map-like grid to represent coverage. Replace with an
              actual map when ready.
            </p>

            <div className="mt-6 grid grid-cols-10 gap-1 rounded-2xl bg-[color:var(--paper)]/70 p-3">
              {Array.from({ length: 100 }).map((_, i) => {
                const hot = [
                  2, 3, 6, 11, 14, 15, 18, 22, 26, 27, 33, 38, 41, 44, 47, 52,
                  57, 58, 61, 64, 67, 71, 74, 77, 79, 83, 86, 89, 93, 96,
                ].includes(i);
                return (
                  <span
                    key={i}
                    className="block aspect-square rounded-[6px]"
                    style={{
                      background: hot
                        ? "color-mix(in oklab, var(--teal) 65%, white)"
                        : "rgba(18,19,22,0.06)",
                    }}
                    aria-hidden
                  />
                );
              })}
            </div>

            <div className="mt-6 print-border rounded-2xl bg-[color:var(--paper)]/70 p-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/55">
                Quality signals
              </p>
              <ul className="mt-3 space-y-2 text-sm text-black/75">
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-[color:var(--teal)]" />
                  Enumerator training and field monitoring.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-[color:var(--saffron)]" />
                  Data checks, audits, and reproducible analysis.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-[color:var(--rose)]" />
                  Clear reporting and stakeholder workshops.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section id="focus" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Our focus areas"
          title="Breadth with depth"
          desc="Expertise across thematic areas—with method rigor and contextual sensitivity."
        />

        <div className="mt-10 print-border rounded-3xl bg-white/60 p-7 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[color:var(--paper)]/70 px-4 py-2 text-sm text-black/75"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-black/45" />
                {f}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-black/70">
            We’re committed to conducting rigorous research and providing
            actionable recommendations to help organizations achieve goals and
            make a lasting impact.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Happy clients and partners"
          desc="Delighted to collaborate with teams who drive our passion."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              className="rise print-border rounded-3xl bg-white/60 p-7 shadow-sm"
              style={{ animationDelay: `${80 + idx * 70}ms` }}
            >
              <blockquote className="text-sm leading-7 text-black/75">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-xs text-black/60">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pt-10 pb-20 sm:px-6">
        <div className="print-border overflow-hidden rounded-3xl bg-black p-8 text-[color:var(--paper)] shadow-[var(--shadow)] sm:p-12">
          <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[color:var(--paper)]/70">
                Let’s collaborate
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
                Ready to measure what matters?
              </h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--paper)]/80">
                Share your context and constraints. We’ll suggest an approach,
                a timeline, and what “good evidence” looks like for your decision.
              </p>
            </div>

            <div className="print-border rounded-3xl bg-white/5 p-6">
              <p className="text-sm font-semibold">Next step</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--paper)]/80">
                Add your contact details and preferred channel. (Hook this up to
                a form / email once you’re ready.)
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--paper)] px-4 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
                >
                  Contact form (coming soon)
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold text-[color:var(--paper)] transition hover:bg-white/5"
                >
                  Back to top
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-[color:var(--paper)]/60">
            © {new Date().getFullYear()} DevInsights. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
