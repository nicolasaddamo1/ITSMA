"use client";

import React, { useState, useEffect } from "react";
import { BsShieldCheck } from "react-icons/bs";

const valores = [
  {
    title: "Seguridad",
    description:
      "La seguridad es el principio que guía cada decisión, cada solución y cada relación que construimos.",
  },
  {
    title: "Integridad",
    description:
      "Actuamos con honestidad, transparencia y ética, haciendo siempre lo correcto, aun cuando nadie nos esté mirando.",
  },
  {
    title: "Cercanía",
    description:
      "Nos involucramos con nuestros clientes, conocemos su realidad y construimos relaciones basadas en confianza, respeto y acompañamiento.",
  },
  {
    title: "Adaptabilidad",
    description:
      "No creemos en soluciones estándar. Entendemos que cada empresa, cada operación y cada desafío son diferentes, y nos adaptamos para encontrar la respuesta adecuada.",
  },
  {
    title: "Excelencia",
    description:
      "Buscamos hacer las cosas bien, mejorar continuamente y superar las expectativas de nuestros clientes.",
  },
  {
    title: "Innovación",
    description:
      "Cuestionamos las formas tradicionales de hacer las cosas y buscamos nuevas maneras de generar valor, optimizar procesos y transformar desafíos en oportunidades.",
  },
  {
    title: "Compromiso",
    description:
      "Nos involucramos de verdad. Asumimos cada desafío de nuestros clientes como propio y trabajamos para que nuestras soluciones produzcan resultados concretos.",
  },
];

export default function ValoresCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === valores.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev === 0 ? valores.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <section id="valores" className="py-5 bg-white position-relative">
      <div className="container py-lg-4">
        {/* Title with Red Accent Line */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="red-line-accent mb-2" />
          <h2 className="display-6 font-serif fw-bold text-dark mb-3">
            Valores ITSMA
          </h2>
        </div>

        {/* Carousel Container for 1-by-1 Slide Animation (Right to Left) */}
        <div
          className="row justify-content-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="col-lg-6 col-md-8">
            <div className="valores-card-container position-relative">
              {valores.map((item, idx) => {
                let cardState = "enter-right";
                if (idx === currentIndex) {
                  cardState = "active";
                } else if (idx === prevIndex) {
                  cardState = "exit-left";
                }

                return (
                  <div key={idx} className={`valores-card ${cardState}`}>
                    <div className="itsma-red-card p-4 p-md-5 text-start">
                      <div className="d-inline-flex p-3 rounded-3 border border-danger text-itsma-red mb-3">
                        <BsShieldCheck size={32} />
                      </div>
                      <h4 className="fw-bold text-itsma-red mb-3">{item.title}</h4>
                      <p className="text-secondary small mb-0 lh-base">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Red Dots Indicator */}
            <div className="d-flex justify-content-center gap-2 mt-4">
              {valores.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setPrevIndex(currentIndex);
                    setCurrentIndex(dotIdx);
                  }}
                  className={`carousel-dot-red ${currentIndex === dotIdx ? "active" : ""}`}
                  aria-label={`Valor ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
