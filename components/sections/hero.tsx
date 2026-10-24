import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type HeroHighlight = {
  icon: ReactNode;
  label: string;
};

export function Hero({
  eyebrow,
  titlePrefix,
  titleHighlight,
  lede,
  actions,
  highlights,
  className,
  area,
  breadcrumb,
}: {
  eyebrow?: string;
  titlePrefix: string;
  titleHighlight?: string;
  lede: string;
  actions?: ReactNode;
  highlights?: HeroHighlight[];
  className?: string;
  area?: string;
  breadcrumb?: ReactNode;
}) {
  return (
    <section className={className ? `hero ${className}` : "hero"} data-area={area}>
      <Container>
        <div className="hero__content">
          {breadcrumb}
          {eyebrow ? <span className="hero__eyebrow">{eyebrow}</span> : null}
          <h1 className="hero__title">
            {titlePrefix}
            {titleHighlight ? (
              <span className="hero__title-highlight"> {titleHighlight}</span>
            ) : null}
          </h1>
          <p className="hero__lede">{lede}</p>
          {actions ? <div className="hero__actions">{actions}</div> : null}

          {highlights && highlights.length > 0 ? (
            <ul className="hero__highlights">
              {highlights.map((item) => (
                <li key={item.label} className="hero__highlight">
                  <span className="hero__highlight-icon">{item.icon}</span>
                  <span className="hero__highlight-label">{item.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
