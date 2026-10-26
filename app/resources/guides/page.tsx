import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryTabs } from "@/components/resources/category-tabs";
import { GuideCard } from "@/components/resources/guide-card";
import { CtaBand } from "@/components/sections/cta-band";
import { guides } from "@/content/resources/guides";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Practical Legal Guides",
  description: `Practical checklists and guides for common legal decisions, from ${firm.name}.`,
};

export default function GuidesPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Resources · Guides"
            title="Practical Legal Guides"
            lede="Helpful checklists and learning resources for common legal decisions."
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
          <div className="grid grid--3">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
