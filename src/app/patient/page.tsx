import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { fetchAppointments, fetchReports, fetchNotifications } from "@/services/healthcare-service";

export default async function PatientDashboardPage() {
  const [appointments, reports, notifications] = await Promise.all([
    fetchAppointments(),
    fetchReports(),
    fetchNotifications(),
  ]);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Welcome back, Patient"
        subtitle="Your health summary, upcoming actions, and report insights in one calm workspace."
      />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Symptom Checker", "/symptom-checker"],
          ["Book Appointment", "/appointments"],
          ["Upload Report", "/reports"],
          ["View History", "/history"],
        ].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="rounded-xl border border-border/70 bg-card p-4 text-sm font-bold transition hover:border-primary/40"
          >
            {label}
          </Link>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="rounded-2xl border-border/70">
          <CardHeader>
            <CardTitle>Upcoming appointments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {appointments.map((item) => (
              <p key={item.id}>
                {item.doctorName} · {new Date(item.dateTime).toLocaleString()}
              </p>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/70">
          <CardHeader>
            <CardTitle>Recent reports</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {reports.map((item) => (
              <p key={item.id}>
                {item.fileName} · {item.reportType}
              </p>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-border/70">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {notifications.map((item) => (
              <p key={item.id}>{item.message}</p>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
