import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { PracticeArea } from "@/lib/types";

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link href={`/practice-areas/${area.slug}`} aria-label={`Learn more about ${area.title}`}>
      <Card interactive>
        <span className="card__eyebrow">{area.iconLabel}</span>
        <h3 className="card__title">{area.title}</h3>
        <p className="card__body">{area.shortSummary}</p>
        <span className="card__link">Learn more →</span>
      </Card>
    </Link>
  );
}
