"use client";

import React from "react";
import Icon from "../svgs/icon/icon";

export default function HomeHero() {
  return (
    <section id="inicio" className="w-100 bg-white p-0 overflow-hidden position-relative">
      <div className="w-100 position-relative">
        {/* 1. Imagen HD con encuadre ajustado (más recorte superior para mostrar la base del camión y reflejos de luz) */}
        <img
          src="/images/hero_bg.jpg"
          alt="ITSMA Soluciones Integrales en Mercancías Peligrosas Multimodal"
          className="w-100 d-block object-fit-cover"
          style={{
            width: "100%",
            maxHeight: "670px",
            minHeight: "480px",
            objectPosition: "center 68%",
          }}
        />

        {/* 2. Capa de contraste central */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 55%, transparent 100%)",
          }}
        />

        {/* 3. Icono SVG y textos centrados en la composición */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center p-3 pointer-events-none">
          <div
            className="d-flex flex-column align-items-center justify-content-center gap-2 mt-4"
            style={{ filter: "drop-shadow(0px 8px 22px rgba(0, 0, 0, 0.9))" }}
          >
            {/* Icono SVG proporcional */}
            <div style={{ width: "135px", height: "152px" }}>
              <Icon />
            </div>

            {/* Título SOLUCIONES INTEGRALES */}
            <h1
              className="display-6 fw-bold text-white mb-0 font-serif"
              style={{ fontSize: "calc(1.3rem + 1.2vw)", letterSpacing: "4px" }}
            >
              SOLUCIONES INTEGRALES
            </h1>

            {/* Subtítulo EN MERCANCÍAS PELIGROSAS MULTIMODAL */}
            <p
              className="fw-bold mb-0 text-uppercase"
              style={{
                color: "#e2e8f0",
                fontSize: "calc(0.8rem + 0.5vw)",
                letterSpacing: "3px",
              }}
            >
              EN MERCANCÍAS PELIGROSAS MULTIMODAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
