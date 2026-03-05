import { LucideIcon } from "lucide-react";

export type ProjectStatus = "active" | "coming_soon";

export interface PortalProject {
  id: string;
  name: string;
  description: string;
  features: string[];      // ← add this
  icon: LucideIcon;
  href: string;
  status: ProjectStatus;
  color: string;
  bg: string;
  border: string;
  iconBg: string;          // ← add this
}