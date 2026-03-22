# OptiZenqor Healthcare Frontend

Global healthcare web platform frontend focused on trust, clarity, and patient safety.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion

## Core Product Goals

- Patient safety first
- Non-diagnostic AI guidance
- Calm, medical-grade UI
- Scalable global architecture

## Current Feature Coverage

- Landing page with trust badges and healthcare modules
- Session-based auth with role support for patient and doctor
- Patient dashboard
- Multi-step symptom checker with emergency routing
- Emergency alert page
- Doctor discovery with filters
- Appointment booking and status tracking
- Reports intelligence upload flow
- Combined history timeline
- Notifications center with priority and categories

## Safety Principles Implemented

- Persistent global disclaimer: This is not a medical diagnosis
- Emergency symptom detection logic in symptom checker flow
- Safe fallback UX (loading, empty states, error boundary, not-found)
- Red color reserved for emergency and critical alerts

## Project Structure

```text
src/
	app/           Route-level pages, loading, error, manifest
	components/    Shared UI primitives and app layout wrappers
	features/      Domain-specific feature modules
	services/      API-ready service contracts + mock implementations
	lib/           Shared types, constants, safety/session helpers
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Build and Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

### Vercel CLI

```bash
vercel login
vercel --prod
```

### GitHub Repository

https://github.com/SaburNayem/OptiZenqor_healthcare_frontend

## Notes for Backend Integration

- Service layer is API-ready and currently uses mock data.
- Replace services in src/services with NestJS API calls.
- Maintain shared response contracts from src/lib/types.ts.

## License

Private project.
