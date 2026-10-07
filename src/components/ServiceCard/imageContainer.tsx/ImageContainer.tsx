"use client"
import { useState } from "react";
import styles from "./imagemodal.module.css";

interface ModalSection {
    title?: string;
    text?: string;
    items?: string[];
}

interface IModalInfo {
    intro?: string;
    sections: ModalSection[];
    conclusion?: string;
}
interface ImageModalI {
    image: string;
    title: string;
    modalInfo: IModalInfo
}

function ImageModal({ image, title, modalInfo }: ImageModalI) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className={` shadow ${styles.imageContainer}`}
                onClick={() => setShowModal(true)}
            >
                <img
                    className={`rounded-2 ${styles.image} `}
                    src={image}
                    alt={title}
                />

                <div className={styles.overlay}>
                    <i className="bi bi-eye"></i>
                </div>
            </div>

            {showModal && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>

                        <img
                            className={styles.modalImage}
                            src={image}
                            alt={title}
                        />

                        <h3 className={`py-3 ${styles.textColor}`}>{title}</h3>

                        {modalInfo.intro && (
                            <p>{modalInfo.intro}</p>
                        )}

                        {modalInfo.sections.map((section, index) => (
                            <section key={index}>
                                {section.title && (
                                    <h4 className={`py-2 ${styles.textColor}`}>{section.title}</h4>
                                )}

                                {section.text && (
                                    <p>{section.text}</p>
                                )}

                                {section.items && (
                                    <ul>
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}

                        {modalInfo.conclusion && (
                            <p>
                                {modalInfo.conclusion}
                            </p>
                        )}

                    </div>
                </div>
            )}
        </>
    );
}

export default ImageModal;