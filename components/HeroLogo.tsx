export default function HeroLogo() {
  return (
    <div className="flex-none flex items-center justify-center py-10">
      <div className="hero-logo-wrapper" style={{ position: "relative", animation: "floatLogo 5s ease-in-out infinite" }}>
        {/* Glow halos */}
        <div style={{ position: "absolute", inset: -50, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,217,255,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: -90, borderRadius: "50%", background: "radial-gradient(circle, rgba(155,114,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Orbit 1 – cyan */}
        <div style={{ position: "absolute", inset: -52, borderRadius: "50%", border: "1px solid rgba(0,217,255,0.22)", animation: "spinOrbit 16s linear infinite", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: -5, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: "#00D9FF", boxShadow: "0 0 14px rgba(0,217,255,1)" }} />
        </div>
        {/* Orbit 2 – purple */}
        <div style={{ position: "absolute", inset: -80, borderRadius: "50%", border: "1px solid rgba(155,114,255,0.18)", animation: "spinOrbitRev 24s linear infinite", pointerEvents: "none" }}>
          <div style={{ position: "absolute", bottom: -5, left: "50%", transform: "translateX(-50%)", width: 8, height: 8, borderRadius: "50%", background: "#9B72FF", boxShadow: "0 0 12px rgba(155,114,255,1)" }} />
        </div>
        {/* Orbit 3 – orange dashed */}
        <div style={{ position: "absolute", inset: -108, borderRadius: "50%", border: "1px dashed rgba(255,140,66,0.14)", animation: "spinOrbit 36s linear infinite", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "20%", right: -5, width: 6, height: 6, borderRadius: "50%", background: "#FF8C42", boxShadow: "0 0 10px rgba(255,140,66,0.9)" }} />
        </div>
        {/* Main logo image */}
        <div style={{ width: "var(--tweak-hero-logo-size, 200px)", height: "var(--tweak-hero-logo-size, 200px)", borderRadius: "24%", overflow: "hidden", boxShadow: "0 0 80px rgba(0,217,255,0.40), 0 0 150px rgba(155,114,255,0.18), 0 16px 56px rgba(0,0,0,0.6)", position: "relative", zIndex: 1, border: "2px solid rgba(0,217,255,0.25)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.PNG" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} alt="Cash & Cache" />
        </div>
        {/* Sparkle dots */}
        {([
          { left: "-96px", top: "36px",  color: "#00D9FF", delay: "0s",   dur: "2.2s" },
          { left: "128px",  top: "-56px", color: "#FF8C42", delay: "0.4s", dur: "2.7s" },
          { left: "134px",  top: "130px", color: "#9B72FF", delay: "0.8s", dur: "3.2s" },
          { left: "-78px",  top: "148px", color: "#FFA726", delay: "1.2s", dur: "3.7s" },
        ] as const).map(({ left, top, color, delay, dur }, i) => (
          <div key={i} style={{ position: "absolute", left, top, width: 10, height: 10, borderRadius: "50%", background: color, boxShadow: `0 0 14px ${color}`, animation: `pulseDot ${dur} ${delay} ease-in-out infinite` }} />
        ))}
      </div>
    </div>
  );
}
