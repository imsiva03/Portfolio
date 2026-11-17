"use client";
import { motion } from "motion/react";

export default function HireMeBadge() {
  return (
    <div className="relative h-24 w-24">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
      >
        <defs>
          <path id="ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
        </defs>
        <text fontSize="9" fontWeight="600" letterSpacing="1.6" fill="currentColor">
          <textPath href="#ring">PROGRAMMER · ANALYST · JAVA · REACT · </textPath>
        </text>
      </motion.svg>
      <a
        href="#contact"
        className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-center font-heading text-[10px] font-semibold leading-tight text-bg"
      >
        Hire me
      </a>
    </div>
  );
}
