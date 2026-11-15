import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// Brand font: one family per site. Change the import + call to switch fonts.
const brandFont = Outfit({ variable: "--font-brand", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.business.name,
    title: site.seo.title,
    description: site.seo.description,
    locale: site.locale,
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description },
  // Demo sites must never be indexed. Real client sites: index.
  robots: site.demo ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: site.brand.themeColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.locale.replace("_", "-")} className={`${brandFont.variable} antialiased`}>
      <body className="min-h-full font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-paper focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
