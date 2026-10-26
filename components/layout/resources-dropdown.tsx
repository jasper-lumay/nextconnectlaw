"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Newspaper, Scale, Megaphone, ClipboardList, HelpCircle, PlayCircle } from "lucide-react";
import { resourcesMenu, type ResourcesMenuItem } from "@/config/site";

const menuIcons: Record<ResourcesMenuItem["iconKey"], typeof Newspaper> = {
  blogs: Newspaper,
  "legal-articles": Scale,
  news: Megaphone,
  guides: ClipboardList,
  faqs: HelpCircle,
  videos: PlayCircle,
};

export function ResourcesDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        close();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const isActive = pathname === "/resources" || pathname.startsWith("/resources/");

  return (
    <div className="resources-dropdown" ref={rootRef}>
      <Link
        href="/resources"
        className="site-header__nav-link"
        aria-current={pathname === "/resources" ? "page" : undefined}
      >
        Resources
      </Link>
      <button
        ref={toggleRef}
        type="button"
        className="resources-dropdown__toggle"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Show Resources submenu"
        data-active={isActive || undefined}
        onClick={() => setOpen((value) => !value)}
      >
        <ChevronDown className="resources-dropdown__chevron" data-open={open} aria-hidden="true" />
      </button>

      <div className="resources-dropdown__panel" data-open={open} role="menu" aria-label="Resources">
        {resourcesMenu.map((item) => {
          const Icon = menuIcons[item.iconKey];
          return (
            <Link key={item.href} href={item.href} className="resources-dropdown__item" role="menuitem">
              <span className="resources-dropdown__item-icon" aria-hidden="true">
                <Icon size={18} />
              </span>
              <span>
                <span className="resources-dropdown__item-title">{item.label}</span>
                <span className="resources-dropdown__item-desc">{item.description}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
