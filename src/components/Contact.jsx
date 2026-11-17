import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section-block scroll-mt-16">
      <div className="contact-panel relative overflow-hidden rounded-3xl p-8 text-[#171717] sm:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full hero-glow-cyan blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-1/4 h-80 w-80 rounded-full hero-glow blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-bold tracking-[.2em] text-black/60 uppercase">Get in touch</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s collaborate.</h2>
            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Open to Programmer / Analyst roles in {profile.location}.
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#fffaf5] px-5 py-3.5 text-sm font-semibold text-[#171412] transition hover:-translate-y-0.5 hover:bg-white"
          >
            <Mail size={17} aria-hidden="true" /> Say hello <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
