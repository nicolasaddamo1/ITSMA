import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Mercancías Peligrosas (DGR / MERPEL / MM PP) y Cajas 4G",
  description: "Acondicionamiento de carga, clasificación técnica, documentación multimodal DGR (IATA / IMDG), capacitación CBTA y cajas 4G homologadas ONU.",
  alternates: {
    canonical: "https://www.itsmadgr.com/Servicios",
  },
  openGraph: {
    title: "Servicios DGR, MERPEL y Mercancías Peligrosas | ITSMA",
    description: "Acondicionamiento de carga, clasificación técnica y embalajes homologados ONU para transporte multimodal.",
    url: "https://www.itsmadgr.com/Servicios",
    images: ["/images/og-banner.png"],
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
