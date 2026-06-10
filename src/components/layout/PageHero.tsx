import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <div className="page-offset">
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden />
        <div className="page-hero__inner site-container">
          <span className="page-hero__eyebrow">{eyebrow}</span>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__description">{description}</p>
          {children}
        </div>
      </section>
    </div>
  );
}

function PrimaryButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#f5c518] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[#d4a910]"
      style={{ fontFamily: "var(--font-sora)" }}
    >
      {label}
    </Link>
  );
}

export { PrimaryButton };
