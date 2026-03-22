import {
  Appointment,
  Doctor,
  NotificationItem,
  ReportInsight,
  TimelineItem,
} from "@/lib/types";

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Sofia Raman",
    specialization: "Cardiology",
    rating: 4.9,
    experienceYears: 14,
    nextAvailableSlot: "2026-03-22T15:30:00Z",
    availability: "online",
  },
  {
    id: "d2",
    name: "Dr. Mateo Chen",
    specialization: "Neurology",
    rating: 4.7,
    experienceYears: 11,
    nextAvailableSlot: "2026-03-22T18:00:00Z",
    availability: "online",
  },
  {
    id: "d3",
    name: "Dr. Amina Laurent",
    specialization: "Pediatrics",
    rating: 4.8,
    experienceYears: 9,
    nextAvailableSlot: "2026-03-23T09:00:00Z",
    availability: "offline",
  },
];

export const appointments: Appointment[] = [
  {
    id: "a1",
    doctorName: "Dr. Sofia Raman",
    specialty: "Cardiology",
    dateTime: "2026-03-24T10:00:00Z",
    status: "upcoming",
  },
  {
    id: "a2",
    doctorName: "Dr. Mateo Chen",
    specialty: "Neurology",
    dateTime: "2026-03-20T14:00:00Z",
    status: "completed",
  },
];

export const reports: ReportInsight[] = [
  {
    id: "r1",
    fileName: "cbc-report-mar-22.pdf",
    reportType: "Complete Blood Count",
    summary: "Mild inflammation markers observed; monitor with physician.",
    abnormalHighlights: ["CRP slightly elevated", "WBC upper normal range"],
    confidence: 0.83,
    uploadedAt: "2026-03-22T08:15:00Z",
  },
  {
    id: "r2",
    fileName: "ecg-scan-mar-10.jpg",
    reportType: "ECG",
    summary: "Rhythm mostly regular. Follow-up recommended for irregular beat episodes.",
    abnormalHighlights: ["Intermittent PVC pattern"],
    confidence: 0.78,
    uploadedAt: "2026-03-10T10:20:00Z",
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "n1",
    category: "appointment",
    priority: "HIGH",
    message: "Upcoming consultation in 24 hours.",
    timestamp: "2026-03-23T10:00:00Z",
  },
  {
    id: "n2",
    category: "follow-up",
    priority: "MEDIUM",
    message: "Please recheck your blood panel within 7 days.",
    timestamp: "2026-03-22T11:00:00Z",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "t1",
    type: "symptom",
    title: "Symptom Check Completed",
    detail: "Reported mild chest discomfort and fatigue.",
    timestamp: "2026-03-22T09:50:00Z",
  },
  {
    id: "t2",
    type: "appointment",
    title: "Consultation Booked",
    detail: "Dr. Sofia Raman on Mar 24, 10:00 AM",
    timestamp: "2026-03-22T09:54:00Z",
  },
  {
    id: "t3",
    type: "report",
    title: "Report Uploaded",
    detail: "CBC report processed with AI summary.",
    timestamp: "2026-03-22T08:15:00Z",
  },
];
