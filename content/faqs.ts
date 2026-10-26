import type { FaqItem } from "@/lib/types";

/**
 * No FAQ content exists in any source document. These entries restate
 * only what is explicitly documented elsewhere on the site (practice
 * scope, consultation process, disclaimer language) and avoid any claim
 * about pricing, timelines, outcomes, or jurisdiction-specific conclusions
 * that isn't already confirmed. Replace with firm-authored FAQs before
 * launch. Rendered on /resources — see app/resources/page.tsx.
 */
export const faqs: FaqItem[] = [
  {
    question: "When should a business consult an attorney about a contract?",
    answer:
      "Generally, before signing — not after a dispute arises. Early review gives you room to negotiate terms around scope, liability, and termination while both parties are still motivated to reach agreement.",
  },
  {
    question: "What is the difference between a software license and a SaaS agreement?",
    answer:
      "A traditional software license typically grants rights to install and use software you've been given a copy of. A SaaS agreement instead grants access to a hosted service you never take possession of, so it also has to address hosting, availability, support, and data handling over the life of the subscription.",
  },
  {
    question: "How can a business protect its intellectual property?",
    answer:
      "Start by confirming ownership is actually assigned to the business in writing — for employees, contractors, and any outside developers. From there, confidentiality agreements, clear licensing terms, and attention to open-source obligations all help protect the IP a business depends on.",
  },
  {
    question: "What should a company prepare before an immigration consultation?",
    answer:
      "Having a clear picture of the role or individual involved — the position's requirements, timeline, and any prior immigration history — helps the firm identify the right visa category or process more quickly during the first conversation.",
  },
  {
    question: "Why are data protection clauses important in vendor agreements?",
    answer:
      "Vendor agreements often involve sharing customer or business data with a third party. Data protection clauses define how that data can be used, how it's secured, and what happens if something goes wrong — protections that matter regardless of which party technically 'owns' the data.",
  },
  {
    question: "What information should I bring to an initial legal consultation?",
    answer:
      "Any relevant documents (contracts, correspondence, or filings related to your matter), a short written summary of the situation and your goals, and a general sense of your timeline all help make the first conversation more productive.",
  },
  {
    question: "Can companies seek legal guidance for cross-border transactions?",
    answer:
      "Yes. Cross-border technology and commercial transactions raise additional considerations — including which jurisdiction's law applies, local regulatory requirements, and enforcement practicalities — that are worth addressing with counsel early in the process.",
  },
  {
    question: "How can I schedule a consultation with NextConnect Law?",
    answer:
      "Use the Schedule a Consultation button available throughout the site, or visit the Contact page to send a message directly. The firm will follow up with next steps and a clear scope for your matter.",
  },
];
