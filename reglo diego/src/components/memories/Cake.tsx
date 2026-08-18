import { useState } from "react";
import confetti from "canvas-confetti";

const COLORS = ["#a8e6cf", "#bde0fe", "#cdeac0", "#a2d2ff", "#f7e3af"];
const CANDLES = [0, 1, 2, 3, 4];

export function Cake() {
  const [blown, setBlown] = useState<number[]>([]);
  const allOut = blown.length === CANDLES.length;

  const blow = (i: number) => {
    if (blown.includes(i)) return;
    const next = [...blown, i];
    setBlown(next);
    confetti({
      particleCount: next.length === CANDLES.length ? 220 : 70,
      spread: next.length === CANDLES.length ? 120 : 70,
      origin: { y: 0.65 },
      colors: COLORS,
      scalar: 1.1,
    });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <p className="max-w-md font-hand text-3xl leading-snug text-ink">
        recuerda que hoy es tu dia, pide un deseo especial
      </p>

      <div className="relative mt-10 w-[19rem] sm:w-[26rem]">
        {/* velitas */}
        <div className="relative z-10 flex justify-center gap-6 sm:gap-8">
          {CANDLES.map((i) => {
            const out = blown.includes(i);
            return (
              <button
                key={i}
                onClick={() => blow(i)}
                aria-label={`Apagar vela ${i + 1}`}
                className="group relative flex flex-col items-center transition-transform duration-200 hover:-translate-y-1"
              >
                {/* llama / humito */}
                <span className="relative mb-1 flex h-6 items-end justify-center">
                  {out ? (
                    <span className="animate-smoke block h-3 w-3 rounded-full bg-ink/20 blur-[1px]" />
                  ) : (
                    <>
                      <span
                        className="animate-flicker block h-5 w-3 bg-gold"
                        style={{
                          borderRadius: "50% 50% 50% 50% / 65% 65% 35% 35%",
                          boxShadow:
                            "0 0 14px 5px color-mix(in oklab, var(--gold) 55%, transparent)",
                        }}
                      />
                      <span className="absolute bottom-0.5 h-2 w-1.5 rounded-full bg-cream/80" />
                    </>
                  )}
                </span>
                {/* cuerpo de la vela con rayas */}
                <span className="relative block h-11 w-3 overflow-hidden rounded-full border-2 border-ink/35 bg-cream">
                  <span className="absolute inset-0 bg-[repeating-linear-gradient(135deg,var(--baby-blue)_0_6px,transparent_6px_12px)] opacity-90" />
                </span>
              </button>
            );
          })}
        </div>

        {/* pastel */}
        <svg viewBox="0 0 340 250" className="-mt-[6.5rem] w-full drop-shadow-lg sm:-mt-[7.4rem]">
          <defs>
            <linearGradient id="tier-top" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--mint)" />
              <stop offset="100%" stopColor="var(--sage)" />
            </linearGradient>
            <linearGradient id="tier-bottom" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--sky)" />
              <stop offset="100%" stopColor="var(--baby-blue)" />
            </linearGradient>
          </defs>

          {/* plato */}
          <ellipse cx="170" cy="228" rx="150" ry="16" fill="var(--sage)" opacity="0.55" />
          <ellipse cx="170" cy="222" rx="140" ry="14" fill="var(--cream)" />
          <ellipse
            cx="170"
            cy="222"
            rx="140"
            ry="14"
            fill="none"
            stroke="var(--deep-ink)"
            strokeWidth="2"
            opacity="0.4"
          />

          {/* piso inferior */}
          <path
            d="M46 140h248v66a10 10 0 0 1-4 8c-22 10-58 14-120 14s-98-4-120-14a10 10 0 0 1-4-8z"
            fill="url(#tier-bottom)"
          />
          <ellipse cx="170" cy="140" rx="124" ry="20" fill="var(--cream)" />
          {/* glaseado que gotea (inferior) */}
          <path
            d="M46 140c0 14 6 20 6 34 0 10 12 10 12 0 0-12 8-18 8-30 0 16 8 22 8 34 0 10 12 10 12 0 0-14 8-18 8-32 0 14 8 20 8 32 0 10 12 10 12 0 0-12 8-18 8-32 0 16 8 22 8 34 0 10 12 10 12 0 0-14 8-18 8-32 0 14 8 20 8 32 0 10 12 10 12 0 0-12 8-18 8-32 0 16 8 22 8 34 0 10 12 10 12 0 0-14 8-18 8-32 0 12 6 18 6 28V140z"
            fill="var(--cream)"
            opacity="0.95"
          />

          {/* piso superior */}
          <path
            d="M92 62h156v56c0 8-34 14-78 14s-78-6-78-14z"
            fill="url(#tier-top)"
          />
          <ellipse cx="170" cy="62" rx="78" ry="14" fill="var(--cream)" />
          <path
            d="M92 62c0 12 6 16 6 28 0 9 11 9 11 0 0-11 8-16 8-27 0 14 8 19 8 30 0 9 11 9 11 0 0-12 8-16 8-29 0 13 8 18 8 29 0 9 11 9 11 0 0-11 8-16 8-29 0 14 8 19 8 30 0 9 11 9 11 0 0-12 8-16 8-29 0 12 6 17 6 26V62z"
            fill="var(--cream)"
            opacity="0.95"
          />

          {/* cerezas y perlitas */}
          <g>
            <circle cx="120" cy="122" r="6" fill="var(--gold)" />
            <circle cx="170" cy="128" r="6" fill="var(--sky)" />
            <circle cx="220" cy="122" r="6" fill="var(--mint)" />
            <circle cx="90" cy="196" r="5" fill="var(--gold)" opacity="0.9" />
            <circle cx="140" cy="202" r="5" fill="var(--mint)" opacity="0.9" />
            <circle cx="200" cy="202" r="5" fill="var(--sky)" opacity="0.9" />
            <circle cx="250" cy="196" r="5" fill="var(--gold)" opacity="0.9" />
          </g>

          {/* contornos dibujados */}
          <g fill="none" stroke="var(--deep-ink)" strokeWidth="2.4" opacity="0.5" strokeLinecap="round">
            <path d="M92 62v56c0 8 34 14 78 14s78-6 78-14V62" />
            <ellipse cx="170" cy="62" rx="78" ry="14" />
            <path d="M46 140v66c0 12 54 18 124 18s124-6 124-18v-66" />
            <ellipse cx="170" cy="140" rx="124" ry="20" />
          </g>
        </svg>
      </div>

      {allOut && (
        <p className="animate-in fade-in zoom-in-95 mt-10 max-w-2xl font-hand text-4xl leading-tight text-ink duration-700 sm:text-5xl">
          ¡Feliz Cumpleaños 22 diegitooo, recuerda que te amo mucho mucho♡ !
        </p>
      )}
      {!allOut && (
        <p className="mt-6 text-sm text-muted-foreground">
          apaga las {CANDLES.length - blown.length} velitas que faltan ✧
        </p>
      )}
    </div>
  );
}
