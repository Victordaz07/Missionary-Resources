import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const classes = `btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${className ?? ""}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return <button className={classes}>{children}</button>;
}


