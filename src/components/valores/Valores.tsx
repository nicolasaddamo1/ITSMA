import React from 'react'
import styles from "./valores.module.css"
function Valores({ title, text }: { title: string, text: string }) {
    return (
        <div className='w-75 w-md-25 text-center'>
            <h4 className={`py-2 font-bold fs-2 ${styles.title}`}>{title}</h4>
            <p className='text-secondary'>{text}</p>
        </div>
    )
}

export default Valores