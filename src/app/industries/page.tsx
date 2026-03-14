import Link from "next/link";
import {
  Factory,
  Car,
  Package,
  Zap,
  Building2,
  Shield,
  TrendingUp,
  Eye,
} from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    description:
      "Discrete and process manufacturing: real-time OEE, production monitoring, quality traceability, and line optimization.",
    icon: Factory,
    border: "border-cyan-500/30",
  },
  {
    title: "Automotive",
    description:
      "Assembly lines, EV production, and supply chain: machine health, throughput analytics, and integrated MES visibility.",
    icon: Car,
    border: "border-blue-500/30",
  },
  {
    title: "Logistics & Warehousing",
    description:
      "Distribution centers and yards: RTLS for assets and WIP, dock scheduling, inventory visibility, and movement analytics.",
    icon: Package,
    border: "border-violet-500/30",
  },
  {
    title: "Energy & Utilities",
    description:
      "Power, oil & gas, and utilities: smart energy analytics, asset health, consumption monitoring, and predictive maintenance.",
    icon: Zap,
    border: "border-amber-500/30",
  },
  {
    title: "Smart Infrastructure",
    description:
      "Buildings, campuses, and critical infrastructure: connected systems, environmental monitoring, and operational dashboards.",
    icon: Building2,
    border: "border-emerald-500/30",
  },
];

const useCases = [
  { industry: "Manufacturing", useCase: "Production monitoring and OEE optimization" },
  { industry: "Automotive", useCase: "Assembly line health and throughput analytics" },
  { industry: "Logistics & Warehousing", useCase: "Real-time asset and WIP tracking" },
  { industry: "Energy & Utilities", useCase: "Smart energy analytics and asset reliability" },
  { industry: "Smart Infrastructure", useCase: "Connected systems and environmental monitoring" },
];

const benefits = [
  {
    title: "Efficiency",
    description: "Optimize throughput, reduce changeover time, and eliminate bottlenecks with real-time visibility.",
    icon: TrendingUp,
  },
  {
    title: "Safety",
    description: "Monitor conditions, enforce zones, and support compliance with auditable data and alerts.",
    icon: Shield,
  },
  {
    title: "Data Visibility",
    description: "Unified dashboards and KPIs so every team has trusted, contextualized operational data.",
    icon: Eye,
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
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
              Industries
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Industries We{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Transform
              </span>
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              Our industrial intelligence platform supports multiple industries with smart monitoring
              and analytics—from the factory floor to the grid and beyond.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Smart Monitoring
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Cross-Industry Analytics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Sectors We Serve
            </p>
            <h2 className="text-2xl font-semibold text-white">
              One platform, built for diverse industrial operations.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(8,47,73,0.4)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${ind.border} bg-slate-900/80 text-cyan-300 transition-all duration-200 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative text-lg font-semibold text-white">{ind.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-300">{ind.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Industry Use Cases
            </p>
            <h2 className="text-2xl font-semibold text-white">
              How the platform is used in each industry.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              From production lines to distribution centers and energy assets—see how Calypsion
              delivers value where it matters.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.industry}
                className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition-all duration-200 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(8,47,73,0.3)]"
              >
                <p className="text-sm font-semibold text-cyan-300">{item.industry}</p>
                <p className="text-sm text-slate-300">{item.useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Across Industries */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Benefits Across Industries
            </p>
            <h2 className="text-2xl font-semibold text-white">
              How the platform improves efficiency, safety, and data visibility.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {benefits.map((b) => {
              const BIcon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(8,47,73,0.35)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  <div className="relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/40 bg-slate-900/80 text-cyan-400">
                    <BIcon className="h-5 w-5" />
                  </div>
                  <h3 className="relative text-base font-semibold text-white">{b.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-300">{b.description}</p>
                </div>
              );
            })}
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
                  Get Started
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  See how Calypsion can transform your industry.
                </h2>
                <p className="max-w-xl text-sm text-slate-200">
                  Schedule a demo to explore use cases for your sector and see the platform in action.
                </p>
              </div>
              <Link
                href="/schedule-demo"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,199,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,199,255,0.7)]"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
