import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { SiteContainer } from "@/components/layout/SectionContainer";

export default function MasterClassSection() {
  return (
    <section className="masterclass-section" aria-labelledby="masterclass-heading">
      <SiteContainer>
        <div className="masterclass-layout">
          <Link
            href="/masterclass"
            className="masterclass-media group"
            aria-label="Play MasterClass preview"
          >
            <Image
              src="/assets/comics/comic-3.png"
              alt=""
              fill
              className="masterclass-media__image"
              sizes="(max-width: 1023px) min(100vw, 520px), 520px"
            />
            <span className="masterclass-media__overlay">
              <span className="masterclass-play" aria-hidden>
                <Play size={18} className="ml-0.5 text-[var(--color-accent)]" fill="var(--color-accent)" />
              </span>
            </span>
          </Link>

          <div className="masterclass-body">
            <h2 id="masterclass-heading" className="masterclass-heading">
              MasterClass
            </h2>
            <p className="masterclass-description">
              Learn the art of comics, animation, and storytelling directly from the Afriwood creative team. Our
              immersive courses are designed to turn passion into profession.
            </p>
            <div className="masterclass-actions">
              <Link href="/masterclass" className="masterclass-link">
                All Courses
                <ArrowRight size={18} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
              </Link>
              <Link href="/masterclass" className="masterclass-subscribe">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
