"use client";

export default function TagChips({ tags, active, onToggle }: { tags: string[]; active: Set<string>; onToggle: (t: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <button
          key={t}
          onClick={() => onToggle(t)}
          className={`rounded-xl px-3 py-1 text-xs border ${active.has(t) ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}


