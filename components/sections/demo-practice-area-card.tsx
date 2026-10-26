import Link from "next/link";
import { Landmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "@/components/ui/icons";
import { demoNonprofitPracticeArea } from "@/content/demo-nonprofit-practice-area";

/**
 * Renders the proposed Nonprofit Organizations practice area. Unlike
 * PracticeAreaCategoryCard, this is intentionally not grouped with the
 * five approved categories — see app/practice-areas/page.tsx — and the
 * "Proposed" badge stays visible wherever this card appears.
 */
export function DemoPracticeAreaCard() {
  const area = demoNonprofitPracticeArea;

  return (
    <Link href={`/practice-areas/${area.slug}`} aria-label={`View proposed services for ${area.title}`}>
      <Card interactive>
        <div className="card__icon-row">
          <span className="card__icon" aria-hidden="true">
            <Landmark />
          </span>
          <h3 className="card__title">{area.title}</h3>
        </div>
        <p>
          <Badge notice>Proposed — pending client approval</Badge>
        </p>
        <p className="card__body u-mt-md">{area.shortSummary}</p>
        <ul className="team-fact__list u-mt-md">
          {area.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <span className="card__link">
          View Services <ArrowRightIcon />
        </span>
      </Card>
    </Link>
  );
}
