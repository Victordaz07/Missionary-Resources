"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { Lang } from "../lib/lessons";

const LANGS: Lang[] = ["es", "en", "pt", "fr"];

export default function LanguageToggle() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const lang = (params.get("lang") as Lang) || "es";

  const setLang = (l: Lang) => {
    const sp = new URLSearchParams(params.toString());
    sp.set("lang", l);
    router.replace(`${pathname}?${sp.toString()}`);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-black/10 bg-white/70 p-1 text-xs shadow-soft">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-1 rounded-lg ${l === lang ? "bg-brand-500 text-white" : "hover:bg-black/5"}`}
          aria-pressed={l === lang}
          aria-label={`Cambiar idioma a ${l.toUpperCase()}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}


