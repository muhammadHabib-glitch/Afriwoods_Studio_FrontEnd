"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { NAV_MAIN, NAV_MORE } from "@/lib/constants";
import SearchDialog from "@/components/layout/SearchDialog";
import { cn } from "@/lib/cn";

type NavbarMenusProps = {
  scrolled: boolean;
  onSearchOpen: () => void;
};

function NavbarMenus({ scrolled, onSearchOpen }: NavbarMenusProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useEffect(() => {
    if (!moreOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`) || pathname.startsWith(`${href}?`);
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

            <Link href="/" className="justify-self-center" aria-label="Afriwood Studios home">
              <div className="nav-logo-pill">
                <Image
                  src="/assets/ui/afriwood-comics-logo.png"
                  alt="Afriwood"
                  width={72}
                  height={28}
                  className="h-6 w-auto object-contain lg:h-7"
                  priority
                />
              </div>
            </Link>

            <div className="nav-actions">
              <Link href="/store" className="nav-cta nav-cta--header">
                Shop Now
              </Link>
              <button
                type="button"
                className="nav-menu-toggle nav-utility-link"
                onClick={() => setMobileOpen((v) => !v)}
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

            <div className="relative shrink-0" ref={moreRef}>
              <button
                type="button"
                className={cn("nav-link inline-flex items-center gap-1", moreOpen && "nav-link--active")}
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <ChevronDown
                  size={13}
                  className={cn("nav-more-chevron", moreOpen && "nav-more-chevron--open")}
                />
              </button>
              {moreOpen && (
                <div className="nav-dropdown" role="menu">
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
              )}
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
          {[...NAV_MAIN, ...NAV_MORE].map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={cn("nav-mobile-link", isActive(link.href) && "nav-mobile-link--active")}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3 pt-1">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full border border-white/20 py-2.5 text-center font-sora text-sm text-white transition-colors hover:text-[var(--color-accent)]"
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </Link>
            <Link href="/store" className="nav-cta nav-cta--drawer" onClick={() => setMobileOpen(false)}>
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
