export function MusicToggle({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={playing ? "Pausar la canción" : "Reproducir la canción"}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border-2 border-ink/30 bg-cream/90 px-4 py-2 font-hand text-lg text-ink shadow-md backdrop-blur transition-transform hover:scale-105"
    >
      <span className={playing ? "animate-soft-float" : ""}>{playing ? "♪" : "𝄽"}</span>
      {playing ? "sonando" : "música"}
    </button>
  );
}
