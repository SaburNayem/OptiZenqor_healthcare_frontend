import Link from "next/link";
import { HeartPulse } from "lucide-react";

const links = [
  { href: "/patient", label: "Patient" },
  { href: "/symptom-checker", label: "Symptom Checker" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointments", label: "Appointments" },
  { href: "/reports", label: "Reports" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <HeartPulse className="size-5" />
          <span className="text-lg font-black tracking-tight">OptiZenqor Healthcare</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-semibold text-muted-foreground lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/auth/login"
          className="inline-flex h-9 items-center rounded-lg border border-border bg-card px-3 text-sm font-semibold transition hover:bg-muted"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
