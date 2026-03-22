import { PageHeader } from "@/components/shared/page-header";
import { SymptomCheckerFlow } from "@/features/symptom-checker/symptom-checker-flow";

export default function SymptomCheckerPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Symptom Checker"
        subtitle="Non-diagnostic AI guidance to support safer next-step decisions."
      />
      <SymptomCheckerFlow />
    </main>
  );
}
