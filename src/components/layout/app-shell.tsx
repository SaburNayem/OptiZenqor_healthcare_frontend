import { RouteTransition } from "@/components/layout/route-transition";
import { SafetyDisclaimer } from "@/components/layout/safety-disclaimer";
import { SiteHeader } from "@/components/layout/site-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <RouteTransition>{children}</RouteTransition>
      <SafetyDisclaimer />
    </div>
  );
}
