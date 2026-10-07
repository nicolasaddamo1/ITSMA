import React from 'react'

function StepCard({ title, index, description }: { title: string, index: number, description: string }): React.ReactElement {
    return (
        <div style={{ maxHeight: "130px", minHeight: "130px", overflow: "hidden" }} className='d-flex flex-column gap-2 p-2 border border-secondary-light rounded w-100'>
            <div className='d-flex align-items-baseline gap-2' >
                <b className='text-itsma-red-gradient fs-5'>#{index}</b>
                <h6>{title}</h6>
            </div>
            <p className='text-secondary fs-6'>{description}</p>
        </div>
    )
}

export default StepCard