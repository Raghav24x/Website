"use client";
import { useState, useEffect, useCallback } from "react";

const DEFAULTS = {
  titleSize: 72,
  titleColor: "#FFFFFF",
  subtitleSize: 26,
  heroLogoSize: 200,
  bodyFontSize: 13,
  subscribeBg: "#00D9FF",
  subscribeColor: "#0A1628",
  browseBorderColor: "#FF8C42",
  browseTextColor: "#FF8C42",
};

type Tweaks = typeof DEFAULTS;
const STORAGE_KEY = "cc-tweaks";

function applyTweaks(t: Tweaks) {
  const r = document.documentElement;
  r.style.setProperty("--tweak-title-size", `${t.titleSize}px`);
  r.style.setProperty("--tweak-title-color", t.titleColor);
  r.style.setProperty("--tweak-subtitle-size", `${t.subtitleSize}px`);
  r.style.setProperty("--tweak-hero-logo-size", `${t.heroLogoSize}px`);
  r.style.setProperty("--tweak-body-size", `${t.bodyFontSize}px`);
  r.style.setProperty("--tweak-subscribe-bg", t.subscribeBg);
  r.style.setProperty("--tweak-subscribe-color", t.subscribeColor);
  r.style.setProperty("--tweak-browse-border", t.browseBorderColor);
  r.style.setProperty("--tweak-browse-text", t.browseTextColor);
}

export default function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = { ...DEFAULTS, ...JSON.parse(saved) };
        setTweaks(parsed);
        applyTweaks(parsed);
      }
    } catch {}
  }, []);

  const update = useCallback((key: keyof Tweaks, val: string | number) => {
    setTweaks((prev) => {
      const next = { ...prev, [key]: val };
      applyTweaks(next);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setTweaks(DEFAULTS);
    applyTweaks(DEFAULTS);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  const Slider = ({ label, k, min, max }: { label: string; k: keyof Tweaks; min: number; max: number }) => (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: "rgba(255,249,245,0.7)" }}>{label}</span>
        <span style={{ fontSize: 11, color: "#00D9FF", fontFamily: "monospace" }}>{tweaks[k]}px</span>
      </div>
      <input type="range" min={min} max={max} value={tweaks[k] as number}
        onChange={(e) => update(k, Number(e.target.value))}
        style={{ width: "100%", accentColor: "#00D9FF" }} />
    </div>
  );

  const ColorPicker = ({ label, k }: { label: string; k: keyof Tweaks }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
      <span style={{ fontSize: 11, color: "rgba(255,249,245,0.7)" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 10, color: "#00D9FF", fontFamily: "monospace" }}>{tweaks[k]}</span>
        <input type="color" value={tweaks[k] as string}
          onChange={(e) => update(k, e.target.value)}
          style={{ width: 28, height: 22, border: "1px solid rgba(0,217,255,0.3)", borderRadius: 4, background: "transparent", cursor: "pointer" }} />
      </div>
    </div>
  );

  const Divider = ({ label }: { label: string }) => (
    <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,217,255,0.6)", margin: "16px 0 8px" }}>{label}</div>
  );

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="tweaks-toggle"
        style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999, width: 40, height: 40, borderRadius: "50%", background: open ? "#00D9FF" : "rgba(10,22,40,0.95)", border: "1px solid rgba(0,217,255,0.35)", color: open ? "#0A1628" : "#00D9FF", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(0,217,255,0.2)", backdropFilter: "blur(8px)" }}
        title="Toggle design tweaks"
      >
        ⚙
      </button>

      {/* Panel */}
      {open && (
        <div style={{ position: "fixed", bottom: 68, right: 20, zIndex: 9998, width: 260, background: "rgba(10,22,40,0.97)", border: "1px solid rgba(0,217,255,0.25)", borderRadius: 16, padding: 18, backdropFilter: "blur(16px)", boxShadow: "0 0 32px rgba(0,217,255,0.15)", maxHeight: "80vh", overflowY: "auto" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#FFF9F5", marginBottom: 14, display: "flex", justifyContent: "space-between" }}>
            <span>Tweaks</span>
            <button onClick={reset} style={{ fontSize: 10, color: "rgba(255,249,245,0.4)", background: "none", border: "none", cursor: "pointer" }}>Reset</button>
          </div>

          <Divider label="Title" />
          <Slider label="Font size" k="titleSize" min={40} max={110} />
          <ColorPicker label="Color" k="titleColor" />

          <Divider label="Subtitle" />
          <Slider label="Font size" k="subtitleSize" min={14} max={40} />

          <Divider label="Logo" />
          <Slider label="Hero logo size" k="heroLogoSize" min={100} max={320} />

          <Divider label="Body text" />
          <Slider label="Card / body size" k="bodyFontSize" min={10} max={18} />

          <Divider label="Subscribe button" />
          <ColorPicker label="Background" k="subscribeBg" />
          <ColorPicker label="Text color" k="subscribeColor" />

          <Divider label="Browse button" />
          <ColorPicker label="Border color" k="browseBorderColor" />
          <ColorPicker label="Text color" k="browseTextColor" />
        </div>
      )}
    </>
  );
}
