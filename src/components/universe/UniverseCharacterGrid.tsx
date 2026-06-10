import Link from "next/link";
import Image from "next/image";
import { CHARACTERS } from "@/lib/characters";

export default function UniverseCharacterGrid() {
  return (
    <div className="universe-char-grid">
      {CHARACTERS.map((char) => (
        <Link key={char.slug} href={`/universe/${char.slug}`} id={char.slug} className="universe-char-card group">
          <Image
            src={char.image}
            alt={char.name}
            fill
            className="universe-char-card__image"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          />
          <span className="universe-char-card__shade" aria-hidden />
          <span className="universe-char-card__body">
            <span className="universe-char-card__bar" aria-hidden />
            <span className="universe-char-card__name">{char.name}</span>
            <span className="universe-char-card__universe">{char.universe}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
