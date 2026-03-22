"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const slots = [
  "2026-03-23T08:00:00Z",
  "2026-03-23T09:30:00Z",
  "2026-03-23T11:00:00Z",
  "2026-03-23T14:30:00Z",
  "2026-03-23T17:00:00Z",
];

export function SlotBooker() {
  const [selected, setSelected] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  return (
    <Card className="rounded-2xl border-border/70">
      <CardHeader>
        <CardTitle>Real-time Slot Selection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot) => (
            <button
              key={slot}
              type="button"
              className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${
                selected === slot
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border"
              }`}
              onClick={() => setSelected(slot)}
            >
              {new Date(slot).toLocaleString()}
            </button>
          ))}
        </div>
        <Button
          onClick={() =>
            setMessage(
              selected
                ? `Appointment booked for ${new Date(selected).toLocaleString()}.`
                : "Please choose a slot first."
            )
          }
        >
          Confirm Appointment
        </Button>
        {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
      </CardContent>
    </Card>
  );
}
