import type { FaqItem } from "@/lib/types";

/**
 * No FAQ content exists in any source document. These entries restate
 * only what is explicitly documented elsewhere on the site (practice
 * scope, consultation process, disclaimer language) and avoid any claim
 * about pricing, timelines, or outcomes that isn't already confirmed.
 * Replace with firm-authored FAQs before launch.
 */
export const faqs: FaqItem[] = [
  {
    question: "What types of clients does NextConnect Law work with?",
    answer:
      "NextConnect Law advises technology and services companies — from early-stage startups to established enterprises — as well as individuals with immigration matters.",
  },
  {
    question: "Does submitting the contact form create an attorney-client relationship?",
    answer:
      "No. Submitting an inquiry or contacting the firm does not create an attorney-client relationship. That relationship is only established once confirmed in writing by the firm.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact form or schedule a consultation. The firm will follow up with next steps and a clear scope for your matter.",
  },
];
