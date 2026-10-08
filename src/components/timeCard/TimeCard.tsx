"use client";

import React from 'react'
import Divider from '../divider/Divider'
import StepCard from './stepCard/StepCard'
import styles from "./timeCard.module.css"
import { FaHome } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'
import { processStepsES, processStepsEN } from '@/context/servicesTranslations'

function TimeCard() {
    const { language, t } = useLanguage()
    const steps = language === "en" ? processStepsEN : processStepsES

    return (
        <div className='d-flex flex-column py-5'>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <Divider />
                <h3 className='pt-5'>{t.serviciosPage.processTitle}</h3>
                <h1><b>{t.serviciosPage.processSubtitle}</b></h1>
            </div>
            <section className='position-relative m-auto pt-4'>
                <div className={`${styles.timeLineMobileContainer} d-flex flex-column gap-4`}>
                    {steps.map((step) => (
                        <div key={step.step} className='bg-white m-auto w-75'>
                            <StepCard title={step.title} description={step.description} index={step.step} />
                        </div>
                    ))}
                    <div className={`${styles.line} ${styles.yAxisMobile}`}></div>
                    <div className='m-auto'>
                        <FaHome size={60} color='#cc2427' />
                    </div>
                </div>
                <div className={`${styles.timeLineContainer} `}>
                    <div className={`${styles.line} ${styles.yAxis} ${styles.topLine}`}></div>
                    <div className={`${styles.line} ${styles.yAxis} ${styles.bottomLine}`}></div>
                    <div className={`${styles.line} ${styles.yAxis} ${styles.topLine2}`}></div>
                    <div className={`${styles.line} ${styles.yAxis} ${styles.bottomLine2}`}></div>
                    <div className={`${styles.line} ${styles.yAxis} ${styles.topLine3}`}></div>
                    <div className={`${styles.line} ${styles.yAxis} ${styles.bottomLine3}`}></div>
                    <div className={`${styles.line} ${styles.xAxis}`}></div>
                    <div className={`${styles.cardContainer} ${styles.cardTop}`}>
                        <StepCard title={steps[0].title} description={steps[0].description} index={steps[0].step} />
                    </div>
                    <div className={`${styles.cardContainer} ${styles.cardTop1}`}>
                        <StepCard title={steps[2].title} description={steps[2].description} index={steps[2].step} />
                    </div>
                    <div className={`${styles.cardContainer} ${styles.cardTop2}`}>
                        <StepCard title={steps[4].title} description={steps[4].description} index={steps[4].step} />
                    </div>
                    <div className={`${styles.cardContainer} ${styles.cardBottom}`}>
                        <StepCard title={steps[1].title} description={steps[1].description} index={steps[1].step} />
                    </div>
                    <div className={`${styles.cardContainer} ${styles.cardBottom1}`}>
                        <StepCard title={steps[3].title} description={steps[3].description} index={steps[3].step} />
                    </div>
                    <div className={`${styles.cardContainer} ${styles.cardBottom2}`}>
                        <StepCard title={steps[5].title} description={steps[5].description} index={steps[5].step} />
                    </div>
                    <div className={` ${styles.homePosition}`}>
                        <FaHome size={60} color='#cc2427' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TimeCard