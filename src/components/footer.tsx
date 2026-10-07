"use client";

import React from 'react'
import Icon from './svgs/icon/icon'
import { FaLinkedin, FaTiktok } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

function Footer() {
    const { t } = useLanguage()

    const links = [
        { name: t.nav.inicio, path: "/" },
        { name: t.nav.nosotros, path: "/Nosotros" },
        { name: t.nav.servicios, path: "/Servicios" },
        { name: t.nav.contacto, path: "/Contacto" },
    ]

    return (
        <footer className="px-4 w-100">
            <div className="row">
                <div className="mb-3 py-2 col-6 col-md-3">
                    <div className='w-25'>
                        <Icon />
                    </div>
                    <p className='py-2 w-75'>
                        {t.footer.motto}
                    </p>
                </div>
                <div className="gap-2 mb-3 py-2 col-6 col-md-3">
                    <h5>{t.footer.linksTitle}</h5>
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
                    <h5>{t.footer.contactTitle}</h5>
                    <ul className="flex-column nav">
                        <li className="mb-2 nav-item">
                            <a href="mailto:itsma.dgr@gmail.com" className="text-body-secondary text-decoration-none">itsma.dgr@gmail.com</a>
                        </li>
                        <li className="d-flex gap-4 mb-2 nav-item">
                            <a href="" className='bg-light shadow p-2 rounded-circle link-body-emphasis'>
                                <FaLinkedin size={25} />
                            </a>
                            <a href="" className='bg-light shadow p-2 rounded-circle link-body-emphasis'>
                                <FaTiktok size={25} />
                            </a>
                            <a href="https://www.instagram.com/itsma.solucionesintegrales/" target="_blank" rel="noopener noreferrer" className='bg-light shadow p-2 rounded-circle link-body-emphasis' title="Instagram @itsma.solucionesintegrales">
                                <RiInstagramFill size={25} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="gap-2 mb-3 py-2 col-md-3">
                    <h5>{t.footer.addressTitle}</h5>
                    <p className="mb-2 small text-body-secondary fw-medium">{t.footer.address}</p>
                    <iframe src="https://maps.google.com/maps?q=Av.+C%C3%B3rdoba+873%2C+Buenos+Aires&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        className='w-100 rounded-3 shadow-sm border-0' height="200" allowFullScreen={false} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Mapa Av Córdoba 873"></iframe>
                </div>
            </div>
            <div className="my-4 py-4 border-top">
                <p className='text-center'>{t.footer.copyright}</p>
            </div>
        </footer>
    )
}

export default Footer