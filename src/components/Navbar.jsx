
"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];

    const updateActive = () => {
      const offset = window.scrollY + 160;
      let current = "#home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= offset) {
          current = `#${id}`;
        }
      });

      setActive(current);
    };

    updateActive();

    window.addEventListener("scroll", updateActive, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", updateActive);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () =>
      window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const handleNavigation = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className="portfolio-navbar">
      <nav
        className="portfolio-navbar-inner"
        aria-label="Main navigation"
      >
        {/* LOGO */}

        <a
          href="#home"
          className="portfolio-navbar-logo"
          onClick={() => handleNavigation("#home")}
          aria-label="Sivasankaran - Home"
        >
          SN
        </a>

        {/* DESKTOP LINKS */}

        <div className="portfolio-navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`portfolio-navbar-link ${
                active === link.href ? "is-active" : ""
              }`}
              aria-current={
                active === link.href ? "location" : undefined
              }
              onClick={() => handleNavigation(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}

        <button
          type="button"
          className="portfolio-navbar-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="portfolio-mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}

      <div
        id="portfolio-mobile-menu"
        className={`portfolio-mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
        inert={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`portfolio-mobile-link ${
              active === link.href ? "is-active" : ""
            }`}
            onClick={() => handleNavigation(link.href)}
          >
            <span>{link.label}</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        ))}
      </div>
    </header>
  );
}
