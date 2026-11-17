import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="home" className="hero-section relative scroll-mt-20 overflow-hidden pb-0 pt-16 sm:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-[34rem] w-[34rem] rounded-full hero-glow blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-4 text-xs font-semibold tracking-[.2em] text-accent uppercase">Hi, I&apos;m</p>
        <h1 className="font-heading text-[clamp(2.4rem,8vw,5.5rem)] font-bold leading-[.95] tracking-[-.06em]">
          {profile.name}
        </h1>
        <p className="mt-4 font-heading text-2xl font-medium sm:text-4xl">
          <span className="text-accent">{profile.role}</span>
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#171717] transition hover:-translate-y-0.5 hover:brightness-105">
            <Download size={17} aria-hidden="true" /> Download CV
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent">
            View my work <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-6">
          <SocialLinks includeEmail />
        </div>
        <div className="hero-profile-card">
          <div className="hero-photo-frame">
            <Image
              src="/profile.png"
              alt={`${profile.name} portrait`}
              fill
              priority
              sizes="(max-width: 768px) 84vw, 416px"
              className="hero-portrait object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
