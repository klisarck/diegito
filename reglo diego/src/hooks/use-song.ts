import { useCallback, useEffect, useRef, useState } from "react";

import { SONG_LOOP, SONG_URL, SONG_VOLUME } from "@/lib/song";

/**
 * Reproductor de la canción de fondo.
 *
 * - Usa el elemento `Audio` nativo del navegador: cero dependencias externas.
 * - Se crea solo en el cliente (evita romper el render en el servidor / SSR).
 * - `start()` debe llamarse dentro de un gesto del usuario (clic en la caja),
 *   que es lo que exigen los navegadores para permitir el autoplay.
 */
export function useSong() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio(SONG_URL);
    audio.loop = SONG_LOOP;
    audio.volume = SONG_VOLUME;
    audio.preload = "auto";
    audioRef.current = audio;
    setReady(true);

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const start = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    void audio.play().catch(() => {
      // El navegador bloqueó el autoplay: el botón de música queda disponible.
      setPlaying(false);
    });
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, []);

  return { playing, ready, start, toggle };
}
