"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
      <div className="max-w-lg rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
        <AlertTriangle className="mx-auto mb-3 size-7 text-red-600" />
        <h1 className="text-2xl font-extrabold text-red-700">Something went wrong</h1>
        <p className="mt-2 text-sm text-red-700/85">
          We were unable to complete this action safely. Please retry.
        </p>
        <Button className="mt-5" variant="destructive" onClick={reset}>
          Try Again
        </Button>
      </div>
    </main>
  );
}
