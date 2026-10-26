import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/types";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <details className="faq-accordion__item" key={item.question}>
          <summary className="faq-accordion__question">
            <span>{item.question}</span>
            <Plus className="faq-accordion__icon" aria-hidden="true" />
          </summary>
          <p className="faq-accordion__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
