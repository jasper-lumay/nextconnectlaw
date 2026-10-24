import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { DemoProfile } from "@/content/demo-team-profiles";

/**
 * Renders a fictional placeholder profile (see content/demo-team-profiles.ts).
 * Unlike TeamCard, this does not link anywhere — there is no real detail
 * page behind these slugs, and creating one would publish a fake attorney
 * profile page rather than just a labeled placeholder card.
 */
export function DemoTeamCard({ profile }: { profile: DemoProfile }) {
  return (
    <Card>
      <div className="profile-card__photo">
        <Image
          src={profile.photoSrc}
          alt={`Demo placeholder portrait for ${profile.name}`}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="spotlight__image"
        />
        <span className="badge profile-card__photo-badge">Demo profile</span>
      </div>
      <span className="card__eyebrow">{profile.title}</span>
      <h3 className="card__title">{profile.name}</h3>
      <p className="card__body">{profile.bio}</p>
      <p className="card__body u-mt-md">
        <strong>Practice areas:</strong> {profile.practiceAreas.join(", ")}
      </p>
    </Card>
  );
}
