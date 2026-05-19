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
      <section className="relative overflow-hidden bg-[#0e0e0e] py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, #1a3a6e 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-6">
          <span
            className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#f5c518]"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {eyebrow}
          </span>
          <h1
            className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{description}</p>
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
