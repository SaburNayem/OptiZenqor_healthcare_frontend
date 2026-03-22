"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Doctor } from "@/lib/types";

export function DoctorSearch({ doctors }: { doctors: Doctor[] }) {
  const [specialization, setSpecialization] = useState("all");
  const [minRating, setMinRating] = useState(4.5);
  const [minExperience, setMinExperience] = useState(5);
  const [availability, setAvailability] = useState("all");

  const specializations = useMemo(
    () => ["all", ...new Set(doctors.map((doctor) => doctor.specialization))],
    [doctors]
  );

  const filtered = useMemo(() => {
    return doctors.filter((doctor) => {
      if (specialization !== "all" && doctor.specialization !== specialization) return false;
      if (doctor.rating < minRating) return false;
      if (doctor.experienceYears < minExperience) return false;
      if (availability !== "all" && doctor.availability !== availability) return false;
      return true;
    });
  }, [availability, doctors, minExperience, minRating, specialization]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 rounded-2xl border border-border/70 bg-card p-4 sm:grid-cols-2 lg:grid-cols-4">
        <select
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          value={specialization}
          onChange={(event) => setSpecialization(event.target.value)}
        >
          {specializations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          value={minRating}
          onChange={(event) => setMinRating(Number(event.target.value))}
        >
          <option value={4}>Rating 4.0+</option>
          <option value={4.5}>Rating 4.5+</option>
          <option value={4.8}>Rating 4.8+</option>
        </select>
        <select
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          value={minExperience}
          onChange={(event) => setMinExperience(Number(event.target.value))}
        >
          <option value={3}>3+ years</option>
          <option value={5}>5+ years</option>
          <option value={10}>10+ years</option>
        </select>
        <select
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          value={availability}
          onChange={(event) => setAvailability(event.target.value)}
        >
          <option value="all">All availability</option>
          <option value="online">Online</option>
          <option value="offline">In person</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doctor) => (
          <Card key={doctor.id} className="rounded-2xl border-border/70">
            <CardHeader>
              <CardTitle className="text-xl">{doctor.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>{doctor.specialization}</p>
              <p>Rating: {doctor.rating.toFixed(1)}</p>
              <p>Experience: {doctor.experienceYears} years</p>
              <p>Next slot: {new Date(doctor.nextAvailableSlot).toLocaleString()}</p>
              <Badge variant="secondary">{doctor.availability}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
