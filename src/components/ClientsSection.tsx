"use client";

import React from "react";
import { BsBuilding, BsGlobe, BsBoxSeam, BsTruck } from "react-icons/bs";

const clientsList = [
  { name: "Logística Global S.A.", category: "Transporte" },
  { name: "Packaging Pro", category: "Embalaje Industrial" },
  { name: "Distribuidora del Sur", category: "Almacenamiento" },
  { name: "FarmaPack Argentina", category: "Farma & Salud" },
  { name: "TechCargo Express", category: "Tecnología" },
  { name: "Industrias Metalúrgicas", category: "Sector Industrial" },
];

export default function ClientsSection() {
  return (
    <section id="clientes" className="py-5 bg-light border-top border-bottom">
      <div className="container py-lg-3">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="accent-badge mb-2">Confianza de Mercado</span>
          <h2 className="display-6 fw-bold text-dark mb-2">Empresas que trabajan con nosotros</h2>
          <p className="text-secondary fs-6">
            Acompañamos a líderes de diversas industrias optimizando sus procesos de protección y distribución.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {clientsList.map((client, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3 text-center bg-white transition-all hover-shadow">
                <div className="d-flex justify-content-center mb-2 text-primary opacity-75">
                  <BsBuilding className="fs-2" />
                </div>
                <h6 className="fw-bold text-dark mb-1 small">{client.name}</h6>
                <span className="badge bg-light text-secondary border small" style={{ fontSize: "0.7rem" }}>
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
