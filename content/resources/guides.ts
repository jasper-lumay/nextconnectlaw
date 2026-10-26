import type { Guide } from "@/lib/types";

/**
 * DEMO EDITORIAL CONTENT. Practical, original checklist-style guides — not
 * downloadable PDFs (none exist), general education rather than legal
 * advice, and not jurisdiction-specific.
 */
export const guides: Guide[] = [
  {
    slug: "business-contract-review-checklist",
    category: "Guide",
    title: "Business Contract Review Checklist",
    benefit: "A practical pass to run before signing any commercial agreement.",
    summary:
      "A step-by-step checklist covering scope, term, liability, confidentiality and dispute resolution before you sign.",
    stepCount: 6,
    sections: [
      {
        heading: "1. Confirm the scope matches reality",
        paragraphs: [
          "Read the scope section line by line and compare it against what was actually discussed or demonstrated. Flag anything that was promised verbally but isn't written into the contract.",
        ],
      },
      {
        heading: "2. Check term, renewal and termination",
        paragraphs: [
          "Identify how long the agreement runs, whether it auto-renews, and what notice is required to end it. Confirm termination rights exist for both convenience and cause, if that matters to your relationship.",
        ],
      },
      {
        heading: "3. Review liability and indemnification together",
        paragraphs: [
          "Look at the limitation of liability and indemnification clauses side by side — they interact. Confirm the liability cap is proportionate to the actual size and risk of the deal.",
        ],
      },
      {
        heading: "4. Confirm confidentiality scope and duration",
        paragraphs: [
          "Check what information is covered, how it can be used, and whether the obligation survives after the agreement ends — and for how long.",
        ],
      },
      {
        heading: "5. Understand the dispute resolution process",
        paragraphs: [
          "Identify how disputes get resolved (negotiation, mediation, arbitration, or litigation) and whether that process is realistic for your business to use if a disagreement arises.",
        ],
      },
      {
        heading: "6. Get a second set of eyes before signing",
        paragraphs: [
          "For any agreement with meaningful financial or operational stakes, have counsel review the final version — not just the first draft — before signature.",
        ],
      },
    ],
  },
  {
    slug: "saas-agreement-preparation-guide",
    category: "Guide",
    title: "SaaS Agreement Preparation Guide",
    benefit: "What to gather and decide before negotiating a SaaS contract.",
    summary:
      "A preparation checklist covering data, security, availability, support and exit terms before you negotiate a SaaS deal.",
    stepCount: 5,
    sections: [
      {
        heading: "1. Define what 'done' looks like",
        paragraphs: [
          "Write down the specific functionality and outcomes you expect from the service, so the scope section of the agreement can be drafted against real requirements rather than a sales pitch.",
        ],
      },
      {
        heading: "2. Map your data requirements",
        paragraphs: [
          "Identify what data will be stored in the platform, who owns it, and what export rights you'll need if the relationship ends.",
        ],
      },
      {
        heading: "3. Set your security and compliance bar",
        paragraphs: [
          "Determine what security standards, certifications, or compliance obligations (if any) apply to your business, and confirm the vendor can meet them.",
        ],
      },
      {
        heading: "4. Decide what availability and support you actually need",
        paragraphs: [
          "Not every service needs 99.99% uptime guarantees. Set realistic availability and support expectations based on how critical the service is to your operations.",
        ],
      },
      {
        heading: "5. Plan your exit before you sign",
        paragraphs: [
          "Decide what a clean exit looks like — data export format, transition assistance, and timeline — so those terms can be negotiated into the agreement up front.",
        ],
      },
    ],
  },
  {
    slug: "intellectual-property-ownership-checklist",
    category: "Guide",
    title: "Intellectual Property Ownership Checklist",
    benefit: "A quick check to confirm you actually own what you think you own.",
    summary:
      "A checklist for confirming ownership and rights across employee, contractor and open-source contributions to your product.",
    stepCount: 4,
    sections: [
      {
        heading: "1. Inventory who built what",
        paragraphs: [
          "List every person or firm who has contributed code, design, or content to your product — employees, contractors, agencies, and co-founders.",
        ],
      },
      {
        heading: "2. Confirm assignment, not just use",
        paragraphs: [
          "For each contributor, confirm whether your agreement with them actually assigns ownership to your business, or only grants a license to use their work.",
        ],
      },
      {
        heading: "3. Flag any open-source components",
        paragraphs: [
          "Identify open-source software used in your product and check the license terms attached to each component, since some impose obligations on how you can distribute your own software.",
        ],
      },
      {
        heading: "4. Close any gaps before they matter",
        paragraphs: [
          "Address any missing assignment agreements or unclear ownership now, rather than during due diligence for a financing round or acquisition, when gaps are far more costly to fix.",
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
