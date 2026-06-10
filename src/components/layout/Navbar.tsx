"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { LOGOS, NAV_MAIN, NAV_MORE } from "@/lib/constants";
import SearchDialog from "@/components/layout/SearchDialog";
import { cn } from "@/lib/cn";

type NavbarMenusProps = {
  scrolled: boolean;
  onSearchOpen: () => void;
};

function NavbarMenus({ scrolled, onSearchOpen }: NavbarMenusProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileMoreOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((open) => {
      if (open) setMobileMoreOpen(false);
      return !open;
    });
  };

  useEffect(() => {
    if (!moreOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (moreRef.current?.contains(e.target as Node)) return;
      setMoreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    const frame = window.requestAnimationFrame(() => {
      document.addEventListener("pointerdown", onPointerDown);
    });
    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const base = href.split("?")[0];
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  const navLinkClass = (href: string) => cn("nav-link", isActive(href) && "nav-link--active");

  return (
    <header
      className={cn("nav-header fixed top-0 right-0 left-0 z-50", scrolled && "nav-header--scrolled")}
    >
      <div className="border-b border-white/[0.06]">
        <div className="site-shell">
          <div className="nav-top-row">
            <div className="nav-utility">
              <Link href="/signup" className="nav-utility-link hidden md:inline">
                Sign up
              </Link>
              <span className="nav-utility-divider hidden md:inline" aria-hidden>
                |
              </span>
              <Link href="/login" className="nav-utility-link hidden md:inline">
                Login
              </Link>
              <span className="nav-utility-divider hidden md:inline" aria-hidden>
                |
              </span>
              <button
                type="button"
                className="nav-utility-link inline-flex p-1"
                aria-label="Search"
                onClick={onSearchOpen}
              >
                <Search size={15} strokeWidth={2} />
              </button>
            </div>

            <Link href="/" className="nav-logo-link justify-self-center" aria-label="Afriwood Studios home">
              <Image
                src={LOGOS.studios}
                alt="Afriwood Studios"
                width={160}
                height={48}
                className="nav-logo-image"
                priority
              />
            </Link>

            <div className="nav-actions">
              <Link href="/store" className="nav-cta nav-cta--header">
                Shop Now
              </Link>
              <button
                type="button"
                className="nav-menu-toggle nav-utility-link"
                onClick={toggleMobileMenu}
                aria-expanded={mobileOpen}
                aria-controls="nav-mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-main-row hidden lg:block">
        <div className="site-shell">
          <nav className="nav-main" aria-label="Main">
            {NAV_MAIN.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}

            <div className="nav-more" ref={moreRef}>
              <button
                type="button"
                id="nav-more-trigger"
                className={cn("nav-link inline-flex items-center gap-1", moreOpen && "nav-link--active")}
                onClick={(e) => {
                  e.stopPropagation();
                  setMoreOpen((open) => !open);
                }}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                aria-controls="nav-more-menu"
              >
                More
                <ChevronDown
                  size={13}
                  className={cn("nav-more-chevron", moreOpen && "nav-more-chevron--open")}
                  aria-hidden
                />
              </button>
              {moreOpen ? (
                <div id="nav-more-menu" className="nav-dropdown" role="menu" aria-labelledby="nav-more-trigger">
                  {NAV_MORE.map((l) => (
                    <Link
                      key={l.href + l.label}
                      href={l.href}
                      className="nav-dropdown-link"
                      role="menuitem"
                      onClick={() => setMoreOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>
        </div>
      </div>

      <div
        id="nav-mobile-menu"
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 ease-out lg:hidden",
          mobileOpen ? "max-h-[calc(100dvh-var(--nav-height-mobile))]" : "max-h-0",
        )}
      >
        <div className="nav-mobile-panel site-shell max-h-[inherit] overflow-y-auto overscroll-contain py-4">
          {NAV_MAIN.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("nav-mobile-link", isActive(link.href) && "nav-mobile-link--active")}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            id="nav-mobile-more-trigger"
            className={cn("nav-mobile-more-toggle", mobileMoreOpen && "nav-mobile-more-toggle--open")}
            onClick={() => setMobileMoreOpen((v) => !v)}
            aria-expanded={mobileMoreOpen}
            aria-controls="nav-mobile-more-menu"
          >
            More
            <ChevronDown
              size={14}
              className={cn("nav-more-chevron", mobileMoreOpen && "nav-more-chevron--open")}
              aria-hidden
            />
          </button>

          {mobileMoreOpen ? (
            <div id="nav-mobile-more-menu" className="nav-mobile-submenu" role="menu" aria-labelledby="nav-mobile-more-trigger">
              {NAV_MORE.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={cn("nav-mobile-link nav-mobile-link--sub", isActive(link.href) && "nav-mobile-link--active")}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}

          <div className="mt-3 grid grid-cols-2 gap-3 pt-1">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-white/20 py-2.5 text-center font-sora text-sm text-white transition-colors hover:text-[var(--color-accent)]"
              onClick={closeMobileMenu}
            >
              Sign up
            </Link>
            <Link href="/store" className="nav-cta nav-cta--drawer" onClick={closeMobileMenu}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <NavbarMenus key={pathname} scrolled={scrolled} onSearchOpen={() => setSearchOpen(true)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
