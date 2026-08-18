import { useState } from "react";
import msg470 from "@/assets/msg-470.jpg";
import msg471 from "@/assets/msg-471.jpg";
import msg472 from "@/assets/msg-472.jpg";
import msg473 from "@/assets/msg-473.jpg";
import msg474 from "@/assets/msg-474.jpg";
import msg476 from "@/assets/msg-476.jpg";
import { DoodleHeart, DoodleStar } from "./Doodles";

const SHOTS = [
  { url: msg470, note: "otro divorcio fallide" },
  { url: msg471, note: "tremenda bala esquivaste" },
  { url: msg472, note: "aguanta como que energía mental" },
  { url: msg473, note: "te quiero muchísimo maría" },
  { url: msg474, note: "soy madre" },
  { url: msg476, note: "lo que necesitas es un toddy" },
];

export function TopMessages() {
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {SHOTS.map((s, i) => (
          <button
            key={s.url}
            onClick={() => setZoom(s.url)}
            className={`group relative rounded-2xl bg-card p-2.5 shadow-lg transition-transform hover:-translate-y-1.5 hover:scale-[1.03] ${
              i % 2 ? "rotate-2" : "-rotate-2"
            }`}
            aria-label={`Ver mensaje: ${s.note}`}
          >
            <span className="absolute -top-2 left-1/2 z-10 h-5 w-16 -translate-x-1/2 rounded-sm bg-mint/70 shadow-sm" />
            <div className="overflow-hidden rounded-xl bg-babyblue">
              <img
                src={s.url}
                alt={`Captura de mensaje: ${s.note}`}
                loading="lazy"
                className="h-56 w-full object-cover object-top"
              />
            </div>
            <p className="mt-2 font-hand text-lg leading-tight text-ink">“{s.note}”</p>
            {i % 3 === 0 ? (
              <DoodleHeart className="absolute -bottom-2 -right-2 h-6 w-6 text-gold" />
            ) : (
              <DoodleStar className="absolute -bottom-2 -right-2 h-6 w-6 text-sky" />
            )}
          </button>
        ))}
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-6 backdrop-blur-sm"
          onClick={() => setZoom(null)}
          role="dialog"
        >
          <img
            src={zoom}
            alt="Mensaje ampliado"
            className="max-h-[85vh] max-w-full rounded-2xl border-8 border-card shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
