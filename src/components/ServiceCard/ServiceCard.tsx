import React from 'react'
interface ServiceCardI { title: string, description: string, subtitle?: string, subdescription?: string }

function ServiceCard({ title, description, subtitle, subdescription }: ServiceCardI) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            {subtitle && <h4>{subtitle}</h4>}
            {subdescription && <b>{subdescription}</b>}
        </div>
    )
}

export default ServiceCard