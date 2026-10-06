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
  title: "ITSMA | Soluciones Integrales de Embalaje y Logística",
  description: "Asesoramiento, embalaje personalizado y protección logística para empresas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${firaSans.variable} ${roboto.variable} ${robotoSlab.variable} ${firaSans.className}`}>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
