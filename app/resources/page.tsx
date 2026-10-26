import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedArticle } from "@/components/resources/featured-article";
import { ArticleCard } from "@/components/resources/article-card";
import { EditorialListItem } from "@/components/resources/editorial-list-item";
import { GuideCard } from "@/components/resources/guide-card";
import { NewsListItem } from "@/components/resources/news-list-item";
import { CategoryTabs } from "@/components/resources/category-tabs";
import { FAQAccordion } from "@/components/resources/faq-accordion";
import { VideoComingSoon } from "@/components/resources/video-coming-soon";
import { blogArticles } from "@/content/resources/blogs";
import { legalArticles } from "@/content/resources/legal-articles";
import { newsItems } from "@/content/resources/news";
import { guides } from "@/content/resources/guides";
import { faqs } from "@/content/faqs";
import { getReadingTime } from "@/lib/reading-time";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Resources",
  description: `Legal insights, articles, guides and FAQs from ${firm.name} on technology, IP, contracts and immigration law.`,
};

export default function ResourcesPage() {
  const [saasAgreement, protectingIp] = blogArticles;
  const contractChecklistGuide = guides.find(
    (guide) => guide.slug === "business-contract-review-checklist",
  )!;

  return (
    <>
      {/* SECTION A — Hero */}
      <section className="section section--primary resources-hero">
        <Container>
          <span className="resources-hero__eyebrow">NextConnect Law · Knowledge Center</span>
          <h1 className="resources-hero__title">Legal Insights &amp; Resources</h1>
          <p className="resources-hero__lede">
            Explore practical perspectives on business law, technology transactions, intellectual
            property, immigration, and evolving legal issues.
          </p>
        </Container>
      </section>

      {/* SECTION B — Featured Insights */}
      <section className="section section--surface">
        <Container>
          <SectionHeading eyebrow="Featured" title="Featured Insights" />
          <FeaturedArticle
            featured={{
              href: `/resources/blogs/${saasAgreement.slug}`,
              category: saasAgreement.category,
              title: saasAgreement.title,
              summary: saasAgreement.summary,
              readingTime: getReadingTime(saasAgreement.sections),
              coverImageSrc: saasAgreement.coverImageSrc,
              coverImageAlt: saasAgreement.coverImageAlt,
            }}
            supporting={[
              {
                href: `/resources/blogs/${protectingIp.slug}`,
                category: protectingIp.category,
                title: protectingIp.title,
                summary: protectingIp.summary,
                readingTime: getReadingTime(protectingIp.sections),
                coverImageSrc: protectingIp.coverImageSrc,
                coverImageAlt: protectingIp.coverImageAlt,
              },
              {
                href: `/resources/guides/${contractChecklistGuide.slug}`,
                category: "Guide",
                title: contractChecklistGuide.title,
                summary: contractChecklistGuide.summary,
                readingTime: `${contractChecklistGuide.stepCount} steps`,
                linkLabel: "Explore Guide",
              },
            ]}
          />
        </Container>
      </section>

      {/* SECTION C — Browse by Category */}
      <section className="section section--tight section--surface">
        <Container>
          <CategoryTabs />
        </Container>
      </section>

      {/* SECTION D — Latest Blogs */}
      <section className="section" id="blogs">
        <Container>
          <SectionHeading eyebrow="Blogs" title="Latest Blogs" lede="Editorial perspectives, explained plainly." />
          <div className="grid grid--2">
            {blogArticles.map((article) => (
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
          <div className="u-mt-md">
            <Button href="/resources/blogs" variant="secondary">
              View All Blogs
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION E — Legal Articles */}
      <section className="section section--surface" id="legal-articles">
        <Container>
          <SectionHeading
            eyebrow="Legal Articles"
            title="Legal Articles"
            lede="Structured, reference-oriented explainers."
          />
          <div className="editorial-list">
            {legalArticles.map((article) => (
              <EditorialListItem
                key={article.slug}
                href={`/resources/legal-articles/${article.slug}`}
                title={article.title}
                summary={article.summary}
                readingTime={getReadingTime(article.sections)}
              />
            ))}
          </div>
          <div className="u-mt-md">
            <Button href="/resources/legal-articles" variant="secondary">
              Explore Legal Articles
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION F — Legal News & Updates */}
      <section className="section" id="news">
        <Container>
          <SectionHeading
            eyebrow="News"
            title="Legal News & Updates"
            lede="Explore legal developments and topics affecting modern businesses and technology."
          />
          <div className="news-list">
            {newsItems.map((item) => (
              <NewsListItem key={item.slug} item={item} />
            ))}
          </div>
          <div className="u-mt-md">
            <Button href="/resources/news" variant="secondary">
              View Legal Updates
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION G — Practical Legal Guides */}
      <section className="section" id="guides">
        <Container>
          <SectionHeading
            eyebrow="Guides"
            title="Practical Legal Guides"
            lede="Helpful checklists and learning resources for common legal decisions."
          />
          <div className="grid grid--3">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION H — FAQs */}
      <section className="section section--surface" id="faqs">
        <Container>
          <div className="faq-section">
            <SectionHeading
              center
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              lede="Quick answers before you pick up the phone."
            />
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* SECTION I — Videos */}
      <section className="section" id="videos">
        <Container>
          <VideoComingSoon />
        </Container>
      </section>

      {/* SECTION J — Final CTA */}
      <CtaBand
        title="Need Guidance on a Legal Matter?"
        lede="Connect with NextConnect Law to discuss your legal needs."
        secondaryLabel="Explore Practice Areas"
        secondaryHref="/practice-areas"
      />
    </>
  );
}
