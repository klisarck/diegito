import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MemoryBox } from "@/components/memories/MemoryBox";
import { Polaroids } from "@/components/memories/Polaroids";
import { Letters } from "@/components/memories/Letters";
import { TopMessages } from "@/components/memories/TopMessages";
import { Cake } from "@/components/memories/Cake";
import { BackgroundDecor } from "@/components/memories/BackgroundDecor";
import { MusicToggle } from "@/components/memories/MusicToggle";
import { useSong } from "@/hooks/use-song";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caja de Recuerdos para diegitoo" },
      {
        name: "description",
        content:
          "Una caja de recuerdos digital hecha a mano: polaroids ilustradas, cartas y un pastel de cumpleaños para diegitoo.",
      },
      { property: "og:title", content: "Caja de Recuerdos para diegitoo" },
      {
        property: "og:description",
        content:
          "Ábrela y encuentra polaroids, cartas y un pastel virtual. Un abrazo digital de cumpleaños.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-14">
      <h2 className="text-center text-4xl text-ink">{title}</h2>
      <p className="mt-2 text-center text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Index() {
  const [opened, setOpened] = useState(false);
  const song = useSong();

  if (!opened)
    return (
      <>
        <BackgroundDecor />
        <MemoryBox onOpened={() => setOpened(true)} onStartSong={song.start} />
      </>
    );

  return (
    <main className="animate-in fade-in min-h-screen pb-24 duration-700">
      <BackgroundDecor />
      <MusicToggle playing={song.playing} onToggle={song.toggle} />
      <header className="px-5 pt-16 text-center">
        <h1 className="text-5xl leading-tight text-ink sm:text-6xl">
          Dentro de la caja
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          todo esto lo guardé para ti, diegitoo. tómate tu tiempo ♡
        </p>
      </header>

      <Section title="Polaroids" subtitle="toca cada foto para leer la anécdota">
        <Polaroids />
      </Section>

      <Section title="Mensajes más tops" subtitle="yo no se por que estos mensajes me dan tanta risa siempre  ajajajajaja— toca para agrandar">
        <TopMessages />
      </Section>

      <Section title="Cartitas" subtitle="ábrelas cuando las necesites">
        <Letters />
      </Section>

      <Section title="Tu pastel" subtitle="apaga las velitas una por una">
        <Cake />
      </Section>
    </main>
  );
}
