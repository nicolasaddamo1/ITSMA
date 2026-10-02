"use client";

import React, { useState } from "react";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsSend } from "react-icons/bs";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-5 bg-white position-relative">
      <div className="container py-lg-4">
        <div className="row gy-5">
          <div className="col-lg-5">
            <span className="accent-badge mb-2">Hablemos</span>
            <h2 className="display-6 fw-bold text-dark mb-4">Contacto</h2>
            <p className="lead text-secondary mb-4">
              ¿Tienes dudas o necesitas un presupuesto personalizado para el embalaje y logística de tu empresa? Contáctanos hoy mismo.
            </p>

            <div className="vstack gap-4">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <BsTelephone className="fs-4" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Teléfono / WhatsApp</h6>
                  <p className="text-secondary mb-0">+54 11 9999-9999</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <BsEnvelope className="fs-4" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Correo Electrónico</h6>
                  <p className="text-secondary mb-0">contacto@itsma.com.ar</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <BsGeoAlt className="fs-4" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Oficinas Centrales</h6>
                  <p className="text-secondary mb-0">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="glass-card rounded-5 p-4 p-md-5 border shadow-lg">
              <h4 className="fw-bold text-dark mb-4">Envíanos un mensaje</h4>
              {submitted ? (
                <div className="alert alert-success rounded-4 p-4 text-center">
                  <h5 className="fw-bold mb-2">¡Mensaje Enviado con Éxito!</h5>
                  <p className="mb-0">Nos pondremos en contacto contigo a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-dark">Nombre y Apellido</label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="Ej: Juan Pérez"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-dark">Empresa</label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="Ej: Nombre de tu empresa"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-dark">Email Corporativo</label>
                    <input
                      type="email"
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="correo@empresa.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-dark">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="+54 11 ..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-medium text-dark">Mensaje / Consulta</label>
                    <textarea
                      rows={4}
                      className="form-control bg-light border-0 fs-6"
                      placeholder="Cuéntanos tus necesidades de embalaje o transporte..."
                      required
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-itsma-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                    >
                      <BsSend />
                      Enviar Consulta
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
