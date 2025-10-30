import { getLesson, type Lang, type LessonId } from "../../../lib/lessons";
import { getUI } from "../../../lib/i18n";
import LessonHeader from "../../../components/LessonHeader";
import ActionsBar from "../../../components/ActionsBar";
import LanguageToggle from "../../../components/LanguageToggle";
import ScriptureCard from "../../../components/ScriptureCard";
import OutlineStep from "../../../components/OutlineStep";
import MediaCard from "../../../components/MediaCard";
import NotesArea from "../../../components/NotesArea";
import MotionFadeIn from "../../../components/MotionFadeIn";

export const dynamic = "force-static";

export default async function Page({ params, searchParams }: { params: Promise<{ lesson: LessonId }>; searchParams?: Promise<{ lang?: Lang }> }) {
  const { lesson } = await params;
  const sp = (await searchParams) || {};
  const lang: Lang = (sp.lang as Lang) || "es";
  const content = getLesson(lesson, lang);
  const ui = getUI(lang);

  if (!content) {
    return <div className="text-sm text-slate-600">Lección no encontrada.</div>;
  }

  return (
    <MotionFadeIn k={`${lesson}-${lang}`}>
      <div className="mb-4 flex items-center justify-between">
        <LanguageToggle />
        <ActionsBar />
      </div>

      <div className="sticky top-14 z-30 mb-3 flex items-center justify-between rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm shadow-soft backdrop-blur">
        <div className="font-medium text-slate-800 truncate pr-3">{content.title}</div>
        <LanguageToggle />
      </div>

      <LessonHeader content={{ title: content.title, subtitle: content.objective }} />

      <section className="mt-6">
        <div className="card border-l-4 border-brand-500 p-5 shadow-soft">
          <h2 className="text-slate-800 font-semibold">{ui.objective}</h2>
          <p className="mt-1 text-slate-700 text-sm">{content.objective}</p>
        </div>
      </section>

      <section className="mt-6 text-center">
        <blockquote className="rounded-2xl bg-white p-6 shadow-soft font-[var(--font-display)] text-xl text-slate-800">
          “{content.oneLiner}”
        </blockquote>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-semibold text-slate-800">{ui.scriptures}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.scriptures.map((s, i) => (
            <ScriptureCard key={i} refText={s.ref} text={s.text} />
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-semibold text-slate-800">{ui.outline}</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {content.outline.map((o, i) => (
            <OutlineStep key={i} icon={o.icon} title={o.title} bullets={o.bullets} />
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-semibold text-slate-800">{ui.media}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.media.map((m, i) => (
            <MediaCard key={i} kind={m.kind} title={m.label} href={m.url} />
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-semibold text-slate-800">{ui.commitments}</h2>
        <ul className="card space-y-2 p-5 shadow-soft">
          {content.commitments.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 font-semibold text-slate-800">{ui.notes}</h2>
        <NotesArea placeholder={content.notesHelp} />
      </section>
    </MotionFadeIn>
  );
}


