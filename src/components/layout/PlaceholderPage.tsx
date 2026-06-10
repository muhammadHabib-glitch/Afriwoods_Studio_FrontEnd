import Link from "next/link";
import { SiteContainer } from "@/components/layout/SectionContainer";
import PageHero, { PrimaryButton } from "@/components/layout/PageHero";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
  primaryCta = { href: "/", label: "Back to Home" },
  secondaryCta,
}: PlaceholderPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <div className="page-hero__actions">
          <PrimaryButton href={primaryCta.href} label={primaryCta.label} />
          {secondaryCta ? (
            <Link href={secondaryCta.href} className="universe-cta-btn universe-cta-btn--secondary">
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </PageHero>

      <section className="about-section about-section--dark">
        <SiteContainer size="narrow">
          <p className="text-center text-sm leading-relaxed text-white/50">
            This page is under active development. In the meantime, explore the{" "}
            <Link href="/" className="text-[var(--color-accent)] hover:underline">
              homepage
            </Link>
            ,{" "}
            <Link href="/universe" className="text-[var(--color-accent)] hover:underline">
              universe
            </Link>
            ,{" "}
            <Link href="/movies" className="text-[var(--color-accent)] hover:underline">
              films
            </Link>
            , and{" "}
            <Link href="/about" className="text-[var(--color-accent)] hover:underline">
              about
            </Link>{" "}
            sections.
          </p>
        </SiteContainer>
      </section>
    </>
  );
}
