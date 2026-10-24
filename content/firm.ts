/**
 * Core firm identity. Every value here is sourced from the drafts reviewed in
 * docs/CONTENT-AUDIT.md. Fields marked PLACEHOLDER are not confirmed by the
 * firm and must not be treated as final before launch.
 */
export const firm = {
  name: "NextConnect Law",
  legalName: "NextConnect Law",
  principalAttorneySlug: "sumant-khan",
  tagline: "Technology Counsel for Complex Transactions",
  shortDescription:
    "NextConnect Law advises technology and services companies on intellectual property, commercial contracts, licensing, cross-border matters and immigration.",
  city: "Atlanta",
  state: "Georgia",
  // Confirmed in source draft (both numeric formats resolve to the same number).
  phone: "(404) 944-3985",
  phoneHref: "tel:+14049443985",
  // PLACEHOLDER: source drafts disagree on whether the public contact address
  // should be a personal @comcast.net address or an unlisted firm domain
  // address. Do not publish until the firm confirms. See CONTENT-AUDIT.md #4.
  email: null as string | null,
  emailPlaceholder: "[FIRM EMAIL — CONFIRM BEFORE LAUNCH]",
  disclaimer:
    "Attorney advertising. This website is for general information and is not legal advice. Viewing it or contacting the firm does not create an attorney-client relationship. Prior results do not guarantee a similar outcome.",
  consultationCta: "Schedule a Consultation",
} as const;
