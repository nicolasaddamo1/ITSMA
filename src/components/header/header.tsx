"use client"

import { usePathname } from "next/navigation"
import Icon from "../svgs/icon/icon"
import styles from "./header.module.css"
import Link from "next/link"

function Header() {
    const pathname = usePathname()

    const links = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/Nosotros" },
        { name: "Servicios", path: "/Servicios" },
        { name: "Clientes", path: "/Clientes" },
        { name: "Contacto", path: "/Contacto" },
    ]
    return (
        <div className={`navbar navbar-expand-lg sticky-top ${styles.bgBlur}`}>
            <header className="d-flex flex-wrap justify-content-center container-fluid">
                <div className={`d-flex align-items-center me-md-auto text-decoration-none  ${styles.sizeIcon}`}>
                    <Icon />
                </div>
                <ul className="nav nav-pills fs-6 fw-semibold">
                    {
                        links.map((link) => {
                            const isActive = pathname === link.path
                            return (
                                <li className="nav-item" key={link.name}>
                                    <Link href={link.path} className={`nav-link  ${isActive ? styles.currentPageLink : "link-secondary"}`} aria-current="page">{link.name}</Link>
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