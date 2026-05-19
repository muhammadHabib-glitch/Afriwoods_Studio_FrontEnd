"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/cn";

const SLIDE_INTERVAL_MS = 6000;

const slides = [
  {
    title: "Africa's First Superhero Universe",
    description:
      "When the skies fall silent, one hero rises with a lens sharper than light. Shutter-Bird returns to protect AfriCity from the shadows of its past.",
    image: "/assets/heroes/shutter-bird.png",
    alt: "Shutter-Bird",
  },
  {
    title: "Africa's First Superhero Universe",
    description:
      "Ije carries the spirit of the forest — young, fearless, and ready to defend a world that has forgotten its roots.",
    image: "/assets/heroes/hero-2.png",
    alt: "Ije",
  },
  {
    title: "Africa's First Superhero Universe",
    description:
      "Zazuu stands against the flames of fate. A warrior forged in fire, protecting AfriCity with unbreakable resolve.",
    image: "/assets/heroes/hero-3.png",
    alt: "Zazuu",
  },
  {
    title: "Africa's First Superhero Universe",
    description:
      "Udo watches from the edge of the world — calm, deliberate, and always one step ahead of the storm.",
    image: "/assets/heroes/hero-4.png",
    alt: "Udo",
  },
  {
    title: "Africa's First Superhero Universe",
    description:
      "Dragon moves through the shadows with precision and power — a guardian whose legend grows with every battle.",
    image: "/assets/heroes/hero-5.png",
    alt: "Dragon",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((prev) => (prev + 1) % slides.length);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = slides[active];

  return (
    <section
      className="hero-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured heroes"
    >
      <div className="hero-section__glow hero-glow-pulse" aria-hidden />

      <SiteContainer className="hero-inner">
        <div className="hero-grid">
          <div key={`copy-${active}`} className="hero-copy hero-text-enter">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-description">{slide.description}</p>
            <div className="hero-actions">
              <Link href="/universe" className="hero-btn hero-btn--primary">
                Explore the Universe
              </Link>
              <Link href="/store" className="hero-btn hero-btn--secondary">
                Read Comics Now
              </Link>
            </div>
          </div>

          <div className="hero-stage">
            {slides.map((item, index) => (
              <div
                key={item.alt}
                className={cn(
                  "hero-stage__layer",
                  index === active && "hero-character-enter",
                )}
                style={{ opacity: index === active ? 1 : 0 }}
              >
                <Image
                  src={item.image}
                  alt={index === active ? item.alt : ""}
                  fill
                  className="hero-stage__image"
                  priority={index === 0}
                  sizes="(max-width: 1023px) 100vw, 520px"
                />
              </div>
            ))}
            <div className="hero-stage__fade" />
          </div>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {slides.map((_, index) => {
            const isActive = index === active;
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goTo(index)}
                className={cn("hero-dot", isActive && "hero-dot--active")}
              />
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
