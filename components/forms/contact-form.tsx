"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { subjectOptions } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [renderedAt] = useState(() => Date.now());
  const errors = state.errors ?? {};

  return (
    <form action={formAction} noValidate aria-describedby="contact-form-status">
      <input type="hidden" name="rendered_at" value={renderedAt} />

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "success" ? (
        <p className="alert alert--success" role="status" id="contact-form-status">
          {state.message}
        </p>
      ) : null}

      {state.status === "error" && state.message ? (
        <p className="alert alert--error" role="alert" id="contact-form-status">
          {state.message}
        </p>
      ) : null}

      <div className="form-grid">
        <div className={`form-field${errors.firstName ? " form-field--error" : ""}`}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName ? (
            <span className="form-field__error" id="firstName-error">
              {errors.firstName}
            </span>
          ) : null}
        </div>

        <div className={`form-field${errors.lastName ? " form-field--error" : ""}`}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName ? (
            <span className="form-field__error" id="lastName-error">
              {errors.lastName}
            </span>
          ) : null}
        </div>
      </div>

      <div className="form-grid">
        <div className={`form-field${errors.email ? " form-field--error" : ""}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <span className="form-field__error" id="email-error">
              {errors.email}
            </span>
          ) : null}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone (optional)</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" />
        </div>
      </div>

      <div className={`form-field${errors.subject ? " form-field--error" : ""}`}>
        <label htmlFor="subject">Subject</label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        >
          <option value="" disabled>
            Select one
          </option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.subject ? (
          <span className="form-field__error" id="subject-error">
            {errors.subject}
          </span>
        ) : null}
      </div>

      <div className={`form-field${errors.message ? " form-field--error" : ""}`}>
        <label htmlFor="message">Brief description of your matter</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          maxLength={4000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
        />
        {errors.message ? (
          <span className="form-field__error" id="message-error">
            {errors.message}
          </span>
        ) : (
          <span className="form-field__hint" id="message-hint">
            Initial inquiries are confidential, but sending a message does not create an
            attorney-client relationship.
          </span>
        )}
      </div>

      <Button type="submit" variant="primary" block disabled={isPending}>
        {isPending ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
