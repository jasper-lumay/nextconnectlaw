import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { Attorney } from "@/lib/types";

export function TeamCard({ attorney }: { attorney: Attorney }) {
  return (
    <Link href={`/team/${attorney.slug}`} aria-label={`View ${attorney.name}'s profile`}>
      <Card interactive>
        <span className="card__eyebrow">{attorney.title}</span>
        <h3 className="card__title">{attorney.name}</h3>
        <p className="card__body">{attorney.shortBio}</p>
        <span className="card__link">View full profile →</span>
      </Card>
    </Link>
  );
}
