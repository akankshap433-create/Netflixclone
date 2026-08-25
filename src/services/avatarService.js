// ==========================================
// BULLETPROOF NETFLIX AVATAR SERVICE
// Provides 100% reliable, zero-fail SVG avatars
// ==========================================

export const AVATAR_OPTIONS = [
  {
    id: "avatar-alex",
    name: "Classic Red Smiley",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23E50914"/><circle cx="34" cy="38" r="8" fill="%23FFFFFF"/><circle cx="66" cy="38" r="8" fill="%23FFFFFF"/><path d="M 28 62 Q 50 82 72 62" fill="none" stroke="%23FFFFFF" stroke-width="7" stroke-linecap="round"/></svg>`
  },
  {
    id: "avatar-sarah",
    name: "Chic Violet Star",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%238338EC"/><circle cx="35" cy="40" r="7" fill="%23FFBE0B"/><circle cx="65" cy="40" r="7" fill="%23FFBE0B"/><path d="M 30 65 Q 50 80 70 65" fill="none" stroke="%23FFBE0B" stroke-width="6" stroke-linecap="round"/><polygon points="50,12 53,22 64,22 55,28 58,38 50,32 42,38 45,28 36,22 47,22" fill="%23FFBE0B"/></svg>`
  },
  {
    id: "avatar-kids",
    name: "Kids Sunny Monster",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%233A86FF"/><circle cx="35" cy="36" r="10" fill="%23FFFFFF"/><circle cx="35" cy="36" r="5" fill="%23000000"/><circle cx="65" cy="36" r="10" fill="%23FFFFFF"/><circle cx="65" cy="36" r="5" fill="%23000000"/><path d="M 25 58 Q 50 85 75 58 Z" fill="%23FF006E"/><rect x="38" y="58" width="8" height="6" fill="%23FFFFFF" rx="1"/><rect x="54" y="58" width="8" height="6" fill="%23FFFFFF" rx="1"/></svg>`
  },
  {
    id: "avatar-gamer",
    name: "Neon Gamer Green",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%2306D6A0"/><rect x="25" y="32" width="50" height="24" rx="6" fill="%23118AB2"/><circle cx="38" cy="44" r="5" fill="%23FFD166"/><circle cx="62" cy="44" r="5" fill="%23FFD166"/><path d="M 32 68 Q 50 78 68 68" fill="none" stroke="%23073B4C" stroke-width="5" stroke-linecap="round"/></svg>`
  },
  {
    id: "avatar-hero",
    name: "Midnight Ninja",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23111111"/><rect x="15" y="32" width="70" height="20" rx="4" fill="%23E50914"/><circle cx="36" cy="42" r="6" fill="%23FFFFFF"/><circle cx="64" cy="42" r="6" fill="%23FFFFFF"/><circle cx="36" cy="42" r="3" fill="%23111111"/><circle cx="64" cy="42" r="3" fill="%23111111"/><path d="M 35 72 L 65 72" stroke="%23E50914" stroke-width="4" stroke-linecap="round"/></svg>`
  },
  {
    id: "avatar-pink",
    name: "Pink Anime Panda",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23FF70A6"/><circle cx="32" cy="38" r="9" fill="%23FFFFFF"/><circle cx="32" cy="38" r="4.5" fill="%23FF006E"/><circle cx="68" cy="38" r="9" fill="%23FFFFFF"/><circle cx="68" cy="38" r="4.5" fill="%23FF006E"/><circle cx="20" cy="52" r="6" fill="%23FF9770" opacity="0.8"/><circle cx="80" cy="52" r="6" fill="%23FF9770" opacity="0.8"/><path d="M 38 62 Q 50 72 62 62" fill="none" stroke="%23FFFFFF" stroke-width="5" stroke-linecap="round"/></svg>`
  }
];

export function getAvatarById(id) {
  const found = AVATAR_OPTIONS.find(a => a.id === id);
  return found ? found.svg : AVATAR_OPTIONS[0].svg;
}
