import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { practiceAreas } from "@/content/practice-areas";
import { team } from "@/content/team";
import { blogArticles } from "@/content/resources/blogs";
import { legalArticles } from "@/content/resources/legal-articles";
import { guides } from "@/content/resources/guides";

const staticRoutes = [
  "",
  "/about",
  "/practice-areas",
  "/practice-areas/business-corporate",
  "/team",
  "/locations",
  "/resources",
  "/resources/blogs",
  "/resources/legal-articles",
  "/resources/news",
  "/resources/guides",
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

  const blogEntries = blogArticles.map((article) => ({
    url: `${siteConfig.url}/resources/blogs/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const legalArticleEntries = legalArticles.map((article) => ({
    url: `${siteConfig.url}/resources/legal-articles/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const guideEntries = guides.map((guide) => ({
    url: `${siteConfig.url}/resources/guides/${guide.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...practiceAreaEntries,
    ...teamEntries,
    ...blogEntries,
    ...legalArticleEntries,
    ...guideEntries,
  ];
}
