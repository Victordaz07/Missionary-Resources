const KEY = "favorite_lessons";

export const getFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

export const isFavorite = (slug: string): boolean => getFavorites().includes(slug);

export const toggleFavorite = (slug: string): string[] => {
  const set = new Set(getFavorites());
  set.has(slug) ? set.delete(slug) : set.add(slug);
  const arr = Array.from(set);
  try {
    localStorage.setItem(KEY, JSON.stringify(arr));
  } catch {}
  return arr;
};


