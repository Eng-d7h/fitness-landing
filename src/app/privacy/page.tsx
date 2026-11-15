import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.business.name}`,
  alternates: { canonical: "/privacy" },
};

/** Generic template — the client must review it. Add a cookie banner if analytics sets cookies (UK/EU). */
export default function Privacy() {
  const b = site.business;
  return (
    <main id="main" className="py-16">
      <Container className="max-w-3xl space-y-4 text-muted">
        <Link href="/" className="text-sm font-semibold text-accent">
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold text-primary">{site.copy.privacyLabel}</h1>
        <p>
          {b.name} collects only the information you send us through our contact form or by phone and email: your name,
          phone number and details about your request. We use it solely to respond to you and provide our services.
        </p>
        <p>
          We do not sell or share your personal information with third parties, except the form-processing provider that
          delivers your message to us.
        </p>
        <p>
          To ask about, correct or delete your information, contact us at{" "}
          <a className="text-accent underline" href={`mailto:${b.email}`}>
            {b.email}
          </a>{" "}
          or {b.phoneDisplay}.
        </p>
      </Container>
    </main>
  );
}
