import Link from "next/link";
import { Lightbulb, Laptop, FileText, ShieldCheck, Globe, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { PracticeArea } from "@/lib/types";

const practiceAreaIcons: Record<string, typeof Lightbulb> = {
  "intellectual-property": Lightbulb,
  "technology-saas-licensing": Laptop,
  "commercial-contracts": FileText,
  "privacy-data-compliance": ShieldCheck,
  "cross-border-international": Globe,
  "immigration-law": Users,
};

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  const Icon = practiceAreaIcons[area.slug] ?? FileText;

  return (
    <Link href={`/practice-areas/${area.slug}`} aria-label={`Learn more about ${area.title}`}>
      <Card interactive>
        <div className="card__icon-row">
          <span className="card__icon" aria-hidden="true">
            <Icon />
          </span>
          <h3 className="card__title">{area.title}</h3>
        </div>
        <p className="card__body">{area.shortSummary}</p>
        <span className="card__link">
          Learn more <ArrowRightIcon />
        </span>
      </Card>
    </Link>
  );
}
