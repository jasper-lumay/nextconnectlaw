import Link from "next/link";
import { DocumentIcon, ArrowRightIcon } from "@/components/ui/icons";
import type { Guide } from "@/lib/types";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/resources/guides/${guide.slug}`} className="guide-card" aria-label={`View Guide: ${guide.title}`}>
      <span className="guide-card__icon" aria-hidden="true">
        <DocumentIcon />
      </span>
      <span className="guide-card__title">{guide.title}</span>
      <span className="guide-card__benefit">{guide.benefit}</span>
      <span className="guide-card__steps">{guide.stepCount} steps</span>
      <span className="guide-card__link">
        View Guide <ArrowRightIcon />
      </span>
    </Link>
  );
}
