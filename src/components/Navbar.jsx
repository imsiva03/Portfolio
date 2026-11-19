
import Link from "next/link";
import { profile } from "@/data/profile";
import "./Navbar.css";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav-inner">
        <Link
          href="/#home"
          className="site-brand"
          aria-label={`${profile.name} home`}
        >
          {profile.initials}
        </Link>

        <div className="site-nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
