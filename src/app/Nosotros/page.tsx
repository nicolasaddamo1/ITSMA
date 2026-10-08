"use client";

import Hero from "@/components/hero/Hero"
import styles from "./page.module.css"
import Valores from "@/components/valores/Valores"
import OwnerCard from "@/components/OwnerCard/OwnerCard"
import Divider from "@/components/divider/Divider"
import Certification from "@/components/certification/Certification"
import fernando from "@/../assets/owners photos/Fernando De Chiano.webp"
import marcelo from "@/../assets/owners photos/Marcelo Ricci.webp"
import natalia from "@/../assets/owners photos/Natalia Soledad Arata.webp"
import alberto from "@/../assets/owners photos/Luis Alberto Pascucci.webp"
import catamp from "@/../assets/certifications photos/catamp.webp"
import iata from "@/../assets/certifications photos/iata.webp"
import icao from "@/../assets/certifications photos/icao.webp"
import prefectura from "@/../assets/certifications photos/prefectura.webp"
import { useLanguage } from "@/context/LanguageContext"

function Nosotros() {
    const { t } = useLanguage()

    const ownerImages = [natalia.src, fernando.src, marcelo.src, alberto.src]
    const owners = t.nosotrosPage.owners.map((person, idx) => ({
        ...person,
        img: ownerImages[idx] || natalia.src,
    }))

    const certifications = [
        {
            url: catamp.src,
            title: "CATAMP"
        },
        {
            url: iata.src,
            title: "IATA"
        },
        {
            url: icao.src,
            title: "ICAO"
        },
        {
            url: prefectura.src,
            title: "Prefectura Naval"
        },
    ]

    return (
        <section className="p-0 m-0">
            <Hero 
                url="https://www.groups3.com/new/wp-content/uploads/2022/09/embalajes-logistica-1.jpg" 
                title={t.nosotrosPage.heroTitle} 
                subtitle={t.nosotrosPage.heroSubtitle} 
            />
            <div id="mision-vision" className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-around gap-3 py-4">
                {t.nosotrosPage.values.map((value) => (
                    <Valores key={value.title} title={value.title} text={value.text} />
                ))}
            </div>

            <div id="integrantes">
                {owners.map((person, i) => {
                    const left = (i % 2) === 0
                    return (
                        <OwnerCard 
                            key={person.name} 
                            img={person.img} 
                            name={person.name} 
                            title={person.title} 
                            description={person.description} 
                            left={left} 
                        />
                    )
                })}
            </div>

            <div id="como-lo-hacemos" className="d-flex flex-column gap-3 pt-5">
                <Divider />
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <b className="fs-3">{t.nosotrosPage.howWeDoIt.title}</b>
                    <p className={`py-5 text-secondary text-center fs-6 ${styles.pSize}`}>
                        {t.nosotrosPage.howWeDoIt.p1}
                        <br />
                        <br />
                        {t.nosotrosPage.howWeDoIt.p2}
                        <br />
                        <br />
                        <span>{t.nosotrosPage.howWeDoIt.p3}</span>
                    </p>
                </div>
            </div>

            <div id="certificaciones" className="d-flex flex-column gap-3 py-5">
                <Divider />
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <b className="fs-3">{t.nosotrosPage.certificationsTitle}</b>
                    <div className="d-flex flex-column flex-md-row align-items-start justify-content-around w-100">
                        {certifications.map((certif) => (
                            <Certification key={certif.title} url={certif.url} title={certif.title} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros