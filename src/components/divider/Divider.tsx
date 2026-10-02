import React from 'react'
import styles from "./Divider.module.css"
function Divider() {
    return (
        <div className='d-flex justify-content-center'>
            <span className={`${styles.divider}`}></span>
        </div>
    )
}

export default Divider