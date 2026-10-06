import HomeHero from "@/components/home/HomeHero";
import ServicesSection from "@/components/home/ServicesSection";
import MetricsCounter from "@/components/home/MetricsCounter";
import ValoresCarousel from "@/components/home/ValoresCarousel";
import AboutSection from "@/components/home/AboutSection";
import ClientsSection from "@/components/home/ClientsSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <MetricsCounter />
      <ValoresCarousel />
      <AboutSection />
      <ClientsSection />
    </>
  );
}
