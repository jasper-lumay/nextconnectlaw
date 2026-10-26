import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedReading, type RelatedReadingItem } from "@/components/resources/related-reading";
import type { ArticleSection } from "@/lib/types";

export function ArticleLayout({
  category,
  title,
  dek,
  readingTime,
  byline,
  sections,
  keyTakeaways,
  related,
}: {
  category: string;
  title: string;
  dek: string;
  readingTime: string;
  byline: string;
  sections: ArticleSection[];
  keyTakeaways?: string[];
  related: RelatedReadingItem[];
}) {
  return (
    <>
      <section className="section section--surface article-layout__top">
        <Container>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/resources">Resources</Link>
            <span aria-hidden="true">/</span>
            <span>{title}</span>
          </nav>

          <div className="article-layout__header">
            <span className="article-layout__category">{category}</span>
            <h1 className="article-layout__title">{title}</h1>
            <p className="article-layout__dek">{dek}</p>
            <div className="article-layout__meta">
              <span>{readingTime}</span>
              <span aria-hidden="true">·</span>
              <span className="article-layout__byline">{byline}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <article className="article-layout__body">
            {sections.map((section) => (
              <div className="article-layout__section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="article-layout__list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {keyTakeaways && keyTakeaways.length > 0 ? (
              <div className="article-layout__takeaways">
                <h2>Key Takeaways</h2>
                <ul className="article-layout__list">
                  {keyTakeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <p className="article-layout__disclaimer">
              General information only, not legal advice. This article does not create an
              attorney-client relationship and should not be relied on as a substitute for advice
              from qualified counsel about your specific situation.
            </p>
          </article>
        </Container>
      </section>

      <section className="section section--surface">
        <Container>
          <RelatedReading items={related} />
          <div className="article-layout__back">
            <Button href="/resources" variant="secondary">
              Back to Resources
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need Guidance on a Legal Matter?"
        lede="Connect with NextConnect Law to discuss your legal needs."
        secondaryLabel="Explore Practice Areas"
        secondaryHref="/practice-areas"
      />
    </>
  );
}
