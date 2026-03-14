import Link from "next/link";
import {
  Gauge,
  Wrench,
  MapPin,
  Zap,
  GitBranch,
  Activity,
  BarChart3,
  Cpu,
} from "lucide-react";

const modules = [
  {
    title: "Smart OEE Monitoring",
    description:
      "Real-time Overall Equipment Effectiveness with downtime analytics, performance trends, and line-level visibility.",
    icon: Gauge,
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Vibration and health scoring with anomaly detection, alerts, and remaining useful life (RUL) prediction.",
    icon: Wrench,
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
  },
  {
    title: "RTLS Asset Tracking",
    description:
      "Track materials and work-in-progress with location maps, zone alerts, and movement history across the plant.",
    icon: MapPin,
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/30",
  },
  {
    title: "Energy Monitoring",
    description:
      "Energy per machine and unit with power usage, cost analytics, and peak demand alerts for sustainability.",
    icon: Zap,
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/30",
  },
  {
    title: "Digital Twin Simulation",
    description:
      "Simulate, optimize, and predict with bottleneck analysis, what-if scenarios, and throughput modeling.",
    icon: GitBranch,
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-500/30",
  },
];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/90">
              Platform
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              The{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Industrial Intelligence
              </span>{" "}
              Platform
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              Transform manufacturing operations with real-time monitoring, predictive analytics, and
              AI-driven insights—from the shop floor to the boardroom.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Real-Time Monitoring
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Predictive Analytics
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                AI-Driven Insights
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Platform Overview
              </p>
              <h2 className="text-2xl font-semibold text-white">
                One intelligent system for your entire operation.
              </h2>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                The Calypsion platform connects machines, sensors, and analytics into a single
                intelligent system. Ingest data from PLCs, IoT gateways, RTLS, and legacy systems;
                process it at the edge and in the cloud; and surface real-time KPIs, predictions,
                and recommendations to operators, engineers, and leadership.
              </p>
              <p>
                Whether you run a single line or a global network of plants, the platform scales with
                your operations—secure, reliable, and built for the demands of modern manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Modules */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Core Platform Modules
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Purpose-built modules for industrial intelligence.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              Deploy what you need today and extend as your digital strategy evolves.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-[0_0_30px_rgba(15,23,42,0.9)] transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(8,47,73,0.95)]"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                  />
                  <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${mod.border} bg-slate-900/80`}>
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-white">{mod.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-300">{mod.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real-Time Data Intelligence */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Real-Time Data Intelligence
              </p>
              <h2 className="text-2xl font-semibold text-white">
                From factory data to actionable insights in milliseconds.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                The platform processes real-time factory data using AI and advanced analytics.
                Streams from sensors, machines, and MES are normalized, enriched, and fed into
                models for anomaly detection, forecasting, and optimization—so you see what’s
                happening now and what’s likely to happen next.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Edge nodes handle low-latency aggregation and local alerts; the cloud layer
                runs heavier analytics, digital twins, and cross-site benchmarking. The result:
                a single pane of glass for operations, maintenance, and leadership.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_40px_rgba(8,47,73,0.6)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12)_0,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15)_0,transparent_50%)]" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Activity className="h-5 w-5 text-cyan-400" />
                  <span>Live sensor & event streams</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Cpu className="h-5 w-5 text-cyan-400" />
                  <span>Edge & cloud processing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <BarChart3 className="h-5 w-5 text-cyan-400" />
                  <span>AI analytics & dashboards</span>
                </div>
                <div className="mt-4 h-20 rounded-xl bg-slate-950/80 p-3">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Data pipeline</span>
                    <span className="text-emerald-400">Active</span>
                  </div>
                  <div className="flex h-8 items-end gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/20 via-cyan-400/60 to-cyan-300"
                        style={{ height: `${25 + (i * 5) % 55}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Platform Benefits
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Why manufacturers choose the Calypsion platform.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Reduce downtime with predictive alerts and root-cause insights",
              "Improve production efficiency through real-time OEE and throughput visibility",
              "Real-time operational insights for operators, engineers, and managers",
              "Data-driven decision making with trusted KPIs and benchmarks",
            ].map((benefit, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-all duration-200 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(8,47,73,0.4)]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  <span className="text-xs font-bold">{i + 1}</span>
                </span>
                <p className="text-sm text-slate-200">{benefit}</p>
              </div>
            ))}
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
                  Next Steps
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Explore our solutions and see the platform in action.
                </h2>
                <p className="max-w-xl text-sm text-slate-200">
                  From Smart OEE and predictive maintenance to RTLS and digital twin—discover how
                  each module fits into your industrial intelligence strategy.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,199,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,199,255,0.7)]"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
