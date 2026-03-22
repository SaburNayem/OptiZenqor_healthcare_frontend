import type { Metadata } from "next";
import { Merriweather_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "OptiZenqor Healthcare",
  description:
    "Global healthcare platform focused on patient safety, trust, and non-diagnostic AI guidance.",
  applicationName: "OptiZenqor Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${merriweatherSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
