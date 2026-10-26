import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryTabs } from "@/components/resources/category-tabs";
import { EditorialListItem } from "@/components/resources/editorial-list-item";
import { CtaBand } from "@/components/sections/cta-band";
import { legalArticles } from "@/content/resources/legal-articles";
import { getReadingTime } from "@/lib/reading-time";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Legal Articles",
  description: `Structured, reference-oriented legal explainers from ${firm.name}.`,
};

export default function LegalArticlesPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Resources · Legal Articles"
            title="Legal Articles"
            lede="Structured, reference-style explainers on recurring legal topics — built for quick lookup, not leisure reading."
          />
        </Container>
      </section>

      <section className="section section--tight section--surface">
        <Container>
          <CategoryTabs />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="editorial-list editorial-list--wide">
            {legalArticles.map((article) => (
              <EditorialListItem
                key={article.slug}
                href={`/resources/legal-articles/${article.slug}`}
                title={article.title}
                summary={article.summary}
                readingTime={getReadingTime(article.sections)}
              />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
