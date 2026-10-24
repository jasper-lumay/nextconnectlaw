"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/config/site";

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="site-header__nav" aria-label="Primary">
      {primaryNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="site-header__nav-link"
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
