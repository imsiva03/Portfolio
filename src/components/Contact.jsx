import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="my-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-ink p-8 text-bg sm:p-12">
      <div>
        <h2 className="font-heading text-3xl font-extrabold">Let&apos;s work together</h2>
        <p className="mt-2 text-sm opacity-80">
          Open to Programmer / Analyst roles in {profile.location}.
        </p>
      </div>
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-[#111]"
      >
        <Mail size={16} aria-hidden="true" /> {profile.email}
      </a>
    </section>
  );
}
