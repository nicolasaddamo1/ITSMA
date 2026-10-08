"use client"

import React, { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import styles from "./header.module.css"
import Link from "next/link"
import { BsList, BsX } from "react-icons/bs"
import { useLanguage } from "@/context/LanguageContext"
import { ArgentinaFlag, UKFlag } from "@/components/flags/Flags"

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
    const router = useRouter()
    const { language, setLanguage, t } = useLanguage()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    // Lock body scroll when mobile drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isDrawerOpen])

    const links: MenuItem[] = [
        {
            name: t.nav.inicio,
            path: "/",
            subItems: [
                { name: t.nav.serviciosOfrecemos, path: "/#servicios" },
                { name: t.nav.metricas, path: "/#metricas" },
                { name: t.nav.valores, path: "/#valores" },
                { name: t.nav.nosotros, path: "/#nosotros" },
            ]
        },
        {
            name: t.nav.nosotros,
            path: "/Nosotros",
            subItems: [
                { name: t.nav.misionVision, path: "/Nosotros#mision-vision" },
                { name: t.nav.integrantes, path: "/Nosotros#integrantes" },
                { name: t.nav.comoLoHacemos, path: "/Nosotros#como-lo-hacemos" },
                { name: t.nav.certificaciones, path: "/Nosotros#certificaciones" },
            ]
        },
        {
            name: t.nav.servicios,
            path: "/Servicios",
            subItems: [
                { name: t.nav.acondicionamiento, path: "/Servicios#acondicionamiento" },
                { name: t.nav.consultoria, path: "/Servicios#consultoria" },
                { name: t.nav.documentacion, path: "/Servicios#documentacion" },
                { name: t.nav.formacion, path: "/Servicios#formacion" },
                { name: t.nav.embalajes, path: "/Servicios#embalajes" },
                { name: t.nav.etiquetas, path: "/Servicios#etiquetas" },
                { name: t.nav.nuestroProceso, path: "/Servicios#nuestro-proceso" },
            ]
        },
        {
            name: t.nav.contacto,
            path: "/Contacto"
        },
    ]

    const scrollToHash = (hash: string) => {
        const el = document.getElementById(hash);
        if (el) {
            const headerOffset = 85;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Smooth scroll to hash when navigating between routes
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const hash = window.location.hash.replace("#", "");
            const timer = setTimeout(() => {
                scrollToHash(hash);
            }, 120);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    const handleMainClick = (e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
        setIsDrawerOpen(false);
        if (targetPath === "/") {
            e.preventDefault();
            e.stopPropagation();
            if (typeof window !== "undefined") {
                if (window.location.hash) {
                    window.history.replaceState(null, "", "/");
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            if (pathname !== "/") {
                router.push("/", { scroll: false });
                setTimeout(() => {
                    if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }, 80);
            }
        } else if (pathname === targetPath) {
            e.preventDefault();
            e.stopPropagation();
            if (typeof window !== "undefined") {
                if (window.location.hash) {
                    window.history.replaceState(null, "", targetPath);
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    };

    const handleSubClick = (e: React.MouseEvent<HTMLAnchorElement>, fullPath: string) => {
        setIsDrawerOpen(false);
        const [targetPath, hash] = fullPath.split("#");
        if (pathname === targetPath) {
            e.preventDefault();
            e.stopPropagation();
            if (typeof window !== "undefined") {
                window.history.replaceState(null, "", fullPath);
                if (hash) {
                    scrollToHash(hash);
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }
        }
    };

    return (
        <>
            <div className={`navbar navbar-expand-lg fixed-top ${styles.bgBlur}`}>
                <header className="d-flex align-items-center justify-content-between justify-content-lg-end px-3 px-md-4 py-2 container-fluid">
                    {/* Desktop Navigation */}
                    <div className="d-none d-lg-flex align-items-center ms-auto">
                        <ul className="nav nav-pills fs-6 fw-semibold align-items-center mb-0">
                            {links.map((link) => {
                                const isActive = pathname === link.path
                                const hasSubItems = link.subItems && link.subItems.length > 0;

                                return (
                                    <li 
                                        className={`nav-item ${hasSubItems ? styles.dropdownContainer : ""}`} 
                                        key={link.name}
                                    >
                                        <div className="d-flex align-items-center">
                                            <Link 
                                                href={link.path} 
                                                scroll={false}
                                                className={`nav-link ${isActive ? styles.currentPageLink : "link-dark"}`} 
                                                aria-current="page"
                                                style={{ position: "relative", zIndex: 1060 }}
                                                onClick={(e) => handleMainClick(e, link.path)}
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
                                                        scroll={false}
                                                        className={styles.dropdownItem}
                                                        onClick={(e) => handleSubClick(e, subItem.path)}
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

                        {/* Desktop Language Selector Flags to the right of Contacto */}
                        <div className={styles.desktopFlagsContainer}>
                            <ArgentinaFlag 
                                active={language === "es"} 
                                onClick={() => setLanguage("es")} 
                                size={26} 
                            />
                            <UKFlag 
                                active={language === "en"} 
                                onClick={() => setLanguage("en")} 
                                size={26} 
                            />
                        </div>
                    </div>

                    {/* Responsive Mobile Hamburger Button (Right aligned) */}
                    <div className="d-lg-none ms-auto">
                        <button
                            type="button"
                            className={styles.hamburgerBtn}
                            onClick={() => setIsDrawerOpen(true)}
                            aria-label="Abrir menú de navegación"
                        >
                            <BsList size={34} />
                        </button>
                    </div>
                </header>
            </div>

            {/* Responsive Mobile Drawer matching requested screenshot */}
            {isDrawerOpen && (
                <>
                    <div 
                        className={styles.drawerBackdrop}
                        onClick={() => setIsDrawerOpen(false)}
                    />
                    <div className={styles.drawer}>
                        {/* Top Close Button */}
                        <div className={styles.drawerHeader}>
                            <button
                                type="button"
                                className={styles.drawerCloseBtn}
                                onClick={() => setIsDrawerOpen(false)}
                                aria-label="Cerrar menú"
                            >
                                <BsX size={26} />
                                <span>{t.nav.cerrar}</span>
                            </button>
                        </div>

                        {/* Vertical Nav Links */}
                        <ul className={styles.drawerNavList}>
                            {links.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            scroll={false}
                                            className={`${styles.drawerLink} ${isActive ? styles.drawerActiveLink : ""}`}
                                            onClick={(e) => handleMainClick(e, link.path)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Language Selection Flags placed below Contacto (stacked vertically) */}
                        <div className={styles.drawerFlagsContainer}>
                            <ArgentinaFlag 
                                active={language === "es"} 
                                onClick={() => {
                                    setLanguage("es");
                                    setIsDrawerOpen(false);
                                }} 
                                size={28} 
                            />
                            <UKFlag 
                                active={language === "en"} 
                                onClick={() => {
                                    setLanguage("en");
                                    setIsDrawerOpen(false);
                                }} 
                                size={28} 
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Header