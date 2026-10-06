"use client";

import React, { useState } from "react";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsSend, BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/itsma.dgr@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: formData.nombre,
          Empresa: formData.empresa || "No especificada",
          Email: formData.email,
          Telefono: formData.telefono || "No especificado",
          Mensaje: formData.mensaje,
          _subject: `Nueva consulta Web ITSMA: ${formData.nombre}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback via Mailto if endpoint returns non-200
        triggerMailtoFallback();
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback via Mailto if network fails
      triggerMailtoFallback();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Consulta Web ITSMA: ${formData.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmpresa: ${formData.empresa}\nTeléfono: ${formData.telefono}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`
    );
    window.location.href = `mailto:itsma.dgr@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-5 pt-lg-5 mt-4 bg-white position-relative">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="red-line-accent mb-2" />
          <h2 className="display-6 font-serif fw-bold text-dark mb-2">Contáctanos</h2>
          <p className="text-secondary fs-6">
            ¿Tenés dudas o necesitás un presupuesto personalizado para el embalaje y logística de tu empresa? Escribinos directamente.
          </p>
        </div>

        <div className="row gy-5 align-items-start">
          {/* Left Column: Contact Info Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              <div className="p-4 rounded-4 border border-light bg-light shadow-sm d-flex align-items-center gap-3">
                <div className="p-3 rounded-circle bg-danger-subtle text-danger d-flex align-items-center justify-content-center" style={{ width: "54px", height: "54px" }}>
                  <BsTelephone className="fs-4 text-itsma-red" />
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Teléfono / WhatsApp</h6>
                  <p className="text-secondary mb-0">+54 11 9999-9999</p>
                </div>
              </div>

              <div className="p-4 rounded-4 border border-light bg-light shadow-sm d-flex align-items-center gap-3">
                <div className="p-3 rounded-circle bg-danger-subtle text-danger d-flex align-items-center justify-content-center" style={{ width: "54px", height: "54px" }}>
                  <BsEnvelope className="fs-4 text-itsma-red" />
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Correo Electrónico Directo</h6>
                  <a href="mailto:itsma.dgr@gmail.com" className="text-itsma-red fw-medium text-decoration-none mb-0">
                    itsma.dgr@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-4 border border-light bg-light shadow-sm d-flex align-items-center gap-3">
                <div className="p-3 rounded-circle bg-danger-subtle text-danger d-flex align-items-center justify-content-center" style={{ width: "54px", height: "54px" }}>
                  <BsGeoAlt className="fs-4 text-itsma-red" />
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Oficinas Centrales</h6>
                  <p className="text-secondary mb-0">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Styled Form Card */}
          <div className="col-lg-7">
            <div className="itsma-red-card p-4 p-md-5">
              <h4 className="fw-bold font-serif text-dark mb-4">Envíanos tu consulta</h4>

              {submitted ? (
                <div className="p-4 text-center rounded-4 bg-light border border-success-subtle my-3">
                  <BsCheckCircleFill className="text-success display-4 mb-3" />
                  <h5 className="fw-bold text-dark mb-2">¡Mensaje enviado con éxito!</h5>
                  <p className="text-secondary mb-3">
                    Tu consulta ha sido enviada a <strong>itsma.dgr@gmail.com</strong>. Te responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
                    }}
                    className="btn btn-outline-danger btn-sm rounded-pill px-4"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark small">Nombre y Apellido *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-light fs-6"
                      placeholder="Ej: Juan Pérez"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark small">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-light fs-6"
                      placeholder="Ej: Logística S.A."
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark small">Email Corporativo *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-light fs-6"
                      placeholder="correo@empresa.com"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-dark small">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-light border-light fs-6"
                      placeholder="+54 11 ..."
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold text-dark small">Mensaje / Consulta *</label>
                    <textarea
                      rows={4}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="form-control bg-light border-light fs-6"
                      placeholder="Cuéntanos tus necesidades de embalaje o transporte multimodal..."
                      required
                    />
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn text-white w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm"
                      style={{ background: "var(--itsma-red)", border: "none" }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                          Enviando consulta...
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