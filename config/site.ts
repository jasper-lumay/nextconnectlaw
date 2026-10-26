import type { NavItem } from "@/lib/types";

export const siteConfig = {
  name: "NextConnect Law",
  url: "https://nextconnectlaw.com",
  defaultTitle: "NextConnect Law | Technology Counsel for Complex Transactions",
  defaultDescription:
    "NextConnect Law advises technology and services companies in Atlanta and beyond on intellectual property, commercial contracts, licensing, cross-border matters and immigration.",
  locale: "en_US",
} as const;

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/team" },
  { label: "Locations", href: "/locations" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLegalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Legal Disclaimer", href: "/legal-disclaimer" },
];

export type ResourcesMenuItem = {
  label: string;
  href: string;
  description: string;
  iconKey: "blogs" | "legal-articles" | "news" | "guides" | "faqs" | "videos";
};

export const resourcesMenu: ResourcesMenuItem[] = [
  {
    label: "Blogs",
    href: "/resources/blogs",
    description: "Editorial articles on business and technology law.",
    iconKey: "blogs",
  },
  {
    label: "Legal Articles",
    href: "/resources/legal-articles",
    description: "Structured, reference-style legal explainers.",
    iconKey: "legal-articles",
  },
  {
    label: "News",
    href: "/resources/news",
    description: "Legal developments affecting technology companies.",
    iconKey: "news",
  },
  {
    label: "Guides",
    href: "/resources/guides",
    description: "Practical checklists for common legal decisions.",
    iconKey: "guides",
  },
  {
    label: "FAQs",
    href: "/resources#faqs",
    description: "Answers to common questions before you call.",
    iconKey: "faqs",
  },
  {
    label: "Videos",
    href: "/resources#videos",
    description: "Video explainers — coming soon.",
    iconKey: "videos",
  },
];
