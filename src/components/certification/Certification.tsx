import React from 'react'

function Certification({ url, title }: { url: string, title: string }) {
    return (
        <div className='d-flex flex-column align-items-center gap-4'>
            <img src={url} alt={title} style={{ height: "150px" }} />
            <p className='w-75 text-center'>{title}</p>
        </div>
    )
}

export default Certification