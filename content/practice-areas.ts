import type { PracticeArea } from "@/lib/types";

/**
 * Source: "Technology Counsel" WordPress draft (see docs/CONTENT-AUDIT.md
 * conflict #2). An earlier draft proposed a different 6-area split
 * (Intellectual Property, Transactions, M&A, Software Licensing,
 * Immigration, Arbitration) — that version is NOT discarded, it simply
 * wasn't used here. Confirm the final category list with the firm before
 * launch; renaming/merging categories later only requires editing this file.
 */
export const practiceAreas: PracticeArea[] = [
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    shortSummary: "Protecting and monetizing what technology companies build.",
    summary:
      "Advising on the full lifecycle of IP assets in commercial and transactional contexts, from early registration strategy through diligence in a financing or sale.",
    services: [
      "Patent licensing & prosecution support",
      "Copyright & software IP",
      "Trade secret protection",
      "IP due diligence in M&A",
      "Domain name & trademark disputes",
      "Open-source compliance",
    ],
    iconLabel: "IP",
  },
  {
    slug: "technology-saas-licensing",
    title: "Technology & SaaS Licensing",
    shortSummary: "Licensing terms that fit the product, the customer and the risk.",
    summary:
      "End-to-end drafting and negotiation of technology agreements, from early-stage startup contracts to enterprise licensing frameworks.",
    services: [
      "SaaS & software license agreements",
      "AI platform licensing & governance",
      "API access & integration agreements",
      "Software development contracts",
      "OEM & white-label agreements",
      "Subscription & freemium terms",
    ],
    iconLabel: "SaaS",
  },
  {
    slug: "commercial-contracts",
    title: "Commercial Contracts",
    shortSummary: "The full vendor, partnership and customer agreement stack.",
    summary:
      "High-volume commercial contract management drafted and negotiated by counsel who has worked on both sides of the table.",
    services: [
      "Vendor & procurement agreements",
      "NDAs & confidentiality frameworks",
      "Reseller & channel agreements",
      "Outsourcing & MSA contracts",
      "Joint development & JV agreements",
      "Strategic alliance agreements",
    ],
    iconLabel: "Contracts",
  },
  {
    slug: "privacy-data-compliance",
    title: "Privacy & Data Compliance",
    shortSummary: "Practical privacy counsel built into transaction workflows.",
    summary:
      "GDPR, CCPA and global privacy guidance integrated directly into commercial contracting, rather than treated as a separate workstream.",
    services: [
      "GDPR & CCPA compliance",
      "Data processing agreements",
      "Sub-processor frameworks",
      "Privacy-by-design contract terms",
      "Cross-border data transfer",
      "Multi-state data broker law",
    ],
    iconLabel: "Privacy",
  },
  {
    slug: "cross-border-international",
    title: "Cross-Border & International",
    shortSummary: "Multi-jurisdictional technology law across global markets.",
    summary:
      "Advising on technology transactions and disputes that span the U.S., EU, India and other international markets.",
    services: [
      "International technology licensing",
      "Cross-border IP transactions",
      "EU law & GDPR structuring",
      "India/U.S. technology transfer",
      "Joint venture IP agreements",
      "International commercial arbitration",
    ],
    iconLabel: "Global",
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    shortSummary: "Business and employment-based immigration for growing teams.",
    summary:
      "Guiding employers and individuals through work authorization, keeping filings aligned with business and hiring timelines.",
    services: [
      "O-1A extraordinary ability visas",
      "H-1B specialty occupation",
      "EB-1 & EB-2 NIW petitions",
      "Asylum & protection matters",
      "Corporate immigration compliance",
      "International talent mobility",
    ],
    iconLabel: "Immigration",
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
