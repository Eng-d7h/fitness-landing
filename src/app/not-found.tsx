import { site } from "@/content/site";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold text-accent">404</p>
        <h1 className="mt-2 text-3xl font-bold text-primary">Page not found</h1>
        <p className="mt-3 text-muted">{site.copy.notFound}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href={site.cta.primary.href} variant="outline">
            {site.business.phoneDisplay}
          </Button>
        </div>
      </div>
    </main>
  );
}
