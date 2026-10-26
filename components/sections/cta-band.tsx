import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { firm } from "@/content/firm";

export function CtaBand({
  eyebrow,
  title = "Ready to talk about your matter?",
  lede = "Tell us what you're working on and we'll respond with next steps and a clear scope.",
  secondaryLabel = "Explore Practice Areas",
  secondaryHref = "/practice-areas",
  hideSecondary = false,
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  hideSecondary?: boolean;
}) {
  return (
    <section className="section section--tight">
      <Container>
        <div className="cta-band">
          <div>
            {eyebrow ? <span className="cta-band__eyebrow">{eyebrow}</span> : null}
            <h2>{title}</h2>
            <p>{lede}</p>
          </div>
          <div className="cta-band__actions">
            <Button href="/contact" variant="primary">
              {firm.consultationCta}
            </Button>
            {hideSecondary ? null : (
              <Button href={secondaryHref} variant="on-dark">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
