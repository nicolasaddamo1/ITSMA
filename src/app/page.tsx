import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import MetricsCounter from "@/components/MetricsCounter";
import ValoresCarousel from "@/components/ValoresCarousel";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <MetricsCounter />
      <ValoresCarousel />
      <AboutSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
