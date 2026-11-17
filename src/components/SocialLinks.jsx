import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  {
    href: profile.github,
    label: "GitHub",
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.75-1.58-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.12-3.05 0 0 .98-.31 3.2 1.18a11.15 11.15 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.58.24 2.76.12 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.268 2.368 4.268 5.451v6.29zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.999 20.452H3.67V9h3.329v11.452zM5.337 1.5a3.837 3.837 0 1 0 0 7.674 3.837 3.837 0 0 0 0-7.674z",
  },
];

export default function SocialLinks({ includeEmail = false }) {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ href, label, path }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="social-icon-link"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d={path} />
          </svg>
        </a>
      ))}
      {includeEmail && (
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          title="Email"
          className="social-icon-link"
        >
          <Mail size={18} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
