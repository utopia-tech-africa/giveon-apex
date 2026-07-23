import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Giveon Apex",
    short_name: "Giveon Apex",
    description:
      "Elevated living at Giveon Court — off-plan homes and Apex Cabins in Adukrom-Dawu.",
    start_url: "/",
    display: "standalone",
    background_color: "#000C04",
    theme_color: "#000C04",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
