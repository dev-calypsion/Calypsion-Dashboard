import Link from "next/link";
import {
  Sparkles,
  Radio,
  Cloud,
  LineChart,
  Cpu,
} from "lucide-react";

const projects = [
  {
    title: "Smart OEE Monitoring System",
    description:
      "Real-time Overall Equipment Effectiveness with downtime analytics, performance trends, and line-level visibility for maximum machine utilization.",
    tags: ["OEE", "Real-time", "Dashboards", "MES"],
    href: "/projects/smart-oee",
    border: "border-cyan-500/30",
  },
  {
    title: "RFID / RTLS Asset Tracking System",
    description:
      "Track materials and work-in-progress with RFID and RTLS: location maps, zone alerts, movement history, and inventory visibility across the plant.",
    tags: ["RTLS", "RFID", "Location", "WIP"],
    href: "/rtls",
    border: "border-violet-500/30",
  },
  {
    title: "Energy Monitoring Platform",
    description:
      "Energy per machine and unit with power usage, cost analytics, peak demand alerts, and sustainability reporting.",
    tags: ["Energy", "Analytics", "Cost", "Sustainability"],
    href: "/projects/energy-monitoring",
    border: "border-amber-500/30",
  },
  {
    title: "Predictive Maintenance Dashboard",
    description:
      "Vibration and health scoring with anomaly detection, alerts, remaining useful life (RUL) prediction, and maintenance scheduling.",
    tags: ["ML", "Vibration", "Alerts", "RUL"],
    href: "/projects/predictive-maintenance",
    border: "border-blue-500/30",
  },
  {
    title: "Digital Twin Simulation",
    description:
      "Simulate, optimize, and predict with bottleneck analysis, what-if scenarios, throughput modeling, and digital replicas of lines and assets.",
    tags: ["Simulation", "Digital Twin", "Optimization", "Throughput"],
    href: "/projects/production-flow",
    border: "border-emerald-500/30",
  },
];

const caseStudyResults = [
  { value: "25%", label: "reduction in downtime", sub: "Predictive alerts & root-cause insights" },
  { value: "20%", label: "increase in production efficiency", sub: "Real-time OEE & throughput optimization" },
  { value: "100%", label: "real-time asset visibility", sub: "RTLS & RFID across plants and warehouses" },
];

const technologies = [
  { name: "AI", icon: Sparkles },
  { name: "IoT", icon: Radio },
  { name: "MQTT", icon: Cloud },
  { name: "Cloud Analytics", icon: LineChart },
  { name: "Edge Computing", icon: Cpu },
];

export default function ProjectsPage() {
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
              Projects
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Industrial Solutions
              </span>
            </h1>
            <p className="text-base text-slate-300 sm:text-lg">
              Explore real-world projects and intelligent systems designed to optimize industrial
              operations—from OEE and RTLS to predictive maintenance and digital twins.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Live Demos
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Production-Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Grid */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Project Showcase
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Intelligent systems built for industrial operations.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              Deploy standalone solutions or combine them on the Calypsion platform for end-to-end
              visibility and control.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(8,47,73,0.4)] ${project.border} hover:border-cyan-500/40`}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <h3 className="relative text-lg font-semibold text-white">{project.title}</h3>
                <p className="relative mt-2 flex-1 text-sm text-slate-300">{project.description}</p>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-0.5 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="border-b border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Case Study Results
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Measurable impact across deployments.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              Example outcomes from Calypsion implementations in manufacturing and logistics.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {caseStudyResults.map((result) => (
              <div
                key={result.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(8,47,73,0.35)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <p className="relative text-3xl font-bold text-cyan-400">{result.value}</p>
                <p className="relative mt-1 text-sm font-medium text-white">{result.label}</p>
                <p className="relative mt-1 text-xs text-slate-400">{result.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Used */}
      <section className="border-b border-slate-800/70 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technology Used
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Built on modern industrial tech stack.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-6 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(8,47,73,0.35)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/40 bg-slate-900/80 text-cyan-400 transition-all duration-200 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{tech.name}</span>
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
                  Platform
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  See how these solutions fit into the full platform.
                </h2>
                <p className="max-w-xl text-sm text-slate-200">
                  Explore the Calypsion Industrial Intelligence Platform—modules, architecture,
                  and capabilities in one place.
                </p>
              </div>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,199,255,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,199,255,0.7)]"
              >
                View Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
