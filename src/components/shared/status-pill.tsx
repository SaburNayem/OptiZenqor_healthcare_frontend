import { URGENCY_COLORS } from "@/lib/constants";
import { UrgencyLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

interface StatusPillProps {
  level: UrgencyLevel;
}

export function StatusPill({ level }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold tracking-wide",
        URGENCY_COLORS[level]
      )}
    >
      {level}
    </span>
  );
}
