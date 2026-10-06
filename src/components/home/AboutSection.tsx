"use client";

import Link from "next/link";
import React from "react";
import { BsPlayCircleFill, BsArrowRight } from "react-icons/bs";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-5 bg-white border-top">
      <div className="container py-lg-4">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="red-line-accent mb-2" />
            <h2 className="display-6 font-serif fw-bold text-dark mb-4">
              Nosotros
            </h2>
            <p className="lead text-secondary mb-4 lh-base">
              Somos una consultora joven, con{" "}
              <span className="text-itsma-red fw-bold">
                experiencia y conocimiento
              </span>{" "}
              necesarios para comprender la realidad de cada empresa y{" "}
              <span className="text-itsma-red fw-bold">
                transformar sus desafíos en soluciones
              </span>
              .
            </p>

            <Link
              href="/Nosotros"
              className="text-itsma-red fw-semibold text-decoration-none d-inline-flex align-items-center gap-2 fs-6 hover-underline"
            >
              Conocé más de nosotros
              <BsArrowRight />
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src="/images/itsma_service_consulting.jpg"
                alt="Operaciones ITSMA"
                className="w-100 h-100 object-fit-cover"
                style={{ maxHeight: "380px" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle text-itsma-red opacity-90 cursor-pointer"
                style={{ transition: "transform 0.3s ease" }}
              >
                <BsPlayCircleFill size={64} className="bg-white rounded-circle p-1 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
