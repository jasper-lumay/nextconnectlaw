import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type HeroStat = {
  value: string;
  label: string;
};

export function Hero({
  eyebrow,
  title,
  lede,
  actions,
  stats,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  actions?: ReactNode;
  stats?: HeroStat[];
}) {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div>
            {eyebrow ? <span className="hero__eyebrow">{eyebrow}</span> : null}
            <h1 className="hero__title">{title}</h1>
            <p className="hero__lede">{lede}</p>
            {actions ? <div className="hero__actions">{actions}</div> : null}
          </div>

          {stats && stats.length > 0 ? (
            <div className="hero__panel">
              <div className="hero__stats">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="hero__stat-value">{stat.value}</span>
                    <span className="hero__stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
