import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ArrowRightIcon } from "@/components/ui/icons";
import { firm } from "@/content/firm";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${firm.name}, a boutique technology-focused law practice based in ${firm.city}, ${firm.state}.`,
};

export default function AboutPage() {
  const principal = team.find((attorney) => attorney.slug === firm.principalAttorneySlug);

  return (
    <>
      <Hero
        className="hero--inner"
        area="about"
        eyebrow="About Us"
        titlePrefix={`About ${firm.name}`}
        lede={firm.tagline}
        actions={
          <Button href="/contact" variant="primary">
            {firm.consultationCta}
          </Button>
        }
      />

      <section className="section section--surface">
        <Container>
          <div className="grid grid--2">
            <div className="stack stack--gap-md">
              <p>
                {firm.name} is a boutique practice focused on technology and business law for
                technology and services companies. The firm advises on intellectual property,
                commercial transactions, software licensing, privacy and data compliance,
                cross-border matters and immigration.
              </p>
              {principal
                ? principal.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                : null}
            </div>

            <div className="card">
              <span className="card__eyebrow">Our Approach</span>
              <h3 className="card__title">Business first, drafted in plain language</h3>
              <p className="card__body">
                Most legal problems are cheaper to solve at the drafting stage. We start with what
                you are trying to achieve, give a clear recommendation rather than a list of every
                possible risk, and write agreements your team can read, your customers can sign and
                a tribunal can enforce.
              </p>
              {principal ? (
                <Link className="card__link" href={`/team/${principal.slug}`}>
                  Meet {principal.name} <ArrowRightIcon />
                </Link>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
