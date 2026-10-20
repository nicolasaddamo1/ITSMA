import type { Metadata } from "next";
import { Fira_Sans, Roboto, Roboto_Slab } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";
import Footer from "@/components/footer";
import Header from "@/components/header/header";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itsmadgr.com"),
  title: {
    default: "ITSMA | Mercancías Peligrosas (DGR / MERPEL / MM PP) y Embalaje Multimodal",
    template: "%s | ITSMA Mercancías Peligrosas",
  },
  description: "Especialistas en transporte multimodal, acondicionamiento y documentación de Mercancías Peligrosas (DGR, MM PP, MERPEL). Cajas 4G homologadas ONU y asesoramiento integral.",
  keywords: [
    "mercancías peligrosas",
    "mercancias peligrosas",
    "dgr",
    "dangerous goods",
    "mm pp",
    "mmpp",
    "merpel",
    "cajas 4g homologadas",
    "embalaje homologado onu",
    "transporte multimodal dgr",
    "documentación dgr iata imdg",
    "itsma",
    "itsma dgr",
  ],
  authors: [{ name: "ITSMA Soluciones Integrales" }],
  creator: "ITSMA",
  publisher: "ITSMA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.itsmadgr.com",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "ITSMA | Mercancías Peligrosas (DGR / MERPEL / MM PP) y Embalaje",
    description: "Soluciones integrales en acondicionamiento, documentación técnica y embalajes homologados ONU para mercancías peligrosas y transporte multimodal.",
    url: "https://www.itsmadgr.com",
    siteName: "ITSMA DGR",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "ITSMA Soluciones Integrales en Mercancías Peligrosas (DGR / MERPEL / MM PP)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITSMA | Mercancías Peligrosas (DGR / MERPEL / MM PP)",
    description: "Soluciones integrales para la gestión y transporte de mercancías peligrosas (DGR / MERPEL / MM PP).",
    images: ["/images/og-banner.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ITSMA Soluciones Integrales",
  "alternateName": ["ITSMA DGR", "ITSMA Mercancías Peligrosas", "ITSMA MERPEL"],
  "url": "https://www.itsmadgr.com",
  "logo": "https://www.itsmadgr.com/icon-512.png",
  "image": "https://www.itsmadgr.com/icon-512.png",
  "description": "Soluciones integrales en transporte multimodal, acondicionamiento y documentación técnica de Mercancías Peligrosas (DGR, MERPEL, MM PP) y embalajes homologados ONU.",
  "telephone": "+54 11 4147-2084",
  "email": "itsma.dgr@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Córdoba 873 5° A",
    "addressLocality": "Ciudad Autónoma de Buenos Aires",
    "addressRegion": "CABA",
    "addressCountry": "AR"
  },
  "areaServed": ["AR", "Latinoamérica"],
  "serviceType": [
    "Gestión de Mercancías Peligrosas",
    "DGR (Dangerous Goods Regulations)",
    "MERPEL (Mercancías Peligrosas)",
    "MM PP (Cargas Peligrosas)",
    "Acondicionamiento y Embalaje Homologado ONU",
    "Documentación Multimodal DGR (DGD, IMDG, Carta de Porte)"
  ]
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${firaSans.variable} ${roboto.variable} ${robotoSlab.variable} ${firaSans.className}`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <BootstrapClient />
        </LanguageProvider>
      </body>
    </html>
  );
}
