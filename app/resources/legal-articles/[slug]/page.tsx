import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/resources/article-layout";
import { legalArticles, getLegalArticleBySlug } from "@/content/resources/legal-articles";
import { blogArticles } from "@/content/resources/blogs";
import { getReadingTime } from "@/lib/reading-time";

export function generateStaticParams() {
  return legalArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/legal-articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getLegalArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function LegalArticlePage({
  params,
}: PageProps<"/resources/legal-articles/[slug]">) {
  const { slug } = await params;
  const article = getLegalArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticle = legalArticles.find((item) => item.slug !== article.slug);
  const related = [
    ...(otherArticle
      ? [
          {
            href: `/resources/legal-articles/${otherArticle.slug}`,
            category: otherArticle.category,
            title: otherArticle.title,
          },
        ]
      : []),
    ...blogArticles.slice(0, 1).map((item) => ({
      href: `/resources/blogs/${item.slug}`,
      category: item.category,
      title: item.title,
    })),
  ];

  return (
    <ArticleLayout
      category={article.category}
      title={article.title}
      dek={article.dek}
      readingTime={getReadingTime(article.sections)}
      byline={article.byline}
      sections={article.sections}
      keyTakeaways={article.keyTakeaways}
      related={related}
    />
  );
}
