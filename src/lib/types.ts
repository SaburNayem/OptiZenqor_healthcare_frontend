export type UserRole = "patient" | "doctor";

export type UrgencyLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type AppointmentStatus =
  | "upcoming"
  | "ongoing"
  | "completed"
  | "cancelled";

export type NotificationPriority = "HIGH" | "MEDIUM" | "LOW";

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  experienceYears: number;
  nextAvailableSlot: string;
  availability: "online" | "offline";
}

export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  dateTime: string;
  status: AppointmentStatus;
}

export interface ReportInsight {
  id: string;
  fileName: string;
  reportType: string;
  summary: string;
  abnormalHighlights: string[];
  confidence: number;
  uploadedAt: string;
}

export interface NotificationItem {
  id: string;
  category: "appointment" | "follow-up" | "alerts";
  priority: NotificationPriority;
  message: string;
  timestamp: string;
}

export interface SymptomAssessmentInput {
  age: number;
  gender: "male" | "female" | "other";
  severity: "mild" | "moderate" | "severe";
  symptoms: string[];
  safetyAnswers: Record<string, boolean>;
}

export interface SymptomAssessmentResult {
  possibleConditions: string[];
  urgency: UrgencyLevel;
  suggestedDoctorType: string;
  confidence: number;
  emergencyTriggered: boolean;
}

export interface TimelineItem {
  id: string;
  type: "symptom" | "appointment" | "report";
  title: string;
  detail: string;
  timestamp: string;
}
