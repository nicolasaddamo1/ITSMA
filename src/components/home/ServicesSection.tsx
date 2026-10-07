"use client";

import React, { useState, useEffect } from "react";
import {
  BsBoxSeam,
  BsHeadset,
  BsFileEarmarkCheck,
  BsAirplane,
  BsWater,
  BsTruck,
  BsTag,
  BsMortarboard,
  BsChevronLeft,
  BsChevronRight,
  BsArrowRight,
} from "react-icons/bs";

interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  badge: string;
  summary: string;
  highlights: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: <BsBoxSeam className="text-itsma-red fs-2" />,
    title: "Acondicionamiento y Optimización de Carga",
    badge: "Operación en Planta",
    summary:
      "Preparamos tu carga de mercancías peligrosas para el transporte (aéreo, terrestre y marítimo) aplicando normativa estricta y principios de Lean Manufacturing directamente en tus instalaciones.",
    highlights: [
      "Clasificación, embalaje y etiquetado normativo",
      "Lean Manufacturing: reducción de tiempos y desperdicios",
      "Solución prêt-à-porter en planta del cliente",
    ],
  },
  {
    id: 2,
    icon: <BsHeadset className="text-itsma-red fs-2" />,
    title: "Consultoría y Asesoramiento Integral",
    badge: "Asesoría Técnica",
    summary:
      "Transformamos la complejidad de las mercancías peligrosas en una gestión ordenada y eficiente. Brindamos interpretación normativa, clasificación y acompañamiento técnico continuo.",
    highlights: [
      "Interpretación de normativa aérea, marítima y terrestre",
      "Clasificación técnica de sustancias y artículos",
      "Socios técnicos para gestión continua",
    ],
  },
  {
    id: 3,
    icon: <BsFileEarmarkCheck className="text-itsma-red fs-2" />,
    title: "Documentación de Mercancías Peligrosas",
    badge: "Gestión Documental",
    summary:
      "Desarrollamos, revisamos y auditamos la documentación técnica para embarques multimodales, asegurando la coherencia entre carga, etiquetado y formularios legales.",
    highlights: [
      "Aéreo: DGD, e-DGD y AWB",
      "Marítimo: Formulario IMDG y Certificado de Arrumazón",
      "Terrestre: Fichas de Emergencia y Declaraciones",
    ],
  },
  {
    id: 4,
    icon: <BsAirplane className="text-itsma-red fs-2" />,
    title: "Transporte Aéreo",
    badge: "Modo de Transporte",
    summary:
      "Acondicionamiento y preparación experta bajo reglamentación IATA/OACI. Verificación estricta de embalajes de uso aéreo, cantidades permitidas y etiquetado específico.",
    highlights: [
      "Cumplimiento normativo IATA / OACI",
      "Acondicionamiento de bultos y paquetes aéreos",
      "Minimización de rechazos en rampa",
    ],
  },
  {
    id: 5,
    icon: <BsWater className="text-itsma-red fs-2" />,
    title: "Transporte Marítimo",
    badge: "Modo de Transporte",
    summary:
      "Gestión especializada bajo el código IMDG para envíos de ultramar. Asesoramiento en bultos, pallets, contenedores y verificación de compatibilidad de sustancias.",
    highlights: [
      "Código IMDG y requisitos de ultramar",
      "Certificados de arrumazón e insumos",
      "Seguridad en contenedores y unidades",
    ],
  },
  {
    id: 6,
    icon: <BsTruck className="text-itsma-red fs-2" />,
    title: "Transporte Terrestre",
    badge: "Modo de Transporte",
    summary:
      "Adecuación completa a normativas nacionales e internacionales de transporte por carretera. Emisión de Fichas de Emergencia y marcado de unidades de carga.",
    highlights: [
      "Transporte por carretera seguro y regulado",
      "Fichas de Emergencia y marcado de unidad",
      "Distribución nacional y transfronteriza",
    ],
  },
  {
    id: 7,
    icon: <BsTag className="text-itsma-red fs-2" />,
    title: "Etiquetas y Marcas",
    badge: "Insumos & Identificación",
    summary:
      "Proporcionamos etiquetas de peligro por clase, división y manipulación, junto con asesoramiento técnico para su correcta colocación y cumplimiento normativo.",
    highlights: [
      "Etiquetas de peligro y manipulación homologadas",
      "Marcas de orientación para bultos y pallets",
      "Asesoramiento para la selección adecuada",
    ],
  },
  {
    id: 8,
    icon: <BsMortarboard className="text-itsma-red fs-2" />,
    title: "Formación desde el Inicio",
    badge: "Capacitación CBTA",
    summary:
      "Desarrollamos manuales y programas de capacitación por competencias (CBTA) para escuelas e instituciones aeronáuticas, adaptados a cada perfil profesional.",
    highlights: [
      "Manuales para Pilotos, TCP, Rampa y Despachantes",
      "Enfoque en competencias reales y gestión de riesgos",
      "Situaciones prácticas y toma de decisiones",
    ],
  },
  {
    id: 9,
    icon: <BsBoxSeam className="text-itsma-red fs-2" />,
    title: "Embalajes 4G homologados",
    badge: "Embalajes Homologados",
    summary:
      "Ofrecemos cajas de cartón 4G homologadas para el transporte aéreo, marítimo y carretero de mercancías peligrosas (Grupos I, II y III, Tipo V), acompañadas del asesoramiento técnico para elegir la opción adecuada.",
    highlights: [
      "Cajas X30 (aéreo, marítimo y carretero - 35,8×35,8×37,3 cm)",
      "Cajas X7 (aéreo y carretero - 19×16×28 cm)",
      "Homologación Grupos I, II y III con forro interno y precinto",
    ],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const total = servicesData.length;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  // Compute precise 3D transform relative to active index
  const getCardStyle = (index: number) => {
    let diff = index - activeIndex;

    // Wrap around circular index
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    // Center Active Card
    if (diff === 0) {
      return {
        transform: "translate(-50%, -50%) scale(1.05)",
        left: "50%",
        top: "50%",
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 10,
        pointerEvents: "auto" as const,
      };
    }

    // Neighbors (diff = -1 or +1)
    if (absDiff === 1) {
      const leftPercent = diff < 0 ? "20%" : "80%";
      return {
        transform: "translate(-50%, -50%) scale(0.9)",
        left: leftPercent,
        top: "50%",
        opacity: 0.78,
        filter: "blur(1.5px)",
        zIndex: 5,
        pointerEvents: "auto" as const,
      };
    }

    // Outer Cards (diff = -2 or +2)
    if (absDiff === 2) {
      const leftPercent = diff < 0 ? "-5%" : "105%";
      return {
        transform: "translate(-50%, -50%) scale(0.78)",
        left: leftPercent,
        top: "50%",
        opacity: 0.35,
        filter: "blur(4.5px)",
        zIndex: 2,
        pointerEvents: "auto" as const,
      };
    }

    // Hidden cards off-screen
    const leftPercent = diff < 0 ? "-30%" : "130%";
    return {
      transform: "translate(-50%, -50%) scale(0.65)",
      left: leftPercent,
      top: "50%",
      opacity: 0,
      filter: "blur(8px)",
      zIndex: 0,
      pointerEvents: "none" as const,
    };
  };

  return (
    <section id="servicios" className="position-relative bg-white py-5 overflow-hidden">
      <div className="py-lg-4 container">
        {/* Section Header with generous bottom margin to prevent overlap */}
        <div className="mx-auto mb-5 pb-3 max-w-3xl text-center">
          <div className="mb-2 red-line-accent" />
          <h2 className="mb-3 font-serif text-dark display-6 fw-bold">
            Servicios que ofrecemos
          </h2>
        </div>

        {/* 3D Focus Blur Carousel Viewport with explicit height */}
        <div
          className="position-relative my-4 w-100"
          style={{ height: "420px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Loop */}
          {servicesData.map((item, idx) => {
            const cardStyle = getCardStyle(idx);
            const isCenter = idx === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className="position-absolute cursor-pointer"
                style={{
                  width: "320px",
                  height: "370px",
                  transition:
                    "all 0.55s cubic-bezier(0.25, 1, 0.5, 1)",
                  ...cardStyle,
                }}
              >
                <div
                  className={`${isCenter ? "itsma-red-card" : "itsma-red-card-secondary"
                    } p-4 d-flex flex-column justify-content-between h-100`}
                >
                  <div>
                    {/* Icon */}
                    <div className="mb-3 text-center">
                      <div
                        className={`d-inline-flex align-items-center justify-content-center p-3 rounded-circle border ${isCenter ? "border-danger bg-danger-subtle" : "border-secondary-subtle bg-light"
                          }`}
                        style={{ width: "60px", height: "60px" }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h5
                      className={`fw-bold text-center mb-2 fs-5 ${isCenter ? "text-itsma-red" : "text-dark"
                        }`}
                      style={{ minHeight: "2.8rem" }}
                    >
                      {item.title}
                    </h5>

                    {/* Summary */}
                    <p className="mb-0 text-secondary text-center small lh-base">
                      {item.summary}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-3 border-light border-top text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalService(item);
                      }}
                      className={`btn btn-sm w-100 rounded-pill fw-semibold d-flex align-items-center justify-content-center gap-2 ${isCenter ? "btn-danger" : "btn-outline-danger"
                        }`}
                    >
                      Saber más
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating Red Arrow Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="top-50 position-absolute d-flex align-items-center justify-content-center shadow-lg p-2 border border-danger rounded-circle text-itsma-red translate-middle-y start-0 btn btn-light"
            style={{ width: "44px", height: "44px", zIndex: 30, left: "5px" }}
            aria-label="Anterior Servicio"
          >
            <BsChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="top-50 position-absolute d-flex align-items-center justify-content-center shadow-lg p-2 border border-danger rounded-circle text-itsma-red translate-middle-y end-0 btn btn-light"
            style={{ width: "44px", height: "44px", zIndex: 30, right: "5px" }}
            aria-label="Siguiente Servicio"
          >
            <BsChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Pagination Dots placed right below cards */}
        <div className="d-flex align-items-center justify-content-center gap-2 mt-3 pt-1">
          {servicesData.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`carousel-dot-red ${activeIndex === dotIdx ? "active" : ""}`}
              aria-label={`Ver servicio ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <div
          className="d-block modal fade show"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", zIndex: 1060 }}
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="shadow-lg border-0 rounded-4 modal-content">
              <div className="bg-light p-4 border-bottom modal-header">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-white p-3 border border-danger rounded-3">
                    {activeModalService.icon}
                  </div>
                  <div>

                    <h4 style={{ color: "linear-gradient(225deg, #FD0004 0%, #A20A3A 70.67%)" }} className="mb-0 modal-title fw-bold">
                      {activeModalService.title}
                    </h4>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActiveModalService(null)}
                  aria-label="Cerrar"
                />
              </div>

              <div className="p-4 p-md-5 modal-body">
                <h6 className="mb-2 text-dark fw-bold">Resumen de Operación</h6>
                <p className="mb-4 text-secondary lead fs-6 lh-lg">
                  {activeModalService.summary}
                </p>

                <h6 className="mb-3 text-dark fw-bold">Puntos Clave del Servicio:</h6>
                <div className="mb-4 row g-3">
                  {activeModalService.highlights.map((item, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="d-flex align-items-center gap-2 bg-light p-3 border border-light rounded-3">
                        <span className="text-danger fw-bold fs-5">•</span>
                        <span className="text-dark fw-medium small">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center justify-content-between bg-secondary-subtle mb-0 p-4 rounded-3">
                  <div>
                    <h6 className="mb-1 fw-bold">¿Necesitás este servicio para tu empresa?</h6>
                    <small>Analizamos tu operación y desarrollamos la solución en tu planta.</small>
                  </div>
                  <a href="#contacto" onClick={() => setActiveModalService(null)} className="px-3 btn btn-danger btn-sm fw-semibold">
                    Contactar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
