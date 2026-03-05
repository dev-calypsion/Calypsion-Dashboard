"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortalCard from "@/src/features/portal/components/PortalCard";
import { projects } from "@/src/features/portal/data/projects.data";
import { use } from "react";

export default function DemoProjects() {
  return (
    <section className="relative bg-slate-950 py-20 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <PortalCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}