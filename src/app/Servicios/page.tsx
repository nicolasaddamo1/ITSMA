import Divider from '@/components/divider/Divider'
import Hero from '@/components/hero/Hero'
import React from 'react'





function Page() {

    const services = [
        { title: "Acondicionamiento y Optimizacion de carga", description: "Preparamos tu carga para el transporte.Optimizamos el proceso para que funcione mejor.Acondicionar mercancías peligrosas no es simplemente embalar.Es comprender el producto, identificar sus riesgos, aplicar correctamente la normativa y asegurar que cada elemento de la carga esté preparado para el transporte correspondiente.", subtitle: "", subDescription: "" },
        {
            title: "Consultoría y Asesoramiento Integral.", description: "Entendemos tu operación. Analizamos tus desafíos. Diseñamos la solución que necesitás. Las mercancías peligrosas forman parte de operaciones que requieren conocimiento técnico, cumplimiento normativo y decisiones correctas en cada etapa. En ITSMA no trabajamos con respuestas estándar.", subtitle: "", subDescription: ""
        },
        {
            title: "Documentación de Mercancías Peligrosas", description: "En ITSMA desarrollamos, revisamos y optimizamos la documentación de mercancías peligrosas para operaciones aéreas, marítimas y terrestres. Analizamos cada embarque, verificamos la coherencia de la información y trabajamos para que la documentación acompañe correctamente a la carga durante toda la operación.", subtitle: "Contamos con documentacion especial para cada tipo de operación:", subDescription: "Aérea Terrestre MarítimaNo nos limitamos a completar formularios analizamos la carga y verificamos que clasificación, embalaje, marcas, etiquetas y documentación sean coherentes entre sí." },
    ] 
    return (
        <article>
            <Hero title="Acompañando a empresas " subtitle="en su distribución" url="https://www.getac.com/content/dam/uploads/2022/10/fleetmgt_cover.png" />
            <section>
                <div>
                    <Divider />
                    <h3>Servicios que ofrecemos</h3>
                </div>
            </section>
        </article>
    )
}

export default Page