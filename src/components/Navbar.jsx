
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = [
  "home",
  "about",
  "projects",
  "website-showcase",
  "contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Track the section currently visible on screen.
  useEffect(() => {
    let frame = null;

    const updateActive = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight;

      // Highlight Contact when reaching the bottom.
      if (
        scrollY + viewportHeight >=
        documentHeight - 40
      ) {
        setActive("#contact");
        return;
      }

      const navbarHeight =
        document.querySelector(".portfolio-navbar")
          ?.getBoundingClientRect().height || 80;

      const trigger =
        navbarHeight +
        Math.min(viewportHeight * 0.28, 180);

      let current = "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= trigger) {
          current = id;
        }
      }

      // Website Showcase is part of Work.
      if (current === "website-showcase") {
        current = "projects";
      }

      setActive(`#${current}`);
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;

      frame = requestAnimationFrame(() => {
        frame = null;
        updateActive();
      });
    };

    updateActive();

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });

    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);

    return () => {
      window.removeEventListener(
        "scroll",
        scheduleUpdate
      );

      window.removeEventListener(
        "resize",
        scheduleUpdate
      );

      window.removeEventListener(
        "load",
        scheduleUpdate
      );

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        closeOnEscape
      );
    };
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
          <Image src="/images/header-s-logo.png" alt="" width={70} height={70} />
        </a>

        {/* DESKTOP LINKS */}

        <div className="portfolio-navbar-links">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`portfolio-navbar-link ${
                  isActive ? "is-active" : ""
                }`}
                aria-current={
                  isActive ? "location" : undefined
                }
                onClick={() =>
                  handleNavigation(link.href)
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          className="portfolio-navbar-toggle"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          aria-label={
            menuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={menuOpen}
          aria-controls="portfolio-mobile-menu"
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}

      <div
        id="portfolio-mobile-menu"
        className={`portfolio-mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
        inert={!menuOpen}
      >
        {navLinks.map((link) => {
          const isActive = active === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`portfolio-mobile-link ${
                isActive ? "is-active" : ""
              }`}
              aria-current={
                isActive ? "location" : undefined
              }
              onClick={() =>
                handleNavigation(link.href)
              }
            >
              <span>{link.label}</span>

              <ArrowUpRight
                size={20}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>
    </header>
  );
}
