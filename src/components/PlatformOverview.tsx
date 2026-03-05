"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Gauge, Wrench, MapPin, GitBranch, Zap, BarChart2,
} from "lucide-react";

const projects = [
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
    // Replace with your actual preview image paths in /public
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

export default function PlatformOverview() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId)!;
  const Icon = active.icon;

  return (
    <section className="relative bg-slate-950 py-20 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-cyan-400/60" />
          <h2 className="text-xl font-semibold text-white tracking-tight">Platform Overview</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 items-start">

          {/* ── LEFT: Project tabs ── */}
          <div className="flex flex-col gap-2">
            {projects.map((p) => {
              const PIcon = p.icon;
              const isActive = p.id === activeId;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`group w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border text-left
                    transition-all duration-200
                    ${isActive
                      ? `${p.border} ${p.iconBg} ${p.glow}`
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-800/40"
                    }`}
                >
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0
                    ${isActive ? p.iconBg : "bg-slate-800"}
                    border ${isActive ? p.border : "border-slate-700"}`}
                  >
                    <PIcon className={`w-4 h-4 ${isActive ? p.color : "text-slate-500"}`} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-semibold truncate ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                      {p.name}
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-0.5">{p.description}</div>
                  </div>

                  {/* Status dot */}
                  <div className="shrink-0">
                    {p.status === "active" ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 block animate-pulse" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-600 block" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: Preview panel ── */}
          <div className={`rounded-2xl border ${active.border} bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 ${active.glow}`}>

            {/* Preview image */}
            <div className="relative w-full aspect-video bg-slate-800 flex items-center justify-center overflow-hidden">
              <img
                key={active.id}
                src={active.preview}
                alt={active.name}
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 cursor-pointer transition-all duration-200 hover:scale-110">
                  <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Top-left label */}
              <div className="absolute top-3 left-3 text-xs font-semibold text-white/70 tracking-wider uppercase">
                {active.name}
              </div>

              {/* Status badge */}
              <div className="absolute top-3 right-3">
                {active.status === "active" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Demo
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-500/10 border border-slate-500/20 px-2.5 py-0.5 rounded-full">
                    Demo
                  </span>
                )}
              </div>
            </div>

            {/* Info panel */}
            <div className="p-5 flex flex-col gap-4">

              {/* Title + description */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-8 h-8 rounded-lg ${active.iconBg} border ${active.border} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${active.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white">{active.name}</h3>
                </div>
                <p className="text-sm text-slate-400">{active.description}</p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {active.features.map((f) => (
                  <span
                    key={f}
                    className={`px-2.5 py-1 rounded-full text-xs border ${active.border} ${active.iconBg} ${active.color}`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={active.href}
                className={`inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white
                  bg-linear-to-r from-cyan-500 to-blue-600
                  shadow-[0_0_20px_rgba(0,194,255,0.25)]
                  hover:shadow-[0_0_28px_rgba(0,194,255,0.45)]
                  hover:-translate-y-0.5 transition-all duration-200`}
              >
                Launch Demo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}