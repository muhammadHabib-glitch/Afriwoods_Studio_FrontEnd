import Link from "next/link";
import Image from "next/image";
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";
import { FOOTER_POLICY_LINKS, FOOTER_QUICK_LINKS, FOOTER_SOCIALS } from "@/lib/constants";

const socialIcons = {
  youtube: FaYoutube,
  tiktok: FaTiktok,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  discord: FaDiscord,
} as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="site-footer__card">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-brand__pill" aria-label="Afriwood home">
                <span className="footer-brand__pill-text">AFRIWOOD</span>
              </Link>
              <div className="footer-brand__logo">
                <Image
                  src="/assets/ui/afriwood-comics-logo.png"
                  alt="Afriwood Comics"
                  fill
                  className="object-contain object-left"
                  sizes="70px"
                />
              </div>
            </div>

            <div>
              <h2 className="footer-heading">Quick Links</h2>
              <nav className="footer-links footer-links--grid" aria-label="Quick links">
                {FOOTER_QUICK_LINKS.map((l) => (
                  <Link key={l.label + l.href} href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="footer-heading">Legal</h2>
              <nav className="footer-links" aria-label="Policy links">
                {FOOTER_POLICY_LINKS.map((p) => (
                  <Link key={p.label} href={p.href} className="footer-link">
                    {p.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="footer-heading">Connect with Afriwood</h2>
              <div className="footer-socials">
                {FOOTER_SOCIALS.map(({ icon, href, label }) => {
                  const Icon = socialIcons[icon];
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      aria-label={label}
                    >
                      <Icon size={14} aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="site-footer__bar">
            <p className="site-footer__bar-text">&copy; {new Date().getFullYear()} Afriwood Studios. All rights reserved.</p>
            <p className="site-footer__bar-secure">
              <svg className="site-footer__lock-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Secured with SSL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
