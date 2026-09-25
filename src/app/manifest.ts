import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blue Rose Wraps & Graphics",
    short_name: "Blue Rose Wraps",
    description:
      "Vehicle wraps, fleet graphics, and commercial signage in Springfield, OR. Serving Eugene and all of Lane County.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0A0A0B",
    theme_color: "#E91E8C",
    categories: ["automotive", "business"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Get a Free Quote",
        url: "/get-a-quote",
        description: "Request a free vehicle wrap quote",
      },
      {
        name: "Our Services",
        url: "/services",
        description: "Browse all wrap and graphics services",
      },
    ],
  };
}
