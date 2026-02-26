import '@/src/styles/globals.css';
import Footer from "@/src/shared/components/Footer";
import Header from "@/src/shared/components/Header";

import type { Metadata } from "next";
import CollaborationSection from '../features/portal/components/CollaborationSection';

export const metadata: Metadata = {
  title: "Calypsion",
  description: "Industrial IoT Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 antialiased">
        <Header />
        {children}
        <CollaborationSection />
        <Footer />
      </body>
    </html>
  );
}
