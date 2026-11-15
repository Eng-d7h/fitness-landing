import type { ReactNode } from "react";
import { Icon } from "./icons";

/** Shared layout primitives. Keep spacing consistent across every section. */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  tone = "paper",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  tone?: "paper" | "surface" | "primary";
  labelledBy?: string;
}) {
  const tones = {
    paper: "bg-paper",
    surface: "bg-surface",
    primary: "bg-primary text-white",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-20 sm:py-28`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Small label above a heading: ● TEXT ——  */
export function Eyebrow({ children, light = false, center = false }: { children: ReactNode; light?: boolean; center?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${center ? "justify-center" : ""} ${
        light ? "text-highlight" : "text-accent-text"
      }`}
    >
      <span aria-hidden="true" className="size-2 rounded-full bg-current" />
      {children}
      <span aria-hidden="true" className="hidden h-px w-8 bg-current opacity-40 sm:block" />
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  light = false,
  align = "center",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Eyebrow light={light} center={center}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        id={id}
        className={`text-balance text-3xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08] ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </h2>
      <span aria-hidden="true" className={`mt-5 block h-1 w-12 rounded-full bg-accent ${center ? "mx-auto" : ""}`} />
      {intro && <p className={`mt-5 text-lg ${light ? "text-on-primary-muted" : "text-muted"}`}>{intro}</p>}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "outline" | "outlineLight";
  className?: string;
  arrow?: boolean;
};

export function Button({ href, children, variant = "accent", className = "", arrow = false }: ButtonProps) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-base font-semibold transition-all focus-visible:outline-3 focus-visible:outline-offset-2";
  const variants = {
    accent: "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover focus-visible:outline-accent",
    outline: "border-2 border-primary text-primary hover:bg-primary-soft focus-visible:outline-primary",
    outlineLight: "border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
}

/** Translucent card for dark sections. */
export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
