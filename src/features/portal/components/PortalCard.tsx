"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortalProject } from "../types";

interface Props {
  project: PortalProject;
  onHover?: () => void;
}

export default function PortalCard({ project, onHover }: Props) {
  const Icon = project.icon;

  return (
    <div
      className={`group relative rounded-2xl border ${project.border} ${project.bg} p-6
        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
        flex flex-col gap-4`}
      onMouseEnter={onHover}
      onFocus={onHover}
    >
      {/* Status badge */}
      <div className="absolute top-4 right-4">
        {project.status === "active" ? (
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

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${project.iconBg} border ${project.border} flex items-center justify-center`}>
        <Icon className={`w-6 h-6 ${project.color}`} />
      </div>

      {/* Title + description */}
      <div>
        <h3 className="text-lg font-bold text-white leading-tight mb-1">
          {project.name}
        </h3>
        <p className="text-sm text-slate-400">{project.description}</p>
      </div>

      {/* Feature bullets */}
      <ul className="flex flex-col gap-1.5">
        {project.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${project.color.replace("text-", "bg-")}`} />
            {f}
          </li>
        ))}
      </ul>

      {/* Arrow on hover */}
      <div className="mt-auto flex justify-end">
        <ArrowRight
          className={`w-4 h-4 ${project.color} opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200`}
        />
      </div>

      {/* Full card link */}
      <Link href={project.href} className="absolute inset-0 rounded-2xl" aria-label={project.name} />
    </div>
  );
}