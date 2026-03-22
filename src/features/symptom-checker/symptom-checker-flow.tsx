"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StatusPill } from "@/components/shared/status-pill";
import { runSymptomAssessment } from "@/services/healthcare-service";
import { SymptomAssessmentResult } from "@/lib/types";

const symptoms = [
  "fever",
  "headache",
  "chest pain",
  "difficulty breathing",
  "fatigue",
  "cough",
  "nausea",
  "dizziness",
];

const safetyQuestions = [
  "Are you experiencing confusion or fainting?",
  "Do you have persistent severe chest pain?",
  "Is breathing difficult even at rest?",
];

export function SymptomCheckerFlow() {
  const [step, setStep] = useState(1);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const [age, setAge] = useState(35);
  const [gender, setGender] = useState<"male" | "female" | "other">("other");
  const [severity, setSeverity] = useState<"mild" | "moderate" | "severe">("mild");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<SymptomAssessmentResult | null>(null);

  const canProceed = useMemo(() => {
    if (step === 2) return selectedSymptoms.length > 0;
    return true;
  }, [step, selectedSymptoms.length]);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = () => {
    startTransition(async () => {
      const response = await runSymptomAssessment({
        age,
        gender,
        severity,
        symptoms: selectedSymptoms,
        safetyAnswers: answers,
      });

      setResult(response);
      if (response.emergencyTriggered) {
        router.push("/emergency");
      }
    });
  };

  return (
    <Card className="rounded-2xl border-border/70 bg-card/90 safety-shadow">
      <CardHeader>
        <CardTitle>Step {step} of 4</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 1 ? (
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Age</label>
              <Input
                type="number"
                min={1}
                max={120}
                value={age}
                onChange={(event) => setAge(Number(event.target.value))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Gender</label>
              <select
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                value={gender}
                onChange={(event) =>
                  setGender(event.target.value as "male" | "female" | "other")
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Severity</label>
              <select
                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                value={severity}
                onChange={(event) =>
                  setSeverity(event.target.value as "mild" | "moderate" | "severe")
                }
              >
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {symptoms.map((symptom) => {
              const active = selectedSymptoms.includes(symptom);
              return (
                <button
                  key={symptom}
                  type="button"
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    active
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card"
                  }`}
                  onClick={() =>
                    setSelectedSymptoms((prev) =>
                      prev.includes(symptom)
                        ? prev.filter((s) => s !== symptom)
                        : [...prev, symptom]
                    )
                  }
                >
                  {symptom}
                </button>
              );
            })}
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-3">
            {safetyQuestions.map((question) => (
              <div key={question} className="rounded-xl border border-border/70 bg-muted/30 p-4">
                <p className="text-sm font-semibold">{question}</p>
                <div className="mt-3 flex gap-2">
                  <Button
                    type="button"
                    variant={answers[question] ? "default" : "outline"}
                    onClick={() => setAnswers((prev) => ({ ...prev, [question]: true }))}
                  >
                    Yes
                  </Button>
                  <Button
                    type="button"
                    variant={answers[question] === false ? "default" : "outline"}
                    onClick={() => setAnswers((prev) => ({ ...prev, [question]: false }))}
                  >
                    No
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {step === 4 ? (
          <div className="space-y-4">
            {pending ? <p className="text-sm text-muted-foreground">Analyzing safety profile...</p> : null}
            {result ? (
              <div className="space-y-3 rounded-xl border border-border/70 bg-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Safety guidance</h3>
                  <StatusPill level={result.urgency} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Possible conditions: {result.possibleConditions.join(", ")}
                </p>
                <p className="text-sm text-muted-foreground">
                  Suggested doctor type: {result.suggestedDoctorType}
                </p>
                <p className="text-sm text-muted-foreground">
                  Confidence: {Math.round(result.confidence * 100)}%
                </p>
                {result.emergencyTriggered ? (
                  <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm font-semibold text-red-700">
                    <AlertTriangle className="mr-2 inline-block size-4" />
                    Critical symptoms detected. Redirecting to emergency guidance.
                  </div>
                ) : null}
              </div>
            ) : (
              <Button onClick={submit} disabled={pending}>
                Generate Guidance
              </Button>
            )}
          </div>
        ) : null}

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={back} disabled={step === 1}>
            Back
          </Button>
          {step < 4 ? (
            <Button type="button" onClick={next} disabled={!canProceed}>
              Continue
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
