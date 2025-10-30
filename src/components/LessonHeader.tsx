export default function LessonHeader({ content }: { content: { title: string; subtitle?: string } }) {
  return (
    <header className="rounded-2xl bg-gradient-to-b from-white via-emerald-50 to-white p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-brand-500/10 p-3 text-brand-600">🌍</div>
        <div>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold text-slate-800">
            {content.title}
          </h1>
          {content.subtitle ? (
            <p className="mt-1 text-slate-700">{content.subtitle}</p>
          ) : null}
        </div>
      </div>
    </header>
  );
}


