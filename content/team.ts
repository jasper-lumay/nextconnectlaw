import type { Attorney } from "@/lib/types";

/**
 * Source: "Technology Counsel" WordPress draft bio for Sumant Khan (see
 * docs/CONTENT-AUDIT.md). Bar admissions are flagged `verifiedBarAdmissions:
 * false` — this is a compliance-sensitive claim and must be confirmed
 * against the attorney's current, active bar status before publishing.
 *
 * Karaman Mamand (Immigration Case Manager) was previously excluded per
 * CONTENT-AUDIT.md conflict #3 (unclear role, single inconsistent legacy
 * draft). Re-included here per explicit client direction confirming the
 * title; biography and any further credentials remain unconfirmed and are
 * marked "Pending Confirmation" rather than invented. See CONTENT-AUDIT.md
 * for the full history — firm must confirm current team membership and
 * supply/approve a real biography and photograph before launch.
 */
export const team: Attorney[] = [
  {
    slug: "sumant-khan",
    name: "Sumant Khan",
    title: "Principal Attorney",
    shortBio:
      "20+ years of technology, IP, and transactional counsel across law firms, in-house roles, and international consulting.",
    bio: [
      "NextConnect Law brings more than 20 years of sophisticated legal practice to technology companies, startups and multinational enterprises navigating complex commercial and IP landscapes.",
      "Sumant's career spans in-house contracts leadership at AI/ML, cybersecurity and IT staffing companies, international consulting for WIPO and the United Nations, law firm of counsel engagements, and direct collaboration with a Microsoft Associate General Counsel. That breadth translates into practical, business-forward legal advice across the full technology transactions spectrum.",
      "Clients work directly with Sumant from the first call through closing, with predictable communication and pricing options that fit the matter, including fixed-fee engagements for defined work.",
    ],
    education: [
      "J.D. — Emory University School of Law",
      "LL.M. (Dean's Scholar) — Emory University School of Law",
      "LL.M. in Intellectual Property — Franklin Pierce Law Center (UNH Law)",
      "LL.B. — University of Pune",
    ],
    // PLACEHOLDER — NEEDS CLIENT CONFIRMATION before publishing: source
    // drafts disagree on scope (Alabama only vs. Georgia + Alabama + 6
    // additional states + international credentials). See CONTENT-AUDIT.md
    // conflict #1.
    barAdmissions: [
      "Georgia State Bar [CONFIRM CURRENT STATUS]",
      "Alabama Bar [CONFIRM CURRENT STATUS]",
      "U.S. District Court, Northern District of Alabama [CONFIRM]",
      "Additional U.S. state admissions [CONFIRM COUNT & JURISDICTIONS]",
      "Bar Council of Delhi [CONFIRM CURRENT STATUS]",
      "Registered Patent Agent (India) [CONFIRM CURRENT STATUS]",
    ],
    verifiedBarAdmissions: false,
    experienceHighlights: [
      "Contracts Head — AI/ML platform, cybersecurity and IT staffing companies",
      "Of Counsel — Briskin Cross & Sanford",
      "Research Consultant — collaboration with a Microsoft Associate General Counsel",
      "Legal Consultant — Netherlands-based technology company, GDPR & EU technology law",
      "International Consultant — private international legal consultancy",
      "Technology licensing engagement — South African Stock Exchange",
      "International & Multilateral — Legal Consultant, United Nations (UNITAR) and WIPO",
      "Lead Counsel — technology company IPO on an Indian stock exchange",
      "Software licensing engagement — international operations, Milan, Italy",
    ],
    publications: [
      {
        title: "Investigative Powers of the FBI and Internet Service Providers",
        description:
          "Analysis of surveillance law at the intersection of federal investigative authority and private technology infrastructure.",
      },
      {
        title: "Copyright and Patent Protection on Computer Software in U.S.–India",
        description:
          "Comparative examination of software IP protection frameworks across U.S. and Indian legal systems.",
      },
      {
        title: "International Regulation of Foreign Banks",
        description:
          "Regulatory frameworks governing foreign banking entities in international commercial contexts.",
      },
    ],
    languages: ["English (fluent)", "Hindi (fluent)", "Urdu (basic)"],
    practiceAreaSlugs: [
      "intellectual-property",
      "technology-saas-licensing",
      "commercial-contracts",
      "privacy-data-compliance",
      "cross-border-international",
      "immigration-law",
    ],
    photoAlt: "Portrait of Sumant Khan, Principal Attorney at NextConnect Law",
    photoSrc: "/home-page-hero/sumant-khan.avif",
    isSamplePortrait: false,
    isAttorney: true,
  },
  {
    slug: "karaman-mamand",
    name: "Karaman Mamand",
    title: "Immigration Case Manager",
    shortBio:
      "Supports the firm's immigration practice. Full biography pending confirmation from the firm.",
    // PLACEHOLDER — only the title/role is confirmed by the client for this
    // build. No biography, education, or experience detail exists in any
    // source document reviewed; nothing has been invented to fill the gap.
    bio: [
      "[PENDING CONFIRMATION] A detailed biography for Karaman Mamand has not been provided in the source materials reviewed for this site. Do not publish this profile until the firm supplies and approves biography content.",
    ],
    education: [],
    barAdmissions: [],
    verifiedBarAdmissions: false,
    experienceHighlights: [],
    publications: [],
    languages: [],
    practiceAreaSlugs: ["immigration-law"],
    photoAlt: "Temporary sample portrait placeholder for Karaman Mamand, Immigration Case Manager",
    photoSrc: "/team/02-mock-portrait.webp",
    isSamplePortrait: true,
    isAttorney: false,
  },
];

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return team.find((attorney) => attorney.slug === slug);
}
