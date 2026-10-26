import type { LegalArticle } from "@/lib/types";

/**
 * DEMO EDITORIAL CONTENT. Structured, reference-oriented explainers —
 * deliberately more compact and list-driven than the Blog content type.
 * Original writing, general education only, no invented statutes, case
 * outcomes or quotations.
 */
export const legalArticles: LegalArticle[] = [
  {
    slug: "who-owns-software-ip",
    category: "Legal Article",
    title: "Who Owns Software IP? Understanding Assignments and Licensing",
    dek: "A reference overview of how software ownership is determined, and the difference between assignment and licensing.",
    summary:
      "A structured overview of default ownership rules, assignment versus licensing, and what to check before a project starts.",
    byline: "NextConnect Law | Sample Educational Content",
    sections: [
      {
        heading: "The default rule",
        paragraphs: [
          "As a general starting point, the person or entity that creates a work is its initial owner, unless a contract says otherwise. Payment alone does not transfer ownership — a written agreement is what actually moves ownership from creator to commissioning business.",
        ],
      },
      {
        heading: "Two ways software rights are transferred",
        paragraphs: ["Agreements typically use one of two structures:"],
        bullets: [
          "Assignment — ownership of the work transfers to the commissioning party, who then controls how it is used, modified, licensed, or sold.",
          "License — the creator retains ownership and grants defined rights to use the software, which may be exclusive or non-exclusive, broad or narrow.",
        ],
      },
      {
        heading: "Why the distinction matters",
        paragraphs: [
          "A license, even one described as broad, leaves the underlying ownership with the original creator. That can affect a business's ability to resell, sublicense, modify, or exclude the original developer from using similar code elsewhere. An assignment removes that ambiguity by placing ownership directly with the business.",
        ],
      },
      {
        heading: "Employees versus independent contractors",
        paragraphs: [
          "Ownership defaults often differ depending on the working relationship. Work created by a traditional employee within the scope of employment is frequently treated differently than work by an independent contractor or outside agency, where ownership typically depends entirely on what the contract states. Businesses relying on contractors should not assume ownership transfers automatically.",
        ],
      },
      {
        heading: "Background IP versus newly created IP",
        paragraphs: [
          "Agreements commonly separate 'background IP' (tools or code the creator already owned before the project) from newly developed work created specifically for the engagement. A clear agreement states what rights the business receives to each category.",
        ],
      },
      {
        heading: "Checklist before a project begins",
        paragraphs: [],
        bullets: [
          "Confirm whether the agreement assigns ownership or only licenses it",
          "Identify any background IP being incorporated and what rights apply to it",
          "Confirm whether open-source components are disclosed and reviewed",
          "Confirm confidentiality obligations and how long they last",
        ],
      },
    ],
    keyTakeaways: [
      "Ownership must be established by contract — it is not automatic simply because you paid for the work.",
      "An assignment transfers ownership; a license only grants rights to use it.",
      "Contractor-built software requires explicit ownership terms more often than employee-built software.",
    ],
  },
  {
    slug: "key-clauses-commercial-agreements",
    category: "Legal Article",
    title: "Key Clauses Businesses Should Understand in Commercial Agreements",
    dek: "A structured look at the recurring clauses that most often determine how a commercial relationship actually plays out.",
    summary:
      "A reference guide to scope, term and termination, liability, indemnification, confidentiality and dispute resolution clauses.",
    byline: "NextConnect Law | Sample Educational Content",
    sections: [
      {
        heading: "Scope of the agreement",
        paragraphs: [
          "The scope section defines exactly what each party is agreeing to provide or receive. Vague or incomplete scope language is one of the most common sources of later disagreement, since it leaves room for each side to interpret expectations differently.",
        ],
      },
      {
        heading: "Term and termination",
        paragraphs: ["This section typically addresses:"],
        bullets: [
          "How long the agreement lasts, and whether it renews automatically",
          "What notice is required to terminate, and under what circumstances",
          "Whether termination can happen for convenience, or only for cause (such as breach)",
          "What obligations, if any, survive after termination",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "This clause caps the amount either party can recover from the other in connection with the agreement, and often excludes certain categories of damages (such as indirect or consequential losses). Because it directly shapes financial exposure, this clause is frequently negotiated and should be reviewed against the actual risk and value of the relationship.",
        ],
      },
      {
        heading: "Indemnification",
        paragraphs: [
          "Indemnification provisions address which party bears the cost if a third party brings a claim related to the agreement — for example, a claim of intellectual property infringement. These clauses define who defends the claim, and often interact closely with the limitation of liability clause.",
        ],
      },
      {
        heading: "Confidentiality",
        paragraphs: [
          "Confidentiality clauses define what information is treated as confidential, how it may be used, and how long the obligation continues — including after the agreement ends. Businesses sharing sensitive information should confirm the scope of protection matches what is actually being disclosed.",
        ],
      },
      {
        heading: "Dispute resolution",
        paragraphs: [
          "This section determines how disagreements are resolved — for example, through negotiation, mediation, arbitration, or litigation — and often specifies which jurisdiction's law applies and where any proceeding must take place.",
        ],
      },
      {
        heading: "Quick reference checklist",
        paragraphs: [],
        bullets: [
          "Is the scope specific enough to prevent differing interpretations?",
          "Are termination rights and notice periods clear to both sides?",
          "Is the limitation of liability proportionate to the size of the relationship?",
          "Does indemnification clearly allocate responsibility for third-party claims?",
          "Is the dispute resolution process one your business can realistically use?",
        ],
      },
    ],
    keyTakeaways: [
      "Scope, term/termination, liability, indemnification, confidentiality and dispute resolution recur across almost every commercial agreement.",
      "Limitation of liability and indemnification clauses should be reviewed together — they interact.",
      "Dispute resolution terms decide how and where a future disagreement gets resolved, so they deserve attention before signing, not after a dispute starts.",
    ],
  },
];

export function getLegalArticleBySlug(slug: string): LegalArticle | undefined {
  return legalArticles.find((article) => article.slug === slug);
}
