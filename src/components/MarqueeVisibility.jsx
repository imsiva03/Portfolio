"use client";

import { useEffect } from "react";
import { observeAnimationVisibility } from "./animationVisibility";

export default function MarqueeVisibility() {
  useEffect(() => {
    const selectors = ".about-skills-viewport, .skill-ribbon";
    const cleanups = Array.from(document.querySelectorAll(selectors), (element) => {
      const stop = observeAnimationVisibility(element, (active) => {
        element.toggleAttribute("data-animation-visible", active);
      });
      return () => {
        stop();
        element.removeAttribute("data-animation-visible");
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
