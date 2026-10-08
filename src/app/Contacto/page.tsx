"use client";

import React, { useState } from "react";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsSend, BsCheckCircleFill } from "react-icons/bs";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

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

      const response = await fetch("https://formsubmit.co/ajax/itsma.dgr@mail.com", {
        method: "POST",
        body: fd,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        triggerMailtoFallback();
        setSubmitted(true);
      }
    } catch {
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
    window.location.href = `mailto:itsma.dgr@mail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="position-relative bg-white mt-4 py-5 pt-lg-5">
      <div className="py-lg-4 container">
        {/* Section Header */}
        <div className="mx-auto mb-5 max-w-2xl text-center">
          <div className="mb-2 red-line-accent" />
          <h2 className="mb-2 font-serif text-dark display-6 fw-bold">{t.contactoPage.title}</h2>
          <p className="text-secondary fs-6">
            {t.contactoPage.subtitle}
          </p>
        </div>

        <div className="align-items-start row gy-5">
          {/* Left Column: Contact Info Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center gap-3 bg-light shadow-sm p-4 border border-light rounded-4">
                <div className="d-flex align-items-center justify-content-center bg-danger-subtle p-3 rounded-circle text-danger" style={{ width: "54px", height: "54px" }}>
                  <BsTelephone className="text-itsma-red fs-4" />
                </div>
                <div>
                  <h6 className="mb-1 text-dark fw-bold">{t.contactoPage.phoneLabel}</h6>
                  <p className="mb-0 text-secondary">{t.contactoPage.phoneValue}</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 bg-light shadow-sm p-4 border border-light rounded-4">
                <div className="d-flex align-items-center justify-content-center bg-danger-subtle p-3 rounded-circle text-danger" style={{ width: "54px", height: "54px" }}>
                  <BsEnvelope className="text-itsma-red fs-4" />
                </div>
                <div>
                  <h6 className="mb-1 text-dark fw-bold">{t.contactoPage.emailLabel}</h6>
                  <a href={`mailto:${t.contactoPage.emailValue}`} className="mb-0 text-itsma-red text-decoration-none fw-medium">
                    {t.contactoPage.emailValue}
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 bg-light shadow-sm p-4 border border-light rounded-4">
                <div className="d-flex align-items-center justify-content-center bg-danger-subtle p-3 rounded-circle text-danger" style={{ width: "54px", height: "54px" }}>
                  <BsGeoAlt className="text-itsma-red fs-4" />
                </div>
                <div>
                  <h6 className="mb-1 text-dark fw-bold">{t.contactoPage.officeLabel}</h6>
                  <p className="mb-0 text-secondary">{t.contactoPage.officeAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Styled Form Card */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 itsma-red-card-nh">
              <h4 className="mb-4 font-serif text-dark fw-bold">{t.contactoPage.formTitle}</h4>

              {submitted ? (
                <div className="bg-light my-3 p-4 border border-success-subtle rounded-4 text-center">
                  <BsCheckCircleFill className="mb-3 text-success display-4" />
                  <h5 className="mb-2 text-dark fw-bold">{t.contactoPage.successTitle}</h5>
                  <p className="mb-3 text-secondary">
                    {t.contactoPage.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
                    }}
                    className="px-4 rounded-pill btn-outline-danger btn btn-sm"
                  >
                    {t.contactoPage.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label className="text-dark form-label fw-semibold small">{t.contactoPage.nameLabel}</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="bg-light border-light form-control form-control-lg fs-6"
                      placeholder={t.contactoPage.namePlaceholder}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="text-dark form-label fw-semibold small">{t.contactoPage.companyLabel}</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="bg-light border-light form-control form-control-lg fs-6"
                      placeholder={t.contactoPage.companyPlaceholder}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="text-dark form-label fw-semibold small">{t.contactoPage.emailFormLabel}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-light border-light form-control form-control-lg fs-6"
                      placeholder={t.contactoPage.emailPlaceholder}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="text-dark form-label fw-semibold small">{t.contactoPage.phoneFormLabel}</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="bg-light border-light form-control form-control-lg fs-6"
                      placeholder={t.contactoPage.phonePlaceholder}
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-dark form-label fw-semibold small">{t.contactoPage.messageLabel}</label>
                    <textarea
                      rows={4}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="bg-light border-light form-control fs-6"
                      placeholder={t.contactoPage.messagePlaceholder}
                      required
                    />
                  </div>

                  <div className="mt-4 col-12">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="d-flex align-items-center justify-content-center gap-2 shadow-sm py-3 rounded-pill w-100 text-white btn fw-bold"
                      style={{ background: "linear-gradient(225deg, #FD0004 0%, #A20A3A 70.67%)", border: "none" }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                          {t.contactoPage.sendingButton}
                        </>
                      ) : (
                        <>
                          <BsSend />
                          {t.contactoPage.sendButton}
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