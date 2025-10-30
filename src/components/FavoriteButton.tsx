"use client";

import { useEffect, useState } from "react";
import { isFavorite, toggleFavorite } from "../lib/favorites";

export default function FavoriteButton({ slug }: { slug: string }) {
  const [fav, setFav] = useState(false);
  useEffect(() => {
    setFav(isFavorite(slug));
  }, [slug]);
  const onClick = () => {
    toggleFavorite(slug);
    setFav(isFavorite(slug));
  };
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-3 py-2 text-sm ${fav ? "bg-emerald-600 text-white" : "bg-white hover:bg-slate-50"}`}
      aria-pressed={fav}
      aria-label="Marcar como favorito"
      title={fav ? "Favorito" : "Marcar favorito"}
    >
      {fav ? "★ Favorito" : "☆ Favorito"}
    </button>
  );
}


