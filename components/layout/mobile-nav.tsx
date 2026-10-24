"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/config/site";
import { firm } from "@/content/firm";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        className="site-header__menu-toggle btn btn--secondary"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="mobile-nav" className="mobile-nav" data-open={open} aria-label="Mobile">
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mobile-nav__link"
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="mobile-nav__link" onClick={() => setOpen(false)}>
          {firm.consultationCta}
        </Link>
      </nav>
    </>
  );
}
