"use server";

import { redirect } from "next/navigation";
import { setSession } from "@/lib/session";
import { UserRole } from "@/lib/types";

function routeByRole(role: UserRole): string {
  if (role === "doctor") return "/doctors";
  return "/patient";
}

export async function loginAction(formData: FormData) {
  const role = (formData.get("role") as UserRole) ?? "patient";
  await setSession(role);
  redirect(routeByRole(role));
}

export async function registerAction(formData: FormData) {
  const role = (formData.get("role") as UserRole) ?? "patient";
  await setSession(role);
  redirect(routeByRole(role));
}
