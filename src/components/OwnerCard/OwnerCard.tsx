import React from 'react'
import styles from "./people.module.css"

function OwnerCard({ img, name, title, description, left }: { img: string, name: string, title: string, description: string, left: boolean }) {
    return (
        <div className={`d-flex align-items-center  justify-content-around flex-column  p-md-5 p-2 rounded-4  my-4 w-100 ${styles.container} ${left ? "flex-md-row" : "flex-md-row-reverse"}`}>
            <img src={img} alt={name} className={`rounded-5 ${styles.imageSize}`} />
            <div className='d-flex flex-column justify-items-start justify-content-center gap-4 gap-md-2 px-4 px-md-5 pt-4 pt-md-0 w-md-75 text-white'>
                <b className='fs-3'>{name}</b>
                <i className='fs-3'>{title}</i>
                <p className='fs-4'>{description}</p>
            </div>
        </div>
    )
}

export default OwnerCard