"use client";

import { useState } from "react";

export default function SearchBar({ onChange }: { onChange: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <input
      value={q}
      onChange={(e) => {
        setQ(e.target.value);
        onChange(e.target.value);
      }}
      placeholder="Buscar…"
      className="w-full rounded-xl border px-3 py-2 text-sm"
      aria-label="Buscar"
    />
  );
}


