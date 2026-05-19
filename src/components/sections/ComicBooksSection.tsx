import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";

type ComicItem = {
  title: string;
  date: string;
  issue: string;
  img: string;
};

const freeComics: ComicItem[] = [
  { title: "Whispers in the Wind", date: "Sep 10, 2021", issue: "Issue #3", img: "/assets/comics/comic-1.png" },
  { title: "Echoes in the Deep", date: "Oct 5, 2021", issue: "Issue #2", img: "/assets/comics/comic-2.png" },
  { title: "Rise of Shutter-Bird", date: "Nov 12, 2021", issue: "Issue #1", img: "/assets/comics/comic-3.png" },
  { title: "Cradle in the Sky", date: "Dec 1, 2021", issue: "Issue #4", img: "/assets/comics/comic-4.png" },
];

const newComics: ComicItem[] = [
  { title: "Whispers in the Wind", date: "Sep 10, 2021", issue: "Issue #3", img: "/assets/comics/comic-5.png" },
  { title: "Shutter-Bird Returns", date: "Jan 15, 2022", issue: "Issue #5", img: "/assets/comics/comic-6.png" },
  { title: "Zazuu Rising", date: "Feb 8, 2022", issue: "Issue #1", img: "/assets/comics/comic-7.png" },
  { title: "Ije: The Beginning", date: "Mar 3, 2022", issue: "Issue #1", img: "/assets/comics/comic-8.png" },
];

function ComicCard({ comic }: { comic: ComicItem }) {
  return (
    <article className="comics-card group">
      <div className="comics-card__cover">
        <Image
          src={comic.img}
          alt={comic.title}
          fill
          className="comics-card__image"
          sizes="(max-width: 1023px) 45vw, 260px"
        />
      </div>
      <div className="comics-card__body">
        <h3 className="comics-card__title">{comic.title}</h3>
        <div className="comics-card__meta">
          <span>{comic.date}</span>
          <span>{comic.issue}</span>
        </div>
        <Link href="/store" className="comics-card__read">
          Read
        </Link>
      </div>
    </article>
  );
}

type ComicBooksBlockProps = {
  title: string;
  comics: ComicItem[];
  variant: "free" | "new";
  showViewAll?: boolean;
};

function ComicBooksBlock({ title, comics, variant, showViewAll }: ComicBooksBlockProps) {
  return (
    <section
      className={`comics-section comics-section--${variant}`}
      aria-label={title}
    >
      <SiteContainer>
        <SectionTitle subtitle="Discover the epic phases that define our world.">{title}</SectionTitle>
        <ul className="comics-grid list-none">
          {comics.map((comic, index) => (
            <li key={`${comic.title}-${comic.issue}-${index}`} className="min-w-0">
              <ComicCard comic={comic} />
            </li>
          ))}
        </ul>
        {showViewAll ? (
          <div className="comics-section-cta">
            <Link href="/store" className="comics-section-cta-link">
              New Release Comics
              <ArrowRight size={18} className="shrink-0 text-[var(--color-accent)]" aria-hidden />
              <span className="comics-section-cta-pill">View All</span>
            </Link>
          </div>
        ) : null}
      </SiteContainer>
    </section>
  );
}

export default function ComicBooksSection() {
  return (
    <>
      <ComicBooksBlock title="Free Comic Books" comics={freeComics} variant="free" />
      <ComicBooksBlock title="New Release Comic Books" comics={newComics} variant="new" showViewAll />
    </>
  );
}
