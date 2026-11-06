export default function AboutIllustration() {
  return (
    <svg
      className="about-orbit-art mt-6 h-auto w-full max-w-[430px] max-sm:mx-auto max-sm:mt-5"
      viewBox="0 0 430 270"
      role="img"
      aria-labelledby="about-art-title about-art-description"
    >
      <title id="about-art-title">A connected web of ideas and technology</title>
      <desc id="about-art-description">
        A luminous central node connects WordPress, Shopify, and JavaScript in a calm orbital illustration.
      </desc>
      <defs>
        <radialGradient id="about-core" cx="35%" cy="28%" r="75%">
          <stop offset="0" stopColor="#dce8ff" />
          <stop offset=".3" stopColor="#9bb9ef" />
          <stop offset=".72" stopColor="#637bb9" />
          <stop offset="1" stopColor="#253353" />
        </radialGradient>
        <radialGradient id="about-glow">
          <stop offset="0" stopColor="#819de5" stopOpacity=".27" />
          <stop offset="1" stopColor="#819de5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="about-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#151f36" />
          <stop offset="1" stopColor="#0a1020" />
        </linearGradient>
      </defs>

      <ellipse cx="215" cy="137" rx="158" ry="64" fill="none" stroke="#8ba4df" strokeOpacity=".15" />
      <ellipse cx="215" cy="137" rx="121" ry="92" fill="none" stroke="#8ba4df" strokeOpacity=".1" transform="rotate(-24 215 137)" />
      <path d="M66 113c40-43 103-67 160-63 54 4 105 27 138 66" fill="none" stroke="#9cb2e8" strokeOpacity=".12" strokeDasharray="2 8" />

      <circle cx="215" cy="137" r="79" fill="url(#about-glow)" className="about-core-glow" />
      <circle cx="215" cy="137" r="39" fill="#111a2e" stroke="#a6b8ff" strokeOpacity=".24" />
      <circle cx="215" cy="137" r="31" fill="url(#about-core)" />
      <path d="m205 130-8 7 8 7m20-14 8 7-8 7m-6-18-8 22" fill="none" stroke="#10182a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="215" cy="137" r="44" fill="none" stroke="#c8d7ff" strokeOpacity=".13" />
      <circle cx="215" cy="137" r="49" fill="none" stroke="#a7bbeb" strokeOpacity=".16" strokeDasharray="1 7" />
      <circle cx="179" cy="103" r="2.5" fill="#d4e4ff" fillOpacity=".8" />
      <circle cx="245" cy="174" r="2.5" fill="#91d7e2" fillOpacity=".8" />

      <g className="about-orbit-node about-orbit-node-wordpress">
        <rect x="49" y="93" width="82" height="42" rx="7" fill="url(#about-card)" stroke="#96addf" strokeOpacity=".3" />
        <circle cx="72" cy="114" r="8" fill="#7691cc" fillOpacity=".2" />
        <text x="72" y="117" textAnchor="middle" fill="#c9d8fa" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="600">W</text>
        <text x="85" y="117" fill="#c2cce2" fontFamily="monospace" fontSize="8" letterSpacing=".4">WORDPRESS</text>
      </g>

      <g className="about-orbit-node about-orbit-node-shopify">
        <rect x="299" y="85" width="82" height="42" rx="7" fill="url(#about-card)" stroke="#96addf" strokeOpacity=".3" />
        <path d="m314 101 8-2 7 2 2 14h-18z" fill="none" stroke="#9dd5bd" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M316 101c0-4 8-4 8 0" fill="none" stroke="#9dd5bd" strokeWidth="1.2" />
        <text x="337" y="110" fill="#c2cce2" fontFamily="monospace" fontSize="7.5" letterSpacing=".2">SHOPIFY</text>
        <text x="337" y="119" fill="#74839f" fontFamily="monospace" fontSize="6.5">STOREFRONTS</text>
      </g>

      <g className="about-orbit-node about-orbit-node-code">
        <rect x="171" y="214" width="88" height="37" rx="7" fill="url(#about-card)" stroke="#96addf" strokeOpacity=".3" />
        <path d="m188 228-5 5 5 5m10-10 5 5-5 5m11-12-4 14" fill="none" stroke="#a9b9ea" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="214" y="232" fill="#c2cce2" fontFamily="monospace" fontSize="7.5">REACT</text>
        <text x="214" y="241" fill="#74839f" fontFamily="monospace" fontSize="6.5">NODE.JS</text>
      </g>

      <circle cx="92" cy="176" r="2" fill="#8fcada" />
      <circle cx="331" cy="171" r="2" fill="#a9b9ea" />
      <circle cx="148" cy="58" r="1.5" fill="#d6e1ff" fillOpacity=".7" />
      <circle cx="272" cy="204" r="1.5" fill="#8fcada" fillOpacity=".75" />
      <circle cx="353" cy="144" r="1.5" fill="#d6e1ff" fillOpacity=".55" />
    </svg>
  )
}
