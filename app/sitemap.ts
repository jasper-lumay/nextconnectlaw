import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { practiceAreas } from "@/content/practice-areas";
import { team } from "@/content/team";

const staticRoutes = [
  "",
  "/about",
  "/practice-areas",
  "/team",
  "/locations",
  "/resources",
  "/contact",
  "/privacy-policy",
  "/legal-disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const practiceAreaEntries = practiceAreas.map((area) => ({
    url: `${siteConfig.url}/practice-areas/${area.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const teamEntries = team.map((attorney) => ({
    url: `${siteConfig.url}/team/${attorney.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...practiceAreaEntries, ...teamEntries];
}
