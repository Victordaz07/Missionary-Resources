/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { CONTENT, type Lang } from "../../../lib/lessons";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({ params, searchParams }: { params: { lesson: string }; searchParams: { lang?: string } }) {
  const supported: Lang[] = ["es", "en", "pt", "fr"];
  const lang = (supported as string[]).includes(searchParams.lang || "") ? (searchParams.lang as Lang) : "es";
  const lessons = Object.keys(CONTENT);
  const lesson = lessons.includes(params.lesson) ? params.lesson : "plan-of-salvation";
  const c = CONTENT[lesson as keyof typeof CONTENT][lang];

  // Fallbacks for older schema: use keyLine as one-liner
  const oneLiner = (c as any).oneLiner ?? (c as any).keyLine ?? "";
  const title = (c as any).title ?? "Recurso Misional";

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 55%)",
          padding: 60,
          fontFamily: "Inter, ui-sans-serif, system-ui",
          color: "#0f172a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#059669",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            ⛪
          </div>
          <div style={{ fontSize: 24, opacity: 0.8 }}>Recurso Misional</div>
        </div>
        <div style={{ marginTop: 32, fontSize: 56, fontWeight: 800, lineHeight: 1.1, maxWidth: 960 }}>{title}</div>
        <div style={{ marginTop: 20, fontSize: 28, maxWidth: 1000, opacity: 0.85 }}>“{oneLiner}”</div>
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 22, color: "#065f46" }}>/{lesson} · lang: {lang.toUpperCase()}</div>
          <div style={{ fontSize: 22, opacity: 0.7 }}>© {new Date().getFullYear()} Recurso Misional</div>
        </div>
      </div>
    ),
    { ...size }
  );
}


