import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { firm } from "@/content/firm";

export function CtaBand({
  title = "Ready to talk about your matter?",
  lede = "Tell us what you're working on and we'll respond with next steps and a clear scope.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="section section--tight">
      <Container>
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{lede}</p>
          </div>
          <div className="cta-band__actions">
            <Button href="/contact" variant="primary">
              {firm.consultationCta}
            </Button>
            <Button href="/practice-areas" variant="on-dark">
              Explore Practice Areas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
