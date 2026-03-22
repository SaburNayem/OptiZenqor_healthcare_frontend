import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { ReportUploader } from "@/features/reports/report-uploader";
import { fetchReports } from "@/services/healthcare-service";

export default async function ReportsPage() {
  const reports = await fetchReports();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10">
      <PageHeader
        title="Reports Intelligence"
        subtitle="Upload reports and receive structured AI summaries with confidence and abnormal highlights."
      />
      <ReportUploader />
      <Card className="rounded-2xl border-border/70">
        <CardHeader>
          <CardTitle>Recent Processed Reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          {reports.map((item) => (
            <div key={item.id} className="rounded-lg border border-border/60 p-3">
              <p className="font-semibold text-foreground">{item.fileName}</p>
              <p>Type: {item.reportType}</p>
              <p>Summary: {item.summary}</p>
              <p>Confidence: {Math.round(item.confidence * 100)}%</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
