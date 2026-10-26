import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryTabs } from "@/components/resources/category-tabs";
import { NewsListItem } from "@/components/resources/news-list-item";
import { CtaBand } from "@/components/sections/cta-band";
import { newsItems } from "@/content/resources/news";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Legal News & Updates",
  description: `Legal developments and topics affecting technology companies, from ${firm.name}.`,
};

export default function NewsPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Resources · News"
            title="Legal News & Updates"
            lede="Explore legal developments and topics affecting modern businesses and technology."
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
          <div className="news-list">
            {newsItems.map((item) => (
              <NewsListItem key={item.slug} item={item} />
            ))}
          </div>
          <p className="u-text-muted u-mt-md">
            Items above are sample topic summaries for demonstration, not reporting on specific
            legislation, court decisions, or events. Future items will include a source link,
            publication date, jurisdiction, and verification date once real updates are published.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
