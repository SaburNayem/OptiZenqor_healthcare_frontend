import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Stethoscope } from "lucide-react";
import { FeatureGrid } from "@/features/landing/feature-grid";
import { MotionIntro } from "@/features/landing/motion-intro";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 lg:px-10">
      <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-white/70 p-8 safety-shadow backdrop-blur-xl sm:p-14">
        <div className="absolute -left-14 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-14 bottom-0 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
        <MotionIntro>
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <ShieldCheck className="size-4" />
              Patient safety first
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
              Smarter Healthcare. Safer Decisions.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              OptiZenqor Healthcare combines trusted workflows with non-diagnostic
              AI guidance for global care journeys.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/auth/register"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Get Started <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/symptom-checker"
                className="inline-flex h-11 items-center rounded-xl border border-border bg-white/60 px-6 text-sm font-semibold transition hover:bg-white"
              >
                Check Symptoms
              </Link>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, text: "AI-safe" },
                { icon: Stethoscope, text: "Doctor Verified" },
                { icon: Globe2, text: "Global Ready" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="rounded-xl border border-border/70 bg-card px-4 py-3 text-sm font-semibold"
                >
                  <item.icon className="mr-2 inline-block size-4 text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </MotionIntro>
      </section>
      <FeatureGrid />
    </main>
  );
}
