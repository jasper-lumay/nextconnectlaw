import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/resources/article-layout";
import { guides, getGuideBySlug } from "@/content/resources/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.summary,
  };
}

export default async function GuideDetailPage({ params }: PageProps<"/resources/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const related = guides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 2)
    .map((item) => ({
      href: `/resources/guides/${item.slug}`,
      category: item.category,
      title: item.title,
    }));

  return (
    <ArticleLayout
      category={guide.category}
      title={guide.title}
      dek={guide.benefit}
      readingTime={`${guide.stepCount} steps`}
      byline="NextConnect Law | Educational Resource"
      sections={guide.sections}
      related={related}
    />
  );
}
