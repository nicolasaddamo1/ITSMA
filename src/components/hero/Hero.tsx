import React from 'react'
import styles from "./hero.module.css"
function Hero({ url, title, subtitle }: { url: string, title: string, subtitle?: string }) {
    return (
        <header className={styles.hero} >
            <img className={`w-100 ${styles.heroContainer} `} src={url} alt="" />
            <div className={`d-flex flex-column justify-content-center align-items-center font-weight-bold  ${styles.textHero}`}>
                <h1 className={`text-white `}>{title}</h1>
                {subtitle && <h2 className={`text-white`}>{subtitle}</h2>}
            </div>

        </header>
    )
}

export default Hero