import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";

export default function ComicSpotlight() {
  return (
    <section className="featured-comic-section" aria-label="Featured Comic">
      <SiteContainer>
        <SectionTitle>Featured Comic</SectionTitle>

        <div className="featured-comic-layout">
          <Link
            href="/store"
            className="featured-comic-media group"
            aria-label="Watch Shutter-Bird Saves the Day teaser"
          >
            <Image
              src="/assets/comics/comic-1.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 767px) min(100vw, 360px), 360px"
            />
            <span className="featured-comic-media__overlay">
              <span className="featured-comic-play" aria-hidden>
                <Play size={15} className="ml-0.5 text-[var(--color-accent)]" fill="var(--color-accent)" />
              </span>
            </span>
          </Link>

          <div className="featured-comic-body">
            <h3 className="featured-comic-subtitle">Shutter-Bird Saves the Day</h3>
            <p className="featured-comic-description">
              When the skies fall silent, one hero rises with a lens sharper than light. Shutter-Bird returns to
              protect AfriCity from the shadows of its past.
            </p>
            <Link href="/store" className="featured-comic-cta">
              More Teaser
            </Link>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
