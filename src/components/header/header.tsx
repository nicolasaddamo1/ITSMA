"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import styles from "./header.module.css"
import Link from "next/link"

interface SubMenuItem {
    name: string;
    path: string;
}

interface MenuItem {
    name: string;
    path: string;
    subItems?: SubMenuItem[];
}

function Header() {
    const pathname = usePathname()
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const links: MenuItem[] = [
        {
            name: "Inicio",
            path: "/",
            subItems: [
                { name: "Servicios que ofrecemos", path: "/#servicios" },
                { name: "Métricas", path: "/#metricas" },
                { name: "Valores", path: "/#valores" },
                { name: "Nosotros", path: "/#nosotros" },
            ]
        },
        {
            name: "Nosotros",
            path: "/Nosotros",
            subItems: [
                { name: "Misión, Valor y Visión", path: "/Nosotros#mision-vision" },
                { name: "Integrantes", path: "/Nosotros#integrantes" },
                { name: "¿Cómo lo hacemos?", path: "/Nosotros#como-lo-hacemos" },
                { name: "Certificaciones", path: "/Nosotros#certificaciones" },
            ]
        },
        {
            name: "Servicios",
            path: "/Servicios",
            subItems: [
                { name: "Acondicionamiento y Optimización", path: "/Servicios#acondicionamiento" },
                { name: "Consultoría y Asesoramiento", path: "/Servicios#consultoria" },
                { name: "Documentación de Mercancías Peligrosas", path: "/Servicios#documentacion" },
                { name: "Formación desde el inicio", path: "/Servicios#formacion" },
                { name: "Embalajes 4G homologados", path: "/Servicios#embalajes" },
                { name: "Etiquetas y Marcas", path: "/Servicios#etiquetas" },
            ]
        },
        {
            name: "Contacto",
            path: "/Contacto"
        },
    ]

    return (
        <div className={`navbar navbar-expand-lg fixed-top ${styles.bgBlur}`}>
            <header className="d-flex flex-wrap justify-content-md-end justify-content-center px-4 py-2 container-fluid">
                <ul className="ms-auto nav nav-pills fs-6 fw-semibold align-items-center">
                    {links.map((link) => {
                        const isActive = pathname === link.path
                        const hasSubItems = link.subItems && link.subItems.length > 0;
                        const isOpen = openDropdown === link.name;

                        return (
                            <li 
                                className={`nav-item ${hasSubItems ? styles.dropdownContainer : ""}`} 
                                key={link.name}
                            >
                                <div className="d-flex align-items-center">
                                    <Link 
                                        href={link.path} 
                                        className={`nav-link ${isActive ? styles.currentPageLink : "link-dark"}`} 
                                        aria-current="page"
                                    >
                                        {link.name}
                                    </Link>
                                </div>

                                {hasSubItems && (
                                    <div className={styles.dropdownMenu}>
                                        {link.subItems!.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.path}
                                                className={styles.dropdownItem}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </header>
        </div>
    )
}

export default Header