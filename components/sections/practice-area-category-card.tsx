import Link from "next/link";
import { Briefcase, Users, Lightbulb, ShieldCheck, Globe, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { PracticeAreaCategory } from "@/content/practice-area-categories";

const categoryIcons: Record<PracticeAreaCategory["iconKey"], LucideIcon> = {
  business: Briefcase,
  immigration: Users,
  "intellectual-property": Lightbulb,
  privacy: ShieldCheck,
  "cross-border": Globe,
};

export function PracticeAreaCategoryCard({ category }: { category: PracticeAreaCategory }) {
  const Icon = categoryIcons[category.iconKey];

  return (
    <Link href={category.href} aria-label={`View services for ${category.title}`}>
      <Card interactive>
        <div className="card__icon-row">
          <span className="card__icon" aria-hidden="true">
            <Icon />
          </span>
          <h3 className="card__title">{category.title}</h3>
        </div>
        <p className="card__body">{category.description}</p>
        <ul className="team-fact__list u-mt-md">
          {category.services.map((service) => (
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
