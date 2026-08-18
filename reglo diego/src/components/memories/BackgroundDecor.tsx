import { DoodleHeart, DoodleStar } from "./Doodles";

const CLOUDS = [
  { top: "8%", size: 180, dur: 62, delay: 0, op: 0.5 },
  { top: "26%", size: 120, dur: 84, delay: -20, op: 0.38 },
  { top: "58%", size: 220, dur: 100, delay: -50, op: 0.3 },
  { top: "78%", size: 140, dur: 74, delay: -35, op: 0.35 },
];

const SPARKLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: (i * 37) % 97,
  top: (i * 53) % 92,
  delay: (i % 11) * 0.45,
  dur: 3 + (i % 5) * 0.7,
  size: 8 + (i % 4) * 4,
  kind: i % 3,
}));

const BUBBLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: 3 + ((i * 29) % 94),
  delay: (i % 7) * 1.6,
  dur: 16 + (i % 6) * 3,
  size: 10 + (i % 5) * 9,
}));

function Cloud({ size, op }: { size: number; op: number }) {
  return (
    <svg viewBox="0 0 200 90" style={{ width: size, opacity: op }} className="text-cream">
      <g fill="currentColor">
        <ellipse cx="60" cy="58" rx="52" ry="30" />
        <ellipse cx="108" cy="46" rx="44" ry="34" />
        <ellipse cx="148" cy="60" rx="38" ry="26" />
      </g>
    </svg>
  );
}

export function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* halos suaves que respiran */}
      <div className="animate-breathe absolute -left-24 top-[-10%] h-[46vmax] w-[46vmax] rounded-full bg-mint/40 blur-3xl" />
      <div
        className="animate-breathe absolute -right-32 top-1/4 h-[40vmax] w-[40vmax] rounded-full bg-sky/40 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-breathe absolute bottom-[-15%] left-1/3 h-[42vmax] w-[42vmax] rounded-full bg-sage/35 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />

      {/* nubes que cruzan */}
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="animate-drift absolute"
          style={{
            top: c.top,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
          }}
        >
          <Cloud size={c.size} op={c.op} />
        </div>
      ))}

      {/* burbujas que suben */}
      {BUBBLES.map((b) => (
        <span
          key={b.id}
          className="animate-rise absolute bottom-[-10%] rounded-full border border-ink/15 bg-babyblue/25"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* estrellitas y corazones titilando */}
      {SPARKLES.map((s) => (
        <span
          key={s.id}
          className="animate-twinkle absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        >
          {s.kind === 0 && <DoodleStar style={{ width: s.size, height: s.size }} className="text-gold" />}
          {s.kind === 1 && <DoodleHeart style={{ width: s.size, height: s.size }} className="text-sky" />}
          {s.kind === 2 && (
            <span
              className="block rounded-full bg-mint"
              style={{ width: s.size / 2.5, height: s.size / 2.5 }}
            />
          )}
        </span>
      ))}

      {/* rayitas dibujadas a mano */}
      <svg className="absolute inset-0 h-full w-full text-ink/10" fill="none" stroke="currentColor">
        <path d="M-20 120q120 40 240 0t240 0 240 0 240 0 240 0" strokeWidth="2" strokeDasharray="8 14" className="animate-dash" />
        <path d="M-20 640q140 -46 280 0t280 0 280 0 280 0" strokeWidth="2" strokeDasharray="6 16" className="animate-dash" style={{ animationDirection: "reverse" }} />
      </svg>
    </div>
  );
}
