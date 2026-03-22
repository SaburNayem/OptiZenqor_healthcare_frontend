import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { SlotBooker } from "@/features/appointments/slot-booker";
import { fetchAppointments } from "@/services/healthcare-service";

export default async function AppointmentsPage() {
  const appointments = await fetchAppointments();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Appointment Booking"
        subtitle="Book in real time and monitor status across upcoming, ongoing, completed, and cancelled visits."
      />
      <SlotBooker />
      <Card className="rounded-2xl border-border/70">
        <CardHeader>
          <CardTitle>Appointment Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          {appointments.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border border-border/60 p-3">
              <div>
                <p className="font-semibold text-foreground">{item.doctorName}</p>
                <p>{new Date(item.dateTime).toLocaleString()}</p>
              </div>
              <Badge variant="secondary">{item.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
