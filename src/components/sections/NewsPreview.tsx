import Link from "next/link";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";

const posts = [
  {
    title: "Fan Art Wednesday: Top Creations of the Week",
    date: "Oct 8, 2025",
    img: "/assets/news/news-1.png",
    excerpt:
      "Fans from across Africa shared their latest reimagined Afriwood characters — from Shutter-Bird to Udo.",
  },
  {
    title: "Afriwood Joins Lagos Animation Festival 2025",
    date: "Sep 29, 2025",
    img: "/assets/news/news-2.png",
    excerpt: "Catch our creators at LAFF this month — featuring sneak previews of new universe titles.",
  },
  {
    title: "New Comic Issue: Shutter-Bird Returns",
    date: "Sep 15, 2025",
    img: "/assets/news/news-3.png",
    excerpt: "The long-awaited second issue is here — explore new challenges as storms rise again.",
  },
];

export default function NewsPreview() {
  return (
    <section className="news-section" aria-label="Latest News and Updates">
      <SiteContainer>
        <SectionTitle subtitle="See what's new at Afriwood — events, fan art, and releases.">
          Latest News &amp; Updates
        </SectionTitle>

        <ul className="news-grid list-none">
          {posts.map((post) => (
            <li key={post.title} className="min-w-0">
              <Link href="/news" className="news-card group">
                <div className="news-card__media">
                  <Image
                    src={post.img}
                    alt=""
                    fill
                    className="news-card__image"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 360px"
                  />
                </div>
                <div className="news-card__titlebar">
                  <h3 className="news-card__title">{post.title}</h3>
                  <p className="news-card__date">{post.date}</p>
                </div>
                <div className="news-card__excerpt-wrap">
                  <p className="news-card__excerpt">{post.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="news-cta-wrap">
          <Link href="/news" className="news-cta">
            Read all News
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
