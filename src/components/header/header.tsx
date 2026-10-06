"use client"

import { usePathname } from "next/navigation"
import styles from "./header.module.css"
import Link from "next/link"

function Header() {
    const pathname = usePathname()

    const links = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/Nosotros" },
        { name: "Servicios", path: "/Servicios" },
        { name: "Contacto", path: "/Contacto" },
        // { name: "Clientes", path: "/Clientes" },
    ]
    return (
        <div className={`navbar navbar-expand-lg fixed-top ${styles.bgBlur}`}>
            <header className="d-flex flex-wrap justify-content-md-end justify-content-center px-4 py-2 container-fluid">
                <ul className="ms-auto nav nav-pills fs-6 fw-semibold">
                    {
                        links.map((link) => {
                            const isActive = pathname === link.path
                            return (
                                <li className="nav-item" key={link.name}>
                                    <Link href={link.path} className={`nav-link ${isActive ? styles.currentPageLink : "link-dark"}`} aria-current="page">{link.name}</Link>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </header>
        </div>
    )
}

export default Header