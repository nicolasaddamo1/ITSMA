"use client"

import { usePathname } from "next/navigation"
import styles from "./header.module.css"
import Link from "next/link"

function Header() {
    const pathname = usePathname()

    const links = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/Nosotros" },
        { name: "Contacto", path: "/Contacto" },
    ]
    return (
        <div className={`navbar navbar-expand-lg fixed-top ${styles.bgBlur}`}>
            <header className="d-flex flex-wrap justify-content-center justify-content-md-end container-fluid py-2 px-4">
                <ul className="nav nav-pills fs-6 fw-semibold ms-auto">
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