import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "./icons";
import { BookingForm } from "./booking-form";
import { Button, Container, Eyebrow, GlassCard, Section, SectionHeading } from "./ui";

const { business, cta, copy } = site;

/* Header: logo · nav · phone · booking pill */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 font-extrabold tracking-tight text-primary">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-white">
            <Icon name={site.brand.icon} className="size-5" />
          </span>
          <span className="whitespace-nowrap text-lg">{business.shortName}</span>
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8 text-sm font-medium text-muted">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={cta.primary.href} className="hidden items-center gap-2 text-sm font-semibold text-primary md:inline-flex">
            <Icon name="phone" className="size-4 text-accent" />
            {business.phoneDisplay}
          </a>
          <a
            href={cta.secondary.href}
            className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            {cta.secondary.short}
          </a>
        </div>
      </Container>
    </header>
  );
}

/* Hero: headline + CTAs + stat cards (left) · two-step booking form (right) */
export function Hero() {
  const { hero } = site;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-primary text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -right-40 -top-40 size-[36rem] rounded-full bg-accent/30 blur-[120px]" />
        <div className="absolute -bottom-48 -left-32 size-[28rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>
      <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow light>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="text-balance text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-primary-muted">{hero.subheadline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={cta.secondary.href} arrow>
              {cta.secondary.label}
            </Button>
            <Button href={cta.primary.href} variant="outlineLight">
              <Icon name="phone" className="size-5" />
              {business.phoneDisplay}
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-2 sm:gap-3">
            {site.trust.map((t) => (
              <div key={t.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <dt className="sr-only">{t.label}</dt>
                <dd className="whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-2xl">{t.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-on-primary-muted">{t.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <GlassCard>
          <div id={cta.secondary.href.replace("#", "")} className="scroll-mt-24">
            <BookingForm />
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

/* Why us: 4 icon steps joined by a line */
export function WhyUs() {
  return (
    <Section id="why" labelledBy="why-title">
      <SectionHeading id="why-title" eyebrow={copy.whyEyebrow} title={copy.whyTitle} />
      <ul className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-line lg:block" />
        {site.why.map((w) => (
          <li key={w.title} className="relative text-center">
            <span className="relative mx-auto grid size-16 place-items-center rounded-2xl bg-primary text-highlight shadow-xl ring-8 ring-paper">
              <Icon name={w.icon} className="size-7" />
            </span>
            <h3 className="mt-6 text-lg font-bold text-primary">{w.title}</h3>
            <p className="mx-auto mt-2 max-w-60 text-muted">{w.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* Services */
export function Services() {
  return (
    <Section id="services" tone="surface" labelledBy="services-title">
      <SectionHeading id="services-title" eyebrow={copy.servicesEyebrow} title={copy.servicesTitle} intro={copy.servicesIntro} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((s) => (
          <li
            key={s.title}
            className="group relative overflow-hidden rounded-3xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-accent transition-transform group-hover:scale-x-100" />
            <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-accent">
              <Icon name={s.icon} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* Process: numbered steps */
export function Process() {
  return (
    <Section labelledBy="process-title">
      <SectionHeading id="process-title" eyebrow={copy.processEyebrow} title={copy.processTitle} />
      <ol className="grid gap-8 md:grid-cols-3">
        {site.process.map((p, i) => (
          <li key={p.title} className="border-t-2 border-line pt-6">
            <span className="text-5xl font-extrabold tracking-tight text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-xl font-bold text-primary">{p.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* Reviews */
export function Reviews() {
  return (
    <Section id="reviews" tone="surface" labelledBy="reviews-title">
      <SectionHeading
        id="reviews-title"
        eyebrow={`${business.rating.value} ★ on Google`}
        title={copy.reviewsTitle}
        intro={site.demo ? "Sample reviews for this demo — replaced with real reviews at launch." : undefined}
      />
      <ul className="grid gap-5 md:grid-cols-3">
        {site.reviews.map((r) => (
          <li key={r.name}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-paper p-7">
              <div className="flex gap-1 text-star" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="size-5" filled />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">“{r.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                  {r.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-bold text-primary">{r.name}</span>
                  <span className="text-muted">{r.area}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* FAQ: title + help card (left) · numbered accordion (right) */
export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading id="faq-title" eyebrow={copy.faqEyebrow} title={copy.faqTitle} intro={copy.faqIntro} align="left" />
          <a
            href={cta.primary.href}
            className="-mt-4 flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 shadow-sm transition-shadow hover:shadow-lg"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-highlight">
              <Icon name="phone" className="size-6" />
            </span>
            <span>
              <span className="block font-bold text-primary">{copy.faqHelpTitle}</span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                {copy.faqHelpLink} <Icon name="arrowRight" className="size-4" />
              </span>
            </span>
          </a>
        </div>
        <div className="space-y-3">
          {site.faq.map((f, i) => (
            <details key={f.q} className="group rounded-2xl border border-line bg-paper px-6 py-5 open:shadow-lg" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-4 font-semibold text-primary">
                <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-lg">{f.q}</span>
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-lg transition-colors group-open:border-accent group-open:bg-accent group-open:text-white"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-3 pl-9 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* Final CTA: text + points (left) · contact channels card (right) */
export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute -bottom-40 right-0 size-[32rem] rounded-full bg-accent/25 blur-[120px]" />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow light>{copy.finalEyebrow}</Eyebrow>
          <h2 id="final-title" className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl sm:leading-[1.08]">
            {copy.finalTitle}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-on-primary-muted">{copy.finalText}</p>
          <ul className="mt-8 space-y-3">
            {copy.finalPoints.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Icon name="check" className="size-5 text-highlight" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <GlassCard>
          <Eyebrow light>{copy.contactEyebrow}</Eyebrow>
          <p className="text-2xl font-extrabold tracking-tight">{copy.contactTitle}</p>
          <ul className="mt-6 space-y-3">
            {site.contact.map((c) => (
              <li key={c.title}>
                <a
                  href={c.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-highlight hover:bg-white/10"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent">
                    <Icon name={c.icon} className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">{c.title}</span>
                    <span className="text-sm text-on-primary-muted">{c.text}</span>
                  </span>
                  <Icon name="arrowRight" className="size-5 text-on-primary-muted transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          <Button href={cta.secondary.href} arrow className="mt-6 w-full">
            {cta.secondary.label}
          </Button>
        </GlassCard>
      </Container>
    </section>
  );
}

/* Footer: brand · contact · hours · areas · legal */
async function copyrightYear() {
  "use cache"; // Next 16 forbids raw new Date() during prerender
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await copyrightYear();
  return (
    <footer className="border-t border-footer-line bg-primary pb-24 pt-14 text-footer-text md:pb-10">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5 text-lg font-extrabold text-white">
            <span className="grid size-9 place-items-center rounded-xl bg-accent">
              <Icon name={site.brand.icon} className="size-5" />
            </span>
            {business.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{business.tagline}</p>
          <p className="mt-2 text-sm">{business.license}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-highlight">{copy.areaLabel}</p>
          <p className="mt-2 text-sm leading-relaxed">{site.serviceArea.join(" · ")}</p>
        </div>
        <address className="space-y-2 text-sm not-italic">
          <p className="mb-3 font-semibold text-white">{copy.contactLabel}</p>
          <p>{business.addressDisplay}</p>
          <p>
            <a href={cta.primary.href} className="hover:text-white">
              {business.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${business.email}`} className="hover:text-white">
              {business.email}
            </a>
          </p>
        </address>
        <div className="text-sm">
          <p className="mb-3 font-semibold text-white">{copy.hoursLabel}</p>
          <ul className="space-y-2">
            {business.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-12 flex flex-col gap-2 border-t border-footer-line pt-6 text-xs sm:flex-row sm:justify-between">
        <p>
          © {year} {business.name}. All rights reserved.
        </p>
        <Link href="/privacy" className="hover:text-white">
          {copy.privacyLabel}
        </Link>
      </Container>
    </footer>
  );
}

/* Mobile sticky bar — the #1 conversion element for local businesses */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
      <Button href={cta.primary.href} variant="outline" className="w-full">
        <Icon name="phone" className="size-5" />
        {cta.primary.short}
      </Button>
      <Button href={cta.secondary.href} className="w-full">
        {cta.secondary.short}
      </Button>
    </div>
  );
}

export function DemoRibbon() {
  if (!site.demo) return null;
  return (
    <p className="bg-notice-bg px-4 py-2 text-center text-xs font-medium text-notice-fg">
      Demo website — business details and reviews are placeholders.
    </p>
  );
}
