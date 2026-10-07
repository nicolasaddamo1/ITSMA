import Divider from '@/components/divider/Divider'
import Hero from '@/components/hero/Hero'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import acond from "@/../assets/services photos/Acond y optm.webp"
import pelig from "@/../assets/services photos/Doc mercancias Pelig.webp"
import asesor from "@/../assets/services photos/consult y asesor.webp"
import embalajes from "@/../assets/services photos/embalajes.webp"
import etiq from "@/../assets/services photos/etiq y marc.webp"
import formacion from "@/../assets/services photos/formacion.webp"
import { services } from '../../../assets/servicesText/ServicesText'



function Page() {

    // const services = [
    //     {
    //         title: "Acondicionamiento y Optimizacion de carga", description: "Preparamos tu carga para el transporte. Optimizamos el proceso para que funcione mejor. Acondicionar mercancías peligrosas no es simplemente embalar. Es comprender el producto, identificar sus riesgos, aplicar correctamente la normativa y asegurar que cada elemento de la carga esté preparado para el transporte correspondiente.", subtitle: "Nuestro trabajo no termina cuando la carga queda lista.", subDescription: "A través de herramientas y principios de Lean Manufacturing, analizamos cómo se desarrolla el proceso y detectamos oportunidades para ordenar, simplificar y optimizar la operación.", image: acond.src
    //     },
    //     {
    //         title: "Consultoría y Asesoramiento Integral.", description: "Entendemos tu operación. Analizamos tus desafíos. Diseñamos la solución que necesitás. Las mercancías peligrosas forman parte de operaciones que requieren conocimiento técnico, cumplimiento normativo y decisiones correctas en cada etapa.", subtitle: "En ITSMA no trabajamos con respuestas estándar.", subDescription: "Nos involucramos en la realidad de cada empresa, conocemos su operación, analizamos sus procesos y acompañamos a nuestros clientes en la búsqueda de soluciones concretas, adaptadas a sus necesidades.", image: asesor.src
    //     },
    //     {
    //         title: "Documentación de Mercancías Peligrosas", description: "En ITSMA desarrollamos, revisamos y optimizamos la documentación de mercancías peligrosas para operaciones aéreas, marítimas y terrestres. Analizamos cada embarque, verificamos la coherencia de la información y trabajamos para que la documentación acompañe correctamente a la carga durante toda la operación.", subtitle: "Contamos con documentacion especial para cada tipo de operación:", subDescription: "Aérea | Terrestre | Marítima. No nos limitamos a completar formularios analizamos la carga y verificamos que clasificación, embalaje, marcas, etiquetas y documentación sean coherentes entre sí.", image: pelig.src
    //     },
    //     {
    //         title: "Formación desde el inicio", description: "En ITSMA creemos que el conocimiento sobre mercancías peligrosas debe comenzar desde el inicio de la formación profesional.Por eso desarrollamos manuales y programas de capacitación basados en competencias(CBTA) para instituciones y escuelas de formación aeronáutica.", subtitle: "Diseñamos contenidos adaptados a cada perfil profesional:", subDescription: " Pilotos | TCP | Personal de rampa | Despachantes de aeronaves. No se trata solamente de aprender normativa. Buscamos desarrollar competencias reales para reconocer riesgos, tomar decisiones y actuar correctamente en situaciones concretas.", image: formacion.src
    //     },
    //     {
    //         title: "Embalajes 4G homologados", description: "En ITSMA ofrecemos cajas de cartón 4G homologadas para el transporte de mercancías peligrosas, acompañadas del asesoramiento necesario para elegir la solución adecuada para cada operación.", subtitle: "No todas las cargas necesitan la misma solución.", subDescription: "Elegí el embalaje adecuado para tu operación. En ITSMA te ayudamos a identificar qué embalaje corresponde según tu mercancía y el tipo de transporte. Tenemos el embalaje.Tenemos el conocimiento.Te ayudamos a elegir.", image: embalajes.src
    //     },
    //     {
    //         title: "Etiquetas y Marcas", description: "En ITSMA ofrecemos etiquetas, marcas y elementos de identificación para mercancías peligrosas, adaptados a las características de cada carga y al modo de transporte. Te ayudamos a identificar qué corresponde utilizar, cómo debe aplicarse y qué requisitos debe cumplir la carga antes de ser transportada.", subtitle: "No se trata solamente de entregar una etiqueta.", subDescription: "Analizamos tu operación para ayudarte a seleccionar las etiquetas y marcas que corresponden, evitando errores que puedan generar rechazos, demoras o reprocesos. Identificamos correctamente.Marcamos correctamente.Transportamos mejor.", image: etiq.src
    //     },
    // ]
    return (
        <article>
            <Hero title="Acompañando a empresas " subtitle="en su distribución" url="https://www.getac.com/content/dam/uploads/2022/10/fleetmgt_cover.png" />
            <section>
                <div className='d-flex flex-column align-items-center gap-4 pt-5'>
                    <Divider />
                    <h3>Servicios que ofrecemos</h3>
                    <div className='d-flex flex-column align-items-center justify-content-center gap-5 pt-3'>
                        {services.map((service, i) => <ServiceCard key={service.title} title={service.title} description={service.description} subtitle={service.subtitle} subdescription={service.subDescription} image={service.image} i={i} modalInfo={service.modalInfo} />)}
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Page