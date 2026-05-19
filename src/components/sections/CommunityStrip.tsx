import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebookF, FaXTwitter, FaDiscord, FaTiktok } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/constants";
import { SiteContainer } from "@/components/layout/SectionContainer";
import SectionTitle from "@/components/layout/SectionTitle";

const socials = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: FaInstagram, color: "#e1306c", followers: "12K" },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, Icon: FaYoutube, color: "#ff0000", followers: "8K" },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, Icon: FaTiktok, color: "#f5c518", followers: "15K" },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, Icon: FaFacebookF, color: "#1877f2", followers: "5K" },
  { label: "Discord", href: SOCIAL_LINKS.discord, Icon: FaDiscord, color: "#5865f2", followers: "2K" },
  { label: "Twitter", href: SOCIAL_LINKS.twitter, Icon: FaXTwitter, color: "#1da1f2", followers: "6K" },
];

export default function CommunityStrip() {
  return (
    <section className="community-section" aria-label="Join the Afriwood Community">
      <SiteContainer>
        <SectionTitle subtitle="Fans worldwide. Fan Art Wednesdays, Shutter-Bird Fridays, contests, meetups, and more.">
          Join the Afriwood Community
        </SectionTitle>

        <ul className="community-grid">
          {socials.map(({ label, href, Icon, color, followers }) => (
            <li key={label} className="min-w-0">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="community-card"
                aria-label={`${label} — ${followers} followers`}
              >
                <span
                  className="community-card__icon-wrap"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={18} style={{ color }} aria-hidden />
                </span>
                <span className="community-card__followers">{followers}</span>
                <span className="community-card__label">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="community-cta-wrap">
          <Link href="/community" className="community-cta">
            Explore Community Hub
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
