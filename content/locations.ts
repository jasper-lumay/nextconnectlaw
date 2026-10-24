import type { Location } from "@/lib/types";

/**
 * Street address and business hours are not confirmed in any source
 * document (see docs/CONTENT-AUDIT.md #5, #6) — two WordPress drafts give
 * conflicting hours, and no draft provides a real street address. Both are
 * left null and rendered as "by appointment" until the firm confirms.
 */
export const locations: Location[] = [
  {
    slug: "atlanta",
    name: "NextConnect Law — Atlanta",
    city: "Atlanta",
    state: "Georgia",
    streetAddress: null,
    phone: "(404) 944-3985",
    hours: null,
    servesRemote: true,
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}
