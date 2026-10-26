import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Map as MapIcon,
  Globe,
  Users,
  Lightbulb,
  Laptop,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { TeamCard } from "@/components/sections/team-card";
import { DemoTeamCard } from "@/components/sections/demo-team-card";
import { locations, getGoogleMapsUrl } from "@/content/locations";
import { firm } from "@/content/firm";
import { team } from "@/content/team";
import { demoTeamProfiles } from "@/content/demo-team-profiles";
import { practiceAreas } from "@/content/practice-areas";

export const metadata: Metadata = {
  title: "Locations",
  description: `${firm.name} office location in Atlanta, Georgia, and the areas we serve.`,
};

const serviceIcons: Record<string, typeof Lightbulb> = {
  "intellectual-property": Lightbulb,
  "technology-saas-licensing": Laptop,
  "commercial-contracts": FileText,
  "privacy-data-compliance": ShieldCheck,
  "cross-border-international": Globe,
  "immigration-law": Users,
};

export default function LocationsPage() {
  const location = locations[0];
  const mapsUrl = getGoogleMapsUrl(location, firm.name);

  return (
    <>
      <Hero
        className="hero--inner"
        area="locations"
        eyebrow="Our Locations"
        titlePrefix={`Find Us in ${location.city}`}
        lede={`Our ${location.city} office serves clients locally, nationally, and internationally with practical, business-focused legal solutions.`}
        actions={
          <Button href="/contact" variant="primary">
            {firm.consultationCta}
          </Button>
        }
      />

      {/* Office info + map */}
      <section className="section section--surface">
        <Container>
          <div className="location-info-grid">
            <Card>
              <h2 className="location-info-card__title">
                {location.city}, {location.state}
              </h2>
              <p className="location-info-card__intro">
                Our main office is located in {location.city}, {location.state}. We welcome
                clients to visit our office or connect with us by phone or email.
              </p>

              <div className="location-info-list">
                <div className="location-info-row">
                  <span className="location-info-row__icon" aria-hidden="true">
                    <MapPin />
                  </span>
                  <div>
                    <span className="location-info-row__label">Office Address</span>
                    <span className="location-info-row__value">
                      {location.city}, {location.state}
                      <br />
                      {location.streetAddress ?? "Full address to be confirmed"}
                    </span>
                  </div>
                </div>

                <div className="location-info-row">
                  <span className="location-info-row__icon" aria-hidden="true">
                    <Phone />
                  </span>
                  <div>
                    <span className="location-info-row__label">Phone</span>
                    <span className="location-info-row__value">
                      {location.phone ? (
                        <a href={firm.phoneHref}>{location.phone}</a>
                      ) : (
                        "To be confirmed"
                      )}
                    </span>
                  </div>
                </div>

                <div className="location-info-row">
                  <span className="location-info-row__icon" aria-hidden="true">
                    <Mail />
                  </span>
                  <div>
                    <span className="location-info-row__label">Email</span>
                    <span className="location-info-row__value">
                      {firm.email ? <a href={`mailto:${firm.email}`}>{firm.email}</a> : "To be confirmed"}
                    </span>
                  </div>
                </div>

                <div className="location-info-row">
                  <span className="location-info-row__icon" aria-hidden="true">
                    <Clock />
                  </span>
                  <div>
                    <span className="location-info-row__label">Office Hours</span>
                    <span className="location-info-row__value">
                      {location.hours
                        ? location.hours.map((entry) => `${entry.day}: ${entry.hours}`).join(" · ")
                        : "To be confirmed"}
                    </span>
                  </div>
                </div>
              </div>

              <Button href="/contact" variant="primary">
                {firm.consultationCta}
              </Button>
            </Card>

            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-map"
              aria-label={`Open ${location.city}, ${location.state} in Google Maps`}
            >
              <Image
                src="/practice area/Atlanta Regional Overview Map.png"
                alt={`Map showing the ${location.city} regional area`}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="location-map__image"
              />
              <span className="location-map__pin">
                <span className="location-map__pin-icon" aria-hidden="true">
                  <MapPin />
                </span>
                <span>
                  <span className="location-map__pin-title">
                    {location.city}, {location.state}
                  </span>
                  <span className="location-map__pin-meta">Regional Overview — opens Google Maps</span>
                </span>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Service area */}
      <section className="section">
        <Container>
          <div className="service-area-banner">
            <div>
              <h2 className="service-area-banner__title">Where We Serve Clients</h2>
              <p className="service-area-banner__desc">
                Based in {location.city}, {location.state}, we serve clients across the United
                States and internationally, providing trusted legal counsel for businesses,
                organizations, and individuals.
              </p>
            </div>
            <div className="service-area-stats">
              <div className="service-area-stat">
                <span className="service-area-stat__icon" aria-hidden="true">
                  <MapIcon />
                </span>
                <span className="service-area-stat__label">Across the United States</span>
              </div>
              <div className="service-area-stat">
                <span className="service-area-stat__icon" aria-hidden="true">
                  <Globe />
                </span>
                <span className="service-area-stat__label">International Clients</span>
              </div>
              <div className="service-area-stat">
                <span className="service-area-stat__icon" aria-hidden="true">
                  <Users />
                </span>
                <span className="service-area-stat__label">Businesses &amp; Individuals</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Legal services at this location */}
      <section className="section section--surface">
        <Container>
          <h2>Legal Services Available at Our {location.city} Office</h2>
          <p className="u-text-muted u-mt-md">
            Our {location.city} office provides a full range of legal services to support
            businesses, organizations, and individuals.
          </p>
          <div className="grid grid--3 u-mt-md">
            {practiceAreas.map((area) => {
              const Icon = serviceIcons[area.slug] ?? FileText;
              return (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="location-service-card"
                  aria-label={`Learn more about ${area.title}`}
                >
                  <div className="location-service-card__row">
                    <span className="location-service-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <ChevronRight className="location-service-card__chevron" aria-hidden="true" />
                  </div>
                  <span className="location-service-card__title">{area.title}</span>
                  <span className="location-service-card__desc">{area.shortSummary}</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Attorneys at this location */}
      <section className="section">
        <Container>
          <h2>Attorneys at This Location</h2>
          <p className="u-text-muted u-mt-md">
            Meet the attorneys and team members based in {location.city}, helping clients with
            their most important legal matters.
          </p>
          <div className="grid grid--3 u-mt-md">
            {team.map((attorney) => (
              <TeamCard key={attorney.slug} attorney={attorney} />
            ))}
            {demoTeamProfiles.slice(0, Math.max(0, 3 - team.length)).map((profile) => (
              <DemoTeamCard key={profile.slug} profile={profile} />
            ))}
          </div>
          <div className="u-mt-md">
            <Button href="/team" variant="secondary">
              View Full Team
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Ready to Get Started?"
        title="Let's Discuss Your Legal Needs"
        lede={`Connect with the ${firm.name} team to discuss your matter and explore how we can help.`}
        hideSecondary
      />
    </>
  );
}
