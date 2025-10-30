export default function OutlineStep({ icon, title, bullets }: { icon: string; title: string; bullets: string[] }) {
  return (
    <div className="card p-5 shadow-soft">
      <div className="mb-2 flex items-center gap-2 text-slate-800">
        <span>{icon}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}


