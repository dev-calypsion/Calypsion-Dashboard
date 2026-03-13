export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        {/* Background glows + circuit grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/90">
              Technology
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Technology Powering{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Intelligent Industry
              </span>
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              Our platform combines AI, IoT, real-time data streaming, and advanced analytics to transform
              industrial operations into intelligent, self-optimizing systems.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Edge to Cloud Architecture
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                AI-driven Industrial Intelligence
              </span>
            </div>
          </div>

          {/* Futuristic network visualization */}
          <div className="mt-10 w-full max-w-md lg:mt-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-[0_0_40px_rgba(8,47,73,0.8)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,0.15)_0,transparent_55%),radial-gradient(circle_at_90%_100%,rgba(59,130,246,0.2)_0,transparent_55%)]" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-200">Calypsion Data Mesh</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                    Synchronized
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-[11px]">
                  {[
                    "Sensors",
                    "IoT Gateways",
                    "PLC Data",
                    "RTLS Tags",
                    "Edge Nodes",
                    "Cloud Analytics",
                  ].map((node) => (
                    <div
                      key={node}
                      className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-2 text-center"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-500/20" />
                      <span className="relative text-[10px] text-slate-200">{node}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 h-16 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-900/40 p-3">
                  <div className="mb-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Event Stream</span>
                    <span className="text-cyan-300">Kafka / MQTT</span>
                  </div>
                  <div className="flex h-7 items-center gap-1">
                    {Array.from({ length: 22 }).map((_, i) => (
                      <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={i}
                        className="h-1 w-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-cyan-400/80 to-sky-300"
                        style={{ opacity: 0.4 + ((i * 7) % 40) / 100 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Stack */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Core Technology Stack
            </p>
            <h2 className="text-2xl font-semibold text-white">Foundations of the Calypsion platform.</h2>
            <p className="max-w-2xl text-sm text-slate-300">
              A modular, cloud-native stack purpose-built for industrial environments, from shop-floor
              sensors to executive dashboards.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Artificial Intelligence & Machine Learning",
                body: "Models for anomaly detection, forecasting, root-cause analysis, and intelligent recommendations.",
                icon: "AI",
              },
              {
                title: "Internet of Things (IoT)",
                body: "Connects machines, PLCs, and sensors using industrial protocols and secure gateways.",
                icon: "IoT",
              },
              {
                title: "Real-Time Location Systems (RTLS)",
                body: "High-resolution tracking of assets, materials, and WIP across plants and warehouses.",
                icon: "RTLS",
              },
              {
                title: "Edge Computing",
                body: "On-premise processing for low-latency control, buffering, and resilience to connectivity loss.",
                icon: "EDGE",
              },
              {
                title: "Cloud Infrastructure",
                body: "Secure, scalable cloud services for storage, analytics, and integration with enterprise systems.",
                icon: "CLOUD",
              },
              {
                title: "Data Analytics & Visualization",
                body: "Interactive dashboards, KPIs, and drill-down analytics for every role in the organization.",
                icon: "DATA",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(8,47,73,0.95)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/50 bg-slate-900/90 text-[11px] font-semibold text-cyan-300">
                    {item.icon}
                  </div>
                </div>
                <div className="relative space-y-2">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 space-y-3 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Platform Architecture
            </p>
            <h2 className="text-2xl font-semibold text-white">From industrial signals to intelligent decisions.</h2>
            <p className="max-w-2xl text-sm text-slate-300">
              A vertically integrated architecture that connects sensors and equipment to cloud analytics and
              operator interfaces in a secure, deterministic way.
            </p>
          </div>

          <div className="overflow-x-auto pb-3">
            <div className="relative flex min-w-[720px] items-stretch justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(15,23,42,0.95)]">
              {[
                "Industrial Sensors",
                "IoT Gateway",
                "MQTT / Data Streaming",
                "Cloud Processing",
                "AI Analytics",
                "Dashboard & Insights",
              ].map((stage, index, arr) => (
                <div key={stage} className="flex flex-1 flex-col items-center">
                  <div className="relative flex h-16 w-40 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-blue-600/10" />
                    <span className="relative text-xs font-semibold text-slate-100 text-center px-3">
                      {stage}
                    </span>
                  </div>
                  {index < arr.length - 1 && (
                    <div className="flex flex-1 items-center justify-center">
                      <div className="mt-2 h-px w-full max-w-[60px] bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Key Capabilities
            </p>
            <h2 className="text-2xl font-semibold text-white">What the Calypsion platform delivers.</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-Time Data Processing",
                body: "Ingest, normalize, and analyze high-volume sensor and event data with millisecond latency.",
              },
              {
                title: "Predictive Maintenance",
                body: "Machine-learning models anticipate failures, enabling condition-based maintenance strategies.",
              },
              {
                title: "Digital Twin Simulation",
                body: "Virtual replicas of assets and lines for exploring what-if scenarios and optimization strategies.",
              },
              {
                title: "Energy Analytics",
                body: "Granular monitoring of energy consumption across assets, lines, and plants to reduce cost and waste.",
              },
              {
                title: "Smart Factory Monitoring",
                body: "Unified views of OEE, throughput, quality, and WIP across multisite operations.",
              },
              {
                title: "Open Integrations",
                body: "APIs and connectors to MES, ERP, historian, and other enterprise systems.",
              },
            ].map((capability) => (
              <div
                key={capability.title}
                className="group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-500/60"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <h3 className="relative text-sm font-semibold text-white">{capability.title}</h3>
                <p className="relative text-xs text-slate-300">{capability.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Security & Reliability
            </p>
            <h2 className="text-2xl font-semibold text-white">Built for mission-critical operations.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Secure Data Transmission",
                body: "TLS-encrypted channels, role-based access, and strong identity for devices, services, and users.",
              },
              {
                title: "Scalable Cloud Infrastructure",
                body: "Horizontally scalable services with autoscaling and multi-region deployments.",
              },
              {
                title: "High Availability Systems",
                body: "Redundant components, health checks, and failover strategies for 24/7 operations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.9)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
                <div className="relative space-y-2">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technology Benefits
            </p>
            <h2 className="text-2xl font-semibold text-white">Why manufacturers choose Calypsion.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Faster industrial decision making with real-time, contextualized data.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Reduced downtime through predictive alerts and automated root-cause insights.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Increased operational efficiency via optimized throughput, changeovers, and asset utilization.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Data-driven manufacturing culture with shared, trusted KPIs across teams.</span>
              </li>
            </ul>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.9)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Outcomes Snapshot
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-200">
                <div>
                  <p className="text-2xl font-semibold text-emerald-400">20–30%</p>
                  <p className="text-xs text-slate-400">Downtime reduction</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-cyan-400">15–25%</p>
                  <p className="text-xs text-slate-400">Throughput increase</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-sky-400">10–15%</p>
                  <p className="text-xs text-slate-400">Energy cost reduction</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-indigo-300">100%</p>
                  <p className="text-xs text-slate-400">Asset visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-cyan-500/40 bg-slate-950/80 p-8 shadow-[0_0_50px_rgba(8,47,73,0.9)] backdrop-blur-xl">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  See It Live
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  See our technology in action.
                </h2>
                <p className="max-w-xl text-sm text-slate-200">
                  Experience how Calypsion orchestrates data from sensors, equipment, and systems into a
                  single, intelligent industrial platform.
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

