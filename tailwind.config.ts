import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          navy: "#0A1628",
          "navy-2": "#1A2838",
          cyan: "#00D9FF",
          "cyan-2": "#4DD0E1",
          orange: "#FF8C42",
          "orange-2": "#FFA726",
          purple: "#9B72FF",
          "purple-2": "#B388FF",
          white: "#FFFFFF",
          offwhite: "#FFF9F5",
          "deep-blue": "#1E3A5F",
          wood: "#D4A574",
          "wood-2": "#B8956A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0A1628 0%, #1A2838 100%)",
        "cyan-glow": "radial-gradient(ellipse at center, rgba(0,217,255,0.15) 0%, transparent 70%)",
        "orange-glow": "radial-gradient(ellipse at center, rgba(255,140,66,0.12) 0%, transparent 70%)",
        "grid-pattern":
          "linear-gradient(rgba(0,217,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        cyan: "0 0 24px rgba(0,217,255,0.3)",
        orange: "0 0 24px rgba(255,140,66,0.25)",
        purple: "0 0 24px rgba(155,114,255,0.25)",
        "card": "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
