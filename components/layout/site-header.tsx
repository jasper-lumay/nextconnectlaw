import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NavDrawer } from "@/components/layout/nav-drawer";
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

          <div className="site-header__actions">
            <a href={firm.phoneHref} className="site-header__phone">
              <span>{firm.phone}</span>
            </a>
            <Link href="/contact" className="btn btn--outline site-header__contact">
              Contact Us
            </Link>
            <Link href="/contact" className="btn btn--primary site-header__cta">
              {firm.consultationCta}
            </Link>
            <NavDrawer />
          </div>
        </div>
      </Container>
    </header>
  );
}
