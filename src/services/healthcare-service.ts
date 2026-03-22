import {
  Appointment,
  Doctor,
  NotificationItem,
  ReportInsight,
  SymptomAssessmentInput,
  SymptomAssessmentResult,
  TimelineItem,
} from "@/lib/types";
import { evaluateSymptomRisk } from "@/lib/safety";
import {
  appointments,
  doctors,
  notifications,
  reports,
  timeline,
} from "@/services/mock-data";

const wait = (ms = 260) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchDoctors(filters?: {
  specialization?: string;
  minRating?: number;
  minExperience?: number;
  availability?: "online" | "offline";
}): Promise<Doctor[]> {
  await wait();

  return doctors.filter((doctor) => {
    if (filters?.specialization && filters.specialization !== "all") {
      if (doctor.specialization !== filters.specialization) return false;
    }
    if (filters?.minRating && doctor.rating < filters.minRating) return false;
    if (filters?.minExperience && doctor.experienceYears < filters.minExperience) {
      return false;
    }
    if (filters?.availability && doctor.availability !== filters.availability) {
      return false;
    }
    return true;
  });
}

export async function fetchAppointments(): Promise<Appointment[]> {
  await wait();
  return appointments;
}

export async function fetchReports(): Promise<ReportInsight[]> {
  await wait();
  return reports;
}

export async function fetchNotifications(): Promise<NotificationItem[]> {
  await wait();
  return notifications;
}

export async function fetchHistoryTimeline(): Promise<TimelineItem[]> {
  await wait();
  return timeline;
}

export async function runSymptomAssessment(
  payload: SymptomAssessmentInput
): Promise<SymptomAssessmentResult> {
  await wait(320);
  return evaluateSymptomRisk(payload);
}
