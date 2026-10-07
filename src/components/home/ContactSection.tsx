"use client";

import React, { useState } from "react";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsSend } from "react-icons/bs";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("Nombre", formData.nombre);
      fd.append("Empresa", formData.empresa || "No especificada");
      fd.append("Email", formData.email);
      fd.append("Telefono", formData.telefono || "No especificado");
      fd.append("Mensaje", formData.mensaje);
      fd.append("_subject", `Nueva consulta Web ITSMA: ${formData.nombre}`);
      fd.append("_captcha", "false");
      fd.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ajax/nicolasaddamo1@gmail.com", {
        method: "POST",
        body: fd,
      });

      if (!response.ok) {
        const subject = encodeURIComponent(`Consulta Web ITSMA: ${formData.nombre}`);
        const body = encodeURIComponent(
          `Nombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`
        );
        window.location.href = `mailto:itsma.dgr@gmail.com?subject=${subject}&body=${body}`;
      }
      setSubmitted(true);
    } catch {
      const subject = encodeURIComponent(`Consulta Web ITSMA: ${formData.nombre}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`
      );
      window.location.href = `mailto:itsma.dgr@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
                  <a href="mailto:itsma.dgr@gmail.com" className="text-secondary text-decoration-none mb-0">itsma.dgr@gmail.com</a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary-subtle text-primary p-3 rounded-circle">
                  <BsGeoAlt className="fs-4" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Oficinas Centrales</h6>
                  <p className="text-secondary mb-0">Av. Córdoba 873 5° A (entre Suipacha y Esmeralda), CABA</p>
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
                    <label className="form-label fw-medium text-dark">Nombre y Apellido *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="Ej: Juan Pérez"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-dark">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="Ej: Nombre de tu empresa"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-dark">Email Corporativo *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="correo@empresa.com"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium text-dark">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-0 fs-6"
                      placeholder="+54 11 ..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-medium text-dark">Mensaje / Consulta *</label>
                    <textarea
                      rows={4}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="form-control bg-light border-0 fs-6"
                      placeholder="Cuéntanos tus necesidades de embalaje o transporte..."
                      required
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-itsma-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <BsSend />
                          Enviar Consulta
                        </>
                      )}
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
