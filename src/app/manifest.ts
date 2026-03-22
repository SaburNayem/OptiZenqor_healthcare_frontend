import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OptiZenqor Healthcare",
    short_name: "OptiZenqor",
    description: "Global healthcare platform with safety-first non-diagnostic guidance.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4fbff",
    theme_color: "#1f71c3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
