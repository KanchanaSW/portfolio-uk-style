"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { siteConfig } from "@config/site.config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background transition-colors no-print",
        scrolled && "border-border"
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="min-w-0 shrink group">
          <span className="block truncate font-serif text-base font-medium tracking-tight text-foreground group-hover:text-accent">
            {siteConfig.name}
          </span>
          <span className="block truncate text-xs text-muted">{siteConfig.role}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.cvUrl}
            className="btn-primary"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            Download CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background lg:hidden"
        >
          <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-2.5 text-sm text-foreground hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.cvUrl}
              className="btn-primary mt-2"
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
