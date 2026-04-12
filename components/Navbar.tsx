"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,217,255,0.12)] bg-[rgba(10,22,40,0.85)] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#9B72FF] flex items-center justify-center">
            <span className="text-[#0A1628] font-bold text-sm">C$</span>
          </div>
          <span className="font-bold text-[#FFF9F5] text-lg tracking-tight">
            Cash<span className="text-[#00D9FF]">&</span>Cache
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/"
                ? "text-[#00D9FF] bg-[rgba(0,217,255,0.1)]"
                : "text-[#FFF9F5]/70 hover:text-[#FFF9F5] hover:bg-[rgba(255,255,255,0.05)]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/library"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/library"
                ? "text-[#00D9FF] bg-[rgba(0,217,255,0.1)]"
                : "text-[#FFF9F5]/70 hover:text-[#FFF9F5] hover:bg-[rgba(255,255,255,0.05)]"
            }`}
          >
            Library
          </Link>
          <a
            href="https://cashandcache.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold bg-[#00D9FF] text-[#0A1628] hover:bg-[#4DD0E1] transition-colors"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}
