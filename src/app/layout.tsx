import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { I18nProvider } from "../i18n/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Missionary Resources",
  description:
    "Recursos y herramientas para misioneros: estudio, idiomas, salud y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(() => { try { const saved = localStorage.getItem('theme'); const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; const theme = saved || (prefersDark ? 'dark' : 'light'); document.documentElement.classList.add(theme); } catch(_) {} })();",
          }}
        />
        <I18nProvider>
          <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr]">
            <aside className="hidden border-r border-black/10 bg-white/80 p-4 md:block dark:border-white/10 dark:bg-black/40">
              <div className="mb-6 px-2 text-sm font-semibold tracking-tight">
                Missionary Resources
              </div>
              <nav className="flex flex-col gap-1 text-sm">
                <a
                  href="/"
                  className="rounded-md px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Inicio
                </a>
                <a
                  href="#recursos"
                  className="rounded-md px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Recursos
                </a>
                <a
                  href="#contacto"
                  className="rounded-md px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Contacto
                </a>
              </nav>
            </aside>
            <div className="flex min-w-0 flex-col">
              <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
                <div className="flex h-14 items-center justify-between px-4">
                  <button
                    className="md:hidden rounded-md px-2 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    aria-label="Abrir menú"
                  >
                    Menú
                  </button>
                  <div className="text-sm font-medium">Panel</div>
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </header>
              <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
                {children}
              </main>
              <footer className="mt-auto border-t border-black/10 py-6 text-center text-xs text-foreground/60 dark:border-white/10">
                © {new Date().getFullYear()} Missionary Resources
              </footer>
            </div>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
