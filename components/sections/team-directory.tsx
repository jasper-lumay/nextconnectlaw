import { TeamCard } from "@/components/sections/team-card";
import { DemoTeamCard } from "@/components/sections/demo-team-card";
import type { DemoProfile } from "@/content/demo-team-profiles";
import type { Attorney } from "@/lib/types";

export function TeamDirectory({
  attorneys,
  demoProfiles,
}: {
  attorneys: Attorney[];
  demoProfiles: DemoProfile[];
}) {
  return (
    <div className="grid grid--3">
      {attorneys.map((attorney) => (
        <TeamCard key={attorney.slug} attorney={attorney} />
      ))}
      {demoProfiles.map((profile) => (
        <DemoTeamCard key={profile.slug} profile={profile} />
      ))}
    </div>
  );
}
