import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/sections/cta-band";
import { locations } from "@/content/locations";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Locations",
  description: `${firm.name} office locations and the areas we serve.`,
};

export default function LocationsPage() {
  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Locations"
            title="Where we work"
            lede="Office locations, and the broader areas NextConnect Law serves."
          />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <div className="grid grid--2">
            {locations.map((location) => (
              <div className="card" key={location.slug}>
                <h2 className="card__title">{location.name}</h2>
                <p className="card__body">
                  {location.city}, {location.state}
                </p>

                <dl className="stack stack--gap-md u-mt-md">
                  <div>
                    <dt className="card__eyebrow">Street address</dt>
                    <dd>
                      {location.streetAddress ?? (
                        <Badge notice>Address pending confirmation — by appointment</Badge>
                      )}
                    </dd>
                  </div>

                  <div>
                    <dt className="card__eyebrow">Phone</dt>
                    <dd>
                      {location.phone ? (
                        <a href={firm.phoneHref}>{location.phone}</a>
                      ) : (
                        <Badge notice>Pending confirmation</Badge>
                      )}
                    </dd>
                  </div>

                  <div>
                    <dt className="card__eyebrow">Hours</dt>
                    <dd>
                      {location.hours ? (
                        <ul>
                          {location.hours.map((entry) => (
                            <li key={entry.day}>
                              {entry.day}: {entry.hours}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <Badge notice>Hours pending confirmation — by appointment</Badge>
                      )}
                    </dd>
                  </div>

                  {location.servesRemote ? (
                    <div>
                      <dt className="card__eyebrow">Remote engagements</dt>
                      <dd>Available for clients outside the Atlanta area.</dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
