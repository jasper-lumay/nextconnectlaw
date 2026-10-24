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
