import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { practiceAreas, getPracticeAreaBySlug } from "@/content/practice-areas";
import { team } from "@/content/team";

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

  const attorneys = team.filter((attorney) => attorney.practiceAreaSlugs.includes(area.slug));

  return (
    <>
      <section className="section section--primary">
        <Container>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/practice-areas">Practice Areas</Link>
            <span aria-hidden="true">/</span>
            <span>{area.title}</span>
          </nav>
          <SectionHeading eyebrow="Practice Area" title={area.title} lede={area.summary} />
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <div className="grid grid--2">
            <div>
              <h2>What we handle</h2>
              <ul className="stack stack--gap-md u-mt-md">
                {area.services.map((service) => (
                  <li key={service} className="card">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {attorneys.length > 0 ? (
                <div className="card">
                  <span className="card__eyebrow">Who handles this</span>
                  {attorneys.map((attorney) => (
                    <div key={attorney.slug}>
                      <h3 className="card__title">{attorney.name}</h3>
                      <p className="card__body">{attorney.shortBio}</p>
                      <Link className="card__link" href={`/team/${attorney.slug}`}>
                        View profile →
                      </Link>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Discuss a ${area.title.toLowerCase()} matter`}
        lede="Tell us what you're working on and we'll respond with next steps and a clear scope."
      />
    </>
  );
}
