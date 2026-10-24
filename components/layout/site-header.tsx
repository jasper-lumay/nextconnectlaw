import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NavDrawer } from "@/components/layout/nav-drawer";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { ArrowRightIcon } from "@/components/ui/icons";
import { firm } from "@/content/firm";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <Link href="/" className="site-header__brand">
            <span className="site-header__mark" aria-hidden="true">
              {firm.name.charAt(0)}
            </span>
            <span className="site-header__brand-text">
              <strong>{firm.name}</strong>
              <span>
                {firm.city}, {firm.state}
              </span>
            </span>
          </Link>

          <PrimaryNav />

          <div className="site-header__actions">
            <Link href="/contact" className="btn btn--primary site-header__cta">
              {firm.consultationCta}
              <ArrowRightIcon />
            </Link>
            <NavDrawer />
          </div>
        </div>
      </Container>
    </header>
  );
}
