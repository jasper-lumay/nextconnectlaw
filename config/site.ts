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
