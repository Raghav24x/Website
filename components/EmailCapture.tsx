"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    window.open(
      `https://cashandcache.substack.com/subscribe?email=${encodeURIComponent(email)}`,
      "_blank"
    );
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[rgba(0,217,255,0.08)] border border-[rgba(0,217,255,0.25)]">
        <CheckCircle className="w-4 h-4 text-[#00D9FF] flex-shrink-0" />
        <span className="text-[#00D9FF] text-sm font-medium">
          Finishing up in the new tab — see you inside!
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-[rgba(30,58,95,0.55)] border border-[rgba(0,217,255,0.22)] text-[#FFF9F5] text-sm placeholder:text-[#FFF9F5]/35 focus:outline-none focus:border-[rgba(0,217,255,0.55)] transition-colors"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
        style={{ background: "#00D9FF", color: "#0A1628" }}
      >
        Subscribe Free
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
