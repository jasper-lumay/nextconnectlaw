import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Attorney, Location } from "@/lib/types";

export function TeamLocationsSpotlight({
  attorney,
  attorneyPhotoSrc,
  location,
  locationPhotoSrc,
}: {
  attorney: Attorney;
  attorneyPhotoSrc: string;
  location: Location;
  locationPhotoSrc: string;
}) {
  return (
    <section className="section section--surface spotlight">
      <Container>
        <div className="spotlight__grid">
          <div className="spotlight__text">
            <span className="spotlight__eyebrow">Our Team</span>
            <h2 className="spotlight__title">Work directly with the attorney on your matter</h2>
            <p className="spotlight__lede">
              Clients work with the principal attorney from the first call through closing.
            </p>
            <Button href={`/team/${attorney.slug}`} variant="primary">
              View Full Profile <ArrowRightIcon />
            </Button>
          </div>

          <div className="spotlight__team-profile">
            <div className="spotlight__team-photo">
              <Image
                src={attorneyPhotoSrc}
                alt={attorney.photoAlt}
                fill
                sizes="160px"
                className="spotlight__image"
              />
            </div>
            <div>
              <h3 className="spotlight__team-name">{attorney.name}</h3>
              <span className="spotlight__team-role">{attorney.title}</span>
              <p className="spotlight__team-bio">{attorney.shortBio}</p>
            </div>
          </div>

          <div className="spotlight__divider" aria-hidden="true" />

          <div className="spotlight__text">
            <span className="spotlight__eyebrow">Locations</span>
            <h2 className="spotlight__title">Based in {location.city}</h2>
            <p className="spotlight__lede">
              Serving technology and services companies in {location.state} and beyond.
            </p>

            <div className="spotlight__location-card">
              <span className="spotlight__location-icon" aria-hidden="true">
                <MapPin />
              </span>
              <div>
                <p className="spotlight__location-name">{location.name}</p>
                <p className="spotlight__location-meta">
                  {location.city}, {location.state}
                </p>
                {location.servesRemote ? (
                  <p className="spotlight__location-meta">Remote engagements available</p>
                ) : null}
                <Link href="/locations" className="card__link">
                  View location details <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>

          <div className="spotlight__location-photo">
            <Image
              src={locationPhotoSrc}
              alt={`${location.city} skyline`}
              fill
              sizes="240px"
              className="spotlight__image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
