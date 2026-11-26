"use client";

import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const delay = 1000;
    const positions = [];
    let frame = 0;
    let hero = null;

    function resetHero() {
      hero?.style.removeProperty("--hero-float-x");
      hero?.style.removeProperty("--hero-float-y");
      hero = null;
    }

    function animate(now) {
      let position;
      while (positions.length && positions[0].time <= now - delay) {
        position = positions.shift();
      }
      if (position) {
        follower.style.setProperty("--float-x", position.x + "px");
        follower.style.setProperty("--float-y", position.y + "px");
        follower.classList.add("is-visible");
      }
      frame = positions.length ? requestAnimationFrame(animate) : 0;
    }

    function hide() {
      resetHero();
      positions.length = 0;
      cancelAnimationFrame(frame);
      frame = 0;
      follower.classList.remove("is-visible");
    }

    function move(event) {
      if (!media.matches || event.pointerType !== "mouse") return hide();
      const nextHero = event.target.closest?.(".hero-section");
      if (hero !== nextHero) {
        resetHero();
        hero = nextHero;
      }
      if (hero) {
        const bounds = hero.getBoundingClientRect();
        hero.style.setProperty("--hero-float-x", ((event.clientX - bounds.left) / bounds.width - 0.5) * 140 + "px");
        hero.style.setProperty("--hero-float-y", ((event.clientY - bounds.top) / bounds.height - 0.5) * 90 + "px");
      }

      positions.push({ x: event.clientX, y: event.clientY, time: performance.now() });
      if (!frame) frame = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    media.addEventListener("change", hide);
    return () => {
      hide();
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      media.removeEventListener("change", hide);
    };
  }, []);

  return <div ref={followerRef} className="cursor-follower" aria-hidden="true" />;
}
