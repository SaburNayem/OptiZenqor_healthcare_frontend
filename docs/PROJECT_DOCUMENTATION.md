# OptiZenqor Healthcare Frontend Documentation

## 1. Architecture Overview

This frontend is implemented with a modular and API-ready architecture.

- app: Route handlers and page composition using Next.js App Router
- features: Domain-first business UI and interaction modules
- components: Reusable presentational and layout components
- services: Async service contracts and backend-replaceable mocks
- lib: Type system, safety logic, constants, and session utilities

## 2. User Roles

Current role support:

- patient
- doctor

Admin role and admin route have been removed from the UI and route tree.

## 3. Route Map

- / : Landing page
- /auth/login : Login
- /auth/register : Register
- /patient : Patient dashboard
- /symptom-checker : Multi-step symptom triage flow
- /emergency : Critical emergency guidance screen
- /doctors : Doctor discovery and filtering
- /appointments : Slot booking and status tracking
- /reports : Report upload and intelligence summary
- /history : Combined medical timeline
- /notifications : Priority-based notifications

## 4. Safety and Clinical UX Constraints

- Global disclaimer is always visible: This is not a medical diagnosis
- Symptom flow uses emergency triggers and redirects to emergency page when critical
- UI emphasizes readability, low visual noise, and trust-oriented layout
- Critical alerts are rendered in red; regular actions use calming blue/green

## 5. Service Layer Design

Service functions are centralized in src/services and should be replaced by real API calls later.

Implemented service contracts include:

- fetchDoctors
- fetchAppointments
- fetchReports
- fetchNotifications
- fetchHistoryTimeline
- runSymptomAssessment

This allows direct migration from mock service calls to NestJS endpoints without UI rewrites.

## 6. Session Handling

- Cookie-based session role storage is implemented in server utilities
- Auth actions route users by role after login/register
- Current redirect behavior:
  - doctor -> /doctors
  - patient -> /patient

## 7. Error, Loading, and Fallback UX

- Route-level loading skeletons
- App-level error boundary with retry
- Not-found page for unknown routes
- Empty states in timeline-style sections

## 8. Local Runbook

1. Install dependencies:

```bash
npm install
```

2. Run local app:

```bash
npm run dev
```

3. Production checks:

```bash
npm run lint
npm run build
```

## 9. Deployment Runbook

### GitHub

Repository:

https://github.com/SaburNayem/OptiZenqor_healthcare_frontend

### Vercel

```bash
vercel login
vercel --prod
```

If deployment fails with token/auth errors, re-run login and deploy again.

## 10. Future Extensions

- Real backend integration (NestJS)
- Appointment timezone and region support
- Internationalization for global rollout
- Real-time notification transport
- RBAC middleware for protected route enforcement
