import type { Metadata } from "next";
import { Target, Users as UsersOutline, Link2, MessageCircle } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PracticeAreaCard } from "@/components/sections/practice-area-card";
import { TeamLocationsSpotlight } from "@/components/sections/team-locations-spotlight";
import { CtaBand } from "@/components/sections/cta-band";
import { Button } from "@/components/ui/button";
import {
  LightbulbIcon,
  DocumentIcon,
  MonitorIcon,
  UsersIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { firm } from "@/content/firm";
import { practiceAreas } from "@/content/practice-areas";
import { team } from "@/content/team";
import { locations } from "@/content/locations";

const heroHighlights = [
  { icon: <LightbulbIcon />, label: "Intellectual Property" },
  { icon: <DocumentIcon />, label: "Transactions" },
  { icon: <MonitorIcon />, label: "Software Licensing" },
  { icon: <UsersIcon />, label: "Immigration" },
];

export const metadata: Metadata = {
  title: "Technology, Deals and Disputes Counsel in Atlanta",
  description: firm.shortDescription,
};

const approach = [
  {
    icon: <Target />,
    title: "Business first",
    body: "We start with your goals and give clear, practical options.",
  },
  {
    icon: <UsersOutline />,
    title: "In-house perspective",
    body: "We understand deadlines, approvals and commercial realities.",
  },
  {
    icon: <Link2 />,
    title: "Connected advice",
    body: "We see contracts, IP, and related legal issues together.",
  },
  {
    icon: <MessageCircle />,
    title: "Plain language",
    body: "Clear guidance your team can use and your customers can understand.",
  },
];

export default function HomePage() {
  const primaryLocation = locations[0];
  const principalAttorney =
    team.find((attorney) => attorney.slug === firm.principalAttorneySlug) ?? team[0];

  return (
    <>
      <Hero
        eyebrow="Business | Technology | Legal Counsel"
        titlePrefix="Strategic Legal Counsel for Technology,"
        titleHighlight="Transactions & Disputes"
        lede="NextConnect Law advises technology and services companies on intellectual property, commercial transactions, M&A, software licensing, immigration, and arbitration."
        actions={
          <>
            <Button href="/contact" variant="primary">
              {firm.consultationCta} <ArrowRightIcon />
            </Button>
            <Button href="/practice-areas" variant="on-dark">
              Explore Practice Areas
            </Button>
          </>
        }
        highlights={heroHighlights}
      />

      <AboutPreview
        eyebrow={`About ${firm.name}`}
        title="Business-Focused Legal Counsel"
        body={`${firm.name} is a boutique legal practice focused on helping technology and services companies navigate intellectual property, commercial transactions, M&A, software licensing, immigration, and complex business decisions.`}
        ctaHref="/about"
        ctaLabel="Learn More About Us"
        badgeText="Trusted legal partner for innovative businesses."
        imageSrc="/home-page-hero/golden-hour-boardroom-skyline.png"
        imageAlt="Law office boardroom overlooking the Atlanta skyline at golden hour"
      />

      <section className="section section--surface">
        <Container>
          <SectionHeading
            eyebrow="Practice Areas"
            title="Legal Services for Business, Technology & Growth"
            lede="Focused legal counsel across the areas that matter most to technology and services companies."
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
            title="A business-first approach to legal matters"
            lede="Most legal problems are cheaper to solve at the drafting stage. We work that way across every practice area."
          />
          <div className="grid grid--4 approach-grid">
            {approach.map((item) => (
              <div key={item.title} className="approach-item">
                <span className="approach-item__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="approach-item__title">{item.title}</h3>
                <p className="approach-item__body">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {principalAttorney && primaryLocation ? (
        <TeamLocationsSpotlight
          attorney={principalAttorney}
          attorneyPhotoSrc="/home-page-hero/sumant-khan.avif"
          location={primaryLocation}
          locationPhotoSrc="/home-page-hero/golden-hour-boardroom-skyline.png"
        />
      ) : null}

      <CtaBand
        title={`Discuss Your Legal Matter with ${firm.name}`}
        lede="Tell us briefly what you need assistance with, and we will be in touch about next steps."
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
