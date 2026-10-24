import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { demoTeamProfiles, type DemoProfile } from "@/content/demo-team-profiles";

/**
 * INTERNAL DESIGN PREVIEW — NOT A PUBLISHED SITE PAGE.
 *
 * Shows the full 6-card layout for reference. The 5 fictional profiles here
 * come from content/demo-team-profiles.ts, the same source now also
 * rendered live on the public /team page (see docs/CONTENT-AUDIT.md). This
 * page additionally swaps in a mock portrait for Sumant Khan purely so the
 * layout mockup exercises all 6 sample images — the real /team and
 * /team/sumant-khan pages use his actual approved photo and are unaffected.
 *
 * Deliberately NOT linked from site navigation, NOT included in
 * app/sitemap.ts, and marked noindex/nofollow below and in robots.ts.
 */

export const metadata: Metadata = {
  title: "Team Page Design Preview (Internal — Not Published)",
  robots: { index: false, follow: false },
};

const sumantPreview: DemoProfile = {
  slug: "sumant-khan",
  name: "Sumant Khan",
  title: "Principal Attorney",
  bio: "Sumant Khan has over 20 years of experience across law firms, in-house legal departments, and international consulting. His work includes technology transactions, intellectual property, commercial contracts, and business-related legal matters.",
  practiceAreas: [
    "Intellectual Property",
    "Technology Licensing",
    "Commercial Contracts",
    "Cross-Border Transactions",
    "Immigration",
  ],
  education: "J.D., Emory University School of Law; additional qualifications documented in the firm's materials.",
  barAdmissions: "Pending final verification.",
  experience: "20+ years.",
  languages: "English, Hindi, Urdu (basic), as listed in the firm's materials.",
  photoSrc: "/team/01-mock-portrait.webp",
};

const previewProfiles: DemoProfile[] = [sumantPreview, ...demoTeamProfiles];

export default function TeamPreviewPage() {
  return (
    <>
      <div className="preview-banner u-text-center">
        INTERNAL DESIGN PREVIEW — NOT PUBLISHED. Only Sumant Khan is a real, confirmed NextConnect
        Law team member (his real photo is swapped for a mock portrait here, for layout review
        only). The other five cards are the same fictional demo profiles currently live on the
        public /team page — see docs/CONTENT-AUDIT.md.
      </div>

      <section className="section section--surface">
        <Container>
          <SectionHeading
            eyebrow="Design Preview"
            title="Meet Our Legal Team"
            lede="Learn about the legal professionals and practice areas behind NextConnect Law's business-focused legal services."
          />
          <div className="grid grid--3">
            {previewProfiles.map((profile, index) => {
              const isDemo = profile.slug !== "sumant-khan";
              return (
                <div key={profile.slug} className="card">
                  <div className="profile-card__photo">
                    <Image
                      src={profile.photoSrc}
                      alt={`${isDemo ? "Demo placeholder" : "Portrait"} for ${profile.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="spotlight__image"
                    />
                    {isDemo ? (
                      <span className="badge profile-card__photo-badge">Demo profile</span>
                    ) : null}
                  </div>
                  <span className="card__eyebrow">
                    {String(index + 1).padStart(2, "0")}. {profile.title}
                  </span>
                  <h3 className="card__title">{profile.name}</h3>
                  <p className="card__body">{profile.bio}</p>
                  <p className="card__body u-mt-md">
                    <strong>Practice areas:</strong> {profile.practiceAreas.join(", ")}
                  </p>
                  <p className="card__body u-mt-md">
                    <strong>Education:</strong> {profile.education}
                  </p>
                  <p className="card__body u-mt-md">
                    <strong>Bar admissions:</strong> {profile.barAdmissions}
                  </p>
                  <p className="card__body u-mt-md">
                    <strong>Experience:</strong> {profile.experience}
                  </p>
                  <p className="card__body u-mt-md">
                    <strong>Languages:</strong> {profile.languages}
                  </p>
                  <span className="card__link u-mt-md">View Full Profile →</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
