import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteContainer } from "@/components/layout/SectionContainer";
import type { Character } from "@/lib/characters";

type CharacterPageProps = {
  character: Character;
};

export default function CharacterPage({ character }: CharacterPageProps) {
  return (
    <div className="page-offset">
      <section className="character-page-hero" aria-labelledby="character-name">
        <div className="character-page-hero__glow" aria-hidden />
        <SiteContainer>
          <Link href="/universe" className="character-page-back">
            <ArrowLeft size={16} aria-hidden />
            Back to Universe
          </Link>
          <div className="character-page-hero__grid">
            <div className="character-page-hero__portrait">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1023px) 100vw, 420px"
                priority
              />
            </div>
            <div className="character-page-hero__copy">
              <span className="universe-eyebrow">{character.universe}</span>
              <h1 id="character-name" className="character-page-title">
                {character.name}
              </h1>
              <p className="character-page-bio">{character.bio}</p>
            </div>
          </div>
        </SiteContainer>
      </section>
    </div>
  );
}