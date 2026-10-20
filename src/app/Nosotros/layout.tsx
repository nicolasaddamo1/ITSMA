import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Especialistas en Mercancías Peligrosas y DGR",
  description: "Conocé la trayectoria y visión de ITSMA: especialistas con más de 40 años formando profesionales y brindando soluciones técnicas en mercancías peligrosas y MERPEL.",
  alternates: {
    canonical: "https://www.itsmadgr.com/Nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros | Especialistas en Mercancías Peligrosas y DGR | ITSMA",
    description: "Trayectoria, equipo y certificaciones técnicas en transporte de cargas peligrosas.",
    url: "https://www.itsmadgr.com/Nosotros",
    images: ["/images/og-banner.png"],
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
