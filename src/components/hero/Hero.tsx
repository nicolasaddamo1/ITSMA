import React from 'react'

function Hero({ url, title, subtitle }: { url: string, title: string, subtitle?: string }) {
    return (
        <header className="w-100 bg-white p-0 m-0 overflow-hidden position-relative">
            <div className="w-100 position-relative">
                {/* 1. Imagen con exactamente las mismas medidas y encuadre que HomeHero */}
                <img
                    src={url}
                    alt={title || ""}
                    className="w-100 d-block object-fit-cover"
                    style={{
                        width: "100%",
                        maxHeight: "670px",
                        minHeight: "480px",
                        objectPosition: "center",
                    }}
                />

                {/* 2. Capa de contraste central */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 55%, transparent 100%)",
                    }}
                />

                {/* 3. Textos centrados con estilo tipográfico idéntico a HomeHero */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center p-3 pointer-events-none">
                    <div className="d-flex flex-column align-items-center justify-content-center gap-2 mt-4">
                        <h1
                            className="display-6 fw-bold text-white mb-0 font-serif"
                            style={{
                                fontSize: "calc(1.3rem + 1.2vw)",
                                letterSpacing: "3px",
                                WebkitTextStroke: "1px #000000",
                                paintOrder: "stroke fill",
                            }}
                        >
                            {title}
                        </h1>

                        {subtitle && (
                            <p
                                className="fw-bold mb-0 text-uppercase text-white"
                                style={{
                                    fontSize: "calc(0.85rem + 0.5vw)",
                                    letterSpacing: "2px",
                                    WebkitTextStroke: "1px #000000",
                                    paintOrder: "stroke fill",
                                }}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero