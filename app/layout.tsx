import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cash & Cache — Finance × AI for Builders",
  description:
    "A newsletter and resource library for AI practitioners, founders, and tech leaders who want to master the intersection of money and technology.",
  openGraph: {
    title: "Cash & Cache",
    description: "Finance × AI for Builders",
    url: "https://cashandcache.substack.com",
    siteName: "Cash & Cache",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
        {/* Footer */}
        <footer className="border-t border-[rgba(0,217,255,0.1)] mt-24">
          <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#9B72FF] flex items-center justify-center">
                <span className="text-[#0A1628] font-bold text-xs">C$</span>
              </div>
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
