import { useState } from "react";

type Letter = {
  id: string;
  title: string;
  color: string;
  seal: string;
  body: string[];
};

const LETTERS: Letter[] = [
  {
    id: "risa",
    title: "Abre esto cuando necesites una risa",
    color: "var(--sage)",
    seal: "☺",
    body: [
      "¿De dónde vienen los hámster? De Hamsterdam. jajajajajajajjajajajjajajajja (   capaz no me creas pero tengo super guardado en la mente un dia que nos estábamos riendo en el patio del liceo , seguramente nos estabamos burlando de alguien o no se no recuerdo el motivo ), pero si se que debes reírte todo lo que puedas , guarda muchos momentos riendote , disfruta la vida ",
      "si el dia va chimbo , llamame-escribeme y nos reimos un rato",
    ],
  },
  {
    id: "principal",
    title: "Carta principal de Cumpleaños",
    color: "var(--sky)",
    seal: "✧",
    body: [
      "diegitoo, hoy cumples un año más y yo tengo un año más de suerte de conocerte y como le doy gracias a Dios por eso ",
      "siempre me escuchas me  aguantas y haces que las cosas normales se sientan mas bonitas .mientras buscaba las fotos  en nuestro chat de Messenger me di cuenta que nos hemos acompañado en las etapas mas arrechas jajajajaj , lit estuvimos juntos con los primeros amores raros de la vida  (y bueno tu me has acompañado en cada romance jajajaj) en el liceo  , en el covid , cuando me rape jjajjaja , cuando empezaste en la uní , el acoso de tu profe , cuando te fuiste , cuando volviste a empezar la u , yo en mi 7mo divorcio , cuando pensé que estaba embarazada (wtf ese día no me acuerdo que me fume ),mi primer beso ajajaj , básicamente has sido mi compañero la mitad de mi vida   , y  mirando hacia atrás no se que habría sido de mi vida todos estos años sin ti jajajaaj (me dieron ganas de llorar cñdlm jajajajjaa)  y bueno yo procuro decirlo todo lo que puedo , pero que sepas que te amo mucho diego y aunque lo digo bastante a veces siento que no lo hago suficiente ,y que eso solo dicho así no me alcanza ni la mitad de las veces que lo digo para todo lo que te quiero ,siempre estas muchas veces en mi día , en cosas que te quiero contar y cosas que te quiero mostrar pero pero claro jajjaajja no te escribo por todo por que aja , y yo creo que lo sabes pero en vista de que es tu cumple lo repito , siempre siempre siempre que sientas que quieres contar algo y parece que no hay a quien yo estoy para ti , si quieres volver acá mi casa es tu casa , yo a estas alturas hace rato que somos familia creo yo jajajjaja yo ya te considero mi hermanito diego y todo lo que  ese lazo conlleva es lo que creo que definiría bien nuestra amistad  , siempre tendrás a alguien que  te escuche y te abrace  en mi (jajajjaja inserte audio de ¨ay van a pensar que somos pololos jajajajjaj¨) y bueno yo solo quiero darte las gracias por todo , mi vida no seria igual de linda sin ti ",
      "Que este año te traiga calma, cosas nuevas y muchas ganas de seguir. ya estoy emocionada por ver que nos depara el futuro y aunque quizas mas adelante algunas cosas cambien Aquí voy a estar siempre.",
    ],
  },
  {
    id: "tres",
    title: "Nuestra Amistad en 5 palabras",
    color: "var(--mint)",
    seal: "♡",
    body: ["Refugio.", "compañero.\n\n", "amor.\n\n\ncomplicidad .\n\n\nnostalgia"],
  },
];

function EnvelopeCard({ letter, onOpen }: { letter: Letter; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative w-full max-w-xs transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]"
    >
      <svg viewBox="0 0 300 180" className="w-full drop-shadow-md">
        <rect x="6" y="6" width="288" height="168" rx="14" fill={letter.color} />
        <path
          d="M6 20l144 92 144-92"
          fill="none"
          stroke="var(--deep-ink)"
          strokeWidth="2.5"
          opacity="0.5"
        />
        <rect
          x="6"
          y="6"
          width="288"
          height="168"
          rx="14"
          fill="none"
          stroke="var(--deep-ink)"
          strokeWidth="2.5"
          opacity="0.55"
        />
        <circle cx="150" cy="112" r="20" fill="var(--gold)" opacity="0.85" />
        <text
          x="150"
          y="120"
          textAnchor="middle"
          fontSize="20"
          fill="var(--deep-ink)"
          opacity="0.8"
        >
          {letter.seal}
        </text>
      </svg>
      <span className="absolute inset-x-6 bottom-5 font-hand text-xl leading-tight text-ink">
        {letter.title}
      </span>
    </button>
  );
}

export function Letters() {
  const [open, setOpen] = useState<Letter | null>(null);

  return (
    <>
      <div className="grid gap-8 py-6 sm:grid-cols-2 lg:grid-cols-3">
        {LETTERS.map((l) => (
          <div key={l.id} className="flex justify-center">
            <EnvelopeCard letter={l} onOpen={() => setOpen(l)} />
          </div>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="animate-in fade-in zoom-in-95 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border-2 border-ink/20 bg-card p-8 shadow-2xl duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-hand text-3xl text-ink">{open.title}</h3>
            <div className="mt-4 space-y-4">
              {open.body.map((p, i) => (
                <p key={i} className="font-hand text-2xl leading-snug text-ink/85">
                  {p}
                </p>
              ))}
            </div>
            <button
              onClick={() => setOpen(null)}
              className="mt-8 rounded-full bg-mint px-6 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              guardar la carta
            </button>
          </div>
        </div>
      )}
    </>
  );
}
