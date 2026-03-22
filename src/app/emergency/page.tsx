import Link from "next/link";
import { PhoneCall, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmergencyPage() {
  return (
    <main className="flex min-h-[75vh] w-full flex-1 items-center justify-center bg-red-600 px-4 py-10 text-white">
      <div className="w-full max-w-2xl space-y-5 rounded-3xl border border-red-200/40 bg-red-700/50 p-8 text-center">
        <h1 className="text-4xl font-black sm:text-5xl">Seek immediate medical attention</h1>
        <p className="text-lg text-red-50/90">
          Your current safety profile indicates potentially critical symptoms.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button className="bg-white text-red-700 hover:bg-red-50">
            <PhoneCall className="size-4" />
            Call Emergency
          </Button>
          <Link href="/doctors">
            <Button className="bg-red-900 text-white hover:bg-red-950">
              <Building2 className="size-4" />
              Find Nearest Hospital
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
