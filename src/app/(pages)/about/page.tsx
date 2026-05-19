import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";
import { ABOUT_TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "The Afriwood Studios story — our vision, mission, team, and partners.",
};

const values = [
  {
    label: "Our Mission",
    text: "To create Africa's first superhero universe that celebrates African culture, heritage, and stories on a global stage.",
  },
  {
    label: "Our Team",
    text: "A passionate collective of African artists, writers, animators, and storytellers united by one vision.",
  },
  {
    label: "Our Vision",
    text: "A world where African superheroes inspire the next generation — in comics, film, games, and beyond.",
  },
  {
    label: "Our Values",
    text: "Authenticity, creativity, community, and cultural pride in every story we tell.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="page-offset">
      <section className="about-page-hero" aria-labelledby="about-page-title">
        <div className="about-page-hero__glow" aria-hidden />
        <SiteContainer size="narrow" className="about-page-hero__inner">
          <span className="universe-eyebrow">Our Story</span>
          <h1 id="about-page-title" className="universe-page-title">
            About Afriwood Studios
          </h1>
          <p className="universe-page-lead">
            Born from a belief that Africa has superheroes too. We are building the universe that proves it.
          </p>
        </SiteContainer>
      </section>

      <section className="about-section about-section--dark" aria-labelledby="about-story-heading">
        <SiteContainer>
          <div className="about-story-grid">
            <div>
              <h2 id="about-story-heading" className="about-story-heading">
                Africa First.
                <br />
                <span className="about-story-heading__accent">Universe Always.</span>
              </h2>
              <p className="about-story-copy">
                Afriwood Studios was founded with a simple but powerful conviction: the African continent is full of
                superheroes waiting to be told. From Shutter-Bird to Ije, Zazuu to Udo — each character carries the soul
                of a culture, a community, a story that deserves the world stage.
              </p>
              <p className="about-story-copy">
                We are not just a comic company. We are a multimedia universe — comics, animation, motion pictures,
                merchandise, education, and community — all anchored in authentic African storytelling.
              </p>
              <p className="about-story-copy">
                Based in Newark, NJ, with roots deep in Africa, Afriwood Studios is building something generational.
              </p>
            </div>
            <div className="about-media-placeholder" aria-hidden>
              <span className="about-media-placeholder__label">Studio photo coming soon</span>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="about-section about-section--muted" aria-labelledby="about-values-heading">
        <SiteContainer>
          <SectionTitle id="about-values-heading" align="center">
            What We Stand For
          </SectionTitle>
          <ul className="about-values-grid">
            {values.map((v) => (
              <li key={v.label}>
                <article className="about-value-card">
                  <div className="about-value-card__icon" aria-hidden>
                    <span className="about-value-card__icon-letter">{v.label[0]}</span>
                  </div>
                  <h3 className="about-value-card__title">{v.label}</h3>
                  <p className="about-value-card__text">{v.text}</p>
                </article>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="about-section about-section--dark" aria-labelledby="about-team-heading">
        <SiteContainer>
          <SectionTitle id="about-team-heading" align="center">
            The Team
          </SectionTitle>
          <ul className="about-team-grid">
            {ABOUT_TEAM.map((member) => (
              <li key={member.name}>
                <article className="about-team-card">
                  <div className="about-team-card__avatar">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="64px" />
                  </div>
                  <h3 className="about-team-card__name">{member.name}</h3>
                  <p className="about-team-card__role">{member.role}</p>
                </article>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="about-section about-section--cta" aria-labelledby="about-cta-heading">
        <SiteContainer size="narrow">
          <h2 id="about-cta-heading" className="universe-cta-title">
            Join the Movement
          </h2>
          <p className="universe-cta-lead">Support the universe. Be part of the story.</p>
          <div className="universe-cta-actions">
            <Link href="/community" className="universe-cta-btn universe-cta-btn--primary">
              Join Community
            </Link>
            <Link href="/contact" className="universe-cta-btn universe-cta-btn--secondary">
              Contact Us
            </Link>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}
