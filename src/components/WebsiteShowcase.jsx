
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./WebsiteShowcase.css";

/* ==========================================
   PROJECT DATA
========================================== */

const websites = [
  {
    name: "BELFORD",
    subtitle: "ENGLAND",
    category: "PREMIUM LEATHER GOODS",
    domain: "belfordengland.com",
    url: "https://belfordengland.com/",
    theme: "belford",
    desktop: "/images/projects/laptop/belford-england-laptop.webp",
    mobile: "/images/projects/mobile/belford-england-mobile.webp",
  },
  {
    name: "CARROMEL",
    subtitle: "ARTISAN CHOCOLATE",
    category: "CHOCOLATE & CONFECTIONERY",
    domain: "carromel.com",
    url: "https://carromel.com/",
    theme: "carromel",
    desktop: "/images/projects/laptop/carromel-laptop.webp",
    mobile: "/images/projects/mobile/carromel-mobile.webp",
  },
  {
    name: "MAX GOLD",
    subtitle: "GOLD SERVICES",
    category: "GOLD & FINANCIAL SERVICES",
    domain: "maxgold.cash",
    url: "https://www.maxgold.cash/",
    theme: "maxgold",
    desktop: "/images/projects/laptop/max-gold-laptop.webp",
    mobile: "/images/projects/mobile/max-gold-mobile.webp",
  },
  {
    name: "UNITE",
    subtitle: "HAIR",
    category: "PROFESSIONAL HAIRCARE",
    domain: "unitehair.com",
    url: "https://unitehair.com/",
    theme: "unite",
    desktop: "/images/projects/laptop/unite-hair-laptop.webp",
    mobile: "/images/projects/mobile/unite-hair-mobile.webp",
  },
  {
    name: "WEBOIN",
    subtitle: "DIGITAL AGENCY",
    category: "DIGITAL EXPERIENCES",
    domain: "dev.weboin.com",
    url: "https://dev.weboin.com/",
    theme: "weboin",
    desktop: "/images/projects/laptop/weboin-laptop.webp",
    mobile: "/images/projects/mobile/weboin-mobile.webp",
  },
  {
    name: "FORMA DESIGN",
    subtitle: "STUDIO",
    category: "CREATIVE DESIGN",
    domain: "formadesignstudio.vercel.app",
    url: "https://formadesignstudio.vercel.app/",
    theme: "forma",
    desktop: "/images/projects/laptop/forma-design-studio-laptop.webp",
    mobile: "/images/projects/mobile/forma-design-studio-mobile.webp",
  },
  {
    name: "WIPFIN",
    subtitle: "FINANCE & ACCOUNTING",
    category: "ACCOUNTING SERVICES",
    domain: "wipfin.com",
    url: "https://wipfin.com/",
    theme: "wipfin",
    desktop: "/images/projects/laptop/wipfin-laptop.webp",
    mobile: "/images/projects/mobile/wipfin-mobile.webp",
  },
];

/* ==========================================
   ANIMATION SETTINGS
========================================== */

const AUTO_SPEED = 35;
const MANUAL_DURATION = 550;

function wrapPosition(value, width) {
  if (!width) return 0;
  return ((value % width) + width) % width;
}

/* ==========================================
   DESKTOP + MOBILE PREVIEW
========================================== */

function WebsitePreview({ website }) {
  return (
    <div className="ws-device-stage">
      {/* DESKTOP MONITOR */}

      <div className="ws-desktop-device">
        <div className="ws-desktop-screen">
          <img
            src={website.desktop}
            alt={`${website.name} desktop homepage`}
            loading="lazy"
            draggable={false}
          />
        </div>

        <div className="ws-monitor-neck" />
        <div className="ws-monitor-foot" />
      </div>

      {/* MOBILE PHONE */}

      <div className="ws-mobile-device">
        <div className="ws-mobile-screen">
          <img
            src={website.mobile}
            alt={`${website.name} mobile homepage`}
            loading="lazy"
            draggable={false}
          />
        </div>

        <div className="ws-mobile-notch" />
      </div>
    </div>
  );
}

/* ==========================================
   PROJECT CARD
========================================== */

function WebsiteCard({ website, duplicate = false }) {
  return (
    <article
      className={`ws-card ws-${website.theme}`}
      aria-label={`${website.name} project`}
      aria-hidden={duplicate ? true : undefined}
      inert={duplicate}
    >
      <div className="ws-card-top">
        <span className="ws-category">
          {website.category}
        </span>
      </div>

      <div className="ws-brand">
        <h3>{website.name}</h3>
        <span>{website.subtitle}</span>
      </div>

      <div className="ws-orbit" aria-hidden="true" />

      <WebsitePreview website={website} />

      <div className="ws-card-footer">
        <strong>{website.domain}</strong>

        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${website.name}`}
          tabIndex={duplicate ? -1 : 0}
        >
          <ArrowUpRight
            size={20}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

/* ==========================================
   WEBSITE SHOWCASE
========================================== */

export default function WebsiteShowcase() {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);

  const positionRef = useRef(0);
  const pointerRef = useRef(null);

  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);
  const pausedRef = useRef(false);

  const manualMoveRef = useRef(null);

  const [reducedMotion, setReducedMotion] = useState(false);

  /* ========================================
     ACCESSIBILITY
  ======================================== */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReducedMotion(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  /* ========================================
     INFINITE AUTOMATIC SCROLLING
  ======================================== */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    if (reducedMotion) {
      track.style.transform = "none";
      manualMoveRef.current = null;
      return;
    }

    let frameId;
    let previousTime = 0;

    const firstSet = track.querySelector(".ws-card-set");

    const animate = (time) => {
      const delta = previousTime
        ? Math.min(time - previousTime, 50)
        : 0;

      previousTime = time;

      const width = firstSet?.offsetWidth || 0;

      if (width > 0) {
        const manual = manualMoveRef.current;

        if (manual) {
          if (manual.start === null) {
            manual.start = time;
          }

          const progress = Math.min(
            (time - manual.start) / MANUAL_DURATION,
            1
          );

          const eased =
            1 - Math.pow(1 - progress, 3);

          positionRef.current =
            manual.from +
            (manual.to - manual.from) * eased;

          if (progress >= 1) {
            positionRef.current = manual.to;
            manualMoveRef.current = null;
          }
        } else if (!pausedRef.current) {
          positionRef.current +=
            (delta * AUTO_SPEED) / 1000;
        }

        /*
          The three sets contain identical cards.

          [Previous copy] [Original] [Next copy]

          The wrapped position keeps the track
          seamlessly repeating in either direction.
        */

        const normalized = wrapPosition(
          positionRef.current,
          width
        );

        track.style.transform =
          `translate3d(-${width + normalized}px, 0, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [reducedMotion]);

  /* ========================================
     PAUSE / RESUME
  ======================================== */

  const syncPause = () => {
    pausedRef.current =
      hoveredRef.current ||
      focusedRef.current ||
      Boolean(pointerRef.current);
  };

  const handlePointerOver = (event) => {
    if (event.pointerType === "touch") return;

    hoveredRef.current = Boolean(
      event.target.closest(".ws-card")
    );

    syncPause();
  };

  const handlePointerOut = (event) => {
    if (event.pointerType === "touch") return;

    hoveredRef.current = Boolean(
      event.relatedTarget?.closest?.(".ws-card")
    );

    syncPause();
  };

  /* ========================================
     PREVIOUS / NEXT
  ======================================== */

  const moveProjects = (direction) => {
    const firstSet =
      trackRef.current?.querySelector(".ws-card-set");

    const firstCard =
      firstSet?.querySelector(".ws-card");

    if (!firstSet || !firstCard) return;

    const styles = getComputedStyle(firstSet);

    const gap =
      parseFloat(styles.columnGap) || 0;

    const step = firstCard.offsetWidth + gap;

    if (reducedMotion) {
      viewportRef.current?.scrollBy({
        left: direction * step,
        behavior: "auto",
      });
      return;
    }

    manualMoveRef.current = {
      from: positionRef.current,
      to: positionRef.current + direction * step,
      start: null,
    };
  };

  /* ========================================
     POINTER DRAG / MOBILE SWIPE
  ======================================== */

  const handlePointerDown = (event) => {
    if (
      reducedMotion ||
      event.target.closest("a") ||
      (event.pointerType === "mouse" &&
        event.button !== 0)
    ) {
      return;
    }

    manualMoveRef.current = null;

    pointerRef.current = {
      id: event.pointerId,
      x: event.clientX,
      position: positionRef.current,
    };

    syncPause();

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

  const handlePointerMove = (event) => {
    const pointer = pointerRef.current;

    if (pointer) {
      if (pointer.id !== event.pointerId) return;

      const deltaX = event.clientX - pointer.x;

      const firstSet =
        trackRef.current?.querySelector(
          ".ws-card-set"
        );

      const width = firstSet?.offsetWidth || 0;

      if (width > 0) {
        positionRef.current =
          pointer.position - deltaX;

        const normalized = wrapPosition(
          positionRef.current,
          width
        );

        trackRef.current.style.transform =
          `translate3d(-${width + normalized}px, 0, 0)`;
      }

      return;
    }

    if (event.pointerType !== "touch") {
      hoveredRef.current = Boolean(
        event.target.closest(".ws-card")
      );

      syncPause();
    }
  };

  const handlePointerUp = (event) => {
    const pointer = pointerRef.current;

    if (pointer && pointer.id !== event.pointerId) {
      return;
    }

    pointerRef.current = null;

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }

    if (event.pointerType === "touch") {
      hoveredRef.current = false;
    } else {
      const element = document.elementFromPoint(
        event.clientX,
        event.clientY
      );

      hoveredRef.current = Boolean(
        element?.closest(".ws-card")
      );
    }

    syncPause();
  };

  /* ========================================
     RENDER
  ======================================== */

  return (
    <section
      className="website-showcase"
      aria-labelledby="website-showcase-title"
    >
      {/* LEFT-ALIGNED TITLE + RIGHT ARROWS */}

      <div className="ws-section-heading">
        <div className="ws-heading-copy">
          <span className="ws-section-label">
            SELECTED COLLABORATIONS
          </span>

          <h2 id="website-showcase-title">
            Projects I've{" "}
            <span>Worked With.</span>
          </h2>
        </div>

        <div
          className="ws-navigation"
          role="group"
          aria-label="Project carousel navigation"
        >
          <button
            type="button"
            className="ws-nav-button"
            onClick={() => moveProjects(-1)}
            aria-label="Previous project"
            title="Previous project"
          >
            <ArrowLeft
              size={20}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="ws-nav-button"
            onClick={() => moveProjects(1)}
            aria-label="Next project"
            title="Next project"
          >
            <ArrowRight
              size={20}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}

      <div
        ref={viewportRef}
        className="ws-marquee-viewport"
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={() => {
          hoveredRef.current = false;
          syncPause();
        }}
        onFocusCapture={() => {
          focusedRef.current = true;
          syncPause();
        }}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(
              event.relatedTarget
            )
          ) {
            focusedRef.current = false;
            syncPause();
          }
        }}
      >
        <div
          className="ws-marquee-track"
          ref={trackRef}
        >
          {/* BEFORE COPY */}

          {!reducedMotion && (
            <div
              className="ws-card-set"
              aria-hidden="true"
              inert
            >
              {websites.map((website) => (
                <WebsiteCard
                  key={`before-${website.name}`}
                  website={website}
                  duplicate
                />
              ))}
            </div>
          )}

          {/* ORIGINAL PROJECTS */}

          <div className="ws-card-set">
            {websites.map((website) => (
              <WebsiteCard
                key={website.name}
                website={website}
              />
            ))}
          </div>

          {/* AFTER COPY */}

          {!reducedMotion && (
            <div
              className="ws-card-set"
              aria-hidden="true"
              inert
            >
              {websites.map((website) => (
                <WebsiteCard
                  key={`after-${website.name}`}
                  website={website}
                  duplicate
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
