"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { CHARACTERS, type CharacterUniverse } from "@/lib/constants";

const accentColors = ["#f5c518", "#2563eb", "#dc2626", "#16a34a", "#8b5cf6", "#f97316", "#06b6d4"];

type UniverseFilter = "all" | "shutterbird" | "afriwood";

const FILTERS: { id: UniverseFilter; label: string }[] = [
  { id: "all", label: "All Characters" },
  { id: "shutterbird", label: "Shutterbird" },
  { id: "afriwood", label: "Afriwood Universe" },
];

function matchesUniverse(universe: CharacterUniverse, filter: UniverseFilter) {
  if (filter === "all") return true;
  if (filter === "shutterbird") return universe === "Shutterbird";
  return universe === "Afriwood Universe";
}

function filterFromParams(searchParams: URLSearchParams): UniverseFilter {
  const universe = searchParams.get("universe");
  if (universe === "shutterbird") return "shutterbird";
  if (universe === "afriwood") return "afriwood";
  return "all";
}

function heroFromParams(searchParams: URLSearchParams): string | null {
  const hero = searchParams.get("hero");
  return hero && CHARACTERS.some((c) => c.slug === hero) ? hero : null;
}

export default function UniverseCharacterGrid() {
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();

  const urlFilter = filterFromParams(searchParams);
  const urlHero = heroFromParams(searchParams);

  const [filter, setFilter] = useState(urlFilter);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(urlHero);
  const [lastSearchKey, setLastSearchKey] = useState(searchKey);

  if (searchKey !== lastSearchKey) {
    setLastSearchKey(searchKey);
    setFilter(urlFilter);
    setSelectedSlug(urlHero);
  }

  const filtered = useMemo(
    () => CHARACTERS.filter((c) => matchesUniverse(c.universe, filter)),
    [filter],
  );

  const selected = CHARACTERS.find((c) => c.slug === selectedSlug) ?? null;

  return (
    <div>
      <div className="universe-filters" role="tablist" aria-label="Character filters">
        {FILTERS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={filter === tab.id}
            onClick={() => {
              setFilter(tab.id);
              setSelectedSlug(null);
            }}
            className={cn(
              "universe-filter-tab",
              filter === tab.id ? "universe-filter-tab--active" : "universe-filter-tab--inactive",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="universe-char-grid">
        {filtered.map((char, i) => {
          const isSelected = selectedSlug === char.slug;
          const accent = accentColors[i % accentColors.length];
          return (
            <button
              key={char.slug}
              type="button"
              id={char.slug}
              onClick={() => setSelectedSlug(isSelected ? null : char.slug)}
              className={cn("universe-char-card", isSelected && "universe-char-card--selected")}
              aria-pressed={isSelected}
            >
              <Image
                src={char.image}
                alt={char.name}
                fill
                className="universe-char-card__image"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
              />
              <span className="universe-char-card__shade" aria-hidden />
              <span
                className="universe-char-card__accent"
                style={{
                  background: `linear-gradient(to top, ${accent}40 0%, transparent 100%)`,
                }}
                aria-hidden
              />
              <span className="universe-char-card__body">
                <span className="universe-char-card__bar" style={{ background: accent }} aria-hidden />
                <span className="universe-char-card__name">{char.name}</span>
                <span className="universe-char-card__universe">{char.universe}</span>
              </span>
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="universe-detail">
          <div className="universe-detail__image">
            <Image
              src={selected.image}
              alt={selected.name}
              fill
              className="object-cover object-top"
              sizes="200px"
            />
          </div>
          <div>
            <p className="universe-detail__eyebrow">{selected.universe}</p>
            <h3 className="universe-detail__name">{selected.name}</h3>
            <p className="universe-detail__bio">{selected.bio}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
