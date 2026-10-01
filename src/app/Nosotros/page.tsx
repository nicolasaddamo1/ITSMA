import Hero from "@/components/hero/Hero"
import styles from "./page.module.css"
import Valores from "@/components/valores/Valores"
import ImportanPeople from "@/components/ImportantPeople/ImportanPeople"

function Nosotros() {
    const values = [
        { title: "Mision", text: "Transformar la complejidad de la gestión de mercancías peligrosas en operaciones más seguras, eficientes y confiables, involucrándonos en la realidad de cada empresa, comprendiendo sus desafíos y desarrollando soluciones a medida." },
        { title: "Valor", text: "Consolidar a ITSMA como referente en soluciones integrales para la gestión de mercancías peligrosas, creando valor para nuestros clientes a través de soluciones a medida, innovación, conocimiento y acompañamiento cercano, y construyendo una empresa con capacidad de crecimiento y liderazgo regional." },
        { title: "Vision", text: "Ser la empresa referente en Latinoamérica en soluciones integrales para la gestión de mercancías peligrosas, reconocida por la capacidad de comprender cada operación, transformar los  desafíos en soluciones impulsando el crecimiento y la evolución de nuestros clientes, estableciendo un nuevo estándar de excelencia en la industria." }
    ]

    const importantPeople = [
        {
            img: "https://cdn-icons-png.flaticon.com/512/145/145974.png",
            name: "Fernando De Chiano",
            title: "Gerente de Desarrollo Comercial y Relaciones Estratégicas",
            description: "Responsable del desarrollo comercial, generación de nuevas oportunidades de negocio, vinculación estratégica y expansión de ITSMA en nuevos mercados."
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/145/145974.png",
            name: "Natalia Soledad Arata",
            title: "CEO & Directora General | Fundadora de ITSMA",
            description: "Responsable de la dirección estratégica, crecimiento y posicionamiento de ITSMA, liderando su visión y desarrollo integral."
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/145/145974.png",
            name: "Marcelo Ricci",
            title: "Director de Consultoría y Transformación Operativa",
            description: "Responsable del desarrollo y liderazgo de las soluciones de consultoría, optimización de procesos y metodología Lean de ITSMA."
        },
    ]
    return (
        <section>
            <Hero url="https://www.groups3.com/new/wp-content/uploads/2022/09/embalajes-logistica-1.jpg" title="Ayudando a empresas" subtitle="en su distribución" />
            <div className="d-flex justify-content-around py-4">
                {values.map((value) => <Valores key={value.title} title={value.title} text={value.text} />)}
            </div>

            {importantPeople.map((person, i) => {
                const left = (i % 2) == 0
                return (
                    <ImportanPeople key={person.name} img={person.img} name={person.name} title={person.title} description={person.description} left={left} />)
            })}
        </section>
    )
}

export default Nosotros