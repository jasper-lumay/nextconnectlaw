import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PracticeAreaCard } from "@/components/sections/practice-area-card";
import { CtaBand } from "@/components/sections/cta-band";
import { practiceAreas } from "@/content/practice-areas";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: `Explore ${firm.name}'s practice areas, including intellectual property, technology licensing, commercial contracts, privacy, cross-border matters and immigration.`,
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Practice Areas"
            title="Six connected disciplines"
            lede="So the contract, the IP and the people behind the business are handled together."
          />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <div className="grid grid--3">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
