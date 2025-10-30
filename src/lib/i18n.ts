import type { Lang } from "./lessons";

export function getUI(lang: Lang) {
  const dict = {
    es: {
      copy: "Copiar",
      whatsapp: "WhatsApp",
      print: "Imprimir",
      objective: "Objetivo",
      key: "Idea clave",
      scriptures: "Escrituras",
      outline: "Esquema (3 pasos)",
      media: "Recursos",
      commitments: "Compromisos",
      closing: "Cierre",
      notes: "Notas",
    },
    en: {
      copy: "Copy",
      whatsapp: "WhatsApp",
      print: "Print",
      objective: "Objective",
      key: "Key line",
      scriptures: "Scriptures",
      outline: "3-Step Outline",
      media: "Resources",
      commitments: "Commitments",
      closing: "Closing",
      notes: "Notes",
    },
    pt: {
      copy: "Copiar",
      whatsapp: "WhatsApp",
      print: "Imprimir",
      objective: "Objetivo",
      key: "Frase chave",
      scriptures: "Escrituras",
      outline: "Roteiro (3 passos)",
      media: "Recursos",
      commitments: "Compromissos",
      closing: "Encerramento",
      notes: "Notas",
    },
    fr: {
      copy: "Copier",
      whatsapp: "WhatsApp",
      print: "Imprimer",
      objective: "Objectif",
      key: "Phrase clé",
      scriptures: "Écritures",
      outline: "Plan en 3 étapes",
      media: "Ressources",
      commitments: "Engagements",
      closing: "Clôture",
      notes: "Notes",
    },
  } as const;
  return dict[lang];
}


