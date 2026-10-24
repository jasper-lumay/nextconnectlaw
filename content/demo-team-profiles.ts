/**
 * FICTIONAL PLACEHOLDER CONTENT — these are demo profiles, not real
 * NextConnect Law staff. Published to the public /team page per explicit
 * client direction (see docs/CONTENT-AUDIT.md "Demo team profiles" entry),
 * clearly labeled "Demo Profile" / "Sample portrait" throughout so site
 * visitors are not misled. No detail page exists for these slugs — do not
 * add them to content/team.ts, app/sitemap.ts, or generateStaticParams.
 *
 * Replace with real attorney data (and remove this file's usage) once the
 * firm confirms actual hires for these roles.
 */
export type DemoProfile = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  practiceAreas: string[];
  education: string;
  barAdmissions: string;
  experience: string;
  languages: string;
  photoSrc: string;
};

export const demoTeamProfiles: DemoProfile[] = [
  {
    slug: "demo-02",
    name: "Sample Attorney 02",
    title: "Technology & SaaS Attorney — Demo Profile",
    bio: "Focused on software licensing, enterprise technology agreements, SaaS subscription contracts, API integrations, and technology partnerships.",
    practiceAreas: ["Technology & SaaS Licensing", "Commercial Contracts"],
    education: "Pending profile details.",
    barAdmissions: "Pending profile details.",
    experience: "Pending profile details.",
    languages: "Pending profile details.",
    photoSrc: "/team/02-mock-portrait.webp",
  },
  {
    slug: "demo-03",
    name: "Sample Attorney 03",
    title: "Commercial Contracts Attorney — Demo Profile",
    bio: "Focused on business agreements, vendor contracts, confidentiality arrangements, commercial negotiations, and strategic partnerships.",
    practiceAreas: ["Commercial Contracts", "Cross-Border & International"],
    education: "Pending profile details.",
    barAdmissions: "Pending profile details.",
    experience: "Pending profile details.",
    languages: "Pending profile details.",
    photoSrc: "/team/03-mock-portrait.webp",
  },
  {
    slug: "demo-04",
    name: "Sample Attorney 04",
    title: "Privacy & Data Compliance Attorney — Demo Profile",
    bio: "Focused on privacy-related commercial agreements, data processing terms, third-party data arrangements, and cross-border information-sharing requirements.",
    practiceAreas: ["Privacy & Data Compliance", "Technology & SaaS Licensing"],
    education: "Pending profile details.",
    barAdmissions: "Pending profile details.",
    experience: "Pending profile details.",
    languages: "Pending profile details.",
    photoSrc: "/team/04-mock-portrait.webp",
  },
  {
    slug: "demo-05",
    name: "Sample Attorney 05",
    title: "Cross-Border Transactions Attorney — Demo Profile",
    bio: "Focused on international business agreements, technology transfers, commercial partnerships, cross-border licensing, and international transactional matters.",
    practiceAreas: ["Cross-Border & International", "Intellectual Property", "Commercial Contracts"],
    education: "Pending profile details.",
    barAdmissions: "Pending profile details.",
    experience: "Pending profile details.",
    languages: "Pending profile details.",
    photoSrc: "/team/05-mock-portrait.webp",
  },
  {
    slug: "demo-06",
    name: "Sample Attorney 06",
    title: "Immigration Attorney — Demo Profile",
    bio: "Focused on employment-based immigration matters, business immigration planning, work authorization, and international talent mobility.",
    practiceAreas: ["Immigration Law"],
    education: "Pending profile details.",
    barAdmissions: "Pending profile details.",
    experience: "Pending profile details.",
    languages: "Pending profile details.",
    photoSrc: "/team/06-mock-portrait.webp",
  },
];
