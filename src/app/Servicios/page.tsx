"use client";

import Divider from '@/components/divider/Divider'
import Hero from '@/components/hero/Hero'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { servicesDataES, servicesDataEN } from '@/context/servicesTranslations'
import heroImage from "@/../assets/services photos/Carga de Lujo en el Aeropuerto.webp"
import TimeCard from '@/components/timeCard/TimeCard'
import { useLanguage } from '@/context/LanguageContext'

function Page() {
    const { language, t } = useLanguage()
    const services = language === "en" ? servicesDataEN : servicesDataES

    const serviceIds = ["acondicionamiento", "consultoria", "documentacion", "formacion", "embalajes", "etiquetas"]

    return (
        <article className="p-0 m-0">
            <Hero 
                title={t.serviciosPage.heroTitle} 
                subtitle={t.serviciosPage.heroSubtitle} 
                url={heroImage.src} 
            />
            <section>
                <div className='d-flex flex-column align-items-center gap-4 py-5'>
                    <Divider />
                    <h3>{t.serviciosPage.title}</h3>
                    <div className='d-flex flex-column align-items-center justify-content-center gap-5 pt-3'>
                        {services.map((service, i) => (
                            <ServiceCard
                                key={`${language}-${serviceIds[i] || i}`}
                                id={serviceIds[i] || `servicio-${i}`}
                                title={service.title}
                                description={service.description}
                                subtitle={service.subtitle}
                                subdescription={service.subDescription}
                                image={service.image}
                                i={i}
                                modalInfo={service.modalInfo}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section id="nuestro-proceso">
                <TimeCard />
            </section>
        </article>
    )
}

export default Page