"use client";
import { Card } from "../components/Card";
import Link from "next/link";
import { CONTENT } from "../lib/lessons";
import SearchBar from "../components/SearchBar";
import FavoriteButton from "../components/FavoriteButton";
import { isFavorite } from "../lib/favorites";
import { useMemo, useState } from "react";

const lessons = [
  { id: "restoration", title: "La Restauración" },
  { id: "plan-of-salvation", title: "Plan de Salvación" },
  { id: "gospel-of-jesus-christ", title: "Evangelio de Jesucristo" },
  { id: "commandments", title: "Mandamientos" },
  { id: "laws-and-ordinances", title: "Leyes y Ordenanzas" },
];

export default function Home() {
  const [q, setQ] = useState("");
  const [favOnly, setFavOnly] = useState(false);
  const list = useMemo(() => {
    const term = q.toLowerCase();
    return lessons.filter((l) => {
      if (favOnly && !isFavorite(l.id)) return false;
      const one = (CONTENT as any)[l.id]?.es?.oneLiner || "";
      return !term || `${l.title} ${one}`.toLowerCase().includes(term);
    });
  }, [q, favOnly]);
  return (
    <div className="space-y-6">
      <header className="rounded-2xl bg-gradient-to-b from-white via-emerald-50 to-white p-8 shadow-soft">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-800">Recursos Misionales</h1>
            <p className="mt-1 text-slate-700">Selecciona una lección para empezar.</p>
          </div>
          <a className="btn btn-primary" href="/l/restoration?lang=es">Comenzar ahora</a>
        </div>
      </header>
      <div className="grid gap-3 md:grid-cols-[2fr_auto] items-center">
        <SearchBar onChange={setQ} />
        <button onClick={() => setFavOnly((v) => !v)} className={`rounded-xl border px-3 py-2 text-sm ${favOnly ? "bg-emerald-600 text-white" : "bg-white hover:bg-slate-50"}`}>★ Favoritos</button>
      </div>
      <section className="grid gap-4 sm:grid-cols-2">
        {list.map((l) => (
          <Link key={l.id} href={`/l/${l.id}?lang=es`} className="block rounded-2xl border bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
            <div className="mb-1 text-xs uppercase tracking-wide text-slate-500">Lección</div>
            <div className="text-lg font-semibold">{l.title}</div>
            <div className="mt-2 text-sm text-slate-600">{(CONTENT as any)[l.id]?.es?.oneLiner || (CONTENT as any)[l.id]?.es?.keyLine || ""}</div>
            <div className="mt-3 flex items-center justify-between text-brand-700 text-sm font-medium">
              <span>Abrir →</span>
              <FavoriteButton slug={l.id} />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
