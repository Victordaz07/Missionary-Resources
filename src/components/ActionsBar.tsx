"use client";

import { usePathname, useSearchParams } from "next/navigation";

function copyToClipboard(text: string) {
  try { navigator.clipboard.writeText(text); } catch {}
}

export default function ActionsBar() {
  const pathname = usePathname();
  const params = useSearchParams();
  const url = typeof window !== "undefined" ? `${window.location.origin}${pathname}?${params.toString()}` : pathname;

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button className="btn btn-outline" aria-label="Copiar enlace" title="Copiar enlace" onClick={() => copyToClipboard(url)}>📋 Copiar</button>
      <a className="btn btn-outline" aria-label="Abrir WhatsApp" title="Abrir WhatsApp" target="_blank" rel="noopener noreferrer" href={whatsapp}>🟢 WhatsApp</a>
      <button className="btn btn-primary" aria-label="Imprimir" title="Imprimir" onClick={() => window.print()}>🖨️ Imprimir</button>
    </div>
  );
}


