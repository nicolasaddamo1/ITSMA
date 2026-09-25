import React from 'react'
import Icon from './svgs/icon/icon'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

function Footer() {
    return (
        <footer className="px-4 w-100">
            <div className="row">
                <div className="mb-3 py-2 col-6 col-md-3">
                    <Icon />
                    <p className='py-2'>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias vitae repellendus! </p>
                </div>
                <div className="gap-2 mb-3 py-2 col-6 col-md-3">
                    <h5>Links</h5>
                    <ul className="flex-column nav">
                        <li className="mb-2 nav-item"><a href="#" className="p-0 text-body-secondary nav-link">Inicio</a></li>
                        <li className="mb-2 nav-item"><a href="#" className="p-0 text-body-secondary nav-link">Nosotros</a></li>
                        <li className="mb-2 nav-item"><a href="#" className="p-0 text-body-secondary nav-link">Servicios</a></li>
                        <li className="mb-2 nav-item"><a href="#" className="p-0 text-body-secondary nav-link">Clientes</a></li>
                        <li className="mb-2 nav-item"><a href="#" className="p-0 text-body-secondary nav-link">Contacto</a></li>
                    </ul>
                </div>
                <div className="gap-2 mb-3 py-2 col-6 col-md-3">
                    <h5>Contact us</h5>
                    <ul className="flex-column nav">
                        <li className="mb-2 nav-item">Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa esse iste corrupti quaerat fugit vel repellendus </li>

                        <li className="mb-2 nav-item">
                            + 99 9999-9999
                        </li>
                        <li className="d-flex gap-4 mb-2 nav-item">
                            {/* //! TODO change colors on hover */}
                            <a href="" className='bg-light shadow p-2 rounded-circle link-body-emphasis'>
                                <FaLinkedin size={25} />
                            </a>
                            <a href="" className='bg-light shadow p-2 rounded-circle link-body-emphasis'>
                                <FaFacebookSquare size={25} />
                            </a>
                            <a href="" className='bg-light shadow p-2 rounded-circle link-body-emphasis'>
                                <RiInstagramFill size={25} />
                            </a>
                            {/* <FaInstagramSquare size={25} /> */}
                        </li>
                    </ul>
                </div>
                <div className="gap-2 mb-3 py-2 col-md-3">
                    <h5>Dirección</h5>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7531.706751947722!2d-58.32175408682348!3d-34.693302890093946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a333005d7f9e91%3A0x605756da5db8ed8f!2sParrilla%20El%20tano!5e0!3m2!1ses-419!2sar!4v1790279798393!5m2!1ses-419!2sar" width="280" height="300" allowFullScreen={false} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
            <div className="my-4 py-4 border-top">
                <p className='text-center'>© 2025 Company, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer