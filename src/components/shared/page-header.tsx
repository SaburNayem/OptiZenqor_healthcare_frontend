import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <header className={cn("space-y-2", className)}>
      <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h1>
      <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
    </header>
  );
}
