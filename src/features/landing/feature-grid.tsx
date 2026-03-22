import Link from "next/link";
import { Stethoscope, CalendarClock, Upload, ShieldAlert, Activity, Globe } from "lucide-react";

const features = [
  {
    title: "Smart Symptom Checker",
    description: "Guided, safety-first intake with urgency triage and care recommendations.",
    href: "/symptom-checker",
    icon: Activity,
  },
  {
    title: "Find Doctors Worldwide",
    description: "Search global specialists by rating, availability, and domain expertise.",
    href: "/doctors",
    icon: Globe,
  },
  {
    title: "Book Appointments Instantly",
    description: "Real-time appointment slots for online and in-person consultations.",
    href: "/appointments",
    icon: CalendarClock,
  },
  {
    title: "Upload & Analyze Reports",
    description: "Structured AI summaries with confidence and abnormal finding highlights.",
    href: "/reports",
    icon: Upload,
  },
  {
    title: "Emergency Safety Detection",
    description: "Critical symptoms trigger immediate emergency guidance and alerts.",
    href: "/emergency",
    icon: ShieldAlert,
  },
  {
    title: "Doctor-Centered Follow-up",
    description: "Clinical context snapshots to support safer continuity of care.",
    href: "/patient",
    icon: Stethoscope,
  },
];

export function FeatureGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <Link
          key={feature.title}
          href={feature.href}
          className="group rounded-2xl border border-border/70 bg-card/85 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:safety-shadow"
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <feature.icon className="mb-3 size-6 text-primary" />
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
        </Link>
      ))}
    </section>
  );
}
