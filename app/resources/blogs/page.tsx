import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryTabs } from "@/components/resources/category-tabs";
import { ArticleCard } from "@/components/resources/article-card";
import { CtaBand } from "@/components/sections/cta-band";
import { blogArticles } from "@/content/resources/blogs";
import { getReadingTime } from "@/lib/reading-time";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Blogs",
  description: `Editorial blog articles from ${firm.name} on SaaS agreements, software IP and technology law.`,
};

export default function BlogsPage() {
  const [featured, ...rest] = blogArticles;

  return (
    <>
      <section className="section section--primary">
        <Container>
          <SectionHeading
            eyebrow="Resources · Blogs"
            title="Blogs"
            lede="Editorial perspectives on business and technology law, written to be genuinely useful before your next decision."
          />
        </Container>
      </section>

      <section className="section section--tight section--surface">
        <Container>
          <CategoryTabs />
        </Container>
      </section>

      <section className="section">
        <Container>
          <ArticleCard
            href={`/resources/blogs/${featured.slug}`}
            category={featured.category}
            title={featured.title}
            summary={featured.summary}
            readingTime={getReadingTime(featured.sections)}
            coverImageSrc={featured.coverImageSrc}
            coverImageAlt={featured.coverImageAlt}
            featured
          />

          {rest.length > 0 ? (
            <div className="grid grid--2 u-mt-md">
              {rest.map((article) => (
                <ArticleCard
                  key={article.slug}
                  href={`/resources/blogs/${article.slug}`}
                  category={article.category}
                  title={article.title}
                  summary={article.summary}
                  readingTime={getReadingTime(article.sections)}
                  coverImageSrc={article.coverImageSrc}
                  coverImageAlt={article.coverImageAlt}
                />
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
