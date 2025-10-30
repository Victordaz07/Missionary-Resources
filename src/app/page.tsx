"use client";
import { Card } from "../components/Card";
import { useI18n } from "../i18n/i18n";
import { useEffect, useState } from "react";
import { fetchResources, type Resource } from "../lib/resources";
import { isFirebaseConfigured } from "../lib/firebase";

export default function Home() {
  const { t } = useI18n();
  const [resources, setResources] = useState<Resource[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchResources()
      .then((data) => setResources(data))
      .catch((e) => setError(e?.message || "Error"));
  }, []);
  return (
    <div className="space-y-8">
      {!isFirebaseConfigured() && (
        <div className="rounded-md border border-amber-400 bg-amber-50 px-4 py-2 text-amber-800 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-300">
          Estás en modo local (sin Firebase). Se muestran datos de ejemplo.
        </div>
      )}
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">{t("summary")}</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title={t("resources")} subtitle="totales">
            {resources ? `${resources.length}` : error ? "-" : "…"}
          </Card>
          <Card title={t("study")} subtitle="nuevos">7</Card>
          <Card title={t("languages")} subtitle="actualizados">3</Card>
          <Card title={t("favorites")} subtitle="tuyos">12</Card>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">{t("explore")}</h2>
        <div id="recursos" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: t("study"),
              desc: t("studyDesc"),
            },
            {
              title: t("languages"),
              desc: t("languagesDesc"),
            },
            {
              title: t("tools"),
              desc: t("toolsDesc"),
            },
            {
              title: t("health"),
              desc: t("healthDesc"),
            },
            {
              title: t("culture"),
              desc: t("cultureDesc"),
            },
            {
              title: t("admin"),
              desc: t("adminDesc"),
            },
          ].map((card) => (
            <Card key={card.title} title={card.title} href="#">
              {card.desc}
            </Card>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-3xl">
        <h2 className="text-xl font-semibold">{t("contact")}</h2>
        <p className="mt-2 text-sm text-foreground/70">
          ¿Tienes un recurso para sugerir? Envíanos tus ideas y enlaces.
        </p>
      </section>
    </div>
  );
}
