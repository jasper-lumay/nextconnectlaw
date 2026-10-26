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

/**
 * Google Maps search link. Uses the confirmed street address when one
 * exists; otherwise falls back to a city/state search for the firm name
 * rather than inventing an address.
 */
export function getGoogleMapsUrl(location: Location, firmName: string): string {
  const query = location.streetAddress
    ? `${location.streetAddress}, ${location.city}, ${location.state}`
    : `${firmName}, ${location.city}, ${location.state}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
