import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/resources/article-layout";
import { blogArticles, getBlogArticleBySlug } from "@/content/resources/blogs";
import { legalArticles } from "@/content/resources/legal-articles";
import { getReadingTime } from "@/lib/reading-time";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function BlogArticlePage({ params }: PageProps<"/resources/blogs/[slug]">) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherBlog = blogArticles.find((item) => item.slug !== article.slug);
  const related = [
    ...(otherBlog
      ? [{ href: `/resources/blogs/${otherBlog.slug}`, category: otherBlog.category, title: otherBlog.title }]
      : []),
    ...legalArticles.slice(0, 1).map((item) => ({
      href: `/resources/legal-articles/${item.slug}`,
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
