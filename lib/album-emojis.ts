// Lista curada de emojis inspirados en el Caribe para elegir al registrar un aporte.
export const ALBUM_EMOJIS: string[] = [
  "🎨",
  "🌺",
  "🌴",
  "☀️",
  "🌊",
  "🐚",
  "🦩",
  "🥭",
  "🍉",
  "🎉",
  "🎭",
  "🥁",
  "🎶",
  "💃",
  "🕺",
  "🌈",
  "🔥",
  "✨",
  "⭐",
  "🏠",
  "🪧",
  "🖌️",
  "🖍️",
  "📸",
  "🔤",
  "🦜",
  "🌻",
  "🍹",
  "🌅",
  "❤️",
  "🧡",
  "💛",
];
export const DEFAULT_ALBUM_EMOJI = ALBUM_EMOJIS[0];
export function isValidAlbumEmoji(value: string): boolean {
  return ALBUM_EMOJIS.includes(value);
}
