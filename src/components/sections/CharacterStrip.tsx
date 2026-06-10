import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { HOME_HERO_STRIP } from "@/lib/constants";
import { SiteContainer } from "@/components/layout/SectionContainer";

export default function CharacterStrip() {
  return (
    <section className="heroes-section" aria-labelledby="heroes-heading">
      <SiteContainer>
        <header className="heroes-header">
          <div className="heroes-stars" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="heroes-star" strokeWidth={0} />
            ))}
          </div>
          <h2 id="heroes-heading" className="heroes-heading">
            Meet Our Heroes
          </h2>
        </header>
      </SiteContainer>

      <SiteContainer size="shell">
        <ul className="heroes-showcase">
          {HOME_HERO_STRIP.map((hero, index) => (
            <li key={hero.slug} className="heroes-showcase__item">
              <Link href={`/universe/${hero.slug}`} className="heroes-card">
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  className="heroes-card__image"
                  sizes="(max-width: 767px) 44vw, (max-width: 1023px) 18vw, 260px"
                  priority={index < 3}
                />
                <span className="heroes-card__overlay" aria-hidden />
                <span className="heroes-card__meta">
                  <span className="heroes-card__bar" aria-hidden />
                  <span className="heroes-card__name">{hero.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="heroes-cta">
          <Link href="/universe" className="heroes-cta-link">
            Meet All Heroes
            <ArrowRight size={17} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
            <span className="heroes-cta-pill">Universe</span>
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
