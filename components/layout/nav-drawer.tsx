"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { primaryNav, resourcesMenu } from "@/config/site";
import { firm } from "@/content/firm";
import { HamburgerIcon, CloseIcon } from "@/components/ui/icons";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function NavDrawer() {
  const [open, setOpen] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close whenever the route changes (covers link clicks and browser nav).
  // Adjusting state during render in response to a prop change is the
  // pattern React recommends in place of an effect that only calls
  // setState (see "Adjusting state when a prop changes").
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setResourcesExpanded(false);
  }

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    document.body.classList.add("u-no-scroll");
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("u-no-scroll");
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="btn btn--outline nav-trigger"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="site-nav-drawer"
        onClick={() => setOpen(true)}
      >
        <HamburgerIcon className="nav-trigger__icon" />
        <span>Menu</span>
      </button>

      {/* The backdrop and drawer are absolutely positioned inside this
          fixed, viewport-sized, overflow:hidden root, so the off-canvas
          translateX(100%) drawer never contributes to the document's
          scrollable width — even mid-transition. */}
      <div className="nav-drawer-root" data-open={open}>
        <div className="nav-drawer-backdrop" data-open={open} aria-hidden="true" onClick={close} />

        <div
          id="site-nav-drawer"
          ref={panelRef}
          className="nav-drawer"
          data-open={open}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="nav-drawer__header">
            <span className="nav-drawer__title">Navigation</span>
            <button
              ref={closeButtonRef}
              type="button"
              className="nav-drawer__close"
              onClick={close}
            >
              <CloseIcon />
              <span className="visually-hidden">Close menu</span>
            </button>
          </div>

          <nav className="nav-drawer__links" aria-label="Primary">
            {primaryNav.map((item) =>
              item.label === "Resources" ? (
                <div className="nav-drawer__resources" key={item.href}>
                  <div className="nav-drawer__resources-row">
                    <Link
                      href={item.href}
                      className="nav-drawer__link"
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="nav-drawer__resources-toggle"
                      aria-expanded={resourcesExpanded}
                      aria-controls="nav-drawer-resources-panel"
                      aria-label="Show Resources submenu"
                      onClick={() => setResourcesExpanded((value) => !value)}
                    >
                      <ChevronDown data-open={resourcesExpanded} aria-hidden="true" />
                    </button>
                  </div>

                  <div
                    id="nav-drawer-resources-panel"
                    className="nav-drawer__resources-panel"
                    data-open={resourcesExpanded}
                  >
                    {resourcesMenu.map((sub) => (
                      <Link key={sub.href} href={sub.href} className="nav-drawer__resources-link">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-drawer__link"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <Link href="/contact" className="btn btn--primary nav-drawer__cta">
            {firm.consultationCta}
          </Link>
          <a href={firm.phoneHref} className="nav-drawer__phone">
            Call {firm.phone}
          </a>
        </div>
      </div>
    </>
  );
}
