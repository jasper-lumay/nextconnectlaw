import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/sections/cta-band";
import { team, getAttorneyBySlug } from "@/content/team";
import { practiceAreas } from "@/content/practice-areas";

export function generateStaticParams() {
  return team.map((attorney) => ({ slug: attorney.slug }));
}

export async function generateMetadata({ params }: PageProps<"/team/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);

  if (!attorney) {
    return {};
  }

  return {
    title: attorney.name,
    description: attorney.shortBio,
  };
}

export default async function AttorneyProfilePage({ params }: PageProps<"/team/[slug]">) {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);

  if (!attorney) {
    notFound();
  }

  const attorneyPracticeAreas = practiceAreas.filter((area) =>
    attorney.practiceAreaSlugs.includes(area.slug),
  );

  return (
    <>
      <section className="section section--primary">
        <Container>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/team">Our Team</Link>
            <span aria-hidden="true">/</span>
            <span>{attorney.name}</span>
          </nav>
          <SectionHeading eyebrow={attorney.title} title={attorney.name} lede={attorney.shortBio} />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <div className="grid grid--2">
            <div className="stack stack--gap-md">
              <h2>Experience</h2>
              {attorney.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <h2 className="u-mt-md">Notable experience</h2>
              <ul className="stack stack--gap-md">
                {attorney.experienceHighlights.map((item) => (
                  <li key={item} className="card">
                    {item}
                  </li>
                ))}
              </ul>

              {attorney.publications.length > 0 ? (
                <>
                  <h2 className="u-mt-md">Publications</h2>
                  <ul className="stack stack--gap-md">
                    {attorney.publications.map((pub) => (
                      <li key={pub.title} className="card">
                        <h3 className="card__title">{pub.title}</h3>
                        <p className="card__body">{pub.description}</p>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>

            <div className="stack stack--gap-md">
              <div className="card">
                <span className="card__eyebrow">Education</span>
                <ul className="stack stack--gap-md u-mt-md">
                  {attorney.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <span className="card__eyebrow">Bar Admissions</span>
                {!attorney.verifiedBarAdmissions ? (
                  <p className="u-mt-md">
                    <Badge notice>Pending firm confirmation</Badge>
                  </p>
                ) : null}
                <ul className="stack stack--gap-md u-mt-md">
                  {attorney.barAdmissions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <span className="card__eyebrow">Languages</span>
                <p className="card__body u-mt-md">{attorney.languages.join(" · ")}</p>
              </div>

              <div className="card">
                <span className="card__eyebrow">Practice Areas</span>
                <ul className="stack stack--gap-md u-mt-md">
                  {attorneyPracticeAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={`/practice-areas/${area.slug}`}>{area.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title={`Work with ${attorney.name}`} />
    </>
  );
}
