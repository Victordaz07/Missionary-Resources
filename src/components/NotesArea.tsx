"use client";

import { useState } from "react";

export default function NotesArea({ placeholder = "Impresiones y notas…" }: { placeholder?: string }) {
  const [text, setText] = useState("");
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-black/10 p-4 shadow-soft outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      rows={5}
    />
  );
}


