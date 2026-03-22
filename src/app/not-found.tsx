import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-extrabold">Page not found</h1>
        <p className="text-muted-foreground">
          The requested route could not be found. Return to the safer care dashboard.
        </p>
        <Link href="/patient">
          <Button>Go to Patient Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}
