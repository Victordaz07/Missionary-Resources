import { ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  href?: string;
};

export function Card({ title, subtitle, children, href }: CardProps) {
  const content = (
    <div className="rounded-xl border border-black/10 bg-white p-5 transition hover:shadow-sm dark:border-white/10 dark:bg-black">
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle ? (
          <span className="text-xs text-foreground/60">{subtitle}</span>
        ) : null}
      </div>
      <div className="text-sm text-foreground/70">{children}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}


