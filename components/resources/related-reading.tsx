import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

export type RelatedReadingItem = {
  href: string;
  category: string;
  title: string;
};

export function RelatedReading({ items }: { items: RelatedReadingItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="related-reading">
      <span className="related-reading__heading">Related Reading</span>
      <div className="related-reading__grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="related-reading__item">
            <span className="related-reading__category">{item.category}</span>
            <span className="related-reading__title">{item.title}</span>
            <span className="card__link">
              Read more <ArrowRightIcon />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
