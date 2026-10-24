import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { faqs } from "@/content/faqs";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Resources",
  description: `FAQs and resources from ${firm.name}.`,
};

export default function ResourcesPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title="Resources"
            lede="FAQs, articles and guides — gathered in one place instead of scattered across the site."
          />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <h2>Frequently asked questions</h2>
          <div className="stack stack--gap-md u-mt-md">
            {faqs.map((faq) => (
              <details className="card" key={faq.question}>
                <summary className="card__title">{faq.question}</summary>
                <p className="card__body u-mt-md">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--tight">
        <Container>
          <h2>Articles, guides & news</h2>
          <p className="u-mt-md u-text-muted">
            No articles or guides have been published yet. This section is ready to hold future
            legal articles, guides and firm news as the firm publishes them.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
