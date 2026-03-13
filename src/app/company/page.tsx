export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        {/* Background glows + grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-80 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/90">
              Company
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Engineering the Future of{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Smart Manufacturing
              </span>
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              Calypsion Innovations builds intelligent industrial platforms that transform factories with
              real-time data, predictive analytics, and automation—turning every production line into a
              self-optimizing system.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Real-time Industrial Intelligence
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Edge-to-Cloud Analytics
              </div>
            </div>
          </div>

          {/* Animated industrial panel */}
          <div className="mt-10 w-full max-w-md lg:mt-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-[0_0_40px_rgba(8,47,73,0.8)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-200">Factory Telemetry</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  Live
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { label: "OEE", value: "94.2%", accent: "from-emerald-400/30 to-emerald-500/10" },
                  { label: "Throughput", value: "+18%", accent: "from-cyan-400/30 to-cyan-500/10" },
                  { label: "Downtime", value: "-27%", accent: "from-rose-400/30 to-rose-500/10" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                    <div className="relative space-y-1">
                      <p className="text-[10px] text-slate-300">{item.label}</p>
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-24 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-900/40 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Line Utilization</span>
                  <span className="text-cyan-300">Shift A · Real-time</span>
                </div>
                <div className="flex h-10 items-end gap-1">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className="w-1.5 rounded-t-full bg-gradient-to-t from-cyan-500/10 via-cyan-400/70 to-sky-300"
                      style={{
                        height: `${30 + ((i * 13) % 40)}%`,
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About + Mission / Vision */}
      <section className="border-b border-slate-800/70 bg-slate-950/90">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-[2fr,3fr] lg:gap-10">
          {/* About */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Us
            </p>
            <h2 className="text-2xl font-semibold text-white">Industrial Intelligence, Engineered.</h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Calypsion Innovations is dedicated to building the intelligence layer for modern factories.
              Our platform ingests data from machines, sensors, and production systems to power real-time
              monitoring, predictive maintenance, and closed-loop optimization.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              From brownfield retrofits to fully connected greenfield plants, we help manufacturers unlock
              deep operational visibility, reduce unplanned downtime, and accelerate digital transformation
              without disrupting day-to-day operations.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Mission",
                body: "Empower industries with intelligent systems that optimize efficiency and decision making across every line, shift, and asset.",
              },
              {
                title: "Vision",
                body: "Build the operating system for the factories of the future, where data, machines, and people work in perfect synchronization.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_0_35px_rgba(15,23,42,0.9)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10" />
                <div className="relative space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {card.title}
                  </p>
                  <p className="text-sm text-slate-200">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Core Values
              </p>
              <h2 className="text-2xl font-semibold text-white">Principles that guide every deployment.</h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Innovation",
                body: "Continuous experimentation with AI, digital twins, and advanced control to stay ahead of industrial challenges.",
              },
              {
                title: "Reliability",
                body: "Production-grade platforms built for high availability, security, and predictable performance.",
              },
              {
                title: "Industrial Excellence",
                body: "Deep domain knowledge across manufacturing disciplines, from assembly lines to process plants.",
              },
              {
                title: "Data-Driven Decisions",
                body: "From operators to executives, everyone gets trustworthy, actionable insights in real time.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-[0_0_30px_rgba(15,23,42,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(8,47,73,0.9)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="relative space-y-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/40 bg-slate-900/80 text-xs font-semibold text-cyan-300">
                    ●
                  </div>
                  <h3 className="text-sm font-semibold text-white">{value.title}</h3>
                  <p className="text-xs text-slate-300">{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Industries */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row">
          {/* Technologies */}
          <div className="flex-1 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technologies We Use
            </p>
            <h2 className="text-2xl font-semibold text-white">A full-stack industrial intelligence platform.</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "Artificial Intelligence",
                "Industrial IoT",
                "RTLS & Tracking",
                "Predictive Analytics",
                "Digital Twin",
                "Cloud & Edge",
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-xs text-slate-200 shadow-[0_0_20px_rgba(15,23,42,0.9)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="flex-1 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Industries We Serve
            </p>
            <h2 className="text-2xl font-semibold text-white">Built for complex industrial operations.</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Discrete Manufacturing",
                "Automotive & EV",
                "Logistics & Warehousing",
                "Energy & Utilities",
              ].map((industry) => (
                <div
                  key={industry}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-500/60"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className="relative space-y-1">
                    <p className="text-sm font-semibold text-white">{industry}</p>
                    <p className="text-xs text-slate-300">
                      Use cases across OEE, quality, asset tracking, and connected operations.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 space-y-3 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Leadership
            </p>
            <h2 className="text-2xl font-semibold text-white">The team behind Calypsion Innovations.</h2>
            <p className="max-w-2xl text-sm text-slate-300">
              A multidisciplinary group of engineers, data scientists, and industrial specialists with
              experience across automotive, energy, and advanced manufacturing.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Founder / CEO", "Co-Founder / CTO", "Head of Industrial AI"].map((role, idx) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-[0_0_25px_rgba(15,23,42,0.9)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900 text-sm font-semibold text-cyan-200">
                  CI
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Placeholder Name</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Collaboration CTA */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-cyan-500/40 bg-slate-950/80 p-8 shadow-[0_0_50px_rgba(8,47,73,0.9)] backdrop-blur-xl">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Collaboration
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Let&apos;s build the future of industry together.
                </h2>
                <p className="max-w-xl text-sm text-slate-200">
                  Whether you&apos;re modernizing a single line or architecting a greenfield digital
                  factory, Calypsion Innovations can help design, deploy, and scale your industrial
                  intelligence platform.
                </p>
              </div>
              <a
                href="/schedule-demo"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,199,255,0.6)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

