type DoodleProps = { className?: string; style?: React.CSSProperties };

/** Dos amiguitos garabateados en distintas escenas. */
export function DoodlePair({ scene }: { scene: "pizza" | "risa" | "viaje" | "cafe" }) {
  const bg = {
    pizza: "var(--mint)",
    risa: "var(--sky)",
    viaje: "var(--baby-blue)",
    cafe: "var(--sage)",
  }[scene];

  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <rect width="120" height="120" rx="6" fill={bg} opacity="0.55" />
      {/* sol / luna doodle */}
      <circle cx="98" cy="20" r="9" fill="var(--gold)" opacity="0.7" />
      {/* personaje 1 */}
      <g stroke="var(--deep-ink)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <circle cx="44" cy="52" r="14" fill="var(--cream)" />
        <path d="M38 52c0 0 1 2 2 2M50 52c0 0 1 2 2 2" />
        <path d="M39 58q5 5 10 0" />
        <path d="M44 66v22M34 74l-8 8M54 74l8 8M38 88l-4 14M50 88l4 14" />
        <path d="M30 38q14-12 28 0" />
      </g>
      {/* personaje 2 */}
      <g stroke="var(--deep-ink)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <circle cx="82" cy="56" r="13" fill="var(--cream)" />
        <path d="M77 56h1M87 56h1" />
        <path d="M76 61q6 5 12 0" />
        <path d="M82 69v20M72 76l-8 6M92 76l8 6M77 89l-3 13M87 89l3 13" />
        <path d="M70 46q12-10 24 0" />
      </g>
      {/* objeto de la escena */}
      {scene === "pizza" && (
        <g>
          <path d="M60 96l10-20 10 20z" fill="var(--gold)" stroke="var(--deep-ink)" strokeWidth="2" />
          <circle cx="69" cy="88" r="1.8" fill="var(--deep-ink)" />
        </g>
      )}
      {scene === "risa" && (
        <g fill="none" stroke="var(--deep-ink)" strokeWidth="2" strokeLinecap="round">
          <path d="M18 30q4-6 8 0M100 46q4-6 8 0" />
          <path d="M60 22q6-8 12 0" />
        </g>
      )}
      {scene === "viaje" && (
        <g>
          <rect x="52" y="94" width="22" height="16" rx="3" fill="var(--sky)" stroke="var(--deep-ink)" strokeWidth="2" />
          <path d="M60 94v-4h6v4" stroke="var(--deep-ink)" strokeWidth="2" fill="none" />
        </g>
      )}
      {scene === "cafe" && (
        <g>
          <rect x="52" y="96" width="18" height="14" rx="3" fill="var(--cream)" stroke="var(--deep-ink)" strokeWidth="2" />
          <path d="M58 92q2-5 4 0" stroke="var(--deep-ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

export function DoodleHeart({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path
        d="M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DoodleStar({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style}>
      <path d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4z" fill="currentColor" />
    </svg>
  );
}
