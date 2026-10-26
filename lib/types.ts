export type NavItem = {
  label: string;
  href: string;
};

export type PracticeArea = {
  slug: string;
  title: string;
  shortSummary: string;
  summary: string;
  services: string[];
  iconLabel: string;
  heroImageAlt: string;
  clientSituations: string[];
  serviceDetails: { title: string; description: string }[];
  approachSteps: { title: string; description: string }[];
};

export type Attorney = {
  slug: string;
  name: string;
  title: string;
  shortBio: string;
  bio: string[];
  education: string[];
  barAdmissions: string[];
  verifiedBarAdmissions: boolean;
  experienceHighlights: string[];
  publications: { title: string; description: string }[];
  languages: string[];
  practiceAreaSlugs: string[];
  photoAlt: string;
  photoSrc: string;
  isSamplePortrait: boolean;
  isAttorney: boolean;
};

export type Location = {
  slug: string;
  name: string;
  city: string;
  state: string;
  streetAddress: string | null;
  phone: string | null;
  hours: { day: string; hours: string }[] | null;
  servesRemote: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

/** A single structured section of long-form resource content (renders as an H2 block). */
export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceCategory = "Blog" | "Legal Article" | "News" | "Guide";

export type BlogArticle = {
  slug: string;
  category: "Blog";
  title: string;
  dek: string;
  summary: string;
  coverImageSrc: string;
  coverImageAlt: string;
  byline: string;
  sections: ArticleSection[];
  keyTakeaways?: string[];
};

export type LegalArticle = {
  slug: string;
  category: "Legal Article";
  title: string;
  dek: string;
  summary: string;
  byline: string;
  sections: ArticleSection[];
  keyTakeaways?: string[];
};

/**
 * Demo-only legal news item. `publicationDate`, `sourceUrl`, `jurisdiction`
 * and `verificationDate` are the fields a real, verified item would need —
 * left null here so the UI never renders a fabricated date or source.
 */
export type NewsItem = {
  slug: string;
  category: "News";
  title: string;
  summary: string;
  jurisdiction: string | null;
  publicationDate: string | null;
  sourceUrl: string | null;
  verificationDate: string | null;
  isDemoContent: boolean;
};

export type Guide = {
  slug: string;
  category: "Guide";
  title: string;
  benefit: string;
  summary: string;
  stepCount: number;
  sections: ArticleSection[];
};
