import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import HireMeBadge from "./HireMeBadge";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse items-start gap-10 py-14 sm:flex-row sm:items-center sm:justify-between sm:py-20">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm text-muted">Hi, I&apos;m {profile.name}</p>
        <h1 className="font-heading text-4xl font-extrabold leading-[1.1] sm:text-5xl">
          {profile.headline}
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-bg transition hover:opacity-90"
          >
            <Download size={16} aria-hidden="true" /> Resume
          </a>
          <a href="#contact" className="border-b border-ink text-sm hover:border-accent hover:text-accent">
            Contact
          </a>
        </div>
      </div>

      {/* Compact photo block: swap the initials for <Image src="/images/profile.jpg" ... /> when you have a photo */}
      <div className="relative shrink-0">
        <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-line bg-tint font-heading text-3xl font-bold sm:h-40 sm:w-40">
          {profile.initials}
        </div>
        <div className="absolute -bottom-6 -left-8">
          <HireMeBadge />
        </div>
      </div>
    </section>
  );
}
