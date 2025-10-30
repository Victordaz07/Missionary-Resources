import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../i18n/i18n";
import LessonSelect from "../components/LessonSelect";

const fontSans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const fontDisplay = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Missionary Resources",
  description:
    "Recursos y herramientas para misioneros: estudio, idiomas, salud y más.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} antialiased bg-gradient-to-b from-slate-50 to-white`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(() => { try { const saved = localStorage.getItem('theme'); const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; const theme = saved || (prefersDark ? 'dark' : 'light'); document.documentElement.classList.add(theme); } catch(_) {} })();",
          }}
        />
        <I18nProvider>
          <header className="sticky top-0 z-40 border-b border-black/10 bg-white/70 backdrop-blur">
            <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
              <a href="/" className="text-sm font-semibold tracking-tight text-slate-800">
                Recurso Misional
              </a>
              <nav className="hidden items-center gap-4 text-sm sm:flex">
                <a href="/" className="rounded-lg px-2 py-1 hover:bg-black/5">Inicio</a>
                <a href="/l/restoration?lang=es" className="rounded-lg px-2 py-1 hover:bg-black/5">Lecciones</a>
                <LessonSelect />
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-4xl p-6">
            {children}
            <footer className="mt-16 border-t border-black/10 py-6 text-center text-xs text-foreground/60">
              © {new Date().getFullYear()} Recurso Misional
            </footer>
          </main>
        </I18nProvider>
      </body>
    </html>
  );
}
