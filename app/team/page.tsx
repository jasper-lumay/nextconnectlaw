import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/sections/team-card";
import { CtaBand } from "@/components/sections/cta-band";
import { team } from "@/content/team";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the attorney behind ${firm.name}.`,
};

export default function TeamPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="Work directly with the attorney on your matter"
            lede="Every engagement is handled by the principal attorney, from the first call through closing."
          />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <div className="grid grid--3">
            {team.map((attorney) => (
              <TeamCard key={attorney.slug} attorney={attorney} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
