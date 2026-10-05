"use client";

import React from "react";

export default function Hero() {
  return (
    <section id="inicio" className="w-100 bg-white border-bottom p-0 overflow-hidden">
      <div className="w-100 position-relative">
        <img
          src="/images/hero_banner_full.jpeg"
          alt="ITSMA Soluciones Integrales en Mercancías Peligrosas Multimodal"
          className="w-100 h-auto d-block object-fit-contain"
          style={{ maxHeight: "85vh", width: "100%" }}
        />
      </div>
    </section>
  );
}
