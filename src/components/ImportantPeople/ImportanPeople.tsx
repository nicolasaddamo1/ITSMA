import React from 'react'
import styles from "./people.module.css"

function ImportanPeople({ img, name, title, description, left }: { img: string, name: string, title: string, description: string, left: boolean }) {
    return (
        <div className={`d-flex justify-content-around  p-5 rounded-4  my-4 w-100 ${styles.container} ${left ? "flex-row" : "flex-row-reverse"}`}>
            <img src={img} alt={name} className={`rounded-5 ${styles.imageSize}`} />
            <div className='d-flex flex-column justify-items-start justify-content-center gap-2 px-5 w-75 text-white'>
                <b className='fs-3'>{name}</b>
                <i className='fs-3'>{title}</i>
                <p className='fs-4'>{description}</p>
            </div>
        </div>
    )
}

export default ImportanPeople