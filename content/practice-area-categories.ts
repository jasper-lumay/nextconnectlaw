import { getPracticeAreaBySlug } from "./practice-areas";

/**
 * Visitor-facing grouping layer for the /practice-areas overview grid.
 * This does NOT replace content/practice-areas.ts — every underlying
 * practice area keeps its own slug, URL and full approved service list.
 * "Business & Corporate" is the one category that spans two underlying
 * areas (Commercial Contracts + Technology & SaaS Licensing); its card
 * links to app/practice-areas/business-corporate/page.tsx, which renders
 * both areas' complete, unmodified service lists. All titles, summaries
 * and service names below are pulled directly from content/practice-areas.ts
 * — nothing here introduces new services or claims.
 */

function requireArea(slug: string) {
  const area = getPracticeAreaBySlug(slug);
  if (!area) {
    throw new Error(`Unknown practice area slug: ${slug}`);
  }
  return area;
}

const commercialContracts = requireArea("commercial-contracts");
const technologySaasLicensing = requireArea("technology-saas-licensing");
const immigrationLaw = requireArea("immigration-law");
const intellectualProperty = requireArea("intellectual-property");
const privacyDataCompliance = requireArea("privacy-data-compliance");
const crossBorderInternational = requireArea("cross-border-international");

function firstSentence(text: string): string {
  const [sentence] = text.split(". ");
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
}

export type PracticeAreaCategory = {
  slug: string;
  title: string;
  description: string;
  services: string[];
  iconKey: "business" | "immigration" | "intellectual-property" | "privacy" | "cross-border";
  href: string;
};

export const practiceAreaCategories: PracticeAreaCategory[] = [
  {
    slug: "business-corporate",
    title: "Business & Corporate",
    description: `${commercialContracts.shortSummary} ${technologySaasLicensing.shortSummary}`,
    services: [
      ...commercialContracts.services.slice(0, 3),
      ...technologySaasLicensing.services.slice(0, 3),
    ],
    iconKey: "business",
    href: "/practice-areas/business-corporate",
  },
  {
    slug: immigrationLaw.slug,
    title: immigrationLaw.title,
    description: `${immigrationLaw.shortSummary} ${firstSentence(immigrationLaw.summary)}`,
    services: immigrationLaw.services.slice(0, 6),
    iconKey: "immigration",
    href: `/practice-areas/${immigrationLaw.slug}`,
  },
  {
    slug: intellectualProperty.slug,
    title: intellectualProperty.title,
    description: `${intellectualProperty.shortSummary} ${firstSentence(intellectualProperty.summary)}`,
    services: intellectualProperty.services.slice(0, 6),
    iconKey: "intellectual-property",
    href: `/practice-areas/${intellectualProperty.slug}`,
  },
  {
    slug: privacyDataCompliance.slug,
    title: privacyDataCompliance.title,
    description: `${privacyDataCompliance.shortSummary} ${firstSentence(privacyDataCompliance.summary)}`,
    services: privacyDataCompliance.services.slice(0, 6),
    iconKey: "privacy",
    href: `/practice-areas/${privacyDataCompliance.slug}`,
  },
  {
    slug: crossBorderInternational.slug,
    title: crossBorderInternational.title,
    description: `${crossBorderInternational.shortSummary} ${firstSentence(crossBorderInternational.summary)}`,
    services: crossBorderInternational.services.slice(0, 6),
    iconKey: "cross-border",
    href: `/practice-areas/${crossBorderInternational.slug}`,
  },
];
