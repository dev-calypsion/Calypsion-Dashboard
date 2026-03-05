"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Gauge, Wrench, MapPin, GitBranch, Zap, BarChart2,
} from "lucide-react";
import PortalCard from "@/src/features/portal/components/PortalCard";
import { projects } from "@/src/features/portal/data/projects.data";

// ── Platform Overview projects (same data, local) ──
const overviewProjects = [
  {
    id: "smart-oee",
    name: "Smart OEE Monitoring",
    description: "Maximize Machine Efficiency",
    features: ["Real-time OEE", "Downtime Analytics", "Performance Trends"],
    status: "active",
    href: "/projects/smart-oee",
    icon: Gauge,
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/10",
    glow: "shadow-[0_0_30px_rgba(0,194,255,0.15)]",
    preview: "/previews/smart-oee.png",
  },
  {
    id: "predictive-maintenance",
    name: "Predictive Maintenance",
    description: "Vibration + Health Score",
    features: ["Anomaly Detection", "Alerts", "RUL Prediction"],
    status: "active",
    href: "/projects/predictive-maintenance",
    icon: Wrench,
    color: "text-blue-400",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    preview: "/previews/predictive-maintenance.png",
  },
  {
    id: "rtls",
    name: "RTLS for WIP Tracking",
    description: "Track Materials & Work-in-Progress",
    features: ["Location Map", "Zone Alerts", "Movement History"],
    status: "active",
    href: "/projects/rtls",
    icon: MapPin,
    color: "text-violet-400",
    border: "border-violet-500/30",
    iconBg: "bg-violet-500/10",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    preview: "/previews/rtls.png",
  },
  {
    id: "production-flow",
    name: "Production Flow Simulator",
    description: "Simulate · Optimize · Predict",
    features: ["Bottleneck Analysis", "What-if Scenarios", "Throughput"],
    status: "coming_soon",
    href: "/projects/production-flow",
    icon: GitBranch,
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    preview: "/previews/production-flow.png",
  },
  {
    id: "energy-monitoring",
    name: "Energy Monitoring",
    description: "Energy per Machine & Unit",
    features: ["Power Usage", "Cost Analytics", "Peak Alerts"],
    status: "coming_soon",
    href: "/projects/energy-monitoring",
    icon: Zap,
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    iconBg: "bg-yellow-500/10",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    preview: "/previews/energy-monitoring.png",
  },
  {
    id: "live-production",
    name: "Live Production Dashboard",
    description: "Shift Output · KPIs · Reports",
    features: ["Target vs Actual", "Line Efficiency", "Daily Summary"],
    status: "coming_soon",
    href: "/projects/live-production",
    icon: BarChart2,
    color: "text-orange-400",
    border: "border-orange-500/30",
    iconBg: "bg-orange-500/10",
    glow: "shadow-[0_0_30px_rgba(251,146,60,0.15)]",
    preview: "/previews/live-production.png",
  },
];

// ── Platform Overview Panel ──────────────────────────
function PlatformPanel({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const active = overviewProjects.find((p) => p.id === activeId)!;
  const Icon = active.icon;

  return (
    <div className="flex flex-col gap-4">

      {/* Video preview card */}
      <div className={`rounded-2xl border ${active.border} bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ${active.glow}`}>
        <div className="relative w-full aspect-video bg-slate-800 flex items-center justify-center overflow-hidden">
          <img
            key={active.id}
            src={active.preview}
            alt={active.name}
            className="w-full h-full object-cover opacity-80"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all duration-200 hover:scale-110">
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute top-3 left-3 text-xs font-semibold text-white/70 tracking-wider uppercase">
            Platform Overview
          </div>
        </div>

        {/* Edge/Cloud tags */}
        <div className="flex items-center justify-center gap-6 px-4 py-3 border-t border-slate-800">
          {["Edge + Cloud", "Secure", "Scalable"].map((tag) => (
            <span key={tag} className="text-xs text-slate-400 font-medium tracking-wide">{tag}</span>
          ))}
        </div>
      </div>

      {/* Key Impact Metrics */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
          Key Impact Metrics
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { dir: "↓", value: "20–30%", label: "Downtime Reduction", color: "text-cyan-400", glow: "shadow-[0_0_12px_rgba(0,194,255,0.1)]" },
            { dir: "↑", value: "15–25%", label: "Throughput Increase", color: "text-emerald-400", glow: "shadow-[0_0_12px_rgba(52,211,153,0.1)]" },
            { dir: "↓", value: "10–15%", label: "Energy Cost Reduction", color: "text-cyan-400", glow: "shadow-[0_0_12px_rgba(0,194,255,0.1)]" },
            { dir: "↑", value: "100%", label: "Asset Visibility", color: "text-emerald-400", glow: "shadow-[0_0_12px_rgba(52,211,153,0.1)]" },
          ].map((m) => (
            <div key={m.label} className={`rounded-xl p-3 bg-slate-800/50 border border-slate-700/50 ${m.glow}`}>
              <div className={`text-base font-bold ${m.color}`}>{m.dir} {m.value}</div>
              <div className="text-xs text-slate-400 mt-0.5 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ── Main HomeLayout ──────────────────────────────────
export default function HomeLayout() {
  const [activeId, setActiveId] = useState(overviewProjects[0].id);

  return (
    <div className="relative bg-slate-950 overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-125 h-125 bg-cyan-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-5%] w-100 h-100 bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 py-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-16">

            {/* Hero */}
            <div className="flex flex-col gap-6 pt-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Industrial Intelligence Platform
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight whitespace-nowrap">
                Industrial{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  Intelligence
                </span>{" "}
                Platform
              </h1>

              {/* Subheadline */}
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Real-time monitoring &nbsp;&bull;&nbsp; Predictive analytics &nbsp;&bull;&nbsp; Digital simulation
                <br />for manufacturing excellence
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demos"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white
                    bg-linear-to-r from-cyan-500 to-blue-600
                    shadow-[0_0_24px_rgba(0,194,255,0.35)]
                    hover:shadow-[0_0_36px_rgba(0,194,255,0.55)]
                    hover:-translate-y-0.5 transition-all duration-200"
                >
                  Explore Live Demos
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pilot"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200
                    border border-slate-700 bg-slate-900/60
                    hover:border-slate-500 hover:text-white hover:bg-slate-800/60
                    transition-all duration-200"
                >
                  Request Pilot Program
                </Link>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {["MQTT", "REST API", "Edge Analytics", "On-Prem & Cloud", "PLC Integration"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs text-slate-400 border border-slate-800 bg-slate-900/50 tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Demo Projects */}
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-cyan-400/60" />
                  <h2 className="text-xl font-semibold text-white tracking-tight">Demo Projects</h2>
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  View All Projects
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Cards grid — 2 cols to fit beside the panel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveId(project.id)}
                    className="cursor-pointer"
                  >
                    <PortalCard project={project} />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: sticky panel ── */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <PlatformPanel activeId={activeId} onSelect={setActiveId} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}