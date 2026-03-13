"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortalCard from "@/src/features/portal/components/PortalCard";
import { projects } from "@/src/features/portal/data/projects.data";
import { useState } from "react";

export default function DemoProjects() {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id);
  const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <section className="relative bg-slate-950 py-20 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-cyan-400/60" />
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Industrial Solution Portfolio
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
          >
            View All Solutions
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <PortalCard
              key={project.id}
              project={project}
              onHover={() => setActiveId(project.id)}
            />
          ))}
        </div>

        {/* Use Cases strip */}
        {activeProject?.industries && activeProject.industries.length > 0 && (
          <div className="mt-10 rounded-2xl border border-cyan-500/25 bg-gradient-to-r from-slate-900/80 via-slate-950 to-slate-950/80 px-5 py-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
                  Use Cases
                </p>
                <p className="text-sm text-slate-300">
                  Explore how <span className="font-semibold text-white">{activeProject.name}</span> is
                  applied across industrial environments.
                </p>
              </div>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {activeProject.industries.map((industry) => (
                <div
                  key={industry}
                  className="min-w-[140px] rounded-xl border border-cyan-500/25 bg-slate-900/60 px-4 py-3 flex flex-col gap-1 shadow-[0_0_20px_rgba(8,145,178,0.35)]"
                >
                  <span className="text-xs font-semibold text-cyan-100 tracking-wide">
                    {industry}
                  </span>
                  <span className="text-[11px] text-cyan-200/80">
                    Sensors → Edge Gateway → Cloud & Analytics
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}