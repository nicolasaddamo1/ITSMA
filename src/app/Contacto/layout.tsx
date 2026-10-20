import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones de Embalajes DGR / MERPEL",
  description: "Contactate con los especialistas de ITSMA para cotizar embalajes homologados ONU, auditorías técnicas o acondicionamiento de mercancías peligrosas (DGR / MERPEL / MM PP).",
  alternates: {
    canonical: "https://www.itsmadgr.com/Contacto",
  },
  openGraph: {
    title: "Contacto y Cotizaciones DGR | ITSMA Mercancías Peligrosas",
    description: "Escribinos para solicitar cotizaciones a medida de embalajes 4G homologados y asesoramiento técnico.",
    url: "https://www.itsmadgr.com/Contacto",
    images: ["/images/og-banner.png"],
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
