"use client";

import React, { useState, useEffect } from "react";
import { BsShieldCheck, BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1100) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = valores.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [startIndex, isPaused, cardsToShow]);

  // Compute visible cards for continuous 360 loop
  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    const cardIdx = (startIndex + i) % total;
    visibleCards.push({ ...valores[cardIdx], idx: cardIdx });
  }

  return (
    <section id="valores" className="py-5 bg-white position-relative overflow-hidden">
      <div className="container py-lg-4">
        {/* Title with Red Accent Line */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="red-line-accent mb-2" />
          <h2 className="display-6 font-serif fw-bold text-dark mb-3">
            Valores ITSMA
          </h2>
        </div>

        {/* 3-Card Carousel Grid Container */}
        <div
          className="position-relative px-md-4 "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Chevron Prev Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle p-2 shadow border border-danger text-itsma-red d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px", zIndex: 10, left: "-10px" }}
            aria-label="Anterior Valor"
          >
            <BsChevronLeft size={18} />
          </button>

          <div className="row g-4 justify-content-center">
            {visibleCards.map((item, index) => (
              <div
                key={`${item.title}-${index}-${item.idx}`}
                className={
                  cardsToShow === 1
                    ? "col-12"
                    : cardsToShow === 2
                    ? "col-6"
                    : "col-4"
                }
              >
                <div
                  className="itsma-red-card p-4 h-100 d-flex flex-column justify-content-between"
                  style={{ minHeight: "240px" }}
                >
                  <div>
                    {/* Header: Clean Icon without box + Title Side-by-Side */}
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="text-itsma-red d-flex align-items-center">
                        <BsShieldCheck size={30} />
                      </div>
                      <h4 className="fw-bold text-itsma-red mb-0 fs-5">{item.title}</h4>
                    </div>

                    {/* Description */}
                    <p className="text-secondary small mb-0 lh-base">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chevron Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle p-2 shadow border border-danger text-itsma-red d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px", zIndex: 10, right: "-10px" }}
            aria-label="Siguiente Valor"
          >
            <BsChevronRight size={18} />
          </button>
        </div>

        {/* 7 Red Dots Indicator for 100% full continuous rotation */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-4 pt-2" style={{ minHeight: "24px" }}>
          {valores.map((val, dotIdx) => (
            <button
              key={val.title}
              type="button"
              onClick={() => setStartIndex(dotIdx)}
              className={`carousel-dot-red ${startIndex === dotIdx ? "active" : ""}`}
              aria-label={`Ver valor ${val.title}`}
              title={val.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
