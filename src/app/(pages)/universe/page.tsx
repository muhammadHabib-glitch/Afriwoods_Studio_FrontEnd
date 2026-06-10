import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";
import UniverseCharacterGrid from "@/components/universe/UniverseCharacterGrid";
import { UNIVERSE_STORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Universe",
  description:
    "Explore the full Afriwood Universe — characters, storylines, lore, and the complete timeline.",
};

export default function UniversePage() {
  return (
    <div className="page-offset">
      <section className="universe-page-hero" aria-labelledby="universe-page-title">
        <div className="universe-page-hero__glow" aria-hidden />
        <SiteContainer size="narrow" className="universe-page-hero__inner">
          <span className="universe-eyebrow">The Lore Hub</span>
          <h1 id="universe-page-title" className="universe-page-title">
            The Afriwood Universe
          </h1>
          <p className="universe-page-lead">
            Every hero. Every story. Every arc. Explore the characters, storylines, and expanding lore of
            Africa&apos;s first superhero universe.
          </p>
        </SiteContainer>
      </section>

      <section className="universe-section universe-section--dark" aria-labelledby="universe-characters-heading">
        <SiteContainer>
          <SectionTitle id="universe-characters-heading" align="center">
            Characters
          </SectionTitle>
          <UniverseCharacterGrid />
        </SiteContainer>
      </section>

      <section className="universe-section universe-section--muted" aria-labelledby="universe-stories-heading">
        <SiteContainer>
          <h2 id="universe-stories-heading" className="universe-section-heading">
            Comic Story Arcs
          </h2>
          <div className="universe-timeline">
            <div className="universe-timeline__line" aria-hidden />
            <div className="universe-timeline__list">
              {UNIVERSE_STORIES.map((story, i) => (
                <article key={story.title} className="universe-timeline-item">
                  <span className="universe-timeline-item__dot" aria-hidden />
                  <div className="universe-timeline-item__row">
                    <span className="universe-timeline-item__index">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <span className="universe-timeline-item__phase">{story.phase}</span>
                      <h3 className="universe-timeline-item__title">{story.title}</h3>
                      <p className="universe-timeline-item__desc">{story.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="universe-section universe-section--cta" aria-labelledby="universe-cta-heading">
        <SiteContainer size="narrow">
          <h2 id="universe-cta-heading" className="universe-cta-title">
            Ready to Dive In?
          </h2>
          <p className="universe-cta-lead">Read the comics, watch the films, wear the universe.</p>
          <div className="universe-cta-actions">
            <Link href="/store" className="universe-cta-btn universe-cta-btn--primary">
              Shop Comics <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/movies" className="universe-cta-btn universe-cta-btn--secondary">
              Watch Films
            </Link>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}
