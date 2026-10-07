import React from 'react'
import styles from "./servicecard.module.css"
import ImageModal from './imageContainer.tsx/ImageContainer'
interface ServiceCardI { title: string, description: string, subtitle?: string, subdescription?: string, image: string, i: number, modalInfo: any }

function ServiceCard({ title, description, subtitle, subdescription, image, i, modalInfo }: ServiceCardI) {
    const reverse = i % 2 == 0
    return (
        <div className={`d-flex  p-4  gap-4 flex-column-reverse  ${styles.serviceCard} ${reverse ? "flex-md-row-reverse" : "flex-md-row"}`}>
            <ImageModal image={image} title={title} modalInfo={modalInfo} />
            <div className={`d-flex flex-column align-items-start justify-content-center ${styles.textContainer}`}>
                <h4 className={`${styles.textColor}`}>{title}</h4>
                <p>{description}</p>
                {subtitle && <h6 className={`${styles.textColor}`}>{subtitle}</h6>}
                {subdescription && <p>{subdescription}</p>}
            </div>
        </div>
    )
}

export default ServiceCard