import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { PracticeAreaCard } from "@/components/sections/practice-area-card";
import { CtaBand } from "@/components/sections/cta-band";
import { practiceAreas, getPracticeAreaBySlug } from "@/content/practice-areas";
import { firm } from "@/content/firm";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    return {};
  }

  return {
    title: area.title,
    description: area.summary,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: PageProps<"/practice-areas/[slug]">) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const relatedAreas = practiceAreas.filter((other) => other.slug !== area.slug).slice(0, 3);
  const article = /^[aeiou]/i.test(area.title) ? "an" : "a";

  return (
    <>
      <Hero
        className="hero--inner"
        area={area.slug}
        eyebrow="Practice Area"
        titlePrefix={area.title}
        lede={area.summary}
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

      <section className="section section--surface">
        <Container>
          <SectionHeading
            eyebrow="When clients call"
            title="Common situations we help with"
            lede={`Three examples of what brings clients to us for ${area.title.toLowerCase()} matters.`}
          />
          <div className="grid grid--3">
            {area.clientSituations.map((situation) => (
              <div key={situation} className="card">
                <p className="card__body">{situation}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="How we help"
            title="What we handle"
            lede={`Document-supported counsel across ${area.title.toLowerCase()}.`}
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

      <section className="section section--surface">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="How an engagement works"
            lede="A consistent, three-step process applied to every matter."
          />
          <div className="grid grid--3">
            {area.approachSteps.map((step, index) => (
              <div key={step.title} className="card">
                <span className="step-card__number" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="card__title">{step.title}</h3>
                <p className="card__body">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {relatedAreas.length > 0 ? (
        <section className="section">
          <Container>
            <SectionHeading
              eyebrow="Related Services"
              title="Other practice areas clients often need"
            />
            <div className="grid grid--3">
              {relatedAreas.map((related) => (
                <PracticeAreaCard key={related.slug} area={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBand
        title={`Discuss ${article} ${area.title.toLowerCase()} matter`}
        lede="Tell us what you're working on and we'll respond with next steps and a clear scope."
      />
    </>
  );
}
