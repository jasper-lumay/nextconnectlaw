import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { demoNonprofitPracticeArea } from "@/content/demo-nonprofit-practice-area";

/**
 * Proposed practice area, not a confirmed firm service — see
 * content/demo-nonprofit-practice-area.ts. Deliberately excluded from
 * app/sitemap.ts and marked noindex below so it doesn't surface in search
 * while still being reachable from the public /practice-areas page for
 * client review.
 */
export const metadata: Metadata = {
  title: "Nonprofit Organizations (Proposed)",
  description: demoNonprofitPracticeArea.summary,
  robots: { index: false, follow: true },
};

export default function NonprofitOrganizationsDemoPage() {
  const area = demoNonprofitPracticeArea;

  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading eyebrow="Proposed Practice Area" title={area.title} lede={area.summary} />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <Badge notice>Proposed — pending client approval, not a confirmed NextConnect Law service</Badge>
          <div className="grid grid--3 u-mt-md">
            {area.services.map((service) => (
              <div key={service} className="card">
                <h3 className="card__title">{service}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--tight">
        <Container>
          <Button href="/practice-areas" variant="secondary">
            Back to Practice Areas
          </Button>
        </Container>
      </section>
    </>
  );
}
