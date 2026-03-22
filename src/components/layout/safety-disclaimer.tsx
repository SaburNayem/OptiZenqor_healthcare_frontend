import { AlertCircle } from "lucide-react";
import { GLOBAL_DISCLAIMER } from "@/lib/constants";

export function SafetyDisclaimer() {
  return (
    <div className="sticky bottom-0 z-50 border-t border-amber-300/60 bg-amber-50/95 px-4 py-3 text-sm text-amber-900 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 sm:px-2 lg:px-6">
        <AlertCircle className="size-4 shrink-0" />
        <p className="font-semibold">{GLOBAL_DISCLAIMER}</p>
      </div>
    </div>
  );
}
