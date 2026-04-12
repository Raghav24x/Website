export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto animate-float" aria-hidden="true">
      <svg
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        {/* Ambient glow backgrounds */}
        <ellipse cx="260" cy="210" rx="200" ry="160" fill="url(#glowCyan)" opacity="0.3" />
        <ellipse cx="320" cy="160" rx="120" ry="100" fill="url(#glowOrange)" opacity="0.2" />

        {/* Grid floor */}
        <rect x="60" y="280" width="400" height="120" rx="8" fill="#0A1628" opacity="0.6" />
        {[80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map((x) => (
          <line key={x} x1={x} y1="280" x2={x} y2="400" stroke="#00D9FF" strokeOpacity="0.08" strokeWidth="1" />
        ))}
        {[296, 312, 328, 344, 360, 376, 392].map((y) => (
          <line key={y} x1="60" y1={y} x2="460" y2={y} stroke="#00D9FF" strokeOpacity="0.08" strokeWidth="1" />
        ))}

        {/* Main isometric platform */}
        <path d="M130 300 L260 230 L390 300 L260 370 Z" fill="#1E3A5F" stroke="#00D9FF" strokeOpacity="0.3" strokeWidth="1.5" />
        <path d="M130 300 L130 316 L260 386 L260 370 Z" fill="#0A1628" />
        <path d="M390 300 L390 316 L260 386 L260 370 Z" fill="#132236" />

        {/* Coin stack left */}
        <ellipse cx="185" cy="268" rx="28" ry="10" fill="#D4A574" />
        <rect x="157" y="255" width="56" height="13" rx="0" fill="#FF8C42" />
        <ellipse cx="185" cy="255" rx="28" ry="10" fill="#FFA726" />
        <ellipse cx="185" cy="255" rx="22" ry="7" fill="#FFD54F" opacity="0.6" />
        <text x="185" y="259" textAnchor="middle" fill="#0A1628" fontSize="9" fontWeight="bold" fontFamily="system-ui">$</text>

        <ellipse cx="185" cy="243" rx="28" ry="10" fill="#D4A574" />
        <rect x="157" y="230" width="56" height="13" rx="0" fill="#FF8C42" />
        <ellipse cx="185" cy="230" rx="28" ry="10" fill="#FFA726" />
        <ellipse cx="185" cy="230" rx="22" ry="7" fill="#FFD54F" opacity="0.6" />

        <ellipse cx="185" cy="218" rx="28" ry="10" fill="#D4A574" />
        <rect x="157" y="205" width="56" height="13" rx="0" fill="#B8956A" />
        <ellipse cx="185" cy="205" rx="28" ry="10" fill="#FFA726" />
        <ellipse cx="185" cy="205" rx="22" ry="7" fill="#FFD54F" opacity="0.5" />

        {/* Floating UI panel — center */}
        <rect x="210" y="155" width="110" height="80" rx="10" fill="#1E3A5F" stroke="#00D9FF" strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="218" y="163" width="94" height="12" rx="4" fill="#00D9FF" opacity="0.15" />
        <rect x="218" y="163" width="40" height="12" rx="4" fill="#00D9FF" opacity="0.5" />
        <rect x="218" y="182" width="94" height="6" rx="3" fill="#FFF9F5" opacity="0.15" />
        <rect x="218" y="193" width="70" height="6" rx="3" fill="#FFF9F5" opacity="0.1" />
        <rect x="218" y="204" width="82" height="6" rx="3" fill="#9B72FF" opacity="0.4" />
        <rect x="218" y="216" width="50" height="12" rx="6" fill="#00D9FF" opacity="0.8" />
        <text x="243" y="226" fill="#0A1628" fontSize="7" fontWeight="bold" fontFamily="system-ui">Unlock →</text>

        {/* Circuit node right */}
        <circle cx="330" cy="230" r="32" fill="#1E3A5F" stroke="#9B72FF" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="330" cy="230" r="20" fill="#0A1628" />
        <circle cx="330" cy="230" r="8" fill="#9B72FF" opacity="0.8" />
        <circle cx="330" cy="230" r="3" fill="#B388FF" />
        {/* Circuit traces */}
        <line x1="362" y1="230" x2="390" y2="230" stroke="#9B72FF" strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="298" y1="230" x2="270" y2="230" stroke="#9B72FF" strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="330" y1="198" x2="330" y2="175" stroke="#9B72FF" strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="330" y1="262" x2="330" y2="285" stroke="#9B72FF" strokeOpacity="0.5" strokeWidth="1.5" />
        <circle cx="390" cy="230" r="5" fill="#9B72FF" opacity="0.7" />
        <circle cx="270" cy="230" r="5" fill="#9B72FF" opacity="0.7" />
        <circle cx="330" cy="175" r="5" fill="#9B72FF" opacity="0.7" />

        {/* Floating data bars */}
        <g transform="translate(140, 145)">
          {[30, 50, 38, 62, 44, 56].map((h, i) => (
            <rect
              key={i}
              x={i * 14}
              y={70 - h}
              width="10"
              height={h}
              rx="3"
              fill={i % 2 === 0 ? "#00D9FF" : "#4DD0E1"}
              opacity={0.5 + i * 0.08}
            />
          ))}
        </g>

        {/* Lock icon — floating */}
        <g transform="translate(370, 155)">
          <circle cx="20" cy="20" r="20" fill="#1E3A5F" stroke="#FF8C42" strokeOpacity="0.6" strokeWidth="1.5" />
          <rect x="12" y="18" width="16" height="12" rx="3" fill="#FF8C42" opacity="0.9" />
          <path d="M14 18 Q14 11 20 11 Q26 11 26 18" stroke="#FFA726" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="20" cy="23" r="2" fill="#0A1628" />
        </g>

        {/* Sparkles */}
        {[[88, 130], [420, 170], [150, 175], [380, 300], [240, 120]].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx}, ${cy})`}>
            <line x1="0" y1="-7" x2="0" y2="7" stroke="#00D9FF" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="-7" y1="0" x2="7" y2="0" stroke="#00D9FF" strokeWidth="1.5" strokeOpacity="0.7" />
          </g>
        ))}

        {/* Defs */}
        <defs>
          <radialGradient id="glowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8C42" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
