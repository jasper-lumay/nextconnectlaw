import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { TeamDirectory } from "@/components/sections/team-directory";
import { CtaBand } from "@/components/sections/cta-band";
import { team } from "@/content/team";
import { demoTeamProfiles } from "@/content/demo-team-profiles";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the team behind ${firm.name}.`,
};

export default function TeamPage() {
  return (
    <>
      <Hero
        className="hero--inner"
        area="team"
        eyebrow="Our Team"
        titlePrefix="Our Team"
        lede="Meet the people behind NextConnect Law, a boutique practice focused on technology and business law for technology and services companies."
        breadcrumb={
          <nav className="breadcrumb breadcrumb--on-dark" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Our Team</span>
          </nav>
        }
        actions={
          <Button href="/contact" variant="primary">
            {firm.consultationCta}
          </Button>
        }
      />

      <section className="section section--surface">
        <Container>
          <SectionHeading
            eyebrow="Team Profiles"
            title="Work directly with people who know your matter"
            lede="Every engagement is handled by people you can reach directly, not a rotating team of associates."
          />
          <TeamDirectory attorneys={team} demoProfiles={demoTeamProfiles} />
          <p className="u-text-muted u-mt-md">
            Profiles marked &ldquo;Demo Profile&rdquo; are placeholder content pending confirmed
            hires and are not current NextConnect Law staff.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
