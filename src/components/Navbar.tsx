"use client";

import React, { useState, useEffect } from "react";
import Icon from "./svgs/icon/icon";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky-top w-100 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-3"
      }`}
      style={{ zIndex: 1050, transition: "all 0.3s ease" }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/" className="d-flex align-items-center text-decoration-none">
          <div style={{ height: "42px", width: "auto" }}>
            <Icon />
          </div>
        </Link>

        <nav className="d-none d-md-flex align-items-center gap-4">
          <a href="#inicio" className="text-decoration-none text-dark fw-medium nav-link-hover">
            Inicio
          </a>
          <a href="#servicios" className="text-decoration-none text-dark fw-medium nav-link-hover">
            Servicios
          </a>
          <a href="#valores" className="text-decoration-none text-dark fw-medium nav-link-hover">
            Valores ITSMA
          </a>
          <a href="#nosotros" className="text-decoration-none text-dark fw-medium nav-link-hover">
            Nosotros
          </a>
          <a href="#clientes" className="text-decoration-none text-dark fw-medium nav-link-hover">
            Clientes
          </a>
        </nav>

        <div className="d-flex align-items-center gap-3">
          <a href="#contacto" className="btn btn-itsma-primary">
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}
