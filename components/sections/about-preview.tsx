import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";

export function AboutPreview({
  eyebrow,
  title,
  body,
  ctaHref,
  ctaLabel,
  badgeText,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
  badgeText: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="section about-preview">
      <Container>
        <div className="about-preview__grid">
          <div className="about-preview__text">
            <span className="about-preview__eyebrow">{eyebrow}</span>
            <h2 className="about-preview__title">{title}</h2>
            <p className="about-preview__body">{body}</p>
            <Button href={ctaHref} variant="primary">
              {ctaLabel} <ArrowRightIcon />
            </Button>
          </div>

          <div className="about-preview__media">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="about-preview__image"
            />
            <div className="about-preview__badge">
              <span className="about-preview__badge-rule" aria-hidden="true" />
              <p>{badgeText}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
