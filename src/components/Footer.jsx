import { profile } from "@/data/profile";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 text-sm text-muted sm:px-8">
      © {currentYear} {profile.name}
    </footer>
  );
}
