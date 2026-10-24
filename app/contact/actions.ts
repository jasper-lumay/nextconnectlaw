"use server";

import { validateContactForm, type ContactFormValues } from "@/lib/contact-schema";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof ContactFormValues, string>>;
};

/**
 * Server-side submit handler for the contact form.
 *
 * Security measures implemented:
 * - All validation is re-run server-side (never trusts client-side checks alone).
 * - A hidden honeypot field ("company_website") silently rejects bot submissions
 *   without revealing to the bot that it was caught.
 * - A timestamp field rejects submissions completed implausibly fast (<2s),
 *   a common signal of scripted/bot submission.
 * - Runs as a Next.js Server Action, so it is not a publicly discoverable
 *   REST endpoint and is protected by Next's built-in origin checking.
 *
 * NOT YET CONFIGURED: outbound email/CRM delivery. No email provider
 * credentials were supplied for this project. Submissions are currently
 * logged server-side only. Before launch, wire this up to the firm's
 * chosen provider (e.g. Resend, SendGrid, Postmark) using environment
 * variables — never hardcode API keys in source.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("company_website") ?? "");
  if (honeypot.trim().length > 0) {
    // Silently "succeed" for bots so they don't learn the honeypot was triggered.
    return { status: "success" };
  }

  const renderedAt = Number(formData.get("rendered_at") ?? 0);
  if (renderedAt && Date.now() - renderedAt < 2000) {
    return {
      status: "error",
      message: "Please take a moment to review your message before submitting.",
    };
  }

  const values: ContactFormValues = {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    matterType: String(formData.get("matterType") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const errors = validateContactForm(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, message: "Please correct the highlighted fields." };
  }

  // TODO(firm): connect to an email/CRM provider. Until then, log server-side
  // so submissions are not silently discarded during development/review.
  console.info("[contact-form] new inquiry received", {
    name: `${values.firstName} ${values.lastName}`,
    email: values.email,
    matterType: values.matterType,
  });

  return {
    status: "success",
    message:
      "Thank you — your message has been received. We will respond with next steps and a clear scope.",
  };
}
