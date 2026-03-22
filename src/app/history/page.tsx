import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/shared/page-header";
import { fetchHistoryTimeline } from "@/services/healthcare-service";

export default async function HistoryPage() {
  const timeline = await fetchHistoryTimeline();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Health Timeline"
        subtitle="Combined symptom checks, appointments, and reports in one longitudinal view."
      />

      {timeline.length === 0 ? (
        <EmptyState title="No history yet" description="Your care timeline will appear here." />
      ) : (
        <div className="space-y-3">
          {timeline.map((item) => (
            <div key={item.id} className="rounded-xl border border-border/70 bg-card p-4">
              <p className="text-sm font-bold uppercase tracking-wide text-primary">{item.type}</p>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              <p className="mt-1 text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
