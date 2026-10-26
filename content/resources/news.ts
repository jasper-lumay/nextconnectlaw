import type { NewsItem } from "@/lib/types";

/**
 * DEMO CONTENT ONLY. These are topic summaries, not reporting on actual
 * events, legislation, or court decisions — no dates, sources, or
 * jurisdictions are fabricated. `publicationDate`, `sourceUrl`,
 * `jurisdiction` and `verificationDate` stay null until a real, sourced
 * item replaces the placeholder; the UI must never render a date for an
 * item where these are null.
 */
export const newsItems: NewsItem[] = [
  {
    slug: "ai-regulation-commercial-contracting",
    category: "News",
    title: "AI Regulation and Commercial Contracting: Areas to Watch",
    summary:
      "As businesses adopt AI tools in their products and operations, contracts increasingly need to address data use, output ownership, and liability allocation for AI-driven features — areas that existing commercial templates often don't cover.",
    jurisdiction: null,
    publicationDate: null,
    sourceUrl: null,
    verificationDate: null,
    isDemoContent: true,
  },
  {
    slug: "data-privacy-compliance-cross-border",
    category: "News",
    title: "Data Privacy Compliance: Considerations for Businesses Operating Across Borders",
    summary:
      "Companies handling customer data across multiple states or countries face a patchwork of privacy obligations. Reviewing data processing agreements and cross-border transfer mechanisms remains a recurring priority for growing businesses.",
    jurisdiction: null,
    publicationDate: null,
    sourceUrl: null,
    verificationDate: null,
    isDemoContent: true,
  },
];
