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
    <section id="valores" className="position-relative bg-white py-5 overflow-hidden">
      <div className="py-lg-4 container">
        {/* Title with Red Accent Line */}
        <div className="mx-auto mb-5 max-w-2xl text-center">
          <div className="mb-2 red-line-accent" />
          <h2 className="mb-3 font-serif text-dark display-6 fw-bold">
            Valores ITSMA
          </h2>
        </div>

        {/* 3-Card Carousel Grid Container */}
        <div
          className="position-relative px-md-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Chevron Prev Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="top-50 position-absolute d-flex align-items-center justify-content-center shadow p-2 border border-danger rounded-circle text-itsma-red translate-middle-y start-0 btn btn-light"
            style={{ width: "40px", height: "40px", zIndex: 10, left: "-10px" }}
            aria-label="Anterior Valor"
          >
            <BsChevronLeft size={18} />
          </button>

          <div className="justify-content-center row g-4">
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
                <div className="d-flex flex-column justify-content-between p-4 h-100">
                  <div
                    className="d-flex flex-column justify-content-between p-4 h-100 itsma-red-card"
                    style={{ minHeight: "240px" }}
                  >
                    <div>
                      {/* Header: Clean Icon without box + Title Side-by-Side */}
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="d-flex align-items-center text-itsma-red">
                          <BsShieldCheck size={30} />
                        </div>
                        <h4 className="mb-0 text-itsma-red fw-bold fs-5">{item.title}</h4>
                      </div>

                      {/* Description */}
                      <p className="mb-0 text-secondary small lh-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chevron Next Button */}
          < button
            type="button"
            onClick={nextSlide}
            className="top-50 position-absolute d-flex align-items-center justify-content-center shadow p-2 border border-danger rounded-circle text-itsma-red translate-middle-y end-0 btn btn-light"
            style={{ width: "40px", height: "40px", zIndex: 10, right: "-10px" }}
            aria-label="Siguiente Valor"
          >
            <BsChevronRight size={18} />
          </button>
        </div>

        {/* 7 Red Dots Indicator for 100% full continuous rotation */}
        <div className="d-flex align-items-center justify-content-center gap-2 mt-4 pt-2" style={{ minHeight: "24px" }}>
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
