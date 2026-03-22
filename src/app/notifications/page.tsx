import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { fetchNotifications } from "@/services/healthcare-service";

export default async function NotificationsPage() {
  const notifications = await fetchNotifications();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Notifications"
        subtitle="Priority-driven alerts for appointments, follow-ups, and safety events."
      />
      <div className="space-y-3">
        {notifications.map((item) => (
          <div key={item.id} className="rounded-xl border border-border/70 bg-card p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold uppercase text-muted-foreground">{item.category}</p>
              <Badge
                variant={item.priority === "HIGH" ? "destructive" : "secondary"}
                className={item.priority === "HIGH" ? "bg-red-100 text-red-700" : ""}
              >
                {item.priority}
              </Badge>
            </div>
            <p className="mt-2 text-base font-semibold">{item.message}</p>
            <p className="mt-1 text-xs text-muted-foreground">{new Date(item.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
