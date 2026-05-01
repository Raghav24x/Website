import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cash & Cache — AI Strategy & Implementation",
  description:
    "A newsletter and resource library for AI practitioners, tech leaders, and builders who want to implement AI strategically — agent workflows, skill files, real-world case studies, and tools that ship.",
  openGraph: {
    title: "Cash & Cache",
    description: "AI Strategy & Implementation for Builders",
    url: "https://cashandcache.substack.com",
    siteName: "Cash & Cache",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
        {/* Footer */}
        <footer className="border-t border-[rgba(0,217,255,0.1)] mt-24">
          <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.PNG" alt="Cash & Cache" style={{ width: 28, height: 28, borderRadius: 7, objectFit: "cover" }} />
              <span className="text-[#FFF9F5]/70 text-sm font-medium">Cash & Cache</span>
            </div>
            <p className="text-[#FFF9F5]/30 text-xs">
              © {new Date().getFullYear()} Cash & Cache. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-[#FFF9F5]/40">
              <a href="https://cashandcache.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D9FF] transition-colors">Substack</a>
              <a href="/library" className="hover:text-[#00D9FF] transition-colors">Library</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
