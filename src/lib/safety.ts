import { SymptomAssessmentInput, SymptomAssessmentResult } from "@/lib/types";

const CRITICAL_TRIGGERS = [
  "chest pain",
  "difficulty breathing",
  "unconsciousness",
  "severe bleeding",
  "stroke signs",
];

export function evaluateSymptomRisk(
  input: SymptomAssessmentInput
): SymptomAssessmentResult {
  const symptomSet = new Set(input.symptoms.map((s) => s.toLowerCase()));
  const hasCriticalSymptom = CRITICAL_TRIGGERS.some((trigger) =>
    symptomSet.has(trigger)
  );
  const severeFlags = Object.values(input.safetyAnswers).filter(Boolean).length;

  if (hasCriticalSymptom || severeFlags >= 2 || input.severity === "severe") {
    return {
      possibleConditions: ["Acute respiratory/cardiac event", "Severe infection"],
      urgency: "CRITICAL",
      suggestedDoctorType: "Emergency Medicine",
      confidence: 0.92,
      emergencyTriggered: true,
    };
  }

  if (input.severity === "moderate" || severeFlags === 1) {
    return {
      possibleConditions: ["Inflammatory condition", "Viral syndrome"],
      urgency: "HIGH",
      suggestedDoctorType: "Internal Medicine",
      confidence: 0.77,
      emergencyTriggered: false,
    };
  }

  return {
    possibleConditions: ["General fatigue", "Mild allergy"],
    urgency: "LOW",
    suggestedDoctorType: "General Physician",
    confidence: 0.64,
    emergencyTriggered: false,
  };
}
