import Hero from "@/components/hero/Hero"
import styles from "./page.module.css"
import Valores from "@/components/valores/Valores"
import OwnerCard from "@/components/OwnerCard/OwnerCard"
import Divider from "@/components/divider/Divider"
import Certification from "@/components/certification/Certification"
import fernando from "@/../assets/owners photos/Fernando De Chiano.webp"
import marcelo from "@/../assets/owners photos/Marcelo Ricci.webp"
import natalia from "@/../assets/owners photos/Natalia Soledad Arata.webp"
import catamp from "@/../assets/certifications photos/catamp.webp"
import iata from "@/../assets/certifications photos/iata.webp"
import icao from "@/../assets/certifications photos/icao.webp"
import prefectura from "@/../assets/certifications photos/prefectura.webp"
function Nosotros() {
    const values = [
        { title: "Mision", text: "Transformar la complejidad de la gestión de mercancías peligrosas en operaciones más seguras, eficientes y confiables, involucrándonos en la realidad de cada empresa, comprendiendo sus desafíos y desarrollando soluciones a medida." },
        { title: "Valor", text: "Consolidar a ITSMA como referente en soluciones integrales para la gestión de mercancías peligrosas, creando valor para nuestros clientes a través de soluciones a medida, innovación, conocimiento y acompañamiento cercano, y construyendo una empresa con capacidad de crecimiento y liderazgo regional." },
        { title: "Vision", text: "Ser la empresa referente en Latinoamérica en soluciones integrales para la gestión de mercancías peligrosas, reconocida por la capacidad de comprender cada operación, transformar los  desafíos en soluciones impulsando el crecimiento y la evolución de nuestros clientes, estableciendo un nuevo estándar de excelencia en la industria." }
    ]

    const owners = [
        {
            img: natalia.src,
            name: "Natalia Soledad Arata",
            title: "CEO & Directora General | Fundadora de ITSMA",
            description: "Responsable de la dirección estratégica, crecimiento y posicionamiento de ITSMA, liderando su visión y desarrollo integral."
        },
        {
            img: fernando.src,
            name: "Fernando De Chiano",
            title: "Gerente de Desarrollo Comercial y Relaciones Estratégicas",
            description: "Responsable del desarrollo comercial, generación de nuevas oportunidades de negocio, vinculación estratégica y expansión de ITSMA en nuevos mercados."
        },
        {
            img: marcelo.src,
            name: "Marcelo Ricci",
            title: "Director de Consultoría y Transformación Operativa",
            description: "Responsable del desarrollo y liderazgo de las soluciones de consultoría, optimización de procesos y metodología Lean de ITSMA."
        },
    ]
    const certifications = [
        {
            url: catamp.src,
            title: "catamp"
        },
        {
            url: iata.src,
            title: "iata"
        },
        {
            url: icao.src,
            title: "icao"
        },
        {
            url: prefectura.src,
            title: "prefectura"
        },

    ]
    return (
        <section className="mt-3 pt-5">

            <Hero url="https://www.groups3.com/new/wp-content/uploads/2022/09/embalajes-logistica-1.jpg" title="Ayudando a empresas" subtitle="en su distribución" />
            <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-around gap-3 py-4">
                {values.map((value) => <Valores key={value.title} title={value.title} text={value.text} />)}
            </div>

            {owners.map((person, i) => {
                const left = (i % 2) == 0
                return (
                    <OwnerCard key={person.name} img={person.img} name={person.name} title={person.title} description={person.description} left={left} />)
            })}
            <div className="d-flex flex-column gap-3 pt-5">
                <Divider />
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <b className="fs-3">¿Como lo hacemos?</b>
                    <p className={`py-5  text-secondary text-center fs-6 ${styles.pSize}`}>
                        No adaptamos tu operación a una solución. Diseñamos la solución para tu operación.
                        <br />
                        <br />
                        Analizamos cada necesidad y desarrollamos una propuesta exclusiva, integral y a medida, que reúne todo lo que necesitás para gestionar Mercancías Peligrosas: documentación, embalajes, seguros, capacitación y asesoramiento.
                        <br />
                        <br />
                        <span>Una solución única. Todo resuelto.</span>
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column gap-3 py-5">
                <Divider />
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <b className="fs-3">Certificaciones y más </b>
                    <div className="d-flex flex-column flex-md-row align-items-start justify-content-around w-100">
                        {certifications.map((certif) => <Certification key={certif.title} url={certif.url} title={certif.title} />)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros