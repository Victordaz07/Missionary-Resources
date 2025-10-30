import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 60,
          background: "linear-gradient(135deg,#ecfeff,#ffffff 60%)",
          color: "#0f172a",
          fontFamily: "Inter,ui-sans-serif,system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "absolute", top: 40, left: 60 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#059669", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>⛪</div>
          <div style={{ fontSize: 24, opacity: 0.8 }}>Recurso Misional</div>
        </div>
        <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>Missionary Companion — Public Lesson Resources</div>
        <div style={{ marginTop: 18, fontSize: 28, opacity: 0.85 }}>Scriptures, outlines, and media to support members and missionaries.</div>
        <div style={{ position: "absolute", bottom: 40, left: 60, fontSize: 22, opacity: 0.7 }}>© {new Date().getFullYear()} Recurso Misional</div>
      </div>
    ),
    { ...size }
  );
}


