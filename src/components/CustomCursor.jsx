 
"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      const target = event.target;

      setHovering(
        Boolean(
          target.closest(
            "a, button, .ws-card, [role='button']"
          )
        )
      );
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${
        hovering ? "cursor-hover" : ""
      } ${visible ? "cursor-visible" : ""}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      aria-hidden="true"
    >
     <span className="cursor-dot" />
    </div>
  );
}