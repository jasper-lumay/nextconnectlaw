import { ArticleCard } from "@/components/resources/article-card";

export type FeaturedArticleCard = {
  href: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  coverImageSrc?: string;
  coverImageAlt?: string;
  linkLabel?: string;
};

export function FeaturedArticle({
  featured,
  supporting,
}: {
  featured: FeaturedArticleCard;
  supporting: FeaturedArticleCard[];
}) {
  return (
    <div className="featured-article">
      <ArticleCard {...featured} featured />
      <div className="featured-article__supporting">
        {supporting.map((item) => (
          <ArticleCard key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
}
