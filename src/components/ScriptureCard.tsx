"use client";

export default function ScriptureCard({ refText, text }: { refText: string; text: string }) {
  const copy = () => {
    try { navigator.clipboard.writeText(`${refText}: ${text}`); } catch {}
  };
  return (
    <div className="card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift rounded-2xl">
      <div className="mb-2 flex items-center justify-between">
        <strong className="text-slate-800">{refText}</strong>
        <button className="btn btn-outline px-2 py-1 h-7 text-xs" onClick={copy} aria-label="Copiar versículo">Copiar</button>
      </div>
      <p className="text-slate-700 text-sm leading-6">{text}</p>
    </div>
  );
}


