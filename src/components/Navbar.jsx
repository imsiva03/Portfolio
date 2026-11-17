"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" aria-label="Back to home" className="font-heading text-lg font-bold tracking-wide">
          {profile.initials}<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-tint hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-[#171717] transition hover:brightness-110 sm:block">
            Let&apos;s talk
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-accent hover:text-accent md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile" className="mobile-menu flex flex-col gap-1 px-5 py-3 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-3 py-2.5 text-sm text-muted transition hover:bg-tint hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
