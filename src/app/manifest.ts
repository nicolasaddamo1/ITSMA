import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ITSMA Soluciones Integrales en Mercancías Peligrosas",
    short_name: "ITSMA DGR",
    description:
      "Especialistas en transporte multimodal, acondicionamiento y documentación de Mercancías Peligrosas (DGR, MM PP, MERPEL). Cajas 4G homologadas ONU.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E50C0E",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
