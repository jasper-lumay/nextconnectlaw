"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Scale, Award, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/sections/team-card";
import { DemoTeamCard } from "@/components/sections/demo-team-card";
import { practiceAreas } from "@/content/practice-areas";
import type { DemoProfile } from "@/content/demo-team-profiles";
import type { Attorney } from "@/lib/types";

const MAX_FACT_ITEMS = 3;

function FactCard({
  icon,
  title,
  items,
  notice,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  notice?: boolean;
}) {
  if (items.length === 0 && !notice) return null;

  const shown = items.slice(0, MAX_FACT_ITEMS);
  const remaining = items.length - shown.length;

  return (
    <div className="card team-fact">
      <div className="card__icon-row">
        <span className="card__icon">{icon}</span>
        <h4 className="card__title">{title}</h4>
      </div>
      {notice ? (
        <p className="team-fact__notice">
          <Badge notice>Pending firm confirmation</Badge>
        </p>
      ) : null}
      {shown.length > 0 ? (
        <ul className="team-fact__list">
          {shown.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {remaining > 0 ? <p className="team-fact__more">+{remaining} more</p> : null}
    </div>
  );
}

export function TeamDirectory({
  attorneys,
  demoProfiles,
}: {
  attorneys: Attorney[];
  demoProfiles: DemoProfile[];
}) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const selectedIndex = attorneys.findIndex((attorney) => attorney.slug === selectedSlug);
  const selected = selectedIndex >= 0 ? attorneys[selectedIndex] : null;
  const selectedPracticeAreas = selected
    ? practiceAreas.filter((area) => selected.practiceAreaSlugs.includes(area.slug)).map((area) => area.title)
    : [];

  useEffect(() => {
    if (selectedSlug) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedSlug]);

  function backToTeam() {
    setSelectedSlug(null);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function step(delta: 1 | -1) {
    if (selectedIndex < 0) return;
    const next = (selectedIndex + delta + attorneys.length) % attorneys.length;
    setSelectedSlug(attorneys[next].slug);
  }

  return (
    <>
      <div className="grid grid--3" ref={gridRef}>
        {attorneys.map((attorney) => (
          <TeamCard
            key={attorney.slug}
            attorney={attorney}
            selected={attorney.slug === selectedSlug}
            onSelect={() => setSelectedSlug(attorney.slug)}
          />
        ))}
        {demoProfiles.map((profile) => (
          <DemoTeamCard key={profile.slug} profile={profile} />
        ))}
      </div>

      {selected ? (
        <div className="team-detail" ref={detailRef}>
          <div className="team-detail__nav">
            <button type="button" className="team-detail__back" onClick={backToTeam}>
              <ChevronLeft size={16} aria-hidden="true" /> Back to Our Team
            </button>

            {attorneys.length > 1 ? (
              <div className="team-detail__pager">
                <button type="button" onClick={() => step(-1)}>
                  <ChevronLeft size={16} aria-hidden="true" /> Previous Attorney
                </button>
                <button type="button" onClick={() => step(1)}>
                  Next Attorney <ChevronRight size={16} aria-hidden="true" />
                </button>
              </div>
            ) : null}
          </div>

          <div className="team-detail__header">
            <div className="team-detail__photo">
              <Image
                src={selected.photoSrc}
                alt={selected.photoAlt}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="spotlight__image"
              />
              {selected.isSamplePortrait ? (
                <span className="badge profile-card__photo-badge">Sample portrait</span>
              ) : null}
            </div>

            <div className="team-detail__intro">
              <div className="team-detail__intro-top">
                <div>
                  <h3 className="team-detail__name">{selected.name}</h3>
                  <span className="team-detail__role">{selected.title}</span>
                </div>
                <Button href="/contact" variant="primary">
                  Schedule a Consultation
                </Button>
              </div>
              <p className="team-detail__bio">{selected.shortBio}</p>

              <div className="grid grid--2 u-mt-md">
                <FactCard
                  icon={<Briefcase size={20} aria-hidden="true" />}
                  title="Practice Areas"
                  items={selectedPracticeAreas}
                />
                <FactCard
                  icon={<GraduationCap size={20} aria-hidden="true" />}
                  title="Education"
                  items={selected.education}
                />
                {selected.isAttorney ? (
                  <FactCard
                    icon={<Scale size={20} aria-hidden="true" />}
                    title="Bar Admissions"
                    items={selected.barAdmissions}
                    notice={!selected.verifiedBarAdmissions}
                  />
                ) : null}
                <FactCard
                  icon={<Award size={20} aria-hidden="true" />}
                  title="Experience"
                  items={selected.experienceHighlights}
                />
                <FactCard
                  icon={<Globe size={20} aria-hidden="true" />}
                  title="Languages"
                  items={selected.languages}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
