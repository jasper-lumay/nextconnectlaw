import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { PracticeAreaCategoryCard } from "@/components/sections/practice-area-category-card";
import { DemoPracticeAreaCard } from "@/components/sections/demo-practice-area-card";
import { CtaBand } from "@/components/sections/cta-band";
import { practiceAreaCategories } from "@/content/practice-area-categories";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: `Explore ${firm.name}'s practice areas, including business & corporate, intellectual property, privacy & data compliance, cross-border matters and immigration.`,
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Practice Areas"
            title="Find the right team for your legal issue"
            lede="Five practice areas, organized around how clients actually come to us, so the contract, the IP and the people behind the business are handled together."
          />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <div className="grid grid--3">
            {practiceAreaCategories.map((category) => (
              <PracticeAreaCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Proposed New Practice Area"
            title="Nonprofit Organizations"
            lede="Draft content prepared for client review. Not yet a confirmed NextConnect Law service."
          />
          <Badge notice>Pending client approval</Badge>
          <div className="grid grid--3 u-mt-md">
            <DemoPracticeAreaCard />
          </div>
        </Container>
      </section>

      <CtaBand title="Need Legal Guidance?" lede="Explore your legal needs with NextConnect Law." />
    </>
  );
}
