"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "All Resources", href: "/resources" },
  { label: "Blogs", href: "/resources/blogs" },
  { label: "Legal Articles", href: "/resources/legal-articles" },
  { label: "News", href: "/resources/news" },
  { label: "Guides", href: "/resources/guides" },
];

export function CategoryTabs() {
  const pathname = usePathname();

  return (
    <nav className="category-tabs" aria-label="Browse by category">
      {TABS.map((tab) => {
        const isActive = tab.href === "/resources" ? pathname === "/resources" : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className="category-tabs__tab"
            aria-current={isActive ? "page" : undefined}
            data-active={isActive || undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
