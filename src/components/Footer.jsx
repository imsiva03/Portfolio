import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-7 text-sm text-muted sm:px-8">
      <p>© {currentYear} {profile.name}. Built with care.</p>
      <div className="flex items-center gap-4">
        <SocialLinks />
        <a href="#home" className="transition hover:text-accent">Back to top ↑</a>
      </div>
    </footer>
  );
}
