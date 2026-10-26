import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "@/components/ui/icons";
import { practiceAreas } from "@/content/practice-areas";
import type { Attorney } from "@/lib/types";

export function TeamCard({ attorney }: { attorney: Attorney }) {
  const areas = practiceAreas.filter((area) => attorney.practiceAreaSlugs.includes(area.slug));

  return (
    <Link
      href={`/team/${attorney.slug}`}
      className="profile-card-btn"
      aria-label={`View ${attorney.name}'s full profile`}
    >
      <Card interactive>
        <div className="profile-card__photo">
          <Image
            src={attorney.photoSrc}
            alt={attorney.photoAlt}
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            className="spotlight__image"
          />
          {attorney.isSamplePortrait ? (
            <span className="badge profile-card__photo-badge">Sample portrait</span>
          ) : null}
        </div>
        <span className="card__eyebrow">{attorney.title}</span>
        <h3 className="card__title">{attorney.name}</h3>
        <p className="card__body">{attorney.shortBio}</p>
        {areas.length > 0 ? (
          <p className="card__body u-mt-md">
            <strong>Practice areas:</strong> {areas.map((area) => area.title).join(", ")}
          </p>
        ) : null}
        <span className="card__link">
          View Full Profile <ArrowRightIcon />
        </span>
      </Card>
    </Link>
  );
}
