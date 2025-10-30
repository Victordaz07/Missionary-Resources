export default function MediaCard({ kind, title, href }: { kind: "video" | "pdf"; title: string; href: string }) {
  const icon = kind === "video" ? "▶️" : "📄";
  return (
    <a className="card block rounded-2xl p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift" href={href} target="_blank" rel="noopener noreferrer">
      <div className="mb-2 flex items-center gap-2 text-slate-800">
        <span>{icon}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-xs text-slate-500">Abrir en nueva pestaña</p>
    </a>
  );
}


