import { site } from "@/content/site";

/** schema.org LocalBusiness JSON-LD — helps Google show the business in local results. */
export function localBusinessSchema() {
  const b = site.business;
  return {
    "@context": "https://schema.org",
    "@type": b.type,
    name: b.name,
    url: site.seo.url,
    telephone: b.phone,
    email: b.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      ...(b.address.region ? { addressRegion: b.address.region } : {}),
      postalCode: b.address.postalCode,
      addressCountry: b.address.country,
    },
    openingHours: b.openingHours,
    areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
    // Only publish rating markup when it reflects REAL reviews.
    ...(site.demo
      ? {}
      : {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: b.rating.value,
            reviewCount: b.rating.count,
          },
        }),
  };
}
