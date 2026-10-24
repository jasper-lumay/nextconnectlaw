import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PracticeAreaCard } from "@/components/sections/practice-area-card";
import { TeamCard } from "@/components/sections/team-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import { firm } from "@/content/firm";
import { practiceAreas } from "@/content/practice-areas";
import { team } from "@/content/team";
import { locations } from "@/content/locations";

export const metadata: Metadata = {
  title: "Technology, Deals and Disputes Counsel in Atlanta",
  description: firm.shortDescription,
};

const approach = [
  {
    title: "Business first",
    body: "We start with what you are trying to achieve, then give you a clear recommendation, not a list of every possible risk.",
  },
  {
    title: "In-house perspective",
    body: "Years of in-house experience mean we understand deadlines, approvals and the pressure of closing a quarter.",
  },
  {
    title: "Connected advice",
    body: "A transaction can raise IP, licensing and visa questions at once. We see them together and plan for them before they surface.",
  },
  {
    title: "Plain language",
    body: "Agreements your team can read, your customers can sign and a tribunal can enforce.",
  },
];

export default function HomePage() {
  const primaryLocation = locations[0];

  return (
    <>
      <Hero
        eyebrow="Technology, Deals & Disputes Counsel"
        title="One counsel for the deal, the technology and the dispute."
        lede={firm.shortDescription}
        actions={
          <>
            <Button href="/contact" variant="primary">
              {firm.consultationCta}
            </Button>
            <Button href="/practice-areas" variant="on-dark">
              Explore Practice Areas
            </Button>
          </>
        }
        stats={[
          { value: "20+", label: "Years of combined law firm & in-house experience" },
          { value: "6", label: "Connected practice areas" },
          { value: "Atlanta", label: "Based in Georgia, working nationally" },
        ]}
      />

      <section className="section section--surface">
        <Container>
          <SectionHeading
            eyebrow="What We Handle"
            title="Six connected disciplines"
            lede="So the contract, the IP and the people behind the business are handled together, not as separate matters."
          />
          <div className="grid grid--3">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="A transactional lawyer's approach to every matter"
            lede="Most legal problems are cheaper to solve at the drafting stage. We work that way across every practice area."
          />
          <div className="grid grid--4">
            {approach.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="Work directly with the attorney on your matter"
            lede="Clients work with the principal attorney from the first call through closing."
          />
          <div className="grid grid--3">
            {team.map((attorney) => (
              <TeamCard key={attorney.slug} attorney={attorney} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--tight">
        <Container>
          <SectionHeading
            eyebrow="Locations"
            title="Based in Atlanta"
            lede="Serving technology and services companies in Georgia and beyond."
          />
          <div className="grid grid--3">
            {locations.map((location) => (
              <div className="card" key={location.slug}>
                <h3 className="card__title">{location.name}</h3>
                <p className="card__body">
                  {location.city}, {location.state}
                  {location.servesRemote ? " · Remote engagements available" : ""}
                </p>
                <a className="card__link" href="/locations">
                  View location details →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <SectionHeading eyebrow="Client Reviews" title="Client reviews" center />
          <p className="u-text-center u-text-muted u-max-w-prose">
            Client reviews are not yet published for this site. Check back soon, or ask us directly
            about references for similar matters.
          </p>
        </Container>
      </section>

      <CtaBand
        title={`Talk to ${primaryLocation ? primaryLocation.name : firm.name} about your matter`}
        lede="Initial inquiries are confidential, but sending a message does not create an attorney-client relationship."
      />
    </>
  );
}
