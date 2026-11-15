import { localBusinessSchema } from "@/lib/schema";
import {
  DemoRibbon,
  Faq,
  FinalCta,
  Footer,
  Header,
  Hero,
  MobileCallBar,
  Process,
  Reviews,
  Services,
  WhyUs,
} from "@/components/sections";

/**
 * Section order (v1.2 layout — 7 sections, deliberately uncluttered).
 * Each trust claim appears ONCE. One form only (in the hero).
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()).replace(/</g, "\\u003c") }}
      />
      <DemoRibbon />
      <Header />
      <main id="main">
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
