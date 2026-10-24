import Link from "next/link";
import { Container } from "@/components/ui/container";
import { primaryNav, footerLegalNav } from "@/config/site";
import { firm } from "@/content/firm";
import { practiceAreas } from "@/content/practice-areas";

export function SiteFooter() {
  const year = "2026";

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand-name">{firm.name}</p>
            <p className="site-footer__brand-desc">{firm.shortDescription}</p>
          </div>

          <div>
            <p className="site-footer__heading">Navigate</p>
            <nav className="site-footer__links" aria-label="Footer">
              {primaryNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="site-footer__heading">Practice Areas</p>
            <nav className="site-footer__links" aria-label="Practice areas">
              {practiceAreas.slice(0, 6).map((area) => (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`}>
                  {area.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="site-footer__heading">Contact</p>
            <div className="site-footer__links">
              <a href={firm.phoneHref}>{firm.phone}</a>
              <span className="site-footer__contact-email">
                {firm.email ?? firm.emailPlaceholder}
              </span>
              <span className="site-footer__contact-location">
                {firm.city}, {firm.state}
              </span>
              <Link href="/contact">{firm.consultationCta}</Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {year} {firm.name}. All rights reserved.
          </span>
          <nav aria-label="Legal" className="site-footer__legal-nav">
            {footerLegalNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="site-footer__disclaimer">{firm.disclaimer}</p>
      </Container>
    </footer>
  );
}
