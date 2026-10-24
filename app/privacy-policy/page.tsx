import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for the ${firm.name} website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section section--surface">
      <Container>
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />

        <p className="u-max-w-prose">
          <Badge notice>Draft — pending attorney review</Badge>
        </p>
        <p className="u-max-w-prose u-mt-md">
          No privacy policy for {firm.name} existed in any source material reviewed for this
          rebuild. The draft below describes, honestly, what this website&rsquo;s current
          functionality actually does — it is not a substitute for a policy drafted and approved by
          the firm&rsquo;s attorney(s), and should not be published as final without that review.
        </p>

        <div className="stack stack--gap-md u-max-w-prose u-mt-md">
          <div>
            <h2>Information we collect</h2>
            <p>
              When you submit the contact form on this website, we collect the information you
              provide: your name, email address, phone number (if given), the type of matter, and
              the message you write. We do not currently use third-party analytics, advertising
              trackers, or cookies beyond what is strictly required for the site to function.
            </p>
          </div>

          <div>
            <h2>How we use your information</h2>
            <p>
              Information submitted through the contact form is used solely to respond to your
              inquiry. Submitting the form does not create an attorney-client relationship.
            </p>
          </div>

          <div>
            <h2>How we share your information</h2>
            <p>
              We do not sell or share your information with third parties for marketing purposes.
              Information may be shared with service providers strictly as needed to operate this
              website (for example, hosting and, once configured, email delivery).
            </p>
          </div>

          <div>
            <h2>Data retention and security</h2>
            <p>
              [PLACEHOLDER — firm to confirm retention period and security practices once a
              production email/CRM provider is selected.]
            </p>
          </div>

          <div>
            <h2>Your rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, or request
              deletion of your personal information. [PLACEHOLDER — firm to confirm which privacy
              regimes (e.g., GDPR, CCPA) apply to this site&rsquo;s visitors and the specific
              process for exercising these rights.]
            </p>
          </div>

          <div>
            <h2>Contact</h2>
            <p>
              Questions about this policy can be directed to {firm.email ?? firm.emailPlaceholder}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
