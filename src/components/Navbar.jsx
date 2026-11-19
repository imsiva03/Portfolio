import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/#about", label: "about" },
  { href: "/#projects", label: "projects" },
  { href: "/#skills", label: "skills" },
  { href: "/#contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
