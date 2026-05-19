import Image from "next/image";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";

export default function FilmsInitiativeSection() {
  return (
    <section className="films-section" aria-label="Afriwood Films Initiative">
      <SiteContainer>
        <SectionTitle subtitle="Inspiring the Next Generation of African Storytellers">
          Afriwood Films Initiative
        </SectionTitle>
        <div className="films-banner">
          <Image
            src="/assets/backgrounds/bg-3.png"
            alt="Afriwood Films Initiative"
            fill
            className="films-banner__image"
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
          <div className="films-banner__overlay" aria-hidden />
        </div>
      </SiteContainer>
    </section>
  );
}
