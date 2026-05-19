import Link from "next/link";
import { SiteContainer } from "@/components/layout/SectionContainer";

export default function NGOSection() {
  return (
    <section className="ngo-section" aria-labelledby="ngo-heading">
      <SiteContainer>
        <h2 id="ngo-heading" className="ngo-heading">
          Afriwood for Society: Empowering Youth, Preserving Culture.
        </h2>
        <p className="ngo-description">
          Through storytelling, art, and mentorship, Afriwood empowers young African creators — nurturing their
          voices to tell the continent&apos;s untold stories. We invest in local communities and cultural
          preservation.
        </p>
        <div className="ngo-actions">
          <Link href="/ngo" className="society-btn society-btn--primary">
            Learn More
          </Link>
          <Link href="/ngo" className="society-btn society-btn--outline">
            Support Our NGO
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
