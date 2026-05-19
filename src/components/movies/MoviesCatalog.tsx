"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Clock, Film } from "lucide-react";
import { SiteContainer } from "@/components/layout/SectionContainer";
import Modal from "@/components/ui/Modal";
import { cn } from "@/lib/cn";
import { MOVIE_FILTERS, MOVIES, SOCIAL_LINKS, type MovieFilterId } from "@/lib/constants";

const statusColors: Record<string, string> = {
  "In Production": "#f5c518",
  Upcoming: "#2563eb",
  Development: "#8b5cf6",
  Released: "#16a34a",
};

function matchesFilter(categories: readonly string[], filter: MovieFilterId) {
  if (filter === "all") return true;
  if (filter === "phase1") return categories.includes("phase1");
  if (filter === "phase2") return categories.includes("phase2");
  if (filter === "trailers") return categories.includes("trailer");
  if (filter === "shorts") return categories.includes("short");
  return true;
}

function statusStyle(status: string): CSSProperties {
  const color = statusColors[status] ?? "#f5c518";
  return {
    color,
    borderColor: `${color}40`,
    backgroundColor: `${color}10`,
  };
}

export default function MoviesCatalog() {
  const [activeFilter, setActiveFilter] = useState<MovieFilterId>("all");
  const [trailerMovieId, setTrailerMovieId] = useState<string | null>(null);

  const filtered = useMemo(
    () => MOVIES.filter((m) => matchesFilter(m.categories, activeFilter)),
    [activeFilter],
  );

  const trailerMovie = MOVIES.find((m) => m.id === trailerMovieId);

  return (
    <>
      <section className="movies-filters-section" aria-label="Film categories">
        <SiteContainer>
          <div className="movies-filters scrollbar-hide" role="tablist">
            {MOVIE_FILTERS.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn("movies-filter-tab", active && "movies-filter-tab--active")}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </SiteContainer>
      </section>

      <section className="movies-catalog-section" aria-label="Film catalog">
        <SiteContainer>
          <div className="movies-list">
            {filtered.length === 0 ? (
              <p className="movies-empty">No titles in this category yet. Check back soon.</p>
            ) : (
              filtered.map((movie) => (
                <article key={movie.id} className="movies-card group">
                  <div className="movies-card__grid">
                    <div className="movies-card__poster">
                      <Image
                        src={movie.poster}
                        alt={`${movie.title} poster`}
                        fill
                        className="movies-card__poster-image"
                        sizes="(max-width: 1024px) 100vw, 360px"
                      />
                      <div className="movies-card__poster-shade" aria-hidden />
                      <button
                        type="button"
                        onClick={() => setTrailerMovieId(movie.id)}
                        className="movies-card__play"
                        aria-label={`Watch trailer for ${movie.title}`}
                      >
                        <span className="movies-card__play-icon">
                          <Play size={20} className="ml-0.5 text-white" aria-hidden />
                        </span>
                      </button>
                    </div>
                    <div className="movies-card__body">
                      <div>
                        <div className="movies-card__meta">
                          <span className="movies-status" style={statusStyle(movie.status)}>
                            {movie.status}
                          </span>
                          <span className="movies-card__meta-item">
                            <Film size={10} aria-hidden />
                            {movie.type}
                          </span>
                          <span className="movies-card__meta-item">
                            <Clock size={10} aria-hidden />
                            {movie.duration}
                          </span>
                          <span className="movies-card__meta-item movies-card__meta-item--phase">{movie.phase}</span>
                        </div>
                        <h2 className="movies-card__title">{movie.title}</h2>
                        <p className="movies-card__description">{movie.description}</p>
                      </div>
                      <div className="movies-card__actions">
                        <button
                          type="button"
                          onClick={() => setTrailerMovieId(movie.id)}
                          className="movies-card__btn movies-card__btn--primary"
                        >
                          <Play size={12} aria-hidden />
                          Watch Trailer
                        </button>
                        <Link href="/universe" className="movies-card__btn movies-card__btn--secondary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </SiteContainer>
      </section>

      <Modal
        open={!!trailerMovie}
        onClose={() => setTrailerMovieId(null)}
        title={trailerMovie ? `${trailerMovie.title} — Trailer` : "Trailer"}
        maxWidth="max-w-3xl"
      >
        {trailerMovie?.trailerYoutubeId ? (
          <div className="movies-modal-video">
            <iframe
              title={`${trailerMovie.title} trailer`}
              src={`https://www.youtube.com/embed/${trailerMovie.trailerYoutubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="movies-modal-copy space-y-4">
            <p className="movies-modal-text">
              The official trailer for <strong>{trailerMovie?.title}</strong> is coming soon. Follow Afriwood on
              YouTube for first access.
            </p>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="movies-modal-cta">
              Visit YouTube Channel
            </a>
          </div>
        )}
      </Modal>
    </>
  );
}
