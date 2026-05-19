import type { Metadata } from "next";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/SectionContainer";
import MoviesCatalog from "@/components/movies/MoviesCatalog";

export const metadata: Metadata = {
  title: "Movies",
  description:
    "Afriwood Motion Pictures — short films, trailers, teasers, and the upcoming animation series.",
};

export default function MoviesPage() {
  return (
    <div className="page-offset">
      <section className="movies-page-hero" aria-labelledby="movies-page-title">
        <Image
          src="/assets/backgrounds/bg-4.png"
          alt=""
          fill
          className="movies-page-hero__bg"
          sizes="100vw"
          priority
          aria-hidden
        />
        <div className="movies-page-hero__glow" aria-hidden />
        <SiteContainer className="movies-page-hero__inner">
          <span className="universe-eyebrow">Afriwood Motion Pictures</span>
          <h1 id="movies-page-title" className="movies-page-title">
            Films &amp; Animation
          </h1>
          <p className="movies-page-lead">
            Short films, animated series, trailers, and teasers. Watch the Afriwood Universe come to life on screen.
          </p>
        </SiteContainer>
      </section>
      <MoviesCatalog />
    </div>
  );
}
