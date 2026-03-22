import { PageHeader } from "@/components/shared/page-header";
import { DoctorSearch } from "@/features/doctors/doctor-search";
import { fetchDoctors } from "@/services/healthcare-service";

export default async function DoctorsPage() {
  const doctors = await fetchDoctors();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Doctor Discovery"
        subtitle="Filter global specialists by expertise, ratings, experience, and availability."
      />
      <DoctorSearch doctors={doctors} />
    </main>
  );
}
