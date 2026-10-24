import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/layout/nav-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { primaryNav } from "@/config/site";
import { firm } from "@/content/firm";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href="/" className="site-header__brand">
            <strong>{firm.name}</strong>
            <span>
              {firm.city}, {firm.state}
            </span>
          </Link>

          <div className="site-header__nav">
            <nav className="site-header__nav-list" aria-label="Primary">
              {primaryNav.map((item) => (
                <NavLink key={item.href} href={item.href} className="site-header__nav-link">
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="site-header__actions">
              <a href={firm.phoneHref} className="site-header__phone">
                <span>{firm.phone}</span>
              </a>
              <Link href="/contact" className="btn btn--primary site-header__cta">
                {firm.consultationCta}
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
