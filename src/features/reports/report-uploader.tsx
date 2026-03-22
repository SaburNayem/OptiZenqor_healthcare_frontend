"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReportUploader() {
  const [fileName, setFileName] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <Card className="rounded-2xl border-border/70">
      <CardHeader>
        <CardTitle>Upload Report (PDF/Image)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border p-8 text-center">
          <UploadCloud className="mb-2 size-6 text-primary" />
          <span className="text-sm font-semibold">Click to upload a report</span>
          <input
            type="file"
            className="hidden"
            accept=".pdf,image/*"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
          />
        </label>
        <Button onClick={() => setGenerated(Boolean(fileName))}>Analyze Report</Button>
        {generated ? (
          <div className="rounded-xl border border-border bg-muted/20 p-4 text-sm text-muted-foreground">
            <p>Detected report type: Pathology Panel</p>
            <p>AI summary: Findings suggest mild inflammation; clinical follow-up advised.</p>
            <p>Abnormal highlights: ESR slightly elevated.</p>
            <p>Confidence level: 82%</p>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
