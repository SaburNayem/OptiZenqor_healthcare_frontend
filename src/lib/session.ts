"use server";

import { cookies } from "next/headers";
import { UserRole } from "@/lib/types";

const SESSION_COOKIE = "optizenqor_session";

export async function setSession(role: UserRole) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, JSON.stringify({ role }), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getSessionRole(): Promise<UserRole | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;

  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as { role: UserRole };
    return parsed.role;
  } catch {
    return null;
  }
}
