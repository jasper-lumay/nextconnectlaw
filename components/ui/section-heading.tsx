type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  center?: boolean;
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  center,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${center ? " section-heading--center" : ""}`}>
      {eyebrow ? <span className="section-heading__eyebrow">{eyebrow}</span> : null}
      <Heading>{title}</Heading>
      {lede ? <p className="section-heading__lede">{lede}</p> : null}
    </div>
  );
}
