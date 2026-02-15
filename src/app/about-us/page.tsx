import Link from "next/link";

const values = [
  {
    title: "Strive for excellence",
    body: "Irrespective of the level of challenge, we choose to excel. We make mistakes, learn from them, and come out stronger and more empowered.",
    dot: "--teal",
  },
  {
    title: "Collaboration and co-creation",
    body: "We stay in constant dialogue with partners, clients, and stakeholders—building trusted connections to achieve a common goal: a better world.",
    dot: "--saffron",
  },
  {
    title: "Integrity",
    body: "We do what is right. We thrive on commitments made to stakeholders and honour them.",
    dot: "--rose",
  },
  {
    title: "Respect",
    body: "We respect each individual and draw strength from our differences.",
    dot: "--teal",
  },
  {
    title: "Flexibility",
    body: "We see our success in the success of our partners. Flexibility is a key aspect of every partnership and collaboration.",
    dot: "--saffron",
  },
];

const qualityPrinciples = [
  {
    title: "Methodological excellence",
    body: "Scientifically robust and contextually appropriate methods—tailored per assignment—producing reliable, unbiased, evidence-backed insights.",
  },
  {
    title: "Client partnership & responsiveness",
    body: "We view clients as partners and remain agile to evolving needs. Our process is transparent, participatory, and engages stakeholders from design to dissemination.",
  },
  {
    title: "Ethical research practices",
    body: "Respect for participants, confidentiality, and informed consent are non-negotiable. We follow ethical guidelines with cultural sensitivity and social responsibility.",
  },
  {
    title: "Impact-oriented reporting",
    body: "Deliverables are actionable roadmaps—clear, relevant, and usable—supporting decisions, strategy refinement, and real-world impact.",
  },
  {
    title: "Continuous learning & improvement",
    body: "A culture of reflection and learning—feedback loops, peer reviews, and capacity-building—keeps our quality moving upward.",
  },
];

const focusAreas = [
  "Public Health",
  "Nutrition",
  "WASH",
  "Gender",
  "Livelihood",
  "Child protection",
  "Climate change",
  "Education",
  "Governance",
  "Knowledge management",
];

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
        <h1 className="mt-3 font-[var(--font-display)] text-4xl leading-tight tracking-tight text-black sm:text-5xl">
          {title}
        </h1>
        {desc ? (
          <p className="mt-4 max-w-3xl text-base leading-7 text-black/70">
            {desc}
          </p>
        ) : null}
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        <span className="h-[1px] w-16 bg-black/20" />
        <span className="text-xs text-black/50">About</span>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="grain min-h-screen">
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
            <Link className="hover:text-black" href="/">
              Home
            </Link>
            <a className="hover:text-black" href="#mission">
              Mission
            </a>
            <a className="hover:text-black" href="#values">
              Values
            </a>
            <a className="hover:text-black" href="#quality">
              Quality
            </a>
            <a className="hover:text-black" href="#footprints">
              Footprints
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/devinsights-10-years"
              className="hidden rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-white sm:inline-flex"
            >
              10 years
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-[color:var(--paper)] shadow-[var(--shadow)] transition hover:translate-y-[-1px]"
            >
              Work with us
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionHeading
          eyebrow="About us"
          title="Evidence creation, built for decision-making."
          desc="DevInsights exists to strengthen social development through credible evidence and empowered leaders—so programs learn faster, scale responsibly, and serve communities better."
        />

        {/* Intro card */}
        <section className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="print-border overflow-hidden rounded-3xl bg-white/60 p-7 shadow-sm sm:p-10">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-black/60">
              The story
            </p>
            <p className="mt-4 text-base leading-7 text-black/70">
              Our work spans research, monitoring, evaluation and learning (RMEL)
              across diverse themes and geographies. We blend field discipline with
              analytic clarity—so findings are rigorous, and recommendations are
              actually usable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="print-border rounded-2xl bg-[color:var(--paper)]/70 p-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/55">
                  What we optimize for
                </p>
                <ul className="mt-3 space-y-2 text-sm text-black/75">
                  <li className="flex items-start gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-[color:var(--teal)]" />
                    Rigor without jargon.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-[color:var(--saffron)]" />
                    Actionable clarity.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-[color:var(--rose)]" />
                    Respect for field realities.
                  </li>
                </ul>
              </div>

              <div className="print-border rounded-2xl bg-[color:var(--paper)]/70 p-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/55">
                  What you get
                </p>
                <ul className="mt-3 space-y-2 text-sm text-black/75">
                  <li className="flex items-start gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-black/45" />
                    Transparent methods.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-black/45" />
                    Strong QA and ethics.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[7px] h-2 w-2 rounded-full bg-black/45" />
                    Decision-ready reporting.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="print-border relative overflow-hidden rounded-3xl bg-black p-7 text-[color:var(--paper)] shadow-[var(--shadow)] sm:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(520px_220px_at_20%_0%,rgba(10,122,122,0.25),transparent_60%),radial-gradient(520px_220px_at_110%_20%,rgba(208,122,0,0.24),transparent_55%)]" />
            <div className="relative">
              <p
                id="mission"
                className="text-xs font-semibold tracking-[0.24em] uppercase text-[color:var(--paper)]/70"
              >
                Our mission
              </p>
              <p className="mt-4 font-[var(--font-display)] text-2xl leading-snug">
                To become a credible source of evidence creation for effective
                decision making in the social development sector—changing lives.
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--paper)]/80">
                An equally important mission is creating leaders of tomorrow,
                generating wisdom in the field of research, monitoring and
                evaluation.
              </p>

              <p className="mt-8 text-xs font-semibold tracking-[0.24em] uppercase text-[color:var(--paper)]/70">
                Our vision
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--paper)]/80">
                To be the most trusted partner in transforming social development
                through innovative research, reliable evidence, and empowered
                leaders—fostering sustainable change and enriching lives across
                communities.
              </p>

              <Link
                href="/#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--paper)] px-4 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
              >
                Talk to the team
              </Link>
            </div>
          </aside>
        </section>

        {/* Values */}
        <section id="values" className="mt-14">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-black/60">
                Our values
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl tracking-tight sm:text-4xl">
                How we work
              </h2>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-[1px] w-16 bg-black/20" />
              <span className="text-xs text-black/50">Principles</span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="print-border relative overflow-hidden rounded-3xl bg-white/60 p-7 shadow-sm"
              >
                <div
                  className="pointer-events-none absolute right-[-60px] top-[-60px] h-48 w-48 rounded-full blur-3xl"
                  style={{ background: `color-mix(in oklab, var(${v.dot}) 18%, transparent)` }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-[var(--font-display)] text-2xl tracking-tight">
                      {v.title}
                    </h3>
                    <span
                      className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-[color:var(--paper)]/70"
                      aria-hidden
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: `var(${v.dot})` }}
                      />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/70">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality commitment */}
        <section id="quality" className="mt-14">
          <div className="print-border overflow-hidden rounded-3xl bg-white/60 p-7 shadow-sm sm:p-10">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-black/60">
              Quality commitment
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Credible, insightful, actionable
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-black/70">
              At DI, we are deeply committed to delivering research, evaluation,
              and advisory solutions that are credible, insightful, and actionable.
              Our work is driven by the highest standards of integrity,
              methodological rigor, and client-centricity.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {qualityPrinciples.map((p) => (
                <div key={p.title} className="print-border rounded-3xl bg-[color:var(--paper)]/70 p-6">
                  <p className="font-[var(--font-display)] text-xl tracking-tight">
                    {p.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-black/70">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footprints + Focus */}
        <section id="footprints" className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="print-border rounded-3xl bg-white/60 p-7 shadow-sm sm:p-10">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-black/60">
              Our footprints
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              A growing network across regions
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/70">
              With headquarters in Noida (Delhi NCR), we are positioned to address
              demands in northern India. Our office in Chennai strengthens our
              ability to execute on-the-ground initiatives in the south. Our work
              has made a remarkable impact across South Asia and in 28 states of
              India.
            </p>
            <p className="mt-4 text-sm leading-7 text-black/70">
              We partner with groups, institutions, governments, and data
              collection agencies specializing in rural research, social research,
              training and implementation, baseline surveys, WASH, and mixed-method
              studies. Our strength lies in a diverse, inclusive team and a broad
              partnership network across India.
            </p>

            <div className="mt-7 grid grid-cols-12 gap-1 rounded-2xl bg-[color:var(--paper)]/70 p-3">
              {Array.from({ length: 96 }).map((_, i) => {
                const hot = [
                  1, 2, 4, 7, 8, 11, 12, 13, 16, 18, 19, 23, 24, 28, 31, 33,
                  36, 37, 38, 41, 44, 47, 48, 52, 55, 58, 60, 63, 66, 70, 74,
                  78, 79, 83, 87, 88, 91, 94,
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
          </div>

          <div className="print-border rounded-3xl bg-black p-7 text-[color:var(--paper)] shadow-[var(--shadow)] sm:p-10">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[color:var(--paper)]/70">
              Our focus areas
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Thematic expertise
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--paper)]/80">
              DevInsights’ expertise spans a wide range of thematic areas. We’re
              committed to conducting rigorous research and providing actionable
              recommendations.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[color:var(--paper)]/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  {f}
                </span>
              ))}
            </div>

            <Link
              href="/#contact"
              className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-[color:var(--paper)] px-4 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
            >
              Discuss your project
            </Link>
          </div>
        </section>

        <footer className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-black/55">
            © {new Date().getFullYear()} DevInsights. All rights reserved.
          </p>
          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white"
            >
              Back to home
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-[color:var(--paper)] shadow-[var(--shadow)] transition hover:translate-y-[-1px]"
            >
              Work with us
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
