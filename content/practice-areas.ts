import type { PracticeArea } from "@/lib/types";

/**
 * Source: "Technology Counsel" WordPress draft (see docs/CONTENT-AUDIT.md
 * conflict #2). An earlier draft proposed a different 6-area split
 * (Intellectual Property, Transactions, M&A, Software Licensing,
 * Immigration, Arbitration) — that version is NOT discarded, it simply
 * wasn't used here. Confirm the final category list with the firm before
 * launch; renaming/merging categories later only requires editing this file.
 *
 * `services` titles are sourced from the same WordPress draft. `serviceDetails`
 * descriptions, `clientSituations` and `approachSteps` are original page copy
 * written to present that sourced service list (no new credentials, outcomes
 * or legal claims are introduced) and should be reviewed alongside the rest
 * of the site before launch.
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
    heroImageAlt: "Illuminated legal desk with law books in blue and gold tones",
    clientSituations: [
      "Your engineering team built something patentable and you need a strategy for protecting it before a competitor files first.",
      "A buyer's diligence team is asking hard questions about who actually owns your code, your trademarks and your trade secrets.",
      "You've received a cease-and-desist or trademark dispute and need counsel who understands the underlying technology.",
    ],
    serviceDetails: [
      {
        title: "Patent licensing & prosecution support",
        description:
          "Structuring licensing terms and coordinating with patent counsel to protect inventions without slowing product development.",
      },
      {
        title: "Copyright & software IP",
        description: "Securing and enforcing rights in source code, documentation and creative assets.",
      },
      {
        title: "Trade secret protection",
        description:
          "Building contractual and policy safeguards around confidential processes, data and know-how.",
      },
      {
        title: "IP due diligence in M&A",
        description:
          "Auditing IP ownership, chain of title and encumbrances ahead of a financing, acquisition or sale.",
      },
      {
        title: "Domain name & trademark disputes",
        description:
          "Resolving disputes over brand names, domains and marks through negotiation or formal proceedings.",
      },
      {
        title: "Open-source compliance",
        description:
          "Reviewing open-source license obligations in your codebase to manage distribution and disclosure risk.",
      },
    ],
    approachSteps: [
      {
        title: "Initial consultation",
        description:
          "We review your IP portfolio, product roadmap and immediate risk to understand what's actually at stake.",
      },
      {
        title: "Tailored strategy",
        description:
          "You get a clear, prioritized plan for protection, licensing or dispute resolution — not a generic checklist.",
      },
      {
        title: "Ongoing counsel",
        description:
          "We stay engaged as your technology and business evolve, so protection keeps pace with growth.",
      },
    ],
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
    heroImageAlt: "Modern software developer workspace with multiple monitors",
    clientSituations: [
      "You're negotiating a SaaS agreement with an enterprise customer and need terms that protect you without killing the deal.",
      "You're licensing or integrating an AI platform and need governance language that addresses data use and liability.",
      "You're structuring OEM, white-label or subscription terms for a new product line and need the agreement to scale with you.",
    ],
    serviceDetails: [
      {
        title: "SaaS & software license agreements",
        description:
          "Drafting and negotiating license terms that reflect how your product is actually delivered and supported.",
      },
      {
        title: "AI platform licensing & governance",
        description:
          "Addressing data use, output ownership and liability allocation in AI licensing and integration agreements.",
      },
      {
        title: "API access & integration agreements",
        description: "Setting usage limits, uptime expectations and liability terms for third-party API access.",
      },
      {
        title: "Software development contracts",
        description:
          "Structuring development agreements that define scope, IP ownership and delivery milestones.",
      },
      {
        title: "OEM & white-label agreements",
        description: "Negotiating terms for embedding or rebranding your software inside a partner's product.",
      },
      {
        title: "Subscription & freemium terms",
        description: "Drafting terms of service and subscription terms that support your pricing and growth model.",
      },
    ],
    approachSteps: [
      {
        title: "Initial consultation",
        description: "We review your current license templates and the specific deal you're negotiating.",
      },
      {
        title: "Tailored strategy",
        description: "You get redlines and negotiation positions scoped to the deal size and counterparty.",
      },
      {
        title: "Ongoing counsel",
        description: "We're available as new deals, platforms and partners come online.",
      },
    ],
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
    heroImageAlt: "Legal office interior at sunset",
    clientSituations: [
      "You're onboarding a new vendor or reseller and need an agreement that reflects how the relationship will actually run.",
      "You need a confidentiality framework that works consistently across multiple partners, vendors and prospective deals.",
      "You're structuring a joint development or strategic alliance and need the contract to match the business terms you've agreed to.",
    ],
    serviceDetails: [
      {
        title: "Vendor & procurement agreements",
        description:
          "Drafting and negotiating vendor terms that allocate risk and set clear service expectations.",
      },
      {
        title: "NDAs & confidentiality frameworks",
        description: "Building a consistent NDA process so confidentiality terms don't become a bottleneck.",
      },
      {
        title: "Reseller & channel agreements",
        description:
          "Structuring reseller and channel partner terms, including territory, pricing and support obligations.",
      },
      {
        title: "Outsourcing & MSA contracts",
        description: "Negotiating master services agreements that govern an ongoing outsourced relationship.",
      },
      {
        title: "Joint development & JV agreements",
        description: "Documenting IP ownership, cost-sharing and governance for joint development projects.",
      },
      {
        title: "Strategic alliance agreements",
        description:
          "Structuring agreements between companies collaborating on a shared commercial opportunity.",
      },
    ],
    approachSteps: [
      {
        title: "Initial consultation",
        description:
          "We review the commercial terms you've already agreed to and the contracts currently in use.",
      },
      {
        title: "Tailored strategy",
        description: "You get drafting or negotiation support scoped to the deal's size and complexity.",
      },
      {
        title: "Ongoing counsel",
        description: "We help manage the contract lifecycle as the relationship and volume grow.",
      },
    ],
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
    heroImageAlt: "Laptop displaying a cybersecurity interface in a modern office",
    clientSituations: [
      "You're expanding into new states or markets and need to understand which privacy laws now apply to you.",
      "A customer or partner is asking you to sign a data processing agreement and you need to understand what you're committing to.",
      "You're transferring data across borders and need the contractual mechanisms in place to do it lawfully.",
    ],
    serviceDetails: [
      {
        title: "GDPR & CCPA compliance",
        description: "Advising on obligations under GDPR, CCPA and related state privacy frameworks.",
      },
      {
        title: "Data processing agreements",
        description: "Drafting and negotiating DPAs that reflect your actual data flows and processing roles.",
      },
      {
        title: "Sub-processor frameworks",
        description: "Structuring sub-processor disclosure and flow-down terms across your vendor chain.",
      },
      {
        title: "Privacy-by-design contract terms",
        description:
          "Building privacy obligations directly into commercial contracts rather than as a separate policy.",
      },
      {
        title: "Cross-border data transfer",
        description:
          "Putting transfer mechanisms in place for data moving between the U.S., EU and other jurisdictions.",
      },
      {
        title: "Multi-state data broker law",
        description: "Advising on registration and compliance obligations under state-level data broker laws.",
      },
    ],
    approachSteps: [
      {
        title: "Initial consultation",
        description: "We map your data flows, vendor relationships and the jurisdictions you operate in.",
      },
      {
        title: "Tailored strategy",
        description: "You get a compliance and contracting plan scoped to your actual risk, not a generic checklist.",
      },
      {
        title: "Ongoing counsel",
        description: "We help you keep pace as privacy law and your data practices continue to change.",
      },
    ],
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
    heroImageAlt: "Executive office overlooking a city skyline at sunset",
    clientSituations: [
      "You're licensing technology into a new country and need the agreement structured for that jurisdiction.",
      "You're setting up a technology transfer or joint venture between U.S. and international teams.",
      "You're in a cross-border commercial dispute and need counsel experienced in international arbitration.",
    ],
    serviceDetails: [
      {
        title: "International technology licensing",
        description:
          "Structuring licensing agreements that account for the laws and enforcement practices of each jurisdiction involved.",
      },
      {
        title: "Cross-border IP transactions",
        description: "Advising on IP ownership and transfer issues in multi-jurisdictional deals.",
      },
      {
        title: "EU law & GDPR structuring",
        description: "Structuring agreements and data terms to meet EU regulatory requirements.",
      },
      {
        title: "India/U.S. technology transfer",
        description:
          "Advising on technology transfer and licensing structures between U.S. and India-based teams.",
      },
      {
        title: "Joint venture IP agreements",
        description: "Documenting IP ownership and contribution terms for international joint ventures.",
      },
      {
        title: "International commercial arbitration",
        description:
          "Advising on and supporting resolution of cross-border commercial disputes through arbitration.",
      },
    ],
    approachSteps: [
      {
        title: "Initial consultation",
        description: "We review the jurisdictions, parties and regulatory frameworks involved in your matter.",
      },
      {
        title: "Tailored strategy",
        description: "You get a plan that accounts for the legal and practical realities of each jurisdiction.",
      },
      {
        title: "Ongoing counsel",
        description: "We stay engaged as the cross-border relationship or dispute develops.",
      },
    ],
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
    heroImageAlt: "Passport resting at an airport gate at sunset",
    clientSituations: [
      "You've identified a candidate with specialized skills and need to determine the right visa category for the role.",
      "Your company is growing and needs a consistent process for sponsoring work authorization across multiple hires.",
      "An employee or family member is facing an immigration matter that affects their ability to stay and work in the U.S.",
    ],
    serviceDetails: [
      {
        title: "O-1A extraordinary ability visas",
        description: "Preparing O-1A petitions for individuals with extraordinary ability in their field.",
      },
      {
        title: "H-1B specialty occupation",
        description: "Guiding employers and candidates through H-1B specialty occupation filings.",
      },
      {
        title: "EB-1 & EB-2 NIW petitions",
        description:
          "Preparing employment-based green card petitions, including EB-1 and EB-2 National Interest Waiver cases.",
      },
      {
        title: "Asylum & protection matters",
        description: "Advising individuals on asylum and related protection matters.",
      },
      {
        title: "Corporate immigration compliance",
        description: "Helping employers maintain compliant sponsorship and filing practices as they hire and grow.",
      },
      {
        title: "International talent mobility",
        description: "Advising on work authorization strategy for employees moving across borders.",
      },
    ],
    approachSteps: [
      {
        title: "Initial consultation",
        description: "We review the individual's background and the employer's timeline to identify the right path.",
      },
      {
        title: "Tailored strategy",
        description: "You get a filing strategy and timeline scoped to the specific visa or petition category.",
      },
      {
        title: "Ongoing counsel",
        description: "We stay engaged through filing, any requests for evidence, and renewal.",
      },
    ],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
