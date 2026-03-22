import { Users, UserRoundCheck, CalendarHeart, Siren } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { fetchAppointments, fetchDoctors, fetchNotifications } from "@/services/healthcare-service";

export default async function AdminPage() {
  const [doctors, appointments, notifications] = await Promise.all([
    fetchDoctors(),
    fetchAppointments(),
    fetchNotifications(),
  ]);

  const analytics = [
    { label: "All users", value: "18,402", icon: Users },
    { label: "All doctors", value: String(doctors.length), icon: UserRoundCheck },
    { label: "All appointments", value: String(appointments.length), icon: CalendarHeart },
    {
      label: "Risk alerts",
      value: String(notifications.filter((item) => item.priority === "HIGH").length),
      icon: Siren,
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Admin Dashboard"
        subtitle="Global control center for users, doctors, appointments, and platform risk analytics."
      />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {analytics.map((item) => (
          <Card key={item.label} className="rounded-2xl border-border/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <item.icon className="size-4 text-primary" />
                {item.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-black">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
