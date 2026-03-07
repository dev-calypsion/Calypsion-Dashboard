import '@/src/styles/globals.css';
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import type { Metadata, Viewport } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://calypsion.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Calypsion Innovations",
      url: siteUrl,
      description:
        "Industrial Intelligence Platform for real-time monitoring, predictive analytics, and digital simulation in manufacturing.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Calypsion Industrial Intelligence Platform",
      description:
        "Real-time OEE monitoring, predictive maintenance, RTLS for WIP tracking, and energy analytics for manufacturing excellence.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Calypsion | Industrial Intelligence Platform – Real-Time Monitoring & Predictive Analytics",
    template: "%s | Calypsion",
  },
  description:
    "Industrial Intelligence Platform for manufacturing excellence. Real-time OEE monitoring, predictive maintenance, RTLS for WIP tracking, energy analytics, and digital simulation. Reduce downtime 20–30%, increase throughput 15–25%.",
  keywords: [
    "industrial IoT",
    "OEE monitoring",
    "predictive maintenance",
    "RTLS",
    "manufacturing analytics",
    "real-time monitoring",
    "digital twin",
    "smart factory",
    "Industry 4.0",
  ],
  authors: [{ name: "Calypsion Innovations", url: siteUrl }],
  creator: "Calypsion Innovations",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Calypsion Industrial Intelligence Platform",
    title: "Calypsion | Industrial Intelligence Platform",
    description:
      "Real-time monitoring, predictive analytics & digital simulation for manufacturing excellence. Smart OEE, predictive maintenance, RTLS, energy monitoring.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calypsion Industrial Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calypsion | Industrial Intelligence Platform",
    description:
      "Real-time monitoring, predictive analytics & digital simulation for manufacturing excellence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}