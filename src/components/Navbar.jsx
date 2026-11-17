import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
      <nav aria-label="Primary" className="hidden gap-7 text-sm sm:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-accent">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#home"
        aria-label="Home"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-heading text-sm font-bold text-bg"
      >
        {profile.initials}
      </a>
      <div className="flex items-center gap-5 text-sm">
        <a href={profile.github} className="hover:text-accent">GitHub</a>
        <a href={profile.linkedin} className="hover:text-accent">LinkedIn</a>
        <ThemeToggle />
      </div>
    </header>
  );
}
