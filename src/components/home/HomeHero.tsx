"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="inicio" className="w-100 position-relative py-5 py-lg-6 bg-light text-center border-bottom overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          background: "radial-gradient(#fd0004 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div className="container py-4 py-lg-5 position-relative z-2">
        <div className="max-w-3xl mx-auto">
          <h1 className="display-2 font-serif fw-bold text-dark mb-2 tracking-tight">
            ITSMA
          </h1>
          <p className="display-6 font-serif fw-normal text-secondary mb-0">
            soluciones integrales
          </p>
        </div>
      </div>
    </section>
  );
}
