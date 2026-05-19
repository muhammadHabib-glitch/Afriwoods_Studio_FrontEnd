import Link from "next/link";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/SectionContainer";

export default function AcademySection() {
  return (
    <section className="academy-section" aria-labelledby="academy-heading">
      <SiteContainer>
        <div className="academy-layout">
          <div className="academy-media">
            <Image
              src="/assets/comics/comic-2.png"
              alt="Students at Afriwood Academy"
              fill
              className="academy-media__image"
              sizes="(max-width: 1023px) min(100vw, 520px), 520px"
            />
          </div>
          <div className="academy-body">
            <h2 id="academy-heading" className="academy-heading">
              Afriwood Academy — Training Africa&apos;s Next Creative Leaders.
            </h2>
            <p className="academy-description">
              Learn the art of comics, animation, and storytelling directly from the Afriwood creative team. Our
              immersive courses are designed to turn passion into profession.
            </p>
            <Link href="/academy" className="society-btn society-btn--primary">
              Join Academy
            </Link>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
