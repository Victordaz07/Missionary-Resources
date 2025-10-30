"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type Locale = "es" | "en";

type Dict = Record<string, string>;

const dictionaries: Record<Locale, Dict> = {
  es: {
    summary: "Resumen",
    explore: "Explorar",
    contact: "Contacto",
    resources: "Recursos",
    totalItems: "Más de 120 items",
    study: "Estudio",
    studyDesc: "Escrituras, manuales, planes y hojas de estudio.",
    languages: "Idiomas",
    languagesDesc: "Vocabulario, pronunciación y práctica conversacional.",
    tools: "Herramientas",
    toolsDesc: "Apps útiles, planificación, seguimiento y productividad.",
    health: "Salud",
    healthDesc: "Bienestar físico y mental, rutinas y recomendaciones.",
    culture: "Cultura",
    cultureDesc: "Costumbres locales, etiqueta y comprensión cultural.",
    admin: "Administrativo",
    adminDesc: "Listas, presupuestos, logística y recursos oficiales.",
    favorites: "Favoritos",
  },
  en: {
    summary: "Overview",
    explore: "Explore",
    contact: "Contact",
    resources: "Resources",
    totalItems: "120+ items",
    study: "Study",
    studyDesc: "Scriptures, manuals, plans and study sheets.",
    languages: "Languages",
    languagesDesc: "Vocabulary, pronunciation and conversational practice.",
    tools: "Tools",
    toolsDesc: "Helpful apps, planning, tracking and productivity.",
    health: "Health",
    healthDesc: "Physical and mental well-being, routines and tips.",
    culture: "Culture",
    cultureDesc: "Local customs, etiquette and cultural understanding.",
    admin: "Administrative",
    adminDesc: "Lists, budgets, logistics and official resources.",
    favorites: "Favorites",
  },
};

type I18nContextValue = {
  locale: Locale;
  t: (key: keyof typeof dictionaries["es"]) => string;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>((() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("locale");
    return (saved as Locale) || "es";
  })());

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    t: (key) => dictionaries[locale][key] ?? String(key),
    setLocale: (l) => {
      setLocale(l);
      try { localStorage.setItem("locale", l); } catch {}
    },
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


