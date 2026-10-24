import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/forms/contact-form";
import { firm } from "@/content/firm";
import { locations } from "@/content/locations";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${firm.name} to discuss your matter.`,
};

export default function ContactPage() {
  const primaryLocation = locations[0];

  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Contact Us"
            title="Talk to us about your matter"
            lede="Tell us what you are working on and we will respond with next steps and a clear scope. Initial inquiries are confidential, but sending a message does not create an attorney-client relationship."
          />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <div className="grid grid--2">
            <div className="card">
              <ContactForm />
            </div>

            <div className="stack stack--gap-md">
              <div className="card">
                <span className="card__eyebrow">Phone</span>
                <p className="card__title">
                  <a href={firm.phoneHref}>{firm.phone}</a>
                </p>
              </div>

              <div className="card">
                <span className="card__eyebrow">Email</span>
                <p className="card__title">
                  {firm.email ?? <Badge notice>{firm.emailPlaceholder}</Badge>}
                </p>
              </div>

              <div className="card">
                <span className="card__eyebrow">Office</span>
                <p className="card__title">
                  {primaryLocation.city}, {primaryLocation.state}
                </p>
                <p className="card__body">
                  {primaryLocation.streetAddress ?? (
                    <Badge notice>Address pending confirmation — by appointment</Badge>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
