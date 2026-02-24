"use client";
import { use } from 'react';
import PortalGallery from '../features/portal/PortalGallery'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <PortalGallery />
    </main>
  );
}
