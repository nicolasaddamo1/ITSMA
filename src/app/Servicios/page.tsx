import Divider from '@/components/divider/Divider'
import Hero from '@/components/hero/Hero'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import { services } from '../../../assets/servicesText/ServicesText'
import heroImage from "@/../assets/services photos/Carga de Lujo en el Aeropuerto.webp"
import TimeCard from '@/components/timeCard/TimeCard'


function Page() {

    return (
        <article>
            <Hero title="Acompañando a empresas " subtitle="en su distribución" url={heroImage.src} />
            <section>
                <div className='d-flex flex-column align-items-center gap-4 py-5'>
                    <Divider />
                    <h3>Servicios que ofrecemos</h3>
                    <div className='d-flex flex-column align-items-center justify-content-center gap-5 pt-3'>
                        {services.map((service, i) => {
                            const serviceIds = ["acondicionamiento", "consultoria", "documentacion", "formacion", "embalajes", "etiquetas"];
                            return (
                                <ServiceCard 
                                    key={service.title} 
                                    id={serviceIds[i] || `servicio-${i}`}
                                    title={service.title} 
                                    description={service.description} 
                                    subtitle={service.subtitle} 
                                    subdescription={service.subDescription} 
                                    image={service.image} 
                                    i={i} 
                                    modalInfo={service.modalInfo} 
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <section>
                <TimeCard />
            </section>
        </article>
    )
}

export default Page