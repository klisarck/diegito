import { useState } from "react";
import fotoRisa from "@/assets/foto-risa.png.asset.json";
import fotoLab from "@/assets/foto-lab.jpg.asset.json";
import fotoGrupo from "@/assets/foto-grupo.jpg.asset.json";
import fotoDiego from "@/assets/foto-diego.jpg.asset.json";

type Memory = {
  id: string;
  photo: string;
  caption: string;
  story: string;
  tilt: string;
  spin?: string;
};

const MEMORIES: Memory[] = [
  {
    id: "risa",
    photo: fotoRisa.url,
    caption: "riendo por nada",
    story: "Ya no me acuerdo en que contexto me mandaste esto jajaja , pero mientras buscaba fotos la encontré y me gusto mucho, ríete mucho todos los días , la vida es para eso",
    tilt: "-rotate-3",
  },
  {
    id: "lab",
    photo: fotoLab.url,
    caption: "científicos locos",
    story: "yo genuinamente soy la mas feliz de que tengas amistades que te aprecien y te quieran mucho allá , espero que te trate siempre con el mismo amor con el que yo te trataría",
    tilt: "rotate-2",
  },
  {
    id: "grupo",
    photo: fotoGrupo.url,
    caption: "no lo supe aprovechar",
    story: "no encuentro la manera de acomodar la foto para verme yo también , pero estuve allí , creo que esa fue la Reunión por que te irías y ahora siento que no la aproveche todo lo que pude",
    tilt: "rotate-6",
    spin: "rotate(90deg) scale(1.75)",
  },
  {
    id: "diego",
    photo: fotoDiego.url,
    caption: "diegitoo y sus ovejitas",
    story: "Mi persona favorita cargando peluches , la verdad es que quisiera que tuviéramos fotos solo nosotros para poder rellenar esto , pero espero mas adelante si tenerlas",
    tilt: "-rotate-6",
  },
];

function Polaroid({ memory }: { memory: Memory }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className={`preserve-3d relative h-72 w-56 shrink-0 transition-transform duration-500 hover:scale-105 ${memory.tilt}`}
      style={{ transform: flipped ? "rotateY(180deg)" : undefined }}
      aria-label={`Recuerdo: ${memory.caption}`}
    >
      <div className="backface-hidden absolute inset-0 rounded-md bg-card p-3 shadow-lg">
        <div className="h-48 overflow-hidden rounded-sm bg-babyblue">
          <img
            src={memory.photo}
            alt={memory.caption}
            loading="lazy"
            className="h-full w-full object-cover"
            style={memory.spin ? { transform: memory.spin } : undefined}
          />
        </div>
        <p className="mt-3 font-hand text-xl leading-tight text-ink">{memory.caption}</p>
        <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
          toca para girar
        </p>
      </div>
      <div
        className="backface-hidden absolute inset-0 flex flex-col justify-center rounded-md bg-babyblue p-5 shadow-lg"
        style={{ transform: "rotateY(180deg)" }}
      >
        <p className="font-hand text-2xl leading-snug text-ink">{memory.story}</p>
        <span className="mt-4 font-hand text-lg text-ink/60">— con cariño ♡</span>
      </div>
    </button>
  );
}

export function Polaroids() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-6">
      {MEMORIES.map((m) => (
        <Polaroid key={m.id} memory={m} />
      ))}
    </div>
  );
}
