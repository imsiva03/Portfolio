import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.github, label: "GitHub" },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {socialLinks.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          {label} <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
