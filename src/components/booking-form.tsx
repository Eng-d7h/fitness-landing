"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { Icon } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Two-step booking form for the hero (dark background).
 * Step 1: pick a treatment tile. Step 2: name + phone.
 * Posts to Formspree (site.form.endpoint); with no endpoint it opens the visitor's email app.
 */
export function BookingForm() {
  const f = site.form;
  const [step, setStep] = useState<1 | 2>(1);
  const [choice, setChoice] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot

    if (!f.endpoint) {
      const body = `Treatment: ${choice}\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\n\n${data.get("message") ?? ""}`;
      window.location.href = `mailto:${site.business.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(f.endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="py-10 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent">
          <Icon name="check" className="size-7" />
        </span>
        <p className="mt-5 text-2xl font-bold">{f.successTitle}</p>
        <p className="mt-2 text-on-primary-muted">{f.successText}</p>
      </div>
    );
  }

  const field =
    "block w-full min-h-12 rounded-xl border border-white/15 bg-white px-4 text-ink placeholder:text-placeholder focus:outline-2 focus:outline-highlight";

  return (
    <div>
      <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-highlight">
        <span aria-hidden="true" className="size-2 rounded-full bg-current" />
        {f.eyebrow}
      </p>
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{f.title}</h2>
      <p className="mt-2 text-sm text-on-primary-muted">{f.intro}</p>

      {/* progress */}
      <div className="mt-6 grid grid-cols-2 gap-2" aria-hidden="true">
        <span className="h-1 rounded-full bg-highlight" />
        <span className={`h-1 rounded-full ${step === 2 ? "bg-highlight" : "bg-white/15"}`} />
      </div>
      <div className="mt-3 flex h-6 items-center justify-between text-xs text-on-primary-muted">
        {step === 2 ? (
          <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-1 hover:text-white">
            <Icon name="arrowLeft" className="size-4" /> {f.back}
          </button>
        ) : (
          <span />
        )}
        <span className="font-semibold uppercase tracking-widest">{f.stepLabel.replace("{n}", String(step))}</span>
      </div>

      {step === 1 ? (
        <fieldset className="mt-4">
          <legend className="mb-4 text-lg font-semibold">{f.step1}</legend>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {f.options.map((o) => (
              <button
                key={o.label}
                type="button"
                onClick={() => {
                  setChoice(o.label);
                  setStep(2);
                }}
                className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border p-3 text-sm font-semibold transition-colors hover:border-highlight hover:bg-white/10 ${
                  choice === o.label ? "border-highlight bg-white/10" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <Icon name={o.icon} className="size-6 text-highlight" />
                {o.label}
              </button>
            ))}
          </div>
        </fieldset>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 space-y-3">
          <p className="text-lg font-semibold">{f.step2}</p>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
            <Icon name="check" className="size-4 text-highlight" /> {choice}
          </p>
          <input type="hidden" name="treatment" value={choice} />
          <label className="block">
            <span className="sr-only">Name</span>
            <input name="name" required autoComplete="name" placeholder={f.namePlaceholder} className={field} />
          </label>
          <label className="block">
            <span className="sr-only">Phone</span>
            <input name="phone" type="tel" required autoComplete="tel" placeholder={f.phonePlaceholder} className={field} />
          </label>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea name="message" rows={2} placeholder={f.messagePlaceholder} className={`${field} py-3`} />
          </label>
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : f.submit}
            <Icon name="arrowRight" className="size-4" />
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm text-white">
              Something went wrong. Please call {site.business.phoneDisplay}.
            </p>
          )}
          <p className="text-center text-xs text-on-primary-muted">{f.privacyNote}</p>
        </form>
      )}
    </div>
  );
}
