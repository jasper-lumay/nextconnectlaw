import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { getPracticeAreaBySlug } from "@/content/practice-areas";
import { firm } from "@/content/firm";

/**
 * "Business & Corporate" is a visitor-facing grouping of two existing,
 * individually-approved practice areas (Commercial Contracts and
 * Technology & SaaS Licensing). Their own slugs/URLs and full content
 * stay intact in content/practice-areas.ts and at
 * /practice-areas/commercial-contracts and
 * /practice-areas/technology-saas-licensing — this page renders both
 * areas' complete, unmodified service lists side by side.
 */
const commercialContracts = getPracticeAreaBySlug("commercial-contracts")!;
const technologySaasLicensing = getPracticeAreaBySlug("technology-saas-licensing")!;

export const metadata: Metadata = {
  title: "Business & Corporate",
  description: `${commercialContracts.summary} ${technologySaasLicensing.summary}`,
};

export default function BusinessCorporatePage() {
  const areas = [commercialContracts, technologySaasLicensing];

  return (
    <>
      <Hero
        className="hero--inner"
        area="commercial-contracts"
        eyebrow="Practice Area"
        titlePrefix="Business & Corporate"
        lede="Commercial contracts and technology licensing counsel for the agreements that run your business."
        actions={
          <>
            <Button href="/contact" variant="primary">
              {firm.consultationCta}
            </Button>
            <Button href={firm.phoneHref} variant="on-dark">
              Call {firm.phone}
            </Button>
          </>
        }
      />

      {areas.map((area, index) => (
        <section className={`section ${index % 2 === 0 ? "section--surface" : ""}`} key={area.slug}>
          <Container>
            <SectionHeading
              eyebrow={area.title}
              title="Approved services"
              lede={area.summary}
            />
            <div className="grid grid--3">
              {area.serviceDetails.map((service) => (
                <div key={service.title} className="card">
                  <h3 className="card__title">{service.title}</h3>
                  <p className="card__body">{service.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CtaBand
        title="Discuss a business or corporate matter"
        lede="Tell us what you're working on and we'll respond with next steps and a clear scope."
      />
    </>
  );
}
