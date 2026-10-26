import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

export function EditorialListItem({
  href,
  title,
  summary,
  readingTime,
}: {
  href: string;
  title: string;
  summary: string;
  readingTime: string;
}) {
  return (
    <Link href={href} className="editorial-list-item" aria-label={`Read Article: ${title}`}>
      <span className="editorial-list-item__text">
        <span className="editorial-list-item__title">{title}</span>
        <span className="editorial-list-item__summary">{summary}</span>
      </span>
      <span className="editorial-list-item__meta">
        <span className="editorial-list-item__time">{readingTime}</span>
        <span className="editorial-list-item__link">
          Read Article <ArrowRightIcon />
        </span>
      </span>
    </Link>
  );
}
