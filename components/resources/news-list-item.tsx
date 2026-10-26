import { Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { NewsItem } from "@/lib/types";

export function NewsListItem({ item }: { item: NewsItem }) {
  return (
    <div className="news-item">
      <span className="news-item__icon" aria-hidden="true">
        <Megaphone size={18} />
      </span>
      <div className="news-item__body">
        <div className="news-item__heading-row">
          <h3 className="news-item__title">{item.title}</h3>
          {item.isDemoContent ? <Badge notice>Sample legal update — demo content</Badge> : null}
        </div>
        <p className="news-item__summary">{item.summary}</p>
        {item.jurisdiction || item.publicationDate ? (
          <p className="news-item__meta">
            {item.jurisdiction ? <span>{item.jurisdiction}</span> : null}
            {item.publicationDate ? <span>{item.publicationDate}</span> : null}
          </p>
        ) : null}
      </div>
    </div>
  );
}
