import React from 'react'
import styles from "./valores.module.css"
function Valores({ title, text }: { title: string, text: string }) {
    return (
        <div className={` text-center ${styles.valor}`}>
            <h4 className={`py-2 font-bold fs-2 ${styles.title}`}>{title}</h4>
            <p className={`text-secondary  ${styles.description}`}>{text}</p>
        </div>
    )
}

export default Valores