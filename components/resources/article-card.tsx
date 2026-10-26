import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";

export function ArticleCard({
  href,
  category,
  title,
  summary,
  readingTime,
  coverImageSrc,
  coverImageAlt,
  linkLabel = "Read Article",
  featured,
}: {
  href: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  coverImageSrc?: string;
  coverImageAlt?: string;
  linkLabel?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`article-card${featured ? " article-card--featured" : ""}`}
      aria-label={`${linkLabel}: ${title}`}
    >
      {coverImageSrc ? (
        <span className="article-card__cover">
          <Image
            src={coverImageSrc}
            alt={coverImageAlt ?? ""}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 400px"}
            className="article-card__image"
          />
        </span>
      ) : null}
      <span className="article-card__body">
        <span className="article-card__category">{category}</span>
        <span className="article-card__title">{title}</span>
        <span className="article-card__summary">{summary}</span>
        <span className="article-card__meta">
          <span>{readingTime}</span>
          <span className="article-card__link">
            {linkLabel} <ArrowRightIcon />
          </span>
        </span>
      </span>
    </Link>
  );
}
