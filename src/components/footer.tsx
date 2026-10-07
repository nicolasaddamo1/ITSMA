
import React from 'react'
import Icon from './svgs/icon/icon'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import Link from 'next/link'

function Footer() {
    const links = [
        { name: "Inicio", path: "/" },
        { name: "Nosotros", path: "/Nosotros" },
        { name: "Servicios", path: "/Servicios" },
        // { name: "Clientes", path: "/Clientes" },
        { name: "Contacto", path: "/Contacto" },
    ]
    return (
        <footer className="px-4 w-100">
            <div className="row">
                <div className="mb-3 py-2 col-6 col-md-3">
                    <div className='w-25'>
                        <Icon />
                    </div>
                    <p className='py-2 w-75'>Detrás de cada operación hay una empresa que confía en nosotros.
                        Por eso, hacemos de cada desafío una solución.</p>
                </div>
                <div className="gap-2 mb-3 py-2 col-6 col-md-3">
                    <h5>Links</h5>
                    <ul className="flex-column nav">
                        {
                            links.map((link) =>
                                <li className="mb-2 nav-item" key={link.name}>
                                    <Link href={link.path} className="p-0 text-body-secondary nav-link">{link.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="gap-2 mb-3 py-2 col-6 col-md-3">
                    <h5>Contact us</h5>
                    <ul className="flex-column nav">
                        <li className="mb-2 nav-item">
                            <a href="mailto:itsma.dgr@gmail.com" className="text-body-secondary text-decoration-none">itsma.dgr@gmail.com</a>
                        </li>
                        <li className="d-flex gap-4 mb-2 nav-item">
                            {/* //! TODO change colors on hover */}
                            <a href="" className='bg-light shadow p-2 rounded-circle link-body-emphasis'>
                                <FaLinkedin size={25} />
                            </a>
                            <a href="" className='bg-light shadow p-2 rounded-circle link-body-emphasis'>
                                <FaTiktok size={25} />
                            </a>
                            <a href="https://www.instagram.com/itsma.solucionesintegrales/" target="_blank" rel="noopener noreferrer" className='bg-light shadow p-2 rounded-circle link-body-emphasis' title="Instagram @itsma.solucionesintegrales">
                                <RiInstagramFill size={25} />
                            </a>
                            {/* <FaInstagramSquare size={25} /> */}
                        </li>
                    </ul>
                </div>
                <div className="gap-2 mb-3 py-2 col-md-3">
                    <h5>Dirección</h5>
                    <p className="mb-2 small text-body-secondary fw-medium">Av. Córdoba 873 5° A (entre Suipacha y Esmeralda), CABA</p>
                    <iframe src="https://maps.google.com/maps?q=Av.+C%C3%B3rdoba+873%2C+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        className='w-100 rounded-3 shadow-sm border-0' height="200" allowFullScreen={false} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Mapa Av Córdoba 873"></iframe>
                </div>
            </div>
            <div className="my-4 py-4 border-top">
                <p className='text-center'>© 2025 Company, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer