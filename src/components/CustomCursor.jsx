"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;
    let visible = false;

    function animate() {
      const dx = targetX - x;
      const dy = targetY - y;
      const distance = Math.hypot(dx, dy);
      x += dx * .38;
      y += dy * .38;
      const stretch = Math.min(distance / 110, .45);
      const angle = Math.atan2(dy, dx);
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      cursor.style.setProperty("--cursor-stretch", 1 + stretch);
      cursor.style.setProperty("--cursor-angle", angle + "rad");
      frame = distance > .3 ? requestAnimationFrame(animate) : 0;
    }

    function hide() {
      visible = false;
      cancelAnimationFrame(frame);
      frame = 0;
      cursor.classList.remove("cursor-visible");
    }

    function move(event) {
      if (!media.matches || event.pointerType !== "mouse") return hide();
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) {
        x = targetX;
        y = targetY;
        visible = true;
        cursor.classList.add("cursor-visible");
      }
      cursor.classList.toggle("cursor-hover", Boolean(event.target.closest?.("a, button, [role='button']")));
      if (!frame) animate();
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

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="cursor-dot" />
      <ArrowUpRight className="cursor-arrow" size={16} />
    </div>
  );
}
