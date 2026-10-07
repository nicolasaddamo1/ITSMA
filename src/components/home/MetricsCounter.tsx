"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface MetricItem {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}

const metricsData: MetricItem[] = [
  { target: 20, prefix: "+", suffix: "", label: "Años" },
  { target: 2500, prefix: "+", suffix: "", label: "Envíos" },
  { target: 30, prefix: "+", suffix: "", label: "Clientes" },
  { target: 100, prefix: "+", suffix: "", label: "Capacitaciones" },
];

export default function MetricsCounter() {
  const { t } = useLanguage();
  const metricLabels = [t.metrics.anos, t.metrics.envios, t.metrics.clientes, t.metrics.capacitaciones];
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [counts, setCounts] = useState<number[]>(metricsData.map((item) => item.target));

  useEffect(() => {
    // Set to 0 for initial entrance animation
    setCounts(metricsData.map(() => 0));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }

            const duration = 1800; // ms
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const easeOutProgress = 1 - Math.pow(1 - progress, 3);

              setCounts(
                metricsData.map((item) => Math.floor(easeOutProgress * item.target))
              );

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts(metricsData.map((item) => item.target));
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current && !hasAnimated.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="metricas" ref={sectionRef} className="py-4 bg-white">
      <div className="container">
        <div
          className="p-4 p-lg-5 rounded-4 text-white shadow-lg"
          style={{ background: "linear-gradient(225deg, #FD0004 0%, #A20A3A 70.67%)", borderRadius: "1.25rem" }}
        >
          <div className="row g-4 text-center align-items-center">
            {metricsData.map((item, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="display-4 fw-bold text-white mb-1 counter-number">
                  {item.prefix}
                  {counts[index].toLocaleString("es-AR")}
                  {item.suffix}
                </div>
                <div className="fs-5 fw-medium text-white opacity-90">{metricLabels[index]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
