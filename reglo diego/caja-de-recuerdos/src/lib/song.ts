/**
 * Configuración de la canción de fondo.
 *
 * Portabilidad: el archivo vive en `public/audio/` y se sirve como archivo
 * estático por CUALQUIER host (Lovable, Render, Vercel, Nginx, etc.).
 * No depende de ningún CDN ni SDK de la plataforma.
 *
 * Si algún día quieres servir el audio desde otro origen (S3, Cloudinary,
 * un bucket en Render, etc.), solo define la variable de entorno
 * `VITE_SONG_URL` con la URL completa y no hay que tocar ni una línea de UI.
 */
const ENV_URL = import.meta.env["VITE_SONG_URL"] as string | undefined;

/** Ruta por defecto: archivo estático dentro de `public/`. */
export const SONG_URL = ENV_URL && ENV_URL.length > 0 ? ENV_URL : "/audio/cancion-cumple.m4a";

/** Volumen inicial (0–1). */
export const SONG_VOLUME = 0.55;

/** La canción se repite mientras la persona recorre la caja. */
export const SONG_LOOP = true;
