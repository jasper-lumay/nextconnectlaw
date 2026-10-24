import type { Attorney } from "@/lib/types";

/**
 * Source: "Technology Counsel" WordPress draft bio for Sumant Khan (see
 * docs/CONTENT-AUDIT.md). Bar admissions are flagged `verifiedBarAdmissions:
 * false` — this is a compliance-sensitive claim and must be confirmed
 * against the attorney's current, active bar status before publishing.
 *
 * A second name, "Karaman Mamand" (described once, inconsistently, as an
 * immigration "case manager"), appeared in a separate legacy draft with no
 * further detail. Not included here — see CONTENT-AUDIT.md conflict #3.
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
  },
];

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return team.find((attorney) => attorney.slug === slug);
}
