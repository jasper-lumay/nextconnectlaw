import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: `Legal disclaimer for the ${firm.name} website.`,
};

export default function LegalDisclaimerPage() {
  return (
    <section className="section section--surface">
      <Container>
        <SectionHeading eyebrow="Legal" title="Legal Disclaimer" />

        <div className="stack stack--gap-md u-max-w-prose">
          <p>
            <strong>Attorney advertising.</strong> This website is for general informational
            purposes only and does not constitute legal advice. Viewing this website or contacting{" "}
            {firm.name} does not create an attorney-client relationship. An attorney-client
            relationship is only formed once confirmed in writing by the firm.
          </p>
          <p>
            Prior results described on this website, if any, do not guarantee a similar outcome in
            any future matter. Every matter is different, and outcomes depend on the specific facts
            and circumstances involved.
          </p>
          <p>
            Attorney bar admissions are listed on individual{" "}
            <Link href="/team">attorney profile pages</Link>. Immigration, intellectual property,
            and international arbitration matters may be governed by federal law and the rules of
            the relevant agency, court, or forum, in addition to applicable state law.
          </p>
          <p>
            This website may contain links to third-party websites. {firm.name} is not responsible
            for the content or privacy practices of those external sites.
          </p>
          <p className="u-text-muted">
            Last reviewed: pending firm sign-off. This page should be reviewed by the firm&rsquo;s
            attorney(s) before launch to confirm it meets all applicable bar advertising rules in
            every jurisdiction where the firm is admitted to practice.
          </p>
        </div>
      </Container>
    </section>
  );
}
