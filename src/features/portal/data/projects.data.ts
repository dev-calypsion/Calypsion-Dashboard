import { Activity, Radio, Box } from "lucide-react";
import { PortalProject } from "../types";

export const projects: PortalProject[] = [
  {
    id: "rtls",
    name: "RTLS",
    description: "Real-Time Location System for asset tracking and zone monitoring.",
    icon: Radio,
    href: "/rtls",
    status: "active",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    id: "vibration",
    name: "Vibration Monitoring",
    description: "Predictive maintenance and real-time vibration analysis for machinery.",
    icon: Activity,
    href: "/vibrationmodule",
    status: "active",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    id: "digital-twin",
    name: "Digital Twin",
    description: "Virtual replica of physical assets for simulation and analysis.",
    icon: Box,
    href: "#",
    status: "coming_soon",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];
