import { useState } from "react";
import { DoodleHeart, DoodleStar } from "./Doodles";

const PARTICLES = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  dx: (i % 2 === 0 ? 1 : -1) * (10 + ((i * 23) % 190)),
  left: 6 + ((i * 37) % 88),
  delay: 0.8 + (i % 12) * 0.07,
  kind: i % 4,
  scale: 0.7 + ((i * 13) % 10) / 10,
}));

export function MemoryBox({
  onOpened,
  onStartSong,
}: {
  onOpened: () => void;
  onStartSong?: () => void;
}) {
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;
    // Se dispara dentro del gesto del usuario: así el navegador permite el audio.
    onStartSong?.();
    setOpening(true);
    window.setTimeout(onOpened, 2600);
  };

  return (
    <section
      className={`relative flex min-h-screen flex-col items-center justify-center px-6 transition-opacity duration-700 ${
        opening ? "opacity-0 delay-[1900ms]" : "opacity-100"
      }`}
    >
      <p className="mb-6 animate-soft-float text-center font-hand text-2xl text-ink/70">
        yo no te puedo dar algo físico allá pero aquí esta tu regalito jajajjaa
      </p>

      <button
        onClick={open}
        aria-label="Abrir la caja de recuerdos"
        style={{ perspective: "900px" }}
        className={`group relative h-64 w-72 cursor-pointer outline-none sm:h-72 sm:w-80 ${
          opening ? "animate-box-shake" : "hover:animate-wobble"
        }`}
      >
        {/* destello y rayos al abrir */}
        {opening && (
          <>
            <span className="animate-box-burst pointer-events-none absolute left-1/2 top-1/2 z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/60 blur-2xl" />
            <svg
              viewBox="0 0 200 200"
              className="animate-ray-spin pointer-events-none absolute left-1/2 top-1/2 z-0 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 text-gold"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <path
                  key={i}
                  d="M100 100 L104 6 L96 6 Z"
                  fill="currentColor"
                  opacity="0.5"
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
            </svg>
          </>
        )}

        {/* partículas mágicas */}
        {opening &&
          PARTICLES.map((p) => (
            <span
              key={p.id}
              className="animate-float-up pointer-events-none absolute bottom-24 z-30"
              style={
                {
                  left: `${p.left}%`,
                  animationDelay: `${p.delay}s`,
                  transform: `scale(${p.scale})`,
                  "--dx": `${p.dx}px`,
                  "--rot": `${p.dx}deg`,
                } as React.CSSProperties
              }
            >
              {p.kind === 0 && <DoodleStar className="h-4 w-4 text-gold" />}
              {p.kind === 1 && <DoodleHeart className="h-4 w-4 text-sky" />}
              {p.kind === 2 && <DoodleStar className="h-3 w-3 text-mint" />}
              {p.kind === 3 && <span className="block h-1.5 w-1.5 rounded-full bg-sage" />}
            </span>
          ))}

        {/* tapa */}
        <div
          className={`absolute inset-x-2 top-6 z-20 origin-bottom ${opening ? "animate-lid-fly" : "transition-transform duration-300 group-hover:-translate-y-2"}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <svg viewBox="0 0 300 90" className="w-full drop-shadow-sm">
            <rect x="6" y="18" width="288" height="58" rx="12" fill="var(--sage)" />
            <rect x="6" y="18" width="288" height="20" rx="10" fill="var(--mint)" />
            <path
              d="M6 46h288"
              stroke="var(--deep-ink)"
              strokeWidth="2"
              strokeDasharray="7 9"
              opacity="0.35"
            />
            <path d="M150 18v58" stroke="var(--baby-blue)" strokeWidth="14" opacity="0.7" />
            <path d="M132 18q18-22 36 0" fill="none" stroke="var(--baby-blue)" strokeWidth="12" opacity="0.7" />
            <rect
              x="6"
              y="18"
              width="288"
              height="58"
              rx="12"
              fill="none"
              stroke="var(--deep-ink)"
              strokeWidth="2.5"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* cuerpo */}
        <div className={`absolute inset-x-0 bottom-4 z-10 ${opening ? "animate-box-sink" : ""}`}>
          <svg viewBox="0 0 320 170" className="w-full drop-shadow-md">
            <rect x="10" y="10" width="300" height="150" rx="16" fill="var(--sky)" />
            <rect x="10" y="10" width="300" height="150" rx="16" fill="var(--mint)" opacity="0.35" />
            <g opacity="0.45" stroke="var(--deep-ink)" strokeWidth="2" fill="none">
              <path d="M40 60q14-14 28 0M252 60q14-14 28 0" />
              <path d="M60 120h30M230 120h30" strokeDasharray="6 8" />
            </g>
            <path d="M160 10v150" stroke="var(--baby-blue)" strokeWidth="16" opacity="0.65" />
            <rect
              x="10"
              y="10"
              width="300"
              height="150"
              rx="16"
              fill="none"
              stroke="var(--deep-ink)"
              strokeWidth="2.5"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* etiqueta colgante */}
        <div className={`absolute -right-2 top-24 z-40 -rotate-6 animate-soft-float ${opening ? "animate-box-sink" : ""}`}>
          <div className="rounded-xl border-2 border-ink/40 bg-cream px-4 py-2 shadow-sm">
            <span className="font-hand text-xl text-ink">Para: diegitoo</span>
          </div>
        </div>
      </button>

      <p className="mt-10 text-sm text-muted-foreground">
        {opening ? "abriendo…" : "toca la caja para abrirla ✧"}
      </p>
    </section>
  );
}
