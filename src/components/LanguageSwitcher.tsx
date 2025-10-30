"use client";

import { useI18n, type Locale } from "../i18n/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };

  return (
    <select
      value={locale}
      onChange={onChange}
      className="rounded-md border border-black/10 bg-transparent px-2 py-1 text-xs dark:border-white/10"
      aria-label="Cambiar idioma"
      title="Cambiar idioma"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}


