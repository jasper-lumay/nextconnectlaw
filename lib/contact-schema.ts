import { practiceAreas } from "@/content/practice-areas";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Select a subject.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about your matter.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide at least a few sentences of detail.";
  } else if (values.message.length > 4000) {
    errors.message = "Message is too long (4000 character limit).";
  }

  return errors;
}

export const subjectOptions = [...practiceAreas.map((area) => area.title), "Other"];
