"use client";

import React, { useState, useEffect, useRef } from "react";

interface MetricItem {
  target: number;
  prefix: string;
  suffix: string;
  label: string;
}

const metricsData: MetricItem[] = [
  { target: 10, prefix: "+", suffix: "", label: "años" },
  { target: 2500, prefix: "+", suffix: "", label: "paquetes" },
  { target: 30, prefix: "+", suffix: "", label: "Clientes" },
  { target: 100, prefix: "+", suffix: "", label: "Algo" },
];

export default function MetricsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(metricsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset to 0 and trigger ascending counter animation
            setCounts(metricsData.map(() => 0));

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-4 bg-white">
      <div className="container">
        <div className="itsma-red-banner p-4 p-lg-5">
          <div className="row g-4 text-center align-items-center">
            {metricsData.map((item, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="display-4 fw-bold text-white mb-1 counter-number">
                  {item.prefix}
                  {counts[index].toLocaleString("es-AR")}
                  {item.suffix}
                </div>
                <div className="fs-5 fw-medium text-white opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
